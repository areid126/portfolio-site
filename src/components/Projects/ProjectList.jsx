const PROJECTS = [
    {
        title: "Flashcards", 
        image: "/flashcards.png", 
        desc: "A website that can be used to create and study sets of flashcards. The frontend uses React with Vite, is styled using Tailwind CSS and contains animations done with Framer Motion. The backend is an Express server that stores data in MongoDB.", 
        link: "https://github.com/areid126/cuecard-site"
    },
    {
        title: "BPIA", 
        image: "/bpia.png", 
        desc: "Block Process Internet Access: A command line program that allows the user to block or unblock any process or program currently running on their computer from accessing the internet. It does this by adding and removing rules from the Windows Filtering Platform. This program is written in C and uses several different Windows APIs and as such, only runs on Windows devices.", 
        link: "https://github.com/areid126/bpia"
    },
    {
        title: "Minesweeper", 
        image: "/minesweeper.png", 
        desc: "A recreation of the original Minesweeper game, written in Java. It has a frontend GUI written using Swing, which is designed to look like the classic Minesweeper game.", 
        link: "https://github.com/areid126/minesweeper-java"
    },
    {
        title: "Sudoku Solver", 
        image: "/sudoku_solver.png", 
        desc: "A command line program, that can be used to get either a complete solution or a step-by-step solution for solving a Sudoku. It uses a combination of programmed game rules and back tracking techniques to be able to solve any sudoku. This program is written using Python and takes its input in the form of a CSV file containing the sudoku. ", 
        link: "https://github.com/areid126/sudoku-solver"
    },
];

const Project = ({project}) => {
    return (
        <li class="flex xl:flex-row flex-col bg-slate-50 p-7 rounded-3xl gap-7 mx-14 max-xl:w-1/2 max-md:gap-4 max-sm:w-4/5" >
            <img class="xl:w-1/2 object-scale-down rounded-md h-fit my-auto" src={project.image}></img>
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