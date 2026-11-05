import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Sparkles,
  TrendingUp,
  Search,
  Target,
  BarChart3,
  Layers,
  ShieldCheck,
  Zap,
  Repeat,
  Eye,
  MessageCircle,
  HelpCircle,
  ArrowDown,
  CheckCircle2,
  XCircle,
  Sliders,
} from "lucide-react";
import { SeoHead } from "../components/common/SeoHead";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { PerformanceMarketingEnquiryForm } from "../components/forms/PerformanceMarketingEnquiryForm";

// Platform ecosystem data
const PLATFORMS = [
  { name: "Google Ads", type: "High-Intent Search & Shopping", icon: "G", color: "#FF8A24" },
  { name: "Meta Ads", type: "Facebook & Instagram Reels", icon: "M", color: "#FF087F" },
  { name: "Instagram Advertising", type: "Visual Story & Feed Creative", icon: "IG", color: "#FF6038" },
  { name: "Facebook Advertising", type: "Demographic & Lookalike Audiences", icon: "FB", color: "#7000FF" },
  { name: "YouTube Advertising", type: "Non-Skippable & In-Feed Video", icon: "YT", color: "#FF087F" },
  { name: "Google Display Network", type: "High-Reach Visual Retargeting", icon: "GDN", color: "#FF8A24" },
];

// Deliverables data
const DELIVERABLES = [
  {
    num: "01",
    title: "Campaign Strategy",
    summary: "Audience research, campaign architecture and acquisition planning.",
    detail: "We conduct competitor reverse-engineering, commercial keyword mapping, and unit-economic modeling before spending a single rupee of your media budget.",
    features: ["Target CAC & ROAS modeling", "Competitor spend benchmarking", "Multi-channel funnel architecture"],
  },
  {
    num: "02",
    title: "Ad Creative Production",
    summary: "Ad copy, static creatives, video ads and creative testing.",
    detail: "High-converting hook scripts, multi-slide educational carousels, and thumb-stopping vertical reels engineered to self-select qualified buyers.",
    features: ["3-second video hook scripting", "High-contrast static banners", "Continuous creative iteration & testing"],
  },
  {
    num: "03",
    title: "Campaign Management",
    summary: "Google Ads, Meta Ads and audience optimization.",
    detail: "Hands-on daily media buying, algorithmic bidding management, search query pruning, and negative keyword governance across all active ad networks.",
    features: ["Bid strategy fine-tuning (tCPA/tROAS)", "Negative keyword expansion", "Audience fatigue monitoring"],
  },
  {
    num: "04",
    title: "Conversion Tracking",
    summary: "GA4, conversion events, tracking setup and attribution.",
    detail: "Server-side Meta Conversions API (CAPI), Google Enhanced Conversions, and CRM webhook pipelines to ensure zero signal loss from browser ad blockers.",
    features: ["Meta Server CAPI integration", "Google Ads Enhanced Conversions", "First-party lead verification"],
  },
  {
    num: "05",
    title: "Performance Reporting",
    summary: "Campaign insights, budget allocation and optimization recommendations.",
    detail: "Transparent live dashboards with zero agency fluff. We evaluate cost per qualified opportunity, gross margin contribution, and payback velocity.",
    features: ["24/7 live Google Looker dashboard", "Weekly video strategy review", "Monthly scaling roadmap"],
  },
];

// Workflow stages
const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Audit & Research",
    subtitle: "Weeks 1",
    desc: "Understand the business, competitors, audience and existing advertising performance.",
    deliverables: ["Historical account audit", "Competitor ad teardown", "Target CAC threshold mapping"],
  },
  {
    step: "02",
    title: "Strategy & Planning",
    subtitle: "Week 2",
    desc: "Define acquisition objectives, campaign structure and budget allocation.",
    deliverables: ["Search intent keyword clusters", "Meta audience segmentation", "Tracking & CAPI architecture"],
  },
  {
    step: "03",
    title: "Launch & Testing",
    subtitle: "Weeks 3–4",
    desc: "Create advertisements, configure tracking and launch campaigns.",
    deliverables: ["High-impact ad creatives", "Landing page conversion check", "Initial baseline data collection"],
  },
  {
    step: "04",
    title: "Optimize & Scale",
    subtitle: "Ongoing",
    desc: "Analyze results, improve performance and scale successful campaigns.",
    deliverables: ["Winning creative scale", "Negative keyword filtration", "Budget reallocation to top ROAS"],
  },
];

