import ora from "../assets/images/ora.png";
import chat from "../assets/images/chat.png";
import cast from "../assets/images/cast.png";
import insta from "../assets/images/insta.png";
import tracer from "../assets/images/tracer.png";
import pen from "../assets/images/pen.png";

export const headlines = [
    "Hi, I'm Clayton.",
    "I'm a Software Developer",
    "I've spent the last 5 years building and scaling software for some pretty cool companies. I also teach people to paint online (incase you've got an empty canvas layin' around 🎨). Let's connect!"
];

export const navigation = [
    { title: "Home", path: "/" },
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Blog", path: "#blog" },
    { title: "Contact", path: "#contact" }
]

export const projects = [
    {
        title: 'SkyCast',
        image: cast,
        linkGithub: 'https://github.com/jcblanc2/SkyCast',
        linkOnline: 'https://sky-cast-taupe.vercel.app/',
        description: 'A web app that provides weather conditions and forecasts for selected cities.',
        techStack: ['React', 'Tailwind CSS', 'Firebase', 'Weather API']
    },
    {
        title: 'ChatGenius',
        image: chat,
        linkGithub: 'https://github.com/jcblanc2/ChatGenius',
        linkOnline: 'https://chat-genius-puce.vercel.app/',
        description: 'ChatGenius is a web application that harnesses the power of Large Language Models (LLMs) to facilitate natural and engaging conversations.',
        techStack: ['React', 'Tailwind CSS', 'Firebase', 'Replicate', 'Llama2']
    },
    {
        title: 'InstaWall',
        image: insta,
        linkGithub: 'https://github.com/jcblanc2/InstaWall',
        linkOnline: '<online-link>',
        description: 'A mobile application that allows users to discover, search, like, and share wallpapers from the Unsplash API.',
        techStack: ['Dart', 'Flutter', 'Firebase']
    },
    {
        title: 'PenX',
        image: pen,
        linkGithub: 'https://github.com/jcblanc2/PenX',
        linkOnline: 'https://pen-x.vercel.app/',
        description: 'A blog application built with React. It allows users to create and publish blog posts, as well as view and comment on other users\' posts.',
        techStack: ['MERN Stack', 'Tailwind CSS']
    },
    {
        title: 'History Tracer',
        image: tracer,
        linkGithub: 'https://github.com/jcblanc2/History-Tracer',
        description: 'A desktop application that reads history data from different web browsers (Mozilla Firefox, Google Chrome, Microsoft Edge, and Opera) and displays it in a table.',
        techStack: ['Java Swing', 'SQLite JDBC']
    },
    {
        title: 'ORA-API',
        image: ora,
        linkOnline: 'https://ora-api-documentation.vercel.app/',
        description: 'ORA API is a RESTful API that provides access to a wide range of Bible-related information, including books, chapters, verses, versions, genres, and search functionality.',
        techStack: ['JavaScript', 'Express', 'Mongoose']
    }
];

