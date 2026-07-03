export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100 for tracking
  category: string; // 'frontend' | 'design'
  description: string;
}
