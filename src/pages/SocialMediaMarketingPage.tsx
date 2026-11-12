import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Sparkles,
  Instagram,
  Video,
  Layers,
  Palette,
  TrendingUp,
  MessageCircle,
  Play,
  Heart,
  Bookmark,
  Share2,
  Calendar,
  Eye,
  Sliders,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Flame,
  BookOpen,
  Award,
  BarChart2,
} from "lucide-react";
import { SeoHead } from "../components/common/SeoHead";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { SocialMediaMarketingEnquiryForm } from "../components/forms/SocialMediaMarketingEnquiryForm";

// Platform strip data
const PLATFORMS = [
  { name: "Instagram", desc: "Reels, Carousels, Stories & Grid Aesthetics", badge: "Primary" },
  { name: "Facebook", desc: "Community Engagement & Viral Sharing", badge: "Growth" },
  { name: "YouTube", desc: "Shorts & Long-Form Video Authority", badge: "Reach" },
  { name: "LinkedIn", desc: "B2B Thought Leadership & Founder Branding", badge: "B2B" },
  { name: "Pinterest", desc: "Visual Discovery & High-Intent Referral Traffic", badge: "Inspiration" },
];

// Creative showcase items
const SHOWCASE_ITEMS = [
  {
    id: "reels",
    category: "01 — REELS & SHORT-FORM VIDEOS",
    title: "Viral 3-Second Hook Video Reels",
    desc: "Vertical 9:16 short-form video content with engaging hooks, kinetic typography, and lifestyle pacing that stops the scroll.",
    image: "/src/assets/images/social_reel_cover_1793864185629.jpg",
    metrics: "48.2K+ Views · 14.8% Save Rate",
    aspect: "tall",
  },
  {
    id: "carousels",
    category: "02 — CAROUSEL DESIGNS",
    title: "Editorial Multi-Slide Brand Storytelling",
    desc: "Multi-slide educational and product carousels designed to drive bookmark saves, long view durations, and algorithm favor.",
    image: "/src/assets/images/social_carousel_design_1793864186322.jpg",
    metrics: "5-Slide Deck · 2.4K Bookmarks",
    aspect: "wide",
  },
  {
    id: "identity",
    category: "03 — BRAND IDENTITY & SOCIAL TEMPLATES",
    title: "Consistent Visual Social Design Systems",
    desc: "Cohesive Instagram grids, custom story templates, and typographic standards that make your brand instantly recognizable.",
    image: "/src/assets/images/social_brand_identity_1793864187595.jpg",
    metrics: "Unified Palette · Bespoke Grid",
    aspect: "wide",
  },
  {
    id: "campaigns",
    category: "04 — PROMOTIONAL CAMPAIGNS",
    title: "Seasonal Promotions & Product Drops",
    desc: "High-impact social advertisement posters and promotional announcements engineered to convert followers into paying clients.",
    image: "/src/assets/images/social_campaign_creative_1793864187022.jpg",
    metrics: "Direct Response · High CTR",
    aspect: "tall",
  },
];

// Service blocks
const SERVICES = [
  {
    num: "01",
    title: "Social Media Strategy",
    desc: "Brand positioning, audience research, platform selection and monthly content pillars tailored to your ideal customer profile.",
    link: "/services/digital-marketing-strategy/",
    icon: Sliders,
    highlights: ["Audience persona research", "Competitor creative audit", "Monthly content pillars"],
  },
  {
    num: "02",
    title: "Content Creation",
    desc: "Creative graphics, multi-slide carousels, promotional announcements and visual storytelling that commands authority.",
    link: "/services/content-marketing/",
    icon: Layers,
    highlights: ["Custom graphic design", "Educational slide decks", "Brand storytelling copy"],
  },
  {
    num: "03",
    title: "Reels & Video Production",
    desc: "Short-form videos, dynamic editing, trending audio synchronization, hook scripts, and platform-ready vertical assets.",
    link: "/services/content-marketing/",
    icon: Video,
    highlights: ["3-second hook scripting", "Kinetic motion captions", "Sound & rhythm editing"],
  },
  {
    num: "04",
    title: "Social Media Management",
    desc: "Publishing schedules, bio optimization, active comment monitoring, DM response strategy, and community engagement.",
    link: "/contact/",
    icon: MessageCircle,
    highlights: ["Peak-time scheduling", "Profile aesthetic audit", "Community interaction"],
  },
  {
    num: "05",
    title: "Brand Identity & Design",
    desc: "Visual consistency, branded templates, bespoke typography palettes, and reusable social design libraries.",
    link: "/services/branding/",
    icon: Palette,
    highlights: ["Color psychology system", "Curated font pairings", "Reusable Canva / Figma kits"],
  },
  {
    num: "06",
    title: "Social Media Advertising",
    desc: "Paid social campaigns, custom audience targeting, lead generation funnels, and dynamic retargeting to accelerate growth.",
    link: "/services/meta-ads/",
    icon: TrendingUp,
    highlights: ["Meta ad campaign setup", "High-ROAS retargeting", "Verified lead forms"],
  },
];

