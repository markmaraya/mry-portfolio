const Logo = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group flex items-center justify-center w-12 h-12
                    bg-gradient-to-tr from-muted to-secondary 
                    transform rotate-45 shadow-lg border border-link cursor-pointer"
    >
      <div className="corner-only -rotate-45 transition-transform duration-300 group-hover:[transform:rotate(-45deg)_scale(0.8)]">
        <span
          className="inline-block font-bold text-xl text-text select-none transition-transform duration-300 
                     group-hover:[transform:scaleX(-1)_scale(1.2)]"
        >
          M
        </span>
      </div>
    </div>
  );
};

export default Logo;
