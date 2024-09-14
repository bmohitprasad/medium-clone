import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton"
import { Quote} from "../components/Quote"
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const {loading, blogs} = useBlogs()

    if (loading){
        return<div>
            <Appbar/>
            <div className="flex justify-center">
                <div>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                </div>
            </div>
        </div>
    }

    return <div>
        <Appbar/>
        <div className="flex justify-center w-full flex-wrap lg:flex-nowrap">
            <div className="flex ml-4">
                <div>
                    {blogs.map(blog =>
                    <BlogCard
                        key={blog.id}
                        //@ts-ignore
                        id = {blog.id}
                        authorName={blog.author.name || "Anonymous"}
                        title={blog.title}
                        content={blog.content}
                        publishedDate={String (blog.date)}
                    />
                    )}
                </div>
            </div>
            <div className="flex h-1/2 m-4 sticky top-10 bg-white border-4 border-black">
                <Quote/>
            </div>
        </div>
    </div>
}
