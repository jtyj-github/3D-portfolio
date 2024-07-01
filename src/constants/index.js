import {schneider} from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    postgresql,
    pricewise,
    python,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
];

export const experiences = [
    {
        title: "Digital Solutions Engineer",
        company_name: "Schneider Electric",
        icon: schneider,
        iconBg: "#b7e4c7",
        date: "Jun 2023 - Present",
        points: [
            "Developed C# scripts to automate cleaning and conversion of incoming customer data to an easily ingestible format by our software, producing a 97.6% increase in efficiency.",
            "Designed and built 36 machine learning models for the monitoring of 16 critical plant assets, predicting equipment health behavior and catching potential asset failures during operations.",
            "Spearheaded the integration of AVEVA Predictive Analytics software to Digital Twin Solution offering, in a 7-man Agile project team.",
            "Designed and deployed 5 Virtual Machines on Schneider Electric Cloud (VMware) to facilitate software testing and API development.",
            "Created product demo on internal cloud environment to visually showcase solution concepts and facilitate customer understanding.",
            "Collaborated across multiple business units in strategy planning for a global roll-out of Energy Platform Management solution for 20 sites, spanning 7 countries, following the successful implementation of PoC."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/jtyj-github',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/j-tyj',
    }
];

export const projects = [
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Visa Requirement App',
        description: 'Created a React webapp using the NextJs 14 framework, that allows users to see their visa requirements for traveling to different countries. This app is deployed on Vercel.',
        link: 'https://visa-requirement-checker.vercel.app/',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Finance50',
        description: 'Utilized Yahoo Finance API to develop a stock trading simulator that allows users to buy and sell stocks, track their portfolio, and view their transaction history.',
        link: 'https://github.com/jtyj-github/finance50',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Post-Its Social Media App',
        description: 'Built a social media webapp, similar to instagram, using the MERN stack, allowing users to perform CRUD operations.',
        link: 'https://github.com/jtyj-github/PostIts-App',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'HDB Pricing Prediction',
        description: 'Developed a Machine Learning Model that predicts Housing prices based on factors like the town, flat type, floor area, etc.',
        link: 'none',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Convolutional Neural Network Image Classifier',
        description: 'Created a CNN in Python that can identify and distinguish various car brands with an accuracy of 77%, as part of my AI project in university.',
        link: 'none',
    }
];