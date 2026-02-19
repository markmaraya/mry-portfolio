import { useEffect, useState } from "react";
import gsap from "gsap";
import throttle from "lodash.throttle";

const sectionIds = ["home", "about", "tools", "projects", "contact"];

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    gsap.to(".App", {
      duration: 1.2,
      scrollTo: `#${targetId}`,
      ease: "power2.inOut",
    });
  };

  useEffect(() => {
    const app = document.querySelector(".App");
    if (!app) return;

    const headerOffset = 80;

    const determineActiveSection = () => {
      const scrollPos = app.scrollTop;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (
            scrollPos + headerOffset >= sectionTop &&
            scrollPos + headerOffset < sectionBottom
          ) {
            setActiveLink(sectionIds[i]);
            break;
          }
        }
      }
    };

    const throttledScroll = throttle(determineActiveSection, 300);
    app.addEventListener("scroll", throttledScroll);
    return () => {
      app.removeEventListener("scroll", throttledScroll);
    };
  }, []);

  return (
    <header className="shadow-md sticky top-0 z-50 h-20 bg-main">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-accent text-2xl font-bold">Puchi</h1>
        <nav className="space-x-4">
          {sectionIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative hover:text-linkHover transition-colors duration-300
                ${
                  activeLink === id
                    ? "pointer-events-none text-linkHover font-bold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-linkHover after:rounded-full after:transition-all after:duration-300"
                    : "text-accent"
                }`}
              onClick={(e) => handleNavClick(e, id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
