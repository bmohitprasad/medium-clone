import { Hono } from "hono"

export const homeRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    }
}>()

homeRouter.get('/', async (c) => {
    
})