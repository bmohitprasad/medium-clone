import { Appbar } from "./Appbar";
import { BlogCard } from "./BlogCard";
import { BlogSkeleton } from "./BlogSkeleton";
import { Quote } from "./Quote";
import { Sidebar } from "./Sidebar";
import { useBlogs, userBlogs } from "../hooks";

export const Blogs = ({ type }: { type: "bulk" | "user" }) => {
    const { loading, blogs } = type === "bulk" ? useBlogs() : userBlogs();

    return (
        <div className="bg-[#1E1E1E] min-h-screen text-[#EAEAEA] flex">
            <Sidebar />
            <div className="flex-1">
                <Appbar />
                <div className="flex flex-col lg:flex-row justify-center gap-8 p-6 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg">
                        {loading
                            ? [...Array(6)].map((_, i) => <BlogSkeleton key={i} />)
                            : blogs.map((blog) => (
                                  <BlogCard
                                      key={blog.id}
                                      //@ts-ignore
                                      id={blog.id}
                                      authorName={blog.author.name || "Anonymous"}
                                      title={blog.title}
                                      content={blog.content}
                                      publishedDate={String(blog.date)}
                                  />
                              ))}
                    </div>
                    <Quote />
                </div>
            </div>
        </div>
    );
};
