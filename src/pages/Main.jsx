import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Blog from "../components/sections/Blog";
import Footer from "../components/sections/Footer";

const Main = () => {
    return (
        <main>
            <Hero />
            <About />
            <Projects />
            <Blog />
            <Contact />
            <Footer />
        </main>
    )
}

export default Main