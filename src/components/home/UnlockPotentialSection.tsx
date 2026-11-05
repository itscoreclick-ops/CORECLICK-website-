import React from "react";
import { Link } from "react-router-dom";
import { Search, TrendingUp, Layout, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export const UnlockPotentialSection: React.FC = () => {
  const pillars = [
    {
      number: "01",
      title: "Get Found Online",
      tag: "ORGANIC & MAPS SEARCH",
      desc: "Topical SEO, Local Maps 3-Pack, Google Business Profile optimization, and search authority that puts your business on Page 1.",
      deliverables: ["Varanasi Google 3-Pack SEO", "Topical Content Pillars", "Technical Web Speed Audit"],
      icon: Search,
      slug: "seo",
      bgClass: "bg-[#FFF0E9]",
      badgeBg: "bg-[#FFE5ED]",
      badgeText: "text-[#FF087F]",
      borderColor: "border-[#FF8A24]",
    },
    {
      number: "02",
      title: "Reach More Customers",
      tag: "PAID ACQUISITION & REELS",
      desc: "Targeted Google Search, Performance Max campaigns, viral Instagram Reels, and Meta Ads engineered to drive qualified enquiries.",
      deliverables: ["Meta CAPI Server Tracking", "Google Search STAG Ads", "Weekly Video Reel Sprints"],
      icon: TrendingUp,
      slug: "performance-marketing",
      bgClass: "bg-[#FFF9F6]",
      badgeBg: "bg-[#FFF0E9]",
      badgeText: "text-[#FF6038]",
      borderColor: "border-[#FF6038]",
    },
    {
      number: "03",
      title: "Convert More Enquiries",
      tag: "HIGH-SPEED WEB & CRO",
      desc: "Sub-1.5s mobile landing pages, custom Figma UI/UX, distinctive brand identity, and friction-free lead capture funnels.",
      deliverables: ["React Mobile Web Build", "Single-Objective Funnels", "Brand Identity Guidelines"],
      icon: Layout,
      slug: "website-development",
      bgClass: "bg-[#FFE5ED]",
      badgeBg: "bg-[#F0E9FF]",
      badgeText: "text-[#7000FF]",
      borderColor: "border-[#FF087F]",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FFF0E9] relative overflow-hidden">
      {/* Background Soft Lighting & Grid */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 -left-32 w-96 h-96 bg-[#FF8A24]/10 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/3 -right-32 w-96 h-96 bg-[#FF087F]/10 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#FF6038]/20 text-xs font-mono font-extrabold uppercase tracking-widest text-[#FF6038] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" />
            <span>CUSTOMER ACQUISITION SYSTEM</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#11121D] tracking-tight">
            Your Business Has Potential. <br />
            <span className="text-gradient-brand">Let's Unlock It.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#343644] leading-relaxed font-normal max-w-2xl mx-auto">
            From building your brand identity to generating qualified leads, CoreClick brings strategy, creativity and technology together to help your business grow.
          </p>
        </div>

        {/* 3 Interactive Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const IconComp = pillar.icon;

            return (
              <div
                key={pillar.number}
                className={`group relative rounded-3xl p-7 border-2 transition-all duration-300 flex flex-col justify-between ${
                  pillar.bgClass
                } border-[#11121D]/15 shadow-[6px_6px_0px_0px_rgba(17,19,33,0.08)] hover:${
                  pillar.borderColor
                } hover:shadow-[12px_12px_0px_0px_#11121D] hover:-translate-y-3`}
              >
                <div>
                  {/* Top Row: Number & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white text-[#FF6038] group-hover:bg-gradient-brand group-hover:text-white flex items-center justify-center transition-colors shadow-md">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className="font-mono text-2xl font-black text-[#FF6038]">
                      {pillar.number}
                    </span>
                  </div>

                  {/* Category Tag */}
                  <span
                    className={`text-[10px] font-mono font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider block max-w-fit mb-2 ${pillar.badgeBg} ${pillar.badgeText}`}
                  >
                    {pillar.tag}
                  </span>

                  {/* Title */}
                  <h3 className="font-heading font-extrabold text-2xl text-[#11121D] group-hover:text-[#FF6038] transition-colors mb-3">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#343644] leading-relaxed font-normal mb-6">
                    {pillar.desc}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="pt-4 border-t border-[#11121D]/10 space-y-2">
                    {pillar.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs font-semibold text-[#11121D]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6038] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action Link */}
                <div className="mt-8 pt-4 border-t border-[#11121D]/10">
                  <Link
                    to={`/services/${pillar.slug}/`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#11121D] group-hover:text-[#FF6038] transition-colors"
                  >
                    <span>Explore Capability</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
