import Link from "next/link";
import Image from "next/image";
import React, { ReactNode, useState } from "react";

const DropDownMenu = (props: {children: ReactNode, links: {name: string, ref: string}[]}) => {
    const [dropdown, setdropdown] = useState(false);

    let NavItems = [];

    for(let e of props.links){
        NavItems.push(
            <a href={e.ref} className="hover:shadow-[0_2px_0px_0px_white] px-4 py-2 duration-100">
                {e.name}
            </a>
        );
    }

    return (
        <div
            className="flex relative cursor-pointer duration-200 hover:shadow-[0_1px_0_0_0_white] px-2 py-2 z-50"
            onMouseEnter={() => setdropdown(true)}
            onMouseLeave={() => setdropdown(false)} >
            {props.children}
            <Image
                className={`${dropdown ? "-scale-y-100" : "scale-y-100"} ml-2 duration-100`}
                src="/up.svg"
                alt=""
                height={15}
                width={15} />
            <div
                id="dropdown"
                className={`${dropdown ? "visible top-full left-0 h-fit" : "h-0 hidden overflow-hidden"}` +
                    " min-w-fit absolute shadow-xl z-10"}>
                <div className="bg-[#91352A] flex flex-col text-nowrap px-1 py-3">
                    {NavItems}
                </div>
            </div>
        </div>
    );
};

export default DropDownMenu;