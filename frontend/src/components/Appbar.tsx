import { Link } from "react-router-dom"
import { Avatar} from "./BlogCard"
import { FaSignOutAlt } from 'react-icons/fa';
import { useBlogs } from "../hooks";


export const Appbar = ()=>{

    const { blogs } = useBlogs();

    const authorName = blogs.length > 0 ? blogs[0].author.name : "Anonymous"
    
    return <div className="border-b-4 border-black rounded-b-2xl bg-slate-200 flex justify-between px-10 py-4">
        <Link to={`/blogs`} className="font-mono text-lg flex flex-col justify-center cursor-pointer">
                Medium
        </Link>
        <div className="flex justify-center">
            <Link to={`/publish`}>
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center ">New +</button>
            </Link>
            

            <Avatar size={"big"} name = {authorName}/>
            <Link to={`/signin`} onClick={
                () => {
                    localStorage.removeItem('authToken'); 
                    sessionStorage.removeItem('authToken'); 
                  }
            }>
                <button type="button" className="pl-4">
                <FaSignOutAlt style={{ marginRight: '12px' }} />
                Signout
                </button>
            </Link>
        </div>
    </div>
}