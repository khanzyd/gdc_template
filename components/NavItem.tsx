import Link from "next/link";
import { ReactElement } from "react";

export default function NavItem({href, children}: {href: string, children: string | ReactElement}){
    return <>
        <Link href={href} className="hover:shadow-[-1px_0_0_0_white,1px_0_0_0_white] px-4 duration-200">
            {children}
        </Link>
    </>
}