const Projects = ({ ref }) => {
    return (
        <section ref={ref} class="bg-sky-500 flex flex-col items-center">
            <h1 class="py-10 text-center text-3xl font-bold text-slate-50 uppercase">My Projects</h1>
            <ul class="flex flex-col gap-6 w-[1300px] pb-32 pt-14">
                <li class="flex bg-slate-50 p-10 rounded-3xl gap-7 mx-14" >
                    <img class="w-1/2 object-scale-down rounded-3xl" src="/australia_1.jpeg"></img>
                    <div class="flex flex-col gap-3 w-1/2">
                        <div class="flex justify-between items-center">
                            <a><h1 class="text-2xl font-bold text-sky-500 uppercase cursor-pointer">App Store</h1></a>
                            <a class="bg-sky-500 h-fit w-fit rounded-full p-2 hover:bg-sky-400">
                                <div class="bg-[url('/arrow.png')] w-8 h-8 aspect-[1/1] rounded-full bg-no-repeat bg-contain cursor-pointer bg-center">
                                </div>
                            </a>
                        </div>
                        <p class="text-xl font-semibold text-slate-800">A website for uploading and downloading mobile app AKPs. This site was written for an assignment and received a high distinction as the grade. The assignment was focused on writing backend and so the whole site is written using express, with handlebars being used as a UI engine.</p>
                        <p class="text-xl font-semibold text-slate-800">This site is hosted on a free instance of render and so may take some time to load.</p>
                    </div>
                </li>
                <li class="flex bg-slate-50 p-10 rounded-3xl gap-7 mx-14" >
                    <img class="w-1/2 object-scale-down rounded-3xl" src="/australia_2.jpeg"></img>
                    <div class="flex flex-col gap-3 w-1/2">
                        <div class="flex justify-between items-center">
                            <a><h1 class="text-2xl font-bold text-sky-500 uppercase cursor-pointer">Flashcards</h1></a>
                            <a class="bg-sky-500 h-fit w-fit rounded-full p-2 hover:bg-sky-400">
                                <div class="bg-[url('/arrow.png')] w-8 h-8 aspect-[1/1] rounded-full bg-no-repeat bg-contain cursor-pointer bg-center">
                                </div>
                            </a>
                        </div>
                        <p class="text-xl font-semibold text-slate-800">A website that allows users to create and study sets of flashcards. This site was written for a group project, and I received a high distinction for my contributions. I was responsible for writing the entire backend, all the basic frontend pages and connecting the two together. I did not style the site or the search function, however I did help troubleshoot both. This site is written using react for the frontend and express for the backend.</p>
                        <p class="text-xl font-semibold text-slate-800">The backend of this site is hosted on a free instance of render and so may take some time to load when first accessed.</p>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default Projects;