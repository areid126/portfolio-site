import Sidebar from "./Sidebar";
import NavButtons from "./NavButtons";

const NAVSTYLE = "max-lg:hidden flex-row gap-10";

const Header = ({ scrollTo, about, projects, contact, ref }) => {

    const BUTTONS = [
        {colour: "bg-pink-600 hover:bg-pink-200 hover:text-pink-600", name: "About", onClick: () => scrollTo(about)},
        {colour: "bg-sky-500 hover:bg-sky-200 hover:text-sky-500", name: "Projects", onClick: () => scrollTo(projects)}, 
        {colour: "bg-amber-400 hover:bg-amber-100 hover:text-amber-400", name: "Contact", onClick: () => scrollTo(contact)}, 
    ];

    return (
        <header ref={ref} class="flex h-fit w-full flex-1 flex-row justify-around pt-10 items-center">
            <div class="flex flex-col gap-4 items-center max-sm:gap-1">
                <h1 class="text-nowrap text-5xl font-semibold text-slate-800  max-sm:text-2xl">Abbey's Portfolio</h1>
                <img class="max-sm:w-52 w-full" src="/underline-1-slate-800.svg"></img>
            </div>
            <NavButtons buttons={BUTTONS} style={NAVSTYLE}/>
            <Sidebar scrollTo={scrollTo} about={about} projects={projects} contact={contact} buttons={BUTTONS}/>
        </header>
    );
}

export default Header;