import { Link } from "react-router-dom"
import { Avatar} from "./BlogCard"
import { FaSignOutAlt } from 'react-icons/fa';

export const Appbar = () =>{

    const authorName = localStorage.getItem("name") || "Anonymous"
    
    return <div className="border-b-4 border-black rounded-b-2xl bg-slate-200 flex justify-between px-4 py-4">
        <Link to={`/blogs`} className="font-mono  flex flex-col justify-center cursor-pointer lg:text-xl">
                Medium
        </Link>
        <div className="flex justify-center">
            <Link to={`/publish`}>
                <button type="button" className=" mr-2 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center text-xs lg:text-sm">New +</button>
            </Link>
            <Avatar size={"big"} name = {authorName}/>
            <Link to={`/signin`} onClick={
                () => {
                    localStorage.removeItem('token'); 
                    sessionStorage.removeItem('token'); 
                  }
            }>
                <button type="button" className="pl-4 lg:pl-2 text-md">
                <FaSignOutAlt style={{ marginRight: '12px' }} />
                Logout
                </button>
            </Link>
        </div>
    </div>
}