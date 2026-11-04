import React from "react";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "brand" | "secondary" | "outline" | "dark" | "ghost";
  size?: "sm" | "md" | "lg";
  to?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  to,
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className = "",
  disabled,
  ...props
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs rounded-full min-h-[36px]",
    md: "px-6 py-2.5 text-sm rounded-full min-h-[44px]",
    lg: "px-7 py-3.5 text-base rounded-full min-h-[50px]",
  }[size];

  const variantClasses = {
    // Dark Primary Capsule CTA as seen in image.png "Get a Free Consultation ->" and "Let's Grow"
    primary:
      "bg-[#111321] text-[#FFF9F6] font-semibold hover:bg-[#202438] hover:shadow-lg active:scale-[0.98] transition-all duration-200 border border-transparent shadow-sm",
    // Vibrant Orange-Pink Brand Gradient Capsule CTA
    brand:
      "bg-gradient-brand text-white font-semibold shadow-md hover:shadow-xl hover:shadow-pink-500/25 hover:brightness-110 active:scale-[0.98] transition-all duration-200 border border-transparent",
    // Outline Capsule CTA as seen in image.png "Watch How We Work"
    secondary:
      "bg-white/80 text-[#111321] font-semibold border-2 border-[#111321]/20 hover:border-[#111321] hover:bg-white active:scale-[0.98] transition-all duration-200 shadow-2xs",
    outline:
      "bg-transparent text-[#111321] font-medium border-2 border-[#111321]/20 hover:border-[#FF6038] hover:text-[#FF6038] active:scale-[0.98] transition-all duration-200",
    dark:
      "bg-[#111321] text-[#FFF9F6] font-semibold hover:bg-[#202438] active:scale-[0.98] transition-all duration-200 shadow-sm",
    ghost:
      "bg-transparent text-[#343644] font-medium hover:bg-[#FFE5ED]/50 hover:text-[#111321] transition-colors",
  }[variant];

  const baseClasses =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const fullClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin shrink-0" aria-hidden="true" />
      ) : (
        leftIcon
      )}
      <span>{children}</span>
      {!isLoading && rightIcon}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={fullClasses} aria-busy={isLoading}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={fullClasses}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {content}
    </button>
  );
};
