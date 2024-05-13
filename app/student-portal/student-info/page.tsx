import React from "react";

export default function Page(){
    return <div className="sm:px-48 px-4 py-10">
        <h1 className="text-4xl mb-4">Student Info</h1>
        <ul className="pl-4 list-disc text-[var(--primary-color)]">
            <li>
                <a className="hover:underline" href="/">B. Pharm 2 Sem</a>
            </li>
            <li>
                <a className="hover:underline" href="/">B. Pharm 4 Sem</a>
            </li>
            <li>
                <a className="hover:underline" href="/">B. Pharm 6 Sem</a>
            </li>
            <li>
                <a className="hover:underline" href="/">B. Pharm 8 Sem</a>
            </li>
        </ul>
    </div>
}