import { Auth } from "../components/Auth"
import { DescriptionCard } from "../components/DescriptionCard"


export const Signin = () => {
    return <div className="">
        <div className="bg-slate-200 h-full w-full mr-2 flex justify-center grid grid-cols-1 lg:grid-cols-2">
            <div className="mt-4">
                <Auth type="signin"/>
            </div>
            <div className="flex bg-white rounded-2xl border-8 border-gray-700 ml-4 mt-4 mb-4 mr-4 lg:mr-16">
                <DescriptionCard/>
            </div>
        </div>
        
    </div>
}
