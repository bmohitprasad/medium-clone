import { SignupInput } from "@bmohitp/medium-commonfile";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

export const Home = () =>{

    const [showComponents, setShowComponents] = useState("signin");

    const handleClick = () => {
        setShowComponents( (mode) => ( mode === "signup" ? "signin" : "signup" ));
    };
    
    const navigate = useNavigate();
    
    const [postInputs, setPostInputs] = useState<SignupInput>({
            name: "",
            username: "",
            password: ""
        });

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");
        
    const sendRequest =  async function sendRequest() {

        setLoading(true)
        setError("")

        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${showComponents === "signup" ? "signup" : "signin"}`, postInputs);
            const { tokenName, name, userId } = response.data;

            localStorage.setItem("token", tokenName);
            localStorage.setItem("name", name);
            localStorage.setItem("userId", userId);
            navigate("/blogs");
        } catch(e: any) {
            if (e.response) {
                switch (e.response.status) {
                    case 400:
                        setError("Invalid credentials. Please check your input.");
                        break;
                    case 401:
                        setError("Unauthorized! Incorrect username or password.");
                        break;
                    case 500:
                        setError("Server error! Please try again later.");
                        break;
                    default:
                        setError(e.response.data.message || "Something went wrong.");
            }

            } else {
                setError("Something went wrong! Please try again.");
            }
            
        } finally {
            setLoading(false)
        }
    }
        
        

    return <div className="flex items-center justify-center min-h-screen bg-[#1E1E1E]">
    <div className="max-w-3xl w-full py-24 px-8 bg-[#2A2A2A] shadow-md border border-[#444] hover:shadow-lg transition-all cursor-pointer rounded-lg flex">
        <div className="w-1/2 p-8">
            <h2 className="text-2xl text-[#F0F0F0] font-bold">Welcome back.</h2>
            <p className="text-[#B0B0B0] mt-2">
                Sign in to access your personalized homepage, follow authors and topics you love, and clap for stories that matter to you.
            </p>
        </div>
        <div className="w-1/2 p-8 flex flex-col justify-center">
        <div>
            <div className="flex justify-center text-[#F0F0F0] text-xl font-bold">
                {"Sign"} {showComponents === "signin" ? "in": "up"} {"with email"}
            </div>
            {
                showComponents === "signup" ? <LabelledInput label="Name" placeholder="Your Name" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        name: e.target.value
                    })
                }} /> : null
            }    

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
            
            <div>
            <div className="flex justify-center mt-2 h-auto w-full rounded-xl bg-teal-600">
                <button 
                    onClick={sendRequest} 
                    className="text-white h-full w-full font-semibold p-2 flex items-center justify-center"
                    disabled={loading}
                >
                    {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                        showComponents === "signup" ? "Sign Up" : "Sign In"
                    )}
                </button>
            </div>
            <div className="flex justify-center">
                {error && <p className="mt-2 text-red-500">{error}</p>}
            </div>
            </div>


            <div className="flex justify-center m-2 text-[#B0B0B0]">
                OR
            </div>

            <button className="flex items-center justify-center w-full bg-white text-gray-700 border border-gray-300 rounded-md py-2 mb-3 shadow-sm hover:bg-gray-100">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" className="w-5 h-5 mr-2"/>
                Sign {
                        showComponents === "signin" ? "in " : "up " 
                } with Google
            </button>



            <div>
                <p className="text-[#B0B0B0] text-sm text-center mb-4">
                    {
                        showComponents === "signin" ? "Are you new to Medium? " : "Already have and account? "
                    }
                    <button onClick = {() => handleClick()} className="text-teal-600 font-semibold">
                    {
                        showComponents === "signin" ? "Sign up" : "Sign in"
                    }
                    </button>
                </p>                    
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
        <label className="text-[#B0B0B0] block mb-2 text-sm font-semibold pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} className="bg-gray-50 border border-color1 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}