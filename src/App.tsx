/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { HomePage } from "./pages/HomePage";

// Route-based code splitting for subpages to keep initial bundle ultra-light
const AboutPage = lazy(() => import("./pages/AboutPage").then((m) => ({ default: m.AboutPage })));
const ServicesOverviewPage = lazy(() =>
  import("./pages/ServicesOverviewPage").then((m) => ({ default: m.ServicesOverviewPage }))
);
const ServiceDetailPage = lazy(() =>
  import("./pages/ServiceDetailPage").then((m) => ({ default: m.ServiceDetailPage }))
);
const PerformanceMarketingPage = lazy(() =>
  import("./pages/PerformanceMarketingPage").then((m) => ({ default: m.PerformanceMarketingPage }))
);
const SocialMediaMarketingPage = lazy(() =>
  import("./pages/SocialMediaMarketingPage").then((m) => ({ default: m.SocialMediaMarketingPage }))
);
const SeoServicePage = lazy(() =>
  import("./pages/SeoServicePage").then((m) => ({ default: m.SeoServicePage }))
);
const WebsiteDevelopmentPage = lazy(() =>
  import("./pages/WebsiteDevelopmentPage").then((m) => ({ default: m.WebsiteDevelopmentPage }))
);
const WorkOverviewPage = lazy(() =>
  import("./pages/WorkOverviewPage").then((m) => ({ default: m.WorkOverviewPage }))
);
const CaseStudyDetailPage = lazy(() =>
  import("./pages/CaseStudyDetailPage").then((m) => ({ default: m.CaseStudyDetailPage }))
);
const BlogsOverviewPage = lazy(() =>
  import("./pages/BlogsOverviewPage").then((m) => ({ default: m.BlogsOverviewPage }))
);
const BlogDetailPage = lazy(() =>
  import("./pages/BlogDetailPage").then((m) => ({ default: m.BlogDetailPage }))
);
const ContactPage = lazy(() =>
  import("./pages/ContactPage").then((m) => ({ default: m.ContactPage }))
);
const ThankYouPage = lazy(() =>
  import("./pages/ThankYouPage").then((m) => ({ default: m.ThankYouPage }))
);
const PrivacyPolicyPage = lazy(() =>
  import("./pages/PrivacyPolicyPage").then((m) => ({ default: m.PrivacyPolicyPage }))
);
const TermsPage = lazy(() =>
  import("./pages/TermsPage").then((m) => ({ default: m.TermsPage }))
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage }))
);
const AdLandingPage = lazy(() =>
  import("./pages/landing/AdLandingPage").then((m) => ({ default: m.AdLandingPage }))
);

const PageLoadingFallback: React.FC = () => (
  <div className="min-h-[50vh] flex items-center justify-center bg-[#FFF9F6]">
    <div className="w-8 h-8 rounded-full border-2 border-[#FF6038] border-t-transparent animate-spin" />
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoadingFallback />}>
        <Routes>
          {/* Dedicated Campaign Advertising Landing Pages (Self-contained layout) */}
          <Route path="/lp/:campaign/" element={<AdLandingPage />} />
          <Route path="/lp/:campaign" element={<AdLandingPage />} />

          {/* Standard Website Pages (Wrapped in MainLayout with Header, Footer, Floating WhatsApp) */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about/" element={<AboutPage />} />
            <Route path="/about" element={<AboutPage />} />

            {/* Services Architecture */}
            <Route path="/services/" element={<ServicesOverviewPage />} />
            <Route path="/services" element={<ServicesOverviewPage />} />
            <Route path="/services/performance-marketing/" element={<PerformanceMarketingPage />} />
            <Route path="/services/performance-marketing" element={<PerformanceMarketingPage />} />
            <Route path="/services/social-media-marketing/" element={<SocialMediaMarketingPage />} />
            <Route path="/services/social-media-marketing" element={<SocialMediaMarketingPage />} />
            <Route path="/services/seo/" element={<SeoServicePage />} />
            <Route path="/services/seo" element={<SeoServicePage />} />
            <Route path="/services/website-development/" element={<WebsiteDevelopmentPage />} />
            <Route path="/services/website-development" element={<WebsiteDevelopmentPage />} />
            <Route path="/services/:slug/" element={<ServiceDetailPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />

            {/* Work & Case Studies */}
            <Route path="/work/" element={<WorkOverviewPage />} />
            <Route path="/work" element={<WorkOverviewPage />} />
            <Route path="/work/:slug/" element={<CaseStudyDetailPage />} />
            <Route path="/work/:slug" element={<CaseStudyDetailPage />} />

            {/* CoreClick Journal & Blogs */}
            <Route path="/blogs/" element={<BlogsOverviewPage />} />
            <Route path="/blogs" element={<BlogsOverviewPage />} />
            <Route path="/blogs/:slug/" element={<BlogDetailPage />} />
            <Route path="/blogs/:slug" element={<BlogDetailPage />} />

            {/* Backward Compatibility Redirects from /insights */}
            <Route path="/insights/" element={<Navigate to="/blogs/" replace />} />
            <Route path="/insights" element={<Navigate to="/blogs/" replace />} />
            <Route path="/insights/:slug/" element={<Navigate to="/blogs/" replace />} />
            <Route path="/insights/:slug" element={<Navigate to="/blogs/" replace />} />

            {/* Contact & Conversions */}
            <Route path="/contact/" element={<ContactPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/thank-you/" element={<ThankYouPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />

            {/* Legal Pages */}
            <Route path="/privacy-policy/" element={<PrivacyPolicyPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions/" element={<TermsPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />

            {/* 404 Fallback */}
            <Route path="/404/" element={<NotFoundPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
