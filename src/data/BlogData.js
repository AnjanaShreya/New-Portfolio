import Blogpage from "../assets/Images/blogpage.png";
import Chatbot from "../assets/Images/chatbot.png";
import EPALS from "../assets/Images/EPALS.png";
import prof from "../assets/Images/prof.png";
import iks from "../assets/Images/iks.png";

export const Blogs = [
    {
        id: 1,
        name: "BlogPage Website",
        description: "Currently developing a full-stack blog website using the MERN. The platform allows users to upload blogs, supports blog verification workflows, and displays verified content in a user-friendly interface ",
        tags: ["MERN", "React", "Node.js", "MongoDB"],
        date: "Feb 2025 - Present",
        imgSrc: Blogpage,
        link: "#",
        github: "https://github.com/AnjanaShreya/BlogPage"
    },
    {
        id: 2,
        name: "ChatBot",
        description: "Designed and implemented a user friendly chatbot interface with a sleek, responsive layout, enhancing user interaction and engagement.",
        tags: ["ReactJS", "NodeJS", "MySQL"],
        date: "Nov 2024 - Jan 2025 ",
        imgSrc: Chatbot,
        link: "#",
        github: "https://github.com/AnjanaShreya/chatbot",
    },
    {
        id: 3,
        name: "Employee Management and Monitoring System",
        description: "Developed an employee monitoring website which aims to provide a centralized platform to small organizations which saves time and provides user friendly approach ",
        tags: ["MERN", "React", "Node.js", "MongoDB", "Redux"],
        date: "July 2024 - Sept 2024",
        imgSrc: EPALS,
        link: "#",
        github: "https://github.com/AnjanaShreya/EPALS"
    },
    {
        id: 4,
        name: "Personal Website for a Professor",
        description: "Developed a personal website for a professor which showcases the professor's research work and provides information about their academic background. It also includes the couses, course structure and the course materials taught by the professor.",
        tags: ["HTML", "CSS", "JavaScript"],
        date: "Aug 2023 - Jan 2024 ",
        imgSrc: prof,
        link: "https://anjanashreya.github.io/Personal-Website/",
        github: "https://github.com/AnjanaShreya/Personal-Website",
    },
    {
        id: 5,
        name: "Website for Organisation of Researched Information ",
        description: "Developed a centralized website to organize and present all the information collected for the IKS project. The platform ensures structured data management and provides easy accessibility for users to explore resources.", 
        tags: ["HTML", "CSS", "JavaScript"],
        date: "Jul 2023 - Aug 2023",
        imgSrc: iks,
        link: "https://anjanashreya.github.io/webpage-iks/",
        github: "https://github.com/AnjanaShreya/webpage-iks",
    },
];