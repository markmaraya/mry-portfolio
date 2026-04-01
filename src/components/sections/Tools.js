import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "Angular", icon: "logos:angular-icon" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "React", icon: "logos:react" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { name: "Material UI", icon: "logos:material-ui" },
  { name: "Sass/SCSS", icon: "logos:sass" },
  { name: "Figma", icon: "logos:figma" },
  { name: "HTML5", icon: "devicon:html5" },
  { name: "CSS3", icon: "devicon:css3" },
  { name: "Git/GitHub", icon: "logos:git-icon" },
  { name: "npm", icon: "devicon:npm-wordmark" },
];

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
        onComplete: () => gsap.set(".skill-card", { clearProps: "y" }),
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
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card w-40 h-40
             bg-gradient-to-tr from-[rgb(var(--color-bg))] to-[rgb(var(--color-muted))]
             border border-[rgb(var(--color-muted))] rounded-xl 
             flex flex-col items-center justify-center text-center 
             transition-all duration-300 ease-out
             hover:-translate-y-2 hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
            >
              <Icon
                icon={skill.icon}
                className={`text-4xl mb-1 ${skill.color}`}
              />
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
