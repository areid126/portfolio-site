// Import the different parts of the page as components
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Set up jumping between sections
import { useRef } from "react";


function App() {

    // Set up page sections
    const about = useRef(null);
    const projects = useRef(null);
    const contact = useRef(null);

    // Set up the function to scroll to a specific part of the page
    const scrollTo = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth"
        });
    }

    return (
        <>
            <Header scrollTo={scrollTo} about={about} projects={projects} contact={contact} />
            <Intro scrollTo={scrollTo} about={about} projects={projects} contact={contact} />
            <About ref={about} />
            <Projects ref={projects} />
            <Contact ref={contact} />
            <Footer />
        </>
    );
}

export default App
