import "./styles/style.css";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import BackgroundSVG from "./components/svg/BackgroundSVG.js";
import ScrollButton from "./components/ui/ScrollButton.js";

import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
import Tools from "./components/Tools.js";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const sectionRef = useRef(null);

  return (
    <div className="App h-screen overflow-y-scroll scroll-smooth scrollbar-hide">
      <BackgroundSVG className="fixed inset-0 w-full h-full -z-10" />
      <Header />

      <section
        id="home"
        className="relative text-white flex justify-center items-center flex-col h-screen -mt-16"
      >
        <Home />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <ScrollButton targetRef={sectionRef} />
        </div>
      </section>

      <section
        id="about"
        className="relative bg-bg mx-auto flex justify-center items-center flex-col h-screen px-4"
        ref={sectionRef}
      >
        <About />
      </section>

      <section id="tools" className="relative bg-bg h-screen pt-32">
        <Tools />
      </section>

      <section id="projects" className="relative bg-bg h-screen pt-32">
        <Projects />
      </section>

      <section
        id="contact"
        className="relative bg-bg mx-auto flex items-center flex-col h-screen px-4 pt-32"
      >
        <Contact />
      </section>

      <footer className="bg-muted text-center py-6">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
