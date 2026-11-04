import { ServiceItem } from "../types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "performance-marketing",
    slug: "performance-marketing",
    title: "Performance Marketing",
    category: "Paid Advertising",
    shortDescription: "Data-led multi-channel paid acquisition focused strictly on customer acquisition costs and net revenue return.",
    heroHeadline: "Paid Media Engineered for Measurable Business Revenue",
    heroSubheadline: "Move beyond vanity impressions. We design, execute, and scale unified paid campaigns across Google, Meta, and programmatic channels where every rupee spent is tied directly to customer acquisition.",
    challenges: [
      "Escalating customer acquisition costs (CAC) with stagnant revenue growth",
      "Attribution blindness where you cannot pinpoint which channels actually generate profit",
      "Ad creative fatigue resulting in plummeting click-through rates after 2 weeks",
      "Budget wasted on accidental clicks and low-intent audience segments"
    ],
    approach: [
      "Rigorous unit economics analysis to establish target CAC and break-even ROAS thresholds",
      "Full-funnel audience mapping segmenting cold prospecting, mid-funnel consideration, and retention retargeting",
      "Algorithmic bid strategy optimization paired with conversion API (CAPI) server-side tracking",
      "Rapid creative testing cadences rotating 10+ hook and format variations per budget tranche"
    ],
    deliverables: [
      "Multi-channel paid media architecture roadmap",
      "Weekly creative sprints (static banners, motion cutdowns, carousels)",
      "Server-side conversion tracking & GA4 attribution integration",
      "Live performance dashboard with real-time ROAS, CPL, and conversion metrics",
      "Bi-weekly strategic optimization and budget allocation reviews"
    ],
    benefits: [
      { title: "Predictable Acquisition", desc: "Scale ad spend with statistical confidence rather than speculative guesswork." },
      { title: "Clean Attribution", desc: "Understand exactly which creative and channel converted the paying customer." },
      { title: "Zero Ad Waste", desc: "Aggressive exclusion lists and negative targeting prevent spending on irrelevant queries." }
    ],
    process: [
      { step: "01", title: "Audit & Baseline", desc: "Inspect current ad accounts, historical ROAS, and baseline conversion tracking." },
      { step: "02", title: "Target Economics", desc: "Set strict CAC guardrails and maximum bid thresholds based on your margins." },
      { step: "03", title: "Creative Engine", desc: "Develop high-intent ad copy, hooks, and tailored landing page destinations." },
      { step: "04", title: "Scale & Optimize", desc: "Iterate bid models, cull underperforming cohorts, and scale winning ad sets." }
    ],
    relatedServices: ["google-ads", "meta-ads", "landing-page-design", "lead-generation"],
    faqs: [
      {
        question: "How do you calculate target return on ad spend (ROAS)?",
        answer: "We reverse-engineer your required ROAS from your product or service gross margins, operational fulfillment overheads, and target net profit margin, ensuring you never run unprofitable ad campaigns."
      },
      {
        question: "What minimum ad spend budget do you recommend?",
        answer: "While we tailor strategies to your business stage, we recommend an initial testing budget that allows for at least 30–50 conversions per month to allow the ad platform algorithms to exit the learning phase."
      }
    ]
  },
  {
    id: "google-ads",
    slug: "google-ads",
    title: "Google Ads",
    category: "Paid Advertising",
    shortDescription: "High-intent Search, Performance Max, and YouTube campaigns that capture buyers at the exact moment they search.",
    heroHeadline: "Reach the Right Audience With Smarter Google Ads",
    heroSubheadline: "Capture high-intent prospects precisely when they search for your solutions. We build granular Search, Performance Max, and Shopping campaigns designed for qualified enquiries and maximum return.",
    challenges: [
      "High click costs on broad match keywords that burn budget without phone calls or leads",
      "Performance Max campaigns siphoning spend into useless Display network placements",
      "Competitors bidding on your brand terms and siphoning away your highest-intent leads",
      "Low Quality Scores causing you to pay 30–50% more per click than your competitors"
    ],
    approach: [
      "Single-intent ad group clustering (STAG) for laser-focused search relevance and high Quality Scores",
      "Aggressive negative keyword lists updated weekly to filter irrelevant queries",
      "Targeted ad extensions (sitelinks, callouts, call assets, structured snippets) maximizing click-through rates",
      "Offline conversion tracking importing closed deals back into Google Ads to train smart bidding"
    ],
    deliverables: [
      "Keyword research matrix segmenting commercial, transactional, and competitor terms",
      "Custom responsive search ad (RSA) copy with dynamic keyword insertion",
      "Negative keyword library filtering jobs, free seekers, and unrelated queries",
      "Conversion tracking configuration for form submits, click-to-call, and WhatsApp chats",
      "Monthly search term audit and bid adjustment reports"
    ],
    benefits: [
      { title: "Immediate Inbound Demand", desc: "Appear at the top of Google search results for your most profitable keywords." },
      { title: "Lower Cost Per Click", desc: "Higher Quality Scores directly reduce the cost you pay for premium positions." },
      { title: "Commercial Intent Only", desc: "Exclude casual information seekers so your budget only goes toward ready buyers." }
    ],
    process: [
      { step: "01", title: "Search Audit", desc: "Deep dive into historical search query logs, competitor ad copy, and keyword intent." },
      { step: "02", title: "Account Architecture", desc: "Restructure campaigns into high-granularity ad groups with matching landing pages." },
      { step: "03", title: "Launch & Negative Mining", desc: "Launch campaigns and mine daily search term reports for negative exclusions." },
      { step: "04", title: "Smart Bidding Migration", desc: "Transition from manual CPC to value-based smart bidding once conversion volume stabilizes." }
    ],
    relatedServices: ["performance-marketing", "landing-page-design", "local-seo", "seo"],
    faqs: [
      {
        question: "Do you guarantee first position on Google Search?",
        answer: "Google Ads auctions depend on bids, competitor activity, and Quality Score. We do not make misleading guarantees, but our structured ad groupings and landing page alignment consistently achieve top impression shares for high-converting commercial keywords."
      },
      {
        question: "How long before we see inbound leads from Google Ads?",
        answer: "Search campaigns begin capturing active searches immediately upon launch and approval. Most clients see initial qualified calls or enquiries within the first 48 to 72 hours of campaign activation."
      }
    ]
  },
  {
    id: "meta-ads",
    slug: "meta-ads",
    title: "Meta Ads (Facebook & Instagram)",
    category: "Paid Advertising",
    shortDescription: "Disruptive social advertising on Instagram and Facebook that turns scrollers into qualified enquiries and buyers.",
    heroHeadline: "Convert Attention Into Revenue on Facebook & Instagram",
    heroSubheadline: "Creative is your primary targeting lever on modern Meta advertising. We combine scroll-stopping visual hooks, conversion-focused copy, and server-side tracking to scale your brand profitably.",
    challenges: [
      "Ad fatigue causing cost per lead (CPL) to spike after the initial audience is exhausted",
      "iOS tracking limitations degrading Meta Pixel attribution and audience signals",
      "Running boost posts instead of structured Ads Manager conversion campaigns",
      "Low lead quality where prospects fill forms by accident and fail to pick up calls"
    ],
    approach: [
      "Meta Conversions API (CAPI) server-side integration for resilient tracking and reduced signal loss",
      "Creative diversification testing static quotes, UGC-style video reels, carousel product showcases, and founder explainers",
      "High-intent Lead Form workflows with custom verification questions to filter out casual clicks",
      "Broad targeting combined with algorithmic audience optimization letting the creative do the targeting"
    ],
    deliverables: [
      "Meta Business Manager & CAPI tracking setup",
      "Custom creative briefs, static banners, and vertical reel cutdowns",
      "Conversion-optimized Instant Forms or dedicated landing page funnels",
      "Audience custom lists (CRM upload, website visitors, video engagement)",
      "Weekly creative performance reports with thumb-stop and click-to-convert metrics"
    ],
    benefits: [
      { title: "High-Volume Lead Influx", desc: "Generate a steady, predictable flow of qualified customer enquiries." },
      { title: "Visual Brand Authority", desc: "Establish your brand presence in your target customer's daily social feed." },
      { title: "Filtered Lead Quality", desc: "Custom qualifying questions ensure your sales team only speaks to genuine buyers." }
    ],
    process: [
      { step: "01", title: "Audience & Angle Research", desc: "Map customer desires, objections, and pain points into actionable creative angles." },
      { step: "02", title: "Creative Production", desc: "Produce eye-catching graphics, hooks, and conversion copy tailored for Instagram." },
      { step: "03", title: "Campaign Launch", desc: "Set up ABO/CBO testing campaigns with conversion event optimization." },
      { step: "04", title: "Iteration & Scaling", desc: "Scale budget into winning creative angles while refreshing fatigue cohorts." }
    ],
    relatedServices: ["performance-marketing", "social-media-marketing", "landing-page-design", "branding"],
    faqs: [
      {
        question: "Why should we use Meta Ads instead of just boosting posts?",
        answer: "Boosting posts optimizes for cheap post engagement (likes and comments) from people who rarely buy. Meta Ads Manager allows us to optimize specifically for purchase conversions, qualified phone leads, or catalog sales with deep audience exclusions and server-side tracking."
      },
      {
        question: "How do you ensure leads are actually qualified and answer the phone?",
        answer: "We configure higher-intent lead forms with custom qualification questions (such as budget range, specific timeline, or company size) and dual confirmation steps, drastically eliminating accidental submissions."
      }
    ]
  },
  {
    id: "seo",
    slug: "seo",
    title: "Search Engine Optimization (SEO)",
    category: "Organic Growth",
    shortDescription: "Sustainable organic visibility engineered through technical excellence, topical authority, and high-intent keyword architecture.",
    heroHeadline: "Build Stronger Search Visibility for Your Business",
    heroSubheadline: "Earn long-term, compounding organic traffic. We optimize your website architecture, content depth, and domain authority so customers find your business when researching solutions.",
    challenges: [
      "Total reliance on paid ads that dry up customer flow the moment ad spend pauses",
      "Technical crawl errors, slow page speed scores, and broken internal link structures",
      "Publishing generic blog content that targets non-commercial keywords with zero buying intent",
      "Penalties or loss of rank following recent Google core algorithm updates"
    ],
    approach: [
      "Technical SEO auditing fixing Core Web Vitals, crawl budget leaks, and structured schema data",
      "Topical authority mapping creating pillar content and cluster pages that establish niche dominance",
      "High-intent keyword prioritization targeting bottom-of-funnel commercial keywords",
      "Strategic internal linking networks channeling PageRank directly to your high-converting service pages"
    ],
    deliverables: [
      "Full technical site audit with prioritized engineering punchlist",
      "Keyword gap and competitive SERP landscape analysis",
      "On-page optimization (titles, metas, H1s, schema markup, semantic content)",
      "Topical content roadmap for commercial and educational search queries",
      "Monthly organic traffic, keyword ranking, and conversion attribution reporting"
    ],
    benefits: [
      { title: "Zero Marginal Ad Cost", desc: "Organic clicks cost nothing per visit, lowering your blended CAC over time." },
      { title: "High Trust & Authority", desc: "Consumers instinctively trust organic page-one listings above sponsored ads." },
      { title: "Compounding Traffic", desc: "Well-ranked pages continue delivering qualified leads for months and years." }
    ],
    process: [
      { step: "01", title: "Technical Foundation", desc: "Resolve indexability, Core Web Vitals, mobile viewport, and schema errors." },
      { step: "02", title: "Commercial Keyword Research", desc: "Identify high-value terms your actual buyers use when ready to engage." },
      { step: "03", title: "On-Page & Architecture", desc: "Rewrite page structure, metadata, and body copy to match Google's search intent." },
      { step: "04", title: "Topical Expansion", desc: "Publish authoritative cluster articles and acquire relevant domain backlinks." }
    ],
    relatedServices: ["local-seo", "content-marketing", "website-development", "digital-marketing-strategy"],
    faqs: [
      {
        question: "How long does SEO take to produce measurable results?",
        answer: "SEO is a compounding, long-term discipline. Typically, technical fixes and on-page optimization show positive movement in 6 to 12 weeks, with significant organic traffic and commercial keyword rankings maturing over 4 to 6 months depending on competition."
      },
      {
        question: "Do you guarantee #1 ranking on Google?",
        answer: "No ethical agency can guarantee a #1 position, as Google's algorithms are proprietary and dynamic. What we guarantee is rigorous, white-hat execution conforming to Google's Search Essentials that consistently elevates search visibility and organic enquiry volume."
      }
    ]
  },
  {
    id: "local-seo",
    slug: "local-seo",
    title: "Local SEO & Google Business Profile",
    category: "Organic Growth",
    shortDescription: "Dominate Google Maps and local 3-pack search results for businesses serving Varanasi and regional markets.",
    heroHeadline: "Win the Google Maps 3-Pack and Local Search Queries",
    heroSubheadline: "When local customers search for businesses 'near me' or in Varanasi, ensure your business appears first. We optimize your Google Business Profile, local citations, and geo-targeted landing pages.",
    challenges: [
      "Missing out on the Google 3-Pack map box where 70% of local mobile clicks occur",
      "Inconsistent NAP (Name, Address, Phone) citations confusing search engine crawlers",
      "Unoptimized Google Business Profile with outdated photos, categories, or missing services",
      "Lack of authentic customer review collection mechanisms giving competitors an edge"
    ],
    approach: [
      "Comprehensive Google Business Profile (GBP) audit, primary/secondary category optimization, and geo-tagging",
      "Consistent local directory citations across trusted Indian and global business registries",
      "Location-specific page architecture with embedded local schema (PostalAddress, GeoCoordinates)",
      "Review generation playbook to systematically collect positive, keyword-rich customer feedback"
    ],
    deliverables: [
      "Fully claimed, verified, and keyword-optimized Google Business Profile",
      "Local citation cleanup removing duplicate or mismatched business listings",
      "Geo-targeted service page optimization for Varanasi and surrounding districts",
      "Automated QR code review request templates for in-store or post-service follow-up",
      "Monthly local search grid visibility rank tracking reports"
    ],
    benefits: [
      { title: "Direct Phone Calls", desc: "Drive direct inbound phone calls and WhatsApp chats straight from Google Maps." },
      { title: "In-Store Foot Traffic", desc: "Help customers navigate straight to your physical showroom or office." },
      { title: "Local Trust & Reviews", desc: "High ratings and verified local signals convert hesitant buyers instantly." }
    ],
    process: [
      { step: "01", title: "GBP Claim & Audit", desc: "Audit existing profile attributes, service areas, hours, and media assets." },
      { step: "02", title: "Citation Harmonization", desc: "Standardize phone, address, and name across all directories." },
      { step: "03", title: "Geo-Schema Setup", desc: "Implement LocalBusiness schema markup on your agency website." },
      { step: "04", title: "Review Velocity", desc: "Deploy systematic review generation workflows to boost map ranking." }
    ],
    relatedServices: ["seo", "google-ads", "website-development", "lead-generation"],
    faqs: [
      {
        question: "Is Local SEO only for businesses with physical retail storefronts?",
        answer: "No. Service-area businesses (such as contractors, consultants, clinics, and professional agencies) can define specific service radii in Google Business Profile and benefit tremendously from local search queries even without walk-in retail traffic."
      },
      {
        question: "How do customer reviews impact my Google Maps ranking?",
        answer: "Review velocity, overall star rating, and the presence of natural service keywords inside customer reviews are among the strongest local ranking factors Google's algorithm evaluates."
      }
    ]
  },
  {
    id: "social-media-marketing",
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    category: "Brand & Creative",
    shortDescription: "Engaging short-form video reels, brand content calendars, and community engagement that builds recognized brands.",
    heroHeadline: "Build a More Recognizable Brand on Social Media",
    heroSubheadline: "Transform your social channels into active growth drivers. We produce high-retention short-form video, thought-leadership carousels, and strategic content calendars that cultivate loyal local and national audiences.",
    challenges: [
      "Inconsistent posting schedules leaving your profiles looking inactive or abandoned",
      "Low reach and engagement caused by using outdated static graphics instead of reels",
      "Focusing on follower count instead of building an audience that actually enquires and buys",
      "Lack of cohesive visual branding across posts, stories, and video thumbnails"
    ],
    approach: [
      "Quarterly content strategy defining brand content pillars: educate, entertain, prove, and sell",
      "Short-form video production focused on strong 3-second visual and audio hooks",
      "Multi-slide carousel design breaking down complex customer problems into actionable insights",
      "Active DM and comment workflows routing interested commenters into sales enquiries"
    ],
    deliverables: [
      "Monthly content calendar with pre-approved post briefs and captions",
      "Short-form reels and TikTok/YouTube Shorts cutdowns with clean captions",
      "Branded Instagram templates and highlight covers",
      "Hashtag research matrix and optimal posting time schedules",
      "Monthly engagement, follower growth, and profile visit analytics reports"
    ],
    benefits: [
      { title: "Top-of-Mind Awareness", desc: "Keep your brand continuously visible to potential buyers in their daily feed." },
      { title: "Short-Form Video Reach", desc: "Tap into algorithmic discovery on Instagram Reels and YouTube Shorts." },
      { title: "Direct DM Inquiries", desc: "Turn casual post interactions into high-value sales conversations." }
    ],
    process: [
      { step: "01", title: "Brand Voice & Visual Style", desc: "Establish color palettes, typography rules, and content tone of voice." },
      { step: "02", title: "Calendar Planning", desc: "Draft monthly content schedules tied to business goals and seasonal promos." },
      { step: "03", title: "Asset Production", desc: "Design graphics, edit video reels, and write engaging copy with clear CTAs." },
      { step: "04", title: "Publish & Engage", desc: "Publish according to schedule, monitor comments, and route inbound DMs." }
    ],
    relatedServices: ["content-marketing", "meta-ads", "branding", "digital-marketing-strategy"],
    faqs: [
      {
        question: "How many times per week should our brand post?",
        answer: "Quality and algorithmic retention consistently outperform spammy quantity. We typically recommend 3 to 4 high-quality reels/carousels per week paired with daily interactive stories to keep engagement high without audience burnout."
      },
      {
        question: "Do you handle photography and video recording?",
        answer: "Yes, for local clients in Varanasi we coordinate content capture sessions, and for remote clients we provide detailed shot lists, scripting, and post-production editing on client-provided footage."
      }
    ]
  },
  {
    id: "branding",
    slug: "branding",
    title: "Branding & Brand Identity",
    category: "Brand & Creative",
    shortDescription: "Distinctive visual identities, logo design, brand guidelines, and messaging systems that command premium pricing.",
    heroHeadline: "Brand Identities That Command Respect and Premium Pricing",
    heroSubheadline: "Your brand is what people say about your business when you are not in the room. We create cohesive visual systems, logo marks, typography scales, and brand guidelines that set you apart from competitors.",
    challenges: [
      "Inconsistent logos, fonts, and colors across your storefront, cards, website, and social media",
      "Looking like a generic commodity business forced to compete solely on cheap prices",
      "Outdated visual presence that fails to convey the true quality of your products or services",
      "Difficulty scaling marketing materials because there are no clear brand guidelines"
    ],
    approach: [
      "Deep discovery into your brand values, target buyer psychology, and competitive positioning",
      "Concept development exploring distinctive logomarks, typography pairings, and color palettes",
      "Real-world application testing across packaging, digital screens, signage, and stationery",
      "Comprehensive Brand Style Guide documenting color codes, spacing, fonts, and voice"
    ],
    deliverables: [
      "Primary logo, secondary marks, and responsive favicon/app icon suite",
      "Curated color palette with primary, secondary, and accent hex codes",
      "Font pairing system for print, web, and presentation decks",
      "Official Brand Guidelines manual (PDF) covering usage rules and do-not-do's",
      "Social media profile kit, business card layouts, and letterhead stationery"
    ],
    benefits: [
      { title: "Pricing Power", desc: "Businesses with premium branding command significantly higher rates and margins." },
      { title: "Instant Recognition", desc: "Memorable design tokens make your advertising immediately identifiable." },
      { title: "Team Consistency", desc: "Clear guidelines ensure every designer and employee uses the exact same assets." }
    ],
    process: [
      { step: "01", title: "Discovery & Archetype", desc: "Define your core mission, audience persona, and brand character." },
      { step: "02", title: "Visual Exploration", desc: "Explore 2–3 distinct creative directions with logo concepts and moodboards." },
      { step: "03", title: "Refinement & Polish", desc: "Iterate on the selected direction to achieve optical balance and vector perfection." },
      { step: "04", title: "Asset Delivery", desc: "Deliver full production-ready vector assets (SVG, AI, PNG) and guidelines." }
    ],
    relatedServices: ["website-development", "social-media-marketing", "content-marketing", "landing-page-design"],
    faqs: [
      {
        question: "What files do we receive upon brand completion?",
        answer: "You receive complete vector master files (AI, EPS, SVG), high-resolution web formats (PNG with transparent backgrounds, WebP), print-ready PDFs, and the comprehensive brand guidelines handbook."
      },
      {
        question: "Can you rebrand an existing business without confusing our existing customers?",
        answer: "Yes. Brand evolutions can preserve familiar equity (such as recognizable shapes or color associations) while modernizing proportions, typography, and digital versatility."
      }
    ]
  },
  {
    id: "content-marketing",
    slug: "content-marketing",
    title: "Content Marketing",
    category: "Brand & Creative",
    shortDescription: "Authoritative articles, case studies, lead magnets, and customer guides that educate buyers and drive inbound leads.",
    heroHeadline: "Content That Educates Your Market and Drives Inbound Sales",
    heroSubheadline: "Stop publishing filler blogs that nobody reads. We develop authoritative content assets, industry guides, and case studies that answer your buyers' biggest questions and position you as the definitive expert.",
    challenges: [
      "Publishing generic, repetitive articles that fail to rank or convert readers into leads",
      "Sales team answering the same repetitive customer questions over and over",
      "No gated lead magnets to capture contact details of high-value prospects",
      "Lack of time and editorial bandwidth within your in-house team"
    ],
    approach: [
      "Customer interview extraction identifying real buying triggers, doubts, and evaluation criteria",
      "Editorial calendar aligned with search intent and sales enablement stages",
      "High-value lead magnet creation (calculators, checklists, industry reports)",
      "Multi-channel repurposing turning one core asset into articles, social carousels, and newsletters"
    ],
    deliverables: [
      "Quarterly content strategy and editorial roadmap",
      "In-depth, SEO-optimized articles (1,500–2,500 words) with custom visuals",
      "High-converting lead magnet PDFs and accompanying landing pages",
      "Email nurture sequence copy guiding subscribers to schedule discovery calls",
      "Content engagement, read-depth, and conversion tracking reports"
    ],
    benefits: [
      { title: "Shortened Sales Cycles", desc: "Educated prospects enter sales calls pre-sold on your methodology." },
      { title: "Passive Lead Capture", desc: "Lead magnets work 24/7 collecting verified email addresses and phone numbers." },
      { title: "Compounding Domain Equity", desc: "Authoritative content attracts natural backlinks and improves overall site rankings." }
    ],
    process: [
      { step: "01", title: "Topic Research", desc: "Identify customer friction points, competitor gaps, and high-value search queries." },
      { step: "02", title: "Subject-Matter Interview", desc: "Extract your team's real expertise so the content reflects genuine insight." },
      { step: "03", title: "Writing & Design", desc: "Draft clear, compelling copy accompanied by custom diagrams and illustrations." },
      { step: "04", title: "Distribution & Funneling", desc: "Publish, distribute across social and email, and track enquiry conversion." }
    ],
    relatedServices: ["seo", "social-media-marketing", "lead-generation", "branding"],
    faqs: [
      {
        question: "How do you ensure the written content matches our technical industry?",
        answer: "We never rely on generic AI fluff. Our process includes briefing calls with your subject-matter experts to extract proprietary insights, technical nuances, and authentic case studies."
      },
      {
        question: "How do you measure content marketing ROI?",
        answer: "We track assisted conversions, lead magnet downloads, qualified inbound demo requests from article pages, and organic keyword rankings in GA4."
      }
    ]
  },
  {
    id: "website-development",
    slug: "website-development",
    title: "Website Design & Development",
    category: "Tech & Conversion",
    shortDescription: "Ultra-fast, mobile-first, conversion-engineered modern websites that turn visitors into paying clients.",
    heroHeadline: "Websites Engineered for Speed, Distinction, and High Conversion",
    heroSubheadline: "Your website is your agency or business's 24/7 digital flagship. We design and build modern, responsive web experiences with sub-second loading speeds, airtight SEO foundations, and conversion-focused architecture.",
    challenges: [
      "Slow loading times causing mobile visitors to bounce before seeing your offer",
      "Outdated design templates that make your business look like a low-budget operation",
      "Messy navigation where visitors cannot find services or contact options easily",
      "Websites that look okay on desktop but completely break down on smartphones"
    ],
    approach: [
      "Mobile-first responsive architecture designed specifically for modern touch viewports",
      "Clean, modern tech stack (React, TypeScript, Tailwind CSS, Vite) delivering near-instant page loads",
      "Conversion rate optimization (CRO) principles embedded in every layout and call to action",
      "Full technical SEO setup with semantic HTML, Schema.org JSON-LD, sitemaps, and metadata"
    ],
    deliverables: [
      "Custom responsive design (Figma UI/UX layouts for desktop, tablet, and mobile)",
      "Production-ready frontend codebase with smooth animations and zero layout shifts",
      "Lead capture forms with real-time validation and server-side notifications",
      "Complete SEO architecture (canonical tags, open graph cards, schema markup)",
      "Comprehensive deployment guide and CMS or codebase documentation"
    ],
    benefits: [
      { title: "Sub-Second Performance", desc: "Fast-loading pages keep visitors engaged and improve Google search rankings." },
      { title: "Higher Conversion Rates", desc: "Clear user journeys and visible CTAs maximize enquiries from every visitor." },
      { title: "Airtight Mobile Usability", desc: "Flawless touch experience tailored for India's 80%+ mobile web audience." }
    ],
    process: [
      { step: "01", title: "Architecture & Wireframes", desc: "Map page hierarchy, user journeys, and conversion funnels." },
      { step: "02", title: "Visual UI/UX Design", desc: "Design bespoke layouts with brand typography, colors, and asset styling." },
      { step: "03", title: "Full-Stack Development", desc: "Code responsive components, interactive features, and form endpoints." },
      { step: "04", title: "QA & Deployment", desc: "Test across devices, verify SEO tags, and launch on high-speed infrastructure." }
    ],
    relatedServices: ["landing-page-design", "seo", "branding", "lead-generation"],
    faqs: [
      {
        question: "Will our website look good on all mobile devices?",
        answer: "Yes. Every single component is engineered mobile-first and tested rigorously across viewport widths from 360px up to 4K ultra-wide screens."
      },
      {
        question: "Can we easily update text, contact information, and images later?",
        answer: "Yes. All business configuration, contact phone numbers, WhatsApp links, and copy are cleanly modularized so changes can be made swiftly without touching complex code."
      }
    ]
  },
  {
    id: "landing-page-design",
    slug: "landing-page-design",
    title: "Landing Page Design & CRO",
    category: "Tech & Conversion",
    shortDescription: "High-converting, dedicated campaign landing pages built to maximize paid advertising return on ad spend.",
    heroHeadline: "Landing Pages Designed for Maximum Paid Ad Conversion",
    heroSubheadline: "Stop sending paid ad traffic to generic homepages. We design focused, distraction-free landing pages that align with your ad copy, eliminate objections, and guide visitors toward one clear conversion action.",
    challenges: [
      "Sending paid traffic to homepages with dozens of distracting links, resulting in 90%+ bounce rates",
      "Message mismatch where the ad promises one thing but the landing page says something else",
      "Cluttered, lengthy contact forms that scare prospects away before they submit",
      "Slow loading landing pages that trigger heavy Google Ads Quality Score penalties"
    ],
    approach: [
      "Strict single-objective layout eliminating auxiliary navigation to prevent conversion leaks",
      "Direct headline-to-ad copy alignment ensuring visitors instantly recognize their intent",
      "Frictionless forms with smart validation, clean mobile fields, and reassurance trust signals",
      "Strategic objection handling answering pricing, process, and credentials right above the form"
    ],
    deliverables: [
      "Conversion-engineered landing page wireframe and copywriting",
      "High-speed responsive landing page build optimized for under 1.5s load times",
      "Dedicated lead capture form with instant server-side dispatch",
      "UTM parameter capture script passing ad campaign data directly with the lead",
      "A/B test variant setup for headlines, hero visuals, and form lengths"
    ],
    benefits: [
      { title: "2x–3x Conversion Rates", desc: "Dedicated landing pages consistently generate 2x to 3x more leads than homepages." },
      { title: "Lower Cost Per Lead", desc: "Higher conversion efficiency directly reduces the ad spend required per enquiry." },
      { title: "Flawless Ad Tracking", desc: "Clean dedicated conversion URLs ensure 100% accurate pixel attribution." }
    ],
    process: [
      { step: "01", title: "Campaign Alignment", desc: "Audit target ad angles, audience demographics, and core conversion promise." },
      { step: "02", title: "Copywriting & Wireframing", desc: "Structure persuasive argument flow: hook, problem, solution, proof, CTA." },
      { step: "03", title: "Design & Build", desc: "Develop high-speed layout with clear visual hierarchy and mobile focus." },
      { step: "04", title: "Tracking & Launch", desc: "Wire conversion tracking, test submissions, and link to active ad campaigns." }
    ],
    relatedServices: ["performance-marketing", "google-ads", "meta-ads", "lead-generation"],
    faqs: [
      {
        question: "Why can't I just use my existing homepage for Google and Meta ads?",
        answer: "A homepage serves many purposes: browsing, reading about history, exploring different services. Visitors easily get distracted. A dedicated landing page focuses on one specific offer with zero distractions, delivering drastically higher conversion rates."
      },
      {
        question: "How fast can you build and launch a campaign landing page?",
        answer: "With our modular design system, custom conversion-focused landing pages can be fully written, designed, coded, and tested within 3 to 5 business days."
      }
    ]
  },
  {
    id: "lead-generation",
    slug: "lead-generation",
    title: "Lead Generation",
    category: "Paid Advertising",
    shortDescription: "End-to-end inbound and paid lead acquisition funnels that deliver pre-qualified prospects straight to your sales team.",
    heroHeadline: "Predictable B2B & Local Customer Acquisition Engines",
    heroSubheadline: "Fill your calendar with high-intent sales conversations. We build and manage comprehensive lead generation funnels combining hyper-targeted advertising, qualifying forms, and instant routing.",
    challenges: [
      "Unpredictable revenue caused by relying exclusively on word-of-mouth and erratic referrals",
      "Sales team wasting valuable hours calling unvetted contacts with no budget or real intent",
      "Leads cooling off because your system fails to alert the team in the first 5 minutes",
      "Inability to forecast monthly pipeline value and new customer intake"
    ],
    approach: [
      "Multi-step qualification funnels that gather essential project parameters before scheduling calls",
      "Dual-channel acquisition balancing immediate Google Search intent with Meta visual disruption",
      "Instant notification webhooks routing new leads to WhatsApp and email within seconds",
      "Conversion rate optimization continuously testing form fields, friction points, and value offers"
    ],
    deliverables: [
      "Complete lead acquisition funnel architecture and funnel blueprint",
      "Targeted ad campaign build and daily bid optimization",
      "Conversion-optimized lead capture form with phone and email validation",
      "Automated lead delivery into your CRM, email, or WhatsApp dashboard",
      "Weekly pipeline volume, lead cost, and qualification rate reporting"
    ],
    benefits: [
      { title: "Predictable Pipeline", desc: "Know with confidence how many new customer enquiries you will receive each week." },
      { title: "Higher Close Rates", desc: "Sales reps speak only with informed prospects who meet your criteria." },
      { title: "Rapid Speed-to-Lead", desc: "Instant notifications ensure your team calls prospects while intent is at its peak." }
    ],
    process: [
      { step: "01", title: "Ideal Customer Profile", desc: "Define exact criteria: target industry, geographic location, and purchase budget." },
      { step: "02", title: "Funnel Build", desc: "Develop the ad copy, qualification questionnaire, and conversion endpoints." },
      { step: "03", title: "Campaign Launch", desc: "Activate targeted traffic sources with strict audience and geo-targeting." },
      { step: "04", title: "Review & Optimize", desc: "Review closed-won feedback weekly to calibrate targeting toward highest-margin leads." }
    ],
    relatedServices: ["performance-marketing", "google-ads", "meta-ads", "landing-page-design"],
    faqs: [
      {
        question: "Do you sell shared lead lists?",
        answer: "Never. Every single lead generated through CoreClick campaigns is 100% exclusive to your business, generated under your brand, and never shared or resold."
      },
      {
        question: "How do we receive new leads when they submit their details?",
        answer: "Leads are instantly routed via webhook directly to your email, WhatsApp, or CRM system with full contact details, requested service, and UTM campaign source."
      }
    ]
  },
  {
    id: "digital-marketing-strategy",
    slug: "digital-marketing-strategy",
    title: "Digital Marketing Strategy",
    category: "Organic Growth",
    shortDescription: "Comprehensive growth roadmaps aligning brand, paid acquisition, retention, and technology to scale your enterprise.",
    heroHeadline: "Strategic Growth Roadmaps Built for Scalable Market Dominance",
    heroSubheadline: "Tactics without strategy are the noise before defeat. We audit your market positioning, customer journey, and unit economics to build a clear, prioritized growth roadmap that turns marketing from a cost center into a profit engine.",
    challenges: [
      "Spending money on disjointed marketing tactics with no unifying overarching plan",
      "Lack of alignment between marketing campaigns and actual business revenue goals",
      "Uncertainty about where to allocate the next tranche of marketing capital",
      "Struggling to differentiate your offerings in a crowded, competitive market"
    ],
    approach: [
      "Deep competitive intelligence analyzing competitor ad spend, keyword gaps, and positioning",
      "Unit economics and customer lifetime value (LTV) modeling to establish sustainable acquisition budgets",
      "Channel prioritization matrix identifying highest-leverage growth avenues for your specific stage",
      "Quarterly execution roadmap with prioritized milestones, KPIs, and resource requirements"
    ],
    deliverables: [
      "Comprehensive Digital Growth Strategy Document (30+ page blueprint)",
      "Customer persona and journey mapping across cold, warm, and hot phases",
      "Channel allocation budget model with forecasted CAC and payback periods",
      "MarTech stack audit and recommended tooling integration plan",
      "Executive quarterly strategy reviews and milestone tracking"
    ],
    benefits: [
      { title: "Clear Strategic Focus", desc: "Eliminate shiny-object syndrome and concentrate resources on proven levers." },
      { title: "Capital Efficiency", desc: "Avoid costly mistakes by allocating budget only to channels that fit your unit economics." },
      { title: "Cross-Functional Alignment", desc: "Align marketing, sales, and leadership behind shared growth targets." }
    ],
    process: [
      { step: "01", title: "Discovery & Audit", desc: "Deep dive into your current channels, historical metrics, and competitor landscape." },
      { step: "02", title: "Economics Modeling", desc: "Calculate sustainable CAC, margin thresholds, and realistic growth trajectories." },
      { step: "03", title: "Strategy Formulation", desc: "Synthesize findings into an actionable 90-day and 12-month execution blueprint." },
      { step: "04", title: "Execution Advisory", desc: "Guide and supervise tactical rollout to ensure strict adherence to strategic milestones." }
    ],
    relatedServices: ["performance-marketing", "seo", "branding", "lead-generation"],
    faqs: [
      {
        question: "Is this strategy document actionable or just theoretical high-level advice?",
        answer: "Our strategy blueprints are intensely tactical. Every recommendation includes exact channel allocations, target keywords, creative angles, timeline sprints, and measurable success metrics."
      },
      {
        question: "Can CoreClick also execute the strategy after creating it?",
        answer: "Yes. Most clients engage us for both the strategic blueprint and the full multi-channel execution across paid media, SEO, web development, and creative production."
      }
    ]
  }
];
