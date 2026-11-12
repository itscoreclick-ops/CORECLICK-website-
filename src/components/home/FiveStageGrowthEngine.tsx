import React, { useState } from "react";
import { Search, Compass, Palette, Rocket, TrendingUp, Sparkles, Check, ArrowRight } from "lucide-react";

interface ProcessStage {
  id: string;
  step: string;
  label: string;
  title: string;
  desc: string;
  deliverables: string[];
  bgClass: string;
  badgeBg: string;
  badgeText: string;
  borderColor: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

const STAGES: ProcessStage[] = [
  {
    id: "discover",
    step: "01",
    label: "RESEARCH & INTELLIGENCE",
    title: "Discover",
    desc: "We understand your business, margins, audience, competition, and opportunities before recommending a growth strategy.",
    deliverables: ["Business Audit", "Audience Research", "Competitor Analysis"],
    bgClass: "bg-[#FFF0E9]",
    badgeBg: "bg-[#FFE5ED]",
    badgeText: "text-[#FF087F]",
    borderColor: "border-[#FF8A24]",
    icon: Search,
    tag: "Stage 01 · Research",
  },
  {
    id: "strategize",
    step: "02",
    label: "PLANNING & POSITIONING",
    title: "Strategize",
    desc: "We create a focused growth roadmap connecting your brand positioning, marketing channels, budget, and business objectives.",
    deliverables: ["Growth Roadmap", "Channel Strategy", "Budget Planning"],
    bgClass: "bg-[#FFF9F6]",
    badgeBg: "bg-[#FFF0E9]",
    badgeText: "text-[#FF6038]",
    borderColor: "border-[#FF6038]",
    icon: Compass,
    tag: "Stage 02 · Strategy",
  },
  {
    id: "create",
    step: "03",
    label: "CREATIVE & CONTENT",
    title: "Create",
    desc: "We develop compelling creative assets, persuasive content, and conversion-focused experiences that capture attention.",
    deliverables: ["Creative Assets", "Ad Copy", "Landing Pages"],
    bgClass: "bg-[#FFE5ED]",
    badgeBg: "bg-[#FFF0E9]",
    badgeText: "text-[#FF8A24]",
    borderColor: "border-[#FF087F]",
    icon: Palette,
    tag: "Stage 03 · Creative",
  },
  {
    id: "execute",
    step: "04",
    label: "CAMPAIGN LAUNCH",
    title: "Execute",
    desc: "We launch campaigns, deploy tracking, connect marketing platforms, and turn strategy into measurable execution.",
    deliverables: ["Campaign Setup", "Tracking Integration", "Campaign Launch"],
    bgClass: "bg-[#F0E9FF]",
    badgeBg: "bg-[#FFE5ED]",
    badgeText: "text-[#FF087F]",
    borderColor: "border-[#7000FF]",
    icon: Rocket,
    tag: "Stage 04 · Launch",
  },
  {
    id: "optimize",
    step: "05",
    label: "PERFORMANCE & SCALING",
    title: "Optimize",
    desc: "We continuously analyze performance, improve conversion rates, refine targeting, and identify opportunities to scale.",
    deliverables: ["Performance Analysis", "CRO", "Scaling Strategy"],
    bgClass: "bg-[#FFF0E9]",
    badgeBg: "bg-[#F0E9FF]",
    badgeText: "text-[#7000FF]",
    borderColor: "border-[#FF6038]",
    icon: TrendingUp,
    tag: "Stage 05 · Scaling",
  },
];

export const FiveStageGrowthEngine: React.FC = () => {
  const [activeStage, setActiveStage] = useState<string>("discover");

  const currentStageObj = STAGES.find((s) => s.id === activeStage) || STAGES[0];

  // Render custom visual illustration for each of the 5 stages
  const renderIllustration = (id: string) => {
    switch (id) {
      case "discover":
        return (
          <div className="relative w-full h-32 rounded-2xl bg-white border border-[#111321]/10 p-3 shadow-inner flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between text-[10px] font-mono font-bold text-[#FF8A24]">
              <span>AUDIENCE RESEARCH</span>
              <span className="px-2 py-0.5 rounded-full bg-[#FFE5ED] text-[#FF087F]">UNIT MARGINS</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFF0E9] flex items-center justify-center text-[#FF8A24] font-bold text-sm border border-[#FF8A24]/30 shadow-sm">
                🔍
              </div>
              <div className="space-y-1">
                <div className="text-xs font-extrabold text-[#111321]">Competitor Gap Matrix</div>
                <div className="text-[10px] text-[#727383]">Audience Desire & Price Elasticity</div>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-emerald-600 font-mono font-bold">
              <span>Verified Buyer Persona</span>
              <span>100% Audit</span>
            </div>
          </div>
        );

      case "strategize":
        return (
          <div className="relative w-full h-32 rounded-2xl bg-white border border-[#111321]/10 p-3 shadow-inner flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between text-[10px] font-mono font-bold text-[#FF6038]">
              <span>MULTICHANNEL ROADMAP</span>
              <span className="px-2 py-0.5 rounded-full bg-[#FFF0E9] text-[#FF6038]">90-DAY SPRINT</span>
            </div>
            <div className="p-2 rounded-xl bg-[#FFF0E9] border border-[#FF6038]/30 flex items-center justify-between">
              <div>
                <div className="text-[9px] font-mono text-[#FF6038] font-bold">BUDGET ALLOCATION</div>
                <div className="text-xs font-bold text-[#111321]">Search + Reels + Conversion UX</div>
              </div>
              <span className="text-[9px] font-mono font-bold bg-[#111321] text-white px-2 py-1 rounded-md">
                ROADMAP
              </span>
            </div>
            <div className="flex justify-between items-center text-[10px] text-[#727383] font-mono">
              <span>Channel Synergy</span>
              <span className="text-[#FF6038] font-bold">Zero Ad Waste</span>
            </div>
          </div>
        );

      case "create":
        return (
          <div className="relative w-full h-32 rounded-2xl bg-white border border-[#111321]/10 p-3 shadow-inner flex items-center justify-between overflow-hidden">
            <div className="flex gap-2">
              <div className="w-16 h-22 rounded-xl bg-[#111321] text-white p-2 flex flex-col justify-between shadow">
                <span className="text-[8px] font-mono text-[#FF087F]">REEL AD</span>
                <div className="text-[10px] font-bold text-center">Visual Hook</div>
                <span className="text-[8px] text-[#FF8A24]">▶ High CVR</span>
              </div>
              <div className="w-16 h-22 rounded-xl bg-[#FFE5ED] border border-[#FF087F]/30 p-2 flex flex-col justify-between shadow">
                <span className="text-[8px] font-mono text-[#FF087F]">LANDING</span>
                <div className="text-[10px] font-bold text-center text-[#111321]">Sub-1.5s</div>
                <span className="text-[8px] text-[#FF6038]">⚡ Instant</span>
              </div>
            </div>
            <div className="p-2.5 rounded-2xl bg-[#FFF0E9] text-[#FF8A24] text-center shadow-sm">
              <div className="font-heading font-extrabold text-sm">Ad Copy</div>
              <div className="text-[9px] font-mono font-bold">SPRINTS</div>
            </div>
          </div>
        );

      case "execute":
        return (
          <div className="relative w-full h-32 rounded-2xl bg-[#111321] text-white p-3 shadow-inner flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-1">
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#FF8A24]">
                <span>🚀 CAMPAIGN LAUNCH</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] font-mono font-bold">
                CAPI ACTIVE
              </span>
            </div>
            <div className="text-xs font-mono font-bold text-[#FFF9F6] space-y-1">
              <div>Google Search STAGs · Meta ABO</div>
              <div className="text-[10px] text-[#D4CBD5]">Offline Conversions & Server Webhook</div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-emerald-400 font-mono">
              <span>Tracking 100%</span>
              <span className="text-white font-bold">Live Traffic</span>
            </div>
          </div>
        );

      case "optimize":
        return (
          <div className="relative w-full h-32 rounded-2xl bg-white border border-[#111321]/10 p-3 shadow-inner flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between text-[10px] font-mono font-bold text-[#FF087F]">
              <span>PERFORMANCE SCALING</span>
              <span className="px-2 py-0.5 rounded-full bg-[#FFE5ED] text-[#FF087F] font-bold">
                4.8x ROAS
              </span>
            </div>
            <div className="relative w-full h-12 flex items-end justify-between px-1">
              <svg viewBox="0 0 200 50" className="w-full h-full overflow-visible">
                <path
                  d="M0,45 Q40,35 70,20 T140,15 T200,5"
                  fill="none"
                  stroke="#FF087F"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <circle cx="200" cy="5" r="4.5" fill="#FF8A24" />
              </svg>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono font-bold text-[#111321]">
              <span>Bid Optimization</span>
              <span className="text-emerald-600">+185% Pipeline</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="relative bg-[#FFF9F6] text-[#111321] py-24 md:py-32 overflow-hidden">
      {/* ---------------- TOP ORGANIC WAVE TRANSITION ---------------- */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 L1440,0 L1440,40 C1120,80 800,10 400,60 C200,85 80,30 0,45 Z"
            fill="#FFF0E9"
          />
        </svg>
      </div>

      {/* ---------------- BACKGROUND SOFT PEACH LIGHTING & GRID ---------------- */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#FF8A24]/10 rounded-full blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-[#FF087F]/10 rounded-full blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"
      />

      {/* Huge Decorative Faint Number "05" Watermark in Warm Cream */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading font-black text-[300px] sm:text-[480px] text-[#111321]/[0.03] select-none pointer-events-none"
      >
        05
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        {/* ---------------- SECTION INTRODUCTION ---------------- */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF0E9] border border-[#FF6038]/20 text-xs font-mono font-extrabold uppercase tracking-widest text-[#FF6038]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" />
            <span>✦ METHODOLOGY / THE CORECLICK FRAMEWORK</span>
          </div>

          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight text-[#111321] leading-tight">
            Five Stages. <br />
            <span className="text-gradient-brand">One Growth Engine.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#343644] leading-relaxed font-normal max-w-2xl mx-auto">
            Great marketing isn't a collection of disconnected activities. It's a connected system where strategy, creativity, execution, and optimization work together to move your business forward.
          </p>
        </div>

        {/* ---------------- CENTRAL INTERCONNECTED CARDS COMPOSITION ---------------- */}
        <div className="relative my-8">
          {/* Central CoreClick Cursor Logo Symbol Watermark */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-white/80 border-2 border-[#111321]/15 backdrop-blur-xl items-center justify-center pointer-events-none z-10 shadow-xl">
            <img
              src="/assets/aistudio/Gradient_C_Cursor_Logo_400.webp"
              width="96"
              height="96"
              loading="lazy"
              decoding="async"
              alt="CoreClick Brand Symbol"
              className="w-24 h-24 object-contain animate-pulse"
            />
          </div>

          {/* Continuous Animated Orange-to-Pink Gradient Connecting SVG Path */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 -translate-y-1/2 h-2 pointer-events-none z-0">
            <svg viewBox="0 0 1000 40" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="creamEngineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF8A24" />
                  <stop offset="50%" stopColor="#FF6038" />
                  <stop offset="100%" stopColor="#FF087F" />
                </linearGradient>
              </defs>
              <path
                d="M 20,20 Q 250,5 500,20 T 980,20"
                fill="none"
                stroke="url(#creamEngineGradient)"
                strokeWidth="4"
                strokeDasharray="6 6"
                className="animate-pulse"
              />
              <circle cx="200" cy="20" r="5" fill="#FF8A24" className="animate-ping" />
              <circle cx="500" cy="20" r="6" fill="#FF6038" className="animate-ping" />
              <circle cx="800" cy="20" r="5" fill="#FF087F" className="animate-ping" />
            </svg>
          </div>

          {/* Desktop 5-Card Layered Cream Composition */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-20">
            {STAGES.map((stage) => {
              const IconComp = stage.icon;
              const isSelected = activeStage === stage.id;

              return (
                <div
                  key={stage.id}
                  onClick={() => setActiveStage(stage.id)}
                  onMouseEnter={() => setActiveStage(stage.id)}
                  className={`group cursor-pointer rounded-3xl p-6 border-2 transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                    stage.bgClass
                  } ${
                    isSelected
                      ? "border-[#FF6038] shadow-[12px_12px_0px_0px_#111321] -translate-y-3 z-30"
                      : "border-[#111321]/15 shadow-[6px_6px_0px_0px_rgba(17,19,33,0.08)] hover:border-[#FF6038]/60 hover:-translate-y-2"
                  }`}
                >
                  <div>
                    {/* Top Row: Stage Number & Eyebrow Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-3xl font-black text-[#FF6038] group-hover:scale-110 transition-transform">
                        {stage.step}
                      </span>
                      <span
                        className={`text-[10px] font-mono font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider ${stage.badgeBg} ${stage.badgeText}`}
                      >
                        {stage.tag}
                      </span>
                    </div>

                    {/* Dedicated Visual Illustration Component */}
                    <div className="mb-5 transition-transform duration-300 group-hover:scale-[1.02]">
                      {renderIllustration(stage.id)}
                    </div>

                    {/* Stage Label */}
                    <div className="text-[10px] font-mono font-extrabold text-[#FF6038] tracking-widest uppercase mb-1">
                      {stage.label}
                    </div>

                    {/* Stage Title */}
                    <h3 className="font-heading font-extrabold text-xl md:text-2xl text-[#111321] group-hover:text-[#FF6038] transition-colors mb-2">
                      {stage.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#343644] leading-relaxed font-normal">
                      {stage.desc}
                    </p>
                  </div>

                  {/* Deliverables Checklist Footer */}
                  <div className="mt-6 pt-4 border-t border-[#111321]/10 space-y-1.5">
                    {stage.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs font-semibold text-[#111321]"
                      >
                        <Check className="w-3.5 h-3.5 text-[#FF6038] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------------- 6. VISUAL PROCESS TIMELINE NAVIGATOR ---------------- */}
        <div className="mt-14 p-4 md:p-6 bg-white rounded-3xl border-2 border-[#111321] shadow-[8px_8px_0px_0px_#111321] flex flex-wrap items-center justify-around gap-4 text-center">
          {STAGES.map((s, idx) => {
            const isCurrent = activeStage === s.id;
            return (
              <React.Fragment key={s.id}>
                <button
                  onClick={() => setActiveStage(s.id)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-mono font-extrabold transition-all cursor-pointer ${
                    isCurrent
                      ? "bg-gradient-brand text-white shadow-md -translate-y-0.5"
                      : "bg-[#FFF0E9] text-[#111321] hover:bg-[#FFE5ED]"
                  }`}
                >
                  <span className="text-[#FF8A24]">{s.step}.</span>
                  <span>{s.title.toUpperCase()}</span>
                </button>

                {idx < STAGES.length - 1 && (
                  <span className="hidden lg:inline text-xs font-bold text-[#FF6038]">→</span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* ---------------- 7. CLOSING STATEMENT ---------------- */}
        <div className="mt-16 text-center space-y-3">
          <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#111321] tracking-tight">
            From First Click to <span className="text-gradient-brand">Lasting Growth.</span>
          </h3>
          <p className="text-sm sm:text-base text-[#343644] max-w-xl mx-auto leading-relaxed">
            Every stage is connected. Every decision has a purpose. Every campaign has a direction.
          </p>
        </div>
      </div>

      {/* ---------------- BOTTOM GRADIENT WAVE TRANSITION TO NEXT SECTION ---------------- */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,45 C280,95 560,10 840,70 C1120,120 1280,30 1440,65 L1440,90 L0,90 Z"
            fill="#FFF0E9"
          />
        </svg>
      </div>
    </section>
  );
};
