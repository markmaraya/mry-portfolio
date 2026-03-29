import LogoSVG from "../svg/LogoSVG";

const Logo = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="h-16 w-16 flex items-center justify-center cursor-pointer"
    >
      <LogoSVG />
    </div>
  );
};

export default Logo;
