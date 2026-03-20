import "./styles/style.css";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import BackgroundSVG from "./components/svg/BackgroundSVG";
import Footer from "./components/Footer";
import Header from "./components/Header";

import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Home from "./components/sections/Home";
import Projects from "./components/sections/Projects";
import Tools from "./components/sections/Tools";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const sectionRef = useRef(null);

  return (
    <div className="App h-screen overflow-y-scroll scroll-smooth scrollbar-hide">
      <BackgroundSVG className="fixed inset-0 w-full h-full -z-10" />
      <Header />

      <Home
        id="home"
        className="relative flex items-center flex-col h-screen -mt-16 text-white"
        sectionRef={sectionRef}
      />

      <About id="about" ref={sectionRef} />

      <Tools id="tools" />

      <Projects id="projects" className="relative bg-bg h-screen pt-32" />

      <Contact
        id="contact"
        className="relative bg-bg mx-auto flex flex-col px-4 pt-32 pb-20 min-h-[600px]"
      />

      <Footer className="bg-muted text-center py-6" />
    </div>
  );
}

export default App;
