# CoreClick — Deployment & Configuration Guide

This guide explains how to deploy the CoreClick digital marketing agency website to platforms such as **Vercel**, **Netlify**, or **Cloud Run / VPS**, and how to configure custom domains, contact form webhooks, and analytics tracking.

---

## 1. Central Configuration (`src/config/siteConfig.ts`)

All repetitive agency information is managed centrally in `src/config/siteConfig.ts`. Updating contact details or branding tokens in this single file propagates across the entire website:

```typescript
export const CONFIG = {
  businessName: "CoreClick",
  tagline: "Click Smart. Grow Fast.",
  phone: "8707414150",
  whatsapp: "8707414150",
  email: "itscoreclick@gmail.com",
  address: "Varanasi, Uttar Pradesh, India",
  websiteURL: "https://coreclick.in", // Replace with your production domain
  // ...
};
```

---

## 2. Contact Form & Lead Ingestion Backend

The website includes a dual lead-capture pipeline:

1. **Client-Side:** Validates Indian 10-digit mobile numbers (`^[6-9]\d{9}$`), checks email formatting, prevents rapid duplicate submissions, and captures URL UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`).
2. **Server Endpoint (`/api/leads`):** In development, handled by Vite connect middleware in `vite.config.ts`. In production Node.js environments, handled by `server.ts`.
3. **Webhook Integration:** To forward leads directly to Google Sheets, Slack, or a CRM (HubSpot, LeadSquared, etc.), set your webhook endpoint in `CONFIG.integrations.webhookURL` or update `server.ts`.

---

## 3. Deploying to Netlify / Vercel (Static Hosting)

For static hosts that do not run Node.js backend processes:

### A. Netlify Configuration (`netlify.toml`)
```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### B. Vercel Configuration (`vercel.json`)
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 4. Deploying Full-Stack (Cloud Run, Docker, VPS)

Run the production build followed by the Node server:

```bash
# Build frontend assets
npm run build

# Start server (listens on process.env.PORT or 3000)
npm run start
```

---

## 5. SEO Pre-Launch Checklist

- [x] Canonical URLs match target domain (`https://coreclick.in`)
- [x] Schema.org JSON-LD structured data configured for Organization and LocalBusiness in Varanasi
- [x] XML Sitemap generated at `/sitemap.xml`
- [x] Crawler directives configured in `/robots.txt`
- [x] OpenGraph and Twitter card image previews verified
- [x] 404 error page returns user-friendly recovery links
