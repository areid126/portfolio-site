import LinkList from "./LinkList";
import transition6_pink from "../../assets/transition-6-pink-600.svg"
import transition6_amber from "../../assets/transition-6-amber-300.svg"
import underline2 from "../../assets/underline-2-slate-800.svg"
import crown from "../../assets/crown.svg"


const Footer = ({ scrollTo, about, projects, contact, intro }) => {
    const LINKS = [
        {name: "Home", colour: "text-slate-800", onClick: () => scrollTo(intro)},
        {name: "About", colour: "text-pink-600", onClick: () => scrollTo(about)},
        {name: "Projects", colour: "text-sky-500", onClick: () => scrollTo(projects)},
        {name: "Contact", colour: "text-amber-300", onClick: () => scrollTo(contact)}
    ];

    return (
        <footer class="flex flex-col items-center gap-7 bg-slate-50 relative">
            <div class="relative flex flex-col w-full">
                <img src={transition6_pink} class="absolute rotate-180 top-0 w-full"></img>
                <img src={transition6_amber} class="rotate-180 w-full"></img>
                <div class="w-full absolute top-0 h-[1px] bg-amber-300"></div>
            </div>
            <div class="flex w-full items-center justify-around max-md:flex-col max-md:gap-4">
                <div class="flex flex-col items-center">
                    <h1 class="text-center text-3xl font-semibold text-slate-800">Abbey's Portfolio</h1>
                    <img src={underline2}></img>
                </div>
                <LinkList links={LINKS} />
            </div>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/areid126" class="group h-fit w-fit rounded-full border p-2 border-slate-800 hover:opacity-75">
                <div class="aspect-[1/1] h-8 w-8 cursor-pointer rounded-full bg-[url('/github-slate-800.png')] bg-contain bg-center bg-no-repeat"></div>
            </a>
            <p class="pb-8 font-semibold text-slate-800">© Copyright 2025 | All Rights Reserved</p>
            <img class="absolute bottom-[60px] right-20 rotate-[10deg]" src={crown}></img>
        </footer>
    );
}

export default Footer;