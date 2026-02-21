const Projects = ({ ...props }) => {
  return (
    <section {...props}>
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-accent text-3xl font-semibold mb-10 text-center">
          Projects
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Project One",
              description:
                "A responsive e-commerce site built with React and Tailwind.",
            },
            {
              title: "Project Two",
              description:
                "A portfolio template designed for creative professionals.",
            },
            {
              title: "Project Three",
              description:
                "A blog platform with markdown support and dark mode.",
            },
          ].map((project, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow">
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
