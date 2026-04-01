import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectList = [
  {
    title: "Project One",
    description: "A responsive e-commerce site built with React and Tailwind.",
    image: "image.png",
  },
  {
    title: "Project Two",
    description: "A portfolio template designed for creative professionals.",
    image: "image.png",
  },
  {
    title: "Project Three",
    description: "A blog platform with markdown support and dark mode.",
    image: "image.png",
  },
];

const Projects = () => {
  useEffect(() => {
    const projects = gsap.utils.toArray(".project-item");

    projects.forEach((project, index) => {
      const image = project.querySelector(".project-image");
      const title = project.querySelector(".project-title");
      const desc = project.querySelector(".project-desc");

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
        "-=0.3"
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
        "-=0.3"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
