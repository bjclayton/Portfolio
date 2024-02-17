import AnimatedPinCard from "../components/cards/AnimatedPinCard";
import TextRevealCard from "../components/cards/TextRevealCard";
import FloatingNavBar from "../components/FloatingNavBar";
import BackgroundBoxes from "../components/BackgroundBoxes";
import InfiniteMovingCards from "../components/InfiniteMovingCards";
import SubscribeNewsletter from "../components/SubscribeNewsletter";
import DotBackground from "../components/DotBackground";

const Main = () => {
    return (
        <>
            <FloatingNavBar />
            <h1 className="text-3xl font-bold underline text-green-900">
                Hello world!
            </h1>
            <AnimatedPinCard />
            <TextRevealCard />
            <BackgroundBoxes />
            <InfiniteMovingCards />
            <SubscribeNewsletter />
            <DotBackground />
        </>
    )
}

export default Main