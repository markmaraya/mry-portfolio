import { Icon } from "@iconify/react";

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

const Tools = ({ ...props }) => {
  return (
    <section {...props}>
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-accent text-5xl text-center font-hero mb-10">
          Digital Toolbox
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-accent shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-center transition duration-300 transform 
               hover:-translate-y-2 hover:bg-text hover:shadow-[0_8px_20px_rgba(0,0,0,0.6)]"
            >
              <Icon
                icon={skill.icon}
                className={`text-6xl mb-1 ${skill.color}`}
              />
              <h2 className="text-main text-l font-semibold cursor-default">
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
