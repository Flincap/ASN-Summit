import logoImage from "../assets/logo.png";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoImage}
        alt="Africa Stablecoin Network Logo"
        className="h-full w-auto mr-2"
      />
    </div>
  );
};

export default Logo;
