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
    <button onClick={handleScroll} className="animate-bounce">
      <svg
        width="42"
        height="40"
        viewBox="29 47 42 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="50,50 55,55 50,60 45,55" fill="#e2c88f" />
        <polyline
          points="35,56 50,70 65,56"
          fill="none"
          stroke="#e2c88f"
          strokeWidth="6"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <polyline
          points="35,70 50,84 65,70"
          fill="none"
          stroke="#e2c88f"
          strokeWidth="6"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
      </svg>
    </button>
  );
};

export default ScrollButton;
