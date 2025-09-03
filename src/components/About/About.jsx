import ImageList from "../ImageList";
import Details from "./Details";
import SkillList from "./SkillList";
import sparkles1 from "../../assets/sparkles-1.svg"
import sparkles2 from "../../assets/sparkles-2.svg"
import underline3 from "../../assets/underline-3-pink-600.svg"
import transition3 from "../../assets/transition-3-slate-50.svg"

const IMAGES = [
    {src: sparkles1, style: "absolute top-0 left-60"},
    {src: sparkles1, style: "absolute bottom-96 right-4"},
    {src: sparkles2, style: "absolute top-[700px] left-[400px]"}
];

const About = ({ ref }) => {
    return (
        <section ref={ref} class="flex flex-col items-center bg-slate-50 text-slate-50 min-h-screen relative">
            <div class="flex flex-col gap-1 items-center pb-10 xl:pb-40 z-2">
                <h1 class="text-center text-3xl font-bold text-pink-600 uppercase">About Me</h1>
                <img src={underline3}></img>
            </div>
            <div class="flex xl:flex-row flex-col items-center px-5 xl:gap-28 gap-10 px-8 max-w-[1280px] mx-auto">
                <div class="rounded-full border-4 border-dashed w-[450px] h-[450px] max-[500px]:w-full max-[500px]:mx-5 max-[500px]:h-auto aspect-[1/1]">
                    <div class="m-4 flex aspect-[1/1] items-center justify-center rounded-full bg-[url('/australia_3.jpeg')] bg-no-repeat bg-cover">
                    </div>
                </div>
                <Details />
            </div>
            <h2 class="text-center mt-32 text-2xl font-bold text-slate-800">SKILLS</h2>
            <SkillList/>
            <ImageList images={IMAGES} hide={"max-xl:hidden"} />
            <div class="relative flex w-full mt-auto">
                <img src={transition3} class="bg-sky-500 rotate-180 w-full"></img>
                <div class="w-full absolute bottom-0 h-[1px] bg-sky-500"></div>
                <div class="w-full absolute top-0 h-[1px] bg-slate-50"></div>
            </div>
        </section>
    );
}

export default About;