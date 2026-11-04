import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Layers, Video, TrendingUp, Layout, Zap, ArrowRight } from "lucide-react";

interface NodeData {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  slug: string;
  color: string;
  gradient: string;
  output: string;
}

const ECOSYSTEM_NODES: NodeData[] = [
  {
    id: "strategy",
    step: "STAGE 01",
    title: "Brand Strategy",
    subtitle: "Positioning & Market Truths",
    icon: Sparkles,
    slug: "digital-marketing-strategy",
    color: "#7000FF",
    gradient: "from-[#7000FF] to-[#9D00FF]",
    output: "Ideal Customer Avatar & Economics",
  },
  {
    id: "creative",
    step: "STAGE 02",
    title: "Content & Creative",
    subtitle: "High-Retention Visual Reels",
    icon: Video,
    slug: "social-media-marketing",
    color: "#FF087F",
    gradient: "from-[#FF087F] to-[#FF6038]",
    output: "Thumb-Stopping Ad Angles & Assets",
  },
  {
    id: "paid",
    step: "STAGE 03",
    title: "Paid Advertising",
    subtitle: "Google & Meta Acquisition",
    icon: TrendingUp,
    slug: "performance-marketing",
    color: "#FF6038",
    gradient: "from-[#FF6038] to-[#FF8A24]",
    output: "Targeted Traffic & Active Searchers",
  },
  {
    id: "landing",
    step: "STAGE 04",
    title: "Landing Pages & CRO",
    subtitle: "Sub-Second Conversion UX",
    icon: Layout,
    slug: "landing-page-design",
    color: "#FF8A24",
    gradient: "from-[#FF8A24] to-[#FFB800]",
    output: "Distraction-Free Intent Form",
  },
  {
    id: "lead",
    step: "STAGE 05",
    title: "Lead Generation",
    subtitle: "CAPI & Instant Webhook Routing",
    icon: Zap,
    slug: "lead-generation",
    color: "#111321",
    gradient: "from-[#111321] to-[#343644]",
    output: "Pre-Qualified Inbound Leads",
  },
  {
    id: "growth",
    step: "STAGE 06",
    title: "Business Growth",
    subtitle: "Compounding Profit & Scale",
    icon: Layers,
    slug: "performance-marketing",
    color: "#059669",
    gradient: "from-[#059669] to-[#10B981]",
    output: "Predictable Unit-Economic ROI",
  },
];

export const EcosystemDiagram: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>("paid");

  const currentNode = ECOSYSTEM_NODES.find((n) => n.id === activeNode) || ECOSYSTEM_NODES[2];

  return (
    <section className="py-20 md:py-28 bg-[#FFF0E9] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#FF6038]/30 text-xs font-mono font-bold uppercase tracking-wider text-[#FF6038]">
            <span className="w-2 h-2 rounded-full bg-[#FF087F] animate-pulse" />
            <span>CONNECTED GROWTH ENGINE</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#111321] tracking-tight">
            One Growth Partner. <br />
            <span className="text-gradient-brand">Every Digital Capability.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#343644] max-w-2xl mx-auto leading-relaxed">
            Our services do not operate in isolation. Every stage flows seamlessly into the next—creating a continuous loop that turns cold market attention into loyal, high-value customers.
          </p>
        </div>

        {/* Desktop Connected Diagram Flow */}
        <div className="relative mt-8 p-6 md:p-10 bg-white rounded-3xl border-2 border-[#111321] shadow-[10px_10px_0px_0px_#111321]">
          {/* Animated Connecting Gradient Line Background */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 -translate-y-1/2 h-2 pointer-events-none z-0">
            <div className="w-full h-full bg-gradient-to-r from-[#7000FF] via-[#FF087F] via-[#FF6038] via-[#FF8A24] to-[#059669] rounded-full opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#7000FF] via-[#FF087F] via-[#FF6038] via-[#FF8A24] to-[#059669] rounded-full animate-pulse opacity-80" />
          </div>

          {/* Node Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative z-10">
            {ECOSYSTEM_NODES.map((node, index) => {
              const IconComp = node.icon;
              const isSelected = activeNode === node.id;

              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(node.id)}
                  className={`cursor-pointer rounded-2xl p-4 transition-all duration-300 flex flex-col justify-between relative ${
                    isSelected
                      ? "bg-[#111321] text-white -translate-y-2 shadow-xl border-2 border-[#FF6038]"
                      : "bg-[#FFF9F6] text-[#111321] border border-[#111321]/15 hover:border-[#FF6038] hover:-translate-y-1"
                  }`}
                >
                  {/* Step Eyebrow */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[9px] font-mono font-extrabold px-2 py-0.5 rounded-full ${
                        isSelected ? "bg-[#FF087F] text-white" : "bg-[#FFE5ED] text-[#FF087F]"
                      }`}
                    >
                      {node.step}
                    </span>
                    {index < ECOSYSTEM_NODES.length - 1 && (
                      <span className="hidden lg:block text-xs font-bold text-[#FF6038]">→</span>
                    )}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                      isSelected ? "bg-gradient-brand text-white" : "bg-white text-[#FF6038] shadow-sm"
                    }`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3
                      className={`font-heading font-extrabold text-sm ${
                        isSelected ? "text-white" : "text-[#111321]"
                      }`}
                    >
                      {node.title}
                    </h3>
                    <p
                      className={`text-[11px] mt-1 line-clamp-2 ${
                        isSelected ? "text-[#D4CBD5]" : "text-[#727383]"
                      }`}
                    >
                      {node.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Node Detail Card */}
          <div className="mt-8 pt-6 border-t-2 border-[#111321]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#FFF0E9] rounded-2xl p-5">
            <div className="space-y-1">
              <div className="text-[10px] font-mono font-extrabold text-[#FF6038] uppercase tracking-wider">
                ACTIVE SYSTEM STAGE OUTPUT: {currentNode.step}
              </div>
              <div className="font-heading font-extrabold text-lg text-[#111321]">
                {currentNode.title} → <span className="text-[#FF087F]">{currentNode.output}</span>
              </div>
            </div>

            <Link
              to={`/services/${currentNode.slug}/`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111321] text-white text-xs font-extrabold hover:bg-black transition-all shrink-0"
            >
              <span>Explore Stage Capability</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FF8A24]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
