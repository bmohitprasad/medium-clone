import { Appbar } from "../components/Appbar"
import { Sidebar } from "../components/Sidebar"
import { userDetails } from "../hooks"
import { UserDetails } from "../components/UserDetails"

export const Profile = () =>{

    const { loading, details } = userDetails();

    return <div className="flex">
        <Sidebar/>
        <div className="flex-1">
            <Appbar/>
            <div className="flex justify-around text-[#EAEAEA] w-full">
                <div className="flex justify-end mt-4 flex-col w-full ml-4 mr-4 md:ml-32 sm:ml-16 lg:mr-96 sm:mr-32">
                    <div className="max-w-2xl">
                        <div className="text-4xl font-bold mb-4">
                            Your profile
                        </div>
                        <div>
                        {loading ? (
                                    <div>Loading...</div>
                                ) : details ? (
                                    <UserDetails
                                        username={details.username}
                                        name={details.name}
                                        catchPhrase={details.catchPhrase}
                                    />
                                ) : (
                                    <div>No user details found.</div>
                                )}
                        </div>
                    <div>
                        <button>

                        </button>
                    </div>
                </div>
                <div className="flex">
                </div>
            </div>
        </div>
    </div>
    </div>
}