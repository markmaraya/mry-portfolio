import project1 from "../../assets/projects/project1.jpg";
import project2 from "../../assets/projects/project2.jpg";

export interface Tech {
  name: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  liveLink: string;
  githubLink: string;
  techStack: Tech[];
  order: number;
}

export const projectList: Project[] = [
  {
    title: "Front-End Developer Portfolio",
    description:
      "A responsive React and TypeScript portfolio showcasing projects and skills. Features a refined project section with improved layout, polished styling, and a modern design to highlight work effectively.",
    image: project1,
    liveLink: "https://markmaraya.netlify.app",
    githubLink: "https://github.com/markmaraya/mry-portfolio",
    techStack: [
      { name: "React", icon: "mdi:react" },
      { name: "Typescript", icon: "mdi:language-typescript" },
      { name: "Tailwind", icon: "mdi:tailwind" },
      { name: "GSAP", icon: "mdi:animation" },
    ],
    order: 2,
  },
  {
    title: "Dealership Management System",
    description:
      "A streamlined platform for managing vehicle inventory, sales, and expenses. Designed to simplify dealership operations, it provides organized workflows, and an intuitive interface to keep business running smoothly.",
    image: project2,
    liveLink: "https://mmdms.netlify.app",
    githubLink: "https://github.com/markmaraya/dealership-management-system",
    techStack: [
      { name: "Angular", icon: "mdi:angular" },
      { name: "Node.js", icon: "mdi:nodejs" },
      { name: "MongoDB", icon: "simple-icons:mongodb" },
      { name: "Express", icon: "simple-icons:express" },
      { name: "Angular Material", icon: "devicon-plain:angularmaterial" },
      { name: "SCSS", icon: "mdi:sass" },
    ],
    order: 1,
  },
];
