const Intro = ({ scrollTo, about, projects, contact }) => {
    return (
        <section class="flex gap-7 my-52 mb-56 justify-end">
            <div class="flex flex-col gap-7 me-60 w-1/3 max-xl:w-1/2 max-[850px]:w-auto text-slate-900">
                <h1 class="text-6xl font-bold">Hello, I am <span onClick={() => scrollTo(about)} class="text-pink-600 cursor-pointer">Abbey Reid</span>, a fullstack web developer</h1>
                <p class="text-3xl">I specialise in writing scalable and secure responsive web applications, using React, Express and MongoDB.</p>
                <div class="flex gap-7 text-2xl font-semibold text-slate-50">
                    <button onClick={() => scrollTo(projects)} class="group h-14 cursor-pointer rounded-full bg-sky-500 px-6 py-2.5 hover:bg-sky-200 hover:text-sky-500" >
                        <span class="bg-folder-slate group-hover:bg-folder-sky bg-no-repeat bg-contain ps-10"></span>
                        My Projects
                    </button>
                    <button onClick={() => scrollTo(contact)} class="group h-14 cursor-pointer rounded-full bg-amber-400 px-6 py-2.5 hover:bg-amber-100 hover:text-amber-400">
                        <span class="bg-phone-slate group-hover:bg-phone-amber bg-no-repeat bg-contain ps-10"></span>
                        Contact Me
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Intro;