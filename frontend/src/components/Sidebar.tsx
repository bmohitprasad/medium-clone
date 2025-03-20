import { useState } from "react";
import { FaHome, FaCog, FaSignOutAlt, FaBars, FaPen, FaBookOpen } from "react-icons/fa";

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            <div
                className={`fixed top-0 left-0 h-screen bg-[#2A2A2A] shadow-md border-r rounded-r-xl border-[#444] hover:shadow-lg text-white flex flex-col transition-all duration-300 ${
                    isOpen ? "w-64" : "w-20"
                }`}
            >
                {/* Keep the button in the same place */}
                <button
                    className="absolute top-5 left-5 text-white text-2xl focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FaBars />
                </button>

                <nav className="mt-16 flex flex-col">
                    {[
                        { icon: <FaHome />, label: "Home", link: "/blogs" },
                        { icon: <FaPen />, label: "Publish", link: "/publish" },
                        { icon: <FaBookOpen />, label: "My blogs", link: "/yourblogs" },
                        { icon: <FaCog />, label: "Settings", link: "/blogs" },
                        { icon: <FaSignOutAlt />, label: "Logout", link: "/home" },
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            className="flex items-center gap-3 px-5 py-3 hover:text-gray-400"
                        >
                            <span className="text-lg">{item.icon}</span>
                            <span className={`${isOpen ? "block" : "hidden"} transition-all duration-300`}>
                                {item.label}
                            </span>
                        </a>
                    ))}
                </nav>
            </div>
            <div className={`min-h-screen transition-all duration-300 ${isOpen ? "ml-64" : "ml-20"}`}>
            </div>
        </>
    );
};
