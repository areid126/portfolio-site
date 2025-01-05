const About = ({ ref }) => {
    return (
        <section ref={ref} class="items-center bg-slate-50 text-slate-50">
            <h1 class="pt-10 pb-40 text-center text-3xl font-bold text-pink-600">ABOUT ME</h1>
            <div class="flex flex-row items-center px-40">
                <div class="rounded-full border-4 border-dashed">
                    <div class="m-4 flex w-[450px] aspect-[1/1] flex-col items-center justify-center gap-4 rounded-full bg-[url('/australia_3.jpeg')] bg-no-repeat bg-cover text-center text-xl font-semibold text-slate-50">
                    </div>
                </div>
                <div class="mx-28 flex flex-col gap-3 text-xl font-semibold text-slate-800">
                    <h2 class="text-2xl font-bold text-pink-600" >Overview</h2>
                    <p>I am an undergraduate in my third year at the University of St Andrews, where I am on track to graduate with a first-class honours degree in Computer Science. I am proficient in several areas of computer science and specialise in full-stack web development, specifically making websites using Express and React.</p>
                    <h2 class="text-2xl font-bold text-pink-600" >Outlook</h2>
                    <p>I am always looking to learn new skills and technologies and as such am always experimenting with different web development tools and keeping up with the ever-changing web development environment.</p>
                    <h2 class="text-2xl font-bold text-pink-600" >Personal Life</h2>
                    <p>Outside of work I do archery and have an interest in travelling and sightseeing. I recently completed a semester studying abroad in Australia at Macquarie University, where I developed both my skills as a web developer and myself as a person, becoming more independent and responsible.</p>
                </div>
            </div>
            <h2 class="text-center mt-32 text-2xl font-bold text-slate-800">SKILLS</h2>
            <ul class="flex justify-center gap-11 px-12 py-14 text-center text-xl font-semibold">
                <div class="rounded-full border-4 border-dashed">
                    <li class="m-4 flex h-48 w-48 items-center justify-center rounded-full bg-pink-700">
                        Express<br />
                        React<br />
                        HTML<br />
                        CSS
                    </li>
                </div>
                <div class="rounded-full border-4 border-dashed">
                    <li class="m-4 flex h-48 w-48 items-center justify-center rounded-full bg-pink-600">
                        Javascript<br />
                        Java<br />
                        C<br />
                        Python
                    </li>
                </div>
                <div class="rounded-full border-4 border-dashed">
                    <li class="m-4 flex h-48 w-48 items-center justify-center rounded-full bg-pink-500">
                        MongoDB<br />
                        MySQL<br />
                        SQL
                    </li>
                </div>
                <div class="rounded-full border-4 border-dashed">
                    <li class="m-4 flex h-48 w-48 items-center justify-center rounded-full bg-pink-400">
                        Git<br />
                        GitHub
                    </li>
                </div>
            </ul>
        </section>
    );
}

export default About;