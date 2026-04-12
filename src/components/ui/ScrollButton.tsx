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
      <span className="inline-block cursor-default px-4 py-2 rounded-md bg-bg/60 text-text text-lg drop-shadow-md">
        Explore My Work
      </span>
      <ChevronArrowSVG
        onClick={handleScroll}
        className="-mt-1 h-8 w-8 text-text cursor-pointer animate-bounce transition-colors duration-300 hover:text-highlight"
      />
    </div>
  );
};

export default ScrollButton;
