import React from "react";

export default function Page(){
    return <div className="sm:px-48 px-4 py-10">
        <h1 className="text-4xl pb-8">NAAC</h1>
        <h2 className="max-sm:text-xl text-2xl pb-4 text-center">
            Government Dental College And Hospital Aurangabad is accredited by National Asessment and Accreditation Council(NAAC) with "A+" grade.
        </h2>
        <div className="flex gap-4">
            <p>NAAC Certificate</p>
            <a href="/" className="underline text-[var(--primary-color)]">pdf</a>
        </div>
    </div>
}