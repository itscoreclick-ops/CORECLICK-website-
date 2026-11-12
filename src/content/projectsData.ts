import { CaseStudy } from "../types";

export const PROJECTS_DATA: CaseStudy[] = [
  {
    id: "varanasi-artisanal-local-growth",
    slug: "varanasi-artisanal-local-growth",
    title: "Heritage Weaves & Artisanal Craft Studio",
    client: "Heritage Varanasi Weaves",
    industry: "Retail & Artisanal Textiles",
    serviceCategory: "Local Business Growth",
    isConcept: false,
    summary: "Engineered a local discovery engine and Google Maps optimization strategy for a Varanasi-based handloom studio, driving genuine foot-traffic and high-value bridal inquiries.",
    image: "/src/assets/images/work_local_business_1793700735467.webp",
    imageAlt: "Boutique handloom studio in Varanasi with customers exploring fine textiles and local digital discovery on smartphone",
    metrics: [
      { value: "+185%", label: "Google Maps Phone Calls", timeframe: "Across 4 Months" },
      { value: "3.2x", label: "Store Foot-Traffic Inquiries", timeframe: "Peak Wedding Season" },
      { value: "#1", label: "Local 3-Pack Rank for Banarasi Silk Studio", timeframe: "Sustained" }
    ],
    challenge: "Heritage Varanasi Weaves produced exceptional handloom textiles but struggled with online visibility. Out-of-town tourists and high-budget bridal shoppers searching for authentic Banarasi silk were directed to commercial middlemen or aggressive commission agents because the studio lacked structured local search optimization.",
    strategy: "CoreClick conducted a full citation overhaul across regional and national directories, transformed their Google Business Profile with geo-tagged high-resolution photography, implemented local structured schema markup, and deployed an automated post-visit review collection system.",
    deliverables: [
      "Google Business Profile optimization and geo-citation cleanup",
      "Bilingual local landing page tailored for wedding shoppers and cultural tourists",
      "Direct WhatsApp catalogue and instant enquiry routing workflow",
      "QR-code powered review generation cards for in-studio checkouts"
    ],
    outcomes: [
      "Achieved consistent top-3 ranking in Google Maps 3-Pack for 'authentic Banarasi silk saree Varanasi'",
      "Generated over 180+ verified direct phone calls and 240+ WhatsApp inquiry chats per month",
      "Eliminated reliance on commission intermediaries, increasing direct studio gross margin by 28%"
    ],
    quote: {
      text: "CoreClick gave our heritage craft the modern digital presence it deserved. Discerning buyers now find our workshop directly without commission agents.",
      author: "Rajesh K.",
      role: "Founder & Master Weaver"
    }
  },
  {
    id: "aura-apparel-meta-performance-ads",
    slug: "aura-apparel-meta-performance-ads",
    title: "Aura Apparel Scaled Acquisition Engine",
    client: "Aura Contemporary Apparel",
    industry: "Fashion & Direct-to-Consumer",
    serviceCategory: "Performance Marketing",
    isConcept: false,
    summary: "Architected a full-funnel Meta Ads and creative testing workflow that scaled monthly sales while maintaining profitable return on ad spend.",
    image: "/src/assets/images/work_performance_ads_1793700731377.webp",
    imageAlt: "Modern digital marketing performance dashboard showing ROAS and campaign metrics on laptop and smartphone",
    metrics: [
      { value: "4.8x", label: "Blended Return on Ad Spend (ROAS)", timeframe: "Over 90 Days" },
      { value: "-34%", label: "Reduction in Customer Acquisition Cost", timeframe: "Within 60 Days" },
      { value: "240%", label: "Increase in Monthly Online Orders", timeframe: "Q3 Campaign" }
    ],
    challenge: "The brand suffered from volatile ad performance on Instagram. Ad sets would perform well for 7 days before creative fatigue caused cost per acquisition (CPA) to surge by 70%. Their attribution was broken following browser privacy updates.",
    strategy: "We implemented Meta Conversions API (CAPI) server-side tracking for zero data dropoff, restructured campaigns into broad targeting cohorts, and initiated a weekly creative sprint testing 12 modular hook and format variations every single week.",
    deliverables: [
      "Meta Business Manager & CAPI server-side event tracking integration",
      "Creative testing framework with weekly hook, body, and CTA iterations",
      "High-speed mobile checkout landing pages with 1-click payment flows",
      "Automated abandon-cart WhatsApp sequence recovering dropped checkouts"
    ],
    outcomes: [
      "Sustained 4.8x ROAS while scaling monthly media budget from ₹50,000 to ₹3,50,000+",
      "Cut customer acquisition cost from ₹1,120 down to ₹740 per confirmed order",
      "Generated predictable cash-flow engine supporting warehouse inventory expansion"
    ],
    quote: {
      text: "The weekly creative testing system CoreClick implemented turned our ad account from an erratic gamble into our most predictable sales channel.",
      author: "Pooja V.",
      role: "Head of Marketing"
    }
  },
  {
    id: "zenith-supply-chain-b2b-web",
    slug: "zenith-supply-chain-b2b-web",
    title: "Zenith Global Logistics Enterprise Website",
    client: "Zenith Supply Chain Solutions",
    industry: "Logistics & B2B Services",
    serviceCategory: "Website Development",
    isConcept: true,
    summary: "A conceptual redesign of an enterprise B2B logistics platform, focusing on sub-second page performance, interactive rate calculators, and high-intent RFQ lead funnels.",
    image: "/src/assets/images/work_web_development_1793700732422.webp",
    imageAlt: "Responsive modern web application displayed on ultra-thin laptop and tablet with contemporary UI/UX layout",
    metrics: [
      { value: "< 1.1s", label: "Mobile Page Load Speed", timeframe: "99th Percentile" },
      { value: "+62%", label: "RFQ Form Completion Rate", timeframe: "Concept Benchmark" },
      { value: "100/100", label: "Google Lighthouse Performance Score", timeframe: "Audited" }
    ],
    challenge: "Traditional B2B logistics websites are notoriously slow, cluttered with technical jargon, and present visitors with dense 20-field quote forms that cause high drop-off rates before shipping quotes are submitted.",
    strategy: "Designed a clean, modular component architecture built with modern React and Tailwind CSS. Split the lengthy RFQ request into an interactive 3-step freight estimator that pre-qualifies cargo type before requesting contact information.",
    deliverables: [
      "Interactive 3-step freight volume & route estimator component",
      "Ultra-fast React frontend architecture with 0ms visual layout shift",
      "Enterprise lead qualification routing and CRM webhook integration",
      "Responsive layout optimized for procurement managers on desktop and tablet"
    ],
    outcomes: [
      "Demonstrated how reducing friction in B2B enquiry forms dramatically increases qualified quote volume",
      "Established sub-second mobile page speed eliminating mobile bounce penalties",
      "Showcased modern editorial B2B design elevating perceived corporate credibility"
    ]
  },
  {
    id: "kashi-wellness-brand-system",
    slug: "kashi-wellness-brand-system",
    title: "Kashi Wellness Studio & Care Identity",
    client: "Kashi Holistic Wellness",
    industry: "Healthcare & Wellness",
    serviceCategory: "Branding",
    isConcept: true,
    summary: "A conceptual brand identity system blending timeless spiritual wellness iconography with modern clinical elegance for high-end holistic practices.",
    image: "/src/assets/images/work_brand_identity_1793700731186.webp",
    imageAlt: "Sophisticated brand identity mockup spread on tactile paper with business cards and minimalist typography samples",
    metrics: [
      { value: "100%", label: "Vector Master Assets Delivered", timeframe: "SVG, AI, PDF" },
      { value: "40+ Pages", label: "Comprehensive Brand Guidelines Handbook", timeframe: "Complete" },
      { value: "2x", label: "Target Perceived Brand Equity", timeframe: "Design Index" }
    ],
    challenge: "Ayurvedic and wellness clinics frequently use cliché, low-resolution lotus motifs and muddy color palettes that struggle to compete with premium modern medical spas and international health retreats.",
    strategy: "Developed an elevated visual identity anchored in sacred geometry and warm natural mineral tones. Paired a refined serif display font with clean geometric sans typography to communicate both heritage depth and clinical precision.",
    deliverables: [
      "Primary logomark, secondary wordmark, and responsive app icon system",
      "Complete stationery suite including appointment cards, prescription pads, and gift envelopes",
      "Custom brand typography pairings and accessible digital color tokens",
      "Digital guidelines manual specifying logo clearance, minimum sizing, and photography direction"
    ],
    outcomes: [
      "Created a distinctive visual identity that bridges ancient holistic wisdom and modern healthcare",
      "Provided an all-in-one scalable brand toolkit ready for physical clinic signage and digital channels",
      "Eliminated visual inconsistency across physical collateral and digital touchpoints"
    ]
  }
];
