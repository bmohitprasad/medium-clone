import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@bmohitp/medium-commonfile";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    });

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
            const jwt = response.data;
            const token = jwt.split('^')
            localStorage.setItem("token", token[0]);
            localStorage.setItem("name", token[1]);
            navigate("/blogs");
        } catch(e) {
            alert("Error while signing up")
        }
    }
    
    return <div className="bg-color4 text-color1 h-auto w-full flex justify-center flex-col">
        <div className="flex justify-center">
            <div className="ml-2 mr-2">
                <div className="rounded-3xl border-8 p-8 border-color2">
                    <div className="flex justify-center flex-col mb-10">
                        <div className="flex justify-center text-3xl font-bebas-neue">
                            Medium-Clone
                        </div>
                        <div className="flex justify-center max-w-sm text-xl text-left mt-4 mb-2 font-light">
                            This is a blogging platform that replicates the functionality and user experience of Medium, a popular online publishing platform. This website allows users to create, publish, and share their stories with a wide audience.
                        </div>
                        <div className="text-slate-500 flex justify-center max-w-sm text-md">
                            Made by Mohit
                        </div>
                    </div>
                    <div className="">
                    <div className="px-2 lg:px-16">
                    <div className="flex justify-center text-3xl font-extrabold pt-0 lg:pt-16">
                        {type === "signin" ? "Sign in" : "Create an Account" }
                    </div>
                    <div className="text-slate-500 flex justify-center">
                        {type === "signin" ? "Don't have an account?" : "Already have an account?" }
                        <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                            {type === "signin" ? "Sign up" : "Sign in"}
                        </Link>
                    </div>
                </div>
                <div className="pt-8 mr-2 ml-2">
                    {type === "signup" ? <LabelledInput label="Name" placeholder="Your Name" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value
                        })
                    }} /> : null}
                    <LabelledInput label="Email" placeholder="yourmail@email.com" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            username: e.target.value
                        })
                    }} />
                    <LabelledInput label="Password" type={"password"} placeholder="**********" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }} />
                    <button onClick={sendRequest} type="button" className="mt-8 w-full text-color1 bg-color3 border-2 border-color2 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 lg:mb-8">{type === "signup" ? "Sign up" : "Sign in"}</button>
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} className="bg-gray-50 border border-color1 text-color4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}
