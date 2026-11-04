# CoreClick — Interactive Digital Marketing Agency Website

**Tagline:** Click Smart. Grow Fast.  
**Headquarters:** Varanasi, Uttar Pradesh, India.  
**Contact:** Phone: +91 87074 14150 | WhatsApp: +91 87074 14150 | Email: itscoreclick@gmail.com  

---

## 1. Project Overview

CoreClick is a modern, high-performance digital marketing and business growth agency website built with **React**, **TypeScript**, **Tailwind CSS v4**, and **React Router**. The website is engineered to establish CoreClick as a strategic growth partner combining unit-economic paid advertising, search engine optimization, distinctive brand identity, and sub-second web experiences.

### Key Architecture & Features

- **Official Brand System:** Signature orange-to-coral-to-pink gradient (`#FF8A24` → `#FF6038` → `#FF087F`) matched directly to the CoreClick cursor-inspired brand motif, with deep near-black (`#0B0F17`) contrast and clean white surfaces.
- **Genuine Multi-Page Architecture:** Full routing across 20+ dedicated routes with canonical URLs and breadcrumb trails.
- **12 Dedicated Service Pages:** Unique copy, customer challenges, CoreClick methodology, itemized deliverables, and service-specific FAQs for:
  - Performance Marketing (`/services/performance-marketing/`)
  - Google Ads (`/services/google-ads/`)
  - Meta Ads (`/services/meta-ads/`)
  - Search Engine Optimization (`/services/seo/`)
  - Local SEO & Google Business Profile (`/services/local-seo/`)
  - Social Media Marketing (`/services/social-media-marketing/`)
  - Branding & Identity (`/services/branding/`)
  - Content Marketing (`/services/content-marketing/`)
  - Website Development (`/services/website-development/`)
  - Landing Page Design & CRO (`/services/landing-page-design/`)
  - Lead Generation Funnels (`/services/lead-generation/`)
  - Growth Strategy Blueprints (`/services/digital-marketing-strategy/`)
- **Interactive Portfolio & Case Studies:** Filterable case study gallery with clear distinction between verified client projects and concept architectures.
- **Insights & Growth Playbooks:** Authoritative editorial articles with live keyword search, reading time indicators, and key takeaway summaries.
- **6 Dedicated Advertising Landing Pages:** High-conversion funnel landing pages for Google Ads and Meta Ads campaigns (`/lp/*`).
- **Real Lead Capture API:** Client-side validation + server-side validation with Indian mobile number checks, email format validation, duplicate submission protection, and UTM parameter capture.
- **Dynamic Floating WhatsApp Widget:** Prefilled, URL-encoded message dynamically using the central configuration number.
- **SEO & Structured Data:** Semantic HTML, Schema.org JSON-LD (Organization, ProfessionalService, WebSite, Article, Service), `sitemap.xml`, and `robots.txt`.

---

## 2. Directory Structure

```text
├── public/
│   ├── favicon.svg          # CoreClick cursor motif SVG favicon
│   ├── robots.txt           # Search crawler directives
│   └── sitemap.xml          # Complete URL index for search engines
├── src/
│   ├── assets/              # Generated high-resolution image assets
│   ├── components/
│   │   ├── common/          # Logo, Button, Breadcrumbs, Accordion, WhatsApp, SeoHead
│   │   ├── forms/           # Validated ContactForm with Indian phone support
│   │   └── layout/          # Header (3-zone contract), Footer, MainLayout
│   ├── config/              # Centralized siteConfig.ts
│   ├── content/             # Services, Projects, Insights, and FAQ datasets
│   ├── pages/               # Multi-page views (Home, About, Services, Work, Insights, Contact, etc.)
│   ├── services/            # Lead submission API client & local backup
│   ├── types/               # TypeScript interfaces
│   ├── App.tsx              # React Router definitions
│   ├── index.css            # Tailwind CSS v4 setup & gradient utilities
│   └── main.tsx             # Entry mount
├── index.html               # Font preconnects, SEO metadata, JSON-LD schema
├── package.json
├── server.ts                # Full-stack Node/Express server with /api/leads
├── vite.config.ts           # Vite bundler configuration with connect middleware
└── DEPLOYMENT.md            # Production deployment guide
```

---

## 3. Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local dev server (port 3000)
npm run dev

# 3. Production build
npm run build

# 4. Run full-stack production server
npm run start
```
