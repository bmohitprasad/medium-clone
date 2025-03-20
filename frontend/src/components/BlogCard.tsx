import React from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

export interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
}

export const BlogCard: React.FC<BlogCardProps> = ({
    id,
    authorName,
    title,
    content,
    publishedDate,
}) => {
    const updatedDate = addTimeToDate(publishedDate, 5, 30);

    return (
        <Link
            to={`/blog/${id}`}
            className="transition-transform hover:scale-[1.02]"
        >
            <div className="p-5 bg-[#2A2A2A] shadow-md border border-[#444] rounded-xl hover:shadow-lg transition-all cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                    <Avatar size="small" name={authorName} />
                    <div className="text-sm font-medium text-[#EAEAEA]">
                        {authorName}
                    </div>
                    <span className="text-[#B0B0B0] text-xs">
                        {formatDateString(updatedDate.toISOString())} •{" "}
                        {time(updatedDate.toISOString())}
                    </span>
                </div>
                <div className="text-lg font-semibold text-[#F0F0F0]">
                    {title}
                </div>
                <p className="text-sm text-[#B0B0B0] mt-2 line-clamp-3" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.slice(0, 120) + "...") }}></p>
                <div className="text-xs text-[#888] mt-3">
                    {`${Math.ceil(content.length / 100)} min read`}
                </div>
            </div>
        </Link>
    );
};

function addTimeToDate(dateString: string, hours: number, minutes: number): Date {
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
        date.setHours(date.getHours() + hours);
        date.setMinutes(date.getMinutes() + minutes);
    }
    return date;
}

export function formatDateString(dateString: string) {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function time(dateString: string) {
    return new Date(dateString).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
}

export function Avatar({ name, size = "small" }: { name: string; size: "small" | "big" }) {
    return (
        <div
            className={`flex items-center justify-center rounded-full bg-[#444] text-[#EAEAEA] ${
                size === "small" ? "w-8 h-8 text-sm" : "w-12 h-12 text-lg"
            }`}
        >
            {name[0]}
        </div>
    );
}