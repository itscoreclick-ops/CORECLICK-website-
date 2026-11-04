import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Phone, Sparkles } from "lucide-react";
import { SeoHead } from "../../components/common/SeoHead";
import { Logo } from "../../components/common/Logo";
import { Button } from "../../components/common/Button";
import { ContactForm } from "../../components/forms/ContactForm";
import { Accordion } from "../../components/common/Accordion";
import { CONFIG } from "../../config/siteConfig";

interface LandingCampaignConfig {
  slug: string;
  badge: string;
  headline: string;
  subheadline: string;
  defaultService: string;
  benefits: { title: string; desc: string }[];
  proofPoints: { stat: string; label: string }[];
  keyFeatures: string[];
  faqs: { question: string; answer: string }[];
}

const CAMPAIGNS: Record<string, LandingCampaignConfig> = {
  "digital-marketing": {
    slug: "digital-marketing",
    badge: "Full-Funnel Growth Sprints",
    headline: "Scale Qualified Inbound Leads & Measurable Revenue",
    subheadline:
      "Tired of vanity metrics and empty promises? CoreClick designs full-funnel digital marketing campaigns that align paid ads, SEO, and high-speed web pages with your business margins.",
    defaultService: "Digital Marketing Strategy",
    benefits: [
      { title: "Direct Revenue Focus", desc: "Every campaign is measured against customer acquisition cost and net revenue return." },
      { title: "Multi-Channel Integration", desc: "Google Search capture combined with Meta visual disruption and local map presence." },
      { title: "100% Account Ownership", desc: "You own all ad accounts, creative assets, and client data with full transparency." },
    ],
    proofPoints: [
      { stat: "100%", label: "Exclusive Inbound Leads" },
      { stat: "< 24h", label: "Lead Response Time" },
      { stat: "Varanasi", label: "Local Strategic Team" },
    ],
    keyFeatures: [
      "Custom multi-channel acquisition roadmap",
      "Weekly creative sprints and ad copy variants",
      "Conversion-engineered mobile landing page builds",
      "Direct CRM / WhatsApp instant lead routing",
    ],
    faqs: [
      {
        question: "How quickly can we launch a complete campaign?",
        answer: "Our team conducts discovery and builds tailored ad copy, landing pages, and tracking setups within 5 to 7 business days.",
      },
      {
        question: "Do you work with businesses outside Varanasi?",
        answer: "Yes. While based in Varanasi, we serve growing brands across Uttar Pradesh, India, and internationally through seamless remote collaboration.",
      },
    ],
  },
  "google-ads": {
    slug: "google-ads",
    badge: "High-Intent Search Ads",
    headline: "Capture Ready-to-Buy Prospects on Google Search",
    subheadline:
      "Stop wasting budget on broad clicks. We engineer granular Google Search and Performance Max campaigns that target commercial queries with maximum Quality Scores.",
    defaultService: "Google Ads",
    benefits: [
      { title: "Zero Keyword Waste", desc: "Aggressive negative keyword lists filter out job seekers, freebie hunters, and irrelevant queries." },
      { title: "Higher Quality Scores", desc: "Single-intent ad groupings lower your average cost per click compared to competitors." },
      { title: "Offline Conversion Training", desc: "We feed closed deals back into Google to train smart bidding on high-margin leads." },
    ],
    proofPoints: [
      { stat: "Top 3", label: "Search Impression Share" },
      { stat: "Zero", label: "Wasted Broad Spend" },
      { stat: "100%", label: "Direct Billing to Google" },
    ],
    keyFeatures: [
      "Granular keyword research matrix (commercial & transactional terms)",
      "High-converting Responsive Search Ads with dynamic insertions",
      "Negative keyword library updated weekly",
      "Call asset and WhatsApp direct click tracking",
    ],
    faqs: [
      {
        question: "Do you guarantee #1 ranking on Google Ads?",
        answer: "Ad auctions are dynamic, but our granular clustering and dedicated landing pages consistently deliver top-of-page impression share for target buyer terms.",
      },
      {
        question: "Who pays Google for the ad clicks?",
        answer: "You pay Google directly via your own billing account. You retain full administrative control at all times.",
      },
    ],
  },
  "meta-ads": {
    slug: "meta-ads",
    badge: "Paid Social Growth",
    headline: "Turn Instagram & Facebook Scrollers Into Paying Clients",
    subheadline:
      "Creative is your primary targeting lever. We produce high-velocity short-form reels, high-intent lead forms, and server-side tracking that scales profitably.",
    defaultService: "Meta Ads (Facebook & Instagram)",
    benefits: [
      { title: "Server-Side CAPI", desc: "Eliminate iOS tracking drop-off with direct server-to-server conversion events." },
      { title: "Continuous Creative Sprints", desc: "We test 10+ hook and angle variations weekly so your ads never suffer from fatigue." },
      { title: "Pre-Qualified Leads", desc: "Custom qualifying questions ensure sales reps only speak with real decision makers." },
    ],
    proofPoints: [
      { stat: "4.8x", label: "Peak E-Commerce ROAS" },
      { stat: "CAPI", label: "Server-Side Event Tracking" },
      { stat: "10+", label: "Weekly Creative Iterations" },
    ],
    keyFeatures: [
      "Meta Business Manager & CAPI server-side integration",
      "Custom creative briefs, static hooks, and vertical reel cutdowns",
      "High-intent Lead Form workflows with qualifying gate questions",
      "Audience exclusion matrices preventing ad waste on past buyers",
    ],
    faqs: [
      {
        question: "How do you prevent junk lead form submissions?",
        answer: "We use higher-intent lead forms with custom dropdown qualification questions and double verification, filtering out accidental clicks.",
      },
      {
        question: "Do you write the ad copy and design the creatives?",
        answer: "Yes, our team writes all hooks, headlines, and captions, and designs high-conversion static graphics and vertical motion assets.",
      },
    ],
  },
  "social-media-marketing": {
    slug: "social-media-marketing",
    badge: "Brand Authority & Reach",
    headline: "Build a Magnetic, High-Trust Social Brand in 2026",
    subheadline:
      "Move beyond boring stock photos. We produce high-retention short-form video reels, thought-leadership carousels, and strategic content schedules that cultivate loyal buyers.",
    defaultService: "Social Media Marketing",
    benefits: [
      { title: "Viral Short-Form Reach", desc: "Leverage Instagram Reels and YouTube Shorts algorithms to capture organic discovery." },
      { title: "Consistent Brand Visuals", desc: "A cohesive design system makes your brand immediately recognizable in daily feeds." },
      { title: "DM Inquiry Routing", desc: "We turn casual comments and story replies into active sales conversations." },
    ],
    proofPoints: [
      { stat: "3–4", label: "High-Quality Reels/Week" },
      { stat: "100%", label: "Custom Branded Visuals" },
      { stat: "Zero", label: "Recycled Stock Templates" },
    ],
    keyFeatures: [
      "Monthly pre-planned editorial and reel content calendar",
      "Short-form video editing with engaging captions and visual hooks",
      "Branded carousel templates and highlight covers",
      "DM automation guidance to capture interested prospects",
    ],
    faqs: [
      {
        question: "Do you record the videos or do we?",
        answer: "For clients in Varanasi, we can assist with in-person shoots. For remote clients, we provide detailed scripts and shot lists, and handle all post-production editing.",
      },
      {
        question: "How soon do we see social media growth?",
        answer: "Consistency compounds over 30 to 60 days. Typically, reels optimized for watch time begin gaining algorithmic reach within the first 3 weeks.",
      },
    ],
  },
  "website-development": {
    slug: "website-development",
    badge: "High-Speed Web Platforms",
    headline: "Fast, Modern Websites Built to Convert Visitors Into Clients",
    subheadline:
      "Your website is your 24/7 sales flagship. We engineer ultra-fast React websites with sub-second loading speeds, airtight mobile usability, and zero layout shift.",
    defaultService: "Website Design & Development",
    benefits: [
      { title: "Sub-Second Loading", desc: "Pages load in under 1.5 seconds, directly improving Google rankings and mobile conversion rates." },
      { title: "Mobile-First Architecture", desc: "Engineered specifically for India's 80%+ mobile smartphone audience." },
      { title: "Conversion Optimized", desc: "Clear user journeys, frictionless forms, and instant WhatsApp chat triggers." },
    ],
    proofPoints: [
      { stat: "< 1.5s", label: "Mobile Page Load" },
      { stat: "100%", label: "Responsive Viewports" },
      { stat: "Clean", label: "TypeScript & React Code" },
    ],
    keyFeatures: [
      "Custom responsive design (desktop, tablet, mobile viewports)",
      "High-speed React + Tailwind CSS modern architecture",
      "Integrated contact forms with instant notification webhooks",
      "Complete Technical SEO (Schema.org JSON-LD, sitemaps, canonical tags)",
    ],
    faqs: [
      {
        question: "How long does a custom website build take?",
        answer: "Most high-speed agency or corporate websites take 2 to 4 weeks from architecture wireframing to production deployment.",
      },
      {
        question: "Can we update content without calling a developer?",
        answer: "Yes, our modular design system makes updating text, phone numbers, and service details straightforward.",
      },
    ],
  },
  "local-business-growth": {
    slug: "local-business-growth",
    badge: "Varanasi Local Dominance",
    headline: "Win More Walk-Ins & Direct Calls in Varanasi",
    subheadline:
      "When local customers search for businesses in Varanasi, make sure they find you first. We optimize your Google Business Profile, local citations, and geo-targeted ads.",
    defaultService: "Local SEO & Google Business Profile",
    benefits: [
      { title: "Google Maps 3-Pack", desc: "Rank at the very top of Google Maps where 70% of local mobile searchers click." },
      { title: "Direct Phone Calls", desc: "Generate direct inbound phone calls and WhatsApp chats without paying for commission middlemen." },
      { title: "Review Velocity Engine", desc: "Frictionless checkout QR codes help you systematically collect 5-star customer reviews." },
    ],
    proofPoints: [
      { stat: "70%+", label: "Mobile Local Clicks" },
      { stat: "#1-3", label: "Target Maps Position" },
      { stat: "Varanasi", label: "Local Market Expertise" },
    ],
    keyFeatures: [
      "Google Business Profile optimization and geo-tagging",
      "Local citation cleanup across trusted Indian directories",
      "QR-code review collection cards for physical storefronts",
      "Geo-targeted Google Search & local ad campaigns",
    ],
    faqs: [
      {
        question: "Why is Google Maps so critical for Varanasi businesses?",
        answer: "Over 80% of local customers and out-of-town tourists use Google Maps to find handloom studios, clinics, hotels, and restaurants. Ranking in the 3-Pack guarantees direct foot traffic.",
      },
      {
        question: "Do you help with negative or outdated reviews?",
        answer: "We help you respond professionally to address customer feedback and deploy positive review generation routines to elevate your overall rating.",
      },
    ],
  },
};

