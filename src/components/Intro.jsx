import Header from "./Header";

const Intro = ({ scrollTo, about, projects, contact, ref }) => {
    return (
        <section class="flex flex-col gap-7 items-center bg-white min-h-screen bg-[url('/circles-slate-50.svg')] relative">
            <Header ref={ref} scrollTo={scrollTo} about={about} projects={projects} contact={contact}/>
            <div class="my-32 flex justify-around text-slate-800 items-center w-auto xl:w-[1280px]">
                <img src="/blobs-1.svg" class="max-xl:hidden rotate-180"></img>
                <div class="flex flex-col gap-7 text-slate-800 max-w-[450px] max-sm:w-screen max-sm:items-center">
                    <h1 class="text-6xl font-bold max-sm:text-5xl max-sm:text-center">Hello, I am <span onClick={() => scrollTo(about)} class="text-pink-600 cursor-pointer">Abbey Reid</span>, a fullstack web developer</h1>
                    <p class="text-3xl  max-sm:text-2xl max-sm:text-center">I specialise in writing scalable and secure responsive web applications, using React, Express and MongoDB.</p>
                    <div class="flex gap-7 text-2xl font-semibold text-slate-50 max-sm:text-xs">
                        <button onClick={() => scrollTo(projects)} class="group h-14 cursor-pointer rounded-full bg-sky-500 px-6 py-2.5 max-sm:px-0 hover:bg-sky-200 hover:text-sky-500 text-nowrap" >
                            <span class="bg-folder-slate group-hover:bg-folder-sky bg-no-repeat bg-contain ps-10 max-sm:ps-14 max-sm:bg-center"></span>
                            <span class="max-sm:hidden">My Projects</span>
                        </button>
                        <button onClick={() => scrollTo(contact)} class="group h-14 cursor-pointer rounded-full bg-amber-400 px-6 py-2.5 max-sm:px-0 hover:bg-amber-100 hover:text-amber-400 text-nowrap">
                            <span class="bg-phone-slate group-hover:bg-phone-amber bg-no-repeat bg-contain ps-10 max-sm:ps-14 max-sm:bg-center"></span>
                            <span class="max-sm:hidden">Contact Me</span>
                        </button>
                    </div>
                </div>
            </div>
            <img class="absolute bottom-64 right-48 max-xl:hidden" src="/mouse.svg"></img>
            <img src="/transition-2-slate-50.svg"></img>
        </section>
    );
}

export default Intro;