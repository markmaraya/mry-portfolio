import { useEffect, useState } from "react";
import gsap from "gsap";
import Logo from "./ui/Logo";

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

    const observerOptions = {
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
        <nav className="space-x-4">
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
      </div>
    </header>
  );
};

export default Header;
