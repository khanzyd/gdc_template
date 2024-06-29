
export default function SecondaryNavbarItem({children}: {children: string | any}){
    return <>
        <a className="cursor-pointer py-2 px-2" href={"#"}>{children}</a>|
    </>
}