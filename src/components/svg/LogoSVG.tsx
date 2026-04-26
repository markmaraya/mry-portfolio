interface LogoSVGProps extends React.SVGProps<SVGSVGElement> {}

const LogoSVG: React.FC<LogoSVGProps> = (props) => {
  return (
    <svg
      width="344"
      height="344"
      viewBox="0 0 344 344"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4a5f4a" />
          <stop offset="100%" stopColor="#588157" />
        </linearGradient>
      </defs>

      <rect
        x="52"
        y="52"
        width="240"
        height="240"
        fill="url(#bgGradient)"
        transform="rotate(45 172 172)"
        stroke="#d4a373"
        strokeWidth="4"
      />

      <g transform="translate(60,60) scale(0.78)">
        <path
          d="M58.5088 223.297L58.5762 223.412V263.686H1.07617V123.819L58.5088 223.297Z"
          fill="#dde5b6"
        />
        <path
          d="M284.576 263.686H227.076V223.412L227.144 223.297L284.576 123.819V263.686Z"
          fill="#dde5b6"
        />
        <path
          d="M107.408 47.1855H59.4492L142.5 188.933L142.6 189.05V260.686H118.782L118.639 260.428L0.138672 46.9277L0 46.6787L27.3984 0L107.408 47.1855Z
            M285.652 46.6787L285.514 46.9277L167.014 260.428L166.87 260.686H142.6V189.05L144.7 188.933L226.203 47.1855H178.244L258.254 0L285.652 46.6787Z"
          fill="#dde5b6"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export default LogoSVG;