// 4-stage process
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover & Define",
    timing: "Week 1",
    desc: "Understand your brand, target audience, competitors and business objectives.",
    deliverables: ["Creative brand discovery call", "Social audit & competitor teardown", "Visual style benchmark"],
  },
  {
    step: "02",
    title: "Plan & Strategize",
    timing: "Week 2",
    desc: "Build content pillars, monthly calendars, creative direction and campaign plans.",
    deliverables: ["30-day content calendar", "Hook concepts & reel scripts", "Carousel topic outlines"],
  },
  {
    step: "03",
    title: "Create & Produce",
    timing: "Weeks 2–3",
    desc: "Design creatives, produce reels, write captions and prepare platform-ready assets.",
    deliverables: ["High-res carousel decks", "Reel video color grading & captions", "Hashtag & copy batches"],
  },
  {
    step: "04",
    title: "Publish & Optimize",
    timing: "Ongoing",
    desc: "Schedule content, monitor engagement, analyze performance and refine the strategy.",
    deliverables: ["Automated peak-time publishing", "Weekly engagement review", "Monthly growth report"],
  },
];

// Content System (Attract, Educate, Build Trust, Convert)
const CONTENT_SYSTEM = [
  {
    phase: "ATTRACT",
    title: "Reels & Viral Hooks",
    desc: "Short-form video reels, trending audio formats, and visual hooks engineered to capture broad audience attention.",
    color: "#FF8A24",
    example: "Before/After transformations, aesthetic showcases & relatable industry commentary.",
    tag: "Top of Funnel",
  },
  {
    phase: "EDUCATE",
    title: "Carousels & Breakdowns",
    desc: "Informative multi-slide carousels that establish your brand as the undeniable authority in your domain.",
    color: "#FF6038",
    example: "Step-by-step how-tos, mistakes to avoid, and proprietary framework explainers.",
    tag: "High Save Rate",
  },
  {
    phase: "BUILD TRUST",
    title: "Stories & Behind-the-Scenes",
    desc: "Authentic client transformations, craftsman processes, and team culture that turns casual followers into believers.",
    color: "#FF087F",
    example: "Founder reflections, workshop clips, customer reviews, and unpolished daily moments.",
    tag: "Brand Loyalty",
  },
  {
    phase: "CONVERT",
    title: "Campaigns & Clear CTAs",
    desc: "Promotional product launches, exclusive offers, and comment-to-DM funnels that convert attention into inquiries.",
    color: "#7000FF",
    example: "Limited seasonal launches, direct WhatsApp CTAs, and consultation booking links.",
    tag: "Revenue Driver",
  },
];

// Deliverables
const DELIVERABLES = [
  {
    num: "01",
    title: "Monthly Content Calendar",
    desc: "Itemized publishing schedule detailing dates, content formats, captions, and visual directions.",
    size: "large",
  },
  {
    num: "02",
    title: "Custom Posts & Carousels",
    desc: "Pixel-perfect graphics designed to match your brand guidelines with editorial typography.",
    size: "small",
  },
  {
    num: "03",
    title: "Reels & Video Editing",
    desc: "Dynamic vertical videos with subtitles, rhythm cuts, sound effects, and color grading.",
    size: "small",
  },
  {
    num: "04",
    title: "Branded Social Templates",
    desc: "Reusable Instagram stories, highlight covers, and quote templates for internal team use.",
    size: "small",
  },
  {
    num: "05",
    title: "Captions & Strategic Copy",
    desc: "Persuasive copywriting designed for high readability, search indexing, and conversation.",
    size: "small",
  },
  {
    num: "06",
    title: "Monthly Performance Reports",
    desc: "Transparent metrics review tracking follower growth, top-performing hooks, and inbound leads.",
    size: "large",
  },
];

// FAQs
const FAQS = [
  {
    q: "What does CoreClick include in social media marketing?",
    a: "Our social media marketing service is a complete creative and strategic partnership. It covers monthly content strategy, graphic design for carousels and static posts, short-form reel video editing with captions, persuasive copywriting, hashtag research, scheduled publishing, and monthly performance reporting.",
  },
  {
    q: "Which social media platforms do you manage?",
    a: "We specialize primarily in Instagram and Facebook—the highest conversion channels for most retail, lifestyle, medical, and local brands. We also strategize and manage YouTube Shorts, LinkedIn company pages, and Pinterest boards depending on your industry and target audience.",
  },
  {
    q: "How many posts and reels do you create monthly?",
    a: "Our standard growth packages typically range from 12 to 16 custom graphic posts and 4 to 8 short-form reels per month, plus weekly Instagram story prompts. For aggressive scaling brands, we offer daily content production and dedicated video editing pipelines.",
  },
  {
    q: "Does CoreClick create graphics and video content?",
    a: "Yes. Our in-house creative team designs all visual assets from scratch—including multi-slide educational carousels, aesthetic lifestyle graphics, and short-form video reels with kinetic captions and sound design.",
  },
  {
    q: "Do I need to provide photographs and videos?",
    a: "While raw smartphone footage, team photos, or behind-the-scenes clips of your real workspace significantly elevate authenticity, we provide full creative direction, prompt checklists, and can also curate and produce high-end motion graphics and licensed lifestyle imagery.",
  },
  {
    q: "How long does it take to see social media growth?",
    a: "Profile aesthetics and visual authority transform immediately within the first 14 days. Consistent reach and engagement velocity typically compound noticeably within 30 to 60 days as algorithms identify your audience patterns and consistent publishing schedule.",
  },
  {
    q: "Do you also manage paid social media advertisements?",
    a: "Yes. We operate paid Meta Ads (Facebook and Instagram advertising) as a high-powered companion service to boost winning organic reels and generate direct WhatsApp or form inquiries. You can combine organic management with paid ad management seamlessly.",
  },
  {
    q: "Can you manage an existing social media account?",
    a: "Yes. We frequently take over existing accounts that have stagnated or look visually inconsistent. We begin with a comprehensive brand and profile audit, optimize your bio and highlights, clean up past inconsistencies, and launch a fresh, modern creative direction.",
  },
];

