import { BiBorderRadius } from "react-icons/bi";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_PROGRAMMING = [
  {
    skill_name: "Python",
    image: "python.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "R",
    image: "R.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C",
    image: "C.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Java",
    image: "java.webp",
    width: 90,
    height: 90,
  },
  {
    skill_name: "Dart",
    image: "Dart.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 100,
    height: 100,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Solidity",
    image: "solidity.png",
    width: 60,
    height: 60,
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/izzmir-danish-zulkifli-62b638253/",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/izzmir_danish?igsh=MXI5MjR6ODV5OWdxdQ%3D%3D&utm_source=qr",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/izzmir_danish?s=21&t=8u8x8-fzMSCzux1_CQBLBQ",
  },
] as const;

export const SKILL_FRAMEWORK = [
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Langchain",
    image: "langchain.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Swarm",
    image: "swarm.png",
    width: 120,
    height: 100,
  },
  {
    skill_name: "Flask",
    image: "flask.jpg",
    width: 60,
    height: 60,
  },
] as const;

export const SKILL_DATA_MANAGEMENT = [
  {
    skill_name: "ChromaDB",
    image: "chroma.png",
    width: 100,
    height: 100,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "SQL",
    image: "sql.jpg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "PowerBI",
    image: "powerBI.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Excel",
    image: "excel.png",
    width: 90,
    height: 90,
  },
] as const;

export const SKILL_MOBILE = [
  {
    skill_name: "Flutter",
    image: "Flutter.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Kotlin",
    image: "kotlin.png",
    width: 60,
    height: 60,
  },
] as const;

export const SKILL_MULTIMEDIA = [
  {
    skill_name: "Canva",
    image: "canva.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Capcut",
    image: "capcut.webp",
    width: 80,
    height: 80,
  },
] as const;

export const PROJECTS = [
  {
    title: "JomJalan",
    description:
      "JomJalan is an intelligent, all-in-one travel app that revolutionizes trip planning. It automatically scrapes and analyzes real-time trends from social media to provide a curated list of the most popular places to eat, visit, and explore.",
    image: "/projects/JomJalan.png",
    link: "https://github.com/jemayz/JomJalan",
  },
  {
    title: "Atlas",
    description:
      "Atlas is a Multimodal Chatbot that implement RAG which covers three domains which are Medical, Islamic and Insurance. It can answer complex questions by using retrieval-augmented generation (RAG).",
    image: "/projects/ATLAST.jpg",
    link: "https://github.com/jemayz/ATLAST",
  },
  {
    title: "TrustFunded",
    description:
      "TrustFunded is a blockchain-powered charity donation platform designed to provide transparent, secure, and efficient donations using Ethereum smart contracts. Build with Next.js, Ether.js and Metamask.",
    image: "/projects/TrustFunded.JPG",
    link: "https://github.com/jemayz/TrustFunded-DApp",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://www.youtube.com/@izzmir_danish",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/jemayz",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discordapp.com/users/701087409361780806",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/izzmir_danish?igsh=MXI5MjR6ODV5OWdxdQ%3D%3D&utm_source=qr",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/izzmir_danish?s=21&t=8u8x8-fzMSCzux1_CQBLBQ",
      },
      {
        name: "Facebook",
        icon: FaFacebook,
        link: "https://www.facebook.com/share/1AbZZx7Y9c/?mibextid=wwXIfr",
      },
    ],
  },
  {
    title: "Contact Me",
    data: [
      {
        name: "izzmirdanish@gmail.com",
        icon: null,
        link: "https://gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;
