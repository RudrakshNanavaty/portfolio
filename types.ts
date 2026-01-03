export interface Link {
  url: string;
  label: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface ProjectItem {
  title: string;
  tech: string[];
  description: string;
  links: {
    demo?: string;
    github?: string;
    blog?: string;
    paper?: string;
  };
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface AchievementItem {
  title: string;
  description: string;
  links: Link[];
}

export interface BlogItem {
  title: string;
  date?: string;
  description: string;
  claps?: number;
  url: string;
  image?: string;
}