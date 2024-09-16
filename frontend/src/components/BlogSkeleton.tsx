import { Avatar, Circle } from "./BlogCard"

export const BlogSkeleton = () => {
    return <div role="status" className="animate-pulse bg-color4">
        <div className="p-4 my-2 border-2 border-color2 rounded-xl bg-color4 text-color1 pb-4 cursor-pointer 2xl:w-[1120px] xl:w-[766px] lg:w-[968px] md:w-[713px] sm:w-[586px]">
                <div className="flex justify-left">
                    <div className="flex bg-color1 rounded-full text-color4">
                        <Avatar size={'small'} name="*" />
                    </div>
                    <div className="pl-2 text-color2 text-sm font-mono flex justify-center flex-col">username</div>
                    <div className="flex justify-center flex-col pl-2">
                        <Circle />
                    </div>
                    <div className="font-sans pl-2 mb-1 text-color2 text-sm flex justify-center flex-col">
                        1st January, 2024, 00:00:00
                    </div>
                </div>
                <div className="h-2 rounded-full mt-2 p-1.5 bg-gray-500 max-w-[700px]"></div>
                <div className="h-2 mt-2 p-1 rounded-full bg-gray-500 mb-2.5 max-w-[800px]"></div>
                <div className="h-2 mt-2 p-1 rounded-full bg-gray-500 mb-2.5 max-w-[900px]"></div>
                <div className="h-2 mt-2 p-1 rounded-full bg-gray-500 mb-2.5 max-w-[850px]"></div>
                <div className="text-color2 text-sm font-light pt-4">0 minute(s) read</div>
                
            </div>
    <span className="sr-only">Loading...</span>
</div>
}