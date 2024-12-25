import ora from "../assets/images/ora.png";
import chat from "../assets/images/chat.png";
import cast from "../assets/images/cast.png";
import insta from "../assets/images/insta.png";
import tracer from "../assets/images/tracer.png";
import pen from "../assets/images/pen.png";
import a1 from "../assets/images/a1.webp";
import a2 from "../assets/images/a2.webp";
import a4 from "../assets/images/a4.webp";
import a5 from "../assets/images/a5.webp";


export const headlines = [
    "Hi, I'm Clayton.",
    "I'm a Software Developer",
    "Over the past few years, I've immersed myself in building and scaling backend software while actively tackling frontend challenges."
];

export const fixedNavItems = [
    { name: "Home" },
    { name: "About" },
    { name: "Projects" },
    { name: "Blog" },
    { name: "Contact" }
]

export const projects = [
    {
        title: 'SkyCast',
        image: cast,
        linkGithub: 'https://github.com/bjclayton/SkyCast',
        linkOnline: 'https://sky-cast-taupe.vercel.app/',
        description: 'SkyCast is a web app that provides real-time weather conditions and forecasts for selected cities.',
        techStack: ['React', 'Tailwind CSS', 'Firebase', 'Weather API']
    },
    {
        title: 'ORA-API',
        image: ora,
        linkOnline: 'https://ora-api-documentation.vercel.app/',
        linkGithub: null,
        description: 'A RESTful API that provides access to a wide range of Bible-related information, including versions, books, verses, and search functionality.',
        techStack: ['JavaScript', 'Express', 'Mongoose']
    },
    {
        title: 'ChatGenius',
        image: chat,
        linkGithub: 'https://github.com/bjclayton/ChatGenius',
        linkOnline: 'https://chat-genius-puce.vercel.app/',
        description: 'A web application that harnesses the power of Large Language Models (LLMs) to facilitate natural and engaging conversations.',
        techStack: ['React', 'Tailwind CSS', 'Firebase', 'Replicate', 'Llama2']
    },
    {
        title: 'History Tracer',
        image: tracer,
        linkGithub: 'https://github.com/bjclayton/History-Tracer',
        linkOnline: null,
        description: 'History Tracer is A desktop application that reads history data from different web browsers and displays it in a table.',
        techStack: ['Java Swing', 'SQLite JDBC']
    },
    {
        title: 'InstaWall',
        image: insta,
        linkGithub: 'https://github.com/bjclayton/InstaWall',
        linkOnline: null,
        description: 'InstaWall is a mobile application that allows users to discover, search, like, and share wallpapers from the Unsplash API.',
        techStack: ['Dart', 'Flutter', 'Firebase']
    },
    {
        title: 'PenX',
        image: pen,
        linkGithub: 'https://github.com/bjclayton/PenX',
        linkOnline: 'https://pen-x.vercel.app/',
        description: 'A blog application built with React. It allows users to create and publish blog posts, as well as view and comment on other users\' posts.',
        techStack: ['MERN Stack', 'Tailwind CSS']
    },
];

export const skillsWork = [
    'Go',
    'Java',
    'NodeJS',
    'Python',
    'PostgreSQL',
    'MySQL',
    'Redis',
    'Docker',
    'Kubernetes',
    'Jenkins',
    'AWS',
];

export const certificates = [
    'CompTIA  A+',
    'Jenkins',
    'Traefik',
    'GitHub Actions',
];

export const articles = [
    {
        title: "LLaMA CPP and Python: The Easiest Way to Build Your Own ChatGPT",
        resume: "Today, we hear a lot about large language models (LLMs) like GPT-3, GPT-4, PaLM, Gopher, etc. These models have shown their capacity to solve problems and generate text.",
        url:
            "https://medium.com/ai-mind-labs/llama-cpp-and-python-the-easiest-way-to-build-your-own-chatgpt-e473a9847878",
        image: a1
    },
    {
        title: "How AI can inherit our biases",
        resume: " In 2014, a prominent example occurred when Amazon developed an AI-based recruiting tool. Designed to streamline resume screening, the algorithm ended up discriminating against women. Why? Because it was trained on a dataset...",
        url: "https://medium.com/p/e3a367a18104",
        image: a5
    },
    {
        title: "Google Search vs Local PC Search",
        resume: "Have you ever experienced the frustration of waiting for your computer to cough up search results while Google effortlessly delivers them in the blink of an eye? 😩 A simple Google search yields results in a mere 0.28 seconds...",
        url: "https://medium.com/ai-mind-labs/google-search-vs-local-pc-search-902a6291e6ce",
        image: a4
    },
    {
        title: "The JavaScript Universe: Imperfections and Essential Insights",
        resume: "In the ever-evolving world of web development, JavaScript reigns supreme. From crafting dynamic, interactive websites to powering complex server-side applications, its versatility knows no bounds.",
        url:
            "https://pub.aimind.so/the-javascript-universe-imperfections-and-essential-insights-fc9be3e65af4",
        image: a2
    },
];


export const metadata = {
    title: "John Clayton Blanc",
    description: "This portfolio is a collection of my work that showcases my skills and creativity.",
    imageURL: "https://avatars.githubusercontent.com/u/108766949?s=400&u=1671b3dfc6d09709a394c94b1566e56e6e3e16cd&v=4",
    pageUrl: "https://www.johnclaytonblanc.com"
};
