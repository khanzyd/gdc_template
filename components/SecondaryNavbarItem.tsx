import Link from "next/link";

export default function SecondaryNavbarItem({children}: {children: string}){
    return <>
        <Link className="cursor-pointer py-2 px-2" href={"#"}>{children}</Link>|
    </>
}