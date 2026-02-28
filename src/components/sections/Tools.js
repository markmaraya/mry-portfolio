import { Icon } from "@iconify/react";

const skills = [
  { name: "Angular", icon: "logos:angular-icon" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "React", icon: "logos:react" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { name: "KnockoutJS", icon: "file-icons:knockout", color: "text-red-600" },
  { name: "jQuery", icon: "devicon:jquery" },
  { name: "HTML5", icon: "devicon:html5" },
  { name: "CSS3", icon: "devicon:css3" },
  { name: "Sass/SCSS", icon: "logos:sass" },
  { name: "Figma", icon: "logos:figma" },
  { name: "Git/GitHub", icon: "logos:git-icon" },
  { name: "npm", icon: "devicon:npm-wordmark" },
  { name: ".Net", icon: "logos:dotnet" },
  { name: "SQL", icon: "logos:mysql" },
];

const Tools = ({ ...props }) => {
  return (
    <section {...props}>
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-accent text-3xl font-semibold mb-10 text-center">
          Digital Toolbox
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <Icon icon={skill.icon} className={`text-6xl mb-1 ${skill.color}`} />
              <h2 className="text-l font-semibold mb-2 cursor-default">{skill.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
