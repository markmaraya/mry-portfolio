import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger);

const projectList = [
  {
    title: "Project One",
    description: "A responsive e-commerce site built with React and Tailwind.",
    image: "image.png",
    liveLink: "",
    githubLink: "",
    techStack: [
      { name: "React", icon: "mdi:react" },
      { name: "Tailwind", icon: "mdi:tailwind" },
      { name: "Node.js", icon: "mdi:nodejs" },
      { name: "MongoDB", icon: "lineicons:mongodb" },
    ],
  },
  {
    title: "Project Two",
    description: "A portfolio template designed for creative professionals.",
    image: "image.png",
    liveLink: "",
    githubLink: "",
    techStack: [
      { name: "React", icon: "mdi:react" },
      { name: "Tailwind", icon: "mdi:tailwind" },
      { name: "Node.js", icon: "mdi:nodejs" },
      { name: "MongoDB", icon: "lineicons:mongodb" },
    ],
  },
  {
    title: "Project Three",
    description: "A blog platform with markdown support and dark mode.",
    image: "image.png",
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

const Projects = () => {
  useEffect(() => {
    const projects = gsap.utils.toArray(".project-item");

    projects.forEach((project, index) => {
      const image = project.querySelector(".project-image");
      const title = project.querySelector(".project-title");
      const desc = project.querySelector(".project-desc");
      const links = project.querySelector(".project-links");
      const badges = project.querySelectorAll(".tech-badge");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: project,
          scroller: ".App",
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        image,
        { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
        {
          opacity: 1,
          x: 0,
          ease: "power2.out",
          duration: 0.6,
        },
      );

      tl.fromTo(
        title,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          duration: 0.6,
        },
        "-=0.3",
      );

      tl.fromTo(
        desc,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          duration: 0.6,
        },
        "-=0.3",
      );

      tl.fromTo(
        links,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          duration: 0.6,
        },
        "-=0.3",
      );

      tl.fromTo(
        badges,
        { opacity: 0, x: index % 2 === 0 ? 100 : -100 },
        {
          opacity: 1,
          x: 0,
          ease: "power3.out",
          duration: 0.5,
          stagger: index % 2 === 0 ? 0.15 : { each: 0.15, from: "end" },
        },
        "-=0.2",
      );
    });
  }, []);

  return (
    <section id="projects" className="min-h-screen bg-bg pt-32">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-accent text-5xl text-center font-hero mb-16">
          Projects
        </h3>
        <div className="space-y-16">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="project-item grid md:grid-cols-2 gap-6 items-center p-6"
            >
              <div
                className={`${index % 2 === 0 ? "order-1" : "order-2"} flex justify-center items-center`}
              >
                {/* <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full h-auto object-cover"
                /> */}
                <div className="project-image bg-gray-400 w-full h-64 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">
                    Image Placeholder
                  </span>
                </div>
              </div>
              <div
                className={`${index % 2 === 0 ? "order-2" : "order-1 text-right"}`}
              >
                <h4 className="project-title text-secondary text-3xl font-hero mb-2">
                  {project.title}
                </h4>
                <p className="project-desc text-text">{project.description}</p>

                <div
                  className={`project-links flex gap-3 mt-4 ${index % 2 && "justify-end"}`}
                >
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded bg-link text-dark font-semibold shadow-md
                    transform transition duration-200 
                    hover:bg-linkHover hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:-translate-y-1"
                  >
                    View Project
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded bg-dark/60 text-light shadow-md 
                    transform transition duration-200 
                    hover:bg-muted hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:-translate-y-1"
                  >
                    GitHub
                  </a>
                </div>

                <div
                  className={`flex flex-wrap gap-2 mt-4 ${index % 2 && "justify-end"}`}
                >
                  {project.techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="tech-badge flex items-center gap-2 px-3 py-1 rounded-full 
                       bg-secondary text-text pointer-events-none"
                    >
                      <Icon icon={tech.icon} className="w-5 h-5" />
                      <span className="text-sm">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
