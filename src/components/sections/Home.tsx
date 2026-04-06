import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollButton from "../ui/ScrollButton";

gsap.registerPlugin(ScrollTrigger);

interface HomeProps {
  sectionRef: React.RefObject<HTMLDivElement | null>;
}

const Home: React.FC<HomeProps> = ({ sectionRef }) => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".home-heading-left",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: "power4.out" },
    )
      .fromTo(
        ".home-heading-right",
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1, ease: "power4.out" },
        "-=0.5",
      )
      .fromTo(
        ".home-btn",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.4",
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".home",
          scroller: ".App",
          start: "top top",
          end: "bottom center",
          scrub: 1,
        },
      })
      .fromTo(
        ".home-heading-left",
        { opacity: 1, x: 0 },
        { opacity: 0, x: -100, ease: "power4.out", immediateRender: false },
      )
      .fromTo(
        ".home-heading-right",
        { opacity: 1, x: 0 },
        { opacity: 0, x: 100, ease: "power4.out", immediateRender: false },
        "<",
      )
      .fromTo(
        ".home-btn",
        { opacity: 1, scale: 1 },
        { opacity: 0, scale: 0.8, ease: "power4.out", immediateRender: false },
        "<",
      );
  }, []);

  return (
    <section
      id="home"
      className="home relative flex items-center flex-col h-screen -mt-16"
    >
      <div className="flex-grow flex items-center justify-center">
        <h2 className="text-white text-7xl font-hero font-bold drop-shadow-lg z-10">
          <span className="home-heading-left inline-block">Hi, I'm Puchi.</span>
          <br />
          <span className="home-heading-right inline-block">
            Front-end Developer
          </span>
        </h2>
      </div>
      <div className="home-btn absolute top-[62%]">
        <ScrollButton targetRef={sectionRef} />
      </div>
    </section>
  );
};

export default Home;
