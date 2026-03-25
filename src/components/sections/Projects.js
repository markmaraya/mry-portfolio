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
              className="grid md:grid-cols-2 gap-6 items-center p-6"
            >
              <div
                className={`${index % 2 === 0 ? "order-1" : "order-2"} flex justify-center items-center`}
              >
                {/* <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full h-auto object-cover"
                /> */}
                <div className="bg-gray-400 w-full h-64 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">
                    Image Placeholder
                  </span>
                </div>
              </div>
              <div
                className={`${index % 2 === 0 ? "order-2" : "order-1 text-right"}`}
              >
                <h4 className="text-secondary text-3xl font-hero mb-2">
                  {project.title}
                </h4>
                <p className="text-text">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
