const Intro = ({ scrollTo, about, projects, contact }) => {
    return (
        <section class="flex gap-7 py-52 pb-56 justify-center items-center bg-white">
            <div class="flex justify-around text-slate-800 items-center w-auto xl:w-[1280px]">
                <div class="rounded-full border-4 border-dashed w-fit h-fit max-xl:hidden">
                    <div class="m-4 flex w-[450px] aspect-[1/1] flex-col items-center justify-center rounded-full bg-[url('/australia_1.jpeg')] bg-no-repeat bg-cover text-center text-xl font-semibold text-slate-50"></div>
                </div>
                <div class="flex flex-col gap-7 text-slate-800 max-w-[450px]">
                    <h1 class="text-6xl font-bold">Hello, I am <span onClick={() => scrollTo(about)} class="text-pink-600 cursor-pointer">Abbey Reid</span>, a fullstack web developer</h1>
                    <p class="text-3xl">I specialise in writing scalable and secure responsive web applications, using React, Express and MongoDB.</p>
                    <div class="flex gap-7 text-2xl font-semibold text-slate-50">
                        <button onClick={() => scrollTo(projects)} class="group h-14 cursor-pointer rounded-full bg-sky-500 px-6 py-2.5 hover:bg-sky-200 hover:text-sky-500  text-nowrap" >
                            <span class="bg-folder-slate group-hover:bg-folder-sky bg-no-repeat bg-contain ps-10"></span>
                            My Projects
                        </button>
                        <button onClick={() => scrollTo(contact)} class="group h-14 cursor-pointer rounded-full bg-amber-400 px-6 py-2.5 hover:bg-amber-100 hover:text-amber-400  text-nowrap">
                            <span class="bg-phone-slate group-hover:bg-phone-amber bg-no-repeat bg-contain ps-10"></span>
                            Contact Me
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Intro;