import logoImage from "../assets/logo.png";

interface LogoProps {
  className?: string;
  light?: boolean;
  /** Hide the wordmark and show the mark alone. */
  markOnly?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className = "",
  light = false,
  markOnly = false,
}) => (
  <a href="#top" className={`flex items-center gap-3 ${className}`}>
    <img
      src={logoImage}
      alt="Africa Stablecoin Network"
      className="h-9 w-auto shrink-0 md:h-10"
    />
    {!markOnly && (
      <span className="leading-[1.15]">
        <span
          className={`block font-display text-[11.5px] font-bold tracking-tight sm:text-[13px] md:text-[15px] ${
            light ? "text-white" : "text-indigo-700"
          }`}
        >
          Africa Payments &amp;
          <br />
          Stablecoin Summit
        </span>
      </span>
    )}
  </a>
);

export default Logo;
