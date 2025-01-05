const About = ({ ref }) => {
    return (
        <section ref={ref} class="items-center bg-slate-50 text-slate-800">
            <h1 class="p-10 text-center text-3xl font-bold text-pink-600">ABOUT ME</h1>
            <div class="flex flex-row items-center px-40">
                <div class="rounded-full border-4 border-dashed">
                    <div class="m-4 flex w-[450px] aspect-[1/1] flex-col items-center justify-center gap-4 rounded-full bg-[url('/australia_3.jpeg')] bg-no-repeat bg-cover text-center text-xl font-semibold text-slate-50">
                    </div>
                </div>
                <div class="mx-28 flex flex-col gap-3 text-xl font-semibold text-slate-50">
                    <p class="rounded-xl bg-pink-700 px-5 py-3">I am an undergraduate in my third year at the University of St Andrews, where I am on track to graduate with a first-class honours degree in Computer Science. I am proficient in several areas of computer science and specialise in full-stack web development, specifically making websites using Express and React.</p>
                    <p class="rounded-xl bg-pink-600 px-5 py-3">I am always looking to learn new skills and technologies and as such am always experimenting with different web development tools and keeping up with the ever-changing web development environment.</p>
                    <p class="rounded-xl bg-pink-500 px-5 py-3">Outside of work I do archery and have an interest in travelling and sightseeing. I recently completed a semester studying abroad in Australia at Macquarie University, where I developed both my skills as a web developer and myself as a person, becoming more independent and responsible.</p>
                </div>
            </div>
            <div class="flex flex-row items-center px-40">
                <ul class="mx-28 flex flex-col gap-3 text-xl font-semibold text-slate-50">
                    <li class="rounded-xl bg-pink-700 px-5 py-3">I am proficient in using Express and React to create websites.</li>
                    <li class="rounded-xl bg-pink-600 px-5 py-3">I am fluent in several programming languages and am familiar with procedural and object-oriented programming. These languages are Javascript, Java, C and Python.</li>
                    <li class="rounded-xl bg-pink-500 px-5 py-3">I am well versed in both document and relational databases and have particular experience with MongoDB and MySQL.</li>
                    <li class="rounded-xl bg-pink-400 px-5 py-3">I have experience working in a scrum setting and have used version control as part of several projects. I have used both plain Git and GitHub.</li>
                </ul>
                <div class="rounded-full border-4 border-dashed">
                    <div class="m-4 flex h-[450px] w-[450px] flex-col items-center justify-center gap-4 rounded-full bg-[url('/australia_1.jpeg')] bg-no-repeat bg-cover text-center text-xl font-semibold text-slate-50">
                    </div>
                </div>
            </div>

            <div class="rounded-full border-4 border-dashed">
                <div class="m-4 flex h-[300px] w-[300px] flex-col items-center justify-center gap-4 rounded-full bg-[url('/australia_2.jpeg')] bg-no-repeat bg-cover text-center text-xl font-semibold text-slate-50">
                </div>
            </div>
            <div class="rounded-full border-4 border-dashed">
                <div class="m-4 flex h-[300px] w-[300px] flex-col items-center justify-center gap-4 rounded-full bg-[url('/australia_4.jpeg')] bg-no-repeat bg-cover text-center text-xl font-semibold text-slate-50">
                </div>
            </div>
            <div class="rounded-full border-4 border-dashed">
                <div class="m-4 flex h-[200px] w-[200px] flex-col items-center justify-center gap-4 rounded-full bg-[url('/australia_5.jpeg')] bg-no-repeat bg-cover text-center text-xl font-semibold text-slate-50">
                </div>
            </div>
        </section>
    );
}

export default About;