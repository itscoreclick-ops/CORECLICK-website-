import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Sparkles,
  Zap,
  ShieldCheck,
  Smartphone,
  Laptop,
  Layers,
  Code2,
  FileCode,
  Gauge,
  Search,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Phone,
  ExternalLink,
  Lock,
  Globe,
  Database,
  Terminal,
  MousePointerClick,
  TrendingUp,
  Cpu,
  Palette,
  FolderGit2,
} from "lucide-react";
import { SeoHead } from "../components/common/SeoHead";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { WebDevEnquiryForm } from "../components/forms/WebDevEnquiryForm";

// 1. Deliverables Data
const DELIVERABLES = [
  {
    num: "01",
    title: "Custom UI/UX Design",
    subtitle: "Figma-based website layouts for desktop, tablet, and mobile.",
    desc: "Bespoke user interface designed around your exact audience psychology. We develop comprehensive design systems, custom component libraries, and interactive prototypes before writing a line of code.",
    features: [
      "Bespoke Figma wireframes & interactive prototypes",
      "Tailored typography scale & brand color architecture",
      "Mobile-first touch-target optimization (WCAG AA)",
      "Cross-device responsive design specifications",
    ],
    icon: Palette,
  },
  {
    num: "02",
    title: "Production-Ready Development",
    subtitle: "Responsive frontend development with smooth interactions and animations.",
    desc: "Engineered using modern component frameworks (React, TypeScript, Tailwind CSS) for sub-second First Contentful Paint, zero cumulative layout shifts, and pristine code maintainability.",
    features: [
      "Lightweight, clean, semantic HTML5 & modern CSS",
      "Zero layout shifts (CLS < 0.01) & sub-1.5s load speeds",
      "Fluid responsive scaling from 360px to 4K displays",
      "Accessible interactions & reduced-motion compliance",
    ],
    icon: Code2,
  },
  {
    num: "03",
    title: "Lead Generation Integration",
    subtitle: "Enquiry forms, WhatsApp integration, and real-time notifications.",
    desc: "Turn passive website visitors into paying customers with conversion-focused lead capture, click-to-WhatsApp triggers, instant email/CRM webhook notifications, and automated client receipts.",
    features: [
      "Multi-step lead scoping forms with instant validation",
      "Direct WhatsApp click-to-chat integration",
      "Real-time email alerts & CRM webhook routing",
      "Click-to-call buttons & automated client confirmation",
    ],
    icon: MousePointerClick,
  },
  {
    num: "04",
    title: "Technical SEO Foundation",
    subtitle: "Canonical tags, metadata, structured data, sitemap, and Open Graph setup.",
    desc: "Built from the ground up to rank on Google. Every page features semantic heading hierarchy, Schema.org JSON-LD structured data, XML sitemaps, robots.txt hygiene, and Open Graph social sharing cards.",
    features: [
      "Schema.org (Service, LocalBusiness, Breadcrumbs) JSON-LD",
      "Automated XML sitemaps & robots.txt configuration",
      "Open Graph & Twitter card previews for social sharing",
      "Canonical tags to prevent content cannibalization",
    ],
    icon: Search,
  },
  {
    num: "05",
    title: "Deployment & Documentation",
    subtitle: "Website deployment, performance testing, and technical documentation.",
    desc: "Deployed to high-speed global edge networks with automated SSL certificates, HTTP/3, and edge caching. Complete technical handoff guide so your internal team can manage updates with confidence.",
    features: [
      "Global edge network deployment with sub-50ms TTFB",
      "Automated SSL certificates & HTTP/3 encryption",
      "Cross-browser testing (Chrome, Safari, iOS, Android)",
      "Technical handoff documentation & admin walkthrough",
    ],
    icon: FolderGit2,
  },
];

// 2. Workflow Steps
const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Architecture & Wireframes",
    desc: "Plan page hierarchy, user journeys, and conversion funnels.",
    deliverable: "Information Architecture blueprint & structural wireframes",
    timeline: "Week 1",
  },
  {
    step: "02",
    title: "Visual UI/UX Design",
    desc: "Create bespoke layouts using brand typography, colours, and visual assets.",
    deliverable: "High-fidelity Figma prototypes for desktop & mobile",
    timeline: "Week 2",
  },
  {
    step: "03",
    title: "Full-Stack Development",
    desc: "Build responsive components, interactive features, and form integrations.",
    deliverable: "Modular TypeScript codebase & third-party integrations",
    timeline: "Weeks 3 - 4",
  },
  {
    step: "04",
    title: "QA & Deployment",
    desc: "Test across devices, optimize performance, verify SEO, and launch.",
    deliverable: "Production deployment, speed audit & technical sign-off",
    timeline: "Launch Week",
  },
];

