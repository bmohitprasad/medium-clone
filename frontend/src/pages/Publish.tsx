import { Appbar } from "../components/Appbar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    return <div className="bg-color4 h-screen text-color1">
        <Appbar />
        <div className="flex justify-center w-full p-8"> 
            <div className="max-w-screen-lg w-full">
                <input onChange={(e) => {
                    setTitle(e.target.value)
                }} type="text" className="w-full bg-gray-50 border border-color1 text-color1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title" />

                <TextEditor onChange={(e) => {
                    setDescription(e.target.value)
                }} />
                <div className="flex justify-between">
                    <button onClick={async () => {
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                        title,
                        content: description
                    }, {
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    });
                    navigate(`/blog/${response.data.id}`)
                }} type="submit" className="mb-2 border-2 border-color1 text-color1 bg-color3 hover:bg-blue-700 hover:text-white hover:border focus:ring-4 focus:outline-none font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center me-2">
                    Publish
                </button>
                <button type="button" onClick = {() => {
                        navigate(`/blogs`)
                    }} className="mb-2 text-color1 border-2 bg-color3 hover:bg-gray-600 hover:text-white hover:border border-color2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center me-2">
                        Go back
                    <svg className="pl-1 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </button>

                </div>
                
            </div>
        </div>
    </div>
}


function TextEditor({ onChange }: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
    return <div className="mt-2">
        <div className="w-full mb-4">
            <div className="flex items-center justify-between">
            <div className="my-2 bg-white rounded-lg w-full">
                <label className="sr-only">Publish post</label>
                <textarea onChange={onChange} id="editor" rows={8} className="focus:ring-blue-500 focus:border-blue-500 block w-full px-0 text-sm text-gray-800 bg-white border border-black rounded-lg pl-2 pt-2" placeholder="Write an article..." required />
            </div>
        </div>
       </div>
    </div>
    
}
