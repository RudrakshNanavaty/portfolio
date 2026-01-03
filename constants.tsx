import { ExperienceItem, ProjectItem, SkillCategory, AchievementItem, BlogItem } from './types';
import { LuMail } from "react-icons/lu";
import { SiGithub, SiLinkedin, SiMedium, SiGooglescholar } from "react-icons/si";

export const SOCIAL_LINKS = [
  { icon: <LuMail size={20} />, url: "mailto:rudrakshnanavaty@gmail.com", label: "Email" },
  { icon: <SiGithub size={20} />, url: "https://github.com/RudrakshNanavaty", label: "GitHub" },
  { icon: <SiLinkedin size={20} />, url: "https://linkedin.com/in/RudrakshNanavaty", label: "LinkedIn" },
  { icon: <SiMedium size={20} />, url: "https://medium.com/@RudrakshNanavaty", label: "Medium" },
  { icon: <SiGooglescholar size={20} />, url: "https://scholar.google.com/citations?user=p32ldl8AAAAJ&hl=en", label: "Scholar" },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "FirstPeak.ai",
    role: "Back End Developer",
    period: "Sep 2025 – Present",
    description: [
      "Architected robust Python-based backend services for a high-volume conversational AI platform, ensuring scalable async workflows.",
      "Engineered end-to-end billing infrastructures, integrating Stripe for subscriptions, metering, and automated reconciliation.",
      "Designed an advanced agent-to-agent evaluation framework, enabling automated quality assurance and significantly accelerating release velocity.",
      "Optimized automated voice-agent testing workflows through parallelization, drastically reducing regression suite runtime.",
      "Implemented comprehensive observability using Langfuse to debug latency issues and optimize model routing."
    ]
  },
  {
    company: "New Engen",
    role: "Back End Developer",
    period: "Mar 2024 – May 2025",
    description: [
      "Led the migration of a legacy monolith to a modern microservices architecture using TypeScript and Python, improving system reliability.",
      "Developed high-performance GraphQL APIs to power custom client dashboards, maintaining low latency during peak load periods.",
      "Built a fault-tolerant bulk emailing pipeline with RabbitMQ, ensuring delivery reliability even during network partitions.",
      "Implemented idempotent job processing mechanisms to guarantee at-least-once processing semantics and prevent data duplication.",
      "Established strict performance baselines and optimized async execution paths to meet rigorous latency targets."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "NotebookLM RAG",
    tech: ["NextJS", "TypeScript", "LangChain", "Pinecone"],
    description: "A sophisticated Retrieval-Augmented Generation chatbot utilizing vector databases for domain-specific query answering with high accuracy. Features robust session persistence and dynamic document ingestion.",
    links: { demo: "#", github: "#" }
  },
  {
    title: "ChatGPT Tokenizer",
    tech: ["NextJS", "ReactJS", "TypeScript"],
    description: "A manual implementation of the Byte Pair Encoding (BPE) algorithm used in modern LLMs, visualizing how text is processed into tokens for model consumption.",
    links: { demo: "#", github: "#" }
  },
  {
    title: "Amazon Price Tracker",
    tech: ["Go", "Python", "Selenium"],
    description: "An automated web scraper engineered with Go routines for concurrent monitoring of product prices across multiple SKUs, delivering real-time alerts.",
    links: { github: "#", blog: "#" }
  },
  {
    title: "Algorithm Visualizers",
    tech: ["ReactJS", "Go", "JavaScript"],
    description: "Interactive simulations for operating system scheduling and concurrency problems, including a visualization of the Dining Philosophers problem with deadlock prevention.",
    links: { github: "#" }
  },
];

export const SKILLS: SkillCategory[] = [
  {
    category: "AI & LLMs",
    items: ["RAG", "LangChain", "Pinecone", "Prompt Engineering", "Vector DBs", "Langfuse"]
  },
  {
    category: "Backend Engineering",
    items: ["Python", "Go", "FastAPI", "ExpressJS", "GraphQL", "tRPC", "RabbitMQ"]
  },
  {
    category: "Frontend & Full Stack",
    items: ["TypeScript", "JavaScript", "ReactJS", "NextJS", "Redux Toolkit", "TailwindCSS"]
  },
  {
    category: "Infrastructure & Data",
    items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "GCP", "Linux"]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "Exploring Autoencoders and XGBoost for Predictive Maintenance in Geothermal Power Plants",
    description: "Presented solo-authored paper as the youngest speaker at the 2024 Stanford Geothermal Workshop.",
    links: [{ label: "View Publication", url: "https://pangea.stanford.edu/ERE/db/GeoConf/papers/SGW/2024/Nanavaty.pdf" }]
  },
  {
    title: "A Comparative and Systematic Study of Machine Learning (ML) Approaches for Particulate Matter (PM) Prediction",
    description: "Archives of Computational Methods in Engineering, Springer Nature (Impact Factor 12.1)",
    links: [{ label: "View Publication", url: "https://doi.org/10.1007/s11831-023-09994-x" }]
  },
  {
    title: "The Potential of Big Data and Machine Learning for Ground Water Quality Assessment and Prediction",
    description: "Archives of Computational Methods in Engineering, Springer Nature (Impact Factor 12.1)",
    links: [{ label: "View Publication", url: "https://doi.org/10.1007/s11831-024-10156-w" }]
  }
];

export const BLOGS: BlogItem[] = [
  {
    title: "Clean Architecture",
    description: "Because nothing stands the test of time ⏱️",
    url: "https://medium.com/@rudrakshnanavaty/clean-architecture-7c1b3b4cb181",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*3ATAHRV0taZm5ieM",
  },
  {
    title: "Building a Web Server using GO and Gin",
    description: "Because PHP is a Dinosaur 🦖",
    url: "https://medium.com/@rudrakshnanavaty/building-a-web-server-using-go-and-gin-39150b8304ee",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*Y6aBqwZE_50dduN5",
  },
  {
    title: "Implementing Clean Architecture in GO",
    description: "Because why not? 😉",
    url: "https://medium.com/@rudrakshnanavaty/implementing-clean-architecture-in-go-5f06dd8c1596",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*Yjl8TesacqXIaW85",
  },
  {
    title: "Amazon Shopping — The Computer Engineer Way",
    description: "Because I'm lazy 🥱",
    url: "https://medium.com/@rudrakshnanavaty/amazon-shopping-the-computer-engineer-way-e9c0839723d1",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*elzkZ3Uow74cichb",
  }
];