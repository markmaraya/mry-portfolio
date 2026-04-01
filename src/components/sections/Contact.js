import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger);

const contacts = [
  {
    label: "LinkedIn",
    iconPlain: "simple-icons:linkedin",
    iconOriginal: "logos:linkedin-icon",
    link: "https://linkedin.com/in/mark-maraya/",
    hoverColor: "#0a66c2",
  },
  {
    label: "Gmail",
    iconPlain: "simple-icons:gmail",
    iconOriginal: "logos:google-gmail",
    link: "mailto:markanthonymaraya@gmail.com",
    hoverColor: "#ea4335",
  },
  {
    label: "GitHub",
    iconPlain: "simple-icons:github",
    iconOriginal: "simple-icons:github",
    link: "https://github.com/markmaraya",
    hoverColor: "#0fbf3e",
  },
  {
    label: "CV",
    iconPlain: "mdi:file-download",
    iconOriginal: "mdi:file-download",
    link: "/yourcv.pdf",
    hoverColor: "#f5f5eb",
  },
];

const Contact = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        scroller: ".App",
        start: "top 30%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      ".contact-item",
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        delay: 0.3,
        ease: "back.out(1.7)",
        stagger: 0.2,
      },
    );
  }, []);

  return (
    <section
      id="contact"
      className="h-[calc(100vh-6rem)] bg-bg flex flex-col items-center justify-center"
    >
      <h3 className="text-accent text-5xl font-hero mb-16">Contact</h3>
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8">
        {contacts.map((skill, index) => (
          <ContactItem
            key={index}
            iconPlain={skill.iconPlain}
            iconOriginal={skill.iconOriginal}
            label={skill.label}
            link={skill.link}
            hoverColor={skill.hoverColor}
          />
        ))}
      </div>
    </section>
  );
};

const ContactItem = ({ iconPlain, iconOriginal, label, link, hoverColor }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-item group relative grid w-full sm:w-96 h-20 
      border border-accent rounded-xl overflow-hidden 
      bg-main/60 hover:border-secondary"
    >
      <div className="relative">
        <Icon
          icon={iconPlain}
          className="w-36 h-36 absolute inset-0 text-accent/10 
          translate-x-[-20%] translate-y-[-15%] 
          transition-all duration-300 ease-out 
          group-hover:translate-x-4 group-hover:translate-y-4
          group-hover:opacity-0 group-hover:w-12 group-hover:h-12"
        />
        <Icon
          icon={iconOriginal}
          className="w-36 h-36 absolute inset-0 text-[color:var(--hover-color)] opacity-0
          translate-x-[-20%] translate-y-[-15%]           
          transition-all duration-300 ease-out
          group-hover:translate-x-4 group-hover:translate-y-4
          group-hover:opacity-100 group-hover:w-12 group-hover:h-12"
          style={{ "--hover-color": hoverColor }}
        />
      </div>
      <span
        className="text-lg font-medium text-text translate-x-8
        transition-transform duration-300 ease-out
        group-hover:translate-x-20 group-hover:text-linkHover"
      >
        {label}
      </span>
      <Icon
        icon="mdi:keyboard-arrow-right"
        className="absolute right-6 top-1/2 h-6 w-6 inline-block
        -translate-y-1/2 rotate-[-45deg] text-text
        transition-transform duration-300 ease-out
        group-hover:scale-150 group-hover:translate-x-4 group-hover:-translate-y-7 group-hover:text-linkHover"
      />
    </a>
  );
};

export default Contact;
