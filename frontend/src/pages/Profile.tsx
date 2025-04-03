import { Appbar } from "../components/Appbar";
import { Sidebar } from "../components/Sidebar";
import { userDetails } from "../hooks";
import { LabelledInputType } from "./Home";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
    const userId = localStorage.getItem("userId");
    const { loading, details } = userDetails({ userId });

    const navigate = useNavigate();

    function handler() {
        navigate("/edit")
    }

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Appbar />
                <div className="flex justify-around text-[#EAEAEA] w-full">
                    <div className="flex justify-end mt-4 flex-col w-full ml-4 mr-4 md:ml-32 sm:ml-16 lg:mr-96 sm:mr-32">
                        <div className="max-w-2xl">
                            <div className="text-4xl font-bold mb-4">Your Profile</div>
                            <div className="text-lg">

                            {loading ? <div>
                                loading...
                            </div> : 
                            <div>
                                <div className="flex justify-between">
                                    <div className="font-semibold">
                                        Email
                                    </div>
                                    <div>
                                        {details?.username}
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-semibold">
                                        Name
                                    </div>
                                    <div>
                                        {details?.name}
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-semibold">
                                        Catch phrase
                                    </div>
                                    <div>
                                        {details?.catchPhrase}
                                    </div>
                                </div>
                                <div>
                                    <button 
                                    onClick={handler}
                                    className="mt-4 text-black font-semibold bg-white px-2 border rounded-lg"
                                    >
                                        Edit details
                                    </button>
                                </div>
                            </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export function LabelledInput({ placeholder, onChange, type }: LabelledInputType) {
    return (
        <input
            onChange={onChange}
            type={type || "text"}
            className="bg-gray-50 border border-color1 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={placeholder}
            required
        />
    );
}