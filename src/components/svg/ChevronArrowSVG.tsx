interface ChevronArrowSVGProps extends React.SVGProps<SVGSVGElement> {}

const ChevronArrowSVG: React.FC<ChevronArrowSVGProps> = (props) => {
  return (
    <svg
      width="26"
      height="24"
      viewBox="29 47 42 40"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
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
        strokeWidth="5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
};

export default ChevronArrowSVG;
