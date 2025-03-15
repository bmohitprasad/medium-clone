import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog"
import { FullBlogSkeleton } from "../components/FullBlogSkeleton"
import { Sidebar } from "../components/Sidebar"

export const Blog = () => {
    const { id } = useParams()
    const {loading, blog} = useBlog({
        id: id || ""
    })
    if(loading || !blog){
        return <div className="flex">
            <Sidebar/>
            <div className="flex-1">
                <FullBlogSkeleton/>
            </div>
        </div>
    }
    return <div className="flex">
        <Sidebar/>
        <div className="flex-1">
            <FullBlog blog={blog}/>
        </div>
    </div>
}