import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar, formatDateString } from "./BlogCard"

export const FullBlog = ({ blog }: { blog: Blog }) => {
  const date = String(blog.date);

  return (
    <div className="bg-color4">
      <Appbar />
      <div className="flex justify-center bg-color4 text-color1">
        <div className="grid grid-cols-12 w-full px-10 pt-10 max-w-screen-xl">
          <div className="col-span-12 lg:col-span-8">
            <div className="text-5xl font-bold">{blog.title}</div>
            <div className="text-slate-500 pt-2">
              Published on {formatDateString(date)}
            </div>
            <div
              className="pt-6 text-justify leading-loose" 
              style={{
                paddingTop: "32px",
              }}
            >
              {blog.content}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 ml-10">
            <div className="text-slate-600 text-lg mt-10 lg:mt-0">Author</div>
            <div className="flex w-full">
              <div className="pr-4 flex flex-col justify-center">
                <Avatar size="big" name={blog.author.name || "Anonymous"} />
              </div>
              <div>
                <div className="text-xl font-bold">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="pt-2 text-slate-500">
                  Random catchphrase about the author's ability to grab the user's attention
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

