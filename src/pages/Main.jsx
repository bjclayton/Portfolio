import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";

const Main = () => {
    return (
        <main className="bg-grid-small-white/[0.2]">
            <Hero />
            <About />
        </main>
    )
}

export default Main