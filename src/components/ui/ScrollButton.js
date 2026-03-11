import gsap from "gsap";

const ScrollButton = ({ targetRef }) => {
  const handleScroll = () => {
    gsap.to(".App", {
      duration: 1.8,
      scrollTo: targetRef.current,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <div class="inline-block bg-bg/60 px-3 py-2 rounded-md">
        <label className="text-text text-lg drop-shadow-md">
          Explore My Work
        </label>
      </div>
      <button onClick={handleScroll} className="animate-bounce group">
        <svg
          width="42"
          height="40"
          viewBox="29 47 42 40"
          xmlns="http://www.w3.org/2000/svg"
          className="text-light group-hover:text-linkHover transition-colors duration-300"
        >
          <polygon points="50,50 55,55 50,60 45,55" fill="currentColor" />
          <polyline
            points="35,56 50,70 65,56"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
          <polyline
            points="35,70 50,84 65,70"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>
      </button>
    </div>
  );
};

export default ScrollButton;