// FAQs
const FAQS = [
  {
    q: "What is performance marketing?",
    a: "Performance marketing is a data-driven advertising methodology where campaigns are managed and optimized against measurable business outcomes—such as verified leads, customer acquisition cost (CAC), and return on ad spend (ROAS)—rather than vague vanity metrics like impressions, post likes, or casual views.",
  },
  {
    q: "How much should I invest in Google and Meta Ads?",
    a: "We recommend starting with a minimum monthly ad spend of ₹25,000 to ₹50,000 to allow the advertising algorithms sufficient conversion data to exit the learning phase. As campaigns validate positive return on investment, ad budgets can scale smoothly based on gross profit margin payback.",
  },
  {
    q: "Does CoreClick manage both Google Ads and Meta Ads?",
    a: "Yes. In fact, running Google Ads and Meta Ads as a synchronized ecosystem yields the highest blended return. Google Ads captures active buyers searching with immediate commercial intent, while Meta Ads builds audience desire through short-form video reels and retargets users who visited your website.",
  },
  {
    q: "Who pays the advertising platform directly?",
    a: "You do. All advertising spend is billed directly to your company's credit card by Google and Meta. CoreClick never marks up your media budget or collects platform spend through our accounts, ensuring 100% financial transparency.",
  },
  {
    q: "How soon can I expect campaign results?",
    a: "With Google Search and Meta Ads, qualified inbound enquiries can begin arriving within 48 to 72 hours of campaign launch. Algorithmic optimization and bidding stability typically reach peak efficiency within 2 to 4 weeks as first-party conversion data populates the bidding engines.",
  },
  {
    q: "How do you track leads and conversions?",
    a: "We configure robust server-side tracking using Meta Conversions API (CAPI), Google Enhanced Conversions, and Google Analytics 4 (GA4). This ensures that even with browser ad blockers and iOS privacy restrictions, 100% of verified form submissions and phone calls are attributed to the correct ad campaign.",
  },
  {
    q: "Do I retain ownership of my advertising accounts?",
    a: "100% yes. All ad accounts, pixels, Google Ads accounts, and tag configurations belong to your business permanently. We operate as authorized Partner managers. If you ever pause services, your account history and conversion data remain entirely yours.",
  },
  {
    q: "Can you manage existing advertising campaigns?",
    a: "Yes. We frequently take over underperforming accounts that are suffering from high cost-per-lead or wasted spend. We conduct a rigorous 48-hour diagnostic audit, prune negative keywords, overhaul ad creatives, fix broken tracking, and restructure your campaign architecture for immediate ROAS improvement.",
  },
];

