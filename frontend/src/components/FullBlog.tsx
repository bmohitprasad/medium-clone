import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar, formatDateString } from "./BlogCard";
import DOMPurify from "dompurify";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  const safeHTML = DOMPurify.sanitize(blog.content);
  const date = String(blog.date);

  return (
    <div className="bg-[#1E1E1E] min-h-screen text-color1">
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 w-full px-6 md:px-10 pt-10 max-w-screen-xl">
          {/* Blog Content */}
          <div className="col-span-12 lg:col-span-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white">{blog.title}</h1>
            <p className="text-gray-400 pt-2">
              
              Published on {
                //@ts-ignore
              formatDateString(date)
              }
            </p>
            <div className="pt-6 text-justify leading-relaxed text-gray-300">
              <div
                dangerouslySetInnerHTML={{ __html: safeHTML }}
                className="prose prose-lg text-gray-300"
              />
            </div>
          </div>

          {/* Author Section */}
          <div className="col-span-12 lg:col-span-4 mt-8 lg:mt-0 lg:ml-10">
            <h2 className="text-gray-400 text-lg">Author</h2>
            <div className="flex items-center mt-4">
              <Avatar size="big" name={blog.author.name || "Anonymous"} />
              <div className="ml-4">
                <p className="text-xl font-semibold text-white">
                  {blog.author.name || "Anonymous"}
                </p>
                <p className="text-gray-500 text-sm">
                  Passionate writer & content creator ✍️
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
