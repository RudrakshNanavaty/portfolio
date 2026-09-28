export interface Job {
  role: string;
  company: string;
  dates: string;
  logo?: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  school: string;
  dates: string;
  logo?: string;
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
    logo: '/assets/firstpeak.webp',
    bullets: [
      'Python async backend for multi-channel conversational AI. Scaled to 10k+ concurrent requests.',
      'Voice Agent evaluation framework with LLM-as-a-judge, automating QA. 10x faster than manual testing.',
      'Parallelized Twilio voice test suite.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'New Engen',
    dates: 'Mar 2024 – May 2025',
    logo: '/assets/new_engen.webp',
    bullets: [
      'Migrated legacy JS monolith to modern TypeScript/Python services. +40% deploy frequency, -25% runtime bugs.',
      'Achieved 6x faster API response times, compared to legacy code',
      'Built Python GraphQL APIs with 100ms responses during 3x traffic peaks.',
      'RabbitMQ bulk email pipeline with idempotency and durability; 99.99% success.'
    ]
  }
];

export const education: Education[] = [
  {
    degree: 'M.S. Computer Science',
    school: 'North Carolina State University',
    dates: '2026 - Present',
    logo: '/assets/ncsu-logo.webp'
  },
  {
    degree: 'B.E. Computer Engineering',
    school: 'Pandit Deendayal Energy University, India',
    dates: '2021 - 2025',
    logo: '/assets/pdeu.webp'
  }
];

export const projects: Project[] = [
  {
    name: 'EarningsLens',
    description:
      'RL environment predicting post-earnings stock movement from earnings call transcripts and press releases; published an open-source dataset for reproducible benchmarking.',
    stack: ['Python', 'Gradio', 'Hugging Face', 'RL'],
    links: [
      { label: 'Live demo', url: 'https://huggingface.co/spaces/GalacticTriumvirate/Earning_lens' },
      { label: 'Dataset', url: 'https://huggingface.co/datasets/RudrakshNanavaty/earnings-call-data' },
      { label: 'GitHub', url: 'https://github.com/RudrakshNanavaty/earnings-lens' }
    ]
  },
  {
    name: 'ChatGPT Tokenizer',
    description: 'Manual implementation of the Byte Pair Encoding (BPE) algorithm used by OpenAI in GPT-4.',
    stack: ['Next.js', 'React', 'TypeScript'],
    links: [
      { label: 'Live demo', url: 'https://gpt-tokenizer-sable.vercel.app/' },
      { label: 'GitHub', url: 'https://github.com/RudrakshNanavaty/gpt4-tokenizer' }
    ]
  },
  {
    name: 'NotebookLM',
    description:
      'RAG chatbot for accurate, domain-specific question answering, with end-to-end document ingestion and retrieval workflows for long-form content.',
    stack: ['Next.js', 'TypeScript', 'LangChain', 'Pinecone', 'PostgreSQL'],
    links: [
      { label: 'Demo video', url: 'https://drive.google.com/file/d/171NtJdeRIPbnhvp1m23DMlyczIUOi7ZY/view' },
      { label: 'GitHub', url: 'https://github.com/RudrakshNanavaty/notebook-lm' }
    ]
  },
  {
    name: 'HTTP Server from Scratch',
    description:
      'Built an HTTP server from scratch using low-level TCP sockets, including request parsing and response generation; implemented multiprocessing to serve concurrent client requests efficiently.',
    stack: ['C++', 'TCP/IP', 'Sockets', 'Multiprocessing'],
    links: [
      { label: 'GitHub', url: 'https://github.com/RudrakshNanavaty/c-web-server' }
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
  {
    category: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'Go', 'C', 'C++']
  },
  {
    category: 'Back End',
    items: ['FastAPI', 'Flask', 'ExpressJS', 'Node.js', 'REST APIs', 'GraphQL', 'Microservices', 'Gin']
  },
  {
    category: 'Front End',
    items: ['Next.js', 'React.js', 'Tailwind CSS', 'Redux Toolkit', 'Zustand', 'HTML/CSS']
  },
  {
    category: 'AI & LLMs',
    items: ['RAG', 'LangChain', 'Prompt Engineering', 'Vector Databases', 'Pinecone', 'Langfuse']
  },
  {
    category: 'Data & Messaging',
    items: ['SQL', 'NoSQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'RabbitMQ', 'Database Design']
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'GCP', 'Docker', 'NGINX', 'CI/CD Pipelines', 'Linux', 'Observability', 'Monitoring', 'Logging']
  }
];
