import { useState } from "react";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import { AnimatePresence, motion } from 'framer-motion'


// Animation for the background
const framerSidebarBackground = {
    initial: { opacity: 0 },
    animate: { opacity: 0.75 },
    exit: { opacity: 0, transition: { delay: 0.2 } },
    transition: { duration: 0.3 },
}

// Animation for the sidebar itself
const framerSidebarPanel = {
    initial: { x: '+100%' },
    animate: { x: 0 },
    exit: { x: '+100%' },
    transition: { duration: 0.2 },
}

const Sidebar = ({ scrollTo, about, projects, contact, ref }) => {
    const [open, setOpen] = useState(false);

    return (
        <>  
            <button onClick={() => setOpen(true)} class="bg-[url('/lines-slate-800.png')] bg-no-repeat bg-contain h-12 w-12"></button>
            <AnimatePresence mode="wait" initial={false}>
                {open && (
                    <>
                        <RemoveScrollBar/>
                        <motion.div {...framerSidebarBackground} onClick={() => setOpen(false)} class="absolute h-full w-full top-0 bg-slate-800 opacity-75"></motion.div>
                        <motion.nav {...framerSidebarPanel} class="absolute top-0 right-0 h-full bg-slate-50 flex flex-col items-end opacity-100">
                            <button onClick={() => setOpen(false)}  class="bg-[url('/x-slate-800.png')] bg-no-repeat bg-contain h-4 w-4 m-4"></button>
                            <ul class="flex flex-col gap-5 text-2xl font-semibold text-slate-50 p-10">
                                <li onClick={() => {setOpen(false); scrollTo(about);}} class="h-14 cursor-pointer rounded-full bg-pink-600 px-6 py-2.5 hover:bg-pink-200 hover:text-pink-600 text-center">About</li>
                                <li onClick={() => {setOpen(false); scrollTo(projects);}} class="h-14 cursor-pointer rounded-full bg-sky-500 px-6 py-2.5 hover:bg-sky-200 hover:text-sky-500 text-center">Projects</li>
                                <li onClick={() => {setOpen(false); scrollTo(contact);}} class="h-14 cursor-pointer rounded-full bg-amber-400 px-6 py-2.5 hover:bg-amber-100 hover:text-amber-400 text-center">Contact</li>
                            </ul>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

export default Sidebar;