export const AdLandingPage: React.FC = () => {
  const { campaign } = useParams<{ campaign: string }>();

  const config = campaign ? CAMPAIGNS[campaign] : null;

  if (!config) {
    return <Navigate to="/404/" replace />;
  }

  return (
    <div className="min-h-screen bg-[#FFF9F6] text-[#111321] relative overflow-x-hidden selection:bg-[#FF087F]/20 selection:text-[#FF087F]">
      <SeoHead
        title={`${config.headline} | CoreClick Varanasi`}
        description={config.subheadline}
        canonicalPath={`/lp/${config.slug}/`}
      />

      {/* Streamlined Landing Page Top Bar */}
      <nav aria-label="Landing Page Navigation" className="border-b border-[#111321]/10 bg-[#FFF9F6]/90 backdrop-blur-md py-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Logo variant="dark" showTagline={false} />
          <div className="flex items-center gap-4">
            <a
              href={`tel:${CONFIG.phone}`}
              className="text-xs font-bold text-[#111321] hover:text-[#FF8A24] flex items-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF6038]" />
              <span className="hidden sm:inline">{CONFIG.formattedPhone}</span>
            </a>
            <Button
              to="#enquiry"
              variant="primary"
              size="sm"
              className="text-xs px-4 py-2"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </nav>

      {/* Landing Hero Split: Left Story, Right Form */}
      <section className="relative bg-[#FFF9F6] py-12 md:py-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Focused Copy & Proof */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FF6038] tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" />
                <span>{config.badge}</span>
                <span aria-hidden="true" className="text-[#111321]/20">·</span>
                <span className="text-[#727383]">CoreClick Growth</span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#111321] tracking-tight leading-tight">
                {config.headline}
              </h1>

              <p className="text-base sm:text-lg text-[#343644] leading-relaxed font-normal">
                {config.subheadline}
              </p>

              {/* Proof Metric Tiles */}
              <div className="grid grid-cols-3 gap-4 p-5 rounded-2xl bg-[#FFF0E9] border border-[#111321]/10 shadow-sm">
                {config.proofPoints.map((item, i) => (
                  <div key={i}>
                    <div className="font-heading font-extrabold text-xl md:text-2xl text-[#111321]">
                      {item.stat}
                    </div>
                    <div className="text-[11px] text-[#727383] mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Core Features Checklist */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono font-bold text-[#111321] uppercase tracking-wider">
                  Included in this Campaign Sprint:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {config.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#343644]">
                      <div className="w-4 h-4 rounded-full bg-[#FFE5ED] text-[#FF087F] flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                        ✓
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Direct Lead Capture Form */}
            <div id="enquiry" className="lg:col-span-5">
              <ContactForm
                defaultService={config.defaultService}
                formTitle="Request Campaign Proposal"
                formSubtitle="Fill in your details for a tailored strategy and transparent quote."
                redirectToThankYou={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Benefits */}
      <section className="relative py-16 md:py-24 bg-[#FFF0E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-bold text-[#FF6038] uppercase tracking-widest">
              WHY PARTNER WITH CORECLICK
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#111321] mt-1">
              Key Advantages Designed for Your Growth
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.benefits.map((benefit, i) => (
              <div
                key={i}
                className="p-6 md:p-8 rounded-3xl bg-white border border-[#111321]/10 shadow-sm"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-brand text-white flex items-center justify-center font-bold text-xs mb-4 shadow-md">
                  0{i + 1}
                </div>
                <h3 className="font-heading font-bold text-lg text-[#111321]">{benefit.title}</h3>
                <p className="text-xs md:text-sm text-[#727383] mt-2.5 leading-relaxed font-normal">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Landing Page FAQs */}
      <section className="py-16 md:py-24 bg-[#FFF9F6]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#111321] text-center mb-10">
            Frequently Asked Questions
          </h2>
          <Accordion
            items={config.faqs.map((f, i) => ({
              id: `lp-faq-${i}`,
              question: f.question,
              answer: f.answer,
            }))}
          />
        </div>
      </section>

      {/* Streamlined Landing Footer */}
      <footer className="bg-[#111321] text-[#D4CBD5] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} {CONFIG.businessName} · Varanasi, Uttar Pradesh.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions/" className="hover:text-white transition-colors">
              Terms
            </Link>
            <a href={`tel:${CONFIG.phone}`} className="hover:text-[#FF8A24] transition-colors">
              Call: {CONFIG.formattedPhone}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
