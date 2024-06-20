import Image from 'next/image'
import React from 'react'
import doc from "../../public/doctor.png"

function Faculty(props: { profilePicSrc: string, cvSrc: string, facultyName: string, facultyDesignation: string }) {
    return (
        <div className='max-w-[200px] shadow-md outline outline-gray-300 outline-1 rounded flex flex-col items-center text-center'>
            <Image
                src={props.profilePicSrc ? props.profilePicSrc : doc}
                alt="faculty"
                width={200}
                height={200}
                className='object-cover w-full h-[300px]'
            />
            <a
                className="hover:underline text-[var(--primary-color)]"
                href={props.cvSrc}
                type="application/pdf"
                target="_blank"
            >
                <h1 className="text-sm font-semibold px-4 pt-3 pb-1">{props.facultyName}</h1>
            </a>
            <p className="text-xs font-medium text-neutral-500 pb-4">{props.facultyDesignation}</p>
        </div>
    );
}

export default Faculty