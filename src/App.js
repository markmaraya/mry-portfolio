import "./styles/style.css";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import BackgroundSVG from "./components/svg/BackgroundSVG.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";

import About from "./components/sections/About.js";
import Contact from "./components/sections/Contact.js";
import Home from "./components/sections/Home.js";
import Projects from "./components/sections/Projects.js";
import Tools from "./components/sections/Tools.js";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const sectionRef = useRef(null);

  return (
    <div className="App h-screen overflow-y-scroll scroll-smooth scrollbar-hide">
      <BackgroundSVG className="fixed inset-0 w-full h-full -z-10" />
      <Header />

      <Home
        id="home"
        className="relative text-white flex justify-center items-center flex-col h-screen -mt-16"
        sectionRef={sectionRef}
      />

      <About
        id="about"
        className="relative bg-bg mx-auto flex justify-center items-center flex-col h-screen px-4"
        ref={sectionRef}
      />

      <Tools id="tools" className="relative bg-bg h-screen pt-32" />

      <Projects id="projects" className="relative bg-bg h-screen pt-32" />

      <Contact
        id="contact"
        className="relative bg-bg mx-auto flex items-center flex-col h-screen px-4 pt-32"
      />

      <Footer className="bg-muted text-center py-6" />
    </div>
  );
}

export default App;
