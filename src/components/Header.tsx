import { useEffect, useState } from "react";
import gsap from "gsap";
import { Icon } from "@iconify/react";
import Logo from "./ui/Logo";

const sectionIds = ["home", "about", "tools", "projects", "contact"];

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>,
    targetId: string,
  ) => {
    event.preventDefault();
    gsap.to(".App", {
      duration: 1.2,
      scrollTo: `#${targetId}`,
      ease: "power2.inOut",
    });
  };

  useEffect(() => {
    const app = document.querySelector(".App") as HTMLElement | null;
    if (!app) return;

    const observerOptions: IntersectionObserverInit = {
      root: app,
      rootMargin: "0px 0px -50% 0px",
      threshold: 0.25,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });

      const scrollPos = app.scrollTop;
      const maxScroll = app.scrollHeight - app.clientHeight;
      if (scrollPos >= maxScroll - 2) {
        setActiveLink("contact");
      }
    }, observerOptions);

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className="shadow-md sticky top-0 z-50 h-20 bg-main">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <Logo onClick={(e) => handleNavClick(e, "home")} />

        <nav className="hidden md:flex space-x-4">
          {sectionIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative hover:text-linkHover transition-colors duration-300
                ${
                  activeLink === id
                    ? "text-linkHover font-bold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-linkHover after:rounded-full after:transition-all after:duration-300"
                    : "text-accent"
                }`}
              onClick={(e) => handleNavClick(e, id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-accent focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="relative h-6 w-6">
            <Icon
              icon="mdi:menu"
              className={`absolute h-6 w-6 transition-transform duration-300 ease-in-out
                ${isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
            />

            <Icon
              icon="mdi:close"
              className={`absolute h-6 w-6 transition-transform duration-300 ease-in-out
                ${isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
            />
          </div>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-in-out
          ${isOpen ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}`}
      >
        <nav className="bg-main p-4 space-y-2 border-t border-secondary text-center">
          {sectionIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`block py-3 
                ${activeLink === id ? "text-linkHover font-bold" : "text-accent"}`}
              onClick={(e) => {
                handleNavClick(e, id);
                setIsOpen(false); // close menu after click
              }}
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
