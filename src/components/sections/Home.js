import ScrollButton from "../ui/ScrollButton.js";

const Home = ({ sectionRef, ...props }) => {
  return (
    <section {...props}>
      <div className="flex-grow flex items-center justify-center">
        <h2 className="text-6xl font-hero font-bold drop-shadow-md z-10">
          Hi, I'm Puchi
          <br />I bring ideas to life on the web.
        </h2>
      </div>
      <p className="absolute top-[65%] text-center text-lg drop-shadow-md z-10">
        I’m a front-end developer from Manila, passionate about blending design
        and functionality.
      </p>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <ScrollButton targetRef={sectionRef} />
      </div>
    </section>
  );
};

export default Home;
