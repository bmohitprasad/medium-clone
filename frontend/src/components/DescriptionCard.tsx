
export const DescriptionCard = () =>{
    return <div className="p-2 text-color1">

        <h3 className="text-xl font-semibold mt-4">Features:</h3>

        <div className="mt-2">
        <h4 className=" font-semibold mt-2">Signup and Signin Pages:</h4>
        <ul className="list-disc list-inside ml-3">
            <li>Users can create an account or log in with existing credentials.</li>
            <li>The Auth component is used to handle both signup and signin, depending on the context.</li>
            <li>The Quote component provides a motivational quote on the signup/signin page, visible on larger screens.</li>
        </ul>

        <h4 className=" font-semibold mt-2">Publish Page:</h4>
        <ul className="list-disc list-inside ml-3">
            <li>Authenticated users can create and publish new blog posts.</li>
            <li>A TextEditor component allows users to write their content.</li>
            <li>Posts include a title and body content, which are then stored in the PostgreSQL database.</li>
            <li>Upon publishing, users are redirected to view their blog post.</li>
        </ul>

        <h4 className=" font-semibold mt-2">Blogs Page:</h4>
        <ul className="list-disc list-inside ml-3">
            <li>Displays a list of all available blog posts.</li>
            <li>Each blog post is represented by a BlogCard component.</li>
            <li>If data is still loading, skeleton loaders (BlogSkeleton) are shown.</li>
        </ul>

        <h4 className=" font-semibold mt-2">Blog Page:</h4>
        <ul className="list-disc list-inside ml-3">
            <li>Displays the full content of a single blog post.</li>
            <li>Uses the FullBlog component to render the blog details.</li>
            <li>If data is still loading or unavailable, a skeleton loader (FullBlogSkeleton) is displayed.</li>
        </ul>
        </div>

        <h3 className=" font-semibold mt-4">Technologies Used:</h3>
        <div className="mt-2">
        <h4 className="font-semibold mt-2">Frontend:</h4>
        <ul className="list-disc list-inside ml-3">
            <li>React</li>
            <li>Tailwind CSS</li>
        </ul>

        <h4 className="font-semibold mt-2">Backend:</h4>
        <ul className="list-disc list-inside ml-3">
            <li>Node.js</li>
            <li>PostgreSQL</li>
        </ul>

        <h4 className="font-semibold mt-2">Framework:</h4>
        <ul className="list-disc list-inside ml-3">
            <li>Hono</li>
        </ul>

        <h4 className="font-semibold mt-2">Deployment:</h4>
        <ul className="list-disc list-inside ml-3 pb-2">
            <li>Wrangler</li>
        </ul>
        </div>
    </div>
}
