import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signupInput, signinInput } from "@bmohitp/medium-commonfile";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();

userRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct"
        })
    }
    
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    try {
      const user = await prisma.user.create({
        data: {
          username: body.username,
          password: body.password,
          name: body.name
        }
      })
      const jwt = await sign({
        id: user.id
      }, c.env.JWT_SECRET);
      
      const tokenName = jwt
      const name = user.name
      const userId = user.id

      return c.json({
        tokenName,
        name,
        userId
      })
      
    } catch(e) {
      console.log(e);
      c.status(411);
      return c.text('Invalid')
    }
  })
  
  
userRouter.post('/signin', async (c) => {
    const body = await c.req.json();
    const { success } = signinInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs incorrect"
        })
    }

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    try {
      const user = await prisma.user.findFirst({
        where: {
          username: body.username,
          password: body.password,
        }
      })
      if (!user) {
        c.status(403);
        return c.json({
          message: "Incorrect credentials"
        })
      }
      const jwt = await sign({
        id: user.id
      }, c.env.JWT_SECRET);
  
      const tokenName = jwt
      const name = user.name
      const userId = user.id

      return c.json({
        tokenName,
        name,
        userId
      })
      
    } catch(e) {
      console.log(e);
      c.status(411);
      return c.text('Invalid')
    }
})

userRouter.post('/details', async (c) => {

  const body = await c.req.json();

  const userId = Number(body.userId)

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const user = await prisma.user.findFirst({

  where: {
    id: userId
  },

  select: {
    username: true,
    name: true,
    catchPhrase: true
  }
})

  return c.json({
    user
  })

})


userRouter.put('/update', async (c) => {
  const body = await c.req.json()

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  // Filter out undefined or empty fields
  const updateData = Object.fromEntries(
    Object.entries(body).filter(([key, value]) => 
      key !== 'id' && value !== undefined && value !== ''
    )
  );

  if (Object.keys(updateData).length === 0) {
    return c.json({ error: 'No valid fields to update' }, 400);
  }

  const user = await prisma.user.update({
    where: { id: body.id },
    data: updateData,
  });

  return c.json({
    user,
  })
})