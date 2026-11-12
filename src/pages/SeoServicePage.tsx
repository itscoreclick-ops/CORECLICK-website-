import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Sparkles,
  Search,
  Globe,
  TrendingUp,
  BarChart3,
  Layers,
  MapPin,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Zap,
  Code,
  FileText,
  Sliders,
  MessageCircle,
  HelpCircle,
  Eye,
  LineChart,
  Target,
  ExternalLink,
} from "lucide-react";
import { SeoHead } from "../components/common/SeoHead";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { SeoEnquiryForm } from "../components/forms/SeoEnquiryForm";

// 1. Ecosystem strip
const ECOSYSTEM_PLATFORMS = [
  { name: "Google Search Console", role: "Crawlability & Indexing Health", badge: "Diagnostic" },
  { name: "Google Analytics 4", role: "First-Party Organic Attribution", badge: "Analytics" },
  { name: "Google Business Profile", role: "Maps 3-Pack & Local Citations", badge: "Local Maps" },
  { name: "Google Search", role: "Search Intent & Topical Authority", badge: "Organic Core" },
  { name: "PageSpeed Insights", role: "Core Web Vitals & Sub-1.5s Speed", badge: "Technical" },
  { name: "Schema.org", role: "Rich Snippets & Structured Data", badge: "Semantic" },
];

// 2. SEO Services (6 cards)
const SEO_SERVICES = [
  {
    num: "01",
    title: "Technical SEO",
    desc: "Crawlability, indexation, Core Web Vitals, schema markup and website architecture optimization.",
    link: "/services/website-development/",
    icon: Code,
    deliverables: ["Robots.txt & XML sitemap audit", "Canonicalization & redirect hygiene", "Core Web Vitals (LCP, INP, CLS)"],
  },
  {
    num: "02",
    title: "Keyword Research",
    desc: "Search intent analysis, competitor gap mapping and high-commercial-intent keyword grouping.",
    link: "/services/digital-marketing-strategy/",
    icon: Search,
    deliverables: ["Commercial vs informational intent", "Search volume & difficulty teardown", "Long-tail conversion query mapping"],
  },
  {
    num: "03",
    title: "On-Page SEO",
    desc: "Title tags, meta descriptions, semantic headings, internal linking architecture and content readability.",
    link: "/services/content-marketing/",
    icon: Sliders,
    deliverables: ["High-CTR meta title crafting", "Semantic H1–H3 heading hierarchy", "Internal link equity distribution"],
  },
  {
    num: "04",
    title: "Content SEO",
    desc: "Topic clusters, pillar articles, landing pages and search-focused editorial content strategy.",
    link: "/services/content-marketing/",
    icon: FileText,
    deliverables: ["Pillar-and-cluster content mapping", "E-E-A-T authoritativeness signals", "Search-optimized blog creation"],
  },
  {
    num: "05",
    title: "Local SEO",
    desc: "Google Business Profile optimization, local citations, geo-tagged landing pages and local search visibility.",
    link: "/services/local-seo/",
    icon: MapPin,
    deliverables: ["Varanasi Maps 3-Pack optimization", "NAP consistency across Indian portals", "Local review collection workflows"],
  },
  {
    num: "06",
    title: "Off-Page SEO",
    desc: "Authority development, relevant industry backlinks, brand mentions and strategic digital PR opportunities.",
    link: "/services/branding/",
    icon: Globe,
    deliverables: ["High-authority editorial mentions", "Broken backlink reclamation", "Unlinked brand citation conversion"],
  },
];

// 3. Deliverables
const DELIVERABLES = [
  {
    num: "01",
    title: "Comprehensive Technical SEO Audit",
    desc: "Full crawl inspection analyzing site architecture, redirect chains, indexation status, mobile responsiveness, and Core Web Vitals.",
    size: "large",
  },
  {
    num: "02",
    title: "Keyword & Competitor Analysis",
    desc: "Itemized spreadsheet detailing commercial search volume, intent categorization, competitor ranking gaps, and target priority.",
    size: "small",
  },
  {
    num: "03",
    title: "On-Page SEO Optimization",
    desc: "Complete metadata overhaul, header tags, image compression, structured JSON-LD schema implementation, and internal linking.",
    size: "small",
  },
  {
    num: "04",
    title: "Monthly Content Roadmap",
    desc: "Editorial schedule of high-intent search queries, topical cluster outlines, and target URL assignments for continuous equity growth.",
    size: "small",
  },
  {
    num: "05",
    title: "Technical Search Recommendations",
    desc: "Actionable engineering briefs for site speed acceleration, server caching, and schema markup additions.",
    size: "small",
  },
  {
    num: "06",
    title: "Organic Traffic & Ranking Reports",
    desc: "Transparent monthly dashboard reports tracking real search impressions, clicks, keyword position changes, and inbound leads.",
    size: "large",
  },
];

// 4. Execution Workflow
const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Audit & Discovery",
    timing: "Weeks 1–2",
    desc: "Evaluate your existing website, search visibility, technical health, backlink profile, and direct search competitors.",
    items: ["Deep Screaming Frog crawl audit", "Google Search Console errors check", "Competitor ranking gap teardown"],
  },
  {
    step: "02",
    title: "Research & Strategy",
    timing: "Weeks 2–3",
    desc: "Identify high-value commercial keywords, search intent opportunities, and design a scalable topical content cluster.",
    items: ["Intent categorization (Buy vs Browse)", "Pillar content topic mapping", "URL taxonomy & architecture plan"],
  },
  {
    step: "03",
    title: "Optimize & Execute",
    timing: "Weeks 3–6",
    desc: "Implement technical improvements, optimize on-page signals, configure structured data, and launch search-focused content.",
    items: ["Metadata & schema deployment", "PageSpeed acceleration & CWV fixes", "Content optimization & internal linking"],
  },
  {
    step: "04",
    title: "Monitor & Improve",
    timing: "Ongoing",
    desc: "Track search performance, analyze Google algorithm shifts, monitor keyword velocity, and continuously expand rankings.",
    items: ["Keyword rank tracking & alerts", "Search Console CTR optimization", "Quarterly authority expansion sprint"],
  },
];

