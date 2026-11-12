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

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: "Digital Marketing" | "Google Ads" | "Meta Ads" | "SEO" | "Social Media" | "Branding" | "Website & CRO" | "Business Growth" | string;
  publishedDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  summary: string;
  featuredImage: string;
  imageAlt: string;
  isFeatured?: boolean;
  content: {
    id?: string;
    heading: string;
    body: string;
    callout?: string;
    bulletPoints?: string[];
  }[];
  tableOfContents?: { id: string; title: string }[];
  keyTakeaways: string[];
  relatedSlugs: string[];
}

export type BlogArticle = BlogPost;
export type InsightArticle = BlogPost;

export interface LeadSubmission {
  id?: string;
  fullName: string;
  phone: string;
  email?: string;
  businessName?: string;
  city?: string;
  industry?: string;
  serviceInterestedIn?: string;
  websiteUrl?: string;
  instagramProfile?: string;
  targetKeywords?: string;
  projectType?: string;
  timeline?: string;
  estimatedPages?: string;
  budgetRange?: string;
  adBudget?: string;
  preferredPlatform?: string;
  contentFrequency?: string;
  businessObjectives?: string;
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
