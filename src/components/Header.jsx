const Header = ({ scrollTo, about, projects, contact }) => {
    return (
        <section class="flex h-fit w-full flex-1 flex-row justify-around pt-10 max-[850px]:flex-col max-[850px]:items-center max-[850px]:gap-4">
            <h1 class="cursor-default text-nowrap text-5xl font-semibold">Abbey's Portfolio</h1>
            <ul class="flex flex-row gap-10 text-2xl font-semibold text-slate-50 max-[850px]:w-full max-[850px]:justify-evenly max-[850px]:gap-0">
                <li onClick={() => scrollTo(about)} class="h-14 cursor-pointer rounded-full bg-pink-600 px-6 py-2.5 hover:bg-pink-500">About</li>
                <li onClick={() => scrollTo(projects)} class="h-14 cursor-pointer rounded-full bg-sky-500 px-6 py-2.5 hover:bg-sky-400">Projects</li>
                <li onClick={() => scrollTo(contact)} class="h-14 cursor-pointer rounded-full bg-amber-400 px-6 py-2.5 hover:bg-amber-300">Contact</li>
            </ul>
        </section>
    );
}

export default Header;