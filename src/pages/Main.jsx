import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Blog from "../components/sections/Blog";
import Footer from "../components/sections/Footer";
import { Analytics } from "@vercel/analytics/react";
import { Helmet } from "react-helmet";
import { metadata } from "../utils";

const Main = () => {
    return (
        <main>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{metadata.title}</title>
                <link rel="canonical" href={metadata.pageUrl} />
                <meta name="description" content={metadata.description} />
                <meta property="og:title" content={metadata.title} />
                <meta property="og:description" content={metadata.description} />
                <meta property="og:image" content={metadata.imageURL} />
                <meta property="og:url" content={metadata.pageUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={metadata.title}  />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metadata.title} />
                <meta name="twitter:description" content={metadata.description} />
                <meta name="twitter:image" content={metadata.imageURL} />
            </Helmet>

            <Hero />
            <About />
            <Projects />
            <Blog />
            <Contact />
            <Footer />
            <Analytics />
        </main>
    )
}

export default Main