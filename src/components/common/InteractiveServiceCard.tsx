import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

export interface ServiceCardData {
  id: string;
  number: string;
  title: string;
  tag: string;
  slug: string;
  desc: string;
  deliverables: string[];
  bgTint: string;
  borderColor: string;
  shadowColor: string;
}

interface InteractiveServiceCardProps {
  service: ServiceCardData;
}

export const InteractiveServiceCard: React.FC<InteractiveServiceCardProps> = ({ service }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 8; // max 8 deg tilt
    const rotY = ((x - centerX) / centerX) * 8;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  // Render Custom Vector Illustration for each Service
  const renderIllustration = (id: string) => {
    switch (id) {
      case "performance":
        return (
          /* 01 Performance Marketing Illustration */
          <div className="relative w-full h-36 rounded-2xl bg-white/80 border border-[#111321]/10 p-3 shadow-inner flex flex-col justify-between overflow-hidden group-hover:scale-105 transition-transform duration-300">
            {/* Header bar */}
            <div className="flex items-center justify-between text-[10px] font-mono font-bold text-[#FF8A24]">
              <span>CAMPAIGN ROAS ANALYTICS</span>
              <span className="px-2 py-0.5 rounded-full bg-[#FFE5ED] text-[#FF087F]">LIVE CAPI</span>
            </div>
            {/* Chart Area */}
            <div className="relative w-full h-16 flex items-end justify-between px-2 pt-2 border-b border-[#111321]/10">
              <svg viewBox="0 0 200 60" className="w-full h-full overflow-visible">
                <path
                  d="M0,50 Q40,40 70,25 T140,20 T200,5"
                  fill="none"
                  stroke="#FF6038"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="200" cy="5" r="4" fill="#FF087F" />
              </svg>
            </div>
            {/* Metric Badges */}
            <div className="flex items-center justify-between text-xs pt-1">
              <span className="font-bold text-[#111321]">4.8x Avg ROAS</span>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                +185% Inbound
              </span>
            </div>
          </div>
        );

      case "social":
        return (
          /* 02 Social Media Marketing Illustration */
          <div className="relative w-full h-36 rounded-2xl bg-white/80 border border-[#111321]/10 p-3 shadow-inner flex items-center justify-center gap-3 overflow-hidden group-hover:scale-105 transition-transform duration-300">
            {/* Reel Frame Card */}
            <div className="w-24 h-28 bg-[#111321] rounded-xl p-2 text-white flex flex-col justify-between shadow-md relative">
              <div className="flex justify-between items-center text-[9px] text-[#FF8A24]">
                <span>REEL PREVIEW</span>
                <span>▶</span>
              </div>
              <div className="text-center font-bold text-xs text-white">Viral Reels</div>
              <div className="text-[9px] text-[#D4CBD5]">❤️ 12.4K likes</div>
            </div>
            {/* Engagement Badge */}
            <div className="flex flex-col gap-2">
              <div className="px-3 py-1.5 rounded-xl bg-[#FFE5ED] text-[#FF087F] text-xs font-bold shadow-sm">
                🔥 High Engagement
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-[#FFF0E9] text-[#FF6038] text-xs font-bold shadow-sm">
                💬 2.4K Direct DMs
              </div>
            </div>
          </div>
        );

      case "seo":
        return (
          /* 03 Search Engine Optimization Illustration */
          <div className="relative w-full h-36 rounded-2xl bg-white/80 border border-[#111321]/10 p-3 shadow-inner flex flex-col justify-between overflow-hidden group-hover:scale-105 transition-transform duration-300">
            {/* Search Bar UI */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#FFF9F6] border border-[#111321]/10 text-xs font-medium text-[#111321]">
              <span className="text-[#FF8A24]">🔍</span>
              <span className="truncate">best digital marketing agency varanasi</span>
            </div>
            {/* Search Result Card #1 */}
            <div className="p-2.5 rounded-xl bg-[#F0E9FF] border border-[#111321]/10 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono text-[#FF087F] font-bold">#1 RANKING ON GOOGLE</div>
                <div className="text-xs font-extrabold text-[#111321]">CoreClick — Click Smart. Grow Fast.</div>
              </div>
              <span className="w-6 h-6 rounded-full bg-emerald-500 text-white font-bold text-xs flex items-center justify-center">
                ↑1
              </span>
            </div>
          </div>
        );

      case "content":
        return (
          /* 04 Content Marketing Illustration */
          <div className="relative w-full h-36 rounded-2xl bg-white/80 border border-[#111321]/10 p-3 shadow-inner flex flex-col justify-between overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#111321]">✍️ Persuasive Copy & Playbooks</span>
              <span className="px-2 py-0.5 rounded-md bg-[#FFF0E9] text-[#FF8A24] text-[10px] font-bold">
                HIGH CONVERSION
              </span>
            </div>
            <div className="p-2 rounded-xl bg-[#FFF9F6] border border-[#111321]/10 space-y-1 text-xs">
              <div className="font-bold text-[#FF6038]">Ad Headlines & Email Sequences</div>
              <div className="text-[11px] text-[#727383] line-clamp-2">
                Turn skeptical audience attention into trusting buyers with unit-economic copywriting.
              </div>
            </div>
          </div>
        );

      case "branding":
        return (
          /* 05 Branding & Visual Identity Illustration */
          <div className="relative w-full h-36 rounded-2xl bg-white/80 border border-[#111321]/10 p-3 shadow-inner flex items-center justify-between overflow-hidden group-hover:scale-105 transition-transform duration-300">
            {/* Swatches */}
            <div className="flex gap-2">
              <div className="w-8 h-16 rounded-xl bg-[#FF8A24] shadow-sm flex items-end justify-center pb-1 text-[9px] font-bold text-white">
                ORANGE
              </div>
              <div className="w-8 h-16 rounded-xl bg-[#FF6038] shadow-sm flex items-end justify-center pb-1 text-[9px] font-bold text-white">
                CORAL
              </div>
              <div className="w-8 h-16 rounded-xl bg-[#FF087F] shadow-sm flex items-end justify-center pb-1 text-[9px] font-bold text-white">
                PINK
              </div>
            </div>
            {/* Typography Sample Badge */}
            <div className="p-3 rounded-2xl bg-[#111321] text-white text-center shadow-md">
              <div className="font-heading font-black text-2xl text-gradient-brand">Cc</div>
              <div className="text-[9px] font-mono text-[#D4CBD5]">IDENTITY SYSTEM</div>
            </div>
          </div>
        );

      case "web":
        return (
          /* 06 Website Development Illustration */
          <div className="relative w-full h-36 rounded-2xl bg-[#111321] text-white p-3 shadow-inner flex flex-col justify-between overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A24]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF6038]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF087F]" />
              </div>
              <span className="text-[10px] font-mono text-emerald-400">sub-1.5s LCP</span>
            </div>
            <div className="text-xs font-mono font-bold text-[#FFF9F6] space-y-1">
              <div>&lt;<span className="text-[#FF8A24]">React</span> speed="..." /&gt;</div>
              <div className="text-[10px] text-[#D4CBD5]">Tailwind CSS v4 · Sub-second UX</div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
        transition: isHovered
          ? "transform 0.15s ease-out, box-shadow 0.3s ease, border-color 0.3s ease"
          : "transform 0.5s ease-out, box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      className={`group relative rounded-3xl p-6 border-2 transition-all duration-300 flex flex-col justify-between ${
        service.bgTint
      } ${
        isHovered
          ? "border-[#FF6038] shadow-[12px_12px_0px_0px_#111321]"
          : "border-[#111321]/15 shadow-[6px_6px_0px_0px_rgba(17,19,33,0.08)]"
      }`}
    >
      <div>
        {/* Upper Portion: Custom Vector Illustration */}
        <div className="mb-6 relative">
          {renderIllustration(service.id)}

          {/* Number Badge Pill */}
          <div className="absolute top-2 right-2 px-2.5 py-1 rounded-full bg-[#111321] text-white font-mono text-xs font-bold shadow-md">
            {service.number}
          </div>
        </div>

        {/* Category Tag */}
        <span className="text-[11px] font-mono font-extrabold text-[#FF087F] uppercase tracking-wider block mb-1">
          {service.tag}
        </span>

        {/* Title */}
        <h3 className="font-heading font-extrabold text-xl md:text-2xl text-[#111321] group-hover:text-[#FF6038] transition-colors leading-snug">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#343644] mt-2.5 leading-relaxed font-normal">
          {service.desc}
        </p>

        {/* Deliverables Checklist */}
        <div className="mt-5 pt-4 border-t border-[#111321]/10 space-y-2">
          {service.deliverables.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-[#111321] font-medium">
              <Check className="w-3.5 h-3.5 text-[#FF6038] shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer Link */}
      <div className="mt-8 pt-4 border-t border-[#111321]/10">
        <Link
          to={`/services/${service.slug}/`}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#111321] group-hover:text-[#FF6038] transition-colors"
        >
          <span>Explore Dedicated Service</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
