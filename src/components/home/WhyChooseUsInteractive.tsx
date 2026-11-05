import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Zap, Target, ShieldCheck, ArrowRight, Gauge, MapPin, Activity, CheckCircle2 } from "lucide-react";

export const WhyChooseUsInteractive: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [tiltX, setTiltX] = useState<number>(0);
  const [tiltY, setTiltY] = useState<number>(0);

  const features = [
    {
      id: 0,
      number: "01",
      title: "Zero Vanity Metrics",
      desc: "We optimize for profit and leads, not just impressions.",
      icon: Zap,
      color: "#FF8A24",
      highlightText: "ROAS & Profit Focus",
      metrics: [
        { label: "Target ROAS", value: "4.8x Avg" },
        { label: "Lead Intent", value: "High Commercial" },
      ],
    },
    {
      id: 1,
      number: "02",
      title: "100% Account Ownership",
      desc: "You retain full admin rights to your Google and Meta ad accounts.",
      icon: Target,
      color: "#FF6038",
      highlightText: "Full Client Admin Access",
      metrics: [
        { label: "Google Ads", value: "Direct Admin" },
        { label: "Meta CAPI", value: "Client Owned" },
      ],
    },
    {
      id: 2,
      number: "03",
      title: "Server-Side Tracking",
      desc: "Meta CAPI and Google Enhanced Conversions, where supported and configured.",
      icon: ShieldCheck,
      color: "#FF087F",
      highlightText: "Resilient Signal Tracking",
      metrics: [
        { label: "Attribution", value: "Server-Side" },
        { label: "Signal Loss", value: "-95% Reduced" },
      ],
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dashboardRef.current) return;
    const rect = dashboardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rx = -((y - centerY) / centerY) * 4; // Max 4 deg tilt
    const ry = ((x - centerX) / centerX) * 4;

    setTiltX(rx);
    setTiltY(ry);
  };

  const handleMouseLeave = () => {
    setTiltX(0);
    setTiltY(0);
  };

  return (
    <section className="py-24 md:py-32 bg-[#FFF0E9] relative overflow-hidden">
      {/* Soft Ambient Radial Lighting & Grain Backing */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 -left-20 w-96 h-96 bg-[#FF8A24]/15 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#FF087F]/15 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ---------------- LEFT SIDE: INTERACTIVE GROWTH CONTROL DASHBOARD ---------------- */}
          <div className="lg:col-span-6 relative">
            {/* Visual Connecting Vector Particles (Connecting Left Dashboard to Right Copy) */}
            <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 w-24 h-12 pointer-events-none z-20">
              <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
                <path
                  d="M0,25 C40,25 60,10 100,10"
                  fill="none"
                  stroke="#FF6038"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="opacity-40 animate-pulse"
                />
                <circle cx="50" cy="20" r="3" fill="#FF087F" className="animate-ping" />
              </svg>
            </div>

            <div
              ref={dashboardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
                transition: "transform 0.2s ease-out, box-shadow 0.3s ease",
              }}
              className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#111321] shadow-[10px_10px_0px_0px_#111321] relative overflow-hidden"
            >
              {/* Dashboard Top System Header Bar */}
              <div className="flex items-center justify-between border-b-2 border-[#111321]/15 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-[#111321]">
                    [CORECLICK GROWTH SYSTEM v2.0]
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {/* Status Indicator Pill */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-mono font-bold text-emerald-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>SYSTEM ACTIVE</span>
                  </div>

                  {/* 3 Colored Status Lights */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#FF8A24] border border-[#111321]/20 animate-pulse" />
                    <span className="w-3 h-3 rounded-full bg-[#FF6038] border border-[#111321]/20" />
                    <span className="w-3 h-3 rounded-full bg-[#FF087F] border border-[#111321]/20" />
                  </div>
                </div>
              </div>

              {/* 3 Interactive Dashboard Rows */}
              <div className="space-y-4">
                {features.map((item) => {
                  const IconComp = item.icon;
                  const isActive = activeFeature === item.id;

                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveFeature(item.id)}
                      onMouseEnter={() => setActiveFeature(item.id)}
                      className={`cursor-pointer rounded-2xl p-4 sm:p-5 border-2 transition-all duration-300 relative ${
                        isActive
                          ? "bg-[#FFF9F6] border-[#FF6038] shadow-[4px_4px_0px_0px_#FF6038] -translate-y-1"
                          : "bg-white border-[#111321]/10 hover:border-[#111321]/30 hover:bg-[#FFF9F6]/50"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                            isActive
                              ? "bg-gradient-brand text-white shadow-md rotate-3 scale-105"
                              : "bg-[#FFF0E9] text-[#FF6038]"
                          }`}
                        >
                          <IconComp className="w-5.5 h-5.5" />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-heading font-extrabold text-base text-[#111321]">
                              {item.title}
                            </h3>
                            <span className="font-mono text-xs font-bold text-[#FF6038]">
                              {item.number}
                            </span>
                          </div>

                          <p className="text-xs text-[#343644] mt-1 leading-relaxed">
                            {item.desc}
                          </p>

                          {/* Dynamic Detailed Metric Reveal on Active */}
                          {isActive && (
                            <div className="mt-3 pt-3 border-t border-[#FF6038]/20 flex items-center justify-between text-[11px] font-mono animate-fadeIn">
                              <span className="font-bold text-[#FF087F]">
                                ✓ {item.highlightText}
                              </span>
                              <div className="flex items-center gap-3 text-[#111321]">
                                {item.metrics.map((m, idx) => (
                                  <span key={idx} className="bg-white px-2 py-0.5 rounded border border-[#111321]/10">
                                    {m.label}: <strong>{m.value}</strong>
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Lower Section: Live Animated Visual (Growth In Motion) */}
              <div className="mt-6 pt-5 border-t-2 border-[#111321]/15 bg-[#111321] rounded-2xl p-4 text-white relative overflow-hidden">
                <div className="flex items-center justify-between text-[10px] font-mono font-bold text-[#FF8A24] mb-3">
                  <div className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#FF087F] animate-pulse" />
                    <span>GROWTH IN MOTION</span>
                  </div>
                  <span className="text-emerald-400">REAL-TIME ATTRIBUTION</span>
                </div>

                {/* Animated Rising SVG Line Graph */}
                <div className="relative w-full h-16 flex items-end justify-between px-1">
                  <svg viewBox="0 0 300 70" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="growthChartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FF6038" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#FF6038" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,60 Q50,45 100,50 T200,20 T300,5"
                      fill="none"
                      stroke="#FF6038"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0,60 Q50,45 100,50 T200,20 T300,5 L300,70 L0,70 Z"
                      fill="url(#growthChartGrad)"
                    />
                    <circle cx="300" cy="5" r="5" fill="#FF087F" className="animate-ping" />
                    <circle cx="300" cy="5" r="4" fill="#FFFFFF" />
                  </svg>
                </div>

                <div className="flex justify-between items-center text-[10px] font-mono text-[#D4CBD5] pt-2 border-t border-white/10">
                  <span>Continuous Optimization</span>
                  <span className="text-white font-bold">100% CAPI Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------- RIGHT SIDE: EDITORIAL CONTENT & METRIC PANELS ---------------- */}
          <div className="lg:col-span-6 space-y-7">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#111321]/15 text-xs font-mono font-bold uppercase tracking-wider text-[#FF6038] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF8A24]" />
              <span>WHY CORECLICK</span>
            </div>

            {/* Expressive Headline */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#111321] tracking-tight leading-[1.1]">
              Not Just Another <span className="text-gradient-brand">Marketing Agency.</span>
            </h2>

            {/* Refined Supporting Copy */}
            <p className="text-base sm:text-lg text-[#343644] leading-relaxed font-normal">
              Strategy before spending. Transparent execution. Creative and performance working together. Campaigns strictly aligned with your actual business revenue objectives.
            </p>

            {/* ---------------- 2 INTERACTIVE STATISTICS CARDS ---------------- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {/* Card 1: Fast-Loading Experiences */}
              <div className="group bg-white p-6 rounded-3xl border-2 border-[#111321]/15 hover:border-[#FF6038] hover:shadow-[6px_6px_0px_0px_#111321] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#FFF0E9] text-[#FF6038] flex items-center justify-center group-hover:bg-gradient-brand group-hover:text-white transition-colors">
                      <Gauge className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-extrabold text-[#FF8A24]">
                      SUB-1.5s
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-lg text-[#111321] group-hover:text-[#FF6038] transition-colors">
                    Mobile Web Speed
                  </h3>

                  <p className="text-xs text-[#727383] mt-2 leading-relaxed">
                    High-speed landing pages engineered for responsive experiences and minimal layout shifts.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#111321]/10 flex items-center gap-1.5 text-[11px] font-mono font-bold text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Sub-1.5s Load Speed</span>
                </div>
              </div>

              {/* Card 2: Varanasi Local Expertise */}
              <div className="group bg-white p-6 rounded-3xl border-2 border-[#111321]/15 hover:border-[#FF087F] hover:shadow-[6px_6px_0px_0px_#111321] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#FFE5ED] text-[#FF087F] flex items-center justify-center group-hover:bg-gradient-brand group-hover:text-white transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-extrabold text-[#FF087F]">
                      VARANASI
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-lg text-[#111321] group-hover:text-[#FF087F] transition-colors">
                    Local Market Depth
                  </h3>

                  <p className="text-xs text-[#727383] mt-2 leading-relaxed">
                    Understanding local buyer intent, regional competition, and search behaviour in Varanasi.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#111321]/10 flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#FF6038]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Local Search Dominance</span>
                </div>
              </div>
            </div>

            {/* Redesigned Premium CTA Button */}
            <div className="pt-3">
              <Link
                to="/about/"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#111321] text-white font-extrabold text-sm shadow-xl hover:bg-black hover:shadow-[#FF087F]/20 transition-all duration-300"
              >
                <span>Meet Our Agency Team</span>
                <ArrowRight className="w-4 h-4 text-[#FF8A24] group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- SMOOTH ORGANIC WAVE TRANSITION INTO NEXT SECTION (LAVENDER #F0E9FF) ---------------- */}
      <div className="w-full overflow-hidden leading-none mt-16 md:mt-24 relative h-16 sm:h-24">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full pointer-events-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,35 C320,80 640,10 960,55 C1200,90 1360,25 1440,45 L1440,90 L0,90 Z"
            fill="#F0E9FF"
          />
        </svg>
      </div>
    </section>
  );
};
