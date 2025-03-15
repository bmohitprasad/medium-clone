
export const BlogSkeleton = () => {
    return (
        <div role="status" className="animate-pulse">
            <div className="p-5 bg-[#1E1E1E] shadow-lg border border-[#333] rounded-xl cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-[#444] rounded-full"></div>
                    <div className="w-24 h-4 bg-[#444] rounded"></div>
                    <div className="w-40 h-4 bg-[#444] rounded"></div>
                </div>
                <div className="h-6 bg-[#444] rounded w-3/4"></div>
                <div className="h-4 bg-[#444] rounded mt-2 w-full"></div>
                <div className="h-4 bg-[#444] rounded mt-2 w-5/6"></div>
                <div className="h-4 bg-[#444] rounded mt-2 w-4/6"></div>
                <div className="h-4 bg-[#666] rounded mt-3 w-24"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    );
};
