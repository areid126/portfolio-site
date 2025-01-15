const IconButton = ({name, buttonColour, textColour, onClick}) => {
    return (
        <button onClick={onClick} class={`group h-14 cursor-pointer rounded-full ${buttonColour} px-6 py-2.5 max-sm:px-0 text-nowrap`}>
            <span class={`${textColour} bg-no-repeat bg-contain ps-10 max-sm:ps-14 max-sm:bg-center`}></span>
            <span class="max-sm:hidden">{name}</span>
        </button>
    );
}

export default IconButton