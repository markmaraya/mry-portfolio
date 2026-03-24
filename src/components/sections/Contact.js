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
    hoverColor: "#e2c88f",
  },
];

const Contact = ({ id = "contact" }) => {
  return (
    <section id={id} className="bg-bg flex flex-col pt-32 pb-20 min-h-[600px]">
      <h3 className="text-accent text-5xl text-center font-hero">Contact</h3>
      <div className="flex flex-1 flex-wrap items-center justify-center gap-16 max-w-5xl mx-auto">
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
      className="group flex flex-col items-center transition-colors duration-300"
    >
      <div className="relative w-12 h-12 mb-2">
        <Icon
          icon={iconOriginal}
          className="w-full h-full absolute inset-0 z-0 text-[color:var(--hover-color)]"
          style={{ "--hover-color": hoverColor }}
        />

        <Icon
          icon={iconPlain}
          className="w-full h-full absolute inset-0 z-10 text-accent transition-opacity duration-300 group-hover:opacity-0"
        />
      </div>
      <span
        className={`text-lg font-medium text-accent opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0`}
      >
        {label}
      </span>
    </a>
  );
};

export default Contact;
