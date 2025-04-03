import axios from "axios";
import { BACKEND_URL } from "../config";
import { useState } from "react";
import z from "zod";
import { Appbar } from "../components/Appbar";
import { Sidebar } from "../components/Sidebar";
import { LabelledInputType } from "./Home";
import { useNavigate } from "react-router-dom";

export const Edit = () => {

    const userId = localStorage.getItem("userId");

    const [putInputs, setPutInputs] = useState<UpdateUserInput>({
        id: Number(userId),
        name: "",
        email: "",
        password: "",
        catchPhrase: ""
    });

    const navigate = useNavigate();

    async function sendRequest() {
        try {
            await axios.put(`${BACKEND_URL}/api/v1/user/update`, putInputs);
            alert("Profile updated successfully!");
            navigate("/profile")
        } catch (error) {
            alert("Error updating profile.");
        }
    }

    function handler () {
        navigate("/profile")
    }

    return <div>
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Appbar />
                <div className="flex justify-around text-[#EAEAEA] w-full"></div>
                    <div className="flex justify-end mt-4 flex-col text-[#EAEAEA] ml-4 mr-4 md:ml-32 sm:ml-16 lg:mr-96 sm:mr-32">
                        <div className="max-w-2xl">
                            <div className="text-4xl font-bold mb-8">Edit Profile</div>
                            <div>
                            <div>
                                <div className="flex justify-between mb-2 items-center">
                                    <div className="font-semibold text-lg">
                                        Email
                                    </div>
                                    <div className="">
                                        <LabelledInput label="Email" type={"email"} placeholder="newmail@mail.com" onChange={(e) => {
                                            setPutInputs({
                                                ...putInputs,
                                                email: e.target.value
                                            })
                                        }} />
                                    </div>
                                </div>
                                <div className="flex justify-between mb-2  items-center">
                                    <div className="font-semibold text-lg">
                                        Name
                                    </div>
                                    <div className="">
                                        <LabelledInput label="Name" type={"name"} placeholder="New name" onChange={(e) => {
                                            setPutInputs({
                                                ...putInputs,
                                                name: e.target.value
                                            })
                                        }} />
                                    </div>
                                </div>
                                <div className="flex justify-between mb-2 items-center">
                                    <div className="font-semibold text-lg">
                                        Catch phrase
                                    </div>
                                    <div className="">
                                        <LabelledInput label="catch phrase" type={"phrase"} placeholder="New catch phrase" onChange={(e) => {
                                            setPutInputs({
                                                ...putInputs,
                                                catchPhrase: e.target.value
                                            })
                                        }} />
                                    </div>
                                </div>
                                <div className="flex justify-between mb-2 items-center">
                                    <div className="font-semibold text-lg">
                                        Password
                                    </div>
                                    <div className="">
                                        <LabelledInput label="Password" type={"password"} placeholder="***********" onChange={(e) => {
                                            setPutInputs({
                                                ...putInputs,
                                                password: e.target.value
                                            })
                                        }} />
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <button
                                    className="mt-4 text-black font-semibold bg-white py-1 px-2 border rounded-lg"
                                    onClick={sendRequest}
                                    >
                                        Save changes
                                    </button>
                                    <button
                                    onClick={handler}
                                    className="mt-4 text-black font-semibold bg-white px-2 border rounded-lg"
                                    >
                                        go back
                                    </button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
}


export const updateUserInput = z.object({
    id: z.number(),
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional(),
    catchPhrase: z.string().optional(),
});

export type UpdateUserInput = z.infer<typeof updateUserInput>;

function LabelledInput({ placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <input onChange={onChange} type={type || "text"} className="bg-gray-50 border border-color1 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}