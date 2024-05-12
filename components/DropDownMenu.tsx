import Link from "next/link";
import Image from "next/image";
import React, { ReactNode, useState } from "react";

const DropDownMenu = (props: {children: ReactNode, links: {name: string, ref: string}[]}) => {
    const [dropdown, setdropdown] = useState(false);

    let NavItems = [];

    for(let e of props.links){
        NavItems.push(
            <a href={e.ref} className="hover:shadow-[0_2px_0px_0px_white] hover:drop-shadow-[0_0_1px_#ffffff] px-4 py-2 duration-100">
                {e.name}
            </a>
        );
    }

    return (
        <div
            className="bg-[var(--primary-color)] flex relative flex-col cursor-default duration-200 hover:shadow-[inset_0_-2px_0_0_white] px-2 py-2"
            onMouseEnter={() => setdropdown(true)}
            onMouseLeave={() => setdropdown(false)} 
            onClick={() => setdropdown(!dropdown)}>
            <div className="flex">
                {props.children}
                <Image
                    className={`${dropdown ? "-scale-y-100" : "scale-y-100"} ml-2 duration-100`}
                    src="/up.svg"
                    alt=""
                    height={15}
                    width={15} />
            </div>
            <div
                id="dropdown"
                className={`${dropdown ? "visible top-full left-0 h-fit" : "h-0 hidden overflow-hidden"}` +
                    " bg-[var(--primary-color)] sm:absolute min-w-fit z-50"}
            >
                <div className="flex flex-col text-nowrap px-1 py-3">
                    {NavItems}
                </div>
            </div>
        </div>
    );
};

export default DropDownMenu;