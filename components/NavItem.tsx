import Link from "next/link";
import { ReactElement } from "react";

export default function NavItem({href, children}: {href: string, children: string | ReactElement}){
    return <>
        <Link href={href} className="hover:shadow-[inset_0_-2px_0_0_white] hover:drop-shadow-[0_1px_0_#ffffff] px-4 py-2 duration-200">
            {children}
        </Link>
    </>
}