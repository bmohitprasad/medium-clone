import { Avatar, Circle } from "./BlogCard"

export const BlogSkeleton = () => {
    return <div role="status" className="animate-pulse bg-color4">
        <div className="p-4 my-2 border-2 border-color2 rounded-xl bg-color4 text-color1 pb-4 min-w-full max-w-4xl w-full cursor-pointer">
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
                <div className="text-xl rounded-full font-bold mt-2 p-1 text-color4 font-sans">Be prepared for the worst while you are building a business at scale: Bizongo cofounder & </div>
                <div className="text-md mt-2 p-1 rounded-full font-light font-sans text-color4">The first four letters came as easy as ABC. Have a look. Series A in November 2016, Series B in May ...
                </div>
                <div className="text-color2 text-sm font-light pt-4">0 minute(s) read</div>
            </div>
    <span className="sr-only">Loading...</span>
</div>
}