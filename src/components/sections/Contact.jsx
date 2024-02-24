import BumbyTextAnim from "../text anim/BumbyTextAnim";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { BackgroundBoxes } from "../ui/BackgroundBoxes";

const Contact = () => {
    return (
        <section className="mt-5 max-w-4xl mx-auto md:px-8 pb-28" id="contact">
            <div className="text-primary-text text-center relative z-20">
                <BumbyTextAnim text={"Contact."} className="text-4xl font-bold" />
                <p className="text-secondary-text pb-3">
                    Shoot me an email if you want to connect! You can also find me on <Link
                        to="https://www.linkedin.com/in/johnclaytonblanc"
                        className="text-secondary">Linkedin</Link>.
                </p>

                <a
                    href="mailto:jclaytonblanc@gmail.com"
                    className="text-secondary-text hover:text-secondary flex gap-2 justify-center items-center"
                >
                    <MdEmail />jclaytonblanc@gmail.com
                </a>
            </div>
        </section>
    )
}

export default Contact