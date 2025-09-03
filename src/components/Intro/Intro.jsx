import Header from "../Header/Header";
import IconButton from "./IconButton";

const Intro = ({ scrollTo, about, projects, contact, ref }) => {
    return (
        <section class="flex flex-col gap-7 items-center bg-white min-h-screen bg-[url('/circles-slate-50.svg')] relative">
            <Header ref={ref} scrollTo={scrollTo} about={about} projects={projects} contact={contact}/>
            <div class="my-32 flex justify-around text-slate-800 items-center w-auto xl:w-[1280px]">
                <img src="/blobs-1.svg" class="max-xl:hidden rotate-180"></img>
                <div class="flex flex-col gap-7 text-slate-800 max-w-[450px] max-sm:w-screen max-sm:items-center">
                    <h1 class="text-6xl font-bold max-sm:text-5xl max-sm:text-center">Hello, I am <span onClick={() => scrollTo(about)} class="text-pink-600 cursor-pointer">Abbey Reid</span>, a computer science student</h1>
                    <p class="text-3xl  max-sm:text-2xl max-sm:text-center">I have experience working in web techonologies, software development, networks and operating system technologies.</p>
                    <div class="flex gap-7 text-2xl font-semibold text-slate-50 max-sm:text-xs">
                        <IconButton onClick={() => scrollTo(projects)} buttonColour={"bg-sky-500 hover:bg-sky-200 hover:text-sky-500"} textColour={"bg-folder-slate group-hover:bg-folder-sky"} name={"My Projects"} />
                        <IconButton onClick={() => scrollTo(contact)} buttonColour={"bg-amber-400 hover:bg-amber-100 hover:text-amber-400"} textColour={"bg-phone-slate group-hover:bg-phone-amber"} name={"Contact Me"} />
                    </div>
                </div>
            </div>
            <img class="absolute bottom-64 right-48 max-xl:hidden" src="/mouse.svg"></img>
            <img src="/transition-2-slate-50.svg" class="w-full"></img>
        </section>
    );
}

export default Intro;