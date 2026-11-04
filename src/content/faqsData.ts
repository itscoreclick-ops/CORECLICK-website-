export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const GLOBAL_FAQS: FAQItem[] = [
  {
    id: "services-offered",
    category: "Services",
    question: "What specific digital marketing services does CoreClick offer?",
    answer: "CoreClick provides full-spectrum digital growth solutions including Performance Marketing (Google Ads & Meta Ads), Search Engine Optimization (SEO), Local SEO & Google Business Profile optimization, Social Media Marketing, Brand Identity Design, Content Marketing, High-Speed Website Development, and Conversion-Engineered Landing Pages."
  },
  {
    id: "pricing-quotes",
    category: "Pricing & Quotations",
    question: "How do you price your marketing and web development services?",
    answer: "Every business has distinct goals, current baselines, and competitive landscapes. We do not use arbitrary generic packages. Instead, following a discovery consultation, we provide a transparent, itemized proposal based on your required deliverables, campaign scope, and strategic objectives."
  },
  {
    id: "ad-budgets",
    category: "Paid Advertising",
    question: "Are advertising budgets paid directly to Google and Meta or to CoreClick?",
    answer: "Ad spend budgets are billed directly by Google Ads and Meta Ads to your own corporate credit card or billing account. You retain 100% ownership and administrative access to all ad accounts, pixel data, and campaign assets. Our fee covers strategy, creative production, tracking setup, daily optimization, and reporting."
  },
  {
    id: "timelines",
    category: "Execution",
    question: "What is the typical timeline to launch a new marketing campaign or website?",
    answer: "Paid advertising campaigns (Google Search, Meta Ads) and high-converting landing pages are typically architected, written, designed, and launched within 5 to 7 business days. Full custom website design and development projects generally take 2 to 4 weeks depending on feature complexity and scope."
  },
  {
    id: "reporting-communication",
    category: "Reporting",
    question: "How often will we receive reports on our campaign performance?",
    answer: "We provide clients with a real-time 24/7 analytics dashboard tracking impressions, clicks, qualified leads, and ROAS. Additionally, we conduct bi-weekly strategic review calls and deliver comprehensive monthly executive summaries analyzing what worked, what was optimized, and next-sprint initiatives."
  },
  {
    id: "onboarding-process",
    category: "Onboarding",
    question: "How do we get started working with CoreClick?",
    answer: "Getting started is straightforward: 1) Fill out our contact form or send a WhatsApp message to 8707414150; 2) We will schedule a 30-minute discovery consultation to understand your business objectives and current challenges; 3) We deliver a tailored strategy and transparent proposal; 4) Upon agreement, onboarding begins within 48 hours."
  },
  {
    id: "location-varanasi",
    category: "Agency",
    question: "Are your services limited to businesses located in Varanasi?",
    answer: "While CoreClick is proudly founded and headquartered in Varanasi, Uttar Pradesh, and specializes in regional local market dominance, we serve clients across India and internationally. Our remote collaboration workflows, digital dashboards, and video strategy sessions ensure seamless communication regardless of your location."
  }
];
