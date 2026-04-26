import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProgressiveWebAppSVG from "../svg/ProgressiveWebAppSVG";
import PawTrail from "../ui/PawTrail";

gsap.registerPlugin(ScrollTrigger);

interface AboutProps {
  sectionRef: React.RefObject<HTMLDivElement | null>;
}

const About: React.FC<AboutProps> = ({ sectionRef }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        scroller: ".App",
        start: "top 30%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      "#about .about-me p",
      { opacity: 0, y: 30, x: -50 },
      { opacity: 1, y: 0, x: 0, ease: "power2.out", stagger: 0.15 },
    )
      .fromTo(
        "#about .about-me p span",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, ease: "power2.out", stagger: 0.15 },
        "-=0.4",
      )
      .fromTo(
        "#about .about-svg",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: "back.out" },
        "-=0.2",
      );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen bg-bg flex flex-col items-center justify-center px-4 py-24"
    >
      <h3 className="text-accent text-3xl sm:text-4xl md:text-5xl font-hero mb-6">
        About
      </h3>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="items-center justify-center hidden md:flex">
          <ProgressiveWebAppSVG className="about-svg w-[80%] h-auto" />
        </div>
        <div className="about-me relative p-6 text-left text-text text-sm sm:text-base leading-relaxed">
          <p className="leading-relaxed mb-6">
            I’m a{" "}
            <span className="inline-block relative font-hero text-secondary text-2xl leading-none">
              Front-End Developer
            </span>{" "}
            based in Manila, Philippines, passionate about turning{" "}
            <span className="inline-block relative font-hero text-secondary text-2xl leading-none">
              ideas
            </span>{" "}
            into interactive experiences.
          </p>
          <p className="leading-relaxed mb-6">
            I specialize in crafting interfaces that are clean, accessible, and
            intuitive. My approach balances{" "}
            <span className="inline-block relative font-hero text-secondary text-2xl leading-none">
              creativity
            </span>{" "}
            with precision, making technology feel effortless.
          </p>
          <p className="leading-relaxed mb-6">
            <span className="inline-block relative font-hero text-secondary text-2xl leading-none">
              Collaboration
            </span>{" "}
            fuels my process, and I enjoy working with teams where ideas evolve
            into inspiring results.
          </p>
          <p className="leading-relaxed">
            Beyond coding, I draw inspiration from{" "}
            <span className="inline-block relative font-hero text-secondary text-2xl leading-none">
              design
            </span>
            , music, and the adventures found in digital realms, always eager to
            explore new tools and frameworks that push the boundaries of{" "}
            <span className="inline-block relative font-hero text-secondary text-2xl leading-none">
              user experience
            </span>
            .
          </p>
          <PawTrail />
        </div>
      </div>
    </section>
  );
};

export default About;
