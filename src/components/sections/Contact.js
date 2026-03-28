import { Icon } from "@iconify/react";

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
  return (
    <section
      id="contact"
      className="h-[calc(100vh-6rem)] bg-bg flex flex-col items-center justify-center"
    >
      <h3 className="text-accent text-5xl font-hero mb-16">
        Contact
      </h3>
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
      className="group bg-main/60 grid w-full sm:w-96 border border-accent rounded-xl h-20 overflow-hidden"
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
        className="text-lg font-medium text-accent translate-x-8
        transition-transform duration-300 ease-out group-hover:translate-x-20"
      >
        {label}
      </span>
    </a>
  );
};

export default Contact;
