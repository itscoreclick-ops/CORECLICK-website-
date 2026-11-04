import React, { useState } from "react";

export const HeroLogoInteractive: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [touchLaunched, setTouchLaunched] = useState(false);

  // Handle touch tap for mobile interaction
  const handleTouch = () => {
    setTouchLaunched(true);
    setTimeout(() => {
      setTouchLaunched(false);
    }, 3500);
  };

  const activeLaunch = isHovered || touchLaunched;

  return (
    <div
      tabIndex={0}
      role="button"
      aria-label="Interactive CoreClick Brand Symbol. Hover or tap to launch rocket growth."
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouch}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      className="relative flex items-center justify-center cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038] rounded-full p-4 selection:bg-transparent"
    >
      {/* 1. Atmospheric Depth: Large Blurred Orange-Pink Radial Lighting */}
      <div
        aria-hidden="true"
        className={`absolute w-[460px] sm:w-[580px] lg:w-[680px] h-[460px] sm:h-[580px] lg:h-[680px] bg-gradient-brand rounded-full pointer-events-none transition-opacity duration-700 ${
          activeLaunch ? "opacity-35 blur-[140px] scale-105" : "opacity-20 blur-[120px]"
        }`}
      />

      {/* 2. Delicate Outer Orbital Dashed Ring */}
      <div
        aria-hidden="true"
        className={`absolute w-[320px] sm:w-[420px] md:w-[480px] lg:w-[520px] h-[320px] sm:h-[420px] md:h-[480px] lg:h-[520px] rounded-full border border-dashed border-[#FF6038]/25 pointer-events-none transition-all duration-500 ${
          activeLaunch ? "scale-105 border-[#FF087F]/40" : "scale-100"
        }`}
      />

      {/* 3. Decorative Subtle Sparkle Marks */}
      <div className="absolute -top-10 right-4 flex gap-1.5 text-[#FF8A24] text-2xl font-bold font-mono animate-pulse pointer-events-none">
        <span>///</span>
      </div>

      {/* 4. Main Enlarged Standalone CoreClick Logo Symbol Asset (Desktop 420–480px) */}
      <div className="relative w-[260px] sm:w-[360px] md:w-[420px] lg:w-[460px] aspect-square flex items-center justify-center p-2 z-10 transition-transform duration-500">
        <img
          src="/assets/aistudio/Gradient_C_Cursor_Logo_transparent.png"
          alt="Official CoreClick Brand Symbol"
          className={`w-full h-full object-contain filter drop-shadow-2xl transition-all duration-500 ${
            activeLaunch ? "scale-102 filter drop-shadow-[0_20px_35px_rgba(255,96,56,0.35)]" : "animate-float"
          }`}
        />
      </div>

      {/* 5. Interactive Orbiting Element: Default Orbiting Cursor vs. Hover Rocket Launch */}
      {!activeLaunch ? (
        /* --- DEFAULT STATE: ORBITING CURSOR ARROW --- */
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20">
          <div className="w-[300px] sm:w-[400px] md:w-[460px] lg:w-[500px] h-[300px] sm:h-[400px] md:h-[460px] lg:h-[500px] relative animate-orbit">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform -rotate-12 transition-all">
              {/* Dark CoreClick-style Orbiting Cursor */}
              <div className="relative flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="filter drop-shadow-md"
                >
                  <path
                    d="M3 3L23 11L14.5 13.5 L11 23L3 3Z"
                    fill="#111321"
                    stroke="#FF8A24"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                {/* Subtle Ambient Cursor Glow */}
                <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#FF6038] rounded-full blur-[2px] opacity-70 animate-ping" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* --- HOVER / TAP STATE: ROCKET LAUNCH TRANSFORMATION --- */
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-30 animate-fadeIn">
          {/* Rocket Container positioned at Upper Right Launch Node */}
          <div className="absolute top-[8%] right-[8%] sm:top-[12%] sm:right-[12%] transform translate-x-2 -translate-y-6 transition-all duration-700 ease-out">
            <div className="relative flex flex-col items-center animate-bounce">
              {/* Sleek Minimalist Vector Rocket Artwork */}
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 transform -rotate-45 filter drop-shadow-xl">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  {/* Rocket Body */}
                  <path
                    d="M32 4C32 4 48 16 48 36 C48 44 42 50 42 50 L22 50 C22 50 16 44 16 36 C16 16 32 4 32 4Z"
                    fill="#111321"
                  />
                  {/* Rocket Cone Tip */}
                  <path
                    d="M32 4 C32 4 42 16 42 26 L22 26 C22 16 32 4 32 4Z"
                    fill="url(#rocketTipGrad)"
                  />
                  {/* Left & Right Fins */}
                  <path d="M16 38 L6 48 L18 50 Z" fill="#FF8A24" />
                  <path d="M48 38 L58 48 L46 50 Z" fill="#FF087F" />
                  {/* Porthole */}
                  <circle cx="32" cy="32" r="5" fill="#FFF9F6" stroke="#FF6038" strokeWidth="2" />
                  
                  <defs>
                    <linearGradient id="rocketTipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF8A24" />
                      <stop offset="100%" stopColor="#FF087F" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Pulsing Flame & Exhaust Thrust */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-5 h-8 animate-thrust">
                  <svg viewBox="0 0 20 32" fill="none" className="w-full h-full">
                    <path
                      d="M10 0 C16 10 20 20 10 32 C0 20 4 10 10 0Z"
                      fill="url(#flameGrad)"
                    />
                    <defs>
                      <linearGradient id="flameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FF8A24" />
                        <stop offset="50%" stopColor="#FF6038" />
                        <stop offset="100%" stopColor="#FF087F" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Exhaust Sparkle Particles */}
              <div className="flex gap-1.5 mt-6 text-[10px] font-mono font-bold text-[#FF8A24] animate-pulse">
                <span>✦</span>
                <span className="text-[#FF087F]">✨</span>
                <span>✦</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Guidance Badge Pill */}
      <div className="absolute -bottom-2 sm:bottom-0 left-1/2 -translate-x-1/2 z-30 transition-all duration-300 pointer-events-none">
        <div
          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase border shadow-lg backdrop-blur-md transition-all ${
            activeLaunch
              ? "bg-[#111321] text-white border-[#FF6038] scale-105"
              : "bg-white/80 text-[#343644] border-[#111321]/10 group-hover:border-[#FF6038]/40"
          }`}
        >
          <span>{activeLaunch ? "🚀 Launching Growth" : "✦ CoreClick Engine"}</span>
        </div>
      </div>
    </div>
  );
};
