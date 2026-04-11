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
    title: "Front-End Developer Portfolio",
    description:
      "A responsive React and TypeScript portfolio showcasing projects and skills. Features a refined project section with improved layout, polished styling, and a modern design to highlight work effectively.",
    image: project1,
    liveLink: "",
    githubLink: "https://github.com/markmaraya/mry-portfolio",
    techStack: [
      { name: "React", icon: "mdi:react" },
      { name: "Typescript", icon: "mdi:language-typescript" },
      { name: "Tailwind", icon: "mdi:tailwind" },
      { name: "GSAP", icon: "mdi:animation" },
    ],
  },
];
