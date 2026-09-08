export interface Job {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  school: string;
  dates: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  name: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
}

export interface Blog {
  title: string;
  description: string;
  url: string;
  image: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  url: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export const experience: Job[] = [
  {
    role: 'Software Engineer',
    company: 'FirstPeak.ai',
    dates: 'Sept 2025 – Feb 2026',
    bullets: [
      'Built Python backend services for a multi-channel conversational AI platform, optimizing async workflows to handle 50k+ concurrent requests.',
      'Designed an agent-to-agent evaluation framework where judge agents orchestrate calls to other agents, cutting manual QA cycles by 70%.',
      'Parallelized automated voice-agent testing across concurrent async Twilio calls, cutting regression runtime from 4 hours to 25 minutes.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'New Engen',
    dates: 'Mar 2024 – May 2025',
    bullets: [
      'Migrated a JavaScript monolith into TypeScript + Python microservices, improving deployment frequency by 40% and cutting runtime errors by 25%.',
      'Built Python GraphQL APIs powering custom client dashboards, sustaining 100ms average response times during 3x traffic spikes.',
      'Implemented a fault-tolerant bulk emailing pipeline on RabbitMQ with idempotency and durable job processing, hitting 99.99% delivery success.'
    ]
  }
];

export const education: Education[] = [
  { degree: 'M.S. Computer Science', school: 'North Carolina State University', dates: '2026 – Present' },
  { degree: 'B.E. Computer Engineering', school: 'Pandit Deendayal Energy University, India', dates: '2021 – 2025' }
];

export const projects: Project[] = [
  {
    name: 'EarningsLens',
    description:
      'RL environment predicting post-earnings stock movement from earnings call transcripts and press releases; published an open-source dataset for reproducible benchmarking.',
    stack: ['Python', 'Gradio', 'Hugging Face', 'RL'],
    links: [
      { label: 'Live demo', url: '#' },
      { label: 'GitHub', url: '#' },
      { label: 'Dataset', url: '#' }
    ]
  },
  {
    name: 'ChatGPT Tokenizer',
    description: 'Manual implementation of the Byte Pair Encoding algorithm used by OpenAI in GPT-4.',
    stack: ['Next.js', 'React', 'TypeScript'],
    links: [
      { label: 'Live demo', url: '#' },
      { label: 'GitHub', url: '#' }
    ]
  },
  {
    name: 'NotebookLM',
    description:
      'RAG chatbot for domain-specific Q&A, with end-to-end document ingestion and retrieval for long-form content.',
    stack: ['Next.js', 'LangChain', 'Pinecone', 'PostgreSQL'],
    links: [
      { label: 'Demo video', url: '#' },
      { label: 'GitHub', url: '#' }
    ]
  }
];

export const blogs: Blog[] = [
  {
    title: 'Clean Architecture',
    description: 'Because nothing stands the test of time ⏱️',
    url: 'https://medium.com/@rudrakshnanavaty/clean-architecture-7c1b3b4cb181',
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/0*3ATAHRV0taZm5ieM'
  },
  {
    title: 'Building a Web Server using GO and Gin',
    description: 'Because PHP is a Dinosaur 🦖',
    url: 'https://medium.com/@rudrakshnanavaty/building-a-web-server-using-go-and-gin-39150b8304ee',
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/0*Y6aBqwZE_50dduN5'
  },
  {
    title: 'Implementing Clean Architecture in GO',
    description: 'Because why not? 😉',
    url: 'https://medium.com/@rudrakshnanavaty/implementing-clean-architecture-in-go-5f06dd8c1596',
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/0*Yjl8TesacqXIaW85'
  },
  {
    title: 'Amazon Shopping — The Computer Engineer Way',
    description: "Because I'm lazy 🥱",
    url: 'https://medium.com/@rudrakshnanavaty/amazon-shopping-the-computer-engineer-way-e9c0839723d1',
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*elzkZ3Uow74cichb'
  }
];

export const publications: Publication[] = [
  {
    title: 'The Potential of Big Data and Machine Learning for Ground Water Quality Assessment and Prediction',
    authors: 'Rajeev, Shah, Shah, Shah, Nanavaty',
    venue: 'Archives of Computational Methods in Engineering',
    year: '2025',
    url: 'https://doi.org/10.1007/s11831-024-10156-w'
  },
  {
    title: 'Exploring Autoencoders and XGBoost for Predictive Maintenance in Geothermal Power Plants',
    authors: 'Nanavaty',
    venue: '49th Stanford Geothermal Workshop',
    year: '2024',
    url: 'http://pangea.stanford.edu/ERE/db/GeoConf/papers/SGW/2024/Nanavaty.pdf'
  },
  {
    title:
      'A Comparative and Systematic Study of Machine Learning (ML) Approaches for Particulate Matter (PM) Prediction',
    authors: 'Pandya, Nanavaty, Pipariya, Shah',
    venue: 'Archives of Computational Methods in Engineering',
    year: '2023',
    url: 'https://doi.org/10.1007/s11831-023-09994-x'
  }
];

export const skillGroups: SkillGroup[] = [
  { category: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'Go'] },
  { category: 'Back End', items: ['REST APIs', 'GraphQL', 'Microservices'] },
  { category: 'AI & LLMs', items: ['RAG', 'Vector Databases', 'Prompt Engineering'] },
  { category: 'Data & Messaging', items: ['SQL & NoSQL Databases', 'Message Queues'] },
  { category: 'Cloud & DevOps', items: ['Cloud Platforms', 'Containerization', 'CI/CD'] }
];
