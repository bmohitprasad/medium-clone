import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";
import { FaSignOutAlt } from "react-icons/fa";

export const Appbar = () => {
    const authorName = localStorage.getItem("name") || "Anonymous";

    return (
        <div className="border-b-2 border-color2 bg-[#1E1E1E] text-[#EAEAEA] rounded-b-2xl flex justify-center px-6 py-4 shadow-md">
            <Link to={`/blogs`} className="font-bebas-neue text-3xl lg:text-4xl cursor-pointer">
                Medium
            </Link>

            {/* <div className="flex items-center">
                <Link to={`/publish`}>
                    <button
                        type="button"
                        className="flex items-center text-[#EAEAEA] hover:text-white bg-[#4CAF50] hover:bg-green-700 border-2 border-[#888] font-semibold rounded-full text-sm px-5 py-2.5 transition-all"
                    >
                        New +
                    </button>
                </Link>
                <div className="ml-3">
                    <Avatar size="big" name={authorName} />
                </div>

                <Link
                    to={`/home`}
                    onClick={() => {
                        localStorage.removeItem("token");
                        sessionStorage.removeItem("token");
                    }}
                >
                    <button
                        type="button"
                        className="flex items-center bg-[#444] hover:bg-gray-700 rounded-full ml-3 p-2 border-2 border-[#888] text-[#EAEAEA] transition-all"
                    >
                        <FaSignOutAlt className="text-lg" />
                    </button>
                </Link>
            </div> */}
        </div>
    );
};