// Related services
const RELATED_SERVICES = [
  {
    title: "Branding & Visual Identity",
    desc: "Logo design, color systems, typography standards, and brand guidelines.",
    slug: "branding",
    badge: "Identity",
  },
  {
    title: "Content Marketing",
    desc: "Strategic copywriting, editorial playbooks, and lead-magnet whitepapers.",
    slug: "content-marketing",
    badge: "Editorial",
  },
  {
    title: "Meta Ads (Facebook & IG)",
    desc: "Paid performance advertising, lookalike audiences, and direct lead funnels.",
    slug: "meta-ads",
    badge: "Paid Media",
  },
  {
    title: "Digital Marketing Strategy",
    desc: "Cross-channel growth architecture connecting social, SEO, and paid media.",
    slug: "digital-marketing-strategy",
    badge: "Strategy",
  },
];

export const SocialMediaMarketingPage: React.FC = () => {
  const [activeProcess, setActiveProcess] = useState<number>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

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
    serviceType: "Social Media Marketing & Creative Content Production",
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
      "Transform social media into a powerful brand-building and customer acquisition channel through strategic content, reels, creative storytelling and consistent brand communication.",
  };

  return (
    <div className="bg-[#FFF9F6] text-[#11121D] selection:bg-[#FF087F]/20 selection:text-[#11121D]">
      <SeoHead
        title="Social Media Marketing Agency | CoreClick Varanasi"
        description="Make your brand impossible to ignore. Strategic social media marketing, Instagram reels production, carousels, and visual storytelling for growing businesses."
        canonicalPath="/services/social-media-marketing/"
        structuredData={structuredData}
      />

      {/* =========================================================================
          1. HERO — SOCIAL MEDIA THAT BUILDS BRANDS (EDITORIAL SPLIT-SCREEN)
      ========================================================================= */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-[#11121D]/10 bg-[#FFF9F6]">
        {/* Subtle Ambient Studio Lighting */}
        <div
          aria-hidden="true"
          className="absolute -top-32 right-1/4 w-[650px] h-[420px] bg-gradient-to-br from-[#FF087F]/10 via-[#FF6038]/10 to-[#FF8A24]/10 blur-[140px] pointer-events-none rounded-full"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services/" },
              { label: "Social Media Marketing" },
            ]}
            className="mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFE5ED] border border-[#FF087F]/20 text-[#FF087F] text-xs font-mono font-bold uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#FF6038]" />
                <span>BRAND & CREATIVE / SOCIAL MEDIA MARKETING</span>
              </div>

              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[56px] text-[#11121D] tracking-tight leading-[1.12]">
                Make Your Brand{" "}
                <span className="text-gradient-brand">Impossible to Ignore.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#343644] leading-relaxed font-normal max-w-xl">
                We turn social media into a powerful brand-building and customer acquisition channel through strategic content, engaging reels, creative storytelling and consistent brand communication.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={scrollToEnquiry}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#11121D] text-white font-extrabold text-sm shadow-xl hover:bg-black transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Build My Social Presence</span>
                  <ArrowRight className="w-4 h-4 text-[#FF8A24]" />
                </button>

                <a
                  href={`https://wa.me/918707414150?text=${encodeURIComponent(
                    "Hello CoreClick, I would like to discuss social media marketing & reels content for my brand."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white border-2 border-[#11121D] text-[#11121D] font-extrabold text-sm hover:bg-[#FFE5ED] transition-all hover:border-[#FF087F] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#FF087F]" />
                  <span>Let's Talk on WhatsApp</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-[#11121D]/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#727383] font-medium">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#FF087F] shrink-0" />
                  <span>Custom Creative Direction</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#FF087F] shrink-0" />
                  <span>Short-Form Video Production</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#FF087F] shrink-0" />
                  <span>Predictable Monthly Publishing</span>
                </div>
              </div>
            </div>

            {/* Right Visual Composition — Layered Social Media Creative Workspace */}
            <div className="lg:col-span-6 relative">
              <div className="relative bg-white rounded-3xl border-2 border-[#11121D] p-6 sm:p-7 shadow-[10px_10px_0px_0px_#11121D] overflow-hidden">
                {/* Mock Instagram Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#11121D]/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FF8A24] via-[#FF6038] to-[#FF087F] p-0.5 shadow-sm">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-bold text-xs text-[#11121D]">
                        CC
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-heading font-extrabold text-xs text-[#11121D]">
                          coreclick.creatives
                        </span>
                        <span className="w-3.5 h-3.5 rounded-full bg-[#FF087F] text-white flex items-center justify-center text-[9px] font-bold">
                          ✓
                        </span>
                      </div>
                      <div className="text-[10px] text-[#727383]">Creative Studio & Social Growth</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#FFE5ED] text-[#FF087F] font-mono text-[10px] font-extrabold uppercase tracking-wider">
                      ACTIVE STUDIO
                    </span>
                  </div>
                </div>

                {/* Overlapping Content Mockup Grid */}
                <div className="grid grid-cols-12 gap-3.5 my-5 items-stretch">
                  {/* Left: Vertical Reel Frame Mockup */}
                  <div className="col-span-5 relative rounded-2xl overflow-hidden border-2 border-[#11121D] bg-[#11121D] shadow-sm group">
                    <img
                      src="/src/assets/images/social_reel_cover_1793864185629.jpg"
                      alt="Artisan fashion reel frame mockup"
                      className="w-full h-64 object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-between p-2.5 text-white">
                      <div className="flex justify-between items-center text-[9px] font-mono">
                        <span className="bg-[#FF087F] px-1.5 py-0.5 rounded font-bold">REEL</span>
                        <Play className="w-3.5 h-3.5 fill-white" />
                      </div>
                      <div>
                        <div className="text-[11px] font-extrabold leading-tight">
                          "The Secret Behind Timeless Banarasi Silk"
                        </div>
                        <div className="flex items-center justify-between text-[9px] text-white/80 mt-1 pt-1 border-t border-white/20">
                          <span>❤️ 18.4K</span>
                          <span>💬 482</span>
                          <span>🔖 1.2K</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Carousel & Content Calendar Mockups */}
                  <div className="col-span-7 space-y-3 flex flex-col justify-between">
                    {/* Carousel Preview Card */}
                    <div className="p-3.5 rounded-2xl bg-[#FFF9F6] border border-[#11121D]/15 shadow-xs">
                      <div className="flex items-center justify-between text-[10px] font-mono text-[#727383] mb-1.5">
                        <span className="font-bold text-[#FF6038]">MULTI-SLIDE CAROUSEL</span>
                        <span>Slide 1 of 5</span>
                      </div>
                      <div className="rounded-xl overflow-hidden border border-[#11121D]/10 h-24 bg-white relative">
                        <img
                          src="/src/assets/images/social_carousel_design_1793864186322.jpg"
                          alt="Instagram carousel design preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-[#11121D] font-bold mt-2">
                        <span>Save Rate: 14.8%</span>
                        <span className="text-[#FF087F]">High Engagement</span>
                      </div>
                    </div>

                    {/* Cadence Mini Planner */}
                    <div className="p-3 rounded-2xl bg-[#FFF0E9] border border-[#FF6038]/20 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#FF6038] shrink-0" />
                        <div>
                          <div className="text-[11px] font-extrabold text-[#11121D]">30-Day Calendar</div>
                          <div className="text-[10px] text-[#727383]">16 Posts + 8 Reels / month</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-md bg-white border border-[#11121D]/10 text-[10px] font-mono font-bold text-emerald-800">
                        SCHEDULED
                      </span>
                    </div>
                  </div>
                </div>

                {/* Engagement Mini Dashboard Strip */}
                <div className="pt-3 border-t border-[#11121D]/10 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 rounded-xl bg-[#FFF9F6] border border-[#11121D]/10">
                    <div className="text-[9px] font-mono text-[#727383] uppercase">REACH GROWTH</div>
                    <div className="text-sm font-extrabold text-[#11121D]">+284%</div>
                  </div>
                  <div className="p-2 rounded-xl bg-[#FFF9F6] border border-[#11121D]/10">
                    <div className="text-[9px] font-mono text-[#727383] uppercase">PROFILE VISITS</div>
                    <div className="text-sm font-extrabold text-[#11121D]">42.5K</div>
                  </div>
                  <div className="p-2 rounded-xl bg-[#FFF9F6] border border-[#11121D]/10">
                    <div className="text-[9px] font-mono text-[#727383] uppercase">INBOUND DMS</div>
                    <div className="text-sm font-extrabold text-[#FF087F]">318+ Leads</div>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#11121D] text-white px-4 py-2.5 rounded-2xl border border-white/20 shadow-xl items-center gap-2 text-xs font-mono font-bold">
                <Flame className="w-4 h-4 text-[#FF8A24]" />
                <span>Zero Low-Effort Stock Photos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SOCIAL MEDIA PLATFORM STRIP
      ========================================================================= */}
      <section className="py-8 bg-[#FFF0E9] border-b border-[#11121D]/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-extrabold text-[#FF087F] uppercase tracking-wider">
              MULTI-PLATFORM VISUAL ECOSYSTEM
            </span>
            <span className="text-xs text-[#727383] hidden sm:inline">
              Tailored visual formats for each social channel
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {PLATFORMS.map((plat) => (
              <div
                key={plat.name}
                className="bg-white p-3.5 rounded-2xl border border-[#11121D]/15 hover:border-[#FF087F] hover:shadow-md transition-all group cursor-default"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-heading font-extrabold text-xs text-[#11121D] group-hover:text-[#FF087F] transition-colors">
                    {plat.name}
                  </span>
                  <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#FFF0E9] text-[#FF6038]">
                    {plat.badge}
                  </span>
                </div>
                <p className="text-[10px] text-[#727383] leading-snug line-clamp-2 font-normal">
                  {plat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. CREATIVE SHOWCASE — CONTENT THAT GETS ATTENTION
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF9F6] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-extrabold text-[#FF6038] uppercase tracking-wider">
              CREATIVE PORTFOLIO SHOWCASE
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#11121D] mt-1 tracking-tight">
              Content That Makes People <span className="text-gradient-brand">Stop Scrolling.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#343644] mt-3 leading-relaxed">
              We design editorial-grade short-form video reels, multi-slide educational carousels, and visual identity systems that elevate your brand perception above competitors.
            </p>
          </div>

          {/* Staggered Masonry Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
            {/* Reel Video Spotlight */}
            <div className="lg:col-span-5 bg-white rounded-3xl border-2 border-[#11121D] p-6 shadow-[8px_8px_0px_0px_#11121D] hover:shadow-[12px_12px_0px_0px_#FF087F] hover:border-[#FF087F] transition-all group">
              <div className="relative rounded-2xl overflow-hidden mb-5 bg-[#11121D]">
                <img
                  src="/src/assets/images/social_reel_cover_1793864185629.jpg"
                  alt="High-retention reel video showcase"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                />
                <div className="absolute top-3 left-3 bg-[#11121D]/80 backdrop-blur-xs text-white px-2.5 py-1 rounded-full text-[10px] font-mono font-bold">
                  01 — REELS & SHORT-FORM
                </div>
              </div>
              <h3 className="font-heading font-extrabold text-xl text-[#11121D] group-hover:text-[#FF087F] transition-colors">
                Viral 3-Second Hook Video Reels
              </h3>
              <p className="text-xs text-[#343644] mt-2 leading-relaxed">
                Vertical 9:16 short-form video content with engaging hooks, kinetic captions, and lifestyle pacing that captures attention within the first 3 seconds.
              </p>
              <div className="mt-4 pt-3 border-t border-[#11121D]/10 flex items-center justify-between text-xs font-mono font-bold text-[#FF6038]">
                <span>Format: 9:16 Reels</span>
                <span>Avg 18.4K+ Organic Views</span>
              </div>
            </div>

            {/* Carousel & Identity Column */}
            <div className="lg:col-span-7 space-y-8">
              {/* Carousel Deck */}
              <div className="bg-white rounded-3xl border-2 border-[#11121D] p-6 shadow-[8px_8px_0px_0px_#11121D] hover:shadow-[12px_12px_0px_0px_#FF6038] hover:border-[#FF6038] transition-all group">
                <div className="relative rounded-2xl overflow-hidden mb-5 bg-[#FFF0E9]">
                  <img
                    src="/src/assets/images/social_carousel_design_1793864186322.jpg"
                    alt="Multi-slide carousel design showcase"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#11121D]/80 backdrop-blur-xs text-white px-2.5 py-1 rounded-full text-[10px] font-mono font-bold">
                    02 — CAROUSEL DESIGNS
                  </div>
                </div>
                <h3 className="font-heading font-extrabold text-xl text-[#11121D] group-hover:text-[#FF6038] transition-colors">
                  Multi-Slide Educational & Product Carousels
                </h3>
                <p className="text-xs text-[#343644] mt-2 leading-relaxed">
                  Informative slide decks that break down complex customer questions into actionable visual insights, maximizing Instagram bookmark saves and algorithmic distribution.
                </p>
                <div className="mt-4 pt-3 border-t border-[#11121D]/10 flex items-center justify-between text-xs font-mono font-bold text-[#FF8A24]">
                  <span>Format: 4:5 Multi-Slide</span>
                  <span>High Bookmark Rate</span>
                </div>
              </div>

              {/* Grid 2-Col: Brand Identity & Promotional Campaigns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Brand Identity */}
                <div className="bg-white rounded-3xl border-2 border-[#11121D] p-5 shadow-[6px_6px_0px_0px_#11121D] hover:border-[#FF087F] transition-all group">
                  <div className="relative rounded-2xl overflow-hidden mb-4 bg-[#FFE5ED]">
                    <img
                      src="/src/assets/images/social_brand_identity_1793864187595.jpg"
                      alt="Brand social media visual system"
                      className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-[10px] font-mono font-bold text-[#FF087F] uppercase mb-1">
                    03 — BRAND IDENTITY
                  </div>
                  <h4 className="font-heading font-extrabold text-base text-[#11121D]">
                    Unified Social Grid Systems
                  </h4>
                  <p className="text-xs text-[#727383] mt-1.5 line-clamp-2">
                    Cohesive color palettes, typography guidelines, and branded highlight covers.
                  </p>
                </div>

                {/* Promotional Campaign */}
                <div className="bg-white rounded-3xl border-2 border-[#11121D] p-5 shadow-[6px_6px_0px_0px_#11121D] hover:border-[#FF8A24] transition-all group">
                  <div className="relative rounded-2xl overflow-hidden mb-4 bg-[#FFF0E9]">
                    <img
                      src="/src/assets/images/social_campaign_creative_1793864187022.jpg"
                      alt="Promotional campaign creative poster"
                      className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-[10px] font-mono font-bold text-[#FF8A24] uppercase mb-1">
                    04 — PROMOTIONAL CAMPAIGNS
                  </div>
                  <h4 className="font-heading font-extrabold text-base text-[#11121D]">
                    Seasonal Product Drops & Ads
                  </h4>
                  <p className="text-xs text-[#727383] mt-1.5 line-clamp-2">
                    Commercial creative advertisements engineered for festival launches and product inquiries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. THE PROBLEMS WE SOLVE — EDITORIAL SPLIT SECTION (NO RED/GREEN)
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF0E9] relative border-y border-[#11121D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-extrabold text-[#FF6038] uppercase tracking-wider">
              STRATEGY OVER RANDOMNESS
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#11121D] mt-1 tracking-tight">
              Your Social Media Deserves More Than <span className="text-gradient-brand">Random Posting.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#343644] mt-3 leading-relaxed">
              Posting random stock photos on festivals does not build brand equity. Here is how CoreClick replaces chaos with a structured creative growth engine.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* The Challenges Panel */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border-2 border-[#11121D] shadow-[6px_6px_0px_0px_#11121D] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#11121D]/10">
                  <div className="flex items-center gap-2 text-xs font-mono font-extrabold text-[#11121D] uppercase tracking-wider">
                    <XCircle className="w-4 h-4 text-[#FF087F]" />
                    <span>THE COMMON STRUGGLES</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#727383]">The Unfocused Approach</span>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "Inconsistent Posting & Inactive Profiles",
                      desc: "Sporadic posting schedules that cause platform algorithms to suppress your account visibility.",
                    },
                    {
                      title: "Generic Content That Fails to Capture Attention",
                      desc: "Bland template designs and generic holiday graphics that followers scroll past without looking.",
                    },
                    {
                      title: "Poor Visual Consistency Across Platforms",
                      desc: "Mismatched fonts, clashing colors, and lack of recognized brand identity across channels.",
                    },
                    {
                      title: "Low-Quality Engagement Without Enquiries",
                      desc: "Getting random bot comments but zero real business DMs or qualified customer leads.",
                    },
                    {
                      title: "No Defined Content Strategy or Brand Positioning",
                      desc: "Posting whatever comes to mind without content pillars or a clear message hierarchy.",
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
                Result: Time and creative energy wasted with zero compounding business reputation.
              </div>
            </div>

            {/* The CoreClick Approach Panel */}
            <div className="bg-[#FFE5ED] rounded-3xl p-7 sm:p-9 border-2 border-[#11121D] shadow-[6px_6px_0px_0px_#FF087F] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#11121D]/10">
                  <div className="flex items-center gap-2 text-xs font-mono font-extrabold text-[#FF087F] uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-[#FF087F]" />
                    <span>THE CORECLICK METHOD</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#FF087F] font-bold">Tested Creative System</span>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "Structured Monthly Content Strategy",
                      desc: "Pre-planned 30-day editorial calendars balancing reels, carousels, stories, and promotions.",
                    },
                    {
                      title: "Reels & Short-Form Video Production",
                      desc: "Dedicated video editing with strong 3-second visual hooks, kinetic captions, and sound design.",
                    },
                    {
                      title: "Consistent Visual Identity & Brand Storytelling",
                      desc: "Curated typography palettes, bespoke layouts, and signature aesthetic styling across all posts.",
                    },
                    {
                      title: "Audience-Focused Community Engagement",
                      desc: "Comment-to-DM funnels and conversation starters that turn followers into active business conversations.",
                    },
                    {
                      title: "Performance Analysis & Continuous Optimization",
                      desc: "Weekly reviews of save rates, watch durations, and follower growth to iterate on winning formats.",
                    },
                  ].map((app, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-white border border-[#11121D]/10 hover:border-[#FF087F] hover:shadow-xs transition-all"
                    >
                      <h4 className="font-heading font-extrabold text-xs sm:text-sm text-[#11121D]">
                        {app.title}
                      </h4>
                      <p className="text-xs text-[#343644] mt-1 leading-relaxed font-normal">
                        {app.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#11121D]/10 text-xs text-[#FF087F] font-bold font-mono">
                Result: A distinctive, recognizable brand that commands customer respect and drives inquiries.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. OUR SOCIAL MEDIA SERVICES (6 DISTINCTIVE SERVICE BLOCKS)
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF9F6] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-extrabold text-[#FF8A24] uppercase tracking-wider">
              FULL-SPECTRUM CREATIVE SOLUTIONS
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#11121D] mt-1 tracking-tight">
              Everything Your Brand Needs to Grow Socially.
            </h2>
            <p className="text-sm text-[#727383] mt-2">
              From high-level brand positioning to daily reels editing and community growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((srv) => {
              const IconComponent = srv.icon;
              return (
                <div
                  key={srv.num}
                  className="bg-white rounded-3xl p-7 border-2 border-[#11121D] shadow-[6px_6px_0px_0px_#11121D] hover:shadow-[10px_10px_0px_0px_#FF6038] hover:border-[#FF6038] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-2xl font-black text-[#FF6038]">{srv.num}</span>
                      <div className="w-10 h-10 rounded-2xl bg-[#FFF0E9] text-[#FF6038] flex items-center justify-center font-bold">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-heading font-extrabold text-xl text-[#11121D] leading-snug">
                      {srv.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#343644] mt-2 leading-relaxed font-normal">
                      {srv.desc}
                    </p>

                    <div className="mt-5 pt-4 border-t border-[#11121D]/10 space-y-1.5">
                      {srv.highlights.map((h, hidx) => (
                        <div key={hidx} className="flex items-center gap-2 text-xs text-[#727383]">
                          <Check className="w-3.5 h-3.5 text-[#FF6038] shrink-0" />
                          <span>{h}</span>
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
          6. THE CORECLICK CONTENT SYSTEM ("EVERY POST HAS A PURPOSE")
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#F1EAFE] relative border-y border-[#11121D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-extrabold text-[#7000FF] uppercase tracking-wider">
              PURPOSE-DRIVEN CREATIVE FRAMEWORK
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#11121D] mt-1 tracking-tight">
              Every Post Has a Purpose.
            </h2>
            <p className="text-sm text-[#343644] mt-2">
              We design every social media asset to serve one of four strategic psychological objectives in your customer journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTENT_SYSTEM.map((pillar) => (
              <div
                key={pillar.phase}
                className="bg-white rounded-3xl p-6 border-2 border-[#11121D] shadow-[6px_6px_0px_0px_#11121D] hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-[11px] font-mono font-extrabold px-2.5 py-1 rounded-full text-white shadow-xs"
                      style={{ backgroundColor: pillar.color }}
                    >
                      {pillar.phase}
                    </span>
                    <span className="text-[10px] font-mono text-[#727383]">{pillar.tag}</span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-[#11121D]">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-[#343644] mt-2.5 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#11121D]/10 bg-[#FFF9F6] p-3 rounded-xl border border-[#11121D]/5">
                  <div className="text-[10px] font-mono font-bold text-[#FF6038] uppercase">
                    CONTENT EXAMPLES:
                  </div>
                  <div className="text-xs text-[#11121D] font-medium mt-1 leading-snug">
                    {pillar.example}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. OUR CONTENT CREATION PROCESS (4-STAGE HORIZONTAL TIMELINE)
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF9F6] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-extrabold text-[#FF6038] uppercase tracking-wider">
              EXECUTION DISCIPLINE
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#11121D] mt-1 tracking-tight">
              From Strategy to Scroll-Stopping Content.
            </h2>
            <p className="text-sm text-[#727383] mt-2">
              Our systematic monthly creative sprint ensures high content quality without missed deadlines.
            </p>
          </div>

          <div className="relative">
            {/* Desktop Gradient Connecting Line */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute top-8 left-12 right-12 h-1 bg-gradient-to-r from-[#FF8A24] via-[#FF6038] to-[#FF087F] z-0 opacity-40"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {PROCESS_STEPS.map((step, idx) => {
                const isActive = activeProcess === idx;
                return (
                  <div
                    key={step.step}
                    onClick={() => setActiveProcess(idx)}
                    className={`bg-white rounded-3xl p-6 border-2 transition-all cursor-pointer ${
                      isActive
                        ? "border-[#FF087F] shadow-[8px_8px_0px_0px_#11121D] -translate-y-1.5"
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
                      <span className="text-[11px] font-mono font-bold text-[#FF087F]">
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
                      {step.deliverables.map((d, didx) => (
                        <div key={didx} className="flex items-center gap-1.5 text-[11px] text-[#343644]">
                          <span className="w-1 h-1 rounded-full bg-[#FF087F]" />
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
          8. WHAT YOU RECEIVE — ASYMMETRICAL DELIVERABLES GRID
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF0E9] relative border-y border-[#11121D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-extrabold text-[#FF6038] uppercase tracking-wider">
              CONCRETE OUTPUTS
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#11121D] mt-1 tracking-tight">
              Your Complete Social Media Creative System.
            </h2>
            <p className="text-sm text-[#343644] mt-2">
              Everything is pre-scheduled, reviewed for brand compliance, and delivered with 100% full commercial ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DELIVERABLES.map((deliv, idx) => (
              <div
                key={deliv.num}
                className={`bg-white rounded-3xl p-7 border-2 border-[#11121D] shadow-[6px_6px_0px_0px_#11121D] hover:shadow-[10px_10px_0px_0px_#FF087F] hover:border-[#FF087F] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${
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
                  <span>Itemized Monthly Deliverable</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. WHY CORECLICK — EDITORIAL SPLIT SECTION
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF9F6] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFE5ED] text-[#FF087F] text-xs font-mono font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-[#FF6038]" />
                <span>THE CREATIVE EDGE</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#11121D] tracking-tight leading-tight">
                Creative Thinking. <br />
                <span className="text-gradient-brand">Strategic Execution.</span>
              </h2>

              <p className="text-base text-[#343644] leading-relaxed font-normal">
                We believe social media is your most frequent customer touchpoint. We craft every post, carousel, and reel with intentional artistic direction that makes your brand look established and premium.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: "Strategy Before Content Production",
                    desc: "No shooting in the dark. Every visual asset is mapped to customer psychology and clear conversion goals.",
                  },
                  {
                    title: "Consistent Brand Identity",
                    desc: "Rigorous visual guidelines ensuring typography, color grading, and tone remain uniform across all profiles.",
                  },
                  {
                    title: "Creative Storytelling",
                    desc: "We extract your brand's unique origin, craftsmanship, and customer transformations into compelling stories.",
                  },
                  {
                    title: "Platform-Specific Content",
                    desc: "We don't post horizontal graphics to Reels or link-heavy posts to Instagram. Every asset is tailored for native algorithmic reach.",
                  },
                  {
                    title: "Transparent Communication",
                    desc: "Dedicated shared Slack/WhatsApp channels, weekly editorial approvals, and no agency ghosting.",
                  },
                  {
                    title: "Focus on Meaningful Business Outcomes",
                    desc: "We optimize for brand reputation and high-intent inbound client inquiries—not empty bot likes.",
                  },
                ].map((diff, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#11121D] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-heading font-extrabold text-sm text-[#11121D]">
                        {diff.title}
                      </h4>
                      <p className="text-xs text-[#727383] mt-0.5 leading-relaxed font-normal">
                        {diff.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Editorial Showcase Card */}
            <div className="lg:col-span-6 bg-white rounded-3xl border-2 border-[#11121D] p-7 sm:p-9 shadow-[10px_10px_0px_0px_#11121D] relative overflow-hidden">
              <div className="border-b border-[#11121D]/10 pb-4 mb-6">
                <span className="font-mono text-xs font-extrabold text-[#FF087F] uppercase tracking-wider">
                  STUDIO CULTURE & STANDARDS
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-[#11121D] mt-1">
                  How We Elevate Your Brand
                </h3>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-[#11121D]/15">
                  <img
                    src="/src/assets/images/hero_creative_art_composition_1793702290603.jpg"
                    alt="Creative studio art direction composition"
                    className="w-full h-52 object-cover"
                  />
                </div>

                <div className="p-4 rounded-2xl bg-[#FFF9F6] border border-[#11121D]/10 space-y-2">
                  <div className="text-xs font-extrabold text-[#11121D]">
                    "Brand is what people say about you when you're not in the room."
                  </div>
                  <p className="text-xs text-[#727383] leading-relaxed">
                    Social media is where modern customers audit your credibility before placing an order or signing a contract. A polished, art-directed feed signals market leadership.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 rounded-2xl bg-[#FFF0E9] border border-[#FF6038]/20">
                    <div className="font-mono text-[10px] font-bold text-[#FF6038]">REEL RETENTION</div>
                    <div className="text-lg font-heading font-extrabold text-[#11121D] mt-0.5">Top 5%</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#FFE5ED] border border-[#FF087F]/20">
                    <div className="font-mono text-[10px] font-bold text-[#FF087F]">CLIENT RETENTION</div>
                    <div className="text-lg font-heading font-extrabold text-[#11121D] mt-0.5">94%+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. SOCIAL MEDIA MARKETING FAQ (HIGH-CONTRAST & LEGIBLE)
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF9F6] relative border-t border-[#11121D]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-mono font-extrabold text-[#FF6038] uppercase tracking-wider">
              CLEAR ANSWERS
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#11121D] mt-1 tracking-tight">
              Social Media Marketing FAQs
            </h2>
            <p className="text-sm text-[#727383] mt-2">
              Everything you need to know about content production, reel editing, and working with CoreClick.
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
          11. RELATED GROWTH SERVICES (4 CARDS)
      ========================================================================= */}
      <section className="py-16 bg-[#FFF0E9] border-t-2 border-[#11121D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono font-extrabold text-[#FF087F] uppercase tracking-wider">
                SYNERGISTIC SOLUTIONS
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
                className="group bg-white p-6 rounded-3xl border-2 border-[#11121D]/15 hover:border-[#FF087F] hover:shadow-[6px_6px_0px_0px_#11121D] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#FF087F] uppercase">
                    {rel.badge}
                  </span>
                  <h4 className="font-heading font-extrabold text-base text-[#11121D] group-hover:text-[#FF087F] transition-colors mt-1.5">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[#727383] mt-2 line-clamp-2 leading-relaxed">
                    {rel.desc}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-[#11121D]/10 flex items-center justify-between text-xs font-extrabold text-[#11121D] group-hover:text-[#FF087F] transition-colors">
                  <span>Learn more</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          12. FINAL CTA SECTION (CREAM & PEACH ORGANIC TRANSITION)
      ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF9F6] border-t-2 border-[#11121D]/10 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-20 left-1/3 w-[500px] h-[300px] bg-gradient-to-r from-[#FF087F]/10 via-[#FF6038]/10 to-[#FF8A24]/10 blur-[130px] pointer-events-none rounded-full"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFE5ED] text-[#FF087F] text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-[#FF087F]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6038]" />
            <span>STAND OUT ON SOCIAL</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#11121D] tracking-tight leading-tight">
            Let's Make Your Brand Stand Out.
          </h2>

          <p className="text-base sm:text-lg text-[#343644] mt-4 max-w-2xl mx-auto leading-relaxed font-normal">
            Build a stronger social presence with creative content, strategic storytelling and consistent brand communication.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={scrollToEnquiry}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#11121D] text-white font-extrabold text-sm shadow-xl hover:bg-black transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 text-[#FF8A24]" />
            </button>

            <a
              href={`https://wa.me/918707414150?text=${encodeURIComponent(
                "Hello CoreClick, I would like to chat about social media marketing for my business."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border-2 border-[#11121D] text-[#11121D] font-extrabold text-sm hover:bg-[#FFE5ED] transition-all hover:border-[#FF087F] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#FF087F]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          13. ENQUIRY FORM SECTION
      ========================================================================= */}
      <section id="enquiry-section" className="py-16 md:py-24 bg-[#FFF0E9] relative border-t border-[#11121D]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SocialMediaMarketingEnquiryForm />
        </div>
      </section>
    </div>
  );
};
