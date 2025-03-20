import { userDetails } from "../hooks"


export interface UserDetails {
    username: string,
    name: string,
    catchPhrase: string
}

export const UserDetails: React.FC<UserDetails> = ({
    username,
    name,
    catchPhrase
}) =>{

    return( <div>
        <div>
            <div className="text-lg ">
                <div className="flex justify-between">
                    <div>
                        Email
                    </div>
                    <div>
                        {username}
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        Username
                    </div>
                    <div>
                        {name}
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        Catch Phrase
                    </div>
                    <div>
                        {catchPhrase}
                    </div>
                </div>
            </div>
                <div className="flex justify-between">
                    <div>
                        Password
                    </div>
                    <div>
                        change password
                    </div>
                </div>
            </div>
        </div>
    )
}
