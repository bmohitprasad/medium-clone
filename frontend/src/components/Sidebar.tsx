import { useState } from "react";
import { FaHome, FaCog, FaSignOutAlt, FaBars, FaPen, FaBookOpen } from "react-icons/fa";

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            <div
                className={`fixed top-0 left-0 h-screen bg-[#2A2A2A] shadow-md border-r rounded-r-xl border-[#444] hover:shadow-lg transition-all cursor-pointer text-white flex flex-col ${
                    isOpen ? "w-64 p-5 items-start" : "w-20 p-2 items-center"
                }`}
            >
                {/* Collapsing Button */}
                <button
                    className={`text-white text-2xl mb-6 focus:outline-none transition-all`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FaBars />
                </button>

                {/* Navigation Items */}
                <nav className="flex flex-col space-y-6 w-full">
                    <a
                        href="/blogs"
                        className={`flex items-center w-full ${isOpen ? "space-x-2" : "justify-center"} hover:text-gray-400`}
                    >
                        <FaHome />
                        {isOpen && <span>Home</span>}
                    </a>

                    <a
                        href="/publish"
                        className={`flex items-center w-full ${isOpen ? "space-x-2" : "justify-center"} hover:text-gray-400`}
                    >
                        <FaPen />
                        {isOpen && <span>Publish</span>}
                    </a>

                    <a
                        href="/yourblogs"
                        className={`flex items-center w-full ${isOpen ? "space-x-2" : "justify-center"} hover:text-gray-400`}
                    >
                        <FaBookOpen />
                        {isOpen && <span>My Blogs</span>}
                    </a>

                    <a
                        href="/settings"
                        className={`flex items-center w-full ${isOpen ? "space-x-2" : "justify-center"} hover:text-gray-400`}
                    >
                        <FaCog />
                        {isOpen && <span>Settings</span>}
                    </a>

                    <a
                        href="/home"
                        className={`flex items-center w-full ${isOpen ? "space-x-2" : "justify-center"} hover:text-gray-400`}
                    >
                        <FaSignOutAlt />
                        {isOpen && <span>Logout</span>}
                    </a>
                </nav>
            </div>
            <div className={`min-h-screen transition-all duration-300 ${isOpen ? "ml-64" : "ml-20"}`}>
            </div>
        </>
    );
};
