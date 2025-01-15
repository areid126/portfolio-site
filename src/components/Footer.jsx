const Footer = ({ scrollTo, about, projects, contact, intro }) => {
    return (
        <footer class="flex flex-col items-center gap-7 bg-slate-50 relative">
            <div class="relative">
                <img src="/transition-6-pink-600.svg" class="absolute rotate-180 top-0"></img>
                <img src="/transition-6-amber-300.svg" class="rotate-180"></img>
            </div>
            <div class="flex w-full items-center justify-around max-md:flex-col max-md:gap-4">
                <div class="flex flex-col items-center">
                    <h1 class="text-center text-3xl font-semibold text-slate-800">Abbey's Portfolio</h1>
                    <img src="/underline-2-slate-800.svg"></img>
                </div>
                <ul class="flex gap-10 max-sm:grid max-sm:grid-cols-2 max-sm:gap-y-4">
                    <li onClick={() => scrollTo(intro)} class="cursor-pointer text-center text-xl font-bold uppercase text-slate-800 hover:underline underline-offset-4">Home</li>
                    <li onClick={() => scrollTo(about)} class="cursor-pointer text-center text-xl font-bold uppercase text-pink-600 hover:underline underline-offset-4">About</li>
                    <li onClick={() => scrollTo(projects)} class="cursor-pointer text-center text-xl font-bold uppercase text-sky-500 hover:underline underline-offset-4">Projects</li>
                    <li onClick={() => scrollTo(contact)} class="cursor-pointer text-center text-xl font-bold uppercase text-amber-300 hover:underline underline-offset-4">Contact</li>
                </ul>
            </div>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/areid126" class="group h-fit w-fit rounded-full border p-2 border-slate-800 hover:opacity-75">
                <div class="aspect-[1/1] h-8 w-8 cursor-pointer rounded-full bg-[url('/github-slate-800.png')] bg-contain bg-center bg-no-repeat"></div>
            </a>
            <p class="pb-8 font-semibold text-slate-800">© Copyright 2025 | All Rights Reserved</p>
            <img class="absolute bottom-[60px] right-20 rotate-[10deg]" src="/crown.svg"></img>
        </footer>
    );
}

export default Footer;