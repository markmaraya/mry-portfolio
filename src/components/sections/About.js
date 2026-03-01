const About = ({ ...props }) => {
  const timeline = [
    {
      year: "2018",
      title: "Started Computer Science Degree",
      description: "Began my journey into software development.",
    },
    {
      year: "2020",
      title: "Internship at Tech Company",
      description: "Worked on front-end projects and learned teamwork.",
    },
    {
      year: "2022",
      title: "First Full-Time Developer Role",
      description: "Focused on building scalable web applications.",
    },
    {
      year: "2025",
      title: "Freelance & Portfolio Launch",
      description: "Started freelancing and built my personal portfolio.",
    },
  ];

  return (
    <section {...props}>
      <h3 className="text-accent text-3xl font-semibold mb-6">About</h3>
      <div className="bg-white shadow-lg rounded-lg p-8 mb-12 text-center">
        <p className="text-secondary leading-relaxed">
          I'm a passionate developer with experience in HTML, CSS, JavaScript,
          and frameworks like Angular. I love turning ideas into interactive web
          experiences.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-500 h-full"></div>

        {timeline.map((item, index) => (
          <div
            key={index}
            className={`flex items-center ${index % 2 === 0 ? "justify-start mr-60" : "justify-end ml-60"}
            ${index !== timeline.length - 1 ? "-mb-6" : ""}`}
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-green-700 border-2 border-green-900 z-10"></div>

            <div className="bg-white shadow-md rounded-lg p-8 w-8/12 border border-green-200">
              <p className="text-sm text-green-600">{item.year}</p>
              <h4 className="text-lg font-semibold text-green-800">
                {item.title}
              </h4>
              <p className="text-green-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