// 5. SEO FAQs
const FAQS = [
  {
    q: "What is SEO and why does my business need it?",
    a: "Search Engine Optimization (SEO) is the process of improving your website's technical health, content quality, and topical authority so search engines like Google rank your pages at the top when potential customers search for your products or services. Unlike paid advertising, which stops generating traffic the moment you pause ad spend, organic SEO builds permanent digital equity that continues driving qualified visitors, phone calls, and revenue indefinitely at zero marginal cost.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "Most businesses begin seeing measurable movement—such as improved crawlability, technical health scores, and initial keyword impressions—within the first 4 to 8 weeks. Meaningful organic traffic growth and page-one rankings for competitive commercial terms typically take between 3 to 6 months of disciplined technical and content execution. In less competitive local search markets like Varanasi, Google Maps 3-Pack improvements can occur even faster.",
  },
  {
    q: "Can you help my business rank on Google?",
    a: "Yes. We have systematically ranked businesses across competitive categories in Uttar Pradesh and throughout India. Our method focuses on high-intent commercial keywords where searchers have active intent to purchase or inquire, rather than chasing hollow vanity search terms.",
  },
  {
    q: "What is the difference between SEO and Google Ads?",
    a: "Google Ads (PPC) is pay-per-click advertising: you pay Google each time someone clicks your ad, which gives you immediate visibility at the very top of search results. SEO is organic search marketing: you optimize your own website and content so Google chooses to rank you naturally. While Google Ads is great for immediate speed-to-market, SEO delivers a significantly higher long-term return on investment because you don't pay per click.",
  },
  {
    q: "Do you provide local SEO services?",
    a: "Yes. Local search is one of our core specialties. We optimize your Google Business Profile, ensure uniform Name-Address-Phone (NAP) citations across business directories, build geo-targeted location pages, and establish review collection systems to help you dominate the Google Maps 3-Pack in your city.",
  },
  {
    q: "Do you optimize existing websites?",
    a: "Yes. In fact, most of our clients come to us with existing websites built on WordPress, Shopify, Next.js, or custom React code that are underperforming. We conduct a rigorous technical and content audit, preserve your existing valuable URLs with zero broken redirects, and optimize your codebase.",
  },
  {
    q: "How do you measure SEO performance?",
    a: "We evaluate real business metrics: organic search impressions and clicks in Google Search Console, keyword ranking distribution across positions 1–3 and 4–10, organic landing page conversion rates in GA4, and verified phone calls or lead form inquiries generated by organic visitors.",
  },
  {
    q: "Do you guarantee first-page Google rankings?",
    a: "No ethical, high-quality SEO agency can guarantee specific Google rankings. Google's ranking algorithm incorporates hundreds of dynamic factors, competitor updates, and periodic core algorithm shifts. What CoreClick guarantees is rigorous technical execution, white-hat best practices, transparent weekly reporting, and a proven strategic methodology that consistently outperforms competitors.",
  },
];

// 6. Related Growth Services
const RELATED_SERVICES = [
  {
    title: "Local SEO & Google Maps",
    desc: "Google Business Profile optimization, local citations, and regional map pack domination.",
    slug: "local-seo",
    badge: "Local Search",
  },
  {
    title: "Content Marketing",
    desc: "Topical cluster writing, educational playbooks, and strategic lead magnets.",
    slug: "content-marketing",
    badge: "Editorial",
  },
  {
    title: "Website Development",
    desc: "High-performance React & Vite websites with sub-1.5s Core Web Vitals.",
    slug: "website-development",
    badge: "Tech & Speed",
  },
  {
    title: "Digital Marketing Strategy",
    desc: "Unified growth architecture connecting organic search, paid ads, and brand.",
    slug: "digital-marketing-strategy",
    badge: "Strategy",
  },
];

