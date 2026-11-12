import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Phone } from "lucide-react";
import { SeoHead } from "../components/common/SeoHead";
import { Button } from "../components/common/Button";
import { HeroLogoInteractive } from "../components/common/HeroLogoInteractive";
import { InfiniteMarquee } from "../components/common/InfiniteMarquee";
import { InteractiveServiceCard, ServiceCardData } from "../components/common/InteractiveServiceCard";
import { UnlockPotentialSection } from "../components/home/UnlockPotentialSection";
import { WhyChooseUsInteractive } from "../components/home/WhyChooseUsInteractive";
import { FiveStageGrowthEngine } from "../components/home/FiveStageGrowthEngine";
import { IndustriesWeHelpSection } from "../components/home/IndustriesWeHelpSection";
import { HomeFaqSection } from "../components/home/HomeFaqSection";

export const HomePage: React.FC = () => {
  const services: ServiceCardData[] = [
    {
      id: "performance",
      number: "01",
      title: "Performance Marketing",
      tag: "Paid Acquisition & ROAS",
      slug: "performance-marketing",
      desc: "Data-led acquisition across Google Search, Performance Max, and Meta Ads where every rupee spent is tracked directly to ROI.",
      deliverables: ["Meta & Google Ads Setup", "Conversion API Integration", "Weekly Ad Creative Sprints", "ROAS Optimization"],
      bgTint: "bg-[#FFF0E9]",
      borderColor: "border-[#FF8A24]",
      shadowColor: "#FF8A24",
    },
    {
      id: "social",
      number: "02",
      title: "Social Media Marketing",
      tag: "Reels & Brand Engagement",
      slug: "social-media-marketing",
      desc: "Viral short-form video reels, custom creative graphics, and active community management to build loyal audience followings.",
      deliverables: ["Short-form Video Production", "Instagram & FB Strategy", "Content Calendar", "Influencer Outreach"],
      bgTint: "bg-[#FFE5ED]",
      borderColor: "border-[#FF087F]",
      shadowColor: "#FF087F",
    },
    {
      id: "seo",
      number: "03",
      title: "Search Engine Optimization",
      tag: "Organic Search & Local Maps",
      slug: "seo",
      desc: "Topical content authority, technical SEO fixes, and Varanasi local Google Business Profile optimization to rank on Page 1.",
      deliverables: ["Topical Content Clusters", "Technical Site Audits", "Varanasi Local 3-Pack SEO", "Backlink Building"],
      bgTint: "bg-[#F0E9FF]",
      borderColor: "border-[#111321]",
      shadowColor: "#111321",
    },
    {
      id: "content",
      number: "04",
      title: "Content Marketing",
      tag: "Copywriting & Storytelling",
      slug: "content-marketing",
      desc: "Persuasive ad copy, blog playbooks, email sequences, and landing page messaging engineered to build trust and close sales.",
      deliverables: ["High-Converting Ad Copy", "SEO Blog Articles", "Email Marketing Funnels", "Brand Positioning"],
      bgTint: "bg-[#FFF9F6]",
      borderColor: "border-[#FF6038]",
      shadowColor: "#FF6038",
    },
    {
      id: "branding",
      number: "05",
      title: "Branding & Visual Identity",
      tag: "Logos & Brand Guidelines",
      slug: "branding",
      desc: "Distinctive logo geometry, typography, color palettes, and comprehensive brand guidelines that make your business memorable.",
      deliverables: ["Vector Logomarks", "Brand Identity Guidelines", "Social Media Templates", "Print & Packaging Design"],
      bgTint: "bg-[#FFF0E9]",
      borderColor: "border-[#FF8A24]",
      shadowColor: "#FF8A24",
    },
    {
      id: "web",
      number: "06",
      title: "Website Development",
      tag: "React & Sub-Second Speeds",
      slug: "website-development",
      desc: "Modern, high-speed React websites and landing pages built with zero layout shifts and seamless mobile UX.",
      deliverables: ["Custom Figma UI/UX", "Sub-1.5s Mobile Loading", "SEO-Friendly Codebase", "Lead Form Integration"],
      bgTint: "bg-[#FFE5ED]",
      borderColor: "border-[#FF087F]",
      shadowColor: "#FF087F",
    },
  ];

  return (
    <div className="bg-[#FFF9F6] text-[#111321] selection:bg-[#FF087F]/20 selection:text-[#FF087F]">
      <SeoHead
        title="CoreClick — Digital Marketing Agency | Click Smart. Grow Fast."
        description="CoreClick is a leading digital marketing agency in Varanasi, India. We combine performance marketing, SEO, branding, content, and high-speed web development to grow ambitious businesses."
        canonicalPath="/"
      />

      {/* ---------------- 1. HERO BANNER ---------------- */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-[#FFF9F6]">
        {/* Ambient Subtle Grid Backing */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF0E9] border border-[#FF6038]/20 text-xs font-semibold text-[#111321]">
                <span className="text-[#FF087F]">📈</span>
                <span>Digital Marketing Agency</span>
              </div>

              {/* Headline */}
              <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight text-[#111321] leading-[1.08]">
                Click Smart. <br />
                <span className="text-gradient-brand">Grow Fast.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-[#343644] max-w-xl font-normal leading-relaxed">
                We help businesses build a stronger online presence, generate qualified leads, and
                achieve measurable growth through strategic digital marketing.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  to="/contact/"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
                >
                  Get a Free Consultation
                </Button>
                <Link
                  to="/about/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#111321] text-[#111321] font-semibold text-sm hover:bg-[#FFF0E9] transition-all"
                >
                  <Play className="w-4 h-4 fill-[#111321]" />
                  <span>Watch How We Work</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Artwork Column */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <HeroLogoInteractive />
            </div>
          </div>
        </div>

        {/* 3-Layer Continuous Animated Gradient Waves */}
        <div className="w-full overflow-hidden leading-none mt-12 md:mt-16 relative h-24 sm:h-32 md:h-40">
          <svg
            viewBox="0 0 1440 140"
            preserveAspectRatio="none"
            className="absolute inset-0 w-[120%] -left-[10%] h-full pointer-events-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="mainWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF8A24" />
                <stop offset="48%" stopColor="#FF6038" />
                <stop offset="100%" stopColor="#FF087F" />
              </linearGradient>
              <linearGradient id="highlightWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFE5ED" />
                <stop offset="50%" stopColor="#FF6038" />
                <stop offset="100%" stopColor="#FF8A24" />
              </linearGradient>
            </defs>

            {/* Wave Layer 1 */}
            <path
              d="M0,45 C280,95 560,10 840,70 C1120,120 1280,30 1440,65 L1440,140 L0,140 Z"
              fill="#FFF0E9"
              fillOpacity="0.85"
              className="animate-wave-bg"
            />

            {/* Wave Layer 3 */}
            <path
              d="M0,60 C320,15 640,110 960,35 C1200,85 1360,20 1440,50 L1440,140 L0,140 Z"
              fill="url(#highlightWaveGrad)"
              fillOpacity="0.5"
              className="animate-wave-highlight"
            />

            {/* Wave Layer 2 */}
            <path
              d="M0,35 C240,80 480,20 720,75 C960,120 1200,40 1440,70 L1440,140 L0,140 Z"
              fill="url(#mainWaveGrad)"
              className="animate-wave-main"
            />
          </svg>
        </div>
      </section>

      {/* ---------------- 2. CONTINUOUS MOVING SERVICES MARQUEE ---------------- */}
      <InfiniteMarquee />

      {/* ---------------- 3. OUR SERVICES SECTION ---------------- */}
      <section className="py-20 md:py-28 bg-[#FFF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE5ED] text-[#FF087F] text-xs font-bold font-mono uppercase tracking-wider">
              <span>OUR GROWTH ENGINES</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#111321] tracking-tight">
              Full-Spectrum Digital Services
            </h2>
            <p className="text-sm sm:text-base text-[#727383]">
              Every service is engineered to work independently or combine into a multi-channel growth system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <InteractiveServiceCard key={svc.id} service={svc} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/services/" variant="secondary" size="md">
              View All 12 Growth Services
            </Button>
          </div>
        </div>
      </section>

      {/* ---------------- 5. CUSTOMER-ACQUISITION PILLARS SECTION ---------------- */}
      <UnlockPotentialSection />

      {/* ---------------- 6. WHY CORECLICK (INTERACTIVE GROWTH DASHBOARD) ---------------- */}
      <WhyChooseUsInteractive />

      {/* ---------------- 7. OUR 5-STAGE GROWTH PROCESS ---------------- */}
      <FiveStageGrowthEngine />

      {/* ---------------- 8. INDUSTRIES WE HELP SECTION ---------------- */}
      <IndustriesWeHelpSection />

      {/* ---------------- 9. FREQUENTLY ASKED QUESTIONS SECTION ---------------- */}
      <HomeFaqSection />

      {/* ---------------- 10. STRONG CONTACT / CONSULTATION BANNER ---------------- */}
      <section className="py-20 md:py-28 bg-gradient-brand text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="inline-block font-mono text-xs font-bold uppercase tracking-widest text-white/90 bg-black/10 px-4 py-1.5 rounded-full border border-white/20">
            START YOUR GROWTH JOURNEY TODAY
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
            Ready to Outperform Your Competitors?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-normal">
            Book a complimentary strategy consultation with Varanasi's dedicated digital marketing team.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#111321] text-white font-extrabold text-sm shadow-2xl hover:bg-black transition-all hover:scale-105"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#FF8A24]" />
            </Link>
            <a
              href="tel:8707414150"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#111321] font-extrabold text-sm shadow-2xl hover:bg-white/90 transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 text-[#FF6038]" />
              <span>Call Us Direct: 8707414150</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
