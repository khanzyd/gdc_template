import React from "react";

export default function Page(){
    return <div className="sm:px-48 px-4 py-10">
        <h1 className="text-4xl mb-4">Students Achievements</h1>
        <ul className="pl-4 list-disc text-[var(--primary-color)]">
            <li>
                <a className="hover:underline" href="/">Students Awards 2019-2024</a>
            </li>
            <li>
                <a className="hover:underline" href="/">Students Achievements in Various Examination</a>
            </li>
            <li>
                <a className="hover:underline" href="/">Students Going for Higher Education</a>
            </li>
        </ul>
    </div>
}