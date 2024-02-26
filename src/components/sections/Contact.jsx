import BumbyTextAnim from "../text anim/BumbyTextAnim";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { CustomButton } from "../buttons/CustomButton";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { sendEmail } from "../../services/email";
import { useState } from "react";

const Contact = () => {
    const [sender, setSender] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const handleSendMessage = (event) => {
        event.preventDefault();
        sendEmail(sender, subject, body);

        setSender('');
        setSubject('');
        setBody('');
    }

    return (
        <section className="mt-5 max-w-4xl mx-auto md:px-8 pb-28" id="contact">
            <div className="text-primary-text text-center pb-10">
                <BumbyTextAnim text={"Contact."} className="text-4xl font-bold" />
                <p className="text-secondary-text">Get in touch</p>
            </div>

            <div className="flex items-stretch justify-center">
                <div className="grid md:grid-cols-2 px-5 md:px-0">
                    <div className="pr-6">
                        <p className="mt-3 mb-12 text-base text-secondary-text text-center md:text-left">
                            Shoot me an email if you want to connect! You can also find me on Linkedin
                        </p>

                        <ul className="mb-6 md:mb-0">
                            {contactData.map((item, idx) =>
                                <Link to={item.path} key={idx}>
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-secondary text-primary-text">
                                            {item.icon}
                                        </div>

                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-primary-text">
                                                {item.title}
                                            </h3>
                                            <p className="text-secondary-text">
                                                {item.info}
                                            </p>
                                        </div>
                                    </li>
                                </Link>
                            )}
                        </ul>
                    </div>

                    <form className="space-y-8">
                        {/* Input Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-base font-medium text-secondary-text">
                                Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                className="shadow-sm bg-third border border-third text-primary-text text-base rounded-lg focus:ring-primary-500 block w-full p-2.5 placeholder-secondary-text focus:outline-none focus:right-2 focus:border-secondary" placeholder="email here"
                                required
                                value={sender}
                                onChange={(e) => setSender(e.target.value)} />
                        </div>

                        {/* Subject Input */}
                        <div>
                            <label
                                htmlFor="subject"
                                className="block mb-2 text-base font-medium text-secondary-text"
                            >
                                Subject
                            </label>

                            <input
                                type="text"
                                id="subject"
                                className="block p-3 w-full text-base text-primary-text bg-third rounded-lg border border-third shadow-sm placeholder-secondary-text focus:outline-none focus:right-2 focus:border-secondary"
                                placeholder="subject here"
                                required
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)} />
                        </div>

                        {/* Message Input */}
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-base font-medium text-secondary-text"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                rows="6"
                                className="block p-2.5 w-full text-base text-primary-text bg-third rounded-lg shadow-sm border border-third placeholder-secondary-text focus:outline-none focus:right-2 focus:border-secondary"
                                placeholder="your message..."
                                required
                                value={body}
                                onChange={(e) => setBody(e.target.value)} >
                            </textarea>
                        </div>

                        <CustomButton
                            label={'Send message'}
                            onClick={handleSendMessage}
                        />
                    </form>
                </div>
            </div>
        </section>
    )
}

const contactData = [
    {
        title: "Email",
        icon: <MdEmail size={24} />,
        info: "jclaytonblanc@gmail.com",
        path: "mailto:jclaytonblanc@gmail.com"
    },
    {
        title: "LinkedIn",
        icon: <FaLinkedin size={24} />,
        info: "@johnclaytonblanc",
        path: "https://www.linkedin.com/in/johnclaytonblanc"
    },
    {
        title: "Instagram",
        icon: <FaInstagram size={24} />,
        info: "@jclayton",
        path: "https://www.linkedin.com/in/johnclaytonblanc"
    },
];

export default Contact