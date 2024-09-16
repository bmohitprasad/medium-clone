import { Link } from "react-router-dom"
import { Avatar} from "./BlogCard"
import { FaSignOutAlt } from 'react-icons/fa';

export const Appbar = () =>{

    const authorName = localStorage.getItem("name") || "Anonymous"
    
    return <div className="border-b-2 border-color2 bg-color4 text-color1 rounded-b-2xl flex justify-between px-4 py-4"> 
    {/* bg-slate-200 */}
        <Link to={`/blogs`} className="font-bebas-neue text-2xl flex flex-col justify-center cursor-pointer lg:text-3xl">
                Medium
        </Link>
        <div className="flex justify-center">
            <Link to={`/publish`}>
                <button type="button" className="flex text-color1 hover:text-white bg-color3 hover:bg-green-600 border-2 border-color2 font-semibold rounded-full text-sm px-5 py-2.5 text-center text-xs">New +</button>
            </Link>
            <div className="flex ml-2">
                <Avatar size={"big"} name = {authorName}/>
            </div>
            <Link to={`/signin`} onClick={
                () => {
                    localStorage.removeItem('token'); 
                    sessionStorage.removeItem('token'); 
                  }
            }>
                <button type="button" className="flex bg-color3 hover:bg-gray-700 rounded-full ml-2 p-2 text-xs font-bold border-2 border-color2 text-color1">
                <div className="p-1"><FaSignOutAlt/></div>
                </button>
            </Link>
        </div>
    </div>
}
