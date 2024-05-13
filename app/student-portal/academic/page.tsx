import React from "react";

export default function Page(){
    return <div className="sm:px-48 px-4 py-10">
        <h1 className="text-4xl mb-4">Academic</h1>
        <div>
            <h1 className="font-bold text-xl pt-4">Academic Calendar</h1>
            <ul className="text-[var(--primary-color)] list-disc list-inside">
                <li><a href="/">2023-2023</a></li>
                <li><a href="/">2023-2023</a></li>
                <li><a href="/">2023-2023</a></li>
            </ul>
        </div>
        <div>
            <h1 className="font-bold text-xl pt-4">Teaching and Learning Activities</h1>
            <h2 className="font-bold py-2">Innovative Teaching Methods</h2>
            <ul className="text-[var(--primary-color)] list-disc list-inside">
                <li>Personality development</li>
                <li>Leadership training</li>
                <li>Out-come-based education.</li>
                <li>Lesson Plan introduced in each semester in all institutions.</li>
            </ul>
            <h2 className="font-bold py-2">Student - centric learning</h2>
            <ul className="text-[var(--primary-color)] list-disc list-inside">
                <li>Problem-based learning</li>
                <li>Integrated teaching</li>
                <li>Case presentations</li>
                <li>Clinical meetings</li>
            </ul>
        </div>
        <div>
            <h1 className="font-bold text-xl pt-4">Community Activities</h1>
            Departmental Social Education and Service
        </div>
        <div className="flex items-center pt-4 gap-4">
            <h1 className="font-bold text-xl">List of Holidays</h1>
            <a className="text-[var(--primary-color)]" href="/">Download</a>
        </div>
        <div className="flex items-center pt-4 gap-4">
            <h1 className="font-bold text-xl">Graduate Attributes</h1>
            <a className="text-[var(--primary-color)]" href="/">Download</a>
        </div>
    </div>
}