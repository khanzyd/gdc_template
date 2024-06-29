import Image from "next/image";
import React, { ReactNode, useState } from "react";

const DropDownMenu = (props: { children: ReactNode, links: { name: string, ref: string }[] }) => {
    const [dropdown, setdropdown] = useState(false);

    let NavItems = [];

    for (let e of props.links) {
        NavItems.push(
            <a href={e.ref} key={e.name} className="w-full px-4 py-2 hover:bg-[var(--light-primary-color)] duration-100">
                {e.name}
            </a>
        );
    }

    return (
        <div
            className="bg-[var(--primary-color)] w-full lg:w-fit flex relative flex-col cursor-default duration-200 px-4 py-4"
            onMouseEnter={() => setdropdown(true)}
            onMouseLeave={() => setdropdown(false)}
            onClick={() => setdropdown(!dropdown)}>
            <div className="flex gap-1">
                {props.children}
                <Image
                    className="rotate-180"
                    src="/up.svg"
                    alt=""
                    height={10}
                    width={10} />
            </div>
            <div
                id="dropdown"
                className={`${dropdown ? "w-full visible top-full left-0 h-fit" : "h-0 hidden overflow-hidden"}` +
                    " bg-[var(--primary-color)] lg:absolute min-w-fit z-50"} >
                <div className="flex flex-col text-nowrap items-center">
                    {NavItems}
                </div>
            </div>
        </div>
    );
};

export default DropDownMenu;