import { Appbar } from "./Appbar"

export const FullBlogSkeleton=()=>{
    return <div className="bg-color4 text-color1">
    <Appbar/>
    <div className="flex justify-center animate-pulse bg-color4 text-color1">
        <div className="grid grid-cols-12 w-full px-10 pt-200 max-w-screen-xl pt-10">
            <div className="col-span-12 lg:col-span-8"> 
        <div className="">
            <div className="h-4 bg-gray-500 rounded-full max-w-[600px] mb-4"></div>
            <div className="h-4 bg-gray-500 rounded-full max-w-[500px] mb-4"></div>
            <div className="h-4 bg-gray-500 rounded-full max-w-[700px] mb-2"></div>
        </div>
        <div className="pt-2">
            <div className="h-2 bg-gray-500 rounded-full max-w-[300px] mb-2.5"></div>
        </div>
        <div className="pt-6">
            <ContentSkeleton/>
        </div>
    </div>
    <div className="col-span-4 lg:grid-cols-0 ml-10 "> 
        <div className="text-slate-600 text-lg">
            Author
        </div>
        <div className="flex w-full">
            <div className="pr-4 flex flex-col justify-center">
                <AvatarSkeleton/>
            </div>
            <div>
                <div className="text-xl font-bold">
                    <div className="h-4 bg-gray-500 rounded-full max-w-[100px] mb-2"></div>
                </div>
                <div className="pt-2 text-slate-500"> 
                    Random catch phrase about the author's ability to grab the user's attention
                </div>
            </div>
        </div>
    </div>
    
</div>
</div>
    
    </div>
}

function AvatarSkeleton(){
    return <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
    </svg>
}

function ContentSkeleton(){
    return <div>
        <div className="h-2 bg-gray-500 rounded-full max-w-[700px] mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full max-w-[780px] mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full  mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full max-w-[500px] mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full max-w-[650px] mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full max-w-[700px] mb-8"></div>

        <div className="h-2 bg-gray-500 rounded-full max-w-[700px] mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full max-w-[780px] mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full  mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full max-w-[500px] mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full max-w-[650px] mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full max-w-[700px] mb-8"></div>

        <div className="h-2 bg-gray-500 rounded-full max-w-[700px] mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full max-w-[780px] mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full  mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full max-w-[500px] mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full max-w-[650px] mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full max-w-[700px] mb-8"></div>

        <div className="h-2 bg-gray-500 rounded-full max-w-[700px] mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full max-w-[780px] mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full  mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full max-w-[500px] mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full max-w-[650px] mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full max-w-[700px] mb-8"></div>

        <div className="h-2 bg-gray-500 rounded-full max-w-[700px] mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full max-w-[780px] mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full  mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full max-w-[500px] mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full max-w-[650px] mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full max-w-[700px] mb-8"></div>

        <div className="h-2 bg-gray-500 rounded-full max-w-[700px] mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full max-w-[780px] mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full  mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full max-w-[500px] mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full max-w-[650px] mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full max-w-[700px] mb-8"></div>
    </div>
}