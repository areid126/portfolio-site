const Link = ({link}) => {
    return (
        <li onClick={link.onClick} class={`cursor-pointer text-center text-xl font-bold uppercase ${link.colour} hover:underline underline-offset-4`}>{link.name}</li>
    );
}

const LinkList = ({links}) => {
    return (
        <ul class="flex gap-10 max-sm:grid max-sm:grid-cols-2 max-sm:gap-y-4">
            {links.map((link, i) => <Link link={link} key={i} />)}
        </ul>
    );
}

export default LinkList;