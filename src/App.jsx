// Import the different parts of the page as components
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// Set up jumping between sections
import { useRef } from "react";


function App() {

    // Set up page sections
    const about = useRef(null);
    const projects = useRef(null);
    const contact = useRef(null);
    const intro = useRef(null);

    // Set up the function to scroll to a specific part of the page
    const scrollTo = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth"
        });
    }

    return (
        <>
            <Intro scrollTo={scrollTo} about={about} projects={projects} contact={contact} ref={intro} />
            <About ref={about} />
            <Projects ref={projects} />
            <Contact ref={contact} />
            <Footer scrollTo={scrollTo} about={about} projects={projects} contact={contact} intro={intro} />
        </>
    );
}

export default App
