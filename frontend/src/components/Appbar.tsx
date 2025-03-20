import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";
import { useState } from "react";

export const Appbar = () => {
    const authorName = localStorage.getItem("name") || "Anonymous";
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center justify-between border-b-2 border-color2 bg-[#1E1E1E] text-[#EAEAEA] rounded-b-2xl px-6 py-4 shadow-md relative">
            <Link to={`/blogs`} className="absolute left-1/2 transform -translate-x-1/2 font-bebas-neue text-3xl lg:text-4xl cursor-pointer">
                Medium
            </Link>
            <div className="flex-1"></div>
            <div className="flex items-center space-x-4 relative">
                <div className="relative">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <Avatar size="big" name={authorName} />
                    </button>
                    {isOpen && (
                        <div className="absolute top-full right-0 mt-2 w-40 bg-[#2A2A2A] border border-[#444] rounded-xl hover:shadow-lg transition-all cursor-pointer text-[#F0F0F0] z-50">
                            <ul className="py-2">
                                <Link to={`/profile`}>
                                    <li className="px-4 py-2 hover:bg-gray-100  hover:text-gray-900 cursor-pointer">Profile</li>
                                </Link>
                                    <li className="px-4 py-2 hover:bg-gray-100  hover:text-gray-900 cursor-pointer">Settings</li>
                                <Link
                                    to={`/home`}
                                    onClick={() => {
                                        localStorage.removeItem("token");
                                        sessionStorage.removeItem("token");
                                    }}
                                >
                                    <li className="px-4 py-2 hover:bg-gray-100  hover:text-gray-900 cursor-pointer">Logout</li>
                                </Link>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
