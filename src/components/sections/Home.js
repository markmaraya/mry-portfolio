import ScrollButton from "../ui/ScrollButton.js";

const Home = ({ sectionRef, ...props }) => {
  return (
    <section {...props}>
      <div className="flex-grow flex items-center justify-center">
        <h2 className="text-7xl font-hero font-bold drop-shadow-lg z-10">
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
