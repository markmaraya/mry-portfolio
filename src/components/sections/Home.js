import ScrollButton from "../ui/ScrollButton";

const Home = ({ sectionRef }) => {
  return (
    <section
      id="home"
      className="relative flex items-center flex-col h-screen -mt-16"
    >
      <div className="flex-grow flex items-center justify-center">
        <h2 className="text-white text-7xl font-hero font-bold drop-shadow-lg z-10">
          Hi, I'm Puchi.
          <br />
          Front-end Developer
        </h2>
      </div>
      <div className="absolute top-[62%]">
        <ScrollButton targetRef={sectionRef} />
      </div>
    </section>
  );
};

export default Home;
