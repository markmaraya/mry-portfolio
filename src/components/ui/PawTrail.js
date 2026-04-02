import { useEffect } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Icon } from "@iconify/react";

gsap.registerPlugin(MotionPathPlugin);

const PawTrail = () => {
  useEffect(() => {
    gsap.set(".paw", { opacity: 0 });

    const path = document.getElementById("pawPath");
    const pathLength = path.getTotalLength();
    const paws = gsap.utils.toArray(".paw");
    const tlPaw = gsap.timeline({ repeat: -1 });

    const stagger = 0.3;
    const linger = 0.9;

    paws.forEach((paw, i) => {
      const p = path.getPointAtLength((i / paws.length) * pathLength);
      const n = path.getPointAtLength(((i + 1) / paws.length) * pathLength);

      const len = Math.hypot(n.x - p.x, n.y - p.y);
      const nx = -(n.y - p.y) / len;
      const ny = (n.x - p.x) / len;

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
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full"
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
  );
};

export default PawTrail;
