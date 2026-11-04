import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { ServiceItem } from "../../types";

export interface ServiceCardVisualConfig {
  bgClass: string;
  borderColor: string;
  badgeBg: string;
  badgeText: string;
  accentGradient?: string;
  isDark?: boolean;
}

const VISUAL_CONFIGS: Record<string, ServiceCardVisualConfig> = {
  "performance-marketing": {
    bgClass: "bg-[#FFF0E9]",
    borderColor: "border-[#FF8A24]",
    badgeBg: "bg-[#FFE5ED]",
    badgeText: "text-[#FF087F]",
  },
  "google-ads": {
    bgClass: "bg-[#FFF9F6]",
    borderColor: "border-[#FF6038]",
    badgeBg: "bg-[#FFF0E9]",
    badgeText: "text-[#FF6038]",
  },
  "meta-ads": {
    bgClass: "bg-[#FFE5ED]",
    borderColor: "border-[#FF087F]",
    badgeBg: "bg-[#FFF0E9]",
    badgeText: "text-[#FF8A24]",
  },
  "seo": {
    bgClass: "bg-[#F0E9FF]",
    borderColor: "border-[#111321]",
    badgeBg: "bg-[#FFE5ED]",
    badgeText: "text-[#FF087F]",
  },
  "local-seo": {
    bgClass: "bg-[#FFF0E9]",
    borderColor: "border-[#FF8A24]",
    badgeBg: "bg-[#F0E9FF]",
    badgeText: "text-[#7000FF]",
  },
  "social-media-marketing": {
    bgClass: "bg-[#FFE5ED]",
    borderColor: "border-[#FF087F]",
    badgeBg: "bg-[#FFF0E9]",
    badgeText: "text-[#FF6038]",
  },
  "branding": {
    bgClass: "bg-[#FFF9F6]",
    borderColor: "border-[#FF6038]",
    badgeBg: "bg-[#F0E9FF]",
    badgeText: "text-[#7000FF]",
  },
  "content-marketing": {
    bgClass: "bg-[#F0E9FF]",
    borderColor: "border-[#111321]",
    badgeBg: "bg-[#FFE5ED]",
    badgeText: "text-[#FF087F]",
  },
  "website-development": {
    bgClass: "bg-[#111321] text-white",
    borderColor: "border-[#FF6038]",
    badgeBg: "bg-[#FF6038]",
    badgeText: "text-white",
    isDark: true,
  },
  "landing-page-design": {
    bgClass: "bg-[#FFF0E9]",
    borderColor: "border-[#FF8A24]",
    badgeBg: "bg-[#FFE5ED]",
    badgeText: "text-[#FF087F]",
  },
  "lead-generation": {
    bgClass: "bg-[#FFE5ED]",
    borderColor: "border-[#FF087F]",
    badgeBg: "bg-[#FFF0E9]",
    badgeText: "text-[#FF6038]",
  },
  "digital-marketing-strategy": {
    bgClass: "bg-[#F0E9FF]",
    borderColor: "border-[#FF6038]",
    badgeBg: "bg-[#FFF0E9]",
    badgeText: "text-[#FF8A24]",
  },
};

interface FullServiceCardProps {
  service: ServiceItem;
  index: number;
}

