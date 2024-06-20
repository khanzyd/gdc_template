import React from 'react'

function Faculty(props: {profilePicSrc: string, cvSrc: string, facultyName: string, facultyDesignation:string}) {
    return (
        <div className='max-w-[200px] shadow-md outline outline-gray-300 outline-1 rounded flex flex-col items-center text-center'>
            <img
                src={props.profilePicSrc}
                alt='faculty'
                className='w-[200px]'
            />
            <a className='hover:underline text-[var(--primary-color)]' href={props.cvSrc} type="application/pdf" target='_blank'>
                <h1 className='text-sm font-medium p-4'>{props.facultyName}</h1>
            </a>
            <p className='text-xs pb-4'>{props.facultyDesignation}</p>
        </div>
    )
}

export default Faculty