import ImageList from "../ImageList";
import ProjectList from "./ProjectList";

const IMAGES1 = [
    {src: "/rainbow.svg", style: "absolute bottom-96 left-10 -rotate-[20deg]"},
    {src: "/puzzle.svg", style: "absolute top-52 left-16 -rotate-[20deg]"},
    {src: "/balloon.svg", style: "absolute top-[400px] right-10 -rotate-[20deg]"},
];

const IMAGES2 = [
    {src: "/corner-1.svg", style: "absolute -top-6 -right-1"},
    {src: "/corner-2.svg", style: "absolute -top-32 -left-1"},
    {src: "/compass.svg", style: "absolute top-[500px] left-32 -rotate-[20deg]"},
    {src: "/diamond.svg", style: "absolute bottom-[500px] right-32"},
];

const Projects = ({ ref }) => {
    return (
        <section ref={ref} class="bg-sky-500 flex flex-col items-center min-h-screen relative overflow-y-visible overflow-x-clip">
            <div class="flex flex-col items-center py-10">
                <h1 class=" text-center text-3xl font-bold text-slate-50 uppercase">My Projects</h1>
                <img src="/underline-5-slate-50.svg"></img>
            </div>
            <ProjectList />
            <div class="relative">
                <img src="/transition-7-sky-400.svg" class="bg-amber-300 rotate-180"></img>
                <div class="w-full absolute bottom-0 h-[1px] bg-amber-300"></div>
                <div class="w-full absolute top-0 h-[1px] bg-sky-500"></div>
            </div>
            <ImageList images={IMAGES1} hide={"max-sm:hidden"}  />
            <ImageList images={IMAGES2} hide={"max-lg:hidden"}  />
        </section>
    );
}

export default Projects;