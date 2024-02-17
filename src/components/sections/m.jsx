import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { CustomButton } from "../buttons/CustomButton";
import FixedNav from "../navbar/FixedNav";
import FramerMagnetic from "../FramerMagnetic";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="bg-gray-900 bg-grid-small-white/[0.2]">
            <FixedNav />
            <section className="relative">
                <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
                    <div className="space-y-5 max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl text-white font-extrabold mx-auto md:text-5xl">
                            John Clayton 👋
                        </h2>
                        <p className="max-w-2xl mx-auto text-gray-400">
                            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                        </p>

                        {/* Button */}
                        <div
                            className="justify-center items-center gap-x-3 sm:flex">
                            <CustomButton
                                label={'See More'}
                                onClick={() => { }}
                                svg={
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                    </svg>
                                }
                            />
                        </div>

                        <div className="flex justify-center items-center gap-x-4 text-gray-400 text-sm">
                            <div className="flex gap-8">
                                <FramerMagnetic>
                                    <Link
                                        to="https://www.linkedin.com/in/johnclaytonblanc">
                                        <FaLinkedin
                                            className="fill-white"
                                            size={25} />
                                    </Link>
                                </FramerMagnetic>

                                <FramerMagnetic>
                                    <Link
                                        to="https://github.com/jcblanc2">
                                        <FaGithub
                                            className="fill-white"
                                            size={25} />
                                    </Link>
                                </FramerMagnetic>

                                <FramerMagnetic>
                                    <FaInstagram className="fill-white" size={25} />
                                </FramerMagnetic>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background */}
                <div
                    className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}>
                </div>
            </section>
        </div>
    )
}

export default Hero