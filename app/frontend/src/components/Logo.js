import { Link } from "react-router-dom";

export const Logo = ({ size = 32, withText = true, className = "" }) => {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 group ${className}`}
    >
      <span
        className="relative inline-flex items-center justify-center transition-transform duration-500 group-hover:rotate-12"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 64 64"
          width={size}
          height={size}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <linearGradient id="hex-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="60%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#818CF8" />
            </linearGradient>
          </defs>
          <polygon
            points="32,3 58,17 58,47 32,61 6,47 6,17"
            fill="url(#hex-grad)"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1"
          />
          <text
            x="32"
            y="44"
            textAnchor="middle"
            fontFamily="Outfit, sans-serif"
            fontWeight="900"
            fontSize="32"
            fill="white"
          >
            P
          </text>
        </svg>
      </span>
      {withText && (
        <span className="font-heading text-xl font-bold tracking-tight text-white">
          pyrintu
        </span>
      )}
    </Link>
  );
};

export default Logo;