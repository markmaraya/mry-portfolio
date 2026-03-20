const About = ({ ...props }) => {
  return (
    <section {...props}>
      <h3 className="text-accent text-5xl font-hero mb-6">About</h3>
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 text-left text-text p-10">
        <div className="flex items-center justify-center"></div>
        <div>
          <p className="leading-relaxed mb-6">
            I’m a Front-End Developer based in Manila, Philippines.
          </p>
          <p className="leading-relaxed mb-6">
            I focus on building interfaces with strong foundations, clear
            structure, and seamless interactions that guide users naturally. My
            work emphasizes balance, thoughtful detail, and intuitive flow.
          </p>
          <p className="leading-relaxed">
            Collaboration is central to my process, creating space for ideas to
            grow and evolve into inspiring results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
