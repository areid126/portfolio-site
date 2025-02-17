const PROJECTS = [
    {
        title: "Flashcards", 
        image: "/flashcards.png", 
        desc: "A website that can be used to create and study sets of flashcards. The frontend is created using React, styled using Tailwind CSS and contains animations done with Framer Motion. The backend is an Express server that stores data in MongoDB.\nThe backend of this site is hosted on a free instance of render and so may take some time to load when first accessed.", 
        link: "https://flashcards-areid126.onrender.com/"
    },
    {
        title: "This Site", 
        image: "/my_portfolio.png", 
        desc: "My portfolio which contains links to all my personal projects. The frontend is written in react and styled using Tailwind CSS. It has a small Express backend used to receive responses to the 'Contact Me' form.\nThis site is hosted on a free instance of render and so may take some time to load.", 
        link: ""
    },
];

const Project = ({project}) => {
    return (
        <li class="flex xl:flex-row flex-col bg-slate-50 p-7 rounded-3xl gap-7 mx-14 max-xl:w-1/2 max-md:gap-4 max-sm:w-4/5" >
            <img class="xl:w-1/2 object-scale-down rounded-md" src={project.image}></img>
            <div class="flex flex-col gap-3 xl:w-1/2">
                <div class="flex justify-between items-center">
                    <a href={project.link}  target="_blank" rel="noopener noreferrer" ><h1 class="text-2xl font-bold text-sky-500 uppercase cursor-pointer max-sm:text-xl">{project.title}</h1></a>
                    <a href={project.link}  target="_blank" rel="noopener noreferrer" class="bg-sky-500 h-fit w-fit rounded-full p-2 hover:bg-sky-400 cursor-pointer">
                        <div class="bg-[url('/arrow-10.svg')] w-8 h-8 max-sm:h-6 max-sm:w-6 aspect-[1/1] rounded-full bg-no-repeat bg-contain bg-center">
                        </div>
                    </a>
                </div>
                {project.desc.split("\n").map((p, i) => <p key={i} class="text-xl font-semibold text-slate-800 max-xl:hidden" >{p}</p>)}
            </div>
        </li>
    );
}

const ProjectList = () => {
    return (
        <ul class="flex flex-col gap-6 pb-32 max-w-[1280px] items-center z-10">
            {PROJECTS.map((project, i) => <Project key={i} project={project} />)}
        </ul>
    );
}

export default ProjectList;