import React from "react";

export default function Page() {
    return <div className="sm:px-48 px-4 py-10">
        <h1 className="text-4xl mb-4">Feedback and Validation</h1>
        <div className="text-justify">
            <h1 className="font-bold text-xl pt-4 pb-2">
                Latest Feedback Forms
            </h1>
            <ol className="list-decimal list-inside text-[var(--primary-color)]">
                <li className="pb-2">
                    <a href="/">
                        Student's feedback form (IQAC)
                    </a>
                </li>
                <li className="pb-2">
                    <a href="/">
                        Teacher's feedback form (IQAC)
                    </a>
                </li>
                <li className="pb-2">
                    <a href="/">
                        Patient feedback form (IQAC)
                    </a>
                </li>
                <li className="pb-2">
                    <a href="/">
                        Employer feedback form (IQAC)
                    </a>
                </li>
                <li className="pb-2">
                    <a href="/">
                        Alumni feedback form (IQAC)
                    </a>
                </li>
            </ol>
        </div>
        <div className="text-justify">
            <h1 className="font-bold text-xl pt-4 pb-2">
                Feedback - Curriculum related
            </h1>
            <a className="text-[var(--primary-color)] block pb-2" href="/">
                College feedback policy curriculum
            </a>
            <a className="text-[var(--primary-color)] block pb-2" href="/">
                Feedback formats for curriculum
            </a>
            <a className="text-[var(--primary-color)] block pb-2" href="/">
                Analysis and interpretation of feedback results on curriculum
            </a>
            <a className="text-[var(--primary-color)] block pb-2" href="/">
                Action taken report on curriculum
            </a>
        </div>
        <div className="text-justify">
            <h1 className="font-bold text-xl pt-4 pb-2">
                Reports of IQAC feedback
            </h1>
            <a className="text-[var(--primary-color)] block pb-2" href="/">
                Feedback Analysis Report 2021-22
            </a>
            <a className="text-[var(--primary-color)] block pb-2" href="/">
                Action Taken Report
            </a>
            <a className="text-[var(--primary-color)] block pb-2" href="/">
                Feedback interpretation with communication and meeting minutes with Board of Management
            </a>
        </div>
    </div>
}