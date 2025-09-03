import { useState } from "react";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import { AnimatePresence, motion } from 'framer-motion'
import NavButtons from "./NavButtons";
import star from "../../assets/star.svg"


// Animation for the background
const animateBackground = {
    initial: { opacity: 0 },
    animate: { opacity: 0.75 },
    exit: { opacity: 0, transition: { delay: 0.2 } },
    transition: { duration: 0.3 },
}

// Animation for the sidebar itself
const animateSidebar = {
    initial: { x: '+100%' },
    animate: { x: 0 },
    exit: { x: '+100%' },
    transition: { duration: 0.2 },
}

const SIDEBARSTYLE = "flex-col gap-5 p-10";

const Sidebar = ({ scrollTo, about, projects, contact }) => {
    const [open, setOpen] = useState(false);

    const BUTTONS = [
        {colour: "bg-pink-600 hover:bg-pink-200 hover:text-pink-600", name: "About", onClick: () => {setOpen(false); scrollTo(about);}},
        {colour: "bg-sky-500 hover:bg-sky-200 hover:text-sky-500", name: "Projects", onClick: () => {setOpen(false); scrollTo(projects);}}, 
        {colour: "bg-amber-400 hover:bg-amber-100 hover:text-amber-400", name: "Contact", onClick: () => {setOpen(false); scrollTo(contact);}}, 
    ];

    return (
        <>  
            <button onClick={() => setOpen(true)} class="bg-[url('/lines-slate-800.png')] bg-no-repeat bg-contain h-12 w-12 max-sm:h-9 max-sm:w-9 lg:hidden"></button>
            <AnimatePresence mode="wait" initial={false}>
                {open && (
                    <>
                        <RemoveScrollBar/>
                        <motion.div {...animateBackground} onClick={() => setOpen(false)} class="absolute h-full w-full top-0 bg-slate-800 opacity-75"></motion.div>
                        <motion.nav {...animateSidebar} class="absolute top-0 right-0 h-full bg-slate-50 flex flex-col items-end opacity-100">
                            <button onClick={() => setOpen(false)}  class="bg-[url('/x-slate-800.png')] bg-no-repeat bg-contain h-4 w-4 m-4"></button>
                            <NavButtons buttons={BUTTONS} style={SIDEBARSTYLE} />
                            <img src={star} class="m-10"></img>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

export default Sidebar;