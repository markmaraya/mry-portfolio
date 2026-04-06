import gsap from "gsap";
import ChevronArrowSVG from "../svg/ChevronArrowSVG";

interface ScrollButtonProps {
  targetRef: React.RefObject<HTMLDivElement | null>;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ targetRef }) => {
  const handleScroll = () => {
    if (targetRef.current) {
      gsap.to(".App", {
        duration: 1.8,
        scrollTo: targetRef.current,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button onClick={handleScroll} className="peer">
        <div className="inline-block bg-bg/60 px-4 py-2 rounded-md border border-transparent transition-colors duration-300 hover:border-linkHover hover:bg-bg/80">
          <span className="text-text text-lg drop-shadow-md">
            Explore My Work
          </span>
        </div>
      </button>
      <ChevronArrowSVG />
    </div>
  );
};

export default ScrollButton;
