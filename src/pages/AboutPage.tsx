import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Target,
  ShieldCheck,
  Cpu,
  ArrowRight,
  TrendingUp,
  Search,
  Palette,
  Code,
  Layout,
  MessageSquare,
  CheckCircle2,
  Globe,
  Layers,
  Zap,
} from "lucide-react";
import { SeoHead } from "../components/common/SeoHead";
import { Breadcrumbs } from "../components/common/Breadcrumbs";

export const AboutPage: React.FC = () => {
  const [activeApproachStage, setActiveApproachStage] = useState<number>(0);

  const approachStages = [
    {
      step: "01",
      title: "Understand",
      desc: "Deep-dive into your unit margins, target customer avatar, and market competitive landscape.",
    },
    {
      step: "02",
      title: "Strategize",
      desc: "Architect a focused 90-day growth roadmap connecting positioning, channels, and budget.",
    },
    {
      step: "03",
      title: "Execute",
      desc: "Deploy high-retention ad reels, conversion web builds, and CAPI server-side tracking.",
    },
    {
      step: "04",
      title: "Optimize",
      desc: "Iterate ad creative sprints, prune non-performing queries, and scale winning campaign sets.",
    },
  ];

  const ecosystemServices = [
    { name: "Branding & Visual Identity", slug: "branding", category: "BRAND" },
    { name: "Social Media Marketing", slug: "social-media-marketing", category: "CREATIVE" },
    { name: "Google Ads & Search", slug: "google-ads", category: "PAID" },
    { name: "Meta Ads (FB & IG)", slug: "meta-ads", category: "PAID" },
    { name: "SEO & Local Maps", slug: "seo", category: "ORGANIC" },
    { name: "Content Marketing", slug: "content-marketing", category: "COPY" },
    { name: "Website Development", slug: "website-development", category: "TECH" },
    { name: "Landing Page Design & CRO", slug: "landing-page-design", category: "CONVERSION" },
  ];

  return (
    <div className="bg-[#FFF9F6] text-[#11121D] selection:bg-[#FF087F]/20 selection:text-[#FF087F]">
      <SeoHead
        title="About Us — Who We Are & Our Growth Philosophy | CoreClick Varanasi"
        description="Learn about CoreClick, a performance marketing and digital growth agency headquartered in Varanasi, Uttar Pradesh. Strategy, creativity, and technology working together."
        canonicalPath="/about/"
      />

      {/* ---------------- 1. HERO — WHO WE ARE ---------------- */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-[#FFF9F6]">
        {/* Subtle Grid Pattern */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"
        />

        {/* Ambient Soft Lighting */}
        <div
          aria-hidden="true"
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#FF8A24]/15 via-[#FF6038]/15 to-[#FF087F]/15 rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <Breadcrumbs items={[{ label: "About Us" }]} className="mb-6" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF0E9] border border-[#FF6038]/20 text-xs font-mono font-extrabold uppercase tracking-widest text-[#FF6038]">
                <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" />
                <span>WHO WE ARE — CORECLICK</span>
              </div>

              <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight text-[#11121D] leading-[1.08]">
                We Help Ambitious Businesses <br />
                <span className="text-gradient-brand">Click Smart. Grow Fast.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#343644] max-w-2xl font-normal leading-relaxed">
                CoreClick is a digital marketing and business growth agency headquartered in Varanasi, Uttar Pradesh. We bring strategy, creativity and technology together to help businesses build stronger brands, attract customers and grow online.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/contact/"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#11121D] text-white font-extrabold text-sm shadow-xl hover:bg-black transition-all hover:scale-105"
                >
                  <span>Start Your Growth Conversation</span>
                  <ArrowRight className="w-4 h-4 text-[#FF8A24]" />
                </Link>
              </div>
            </div>

            {/* Right Visual Column: Interactive 3D-Inspired Studio Artwork */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-[#FFF0E9] via-[#FFE5ED] to-[#FFF0E9] border-2 border-[#11121D] shadow-[12px_12px_0px_0px_#11121D] p-8 relative flex flex-col items-center justify-between overflow-hidden group">
                {/* Floating Badge 1 */}
                <div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-xl border border-[#11121D]/15 shadow-md flex items-center gap-2 text-xs font-mono font-extrabold text-[#FF6038] animate-bounce">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>4.8x Avg ROAS</span>
                </div>

                {/* Floating Badge 2 */}
                <div className="absolute bottom-6 right-4 bg-[#11121D] text-white px-3 py-1.5 rounded-xl text-xs font-mono font-extrabold shadow-md flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Sub-1.5s Web Speed</span>
                </div>

                {/* Central Brand Symbol Artwork */}
                <div className="my-auto relative flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-white border-2 border-[#11121D]/15 shadow-xl flex items-center justify-center relative group-hover:scale-110 transition-transform duration-500">
                    <img
                      src="/assets/aistudio/Gradient_C_Cursor_Logo_transparent.png"
                      alt="CoreClick Symbol"
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                </div>

                <div className="text-center font-mono text-[10px] font-extrabold text-[#FF087F] uppercase tracking-wider">
                  ✦ CREATIVE TECHNOLOGY & PERFORMANCE STUDIO ✦
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Organic Gradient Wave */}
        <div className="w-full overflow-hidden leading-none mt-12 md:mt-16 relative h-16 sm:h-24">
          <svg
            viewBox="0 0 1440 90"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,35 C320,80 640,10 960,55 C1200,90 1360,25 1440,45 L1440,90 L0,90 Z"
              fill="#FFF0E9"
            />
          </svg>
        </div>
      </section>

      {/* ---------------- 2. OUR STORY — THE CORECLICK STORY ---------------- */}
      <section className="py-20 md:py-28 bg-[#FFF0E9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Story Text */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-mono font-extrabold text-[#FF6038] uppercase tracking-wider">
                OUR ORIGIN STORY
              </span>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#11121D] tracking-tight">
                Good Marketing Is More Than Getting Clicks.
              </h2>

              <p className="text-sm sm:text-base text-[#343644] leading-relaxed font-normal">
                Varanasi and Northern India are home to brilliant enterprises—from century-old handloom weaving traditions and regional retailers to modern medical clinics and fast-scaling consumer brands. Yet, too many businesses struggle with online growth because traditional agencies treat digital marketing as a superficial checklist of boosted posts and vanity impressions.
              </p>

              <p className="text-sm sm:text-base text-[#343644] leading-relaxed font-normal">
                CoreClick was created to fix this disconnection. We believe marketing must begin with unit economics and strategy before spending a single rupee on ads. By combining deep strategic research, high-retention video creative, server-side CAPI tracking, and sub-1.5s mobile React engineering, we turn attention into predictable business revenue.
              </p>
            </div>

            {/* Right Column: Interactive Approach Panel */}
            <div className="lg:col-span-6">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#11121D] shadow-[8px_8px_0px_0px_#11121D] space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-[#11121D]/10">
                  <span className="font-mono text-xs font-extrabold uppercase tracking-wider text-[#FF087F]">
                    THE CORECLICK APPROACH
                  </span>
                  <span className="text-[10px] font-mono bg-[#FFF0E9] px-2.5 py-1 rounded-full text-[#FF6038] font-bold">
                    CONNECTED METHODOLOGY
                  </span>
                </div>

                <div className="space-y-3">
                  {approachStages.map((stg, idx) => {
                    const isSelected = activeApproachStage === idx;
                    return (
                      <div
                        key={stg.step}
                        onClick={() => setActiveApproachStage(idx)}
                        onMouseEnter={() => setActiveApproachStage(idx)}
                        className={`cursor-pointer rounded-2xl p-4 border-2 transition-all duration-300 ${
                          isSelected
                            ? "bg-[#FFF0E9] border-[#FF6038] shadow-[4px_4px_0px_0px_#FF6038] -translate-y-1"
                            : "bg-[#FFF9F6] border-[#11121D]/10 hover:border-[#11121D]/30"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-mono font-extrabold text-xs text-[#FF6038]">
                            {stg.step}. {stg.title}
                          </span>
                          {isSelected && (
                            <span className="text-[10px] font-bold text-[#FF087F]">Active Stage</span>
                          )}
                        </div>
                        <p className="text-xs text-[#343644] leading-relaxed font-normal">
                          {stg.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 3. OUR PHILOSOPHY ---------------- */}
      <section className="py-20 md:py-28 bg-[#FFF9F6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-mono font-extrabold text-[#FF8A24] uppercase tracking-wider">
              GUIDING PHILOSOPHY
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#11121D] tracking-tight">
              We Believe Growth Should Be <span className="text-gradient-brand">Intentional.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Block 1 */}
            <div className="bg-[#FFF0E9] p-8 rounded-3xl border-2 border-[#11121D]/15 shadow-[6px_6px_0px_0px_rgba(17,18,29,0.08)] hover:border-[#FF8A24] hover:shadow-[10px_10px_0px_0px_#11121D] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="font-mono text-4xl font-black text-[#FF8A24] block mb-4">01</span>
                <h3 className="font-heading font-extrabold text-2xl text-[#11121D] mb-3">
                  Strategy Before Spending
                </h3>
                <p className="text-xs sm:text-sm text-[#343644] leading-relaxed font-normal">
                  We understand your audience, business goals, and margins before recommending marketing activities. No budget is spent without clear economic guardrails.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="bg-[#FFE5ED] p-8 rounded-3xl border-2 border-[#11121D]/15 shadow-[6px_6px_0px_0px_rgba(17,18,29,0.08)] hover:border-[#FF6038] hover:shadow-[10px_10px_0px_0px_#11121D] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="font-mono text-4xl font-black text-[#FF6038] block mb-4">02</span>
                <h3 className="font-heading font-extrabold text-2xl text-[#11121D] mb-3">
                  Creativity With Purpose
                </h3>
                <p className="text-xs sm:text-sm text-[#343644] leading-relaxed font-normal">
                  We create meaningful brand experiences and campaigns designed to connect with the right audience. Design is not decorative—it's a primary conversion lever.
                </p>
              </div>
            </div>

            {/* Block 3 */}
            <div className="bg-[#F0E9FF] p-8 rounded-3xl border-2 border-[#11121D]/15 shadow-[6px_6px_0px_0px_rgba(17,18,29,0.08)] hover:border-[#FF087F] hover:shadow-[10px_10px_0px_0px_#11121D] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="font-mono text-4xl font-black text-[#FF087F] block mb-4">03</span>
                <h3 className="font-heading font-extrabold text-2xl text-[#11121D] mb-3">
                  Performance With Transparency
                </h3>
                <p className="text-xs sm:text-sm text-[#343644] leading-relaxed font-normal">
                  We focus on relevant business KPIs and clear communication instead of vanity metrics. You receive honest reporting tied directly to revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 4. OUR CORE PRINCIPLES ---------------- */}
      <section className="py-20 md:py-28 bg-[#FFF0E9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-mono font-extrabold text-[#FF6038] uppercase tracking-wider">
              HOW WE MAKE DECISIONS
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#11121D] tracking-tight">
              Our Core Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Principle 01 */}
            <div className="group bg-white p-7 rounded-3xl border-2 border-[#11121D]/15 hover:border-[#FF8A24] hover:shadow-[8px_8px_0px_0px_#11121D] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFF0E9] text-[#FF8A24] group-hover:bg-gradient-brand group-hover:text-white flex items-center justify-center mb-6 transition-colors shadow-md">
                  <Target className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs font-extrabold text-[#FF8A24] block mb-1">01</span>
                <h3 className="font-heading font-extrabold text-xl text-[#11121D] group-hover:text-[#FF8A24] transition-colors mb-2">
                  Clarity Over Noise
                </h3>
                <p className="text-xs text-[#343644] leading-relaxed font-normal">
                  We prioritize meaningful business outcomes over vanity metrics like impression counts.
                </p>
              </div>
            </div>

            {/* Principle 02 */}
            <div className="group bg-white p-7 rounded-3xl border-2 border-[#11121D]/15 hover:border-[#FF6038] hover:shadow-[8px_8px_0px_0px_#11121D] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFE5ED] text-[#FF6038] group-hover:bg-gradient-brand group-hover:text-white flex items-center justify-center mb-6 transition-colors shadow-md">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs font-extrabold text-[#FF6038] block mb-1">02</span>
                <h3 className="font-heading font-extrabold text-xl text-[#11121D] group-hover:text-[#FF6038] transition-colors mb-2">
                  Creative Craft
                </h3>
                <p className="text-xs text-[#343644] leading-relaxed font-normal">
                  We create thoughtful visual identities, campaigns and digital experiences that command respect.
                </p>
              </div>
            </div>

            {/* Principle 03 */}
            <div className="group bg-white p-7 rounded-3xl border-2 border-[#11121D]/15 hover:border-[#FF087F] hover:shadow-[8px_8px_0px_0px_#11121D] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F0E9FF] text-[#FF087F] group-hover:bg-gradient-brand group-hover:text-white flex items-center justify-center mb-6 transition-colors shadow-md">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs font-extrabold text-[#FF087F] block mb-1">03</span>
                <h3 className="font-heading font-extrabold text-xl text-[#11121D] group-hover:text-[#FF087F] transition-colors mb-2">
                  Complete Ownership
                </h3>
                <p className="text-xs text-[#343644] leading-relaxed font-normal">
                  Clients retain 100% ownership of their advertising accounts, pixel data, and agreed deliverables.
                </p>
              </div>
            </div>

            {/* Principle 04 */}
            <div className="group bg-white p-7 rounded-3xl border-2 border-[#11121D]/15 hover:border-[#7000FF] hover:shadow-[8px_8px_0px_0px_#11121D] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFF0E9] text-[#7000FF] group-hover:bg-gradient-brand group-hover:text-white flex items-center justify-center mb-6 transition-colors shadow-md">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs font-extrabold text-[#7000FF] block mb-1">04</span>
                <h3 className="font-heading font-extrabold text-xl text-[#11121D] group-hover:text-[#7000FF] transition-colors mb-2">
                  Technical Excellence
                </h3>
                <p className="text-xs text-[#343644] leading-relaxed font-normal">
                  We build fast, responsive and conversion-focused digital experiences with sub-second speeds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 5. OUR GROWTH ECOSYSTEM ---------------- */}
      <section className="py-20 md:py-28 bg-[#FFF9F6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-mono font-extrabold text-[#FF8A24] uppercase tracking-wider">
              CONNECTED DIGITAL SYSTEM
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#11121D] tracking-tight">
              Everything Works Better <span className="text-gradient-brand">Together.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#727383] max-w-xl mx-auto">
              Explore how CoreClick's 8 core digital growth capabilities connect into a unified marketing engine.
            </p>
          </div>

          <div className="p-8 md:p-12 bg-white rounded-3xl border-2 border-[#11121D] shadow-[10px_10px_0px_0px_#11121D] relative">
            {/* Center Brand Artwork */}
            <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-[#FFF0E9] border-2 border-[#11121D]/20 items-center justify-center pointer-events-none z-10 shadow-xl">
              <img
                src="/assets/aistudio/Gradient_C_Cursor_Logo_transparent.png"
                alt="CoreClick Logo"
                className="w-20 h-20 object-contain"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-20">
              {ecosystemServices.map((srv, idx) => (
                <Link
                  key={srv.slug}
                  to={`/services/${srv.slug}/`}
                  className="group p-5 rounded-2xl bg-[#FFF9F6] border-2 border-[#11121D]/15 hover:border-[#FF6038] hover:shadow-[4px_4px_0px_0px_#FF6038] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-mono font-extrabold px-2 py-0.5 rounded-full bg-[#FFE5ED] text-[#FF087F]">
                      {srv.category}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#727383] group-hover:text-[#FF6038] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="font-heading font-extrabold text-sm text-[#11121D] group-hover:text-[#FF6038] transition-colors">
                    {srv.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 6. WHY BUSINESSES WORK WITH CORECLICK ---------------- */}
      <section className="py-20 md:py-28 bg-[#FFF0E9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-extrabold text-[#FF6038] uppercase tracking-wider">
                BUSINESS-FIRST MARKETING
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#11121D] tracking-tight leading-tight">
                Built Around Your Business. <br />
                <span className="text-gradient-brand">Not Just Your Marketing.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#343644] leading-relaxed font-normal">
                We partner with ambitious founders, business owners, and marketing managers who require clear communication, transparent reporting, and campaigns engineered for revenue return.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#11121D] shadow-[8px_8px_0px_0px_#11121D] space-y-3">
                {[
                  "Strategy-led execution before ad spend.",
                  "Integrated marketing capabilities under one roof.",
                  "Transparent communication & weekly reporting.",
                  "Conversion-focused thinking on all digital assets.",
                  "Responsive collaboration with dedicated strategists.",
                  "Business-oriented recommendations tied to ROI.",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-[#FFF9F6] border border-[#11121D]/10 text-xs font-extrabold text-[#11121D]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 7. FINAL CONVERSION SECTION ---------------- */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-[#FFF0E9] via-[#FFE5ED] to-[#FFF0E9] relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="inline-block font-mono text-xs font-extrabold uppercase tracking-widest text-[#FF087F] bg-white px-4 py-1.5 rounded-full border border-[#FF087F]/20 shadow-sm">
            LET'S BUILD A SMARTER STRATEGY
          </span>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#11121D] tracking-tight leading-tight">
            Ready to Make Your Next Move?
          </h2>

          <p className="text-base sm:text-lg text-[#343644] max-w-xl mx-auto font-normal">
            Let's understand your business, identify growth opportunities and build a smarter digital strategy.
          </p>

          <div className="pt-2">
            <Link
              to="/contact/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#11121D] text-white font-extrabold text-sm shadow-xl hover:bg-black transition-all hover:scale-105"
            >
              <span>Let's Grow Together</span>
              <ArrowRight className="w-4 h-4 text-[#FF8A24]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
