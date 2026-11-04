import React from "react";
import { Link } from "react-router-dom";

interface MarqueeItem {
  label: string;
  href: string;
  type: "service" | "project";
}

const MARQUEE_ITEMS: MarqueeItem[] = [
  { label: "PERFORMANCE MARKETING", href: "/services/performance-marketing/", type: "service" },
  { label: "GOOGLE ADS", href: "/services/google-ads/", type: "service" },
  { label: "META ADS", href: "/services/meta-ads/", type: "service" },
  { label: "SEARCH ENGINE OPTIMIZATION", href: "/services/seo/", type: "service" },
  { label: "LOCAL SEO", href: "/services/local-seo/", type: "service" },
  { label: "SOCIAL MEDIA MARKETING", href: "/services/social-media-marketing/", type: "service" },
  { label: "BRANDING & DESIGN", href: "/services/branding/", type: "service" },
  { label: "CONTENT MARKETING", href: "/services/content-marketing/", type: "service" },
  { label: "WEBSITE DEVELOPMENT", href: "/services/website-development/", type: "service" },
  { label: "LANDING PAGE DESIGN", href: "/services/landing-page-design/", type: "service" },
  { label: "LEAD GENERATION", href: "/services/lead-generation/", type: "service" },
  { label: "CONVERSION OPTIMIZATION", href: "/services/landing-page-design/", type: "service" },
  // Selected Brand Projects Segment
  { label: "KESHAV BHOG", href: "/work/keshav-bhog-handloom/", type: "project" },
  { label: "ROBOPULSE INTELLIGENCE", href: "/work/robopulse-intelligence/", type: "project" },
  { label: "SHREE DELIGHT SAREES", href: "/work/shree-delight-sarees/", type: "project" },
  { label: "VARANASI HERITAGE TOURS", href: "/work/varanasi-heritage-tours/", type: "project" },
];

export const InfiniteMarquee: React.FC = () => {
  const renderTrackItems = (isDuplicate = false) => (
    <div
      className="flex items-center gap-6 sm:gap-8 lg:gap-10 shrink-0 py-4.5 sm:py-5 px-4"
      aria-hidden={isDuplicate}
    >
      {MARQUEE_ITEMS.map((item, idx) => (
        <React.Fragment key={`${isDuplicate ? "dup" : "orig"}-${idx}`}>
          {/* Project Section Header Badge */}
          {idx === 12 && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/25 text-white/95 text-[10px] sm:text-xs font-mono font-extrabold uppercase tracking-widest border border-white/20 shrink-0">
              ✦ SELECTED BRAND PROJECTS:
            </span>
          )}

          {/* Interactive Item Link */}
          <Link
            to={item.href}
            tabIndex={isDuplicate ? -1 : 0}
            className="group flex items-center gap-2 text-white font-heading font-extrabold text-sm sm:text-base md:text-lg tracking-wide uppercase whitespace-nowrap hover:text-white/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
          >
            <span className="text-[#FFF9F6] font-bold">
              {item.type === "service" ? "✦" : "•"}
            </span>
            <span className="group-hover:underline decoration-white/60 underline-offset-4">
              {item.label}
            </span>
          </Link>

          {/* Separator Accent */}
          <span className="text-white/60 text-xs sm:text-sm font-bold shrink-0" aria-hidden="true">
            ❖
          </span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <section
      aria-label="CoreClick Services and Projects Infinite Marquee"
      className="w-full relative overflow-hidden bg-gradient-brand shadow-xl z-20 border-y border-white/10"
    >
      <div className="w-full flex overflow-hidden select-none py-1">
        <div className="animate-marquee flex items-center shrink-0">
          {/* Track 1 */}
          {renderTrackItems(false)}
          {/* Track 2 (Duplicate for Seamless Endless Looping) */}
          {renderTrackItems(true)}
        </div>
      </div>
    </section>
  );
};
