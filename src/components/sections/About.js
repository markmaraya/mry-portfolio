import { forwardRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Icon } from "@iconify/react";
import ProgressiveWebAppSVG from "../svg/ProgressiveWebAppSVG";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

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

    gsap.set(".paw", { opacity: 0 });

    const path = document.getElementById("pawPath");
    const pathLength = path.getTotalLength();
    const paws = gsap.utils.toArray(".paw");
    const tlPaw = gsap.timeline({ repeat: -1 });

    const stagger = 0.3;
    const linger = 0.9;

    paws.forEach((paw, i) => {
      const point = path.getPointAtLength((i / paws.length) * pathLength);
      const nextPoint = path.getPointAtLength(
        ((i + 1) / paws.length) * pathLength,
      );

      const len = Math.hypot(nextPoint.x - point.x, nextPoint.y - point.y);
      const nx = -(nextPoint.y - point.y) / len;
      const ny = (nextPoint.x - point.x) / len;

      const offset = (i % 2 ? -1 : 1) * 12;

      tlPaw.fromTo(
        paw,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.4,
          motionPath: {
            path: "#pawPath",
            align: "#pawPath",
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
            start: i * 0.03,
            end: i * 0.03,
            offsetX: nx * offset,
            offsetY: ny * offset,
          },
        },
        i * stagger,
      );

      tlPaw.to(paw, { opacity: 0, duration: 0.3 }, i * stagger + linger);
    });
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
        <div className="about-me relative p-4">
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

          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 500 300"
            preserveAspectRatio="none"
          >
            <path
              id="pawPath"
              d="M 0 300 
                 C 69 -3 140 340 216 158 
                 C 242 67 292 60 345 157 
                 Q 400 240 446 175 
                 Q 470 132 484 86 
                 Q 493 50 500 0"
              fill="none"
            />
          </svg>

          {Array.from({ length: 34 }).map((_, i) => (
            <div key={i} className="paw absolute w-4 h-4 opacity-0 text-secondary">
              <Icon icon="mdi:paw" className="w-full h-full rotate-90 opacity-40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default About;
