import ScrollButton from "../ui/ScrollButton.js";

const Home = ({ sectionRef, ...props }) => {
  return (
    <section {...props}>
      <h2 className="text-4xl font-bold mb-4 z-10">
        Hi, I'm Puchi — a Front-End Developer
      </h2>
      <p className="text-lg z-10">Introduction and a brief bio</p>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <ScrollButton targetRef={sectionRef} />
      </div>
    </section>
  );
};

export default Home;