export const FullServiceCard: React.FC<FullServiceCardProps> = ({ service, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const config = VISUAL_CONFIGS[service.slug] || {
    bgClass: "bg-white",
    borderColor: "border-[#111321]/15",
    badgeBg: "bg-[#FFF0E9]",
    badgeText: "text-[#FF6038]",
  };

  const formattedNumber = (index + 1).toString().padStart(2, "0");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 7;
    const rotY = ((x - centerX) / centerX) * 7;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  // Render dedicated high-resolution vector illustration for all 12 services
  const renderIllustration = (slug: string, isDark?: boolean) => {
    switch (slug) {
      case "performance-marketing":
        return (
          <div className="relative w-full h-36 rounded-2xl bg-white/80 border border-[#111321]/10 p-3 shadow-inner flex flex-col justify-between overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
            <div className="flex items-center justify-between text-[10px] font-mono font-bold text-[#FF8A24]">
              <span>CAMPAIGN ROAS ANALYTICS</span>
              <span className="px-2 py-0.5 rounded-full bg-[#FFE5ED] text-[#FF087F]">LIVE CAPI</span>
            </div>
            <div className="relative w-full h-16 flex items-end justify-between px-1 border-b border-[#111321]/10">
              <svg viewBox="0 0 200 60" className="w-full h-full overflow-visible">
                <path
                  d="M0,50 Q40,40 70,25 T140,20 T200,5"
                  fill="none"
                  stroke="#FF6038"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <circle cx="200" cy="5" r="4.5" fill="#FF087F" />
              </svg>
            </div>
            <div className="flex items-center justify-between text-xs pt-1">
              <span className="font-extrabold text-[#111321]">4.8x Avg ROAS</span>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                +185% Net ROI
              </span>
            </div>
          </div>
        );

      case "google-ads":
        return (
          <div className="relative w-full h-36 rounded-2xl bg-white/80 border border-[#111321]/10 p-3 shadow-inner flex flex-col justify-between overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
            <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-[#FFF9F6] border border-[#111321]/10 text-[11px] font-medium text-[#111321]">
              <span className="text-[#FF8A24]">🔍</span>
              <span className="truncate font-semibold">[High Intent Search] "digital agency"</span>
            </div>
            <div className="p-2 rounded-xl bg-[#FFF0E9] border border-[#FF6038]/30 flex items-center justify-between">
              <div>
                <div className="text-[9px] font-mono text-[#FF6038] font-bold">GOOGLE ADS SEARCH #1</div>
                <div className="text-xs font-bold text-[#111321]">CoreClick — Click Smart. Grow Fast.</div>
              </div>
              <span className="text-[10px] font-mono font-bold bg-[#FF8A24] text-white px-2 py-1 rounded-md">
                CTR 8.4%
              </span>
            </div>
            <div className="flex justify-between items-center text-[10px] text-[#727383] font-mono">
              <span>Quality Score: 10/10</span>
              <span className="text-emerald-600 font-bold">Exact Match Only</span>
            </div>
          </div>
        );

      case "meta-ads":
        return (
          <div className="relative w-full h-36 rounded-2xl bg-white/80 border border-[#111321]/10 p-3 shadow-inner flex items-center justify-center gap-3 overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
            <div className="w-24 h-28 bg-[#111321] rounded-xl p-2 text-white flex flex-col justify-between shadow-md relative">
              <div className="flex justify-between items-center text-[9px] text-[#FF087F]">
                <span>META REEL AD</span>
                <span>▶</span>
              </div>
              <div className="text-center font-bold text-[11px] text-white">Scroll-Stopping Hook</div>
              <div className="text-[9px] text-[#D4CBD5]">❤️ 14.2K conversions</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="px-3 py-1.5 rounded-xl bg-[#FFE5ED] text-[#FF087F] text-[11px] font-bold shadow-sm">
                🎯 CAPI Server Sync
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-[#FFF0E9] text-[#FF6038] text-[11px] font-bold shadow-sm">
                💬 Instant Lead Form
              </div>
            </div>
          </div>
        );

      case "seo":
        return (
          <div className="relative w-full h-36 rounded-2xl bg-white/80 border border-[#111321]/10 p-3 shadow-inner flex flex-col justify-between overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#FFF9F6] border border-[#111321]/10 text-xs font-medium text-[#111321]">
              <span className="text-[#FF8A24]">🔍</span>
              <span className="truncate">topical organic authority</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#F0E9FF] border border-[#111321]/10 flex items-center justify-between">
              <div>
                <div className="text-[9px] font-mono text-[#7000FF] font-bold">PAGE 1 GOOGLE ORGANIC</div>
                <div className="text-xs font-extrabold text-[#111321]">CoreClick Organic Pillar</div>
              </div>
              <span className="w-6 h-6 rounded-full bg-emerald-500 text-white font-bold text-xs flex items-center justify-center shadow">
                ↑1
              </span>
            </div>
            <div className="flex items-center justify-between text-[10px] text-[#727383] font-mono">
              <span>Topical Cluster Rank</span>
              <span className="text-[#7000FF] font-bold">+340% Traffic</span>
            </div>
          </div>
        );

      case "local-seo":
        return (
          <div className="relative w-full h-36 rounded-2xl bg-white/80 border border-[#111321]/10 p-3 shadow-inner flex flex-col justify-between overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#111321]">
                <span className="w-3 h-3 rounded-full bg-[#FF8A24] animate-ping" />
                <span>📍 Varanasi Maps 3-Pack</span>
              </div>
              <span className="px-2 py-0.5 rounded-md bg-[#FFF0E9] text-[#FF6038] text-[9px] font-bold">
                GEO-TARGETED
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#FFF9F6] border border-[#111321]/10 space-y-1">
              <div className="flex justify-between items-center text-xs font-extrabold text-[#111321]">
                <span>CoreClick Digital Varanasi</span>
                <span className="text-amber-5xl text-amber-500 text-[10px]">4.9 ★★★★★</span>
              </div>
              <div className="text-[10px] text-[#727383]">Sigra, Varanasi · Open Now · Direct Phone & Directions</div>
            </div>
          </div>
        );

      case "social-media-marketing":
        return (
          <div className="relative w-full h-36 rounded-2xl bg-white/80 border border-[#111321]/10 p-3 shadow-inner flex items-center justify-between overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
            <div className="flex gap-2">
              <div className="w-16 h-24 rounded-xl bg-[#111321] text-white p-2 flex flex-col justify-between shadow">
                <span className="text-[8px] font-mono text-[#FF087F]">REEL 01</span>
                <div className="text-[10px] font-bold text-center">Viral Creative</div>
                <span className="text-[8px] text-[#FF8A24]">▶ 45.2K</span>
              </div>
              <div className="w-16 h-24 rounded-xl bg-[#FFF0E9] border border-[#FF6038]/30 p-2 flex flex-col justify-between shadow">
                <span className="text-[8px] font-mono text-[#FF6038]">CAROUSEL</span>
                <div className="text-[10px] font-bold text-center text-[#111321]">Brand Guide</div>
                <span className="text-[8px] text-[#FF6038]">❤️ 2.8K</span>
              </div>
            </div>
            <div className="p-2.5 rounded-2xl bg-[#FFE5ED] text-[#FF087F] text-center shadow-sm">
              <div className="font-heading font-extrabold text-sm">30-Day</div>
              <div className="text-[9px] font-mono font-bold">CALENDAR</div>
            </div>
          </div>
        );

      case "branding":
        return (
          <div className="relative w-full h-36 rounded-2xl bg-white/80 border border-[#111321]/10 p-3 shadow-inner flex items-center justify-between overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
            <div className="flex gap-2">
              <div className="w-8 h-20 rounded-xl bg-[#FF8A24] shadow-sm flex items-end justify-center pb-1 text-[9px] font-bold text-white">
                #FF8A
              </div>
              <div className="w-8 h-20 rounded-xl bg-[#FF6038] shadow-sm flex items-end justify-center pb-1 text-[9px] font-bold text-white">
                #FF60
              </div>
              <div className="w-8 h-20 rounded-xl bg-[#FF087F] shadow-sm flex items-end justify-center pb-1 text-[9px] font-bold text-white">
                #FF08
              </div>
            </div>
            <div className="p-3 rounded-2xl bg-[#111321] text-white text-center shadow-md">
              <div className="font-heading font-black text-3xl text-gradient-brand">Cc</div>
              <div className="text-[9px] font-mono text-[#D4CBD5] mt-1">IDENTITY SYSTEM</div>
            </div>
          </div>
        );

      case "content-marketing":
        return (
          <div className="relative w-full h-36 rounded-2xl bg-white/80 border border-[#111321]/10 p-3 shadow-inner flex flex-col justify-between overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#111321]">✍️ Editorial Playbooks</span>
              <span className="px-2 py-0.5 rounded-md bg-[#F0E9FF] text-[#7000FF] text-[9px] font-bold">
                LEAD MAGNET
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#FFF9F6] border border-[#111321]/10 space-y-1">
              <div className="text-xs font-extrabold text-[#111321]">Industry Insights & Whitepapers</div>
              <div className="text-[10px] text-[#727383]">
                Unit-economic copywriting that pre-sells prospects before sales calls.
              </div>
            </div>
          </div>
        );

      case "website-development":
        return (
          <div className="relative w-full h-36 rounded-2xl bg-[#090A10] border border-white/20 p-3 shadow-inner flex flex-col justify-between overflow-hidden group-hover:scale-[1.03] transition-transform duration-300 text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A24]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF6038]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF087F]" />
              </div>
              <span className="text-[9px] font-mono text-emerald-400 font-bold">sub-1.5s LCP</span>
            </div>
            <div className="text-xs font-mono font-bold space-y-1">
              <div className="text-[#FFF9F6]">&lt;<span className="text-[#FF8A24]">React</span> speed="instant" /&gt;</div>
              <div className="text-[10px] text-[#D4CBD5] font-normal">Vite · Tailwind v4 · Zero CLS</div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-emerald-400 font-mono">
              <span>Performance: 100/100</span>
              <span className="text-white font-bold">Mobile-First</span>
            </div>
          </div>
        );

      case "landing-page-design":
        return (
          <div className="relative w-full h-36 rounded-2xl bg-white/80 border border-[#111321]/10 p-3 shadow-inner flex flex-col justify-between overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-[#FF8A24]">SINGLE-OBJECTIVE LANDING PAGE</span>
              <span className="px-2 py-0.5 rounded-full bg-[#FFE5ED] text-[#FF087F] text-[9px] font-bold">
                +214% CVR
              </span>
            </div>
            <div className="p-2 rounded-xl bg-[#FFF0E9] border border-[#FF6038]/30 flex items-center justify-between">
              <div>
                <div className="text-[9px] font-mono text-[#FF6038]">OPTIMIZED FUNNEL</div>
                <div className="text-xs font-bold text-[#111321]">Distraction-Free Conversion</div>
              </div>
              <span className="px-2 py-1 bg-[#111321] text-white text-[9px] font-bold rounded-lg">
                Submit CTA →
              </span>
            </div>
            <div className="text-[10px] text-[#727383] font-mono flex justify-between">
              <span>Zero Bounce Links</span>
              <span className="text-emerald-600 font-bold">A/B Tested</span>
            </div>
          </div>
        );

      case "lead-generation":
        return (
          <div className="relative w-full h-36 rounded-2xl bg-white/80 border border-[#111321]/10 p-3 shadow-inner flex flex-col justify-between overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
            <div className="flex items-center justify-between text-[10px] font-mono font-bold text-[#FF087F]">
              <span>INBOUND PIPELINE ENGINE</span>
              <span className="px-2 py-0.5 rounded-md bg-[#FFF0E9] text-[#FF6038] text-[9px]">
                INSTANT WEBHOOK
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#FFE5ED] border border-[#FF087F]/20 space-y-1">
              <div className="flex items-center justify-between text-xs font-extrabold text-[#111321]">
                <span>Verified Prospect Lead</span>
                <span className="text-[9px] bg-[#111321] text-white px-2 py-0.5 rounded font-mono">
                  QUALIFIED
                </span>
              </div>
              <div className="text-[10px] text-[#343644]">Phone · Email · WhatsApp Dispatched</div>
            </div>
          </div>
        );

      case "digital-marketing-strategy":
        return (
          <div className="relative w-full h-36 rounded-2xl bg-white/80 border border-[#111321]/10 p-3 shadow-inner flex flex-col justify-between overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#111321]">🎯 Growth Roadmap & Audit</span>
              <span className="px-2 py-0.5 rounded-md bg-[#F0E9FF] text-[#7000FF] text-[9px] font-bold">
                90-DAY SPRINT
              </span>
            </div>
            <div className="p-2 rounded-xl bg-[#F0E9FF] border border-[#7000FF]/20 flex items-center justify-between">
              <div className="text-xs font-bold text-[#111321]">Channel Allocation & Unit Economics</div>
              <span className="text-xs text-[#7000FF] font-extrabold">30+ Pages</span>
            </div>
            <div className="text-[10px] text-[#727383] font-mono flex justify-between">
              <span>Multi-Channel Synergy</span>
              <span className="text-[#FF6038] font-bold">Zero Ad Waste</span>
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
      className={`group relative rounded-3xl p-6 md:p-7 border-2 transition-all duration-300 flex flex-col justify-between ${
        config.bgClass
      } ${
        isHovered
          ? "border-[#FF6038] shadow-[12px_12px_0px_0px_#111321]"
          : `${config.borderColor} shadow-[6px_6px_0px_0px_rgba(17,19,33,0.08)]`
      }`}
    >
      <div>
        {/* Header Illustration Area */}
        <div className="mb-6 relative">
          {renderIllustration(service.slug, config.isDark)}

          {/* Service Number Badge Pill */}
          <div className="absolute top-2 right-2 px-2.5 py-1 rounded-full bg-[#111321] text-white font-mono text-xs font-extrabold shadow-md">
            {formattedNumber}
          </div>
        </div>

        {/* Category Pill Tag */}
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`text-[10px] font-mono font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider ${
              config.badgeBg
            } ${config.badgeText}`}
          >
            {service.category}
          </span>
        </div>

        {/* Service Title */}
        <h3
          className={`font-heading font-extrabold text-xl md:text-2xl transition-colors leading-snug ${
            config.isDark
              ? "text-white group-hover:text-[#FF8A24]"
              : "text-[#111321] group-hover:text-[#FF6038]"
          }`}
        >
          {service.title}
        </h3>

        {/* Short Description */}
        <p
          className={`text-xs sm:text-sm mt-2.5 leading-relaxed font-normal ${
            config.isDark ? "text-[#D4CBD5]" : "text-[#343644]"
          }`}
        >
          {service.shortDescription}
        </p>

        {/* Key Deliverables / Benefits checklist */}
        <div
          className={`mt-5 pt-4 space-y-2 border-t ${
            config.isDark ? "border-white/10" : "border-[#111321]/10"
          }`}
        >
          {service.deliverables.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2 text-xs font-medium ${
                config.isDark ? "text-white/90" : "text-[#111321]"
              }`}
            >
              <Check className="w-3.5 h-3.5 text-[#FF6038] shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer Link */}
      <div
        className={`mt-8 pt-4 border-t ${
          config.isDark ? "border-white/10" : "border-[#111321]/10"
        }`}
      >
        <Link
          to={`/services/${service.slug}/`}
          className={`inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold transition-colors ${
            config.isDark
              ? "text-[#FF8A24] group-hover:text-white"
              : "text-[#111321] group-hover:text-[#FF6038]"
          }`}
        >
          <span>Explore Dedicated Service</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