// 3. Tech Stack Highlights
const TECH_PILLARS = [
  {
    title: "Modern React & TypeScript",
    desc: "Zero-bloat component architecture offering rock-solid stability and instant state responsiveness.",
    badge: "Core Framework",
    icon: Code2,
  },
  {
    title: "Tailwind CSS Utility Engine",
    desc: "Zero-runtime stylesheet footprint with bespoke styling and guaranteed mobile-first layout fluidity.",
    badge: "Performance Styling",
    icon: Zap,
  },
  {
    title: "Sub-1.5s Core Web Vitals",
    desc: "Engineered specifically to hit green 90+ Lighthouse metrics on mobile 4G networks.",
    badge: "Speed Guarantee",
    icon: Gauge,
  },
  {
    title: "Global Edge Distribution",
    desc: "High-speed CDN edge nodes serving assets within 30ms of visitors in Varanasi, India, and globally.",
    badge: "Infrastructure",
    icon: Globe,
  },
  {
    title: "Schema.org Semantic Markup",
    desc: "Machine-readable structured data that positions your business for rich Google search snippets.",
    badge: "SEO Readiness",
    icon: Database,
  },
  {
    title: "Enterprise Grade Security",
    desc: "Automated HTTPS/SSL certificates, clean CSP headers, and protection against common web vulnerabilities.",
    badge: "Security",
    icon: Lock,
  },
];

// 4. FAQ Items
const FAQ_ITEMS = [
  {
    question: "How much does a business website cost?",
    answer:
      "Website investment varies depending on scope, functional requirements, and design complexity. A focused 5-to-8 page business website typically ranges between ₹35,000 and ₹75,000, while bespoke e-commerce platforms, custom web portals, and comprehensive digital flagships range between ₹85,000 and ₹2,50,000+. Every CoreClick proposal includes a fixed, transparent scope breakdown with zero hidden fees.",
  },
  {
    question: "How long does website development take?",
    answer:
      "A standard high-performance business website is designed, engineered, tested, and launched within 3 to 4 weeks. High-conversion single-page landing pages can be delivered within 7 to 10 days, while expansive multi-category e-commerce sites or custom web applications take 6 to 8 weeks. We operate on strict sprint milestones so you always know exact delivery dates.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes, flawlessly. With over 80% of Indian web traffic originating from mobile devices, CoreClick follows a strict mobile-first engineering discipline. Every layout, typography scale, navigation element, and form input is tested across iOS Safari, Android Chrome, and diverse smartphone screen dimensions before desktop viewports are finalized.",
  },
  {
    question: "Will my website be SEO-friendly?",
    answer:
      "Absolutely. Technical SEO is baked into the code, not tacked on as an afterthought. We implement semantic HTML5 landmark tags, clean URL structures, Schema.org JSON-LD structured data (Organization, LocalBusiness, BreadcrumbList), XML sitemaps, robots.txt directives, and sub-1.5s page load speeds so Google can crawl and index your site effortlessly.",
  },
  {
    question: "Can I update my website after launch?",
    answer:
      "Yes. We build clean, modular architectures where copy, contact numbers, WhatsApp triggers, service listings, images, and team details are easily updated without risking broken code. We provide complete documentation and a dedicated technical walkthrough during project handover.",
  },
  {
    question: "Do you provide hosting and maintenance?",
    answer:
      "Yes. We configure and deploy your website on enterprise-grade global edge hosting (such as Cloudflare, Vercel, or AWS) with automated SSL certification, DDoS mitigation, and 99.9% uptime. We also provide ongoing maintenance packages that cover speed audits, security updates, content refreshes, and technical support.",
  },
];

