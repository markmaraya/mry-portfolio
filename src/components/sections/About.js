import { forwardRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProgressiveWebAppSVG from "../svg/ProgressiveWebAppSVG";

gsap.registerPlugin(ScrollTrigger);

const About = forwardRef((props, ref) => {
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
    ).fromTo(
      "#about .about-svg",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, ease: "back.out" },
      "-=0.2",
    );
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="h-screen bg-bg flex flex-col items-center justify-center"
    >
      <h3 className="text-accent text-5xl font-hero mb-6">About</h3>
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 text-left text-text p-10 items-center">
        <div className="flex items-center justify-center">
          <ProgressiveWebAppSVG className="about-svg w-[80%] h-auto" />
        </div>
        <div className="about-me">
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
});

export default About;
