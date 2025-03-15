export const DescriptionCard = () => {
    return <div className="p-2 text-color1 max-w-xs mx-auto text-xs">

        <h3 className="text-md font-semibold">Features:</h3>

        <ul className="list-disc list-inside ml-2 mt-1">
            <li>Signup & Signin with Auth component.</li>
            <li>Publish blogs with a TextEditor.</li>
            <li>View all blogs on the Blogs page.</li>
            <li>Read full blogs with the FullBlog component.</li>
        </ul>

        <h3 className="text-md font-semibold mt-2">Technologies:</h3>
        <ul className="list-disc list-inside ml-2">
            <li>React, Tailwind CSS</li>
            <li>Node.js, PostgreSQL</li>
            <li>Hono framework</li>
            <li>Deployed via Wrangler</li>
        </ul>
    </div>
}
