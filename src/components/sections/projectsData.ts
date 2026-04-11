import project1 from "../../assets/projects/project1.jpg";

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
}

export const projectList: Project[] = [
  {
    title: "Project One",
    description: "A responsive e-commerce site built with React and Tailwind.",
    image: project1,
    liveLink: "",
    githubLink: "",
    techStack: [
      { name: "React", icon: "mdi:react" },
      { name: "Tailwind", icon: "mdi:tailwind" },
      { name: "Node.js", icon: "mdi:nodejs" },
      { name: "MongoDB", icon: "lineicons:mongodb" },
    ],
  },
];
