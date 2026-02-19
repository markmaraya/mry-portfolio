const Logo = () => {
  return (
    <div
      className="flex items-center justify-center w-12 h-12
                    bg-gradient-to-tr from-muted to-secondary 
                    transform rotate-45 shadow-lg border border-link"
    >
      <div className="corner-only -rotate-45">
        <span className="font-bold text-xl text-text">M</span>
      </div>
    </div>
  );
};

export default Logo;
