const About = ({ ref }) => {
    return (
        <section ref={ref} class="items-center bg-slate-50 text-slate-50 min-h-screen">
            <h1 class="py-10 xl:pb-40 text-center text-3xl font-bold text-pink-600 uppercase">About Me</h1>
            <div class="flex xl:flex-row flex-col items-center px-5 xl:gap-28 gap-10 px-8 max-w-[1280px] mx-auto">
                <div class="rounded-full border-4 border-dashed w-[450px] h-[450px] max-[500px]:w-full max-[500px]:mx-5 max-[500px]:h-auto aspect-[1/1]">
                    <div class="m-4 flex aspect-[1/1] items-center justify-center rounded-full bg-[url('/australia_3.jpeg')] bg-no-repeat bg-cover">
                    </div>
                </div>
                <div class="flex flex-col gap-3 text-xl font-semibold text-slate-800">
                    <h2 class="text-2xl font-bold text-pink-600" >Overview</h2>
                    <p>I am an undergraduate in my third year at the University of St Andrews, where I am on track to graduate with a first-class honours degree in Computer Science. I am proficient in several areas of computer science and specialise in full-stack web development, specifically making websites using Express and React.</p>
                    <h2 class="text-2xl font-bold text-pink-600" >Outlook</h2>
                    <p>I am always looking to learn new skills and technologies and as such am always experimenting with different web development tools and keeping up with the ever-changing web development environment.</p>
                    <h2 class="text-2xl font-bold text-pink-600" >Personal Life</h2>
                    <p>Outside of work I do archery and have an interest in travelling and sightseeing. I recently completed a semester studying abroad in Australia at Macquarie University, where I developed both my skills as a web developer and myself as a person, becoming more independent and responsible.</p>
                </div>
            </div>
            <h2 class="text-center mt-32 text-2xl font-bold text-slate-800">SKILLS</h2>
            <ul class="flex justify-center gap-11 px-12 py-14 text-center text-xl font-semibold max-w-[1280px] mx-auto max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1">
                <div class="rounded-full border-4 border-dashed w-1/4 aspect-[1/1] max-lg:w-auto">
                    <li class="m-4 flex aspect-[1/1] items-center justify-center rounded-full bg-pink-800">
                        Express<br />
                        React<br />
                        HTML<br />
                        CSS
                    </li>
                </div>
                <div class="rounded-full border-4 border-dashed w-1/4 aspect-[1/1] max-lg:w-auto">
                    <li class="m-4 flex aspect-[1/1] items-center justify-center rounded-full bg-pink-700">
                        Javascript<br />
                        Java<br />
                        C<br />
                        Python
                    </li>
                </div>
                <div class="rounded-full border-4 border-dashed w-1/4 aspect-[1/1] max-lg:w-auto">
                    <li class="m-4 flex aspect-[1/1] items-center justify-center rounded-full bg-pink-600">
                        MongoDB<br />
                        MySQL<br />
                        SQL
                    </li>
                </div>
                <div class="rounded-full border-4 border-dashed w-1/4 aspect-[1/1] max-lg:w-auto">
                    <li class="m-4 flex aspect-[1/1] items-center justify-center rounded-full bg-pink-500">
                        Git<br />
                        GitHub
                    </li>
                </div>
            </ul>
        </section>
    );
}

export default About;