export interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl: string;
  createdAt: string;
}

