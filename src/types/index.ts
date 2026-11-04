export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  category: "Paid Advertising" | "Organic Growth" | "Brand & Creative" | "Tech & Conversion";
  challenges: string[];
  approach: string[];
  deliverables: string[];
  benefits: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  relatedServices: string[]; // slugs
  faqs: { question: string; answer: string }[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  serviceCategory: string;
  isConcept: boolean; // clearly distinguish real vs concept per instructions
  summary: string;
  image: string;
  imageAlt: string;
  metrics: { value: string; label: string; timeframe: string }[];
  challenge: string;
  strategy: string;
  deliverables: string[];
  outcomes: string[];
  quote?: { text: string; author: string; role: string };
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  publishedDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  summary: string;
  content: {
    heading: string;
    body: string;
  }[];
  keyTakeaways: string[];
  relatedSlugs: string[];
}

export interface LeadSubmission {
  id?: string;
  fullName: string;
  phone: string;
  email?: string;
  businessName?: string;
  city?: string;
  serviceInterestedIn?: string;
  message?: string;
  submittedAt?: string;
  sourceUrl?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

export interface LeadResponse {
  success: boolean;
  message: string;
  leadId?: string;
  errors?: Record<string, string>;
}
