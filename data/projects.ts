export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "Project 1",
    description: "A description of your first project",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com",
  },
  {
    title: "Project 2",
    description: "A description of your second project",
    tech: ["Next.js", "PostgreSQL", "Vercel"],
    link: "https://github.com",
  },
  {
    title: "Project 3",
    description: "A description of your third project",
    tech: ["Vue.js", "Node.js", "MongoDB"],
    link: "https://github.com",
  },
];
