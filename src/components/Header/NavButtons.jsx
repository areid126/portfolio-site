const NavButton = ({button}) => {
    return (
        <li onClick={button.onClick} class={`${button.colour} max-sm:h-fit h-14 cursor-pointer rounded-full px-6 py-2.5 text-center`}>{button.name}</li>
    );
}

const NavButtons = ({buttons, style}) => {
    return (
        <ul class={`flex text-2xl font-semibold text-slate-50 max-sm:text-lg ${style}`}>
            {buttons.map((button, i ) => <NavButton key={i} button={button} />)}
        </ul>
    );
}

export default NavButtons;