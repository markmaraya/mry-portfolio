import "./styles/style.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import BackgroundSVG from "./components/svg/BackgroundSVG";
import Footer from "./components/Footer";
import Header from "./components/Header";

import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Home from "./components/sections/Home";
import Projects from "./components/sections/Projects";
import Tools from "./components/sections/Tools";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const App: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="App h-screen overflow-y-scroll scroll-smooth scrollbar-hide overflow-x-hidden overscroll-none">
      <BackgroundSVG />
      <Header />

      <Home sectionRef={sectionRef} />

      <About sectionRef={sectionRef} />

      <Tools />

      <Projects />

      <Contact />

      <Footer />
    </div>
  );
};

export default App;
