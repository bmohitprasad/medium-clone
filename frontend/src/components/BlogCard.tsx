import React from 'react';
import { Link } from 'react-router-dom';

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
}: BlogCardProps) => {
    const addTimeToDate = (dateString: string, hours: number, minutes: number): Date => {
        const date = new Date(dateString);
        if (!isNaN(date.getTime())) {
            const originalHours = date.getHours();
            const originalMinutes = date.getMinutes();
            const newHours = originalHours + hours;
            const newMinutes = originalMinutes + minutes;

            date.setHours(newHours);
            date.setMinutes(newMinutes);

            // Check if adding time crosses into the next day
            if (newHours >= 24) {
                date.setDate(date.getDate() + 1); // Move to the next day
                date.setHours(newHours - 24); // Set hours for the next day
            }
        }
        return date;
    };

    const updatedDate = addTimeToDate(publishedDate, 5, 30);

    return (
        <Link to={`/blog/${id}`}>
            <div className="p-4 mt-2  mr-2 border border-color2 rounded-xl bg-color4 text-color1 pb-4 w-screen max-w-screen-md cursor-pointer">
                <div className="flex">
                    <div className="flex">
                        <Avatar size={'small'} name={authorName} />
                    </div>
                    <div className="pl-2 text-sm flex justify-center flex-col">{authorName}</div>
                    <div className="flex justify-center flex-col pl-2">
                        <Circle />
                    </div>
                    <div className="pl-2 text-slate-500 text-sm flex justify-center flex-col">
                        {formatDateString(updatedDate.toISOString())}, {time(updatedDate.toISOString())}
                    </div>
                </div>
                <div className="text-xl font-bold pt-2 font-serif">{title}</div>
                <div className="text-md font-light ">{content.slice(0, 100) + '...'}</div>
                <div className="text-slate-500 text-sm font-light pt-4">{`${Math.ceil(
                    content.length / 100
                )} minute(s) read`}</div>
            </div>
        </Link>
    );
};

export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-400"></div>;
}

export function Avatar({ name, size = 'small' }: { name: string; size: 'small' | 'big' }) {
    return (
        <div
            className={`relative inline-flex items-center justify-center overflow-hidden bg-color1 text-color4 rounded-full ${
                size === 'small' ? 'w-6 h-6' : 'w-10 h-10'
            }`}
        >
            <span className={`${size === 'small' ? 'text-xs' : 'text-md'} text-gray-600 dark:text-gray-300`}>
                {name[0]}
            </span>
        </div>
    );
}

function getOrdinalSuffix(day: number) {
    if (day > 3 && day < 21) return 'th'; // covers 11th to 20th
    switch (day % 10) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}

export function formatDateString(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const monthIndex = date.getMonth(); // Months are 0-based in JavaScript
    const year = date.getFullYear();

    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const dayWithSuffix = day + getOrdinalSuffix(day);
    const monthName = monthNames[monthIndex];

    return `${dayWithSuffix} ${monthName}, ${year}`;
}

export function time(dateString: string) {
    const timeString = dateString.split('T')[1].split('.')[0];
    return timeString;
}
