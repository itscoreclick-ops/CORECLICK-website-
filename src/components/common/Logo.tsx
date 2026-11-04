import React from "react";
import { Link } from "react-router-dom";

export const LOGO_ASSET_SRC = "/assets/aistudio/Gradient_C_Cursor_Logo_transparent.png";

interface LogoProps {
  variant?: "default" | "light" | "white" | "dark";
  showTagline?: boolean;
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export const Logo: React.FC<LogoProps> = ({
  variant = "default",
  showTagline = true,
  className = "",
  iconOnly = false,
  size = "md",
}) => {
  const isDarkBg = variant === "white" || variant === "dark";

  // Increased sizes by ~35-45% for strong visual presence
  const imgSizeClasses = {
    sm: "w-9 h-9",
    md: "w-13 h-13 sm:w-14 sm:h-14 md:w-[56px] md:h-[56px]",
    lg: "w-16 h-16 sm:w-20 sm:h-20",
    xl: "w-24 h-24 sm:w-28 sm:h-28",
  };

  const textSizes = {
    sm: "text-xl",
    md: "text-2xl sm:text-3xl font-black",
    lg: "text-3xl sm:text-4xl font-black",
    xl: "text-4xl sm:text-5xl font-black",
  };

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038] rounded-lg ${className}`}
      aria-label="CoreClick Home"
    >
      {/* Official Standalone CoreClick Logo Symbol Image */}
      <div className={`relative shrink-0 flex items-center justify-center ${imgSizeClasses[size]}`}>
        <img
          src={LOGO_ASSET_SRC}
          alt="CoreClick Official Logo Symbol"
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-md"
        />
      </div>

      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-heading ${textSizes[size]} tracking-tight transition-colors ${
              isDarkBg ? "text-[#FFF9F6]" : "text-[#111321]"
            }`}
          >
            Core
            <span className="text-gradient-brand">Click</span>
          </span>
          {showTagline && (
            <span
              className={`text-[10px] sm:text-[11px] font-mono font-extrabold tracking-wider uppercase mt-1 ${
                isDarkBg ? "text-[#D4CBD5]" : "text-[#343644]"
              }`}
            >
              CLICK SMART. GROW FAST.
            </span>
          )}
        </div>
      )}
    </Link>
  );
};
