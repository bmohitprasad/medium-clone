import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface TextEditorProps {
    onChange: (content: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ onChange }) => {
    const [value, setValue] = useState("");

    const handleChange = (content: string) => {
        setValue(content);
        onChange(content);
    };

    return (
        <div className="w-full mt-2 ">
            <ReactQuill
                theme="snow"
                value={value}
                onChange={handleChange}
                className="w-full bg-gray-900 text-white rounded-xl !border-none "
                modules={{
                    toolbar: [
                        [{ header: [1, 2, 3, false] }],
                        ["bold", "italic", "underline", "strike"],
                        [{ list: "ordered" }, { list: "bullet" }],
                        ["blockquote", "code-block"],
                        [{ align: [] }],
                        [{ color: [] }, { background: [] }],
                        ["link", "image", "video"],
                        ["clean"],
                    ],
                }}
                formats={[
                    "header",
                    "bold",
                    "italic",
                    "underline",
                    "strike",
                    "list",
                    "bullet",
                    "blockquote",
                    "code-block",
                    "align",
                    "color",
                    "background",
                    "link",
                    "image",
                    "video",
                ]}
            />
        </div>
    );
};

export default TextEditor;
