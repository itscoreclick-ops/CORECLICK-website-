import React from "react";
import { Link } from "react-router-dom";
import { Zap, Search, Layers, Globe, ArrowRight } from "lucide-react";

export const SiloBreakSection: React.FC = () => {
  const hubs = [
    {
      icon: Zap,
      title: "Paid Acquisition",
      desc: "Google Search & Meta Reels capturing immediate intent and driving traffic.",
      color: "#FF8A24",
    },
    {
      icon: Search,
      title: "Organic Authority",
      desc: "Topical SEO & Varanasi Maps 3-Pack dominating organic discovery.",
      color: "#FF6038",
    },
    {
      icon: Layers,
      title: "Creative Distinction",
      desc: "High-retention video hooks & brand identity establishing market leadership.",
      color: "#FF087F",
    },
    {
      icon: Globe,
      title: "High-Speed Web",
      desc: "React landing pages with sub-1.5s loads turning clicks into leads.",
      color: "#7000FF",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#11121D] text-white relative overflow-hidden">
      {/* Ambient Orange and Pink Radial Glows */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 -left-32 w-96 h-96 bg-[#FF8A24]/20 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#FF087F]/20 rounded-full blur-3xl pointer-events-none"
      />

      {/* Grid Pattern Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold uppercase tracking-widest text-[#FF8A24]">
            <span>UNIFIED SYSTEM ARCHITECTURE</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
            Your Marketing Should Work Together. <br />
            <span className="text-gradient-brand">Not in Silos.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#D4CBD5] font-normal leading-relaxed">
            From the first impression to the final conversion, CoreClick connects every digital touchpoint into one growth-focused system.
          </p>
        </div>

        {/* 4 Connected Hubs Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {hubs.map((hub, idx) => {
            const IconComp = hub.icon;
            return (
              <div
                key={idx}
                className="group bg-[#1A1C2E] border border-white/10 rounded-3xl p-6 hover:border-[#FF6038] transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${hub.color}20`, color: hub.color }}
                  >
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-white group-hover:text-[#FF8A24] transition-colors">
                    {hub.title}
                  </h3>

                  <p className="text-xs text-[#D4CBD5] mt-2 leading-relaxed">
                    {hub.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#FF6038]">
                  <span>SYSTEM HUB {idx + 1}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-16 text-center">
          <Link
            to="/contact/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-brand text-white font-extrabold text-sm shadow-xl hover:shadow-[#FF087F]/30 hover:scale-[1.02] transition-all"
          >
            <span>Audit Your Digital Ecosystem</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
