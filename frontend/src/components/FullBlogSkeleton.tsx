import { Appbar } from "./Appbar";

export const FullBlogSkeleton = () => {
  return (
    <div className="bg-[#111827] min-h-screen text-color1 animate-pulse">
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 w-full px-6 md:px-10 pt-10 max-w-screen-xl">
          <div className="col-span-12 lg:col-span-8">
            <div className="space-y-4">
              <div className="h-6 bg-gray-700 rounded-md max-w-[600px]"></div>
              <div className="h-6 bg-gray-700 rounded-md max-w-[500px]"></div>
              <div className="h-6 bg-gray-700 rounded-md max-w-[700px]"></div>
            </div>
            <div className="pt-4">
              <div className="h-4 bg-gray-700 rounded-md max-w-[300px]"></div>
            </div>
            <div className="pt-6">
              <ContentSkeleton />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 mt-8 lg:mt-0 lg:ml-10">
            <h2 className="text-gray-500 text-lg">Author</h2>
            <div className="flex items-center mt-4">
              <AvatarSkeleton />
              <div className="ml-4">
                <div className="h-5 bg-gray-700 rounded-md max-w-[120px]"></div>
                <div className="h-3 bg-gray-600 rounded-md max-w-[180px] mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function AvatarSkeleton() {
  return (
    <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
  );
}

function ContentSkeleton() {
  return (
    <div className="space-y-3">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className={`h-3 bg-gray-700 rounded-md ${
            i % 3 === 0 ? "max-w-[600px]" : "max-w-[750px]"
          }`}
        ></div>
      ))}
    </div>
  );
}
