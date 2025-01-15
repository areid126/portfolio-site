const Projects = ({ ref }) => {
    return (
        <section ref={ref} class="bg-sky-500 flex flex-col items-center min-h-screen relative overflow-y-visible overflow-x-clip">
            <div class="flex flex-col items-center py-10">
                <h1 class=" text-center text-3xl font-bold text-slate-50 uppercase">My Projects</h1>
                <img src="/underline-5-slate-50.svg"></img>
            </div>
            <ul class="flex flex-col gap-6 pb-32 max-w-[1280px] items-center z-10">
                <li class="flex xl:flex-row flex-col bg-slate-50 p-7 rounded-3xl gap-7 mx-14 max-xl:w-1/2 max-md:gap-4 max-sm:w-4/5" >
                    <img class="xl:w-1/2 object-scale-down rounded-3xl" src="/australia_4.jpeg"></img>
                    <div class="flex flex-col gap-3 xl:w-1/2">
                        <div class="flex justify-between items-center">
                            <a><h1 class="text-2xl font-bold text-sky-500 uppercase cursor-pointer max-sm:text-xl">App Store</h1></a>
                            <a class="bg-sky-500 h-fit w-fit rounded-full p-2 hover:bg-sky-400 cursor-pointer">
                                <div class="bg-[url('/arrow-10.svg')] w-8 h-8 max-sm:h-6 max-sm:w-6 aspect-[1/1] rounded-full bg-no-repeat bg-contain bg-center">
                                </div>
                            </a>
                        </div>
                        <p class="text-xl font-semibold text-slate-800 max-xl:hidden">A website for uploading and downloading mobile app AKPs. This site was written for an assignment and received a high distinction as the grade. The assignment was focused on writing backend and so the whole site is written using express, with handlebars being used as a UI engine.</p>
                        <p class="text-xl font-semibold text-slate-800 max-xl:hidden">This site is hosted on a free instance of render and so may take some time to load.</p>
                    </div>
                </li>
                <li class="flex xl:flex-row flex-col bg-slate-50 p-7 rounded-3xl gap-7 mx-14 max-xl:w-1/2 max-md:gap-4 max-sm:w-4/5" >
                    <img class="xl:w-1/2 object-scale-down rounded-3xl" src="/australia_2.jpeg"></img>
                    <div class="flex flex-col gap-3 xl:w-1/2">
                        <div class="flex justify-between items-center">
                            <a><h1 class="text-2xl font-bold text-sky-500 uppercase cursor-pointer max-sm:text-xl">Flashcards</h1></a>
                            <a class="bg-sky-500 h-fit w-fit rounded-full p-2 hover:bg-sky-400 cursor-pointer">
                                <div class="bg-[url('/arrow-10.svg')] w-8 h-8 max-sm:h-6 max-sm:w-6 aspect-[1/1] rounded-full bg-no-repeat bg-contain bg-center">
                                </div>
                            </a>
                        </div>
                        <p class="text-xl font-semibold text-slate-800 max-xl:hidden">A website that allows users to create and study sets of flashcards. This site was written for a group project, and I received a high distinction for my contributions. I was responsible for writing the entire backend, all the basic frontend pages and connecting the two together. I did not style the site or the search function, however I did help troubleshoot both. This site is written using react for the frontend and express for the backend.</p>
                        <p class="text-xl font-semibold text-slate-800 max-xl:hidden">The backend of this site is hosted on a free instance of render and so may take some time to load when first accessed.</p>
                    </div>
                </li>
            </ul>
            <img src="/transition-7-sky-400.svg" class="bg-amber-300 rotate-180"></img>
            <img src="/corner-1.svg" class="absolute -top-6 -right-1 max-lg:hidden"></img>
            <img src="/corner-2.svg" class="absolute -top-32 -left-1 max-lg:hidden"></img>
            <img src="/rainbow.svg" class="absolute bottom-96 left-10 max-sm:hidden -rotate-[20deg]"></img>
            <img src="/balloon.svg" class="absolute top-[400px] right-10 max-sm:hidden -rotate-[20deg]"></img>
            <img src="/compass.svg" class="absolute top-[500px] left-32 max-lg:hidden -rotate-[20deg]"></img>
            <img src="/diamond.svg" class="absolute bottom-[500px] right-32 max-lg:hidden"></img>
            <img src="/puzzle.svg" class="absolute top-52 left-16 max-sm:hidden -rotate-[20deg]"></img>
        </section>
    );
}

export default Projects;