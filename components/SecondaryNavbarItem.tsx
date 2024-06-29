
export default function SecondaryNavbarItem(props: { children: string, reference: string }) {
    return <div>
        <a
            className="cursor-pointer block py-1 px-2 hover:bg-[var(--light-primary-color)]"
            href={props.reference} 
            target="_blank">
            {props.children}
        </a>
    </div>
}