export const PerformanceMarketingPage: React.FC = () => {
  const [activeWorkflow, setActiveWorkflow] = useState<number>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeDashboardTab, setActiveDashboardTab] = useState<"all" | "google" | "meta">("all");

  const scrollToEnquiry = () => {
    const el = document.getElementById("enquiry-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Performance Marketing & Paid Advertising",
    provider: {
      "@type": "Organization",
      name: "CoreClick",
      url: "https://coreclick.in",
      telephone: "+918707414150",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Varanasi",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
    },
    areaServed: ["Varanasi", "Uttar Pradesh", "India"],
    description:
      "Turn your ad spend into measurable revenue. Data-driven Google Ads & Meta advertising campaigns that deliver qualified leads and positive ROAS.",
  };

  return (
    <div className="bg-[#FFF9F6] text-[#11121D] selection:bg-[#FF087F]/20 selection:text-[#11121D]">
      <SeoHead
        title="Performance Marketing & Paid Ads Agency | CoreClick Varanasi"
        description="Turn your ad spend into measurable revenue. Data-driven Google Ads & Meta advertising campaigns that deliver qualified leads and positive ROAS."
        canonicalPath="/services/performance-marketing/"
        structuredData={structuredData}
      />

      {/* =========================================================================
          1. HERO SECTION — PAID MEDIA THAT DRIVES GROWTH (SPLIT LAYOUT)
      ========================================================================= */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-[#11121D]/10 bg-[#FFF9F6]">
        {/* Ambient Warm Gradient Background */}
        <div
          aria-hidden="true"
          className="absolute -top-32 right-1/4 w-[650px] h-[400px] bg-gradient-to-br from-[#FF8A24]/12 via-[#FF6038]/10 to-[#FF087F]/10 blur-[130px] pointer-events-none rounded-full"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services/" },
              { label: "Performance Marketing" },
            ]}
            className="mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Col: Hero Proposition & Actions */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFF0E9] border border-[#FF6038]/20 text-[#FF6038] text-xs font-mono font-bold uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" />
                <span>PAID ADVERTISING / CORECLICK PERFORMANCE</span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[54px] text-[#11121D] tracking-tight leading-[1.12]">
                Turn Your Ad Spend Into{" "}
                <span className="text-gradient-brand">Measurable Business Growth.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#343644] leading-relaxed font-normal max-w-xl">
                From Google Search to Meta campaigns, we build data-driven advertising systems designed to attract the right audience, generate qualified leads and improve your return on investment.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={scrollToEnquiry}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#11121D] text-white font-extrabold text-sm shadow-xl hover:bg-black transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Start Your Campaign</span>
                  <ArrowRight className="w-4 h-4 text-[#FF8A24]" />
                </button>

                <a
                  href={`https://wa.me/918707414150?text=${encodeURIComponent(
                    "Hello CoreClick, I am interested in discussing your Performance Marketing & Paid Ads service for my business."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white border-2 border-[#11121D] text-[#11121D] font-extrabold text-sm hover:bg-[#FFF0E9] transition-all hover:border-[#FF6038] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Talk to Our Team</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 border-t border-[#11121D]/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#727383] font-medium">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Client Account Ownership</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct Platform Billing (Zero Markup)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Server-Side CAPI & GA4 Tracking</span>
                </div>
              </div>
            </div>

            {/* Right Col: Sophisticated Interactive Campaign Dashboard */}
            <div className="lg:col-span-6 relative">
              <div className="relative bg-white rounded-3xl border-2 border-[#11121D] p-6 sm:p-8 shadow-[10px_10px_0px_0px_#11121D] overflow-hidden">
                {/* Dashboard Top Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-[#11121D]/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-gradient-brand text-white flex items-center justify-center font-bold text-xs shadow-xs">
                      CC
                    </div>
                    <div>
                      <div className="text-xs font-mono font-extrabold text-[#11121D] uppercase tracking-wider">
                        CAMPAIGN PERFORMANCE OVERVIEW
                      </div>
                      <div className="text-[11px] text-[#727383]">Live Attribution: CAPI + Enhanced Conversions</div>
                    </div>
                  </div>

                  {/* Platform Filter Buttons */}
                  <div className="flex items-center gap-1 bg-[#FFF0E9] p-1 rounded-xl border border-[#11121D]/10 text-[10px] font-mono font-bold">
                    <button
                      type="button"
                      onClick={() => setActiveDashboardTab("all")}
                      className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                        activeDashboardTab === "all" ? "bg-[#11121D] text-white" : "text-[#727383] hover:text-[#11121D]"
                      }`}
                    >
                      Blended
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveDashboardTab("google")}
                      className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                        activeDashboardTab === "google" ? "bg-[#FF8A24] text-white" : "text-[#727383] hover:text-[#11121D]"
                      }`}
                    >
                      Google
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveDashboardTab("meta")}
                      className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                        activeDashboardTab === "meta" ? "bg-[#FF087F] text-white" : "text-[#727383] hover:text-[#11121D]"
                      }`}
                    >
                      Meta
                    </button>
                  </div>
                </div>

                {/* 3 Core Metric Highlights */}
                <div className="grid grid-cols-3 gap-3 my-5">
                  <div className="p-3.5 rounded-2xl bg-[#FFF9F6] border border-[#11121D]/10">
                    <div className="text-[10px] font-mono font-bold text-[#FF8A24] uppercase">AVERAGE ROAS</div>
                    <div className="text-xl sm:text-2xl font-heading font-extrabold text-[#11121D] mt-0.5">
                      {activeDashboardTab === "google" ? "5.2x" : activeDashboardTab === "meta" ? "4.4x" : "4.82x"}
                    </div>
                    <div className="text-[10px] text-emerald-600 font-bold mt-0.5">+34% vs Benchmark</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FFF0E9] border border-[#11121D]/10">
                    <div className="text-[10px] font-mono font-bold text-[#FF6038] uppercase">VERIFIED LEADS</div>
                    <div className="text-xl sm:text-2xl font-heading font-extrabold text-[#11121D] mt-0.5">
                      {activeDashboardTab === "google" ? "418" : activeDashboardTab === "meta" ? "524" : "942"}
                    </div>
                    <div className="text-[10px] text-[#727383]">₹385 Cost / Lead</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FFE5ED] border border-[#11121D]/10">
                    <div className="text-[10px] font-mono font-bold text-[#FF087F] uppercase">CONV. RATE</div>
                    <div className="text-xl sm:text-2xl font-heading font-extrabold text-[#11121D] mt-0.5">
                      {activeDashboardTab === "google" ? "11.2%" : activeDashboardTab === "meta" ? "7.8%" : "9.5%"}
                    </div>
                    <div className="text-[10px] text-emerald-600 font-bold mt-0.5">+184% Over Pre-Launch</div>
                  </div>
                </div>

                {/* Animated Chart Simulation */}
                <div className="p-4 rounded-2xl bg-[#FFF9F6] border border-[#11121D]/10 relative">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#727383] mb-2">
                    <span className="font-bold text-[#11121D]">90-Day Cumulative Growth Curve</span>
                    <span className="text-[#FF6038] font-bold">● Ad Spend vs Net Revenue</span>
                  </div>

                  <div className="h-36 w-full relative flex items-end">
                    <svg viewBox="0 0 400 120" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#FF8A24" />
                          <stop offset="50%" stopColor="#FF6038" />
                          <stop offset="100%" stopColor="#FF087F" />
                        </linearGradient>
                        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#FF6038" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#FF6038" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Area Fill */}
                      <path
                        d="M0,110 Q80,95 150,70 T280,35 T400,10 L400,120 L0,120 Z"
                        fill="url(#areaGradient)"
                      />

                      {/* Curve Stroke */}
                      <path
                        d="M0,110 Q80,95 150,70 T280,35 T400,10"
                        fill="none"
                        stroke="url(#heroGradient)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />

                      {/* Data Point Nodes */}
                      <circle cx="150" cy="70" r="4.5" fill="#FF8A24" stroke="#FFFFFF" strokeWidth="2" />
                      <circle cx="280" cy="35" r="4.5" fill="#FF6038" stroke="#FFFFFF" strokeWidth="2" />
                      <circle cx="400" cy="10" r="5" fill="#FF087F" stroke="#FFFFFF" strokeWidth="2" />
                    </svg>
                  </div>

                  <div className="flex justify-between text-[10px] font-mono text-[#727383] mt-2 pt-2 border-t border-[#11121D]/5">
                    <span>Day 1: Setup & CAPI</span>
                    <span>Day 30: Creative Winner Scale</span>
                    <span>Day 60: ROAS Expansion</span>
                    <span>Day 90: Predictable CAC</span>
                  </div>
                </div>

                {/* Active Campaign Labels */}
                <div className="mt-4 pt-3 border-t border-[#11121D]/10 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-bold text-[#11121D]">Google PMax + Meta Reels</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#727383]">
                    *Illustrative campaign model based on CoreClick benchmarks
                  </span>
                </div>
              </div>

              {/* Floating Decorative Badge 1 */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#11121D] text-white px-4 py-2.5 rounded-2xl border border-white/20 shadow-xl items-center gap-2 text-xs font-mono font-bold">
                <Zap className="w-4 h-4 text-[#FF8A24]" />
                <span>Zero Wasted Ad Budget</span>
              </div>

              {/* Floating Decorative Badge 2 */}
              <div className="hidden sm:flex absolute -top-5 -right-5 bg-white text-[#11121D] px-4 py-2.5 rounded-2xl border-2 border-[#11121D] shadow-[4px_4px_0px_0px_#11121D] items-center gap-2 text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-[#FF087F]" />
                <span>100% Verified Offline Attribution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. PLATFORM ECOSYSTEM STRIP
      ========================================================================= */}
      <section className="py-8 bg-[#FFF0E9] border-b border-[#11121D]/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-extrabold text-[#FF6038] uppercase tracking-wider">
              MULTI-PLATFORM ADVERTISING ECOSYSTEM
            </span>
            <span className="text-xs text-[#727383] hidden sm:inline">
              Integrated across all major commercial media channels
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {PLATFORMS.map((plat) => (
              <div
                key={plat.name}
                className="bg-white p-3.5 rounded-2xl border border-[#11121D]/15 hover:border-[#FF6038] hover:shadow-md transition-all group cursor-default"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div
                    className="w-6 h-6 rounded-lg text-white font-mono font-bold text-[10px] flex items-center justify-center shrink-0 shadow-xs"
                    style={{ backgroundColor: plat.color }}
                  >
                    {plat.icon}
                  </div>
                  <span className="font-heading font-extrabold text-xs text-[#11121D] group-hover:text-[#FF6038] transition-colors truncate">
                    {plat.name}
                  </span>
                </div>
                <p className="text-[10px] text-[#727383] leading-snug line-clamp-1">{plat.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. PROBLEM VS SOLUTION — "STOP SPENDING. START SCALING."
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF9F6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0E9] text-[#FF6038] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Sliders className="w-3.5 h-3.5 text-[#FF8A24]" />
              <span>THE ARCHITECTURAL DIFFERENCE</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#11121D] tracking-tight">
              Stop Spending. <span className="text-gradient-brand">Start Scaling.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#343644] mt-3 leading-relaxed">
              Most businesses struggle with paid ads not because digital advertising doesn't work, but because they run disconnected tactics without mathematical conversion architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left Panel: The Common Problems */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border-2 border-[#11121D] shadow-[6px_6px_0px_0px_#11121D] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#11121D]/10">
                  <div className="flex items-center gap-2 text-xs font-mono font-extrabold text-rose-700 uppercase tracking-wider">
                    <XCircle className="w-4 h-4 text-rose-600" />
                    <span>THE FRICTION POINTS</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#727383]">Standard Agency Dilemma</span>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "Rising Customer Acquisition Costs",
                      desc: "Default broad match keywords drain budget on non-buying information seekers with zero commercial intent.",
                    },
                    {
                      title: "Poor-Quality & Unqualified Leads",
                      desc: "One-click lead forms flood your sales phone with tyre-kickers who don't remember filling the form.",
                    },
                    {
                      title: "Unclear Campaign Attribution",
                      desc: "Browser cookie deprecation and ad-blockers hide true campaign ROAS, leaving decisions to guesswork.",
                    },
                    {
                      title: "Rapid Ad Creative Fatigue",
                      desc: "Static ad graphics run for months without creative refreshing, causing CPMs to skyrocket.",
                    },
                    {
                      title: "Wasted Advertising Budgets",
                      desc: "Agencies optimize for impressions and vanity clicks rather than qualified bottom-line revenue.",
                    },
                  ].map((prob, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-[#FFF9F6] border border-[#11121D]/10 hover:border-rose-400 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          ✕
                        </span>
                        <div>
                          <h4 className="font-heading font-extrabold text-xs sm:text-sm text-[#11121D]">
                            {prob.title}
                          </h4>
                          <p className="text-xs text-[#727383] mt-1 leading-relaxed font-normal">
                            {prob.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#11121D]/10 text-xs text-[#727383] font-mono">
                Result: Flat sales, unpredictable lead flow, and burning capital.
              </div>
            </div>

            {/* Right Panel: The CoreClick Approach */}
            <div className="bg-[#FFF0E9] rounded-3xl p-7 sm:p-9 border-2 border-[#11121D] shadow-[6px_6px_0px_0px_#FF6038] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#11121D]/10">
                  <div className="flex items-center gap-2 text-xs font-mono font-extrabold text-[#FF6038] uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>THE CORECLICK APPROACH</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-700 font-bold">Tested Growth Engine</span>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "Audience & Competitor Research",
                      desc: "We dissect search intent volumes and competitor messaging to build high-converting keyword portfolios.",
                    },
                    {
                      title: "Strategic Campaign Architecture",
                      desc: "Strict Exact & Phrase Match ad groups with negative keyword fences that eliminate wasted ad spend.",
                    },
                    {
                      title: "Conversion-Focused Creatives",
                      desc: "Continuous A/B testing of hooks, educational carousels, and thumb-stopping vertical reels.",
                    },
                    {
                      title: "Server-Side Tracking & Analytics",
                      desc: "Meta CAPI, Google Enhanced Conversions, and first-party verification to feed buying data to algorithms.",
                    },
                    {
                      title: "Continuous Campaign Optimization",
                      desc: "Disciplined weekly bid adjustments, search term pruning, and budget reallocation to top-performing ads.",
                    },
                  ].map((sol, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-white border border-[#11121D]/10 hover:border-[#FF6038] hover:shadow-sm transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          ✓
                        </span>
                        <div>
                          <h4 className="font-heading font-extrabold text-xs sm:text-sm text-[#11121D]">
                            {sol.title}
                          </h4>
                          <p className="text-xs text-[#343644] mt-1 leading-relaxed font-normal">
                            {sol.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#11121D]/10 text-xs text-emerald-800 font-bold font-mono">
                Result: Predictable Customer Acquisition Cost (CAC) and compounding ROAS.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WHAT WE DELIVER — 5 PREMIUM CARDS
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF0E9] relative border-y border-[#11121D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-extrabold text-[#FF6038] uppercase tracking-wider">
              END-TO-END CAPABILITIES
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#11121D] mt-1 tracking-tight">
              Everything Your Campaign Needs to Perform.
            </h2>
            <p className="text-sm text-[#343644] mt-2">
              We handle every layer of the performance advertising engine—from deep audience research to creative production and server-side tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DELIVERABLES.map((deliv, idx) => (
              <div
                key={deliv.num}
                className={`bg-white rounded-3xl p-7 border-2 border-[#11121D] shadow-[6px_6px_0px_0px_#11121D] hover:shadow-[10px_10px_0px_0px_#FF6038] hover:border-[#FF6038] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${
                  idx === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-[#FF8A24]">{deliv.num}</span>
                    <span className="w-8 h-8 rounded-full bg-[#FFF0E9] text-[#FF6038] flex items-center justify-center font-bold text-xs">
                      {idx === 0 ? <Target className="w-4 h-4" /> : idx === 1 ? <Layers className="w-4 h-4" /> : idx === 2 ? <TrendingUp className="w-4 h-4" /> : idx === 3 ? <Zap className="w-4 h-4" /> : <BarChart3 className="w-4 h-4" />}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-[#11121D] leading-snug">
                    {deliv.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-[#FF6038] mt-1 leading-relaxed">
                    {deliv.summary}
                  </p>

                  <p className="text-xs text-[#727383] mt-2.5 leading-relaxed font-normal">
                    {deliv.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#11121D]/10 space-y-1.5">
                  {deliv.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-center gap-2 text-xs text-[#343644] font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. ADVERTISING SERVICES — 3 EXPANDED FEATURE PILLARS
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF9F6] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-extrabold text-[#FF087F] uppercase tracking-wider">
              SPECIALIZED MEDIA PILLARS
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#11121D] mt-1 tracking-tight">
              Precision Advertising Solutions
            </h2>
            <p className="text-sm text-[#727383] mt-2">
              Every platform serves a distinct role in your acquisition funnel. We design each channel to maximize blended ROAS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. Google Ads */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-[#11121D] shadow-[6px_6px_0px_0px_#FF8A24] flex flex-col justify-between hover:border-[#FF8A24] transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFF0E9] border border-[#FF8A24]/30 flex items-center justify-center text-[#FF8A24] mb-5">
                  <Search className="w-6 h-6" />
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-[#11121D]">GOOGLE ADS</h3>
                <p className="text-xs text-[#727383] mt-2 leading-relaxed font-normal">
                  Capture customers actively searching for your exact solutions right when purchase intent is highest.
                </p>

                <div className="mt-6 space-y-2.5">
                  {[
                    "Search Campaigns (Exact & Phrase Match)",
                    "Display Advertising & Remarketing",
                    "Performance Max (PMax) Campaigns",
                    "YouTube In-Feed & Discovery Ads",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[#11121D]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A24]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#11121D]/10">
                <Link
                  to="/services/google-ads/"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#11121D] hover:text-[#FF8A24] transition-colors"
                >
                  <span>Explore Google Ads Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 2. Meta Ads */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-[#11121D] shadow-[6px_6px_0px_0px_#FF087F] flex flex-col justify-between hover:border-[#FF087F] transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFE5ED] border border-[#FF087F]/30 flex items-center justify-center text-[#FF087F] mb-5">
                  <Layers className="w-6 h-6" />
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-[#11121D]">META ADS</h3>
                <p className="text-xs text-[#727383] mt-2 leading-relaxed font-normal">
                  Scale through scroll-stopping visual storytelling, video reels, and high-converting audience lookalikes.
                </p>

                <div className="mt-6 space-y-2.5">
                  {[
                    "Facebook & Instagram Feed Ads",
                    "Instagram Short-Form Video Reels",
                    "Lead Generation Instant Forms",
                    "Dynamic Multi-Product Retargeting",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[#11121D]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF087F]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#11121D]/10">
                <Link
                  to="/services/meta-ads/"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#11121D] hover:text-[#FF087F] transition-colors"
                >
                  <span>Explore Meta Ads Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 3. Campaign Optimization */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-[#11121D] shadow-[6px_6px_0px_0px_#FF6038] flex flex-col justify-between hover:border-[#FF6038] transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFF0E9] border border-[#FF6038]/30 flex items-center justify-center text-[#FF6038] mb-5">
                  <TrendingUp className="w-6 h-6" />
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-[#11121D]">CAMPAIGN OPTIMIZATION</h3>
                <p className="text-xs text-[#727383] mt-2 leading-relaxed font-normal">
                  Continuous conversion rate testing and unit-economic bidding to ensure ad spend produces growing profits.
                </p>

                <div className="mt-6 space-y-2.5">
                  {[
                    "Audience Targeting & Exclusions",
                    "Creative Multi-Variate Testing",
                    "Server CAPI & Event Deduplication",
                    "Dynamic Budget Allocation to Winners",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[#11121D]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6038]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#11121D]/10">
                <Link
                  to="/services/landing-page-design/"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#11121D] hover:text-[#FF6038] transition-colors"
                >
                  <span>Explore Landing Page CRO</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. EXECUTION WORKFLOW — 4-STEP INTERACTIVE HORIZONTAL JOURNEY
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF0E9] relative border-y border-[#11121D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-extrabold text-[#FF6038] uppercase tracking-wider">
              ROADMAP TO ROAS
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#11121D] mt-1 tracking-tight">
              Our 4-Stage Execution Workflow
            </h2>
            <p className="text-sm text-[#343644] mt-2">
              How we take your advertising from initial commercial audit to profitable scaling.
            </p>
          </div>

          {/* Interactive Steps Grid with Connecting Line */}
          <div className="relative">
            {/* Horizontal Line on Desktop */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute top-7 left-12 right-12 h-1 bg-gradient-to-r from-[#FF8A24] via-[#FF6038] to-[#FF087F] z-0 opacity-40"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {WORKFLOW_STEPS.map((step, idx) => {
                const isActive = activeWorkflow === idx;
                return (
                  <div
                    key={step.step}
                    onClick={() => setActiveWorkflow(idx)}
                    className={`bg-white rounded-3xl p-6 border-2 transition-all cursor-pointer ${
                      isActive
                        ? "border-[#FF6038] shadow-[8px_8px_0px_0px_#11121D] -translate-y-1.5"
                        : "border-[#11121D]/15 shadow-sm hover:border-[#11121D]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-extrabold text-base transition-all ${
                          isActive
                            ? "bg-gradient-brand text-white shadow-md"
                            : "bg-[#FFF0E9] text-[#11121D]"
                        }`}
                      >
                        {step.step}
                      </div>
                      <span className="text-[11px] font-mono font-bold text-[#FF6038]">
                        {step.subtitle}
                      </span>
                    </div>

                    <h3 className="font-heading font-extrabold text-lg text-[#11121D]">
                      {step.title}
                    </h3>

                    <p className="text-xs text-[#727383] mt-2 leading-relaxed font-normal">
                      {step.desc}
                    </p>

                    <div className="mt-5 pt-3 border-t border-[#11121D]/10 space-y-1">
                      {step.deliverables.map((d, didx) => (
                        <div key={didx} className="flex items-center gap-1.5 text-[11px] text-[#343644]">
                          <span className="w-1 h-1 rounded-full bg-[#FF6038]" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. WHY CORECLICK — EDITORIAL SPLIT SECTION
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF9F6] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFF0E9] text-[#FF6038] text-xs font-mono font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF8A24]" />
                <span>THE STRATEGIC DIFFERENCE</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#11121D] tracking-tight leading-tight">
                More Than Ads. <br />
                <span className="text-gradient-brand">A Smarter Growth System.</span>
              </h2>

              <p className="text-base text-[#343644] leading-relaxed font-normal">
                Most agencies hide behind vanity metrics and retain ad account ownership to make switching difficult. At CoreClick, we operate as an open-book growth partner with zero lock-in contracts.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: "Transparent Campaign Management",
                    desc: "Full access to actual search term reports, keyword costs, and real-time live performance dashboards.",
                  },
                  {
                    title: "Client Ownership of Advertising Accounts",
                    desc: "You own all campaigns, audiences, and conversion pixels. We manage them on your behalf—never holding data hostage.",
                  },
                  {
                    title: "Data-Driven Decisions, Zero Fluff",
                    desc: "Every bid adjustment is grounded in CAC, gross margin contribution, and cash payback velocity.",
                  },
                  {
                    title: "Creative and Analytical Execution",
                    desc: "High-level copywriting, visual reel design, and technical server CAPI engineers under one roof.",
                  },
                  {
                    title: "Focus on Qualified Enquiries",
                    desc: "We deliberately eliminate spam and low-intent clicks through rigorous qualifying questions and landing page architecture.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#11121D] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-heading font-extrabold text-sm text-[#11121D]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#727383] mt-0.5 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Comparison Scorecard */}
            <div className="lg:col-span-6 bg-white rounded-3xl border-2 border-[#11121D] p-7 sm:p-9 shadow-[10px_10px_0px_0px_#11121D]">
              <div className="border-b border-[#11121D]/10 pb-4 mb-6">
                <span className="font-mono text-xs font-extrabold text-[#FF6038] uppercase tracking-wider">
                  AGENCY COMPARISON SCORECARD
                </span>
                <h3 className="font-heading font-extrabold text-xl text-[#11121D] mt-1">
                  How CoreClick Compares
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    aspect: "Account Ownership",
                    others: "Agency holds master account",
                    coreclick: "100% Client permanent ownership",
                  },
                  {
                    aspect: "Bidding Priority",
                    others: "Vanity impressions & cheap clicks",
                    coreclick: "Verified leads & gross margin ROAS",
                  },
                  {
                    aspect: "Conversion Tracking",
                    others: "Basic browser pixel (drops 30% data)",
                    coreclick: "Server CAPI + Enhanced Conversions",
                  },
                  {
                    aspect: "Ad Creatives",
                    others: "Recycled generic Canva templates",
                    coreclick: "Tailored hooks, reels & CRO carousels",
                  },
                  {
                    aspect: "Reporting Rhythm",
                    others: "Vague monthly PDF charts",
                    coreclick: "24/7 Live Looker + Weekly walkthroughs",
                  },
                ].map((row, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-[#FFF9F6] border border-[#11121D]/10">
                    <div className="font-mono text-[11px] font-bold text-[#727383] mb-1">
                      {row.aspect}
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="text-rose-700 font-medium line-through decoration-rose-300">
                        {row.others}
                      </div>
                      <div className="text-emerald-800 font-extrabold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{row.coreclick}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. PERFORMANCE MARKETING FAQ (COMPLETELY FIXED LEGIBILITY)
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF9F6] relative border-t border-[#11121D]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-mono font-extrabold text-[#FF6038] uppercase tracking-wider">
              CLEAR ANSWERS
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#11121D] mt-1 tracking-tight">
              Performance Marketing FAQs
            </h2>
            <p className="text-sm text-[#727383] mt-2">
              Everything you need to know about budgets, campaign ownership, and return on investment.
            </p>
          </div>

          {/* Fully Legible High-Contrast Accordion */}
          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border-2 border-[#11121D]/15 bg-white overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038]"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-extrabold text-base sm:text-lg text-[#11121D] leading-snug">
                      {faq.q}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-all ${
                        isOpen
                          ? "bg-gradient-brand text-white rotate-180 shadow-xs"
                          : "bg-[#FFF0E9] text-[#FF6038]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#343644] leading-relaxed border-t border-[#11121D]/5 font-normal">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. FINAL CONVERSION BANNER (PEACH BACKGROUND WITH SUBTLE GRADIENTS)
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF0E9] border-t-2 border-[#11121D]/10 relative overflow-hidden">
        {/* Soft Decorative Ambient Lighting */}
        <div
          aria-hidden="true"
          className="absolute -bottom-20 right-10 w-[500px] h-[300px] bg-gradient-to-r from-[#FF8A24]/10 via-[#FF6038]/10 to-[#FF087F]/10 blur-[120px] pointer-events-none rounded-full"
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#FF6038]/20 text-[#FF6038] text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" />
            <span>MEASURABLE BUSINESS GROWTH</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#11121D] tracking-tight leading-tight">
            Ready to Make Your Advertising Work Smarter?
          </h2>

          <p className="text-base sm:text-lg text-[#343644] mt-4 max-w-2xl mx-auto leading-relaxed font-normal">
            Let's build an advertising strategy that connects your business with the right customers.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={scrollToEnquiry}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#11121D] text-white font-extrabold text-sm shadow-xl hover:bg-black transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Start Your Campaign</span>
              <ArrowRight className="w-4 h-4 text-[#FF8A24]" />
            </button>

            <a
              href={`https://wa.me/918707414150?text=${encodeURIComponent(
                "Hello CoreClick, I would like to chat about setting up Performance Marketing for my business."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border-2 border-[#11121D] text-[#11121D] font-extrabold text-sm hover:bg-[#FFF9F6] transition-all hover:border-[#FF6038] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. DEDICATED ENQUIRY FORM SECTION
      ========================================================================= */}
      <section id="enquiry-section" className="py-16 md:py-24 bg-[#FFF9F6] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <PerformanceMarketingEnquiryForm />
        </div>
      </section>
    </div>
  );
};
