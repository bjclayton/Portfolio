import { useEffect, useState } from "react";
import { FloatingNavBar } from "./FloatingNavBar";
import FixedNavBar from "./FixedNavBar";

const NavBar = () => {
    const [isScrolling, setIsScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setIsScrolling(true);
        } else {
            setIsScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <FixedNavBar />
            <FloatingNavBar visible={isScrolling} />
        </>
    );
}

export default NavBar