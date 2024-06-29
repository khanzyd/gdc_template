import { ReactElement } from "react";

export default function NavItem({href, children}: {href: string, children: string | ReactElement}){
    return <div className="w-full lg:w-fit">
        <a href={href} className="block hover:bg-[var(--light-primary-color)] px-4 py-4 duration-200">
            {children}
        </a>
    </div>
}