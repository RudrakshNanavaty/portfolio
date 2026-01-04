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

export const RESUME_URL = "/resume.pdf";
export const CALENDLY_URL = "https://calendly.com/rudrakshnanavaty/quick-chat";

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "FirstPeak.ai",
    role: "Back End Developer",
    period: "Sep 2025 - Present",
    description: [
      "Built Python backend services for a production conversational AI platform handling voice + WhatsApp traffic.",
      "Shipped end-to-end billing with Stripe. Subscriptions, metered usage, auto-reconciliation, the works.",
      "Created agent-to-agent eval framework for automated QA. Cut release cycles from weeks to days by catching bad prompts early.",
      "Parallelized voice-agent testing with concurrent Twilio calls. Test throughput x4, regression suite from hours to minutes.",
      "Integrated Langfuse for full observability—traces, latency metrics, cost tracking—to debug bottlenecks and optimize model routing."
    ],
    logo: "/firstpeak.webp"
  },
  {
    company: "New Engen",
    role: "Back End Developer",
    period: "Mar 2024 - May 2025",
    description: [
      "Migrated a legacy monolith to microservices using TypeScript and Python, because nobody likes spaghetti code.",
      "Built GraphQL APIs for client dashboards holding <100ms p95 even at peak.",
      "Shipped a fault-tolerant bulk email pipeline with RabbitMQ.",
      "Implemented idempotent job processing to handle retries gracefully and avoid duplicate data chaos.",
      "Set strict performance baselines and optimized async execution to hit sub-200ms targets across the board."
    ],
    logo: "/new_engen_logo.webp"
  }
];


export const PROJECTS: ProjectItem[] = [
  {
    title: "NotebookLM RAG",
    tech: ["NextJS", "TypeScript", "LangChain", "Pinecone"],
    description: "Built a RAG chatbot that understands your docs.",
    links: { demo: "https://drive.google.com/file/d/171NtJdeRIPbnhvp1m23DMlyczIUOi7ZY/view", github: "https://github.com/RudrakshNanavaty/notebook-lm" },
  },

  {
    title: "ChatGPT Tokenizer",
    tech: ["NextJS", "ReactJS", "TypeScript"],
    description: "Manual BPE tokenizer implementation to understand how GPT chews text into tokens.",
    links: { demo: "https://gpt-tokenizer-sable.vercel.app", github: "https://github.com/RudrakshNanavaty/gpt4-tokenizer" },
    image: undefined
  },

  {
    title: "Amazon Price Tracker",
    tech: ["Go", "Python", "Selenium"],
    description: "Go routines scraping multiple SKUs concurrently. Real-time alerts when prices drop.",
    links: { github: "https://github.com/RudrakshNanavaty/price-tracker", blog: "https://medium.com/@rudrakshnanavaty/amazon-shopping-the-computer-engineer-way-e9c0839723d1" },
    image: undefined
  },
  {
    title: "Algorithm Visualizers",
    tech: ["ReactJS", "Go", "JavaScript"],
    description: "Interactive sims for OS scheduling + concurrency. Includes Dining Philosophers with deadlock avoidance.",
    links: {},
    image: 'undefined'
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
    links: [{ label: "View Publication", url: "https://pangea.stanford.edu/ERE/db/GeoConf/papers/SGW/2024/Nanavaty.pdf" }],
    image: "/stanford.webp"
  },
  {
    title: "A Comparative and Systematic Study of Machine Learning (ML) Approaches for Particulate Matter (PM) Prediction",
    description: "Archives of Computational Methods in Engineering, Springer Nature (Impact Factor 12.1)",
    links: [{ label: "View Publication", url: "https://doi.org/10.1007/s11831-023-09994-x" }],
    image: "/springer.webp"
  },
  {
    title: "The Potential of Big Data and Machine Learning for Ground Water Quality Assessment and Prediction",
    description: "Archives of Computational Methods in Engineering, Springer Nature (Impact Factor 12.1)",
    links: [{ label: "View Publication", url: "https://doi.org/10.1007/s11831-024-10156-w" }],
    image: "/springer.webp"
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