export const SeoServicePage: React.FC = () => {
  const [activeWorkflow, setActiveWorkflow] = useState<number>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeIntelTab, setActiveIntelTab] = useState<"performance" | "keywords" | "technical" | "local">("performance");

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
    serviceType: "Search Engine Optimization (SEO) & Technical Search Strategy",
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
      "Turn Google searches into business opportunities. Comprehensive technical SEO, keyword research, on-page optimization, content clusters, and local Google Maps visibility.",
  };

  return (
    <div className="bg-[#FFF9F6] text-[#11121D] selection:bg-[#FF087F]/20 selection:text-[#11121D]">
      <SeoHead
        title="Search Engine Optimization (SEO) Agency | CoreClick Varanasi"
        description="Get found. Get chosen. Grow organically. Technical SEO, commercial keyword research, Core Web Vitals optimization, and Google Maps 3-Pack authority."
        canonicalPath="/services/seo/"
        structuredData={structuredData}
      />

      {/* =========================================================================
          1. HERO — SEARCH VISIBILITY (SPLIT LAYOUT)
      ========================================================================= */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-[#11121D]/10 bg-[#FFF9F6]">
        {/* Soft Ambient Radial Glow */}
        <div
          aria-hidden="true"
          className="absolute -top-32 right-1/4 w-[650px] h-[400px] bg-gradient-to-br from-[#FF8A24]/12 via-[#FF6038]/10 to-[#FF087F]/10 blur-[130px] pointer-events-none rounded-full"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services/" },
              { label: "Search Engine Optimization (SEO)" },
            ]}
            className="mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFF0E9] border border-[#FF6038]/20 text-[#FF6038] text-xs font-mono font-bold uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" />
                <span>ORGANIC GROWTH / SEARCH ENGINE OPTIMIZATION</span>
              </div>

              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[56px] text-[#11121D] tracking-tight leading-[1.12]">
                Get Found. Get Chosen.{" "}
                <span className="text-gradient-brand">Grow Organically.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#343644] leading-relaxed font-normal max-w-xl">
                Turn Google searches into business opportunities. We combine technical SEO, strategic keyword research, high-quality content and local search optimization to help your business attract the right customers.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={scrollToEnquiry}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#11121D] text-white font-extrabold text-sm shadow-xl hover:bg-black transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Improve My Google Rankings</span>
                  <ArrowRight className="w-4 h-4 text-[#FF8A24]" />
                </button>

                <a
                  href={`https://wa.me/918707414150?text=${encodeURIComponent(
                    "Hello CoreClick, I would like to discuss an SEO audit and organic Google rankings for my website."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white border-2 border-[#11121D] text-[#11121D] font-extrabold text-sm hover:bg-[#FFF0E9] transition-all hover:border-[#FF6038] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#FF6038]" />
                  <span>Quick WhatsApp Chat</span>
                </a>
              </div>

              {/* Trust Signals */}
              <div className="pt-4 border-t border-[#11121D]/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#727383] font-medium">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% White-Hat Ethical SEO</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Google Search Console & GA4 Audits</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Local Maps 3-Pack Specialization</span>
                </div>
              </div>
            </div>

            {/* Right Side — Custom SEO Dashboard Intelligence Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative bg-white rounded-3xl border-2 border-[#11121D] p-6 sm:p-7 shadow-[10px_10px_0px_0px_#11121D] overflow-hidden">
                {/* Search Console Header Simulation */}
                <div className="flex items-center justify-between pb-4 border-b border-[#11121D]/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-gradient-brand text-white flex items-center justify-center font-bold text-xs shadow-xs">
                      <Search className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-extrabold text-[#11121D] uppercase tracking-wider">
                        SEARCH CONSOLE INTELLIGENCE
                      </div>
                      <div className="text-[11px] text-[#727383]">Domain Authority & Indexation Health</div>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-[#FFF0E9] text-[#FF6038] font-mono text-[10px] font-extrabold uppercase">
                    LIVE GSC SYNC
                  </span>
                </div>

                {/* Simulated Google Search Result Card */}
                <div className="my-4 p-3.5 rounded-2xl bg-[#FFF9F6] border border-[#11121D]/10 space-y-1">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-[#727383]">
                    <span className="w-4 h-4 rounded-full bg-[#11121D] text-white flex items-center justify-center text-[9px] font-bold">
                      G
                    </span>
                    <span className="truncate text-[#11121D]">https://yourwebsite.com › services › organic-growth</span>
                    <span className="ml-auto text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                      #1 RANK
                    </span>
                  </div>
                  <div className="font-heading font-extrabold text-sm text-[#11121D] leading-snug">
                    Best Digital Growth & Search Agency | Proven ROI
                  </div>
                  <div className="text-[11px] text-[#727383] line-clamp-2 leading-relaxed">
                    Dominate high-commercial intent keywords. Sub-1.5s mobile speed, structured schema, and verified local Google Maps 3-Pack visibility...
                  </div>
                </div>

                {/* 3 Metric Mini Cards */}
                <div className="grid grid-cols-3 gap-2.5 mb-4">
                  <div className="p-3 rounded-2xl bg-[#FFF9F6] border border-[#11121D]/10 text-center">
                    <div className="text-[9px] font-mono font-bold text-[#FF8A24] uppercase">ORGANIC CLICKS</div>
                    <div className="text-lg sm:text-xl font-heading font-extrabold text-[#11121D] mt-0.5">
                      48.2K
                    </div>
                    <div className="text-[9px] text-emerald-600 font-bold">+184% YoY</div>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#FFF0E9] border border-[#11121D]/10 text-center">
                    <div className="text-[9px] font-mono font-bold text-[#FF6038] uppercase">TOP 10 KEYWORDS</div>
                    <div className="text-lg sm:text-xl font-heading font-extrabold text-[#11121D] mt-0.5">
                      184
                    </div>
                    <div className="text-[9px] text-[#727383]">42 in Top 3</div>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#F1EAFE] border border-[#11121D]/10 text-center">
                    <div className="text-[9px] font-mono font-bold text-[#7000FF] uppercase">TECH HEALTH</div>
                    <div className="text-lg sm:text-xl font-heading font-extrabold text-[#11121D] mt-0.5">
                      98/100
                    </div>
                    <div className="text-[9px] text-emerald-700 font-bold">CWV Passed</div>
                  </div>
                </div>

                {/* Organic Traffic Curve Simulation */}
                <div className="p-4 rounded-2xl bg-[#FFF9F6] border border-[#11121D]/10 relative">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#727383] mb-2">
                    <span className="font-bold text-[#11121D]">Organic Impressions Growth</span>
                    <span className="text-[#FF6038] font-bold">● Average Position: 4.2</span>
                  </div>

                  <div className="h-28 w-full relative flex items-end">
                    <svg viewBox="0 0 400 100" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="seoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#FF8A24" />
                          <stop offset="50%" stopColor="#FF6038" />
                          <stop offset="100%" stopColor="#FF087F" />
                        </linearGradient>
                      </defs>

                      <path
                        d="M0,90 Q90,80 160,55 T290,25 T400,8"
                        fill="none"
                        stroke="url(#seoGradient)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />

                      <circle cx="160" cy="55" r="4" fill="#FF8A24" stroke="#FFFFFF" strokeWidth="2" />
                      <circle cx="290" cy="25" r="4" fill="#FF6038" stroke="#FFFFFF" strokeWidth="2" />
                      <circle cx="400" cy="8" r="4.5" fill="#FF087F" stroke="#FFFFFF" strokeWidth="2" />
                    </svg>
                  </div>

                  <div className="flex justify-between text-[10px] font-mono text-[#727383] mt-2 pt-2 border-t border-[#11121D]/5">
                    <span>Month 1: Audit & Index</span>
                    <span>Month 3: Keyword Lift</span>
                    <span>Month 6: High Traffic Scale</span>
                  </div>
                </div>

                <div className="mt-3 text-[10px] font-mono text-[#727383] text-center">
                  *Illustrative Search Intelligence Model based on CoreClick strategic benchmarks.
                </div>
              </div>

              {/* Floating Badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#11121D] text-white px-4 py-2 rounded-2xl border border-white/20 shadow-xl items-center gap-2 text-xs font-mono font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero Black-Hat Penalties</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SEARCH ECOSYSTEM MARQUEE STRIP
      ========================================================================= */}
      <section className="py-7 bg-[#FFF0E9] border-b border-[#11121D]/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-3.5">
            <span className="text-xs font-mono font-extrabold text-[#FF6038] uppercase tracking-wider">
              ENTERPRISE SEARCH ENGINE STACK
            </span>
            <span className="text-xs text-[#727383] hidden sm:inline">
              Industry-standard diagnostic & analytics protocols
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {ECOSYSTEM_PLATFORMS.map((tech) => (
              <div
                key={tech.name}
                className="bg-white p-3 rounded-2xl border border-[#11121D]/15 hover:border-[#FF6038] hover:shadow-xs transition-all cursor-default"
              >
                <div className="text-xs font-heading font-extrabold text-[#11121D] truncate">
                  {tech.name}
                </div>
                <div className="text-[10px] text-[#727383] mt-0.5 line-clamp-1">{tech.role}</div>
                <span className="inline-block mt-1 text-[9px] font-mono font-bold text-[#FF6038] bg-[#FFF0E9] px-1.5 py-0.5 rounded">
                  {tech.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. SEO CHALLENGES VS CORECLICK METHOD ("WHY YOUR WEBSITE ISN'T GETTING FOUND")
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF9F6] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-extrabold text-[#FF6038] uppercase tracking-wider">
              DIAGNOSTIC ANALYSIS
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#11121D] mt-1 tracking-tight">
              Why Your Website Isn't <span className="text-gradient-brand">Getting Found.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#343644] mt-3 leading-relaxed">
              Google doesn't rank websites simply because they exist. Without disciplined technical health and topical authority, search algorithms ignore your domain.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* The Challenges */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border-2 border-[#11121D] shadow-[6px_6px_0px_0px_#11121D] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#11121D]/10">
                  <div className="flex items-center gap-2 text-xs font-mono font-extrabold text-[#11121D] uppercase tracking-wider">
                    <XCircle className="w-4 h-4 text-[#FF087F]" />
                    <span>COMMON SEO CHALLENGES</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#727383]">The Organic Bottlenecks</span>
                </div>

                <div className="space-y-3.5">
                  {[
                    {
                      title: "Poor Keyword Targeting & Low Search Visibility",
                      desc: "Optimizing for broad, low-intent terms or industry jargon that actual customers never type into Google.",
                    },
                    {
                      title: "Technical Issues Preventing Proper Crawling & Indexing",
                      desc: "Robots.txt blockers, broken canonical tags, and 404 loops preventing Googlebot from discovering pages.",
                    },
                    {
                      title: "Slow-Loading Websites & Poor Core Web Vitals",
                      desc: "Bloated plugins and uncompressed images causing mobile bounce rates that trigger algorithm demotions.",
                    },
                    {
                      title: "Thin or Irrelevant Website Content",
                      desc: "Short 200-word service descriptions lacking the topical depth and E-E-A-T signals Google rewards.",
                    },
                    {
                      title: "Weak Internal Linking & Domain Authority",
                      desc: "Isolated orphan pages where link equity cannot flow to high-converting product or service URLs.",
                    },
                    {
                      title: "Poor Local Google Maps Visibility",
                      desc: "Unclaimed or inconsistent Google Business Profiles failing to appear in local search 3-Packs.",
                    },
                  ].map((chal, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-[#FFF9F6] border border-[#11121D]/10 hover:border-[#FF087F] transition-all"
                    >
                      <h4 className="font-heading font-extrabold text-xs sm:text-sm text-[#11121D]">
                        {chal.title}
                      </h4>
                      <p className="text-xs text-[#727383] mt-1 leading-relaxed font-normal">
                        {chal.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#11121D]/10 text-xs text-[#727383] font-mono">
                Result: Invisible on Google, losing active buyers to faster competitors.
              </div>
            </div>

            {/* The CoreClick Method */}
            <div className="bg-[#FFF0E9] rounded-3xl p-7 sm:p-9 border-2 border-[#11121D] shadow-[6px_6px_0px_0px_#FF6038] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#11121D]/10">
                  <div className="flex items-center gap-2 text-xs font-mono font-extrabold text-[#FF6038] uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>THE CORECLICK SEO METHOD</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-800 font-bold">Engineering Approach</span>
                </div>

                <div className="space-y-3.5">
                  {[
                    {
                      title: "Technical SEO Audits & Prioritized Fixes",
                      desc: "We eliminate crawl errors, resolve duplicate content, and ensure 100% clean indexation status.",
                    },
                    {
                      title: "Commercial Keyword Research & Search Intent Mapping",
                      desc: "Targeting high-value commercial queries where searchers have active purchase intent.",
                    },
                    {
                      title: "Content Clusters & Topical Authority Development",
                      desc: "Architecting interconnected topic pillars that signal deep subject-matter expertise to Google.",
                    },
                    {
                      title: "On-Page Optimization & Structured Data",
                      desc: "Precision title tags, meta descriptions, and rich JSON-LD schema that win rich Google snippet real estate.",
                    },
                    {
                      title: "Strategic Internal Linking",
                      desc: "Guiding users and search bots seamlessly to your highest-converting service and product landing pages.",
                    },
                    {
                      title: "Local SEO & Google Business Profile Optimization",
                      desc: "Dominating local map packs in Varanasi and target cities with verified review velocity and local citations.",
                    },
                  ].map((sol, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-white border border-[#11121D]/10 hover:border-[#FF6038] hover:shadow-xs transition-all"
                    >
                      <h4 className="font-heading font-extrabold text-xs sm:text-sm text-[#11121D]">
                        {sol.title}
                      </h4>
                      <p className="text-xs text-[#343644] mt-1 leading-relaxed font-normal">
                        {sol.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#11121D]/10 text-xs text-emerald-800 font-bold font-mono">
                Result: Sustainable compounding organic traffic and qualified customer inquiries.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. SEO SERVICES — 6 PREMIUM CARDS
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF0E9] relative border-y border-[#11121D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-extrabold text-[#FF6038] uppercase tracking-wider">
              FULL-STACK SEARCH ARCHITECTURE
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#11121D] mt-1 tracking-tight">
              Every Layer of Search. One Growth Strategy.
            </h2>
            <p className="text-sm text-[#343644] mt-2">
              From technical server hygiene to long-tail content clusters, we cover every component of organic search dominance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SEO_SERVICES.map((srv) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={srv.num}
                  className="bg-white rounded-3xl p-7 border-2 border-[#11121D] shadow-[6px_6px_0px_0px_#11121D] hover:shadow-[10px_10px_0px_0px_#FF6038] hover:border-[#FF6038] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-2xl font-black text-[#FF8A24]">{srv.num}</span>
                      <div className="w-10 h-10 rounded-2xl bg-[#FFF0E9] text-[#FF6038] flex items-center justify-center font-bold">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-heading font-extrabold text-xl text-[#11121D] leading-snug">
                      {srv.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#343644] mt-2 leading-relaxed font-normal">
                      {srv.desc}
                    </p>

                    <div className="mt-5 pt-4 border-t border-[#11121D]/10 space-y-1.5">
                      {srv.deliverables.map((deliv, didx) => (
                        <div key={didx} className="flex items-center gap-2 text-xs text-[#727383]">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#11121D]/10">
                    <Link
                      to={srv.link}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#11121D] hover:text-[#FF6038] transition-colors"
                    >
                      <span>Explore Capability</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. SEO INTELLIGENCE — VISUAL SHOWCASE (SIGNATURE SECTION)
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#F1EAFE] relative border-b border-[#11121D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-extrabold text-[#7000FF] uppercase tracking-wider">
              QUANTITATIVE SEARCH DASHBOARD
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#11121D] mt-1 tracking-tight">
              Search Data That Drives <span className="text-gradient-brand">Smarter Decisions.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#343644] mt-2.5 leading-relaxed">
              We monitor crawl data, query intent, Core Web Vitals, and local Google Maps metrics in real time to guide every content and technical decision.
            </p>
          </div>

          {/* Interactive Showcase Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {[
              { id: "performance", label: "01. Organic Performance" },
              { id: "keywords", label: "02. Keyword Intelligence" },
              { id: "technical", label: "03. Technical Health" },
              { id: "local", label: "04. Local Search Visibility" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveIntelTab(tab.id as any)}
                className={`px-5 py-3 rounded-2xl text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap border ${
                  activeIntelTab === tab.id
                    ? "bg-[#11121D] text-white border-[#11121D] shadow-md"
                    : "bg-white text-[#343644] border-[#11121D]/15 hover:border-[#11121D]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="bg-white rounded-3xl border-2 border-[#11121D] p-6 sm:p-10 shadow-[10px_10px_0px_0px_#11121D]">
            {/* 1. Organic Performance */}
            {activeIntelTab === "performance" && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-[#11121D]/10 pb-4">
                  <div>
                    <h3 className="font-heading font-extrabold text-xl text-[#11121D]">
                      Organic Search Performance & Growth Trajectory
                    </h3>
                    <p className="text-xs text-[#727383] mt-0.5">
                      Verified search clicks, impression volume, and average query rank.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#FFF0E9] text-[#FF6038]">
                    SEARCH CONSOLE ATTRIBUTION
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-[#FFF9F6] border border-[#11121D]/10">
                    <div className="text-[10px] font-mono font-bold text-[#FF8A24] uppercase">ORGANIC CLICKS</div>
                    <div className="text-2xl font-heading font-extrabold text-[#11121D] mt-1">48,200</div>
                    <div className="text-[10px] text-emerald-600 font-bold mt-1">+184% YoY Growth</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FFF9F6] border border-[#11121D]/10">
                    <div className="text-[10px] font-mono font-bold text-[#FF6038] uppercase">SEARCH IMPRESSIONS</div>
                    <div className="text-2xl font-heading font-extrabold text-[#11121D] mt-1">640,000</div>
                    <div className="text-[10px] text-[#727383] mt-1">High Intent Queries</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FFF9F6] border border-[#11121D]/10">
                    <div className="text-[10px] font-mono font-bold text-[#FF087F] uppercase">AVG POSITION</div>
                    <div className="text-2xl font-heading font-extrabold text-[#11121D] mt-1">4.2</div>
                    <div className="text-[10px] text-emerald-600 font-bold mt-1">Top of Page 1</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FFF9F6] border border-[#11121D]/10">
                    <div className="text-[10px] font-mono font-bold text-[#7000FF] uppercase">ORGANIC CTR</div>
                    <div className="text-2xl font-heading font-extrabold text-[#11121D] mt-1">7.5%</div>
                    <div className="text-[10px] text-[#727383] mt-1">High-CTR Metadata</div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Keyword Intelligence */}
            {activeIntelTab === "keywords" && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-[#11121D]/10 pb-4">
                  <div>
                    <h3 className="font-heading font-extrabold text-xl text-[#11121D]">
                      Commercial Keyword Ranking Distribution
                    </h3>
                    <p className="text-xs text-[#727383] mt-0.5">
                      Segmentation across commercial, transactional, and informational search intent.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#FFE5ED] text-[#FF087F]">
                    INTENT MAPPING
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="p-4 rounded-2xl bg-[#FFF9F6] border border-[#11121D]/10">
                    <div className="text-xs font-bold text-[#FF8A24] font-mono uppercase">POSITIONS 1–3</div>
                    <div className="text-2xl font-heading font-extrabold text-[#11121D] mt-1">42 Keywords</div>
                    <p className="text-xs text-[#727383] mt-2">
                      High-converting commercial terms driving the majority of inbound inquiries.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FFF9F6] border border-[#11121D]/10">
                    <div className="text-xs font-bold text-[#FF6038] font-mono uppercase">POSITIONS 4–10</div>
                    <div className="text-2xl font-heading font-extrabold text-[#11121D] mt-1">142 Keywords</div>
                    <p className="text-xs text-[#727383] mt-2">
                      Page 1 search terms advancing through content optimization and internal links.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FFF9F6] border border-[#11121D]/10">
                    <div className="text-xs font-bold text-[#7000FF] font-mono uppercase">SEARCH INTENT SPLIT</div>
                    <div className="text-xs font-bold text-[#11121D] mt-2 space-y-1">
                      <div>● Commercial Intent: 45%</div>
                      <div>● Transactional Intent: 25%</div>
                      <div>● Informational Intent: 30%</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. Technical Health */}
            {activeIntelTab === "technical" && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-[#11121D]/10 pb-4">
                  <div>
                    <h3 className="font-heading font-extrabold text-xl text-[#11121D]">
                      Core Web Vitals & Technical Crawl Hygiene
                    </h3>
                    <p className="text-xs text-[#727383] mt-0.5">
                      Sub-1.5s mobile speed, clean indexation, and valid schema markup.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#F1EAFE] text-[#7000FF]">
                    PAGE SPEED 98/100
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-[#FFF9F6] border border-[#11121D]/10">
                    <div className="text-[10px] font-mono font-bold text-emerald-700 uppercase">LCP (LOAD SPEED)</div>
                    <div className="text-xl font-heading font-extrabold text-[#11121D] mt-1">1.18s</div>
                    <div className="text-[10px] text-emerald-600 font-bold">Good (&lt; 2.5s)</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FFF9F6] border border-[#11121D]/10">
                    <div className="text-[10px] font-mono font-bold text-emerald-700 uppercase">INP (RESPONSIVENESS)</div>
                    <div className="text-xl font-heading font-extrabold text-[#11121D] mt-1">42ms</div>
                    <div className="text-[10px] text-emerald-600 font-bold">Good (&lt; 200ms)</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FFF9F6] border border-[#11121D]/10">
                    <div className="text-[10px] font-mono font-bold text-emerald-700 uppercase">CLS (STABILITY)</div>
                    <div className="text-xl font-heading font-extrabold text-[#11121D] mt-1">0.002</div>
                    <div className="text-[10px] text-emerald-600 font-bold">Zero Layout Shift</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FFF9F6] border border-[#11121D]/10">
                    <div className="text-[10px] font-mono font-bold text-[#FF087F] uppercase">STRUCTURED DATA</div>
                    <div className="text-xl font-heading font-extrabold text-[#11121D] mt-1">100% Valid</div>
                    <div className="text-[10px] text-[#727383]">JSON-LD Rich Snippets</div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. Local Search Visibility */}
            {activeIntelTab === "local" && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-[#11121D]/10 pb-4">
                  <div>
                    <h3 className="font-heading font-extrabold text-xl text-[#11121D]">
                      Google Maps 3-Pack & Regional Citations
                    </h3>
                    <p className="text-xs text-[#727383] mt-0.5">
                      Varanasi, Prayagraj, and regional business profile dominance.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#FFF0E9] text-[#FF6038]">
                    MAPS 3-PACK
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="p-4 rounded-2xl bg-[#FFF9F6] border border-[#11121D]/10">
                    <div className="text-xs font-bold text-[#FF8A24] font-mono uppercase">MAPS 3-PACK VISIBILITY</div>
                    <div className="text-2xl font-heading font-extrabold text-[#11121D] mt-1">#1 Rank</div>
                    <p className="text-xs text-[#727383] mt-2">
                      Appearing in the top 3 map results for city and neighborhood-specific searches.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FFF9F6] border border-[#11121D]/10">
                    <div className="text-xs font-bold text-[#FF6038] font-mono uppercase">DIRECT PHONE CALLS</div>
                    <div className="text-2xl font-heading font-extrabold text-[#11121D] mt-1">+240%</div>
                    <p className="text-xs text-[#727383] mt-2">
                      Inbound calls initiated directly from Google Business Profile searchers.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FFF9F6] border border-[#11121D]/10">
                    <div className="text-xs font-bold text-emerald-800 font-mono uppercase">REVIEW VELOCITY</div>
                    <div className="text-2xl font-heading font-extrabold text-[#11121D] mt-1">4.9 ★★★★★</div>
                    <p className="text-xs text-[#727383] mt-2">
                      Keyword-rich authentic customer reviews reinforcing localized search relevance.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 pt-3 border-t border-[#11121D]/10 text-[10px] font-mono text-[#727383] text-center">
              *Clearly labeled illustrative search data. CoreClick customizes data dashboards for each client's specific industry and search market.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. SEO DELIVERABLES — ASYMMETRICAL 6-CARD GRID
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF9F6] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-extrabold text-[#FF6038] uppercase tracking-wider">
              CONCRETE OUTPUTS
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#11121D] mt-1 tracking-tight">
              What You Receive With SEO.
            </h2>
            <p className="text-sm text-[#343644] mt-2">
              Every deliverable is documented, transparent and aligned with your business growth objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DELIVERABLES.map((deliv, idx) => (
              <div
                key={deliv.num}
                className={`bg-white rounded-3xl p-7 border-2 border-[#11121D] shadow-[6px_6px_0px_0px_#11121D] hover:shadow-[10px_10px_0px_0px_#FF6038] hover:border-[#FF6038] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${
                  deliv.size === "large" ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="font-mono text-xl font-black text-[#FF8A24] mb-3">{deliv.num}</div>
                  <h3 className="font-heading font-extrabold text-lg text-[#11121D] leading-snug">
                    {deliv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#727383] mt-2 leading-relaxed font-normal">
                    {deliv.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#11121D]/10 flex items-center gap-1.5 text-xs font-bold text-[#FF6038]">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Itemized Strategic Deliverable</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. SEO EXECUTION WORKFLOW (4-STAGE HORIZONTAL TIMELINE)
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF0E9] relative border-y border-[#11121D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-extrabold text-[#FF6038] uppercase tracking-wider">
              ROADMAP TO FIRST PAGE
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#11121D] mt-1 tracking-tight">
              How We Build Your Organic Growth.
            </h2>
            <p className="text-sm text-[#343644] mt-2">
              A disciplined four-stage engineering framework that systematically eliminates technical barriers and builds topical authority.
            </p>
          </div>

          <div className="relative">
            {/* Horizontal Line on Desktop */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute top-8 left-12 right-12 h-1 bg-gradient-to-r from-[#FF8A24] via-[#FF6038] to-[#FF087F] z-0 opacity-40"
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
                        {step.timing}
                      </span>
                    </div>

                    <h3 className="font-heading font-extrabold text-lg text-[#11121D]">
                      {step.title}
                    </h3>

                    <p className="text-xs text-[#727383] mt-2 leading-relaxed font-normal">
                      {step.desc}
                    </p>

                    <div className="mt-5 pt-3 border-t border-[#11121D]/10 space-y-1">
                      {step.items.map((it, iidx) => (
                        <div key={iidx} className="flex items-center gap-1.5 text-[11px] text-[#343644]">
                          <span className="w-1 h-1 rounded-full bg-[#FF6038]" />
                          <span>{it}</span>
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
          8. LOCAL SEO SPOTLIGHT — "OWN YOUR LOCAL SEARCH PRESENCE"
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF9F6] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFF0E9] text-[#FF6038] text-xs font-mono font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-[#FF8A24]" />
                <span>LOCAL SEARCH LEADERSHIP</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#11121D] tracking-tight leading-tight">
                Own Your Local <br />
                <span className="text-gradient-brand">Search Presence.</span>
              </h2>

              <p className="text-base text-[#343644] leading-relaxed font-normal">
                Help customers discover your business when they search for products and services in their city. Mobile searchers in regional hubs like Varanasi have exceptionally high same-day conversion intent.
              </p>

              <div className="space-y-3.5 pt-2">
                {[
                  {
                    title: "Google Business Profile Optimization",
                    desc: "Complete profile attributes, high-res photos, and precise service categorizations.",
                  },
                  {
                    title: "Local Keyword Research & Intent Mapping",
                    desc: "Targeting queries like 'near me', 'in Varanasi', and neighborhood-specific searches.",
                  },
                  {
                    title: "Google Maps 3-Pack Authority",
                    desc: "Appearing in the top 3 coveted local map slots that receive over 70% of local phone clicks.",
                  },
                  {
                    title: "Local Business Directory Citations",
                    desc: "Uniform Name, Address, and Phone (NAP) citations across Justdial, IndiaMART, and regional portals.",
                  },
                  {
                    title: "Systematic Review Velocity Strategy",
                    desc: "Frictionless post-service workflows that gather authentic, keyword-rich 5-star Google reviews.",
                  },
                  {
                    title: "Location-Based Landing Page Optimization",
                    desc: "Dedicated city and service landing pages capturing regional search traffic across Eastern UP.",
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

              <div className="pt-2">
                <button
                  type="button"
                  onClick={scrollToEnquiry}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#11121D] text-white font-extrabold text-xs hover:bg-black transition-all shadow-md cursor-pointer"
                >
                  <span>Improve My Local Visibility</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF8A24]" />
                </button>
              </div>
            </div>

            {/* Right Side — Google Maps 3-Pack Interface Simulation */}
            <div className="lg:col-span-6 bg-white rounded-3xl border-2 border-[#11121D] p-6 sm:p-8 shadow-[10px_10px_0px_0px_#11121D] relative">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#11121D]/10">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF6038]">
                  <MapPin className="w-4 h-4" />
                  <span>LOCAL GOOGLE MAPS 3-PACK PREVIEW</span>
                </div>
                <span className="text-[10px] font-mono text-[#727383]">Query: "best agency in varanasi"</span>
              </div>

              {/* Mock Map Header Strip */}
              <div className="h-32 rounded-2xl bg-[#FFF0E9] border border-[#11121D]/10 mb-4 p-4 relative overflow-hidden flex flex-col justify-between">
                <div className="flex justify-between items-center text-xs font-mono text-[#11121D]">
                  <span className="font-bold">📍 Varanasi, Uttar Pradesh, India</span>
                  <span className="bg-white px-2 py-0.5 rounded font-bold text-[#FF6038] text-[10px]">
                    LIVE 3-PACK
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#FF087F] animate-ping" />
                  <span className="text-xs font-extrabold text-[#11121D]">
                    CoreClick Digital HQ · Sigra, Varanasi
                  </span>
                </div>
              </div>

              {/* 3 Local Listings */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-[#FFF9F6] border-2 border-[#FF6038] shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-extrabold text-sm text-[#11121D]">
                      CoreClick – Digital Growth Agency
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      #1 RANK
                    </span>
                  </div>
                  <div className="text-xs text-[#FF8A24] font-bold mt-1">4.9 ★★★★★ (80+ Verified Reviews)</div>
                  <div className="text-[11px] text-[#727383] mt-0.5">
                    Marketing consultant in Varanasi, Uttar Pradesh · Open Now · +91 87074 14150
                  </div>
                  <div className="mt-2 flex gap-2">
                    <span className="text-[10px] font-mono bg-white border border-[#11121D]/10 px-2 py-0.5 rounded text-[#11121D]">
                      Website
                    </span>
                    <span className="text-[10px] font-mono bg-white border border-[#11121D]/10 px-2 py-0.5 rounded text-[#11121D]">
                      Directions
                    </span>
                    <span className="text-[10px] font-mono bg-white border border-[#11121D]/10 px-2 py-0.5 rounded text-[#11121D]">
                      Call
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#11121D]/10 opacity-60">
                  <div className="text-xs font-bold text-[#11121D]">Competitor Service B</div>
                  <div className="text-[11px] text-[#727383]">4.1 ★★★★☆ · 12 reviews · Sigra</div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#11121D]/10 opacity-40">
                  <div className="text-xs font-bold text-[#11121D]">Competitor Service C</div>
                  <div className="text-[11px] text-[#727383]">3.8 ★★★☆☆ · 5 reviews · Cantt</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. SEO RESULTS — WHAT MATTERS
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF0E9] relative border-y border-[#11121D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-extrabold text-[#FF6038] uppercase tracking-wider">
              REAL BUSINESS METRICS
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#11121D] mt-1 tracking-tight">
              Rankings Are Important. <br />
              <span className="text-gradient-brand">Business Growth Matters More.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#343644] mt-3 leading-relaxed">
              We don't optimize for hollow vanity search terms that produce zero enquiries. We focus on four concrete indicators that move your bottom line.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Organic Traffic",
                label: "High-Intent Visitors",
                desc: "Qualified prospective buyers who discover your website while actively searching for your exact commercial products or services.",
                metric: "Compounding Traffic",
                icon: Globe,
              },
              {
                title: "Keyword Visibility",
                label: "Commercial Position Dominance",
                desc: "Sustained high placement across high-converting search queries, outranking regional and national competitors.",
                metric: "Top 3 Real Estate",
                icon: Search,
              },
              {
                title: "Engagement Quality",
                label: "Audience Dwell Time",
                desc: "Meaningful interaction on fast-loading landing pages with zero content friction, low bounce rates, and high page depth.",
                metric: "Sub-1.5s Core Vitals",
                icon: Zap,
              },
              {
                title: "Real Conversions",
                label: "Direct Phone Calls & Inquiries",
                desc: "Verified lead submissions, consultation bookings, and phone calls generated without ongoing ad spend.",
                metric: "Permanent ROAS Lift",
                icon: Target,
              },
            ].map((kpi, idx) => {
              const IconComponent = kpi.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#11121D] shadow-[6px_6px_0px_0px_#11121D] flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-[#FFF0E9] text-[#FF6038] flex items-center justify-center font-bold mb-4">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="text-[10px] font-mono font-bold text-[#FF8A24] uppercase">
                      {kpi.label}
                    </div>
                    <h3 className="font-heading font-extrabold text-xl text-[#11121D] mt-1">
                      {kpi.title}
                    </h3>
                    <p className="text-xs text-[#727383] mt-2 leading-relaxed font-normal">
                      {kpi.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#11121D]/10 text-xs font-mono font-extrabold text-emerald-800 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>{kpi.metric}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. WHY CORECLICK — EDITORIAL SPLIT SECTION
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF9F6] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFF0E9] text-[#FF6038] text-xs font-mono font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF8A24]" />
                <span>TECHNICAL LEADERSHIP</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#11121D] tracking-tight leading-tight">
                Technical Precision Meets{" "}
                <span className="text-gradient-brand">Growth Strategy.</span>
              </h2>

              <p className="text-base text-[#343644] leading-relaxed font-normal">
                SEO is not magic or secret tricks. It is rigorous technical engineering, search intent mapping, and authoritative content production executed consistently.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: "Data-Led Decision Making",
                    desc: "Every recommendation is backed by real Google Search Console query logs, crawl telemetry, and competitor gap data.",
                  },
                  {
                    title: "Technical & Content SEO Expertise Under One Roof",
                    desc: "Our team writes clean schema markup, fixes server caching, and crafts compelling human editorial content.",
                  },
                  {
                    title: "Commercial Search Intent Focus",
                    desc: "We prioritize keywords that attract active buyers with commercial intent rather than casual window shoppers.",
                  },
                  {
                    title: "Transparent & Honest Reporting",
                    desc: "Live 24/7 Looker Studio dashboards tracking impressions, position changes, and verified inquiries.",
                  },
                  {
                    title: "Ethical, Sustainable White-Hat Practices",
                    desc: "Zero spam links or black-hat schemes that risk catastrophic Google manual penalties.",
                  },
                  {
                    title: "Continuous Algorithm Adaptation",
                    desc: "We continuously monitor and adjust to Google Core, Helpful Content, and Spam algorithm updates.",
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

            {/* Right Card — CoreClick Scorecard */}
            <div className="lg:col-span-6 bg-white rounded-3xl border-2 border-[#11121D] p-7 sm:p-9 shadow-[10px_10px_0px_0px_#11121D]">
              <div className="border-b border-[#11121D]/10 pb-4 mb-6">
                <span className="font-mono text-xs font-extrabold text-[#FF6038] uppercase tracking-wider">
                  STRATEGIC SEARCH COMPARISON
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-[#11121D] mt-1">
                  Commodity Agencies vs CoreClick
                </h3>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    aspect: "Keyword Strategy",
                    others: "Generic low-volume keywords",
                    coreclick: "High-commercial intent query clusters",
                  },
                  {
                    aspect: "Technical Health",
                    others: "Ignored (only writes blog posts)",
                    coreclick: "Sub-1.5s Core Web Vitals & JSON-LD schema",
                  },
                  {
                    aspect: "Reporting Standards",
                    others: "Vague monthly PDF summary",
                    coreclick: "Live GSC/GA4 dashboard + monthly video teardown",
                  },
                  {
                    aspect: "Local Maps Focus",
                    others: "Basic claim without review strategy",
                    coreclick: "Complete 3-Pack optimization & citation velocity",
                  },
                  {
                    aspect: "Link Building",
                    others: "Spammy blog comments & PBNs",
                    coreclick: "White-hat editorial mentions & digital PR",
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
          11. SEO FAQ (100% LEGIBLE WITH DARK NAVY & GREY CONTRAST)
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF9F6] relative border-t border-[#11121D]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-mono font-extrabold text-[#FF6038] uppercase tracking-wider">
              HONEST & CLEAR ANSWERS
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#11121D] mt-1 tracking-tight">
              Search Engine Optimization FAQs
            </h2>
            <p className="text-sm text-[#727383] mt-2">
              Everything you need to know about timelines, keyword research, rankings, and working with CoreClick.
            </p>
          </div>

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
          12. RELATED GROWTH SERVICES (4 CARDS)
      ========================================================================= */}
      <section className="py-16 bg-[#FFF0E9] border-t-2 border-[#11121D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono font-extrabold text-[#FF6038] uppercase tracking-wider">
                COMPLEMENTARY DISCIPLINES
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-[#11121D] mt-1">
                Related Growth Services
              </h3>
            </div>

            <Link
              to="/services/"
              className="text-xs font-bold text-[#FF6038] hover:text-[#FF8A24] flex items-center gap-1"
            >
              <span>View All 12 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RELATED_SERVICES.map((rel) => (
              <Link
                key={rel.slug}
                to={`/services/${rel.slug}/`}
                className="group bg-white p-6 rounded-3xl border-2 border-[#11121D]/15 hover:border-[#FF6038] hover:shadow-[6px_6px_0px_0px_#11121D] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#FF8A24] uppercase">
                    {rel.badge}
                  </span>
                  <h4 className="font-heading font-extrabold text-base text-[#11121D] group-hover:text-[#FF6038] transition-colors mt-1.5">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[#727383] mt-2 line-clamp-2 leading-relaxed">
                    {rel.desc}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-[#11121D]/10 flex items-center justify-between text-xs font-extrabold text-[#11121D] group-hover:text-[#FF6038] transition-colors">
                  <span>Learn more</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          13. FINAL CTA SECTION (CREAM & PEACH ORGANIC TRANSITION)
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF9F6] border-t-2 border-[#11121D]/10 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-20 left-1/3 w-[500px] h-[300px] bg-gradient-to-r from-[#FF8A24]/10 via-[#FF6038]/10 to-[#FF087F]/10 blur-[130px] pointer-events-none rounded-full"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFF0E9] text-[#FF6038] text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-[#FF6038]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" />
            <span>ORGANIC SEARCH DOMINANCE</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#11121D] tracking-tight leading-tight">
            Your Next Customers Are Already Searching.
          </h2>

          <p className="text-base sm:text-lg text-[#343644] mt-4 max-w-2xl mx-auto leading-relaxed font-normal">
            Make sure they find your business. Build sustainable organic visibility with CoreClick.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={scrollToEnquiry}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#11121D] text-white font-extrabold text-sm shadow-xl hover:bg-black transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Start Your SEO Project</span>
              <ArrowRight className="w-4 h-4 text-[#FF8A24]" />
            </button>

            <a
              href={`https://wa.me/918707414150?text=${encodeURIComponent(
                "Hello CoreClick, I would like to chat about SEO services for my business."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border-2 border-[#11121D] text-[#11121D] font-extrabold text-sm hover:bg-[#FFF0E9] transition-all hover:border-[#FF6038] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          14. DEDICATED ENQUIRY FORM SECTION
      ========================================================================= */}
      <section id="enquiry-section" className="py-16 md:py-24 bg-[#FFF0E9] relative border-t border-[#11121D]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SeoEnquiryForm />
        </div>
      </section>
    </div>
  );
};