// 5. Related Growth Services
const RELATED_SERVICES = [
  {
    title: "Search Engine Optimization (SEO)",
    slug: "seo",
    category: "Organic Growth",
    desc: "Drive consistent organic traffic and rank on Google's first page with technical SEO, keyword architecture, and high-authority optimization.",
    link: "/services/seo/",
    badge: "Organic Search",
  },
  {
    title: "Branding & Brand Identity",
    slug: "branding",
    category: "Brand & Creative",
    desc: "Build a memorable, distinctive visual brand identity with custom logos, typography guidelines, color systems, and brand books.",
    link: "/services/branding/",
    badge: "Brand Identity",
  },
  {
    title: "Landing Page Design & CRO",
    slug: "landing-page-design",
    category: "Tech & Conversion",
    desc: "Dedicated high-converting campaign landing pages built to maximize paid advertising return on ad spend across Google and Meta Ads.",
    link: "/services/landing-page-design/",
    badge: "High Conversion",
  },
  {
    title: "Lead Generation",
    slug: "lead-generation",
    category: "Paid Advertising",
    desc: "High-intent lead generation funnels combining hyper-targeted advertising, qualification forms, and instant sales routing.",
    link: "/services/lead-generation/",
    badge: "Paid Acquisition",
  },
];

export const WebsiteDevelopmentPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://coreclick.in/services/website-development/#service",
        name: "Website Design & Development",
        serviceType: "Web Engineering & UI/UX Design",
        category: "Tech & Conversion",
        provider: {
          "@type": "Organization",
          name: "CoreClick",
          url: "https://coreclick.in",
          telephone: "+918707414150",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Sigra",
            addressLocality: "Varanasi",
            addressRegion: "Uttar Pradesh",
            postalCode: "221010",
            addressCountry: "IN",
          },
        },
        areaServed: ["Varanasi", "Uttar Pradesh", "India"],
        description:
          "Modern, high-performance website design and development services in Varanasi. Engineered for sub-1.5s loading speeds, technical SEO foundations, and conversion-focused architectures.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://coreclick.in/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://coreclick.in/services/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Website Design & Development",
            item: "https://coreclick.in/services/website-development/",
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-[#FFF9F6] text-[#11111F] selection:bg-[#FF286B]/20 selection:text-[#FF286B] min-h-screen">
      <SeoHead
        title="Website Design & Development | CoreClick Varanasi"
        description="Websites engineered for speed, distinction, and high conversion. Modern UI/UX design, mobile-first responsive architecture, and technical SEO in Varanasi."
        canonicalPath="/services/website-development/"
        structuredData={structuredData}
      />

      {/* =========================================================================
          1. HERO SECTION — COMPLETE REDESIGN WITH SPLIT LAYOUT & WEBSITE SHOWCASE
          ========================================================================= */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#11111F]/10">
        {/* Soft Ambient Background Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl pointer-events-none -mt-20" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#FF286B]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services/" },
              { label: "Website Design & Development" },
            ]}
            className="mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                <span className="text-[#FF6B35]">TECH & CONVERSION</span>
                <span className="text-[#11111F]/30" aria-hidden="true">·</span>
                <span className="text-[#73778A]">CORECLICK VARANASI</span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#11111F] tracking-tight leading-[1.14]">
                Websites Engineered for{" "}
                <span className="text-gradient-brand">
                  Speed, Distinction & High Conversion.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#4A4B59] leading-relaxed max-w-xl font-normal">
                Your website is your business's 24/7 digital flagship. We design and build modern, responsive web experiences with exceptional loading speeds, strong SEO foundations, and conversion-focused architecture.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
                <a
                  href="#enquiry-section"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-brand hover:opacity-95 text-white font-bold text-sm shadow-lg shadow-[#FF6B35]/25 transition-all text-center"
                >
                  <span>Let's Build Your Website</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/918707414150?text=Hello%20CoreClick%20Team,%20I%20am%20interested%20in%20building%20a%20new%20website%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full border border-[#11111F]/20 text-[#11111F] hover:bg-[#FFF0E9] hover:border-[#FF6B35]/50 font-bold text-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-[#FF6B35]" />
                  <span>Quick WhatsApp Chat</span>
                </a>
              </div>

              {/* Engineering Highlights Ribbon */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-[#11111F]/10">
                <div className="space-y-0.5">
                  <div className="font-mono text-base font-extrabold text-[#11111F] flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-[#FF6B35]" />
                    <span>0.4s</span>
                  </div>
                  <div className="text-[11px] text-[#73778A] font-medium leading-tight">First Contentful Paint</div>
                </div>

                <div className="space-y-0.5">
                  <div className="font-mono text-base font-extrabold text-[#11111F] flex items-center gap-1">
                    <Smartphone className="w-3.5 h-3.5 text-[#FF286B]" />
                    <span>100%</span>
                  </div>
                  <div className="text-[11px] text-[#73778A] font-medium leading-tight">Mobile Responsive</div>
                </div>

                <div className="space-y-0.5">
                  <div className="font-mono text-base font-extrabold text-[#11111F] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Clean</span>
                  </div>
                  <div className="text-[11px] text-[#73778A] font-medium leading-tight">TypeScript & React</div>
                </div>

                <div className="space-y-0.5">
                  <div className="font-mono text-base font-extrabold text-[#11111F] flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-[#FF6B35]" />
                    <span>+184%</span>
                  </div>
                  <div className="text-[11px] text-[#73778A] font-medium leading-tight">Avg Form Inquiries</div>
                </div>
              </div>
            </div>

            {/* Right Showcase Column: Desktop Mockup Overlapped by Mobile Mockup */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none pt-2 sm:pt-4">
                {/* Floating Metric Badge Top-Right */}
                <div className="absolute -top-4 right-2 sm:right-4 z-30 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-[#11111F]/15 shadow-xl flex items-center gap-2.5 animate-bounce-subtle">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                    <Gauge className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono text-xs font-bold text-[#11111F]">Lighthouse 100/100</div>
                    <div className="text-[10px] text-emerald-700 font-semibold">Core Web Vitals Passed</div>
                  </div>
                </div>

                {/* 1. Desktop Browser Frame */}
                <div className="bg-[#11111F] rounded-2xl sm:rounded-3xl p-1.5 sm:p-2.5 shadow-2xl border border-[#11111F]/20 transition-transform duration-500 hover:scale-[1.01]">
                  {/* Browser Window Chrome */}
                  <div className="bg-[#1A1B2E] rounded-t-xl sm:rounded-t-2xl px-3 py-2 sm:py-2.5 flex items-center justify-between gap-3 border-b border-white/10">
                    {/* Window Controls */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>

                    {/* Address Bar */}
                    <div className="flex-1 max-w-xs mx-auto bg-black/40 rounded-lg px-2.5 py-1 text-[11px] font-mono text-white/80 flex items-center justify-center gap-1.5 border border-white/5 truncate">
                      <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="truncate">https://keshavbhog.com</span>
                    </div>

                    {/* Speed indicator */}
                    <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono text-emerald-400 shrink-0 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>0.38s</span>
                    </div>
                  </div>

                  {/* Browser Viewport Content (Realistic Luxury/E-commerce Website Interface) */}
                  <div className="bg-[#FFF9F6] rounded-b-xl sm:rounded-b-2xl overflow-hidden p-4 sm:p-6 text-[#11111F]">
                    {/* Mock Website Navbar */}
                    <div className="flex items-center justify-between pb-4 border-b border-[#11111F]/10 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-gradient-brand flex items-center justify-center text-white font-black text-[11px]">
                          KB
                        </div>
                        <span className="font-extrabold tracking-wider text-[#11111F] text-xs font-mono">
                          KESHAV BHOG
                        </span>
                      </div>
                      <div className="hidden sm:flex items-center gap-4 text-[11px] text-[#73778A] font-medium">
                        <span className="text-[#FF6B35] font-bold">Heritage</span>
                        <span>Collections</span>
                        <span>Bespoke</span>
                        <span>Flagship</span>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-[#11111F] text-white text-[10px] font-bold">
                        Enquire Now →
                      </div>
                    </div>

                    {/* Mock Website Hero Content */}
                    <div className="pt-5 pb-6 space-y-3">
                      <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#FF6B35] uppercase tracking-wider bg-[#FFF0E9] px-2.5 py-0.5 rounded-full border border-[#FF6B35]/20">
                        <span>HANDLOOM & SILK HERITAGE · VARANASI</span>
                      </div>

                      <h3 className="font-heading font-extrabold text-lg sm:text-2xl text-[#11111F] leading-snug">
                        Authentic Banarasi Elegance Engineered for Modern Global Connoisseurs.
                      </h3>

                      <p className="text-[11px] sm:text-xs text-[#73778A] line-clamp-2">
                        Certified pure zari craftsmanship direct from master weavers. Seamless WhatsApp shopping and insured worldwide express shipping.
                      </p>

                      <div className="pt-2 flex items-center gap-3">
                        <div className="px-4 py-2 rounded-xl bg-gradient-brand text-white text-xs font-bold shadow-sm">
                          Explore Catalog
                        </div>
                        <div className="px-3 py-2 rounded-xl bg-white border border-[#11111F]/15 text-[#11111F] text-xs font-bold">
                          WhatsApp Order
                        </div>
                      </div>
                    </div>

                    {/* Mock Embedded Performance Telemetry Bar */}
                    <div className="p-3 bg-white rounded-xl border border-[#11111F]/10 grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="font-mono text-xs font-extrabold text-emerald-600">100 / 100</div>
                        <div className="text-[9px] text-[#73778A]">Performance</div>
                      </div>
                      <div className="border-x border-[#11111F]/10">
                        <div className="font-mono text-xs font-extrabold text-emerald-600">100 / 100</div>
                        <div className="text-[9px] text-[#73778A]">SEO & Schema</div>
                      </div>
                      <div>
                        <div className="font-mono text-xs font-extrabold text-emerald-600">0.00 CLS</div>
                        <div className="text-[9px] text-[#73778A]">Visual Stability</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Overlapping Mobile Device Mockup (Positioned at bottom right) */}
                <div className="absolute -bottom-8 -right-3 sm:-bottom-10 sm:-right-6 w-44 sm:w-56 z-20 shadow-2xl transition-transform duration-500 hover:-translate-y-1">
                  <div className="bg-[#11111F] rounded-[2rem] p-2 border-2 border-white/20 shadow-2xl">
                    {/* Phone Screen */}
                    <div className="bg-[#FFF9F6] rounded-[1.6rem] overflow-hidden p-3 text-[#11111F] space-y-2 border border-[#11111F]/10">
                      {/* Dynamic Island / Notch */}
                      <div className="w-16 h-3 bg-[#11111F] rounded-full mx-auto" />

                      {/* Mobile Header */}
                      <div className="flex items-center justify-between pt-1">
                        <div className="w-4 h-4 rounded-md bg-gradient-brand flex items-center justify-center text-[8px] text-white font-bold">
                          KB
                        </div>
                        <span className="font-mono text-[9px] font-extrabold text-[#11111F]">
                          KESHAV BHOG
                        </span>
                        <div className="w-3.5 h-3.5 rounded bg-[#11111F]/10 flex flex-col justify-center gap-0.5 px-0.5">
                          <div className="h-[1.5px] bg-[#11111F] rounded-full" />
                          <div className="h-[1.5px] bg-[#11111F] rounded-full" />
                        </div>
                      </div>

                      {/* Mobile Hero Content */}
                      <div className="bg-white rounded-xl p-2.5 border border-[#11111F]/10 shadow-xs space-y-1.5">
                        <div className="text-[8px] font-mono font-bold text-[#FF6B35]">
                          MOBILE-FIRST UX
                        </div>
                        <div className="text-[10px] font-extrabold leading-tight text-[#11111F]">
                          Banarasi Silk Saree Collection
                        </div>
                        <div className="text-[9px] text-[#73778A]">
                          1-Tap WhatsApp Checkout
                        </div>
                        <div className="w-full py-1.5 rounded-lg bg-[#25D366] text-white text-[9px] font-bold text-center flex items-center justify-center gap-1">
                          <Phone className="w-2.5 h-2.5" />
                          <span>Order on WhatsApp</span>
                        </div>
                      </div>

                      {/* Mobile Metric Pill */}
                      <div className="p-1.5 bg-[#FFF0E9] rounded-lg border border-[#FF6B35]/20 text-center">
                        <div className="text-[9px] font-mono font-bold text-[#FF6B35]">
                          ⚡ 0.4s Mobile Load
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Badge Bottom-Left */}
                <div className="absolute -bottom-6 -left-2 z-30 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-[#11111F]/15 shadow-xl hidden sm:flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#FF6B35]/10 flex items-center justify-center text-[#FF6B35]">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono text-xs font-bold text-[#11111F]">Fluid Responsive</div>
                    <div className="text-[10px] text-[#73778A]">Tested 360px to 4K</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. PROBLEMS & CORECLICK METHOD (BALANCED COMPARISON SECTION)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF0E9] border-b border-[#11111F]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="font-mono text-xs font-bold text-[#FF6B35] tracking-wider uppercase">
              THE REALITY CHECK · FRICTION VS ENGINEERING
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#11111F] tracking-tight">
              Why Most Business Websites Fail — And How We Engineer Success
            </h2>
            <p className="text-sm sm:text-base text-[#4A4B59]">
              A bad website actively drives customers into the arms of competitors. Here is the difference between generic templates and CoreClick's modern digital engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left: Friction Points */}
            <div className="bg-white rounded-3xl p-6 sm:p-9 border border-red-200/80 shadow-md flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-red-100 pb-4">
                  <div>
                    <span className="font-mono text-[11px] font-bold text-red-600 uppercase tracking-wider">
                      THE FRICTION POINTS
                    </span>
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#11111F] mt-1">
                      Why Most Business Websites Fail
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-200">
                    <XCircle className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-red-50/60 border border-red-100 flex items-start gap-3.5">
                    <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-[#11111F]">
                        Slow loading times causing mobile visitors to leave
                      </div>
                      <div className="text-xs text-[#73778A] mt-1 leading-relaxed">
                        Every second beyond 2.5 seconds spikes your mobile bounce rate by 32%. Bloated builders and unoptimized images hemorrhage interested buyers.
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-red-50/60 border border-red-100 flex items-start gap-3.5">
                    <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-[#11111F]">
                        Outdated templates weakening brand perception
                      </div>
                      <div className="text-xs text-[#73778A] mt-1 leading-relaxed">
                        Cookie-cutter themes make established brands look like low-budget operations. Customers instinctively judge your service quality by your digital storefront.
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-red-50/60 border border-red-100 flex items-start gap-3.5">
                    <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-[#11111F]">
                        Confusing navigation and poor user journeys
                      </div>
                      <div className="text-xs text-[#73778A] mt-1 leading-relaxed">
                        Buried phone numbers, hidden WhatsApp triggers, and dead clicks confuse visitors. When the path to contact isn't obvious, visitors bounce immediately.
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-red-50/60 border border-red-100 flex items-start gap-3.5">
                    <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-[#11111F]">
                        Websites that fail to adapt to smartphones
                      </div>
                      <div className="text-xs text-[#73778A] mt-1 leading-relaxed">
                        Desktop-centric layouts break on phone screens with microscopic text and unclickable links, alienating over 80% of your total audience.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-red-100 text-xs font-semibold text-red-700 flex items-center gap-1.5">
                <span>Result:</span>
                <span className="font-normal text-[#73778A]">Wasted ad budget, zero organic discovery, and lost revenue.</span>
              </div>
            </div>

            {/* Right: The CoreClick Method */}
            <div className="bg-white rounded-3xl p-6 sm:p-9 border border-emerald-200/80 shadow-md flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-emerald-100 pb-4">
                  <div>
                    <span className="font-mono text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                      THE CORECLICK METHOD
                    </span>
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#11111F] mt-1">
                      Our Website Engineering Approach
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-[#11111F]">
                        Mobile-first responsive architecture
                      </div>
                      <div className="text-xs text-[#4A4B59] mt-1 leading-relaxed">
                        Engineered from scratch for touch gestures, thumb reach zones, and lightning-fast scrolling on any phone, tablet, or laptop.
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-[#11111F]">
                        Modern frontend technologies and clean code
                      </div>
                      <div className="text-xs text-[#4A4B59] mt-1 leading-relaxed">
                        Handcrafted with React, TypeScript, and Tailwind CSS. Zero cumbersome WordPress plugins, sub-1.5s load times, and guaranteed stability.
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-[#11111F]">
                        Conversion-focused layouts and strategic CTAs
                      </div>
                      <div className="text-xs text-[#4A4B59] mt-1 leading-relaxed">
                        Frictionless contact funnels, persistent WhatsApp touchpoints, and clear visual hierarchy designed specifically to convert visitors into booked clients.
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-[#11111F]">
                        Technical SEO and structured data implementation
                      </div>
                      <div className="text-xs text-[#4A4B59] mt-1 leading-relaxed">
                        Semantic HTML5, automated XML sitemaps, Open Graph cards, and Schema.org JSON-LD built directly into every page so Google ranks you higher.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-100 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
                <span>Result:</span>
                <span className="font-normal text-[#4A4B59]">High conversion rates, strong Google visibility, and an authoritative digital flagship.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. DELIVERABLES SECTION (3-COLUMN RESPONSIVE GRID)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF9F6] border-b border-[#11111F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 space-y-3">
            <span className="font-mono text-xs font-bold text-[#FF6B35] tracking-wider uppercase">
              CONCRETE OUTPUTS
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#11111F] tracking-tight">
              Everything Your Business Needs to Go Live
            </h2>
            <p className="text-sm sm:text-base text-[#73778A] leading-relaxed">
              From initial wireframes to deployment, every stage is designed around performance, usability, and measurable business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DELIVERABLES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.num}
                  className={`bg-white rounded-3xl p-7 border border-[#11111F]/10 shadow-sm hover:shadow-xl hover:border-[#FF6B35]/40 transition-all group flex flex-col justify-between ${
                    idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-2xl font-black text-gradient-brand">
                        {item.num}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-[#FFF0E9] group-hover:bg-gradient-brand text-[#FF6B35] group-hover:text-white flex items-center justify-center transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-heading font-extrabold text-xl text-[#11111F] group-hover:text-[#FF6B35] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#FF286B] mt-1">
                        {item.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-[#4A4B59] mt-2.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#11111F]/10 space-y-2">
                      <div className="font-mono text-[10px] font-bold text-[#73778A] uppercase tracking-wider">
                        Included Deliverables:
                      </div>
                      {item.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-[#11111F]">
                          <Check className="w-3.5 h-3.5 text-[#FF6B35] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#11111F]/5 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#73778A]">CoreClick Quality Assurance</span>
                    <a
                      href="#enquiry-section"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#FF6B35] hover:text-[#FF286B] transition-colors"
                    >
                      <span>Scope This</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. EXECUTION WORKFLOW (LAVENDER SECTION WITH CONNECTED 4-STAGE TIMELINE)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#F0E9FF] border-b border-[#11111F]/10 relative overflow-hidden">
        {/* Soft Ambient Light */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-mono text-xs font-bold text-[#FF6B35] tracking-wider uppercase">
              THE DEPLOYMENT ROADMAP
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#11111F] tracking-tight">
              From Concept to Conversion
            </h2>
            <p className="text-sm sm:text-base text-[#4A4B59]">
              A disciplined, connected engineering lifecycle ensuring transparent milestones, flawless execution, and predictable delivery dates.
            </p>
          </div>

          {/* Desktop Connected 4-Step Horizontal Process */}
          <div className="hidden lg:block relative">
            {/* Connecting Gradient Line */}
            <div className="absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-[#FF6B35] via-[#FF286B] to-[#7C3AED] z-0 opacity-40" />

            <div className="grid grid-cols-4 gap-6 relative z-10">
              {WORKFLOW_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="bg-white rounded-3xl p-6 border border-[#11111F]/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-brand text-white font-mono font-black text-base flex items-center justify-center shadow-md">
                        {step.step}
                      </div>
                      <span className="font-mono text-[11px] font-bold text-[#FF6B35] bg-[#FFF0E9] px-2.5 py-1 rounded-full border border-[#FF6B35]/20">
                        {step.timeline}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading font-extrabold text-lg text-[#11111F]">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#4A4B59] mt-2 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#11111F]/10">
                    <div className="text-[10px] font-mono font-bold text-[#73778A] uppercase tracking-wider">
                      Core Deliverable:
                    </div>
                    <div className="text-xs font-semibold text-[#11111F] mt-1">
                      {step.deliverable}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile / Tablet Vertical Timeline */}
          <div className="lg:hidden space-y-4 relative">
            {WORKFLOW_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="bg-white rounded-3xl p-5 border border-[#11111F]/10 shadow-sm flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-2xl bg-gradient-brand text-white font-mono font-black text-sm flex items-center justify-center shrink-0 shadow-md">
                  {step.step}
                </div>
                <div className="flex-1 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading font-extrabold text-base text-[#11111F]">
                      {step.title}
                    </h3>
                    <span className="font-mono text-[10px] font-bold text-[#FF6B35]">
                      {step.timeline}
                    </span>
                  </div>
                  <p className="text-xs text-[#4A4B59] leading-relaxed">
                    {step.desc}
                  </p>
                  <div className="text-[11px] font-medium text-[#73778A] pt-1">
                    <span className="font-bold text-[#11111F]">Output:</span> {step.deliverable}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. TECHNICAL ARCHITECTURE & PERFORMANCE SPOTLIGHT
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF9F6] border-b border-[#11111F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="font-mono text-xs font-bold text-[#FF6B35] tracking-wider uppercase">
              TECHNICAL PRECISION
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#11111F] tracking-tight">
              Engineered With Modern Enterprise Web Standards
            </h2>
            <p className="text-sm sm:text-base text-[#73778A]">
              We reject slow website builders and clunky plugins. Every CoreClick website is coded cleanly for performance, security, and long-term scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TECH_PILLARS.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.title}
                  className="bg-white rounded-3xl p-6 border border-[#11111F]/10 shadow-sm hover:border-[#FF6B35]/40 transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-2xl bg-[#FFF0E9] text-[#FF6B35] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-heading font-extrabold text-base text-[#11111F]">
                        {tech.title}
                      </span>
                    </div>
                    <span className="inline-block text-[10px] font-mono font-bold text-[#FF6B35] uppercase tracking-wider">
                      {tech.badge}
                    </span>
                    <p className="text-xs text-[#73778A] leading-relaxed pt-1">
                      {tech.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. FAQ SECTION (HIGH CONTRAST & CLEAN ACCORDION)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF0E9] border-b border-[#11111F]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="font-mono text-xs font-bold text-[#FF6B35] tracking-wider uppercase">
              TRANSPARENT ANSWERS
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#11111F] tracking-tight">
              Website Design & Development FAQs
            </h2>
            <p className="text-sm sm:text-base text-[#4A4B59]">
              Straightforward answers about pricing, mobile compatibility, timelines, and technical maintenance.
            </p>
          </div>

          <div className="space-y-3.5">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#11111F]/10 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#FF6B35]">
                        0{idx + 1}
                      </span>
                      <span className="font-heading font-bold text-sm sm:text-base text-[#11111F]">
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? "bg-gradient-brand text-white rotate-180"
                          : "bg-[#FFF0E9] text-[#11111F]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-[#4A4B59] leading-relaxed border-t border-[#11111F]/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. RELATED GROWTH SERVICES (4 REDESIGNED PREMIUM CARDS)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF9F6] border-b border-[#11111F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 space-y-3">
            <span className="font-mono text-xs font-bold text-[#FF6B35] tracking-wider uppercase">
              GROWTH ECOSYSTEM
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#11111F] tracking-tight">
              Build a Complete Digital Growth Ecosystem
            </h2>
            <p className="text-sm sm:text-base text-[#73778A]">
              A high-speed website is the digital foundation. Pair it with targeted acquisition, search dominance, and high-converting creative engines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RELATED_SERVICES.map((srv) => (
              <div
                key={srv.slug}
                className="bg-white rounded-3xl p-6 border border-[#11111F]/10 shadow-sm hover:shadow-xl hover:border-[#FF6B35]/40 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-[#FF6B35] uppercase tracking-wider bg-[#FFF0E9] px-2.5 py-1 rounded-full border border-[#FF6B35]/20">
                      {srv.category}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#73778A] group-hover:text-[#FF6B35] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <div>
                    <h3 className="font-heading font-extrabold text-lg text-[#11111F] group-hover:text-[#FF6B35] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-[#73778A] mt-2 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-[#11111F]/5">
                  <Link
                    to={srv.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#11111F] group-hover:text-[#FF6B35] transition-colors"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. ENQUIRY FORM SECTION (DEDICATED 3-STEP SCOPING ENGINE)
          ========================================================================= */}
      <section id="enquiry-section" className="py-16 md:py-24 bg-[#FFF0E9] border-b border-[#11111F]/10 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="font-mono text-xs font-bold text-[#FF6B35] tracking-wider uppercase">
              TECHNICAL SCOPING & QUOTATION
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#11111F] tracking-tight">
              Let's Build a Website That Grows Your Business
            </h2>
            <p className="text-sm sm:text-base text-[#4A4B59]">
              Tell us about your project. We'll help you turn your digital vision into a high-performing website with a detailed timeline and architecture proposal.
            </p>
          </div>

          <WebDevEnquiryForm />
        </div>
      </section>

      {/* =========================================================================
          9. FINAL CALL TO ACTION BANNER
          ========================================================================= */}
      <section className="py-16 md:py-20 bg-gradient-brand text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/25 text-white text-xs font-mono font-bold uppercase tracking-widest border border-white/20">
            ✦ READY FOR DIGITAL DISTINCTION?
          </span>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight max-w-3xl mx-auto">
            Your Competitors Are Investing in Their Digital Flagship. Are You?
          </h2>

          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Schedule a 20-minute discovery call with CoreClick's engineering team in Varanasi. We'll review your current site or project wireframes at zero cost.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#enquiry-section"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#11111F] hover:bg-[#FFF9F6] font-bold text-sm shadow-xl transition-all"
            >
              <span>Let's Build Your Website</span>
              <ArrowRight className="w-4 h-4 text-[#FF6B35]" />
            </a>

            <a
              href="https://wa.me/918707414150?text=Hello%20CoreClick,%20I'd%20like%20to%20discuss%20a%20website%20development%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-black/30 hover:bg-black/40 text-white border border-white/30 font-bold text-sm transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
