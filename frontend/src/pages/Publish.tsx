import { Appbar } from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TextEditor from "../components/TextEditor";
import { Sidebar } from "../components/Sidebar";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handlePublish = async () => {
        if (!title.trim() || !description.trim()) {
            alert("Title and content cannot be empty!");
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog`,
                { 
                    title, 
                    content: description 
                },
                { 
                    headers: 
                        { 
                            Authorization: localStorage.getItem("token") 
                        } 
                }
            );
            navigate(`/blog/${response.data.id}`);
        } catch (error) {
            console.error("Error publishing blog:", error);
            alert("Failed to publish the blog. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-[#1E1E1E] h-screen text-[#EAEAEA] flex">
            <div>
            <Sidebar/>
            </div>
            <div className="flex-1">
                <Appbar />
                <div className="flex justify-center w-full h-screen p-8">
                    <div className="max-w-screen-lg w-full h-full">
                        <input
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            className="w-full bg-gray-900 text-white text-lg rounded-lg  p-3"
                            placeholder="Enter Blog Title..."
                        />
                        <TextEditor
                            onChange={(value) => setDescription(value)}
                        />
                        <div className="flex justify-between mt-4">
                            <button
                                type="button"
                                onClick={() => navigate(`/blogs`)}
                                className="text-white border-2 bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none font-medium rounded-full px-4 py-2 flex items-center"
                            >
                                Go back
                                <svg
                                    className="pl-1 w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={handlePublish}
                                disabled={loading}
                                type="submit"
                                className={`border-2 border-color1 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none font-medium rounded-full px-4 py-2 flex items-center ${
                                    loading ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                            >
                                {loading ? "Publishing..." : "Publish"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
