import ImageList from "../ImageList";
import ProjectList from "./ProjectList";
import rainbow from "../../assets/rainbow.svg"
import puzzle from "../../assets/puzzle.svg"
import balloon from "../../assets/balloon.svg"
import corner1 from "../../assets/corner-1.svg"
import corner2 from "../../assets/corner-2.svg"
import compass from "../../assets/compass.svg"
import diamond from "../../assets/diamond.svg"
import underline5 from "../../assets/underline-5-slate-50.svg"
import transition7 from "../../assets/transition-7-sky-400.svg"


const IMAGES1 = [
    {src: rainbow, style: "absolute bottom-96 left-10 -rotate-[20deg]"},
    {src: puzzle, style: "absolute top-52 left-16 -rotate-[20deg]"},
    {src: balloon, style: "absolute top-[400px] right-10 -rotate-[20deg]"},
];

const IMAGES2 = [
    {src: corner1, style: "absolute -top-6 -right-1"},
    {src: corner2, style: "absolute -top-32 -left-1"},
    {src: compass, style: "absolute top-[500px] left-32 -rotate-[20deg]"},
    {src: diamond, style: "absolute bottom-[500px] right-32"},
];

const Projects = ({ ref }) => {
    return (
        <section ref={ref} class="bg-sky-500 flex flex-col items-center min-h-screen relative overflow-y-visible overflow-x-clip">
            <div class="flex flex-col items-center py-10">
                <h1 class=" text-center text-3xl font-bold text-slate-50 uppercase">My Projects</h1>
                <img src={underline5}></img>
            </div>
            <ProjectList />
            <div class="relative flex w-full mt-auto">
                <img src={transition7} class="bg-amber-300 rotate-180 w-full"></img>
                <div class="w-full absolute bottom-0 h-[1px] bg-amber-300"></div>
                <div class="w-full absolute top-0 h-[1px] bg-sky-500"></div>
            </div>
            <ImageList images={IMAGES1} hide={"max-sm:hidden"}  />
            <ImageList images={IMAGES2} hide={"max-lg:hidden"}  />
        </section>
    );
}

export default Projects;