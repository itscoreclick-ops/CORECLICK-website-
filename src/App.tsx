/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesOverviewPage } from "./pages/ServicesOverviewPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { WorkOverviewPage } from "./pages/WorkOverviewPage";
import { CaseStudyDetailPage } from "./pages/CaseStudyDetailPage";
import { BlogsOverviewPage } from "./pages/BlogsOverviewPage";
import { BlogDetailPage } from "./pages/BlogDetailPage";
import { ContactPage } from "./pages/ContactPage";
import { ThankYouPage } from "./pages/ThankYouPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsPage } from "./pages/TermsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { AdLandingPage } from "./pages/landing/AdLandingPage";
import { Navigate } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
