const Header = ({ scrollTo, about, projects, contact, ref }) => {
    return (
        <header ref={ref} class="flex h-fit w-full flex-1 flex-row justify-around pt-10 max-[850px]:flex-col max-[850px]:items-center max-[850px]:gap-4">
            <img className="absolute top-0 right-0 -z-50" src="/pattern_background.PNG" ></img>
            <h1 class="text-nowrap text-5xl font-semibold text-slate-800">Abbey's Portfolio</h1>
            <ul class="flex flex-row gap-10 text-2xl font-semibold text-slate-50 max-[850px]:w-full max-[850px]:justify-evenly max-[850px]:gap-0">
                <li onClick={() => scrollTo(about)} class="h-14 cursor-pointer rounded-full bg-pink-600 px-6 py-2.5 hover:bg-pink-200 hover:text-pink-600">About</li>
                <li onClick={() => scrollTo(projects)} class="h-14 cursor-pointer rounded-full bg-sky-500 px-6 py-2.5 hover:bg-sky-200 hover:text-sky-500">Projects</li>
                <li onClick={() => scrollTo(contact)} class="h-14 cursor-pointer rounded-full bg-amber-400 px-6 py-2.5 hover:bg-amber-100 hover:text-amber-400">Contact</li>
            </ul>
        </header>
    );
}

export default Header;