import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";

import { toolsData } from "./toolsData";

gsap.registerPlugin(ScrollTrigger);

const Tools = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills-grid",
        scroller: ".App",
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      ".skill-card",
      { opacity: 0, y: 80, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "back.out",
        duration: 0.6,
        stagger: {
          each: 0.175,
          grid: "auto",
          from: "start",
        },
        onComplete: () => {
          gsap.set(".skill-card", { clearProps: "y" });
        },
      },
    );
  }, []);

  return (
    <section id="tools" className="min-h-screen bg-bg pt-32">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-accent text-5xl text-center font-hero mb-16">
          Digital Toolbox
        </h3>
        <div className="skills-grid flex flex-wrap justify-center gap-6 max-w-[736px] mx-auto">
          {toolsData.map((skill, index) => (
            <div
              key={index}
              className="skill-card w-40 h-40
             bg-gradient-to-tr from-[rgb(var(--color-bg))] to-[rgb(var(--color-muted))]
             border border-[rgb(var(--color-muted))] rounded-xl 
             flex flex-col items-center justify-center text-center 
             transition-all duration-300 ease-out
             hover:-translate-y-2 hover:shadow-custom"
            >
              <Icon icon={skill.icon} className={`text-4xl mb-1`} />
              <h2 className="text-accent text-md font-semibold cursor-default">
                {skill.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
