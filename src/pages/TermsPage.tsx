import React from "react";
import { SeoHead } from "../components/common/SeoHead";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { CONFIG } from "../config/siteConfig";

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-[#FFF9F6] text-[#111321] selection:bg-[#FF087F]/20 selection:text-[#FF087F]">
      <SeoHead
        title="Terms and Conditions | CoreClick – Digital Marketing Agency"
        description="Terms and conditions governing the use of CoreClick's website and digital marketing professional services."
        canonicalPath="/terms-and-conditions/"
      />

      <section className="relative bg-[#FFF9F6] py-16 md:py-24 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Terms and Conditions" }]} className="mb-6" />

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111321] tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-xs text-[#727383] mt-2">
            Last Updated: November 2026 · {CONFIG.businessName} (Varanasi, Uttar Pradesh, India)
          </p>

          <div className="mt-10 space-y-8 text-sm text-[#343644] leading-relaxed font-normal">
            <section className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-[#111321]">1. Agreement to Terms</h2>
              <p>
                By accessing this website or engaging CoreClick for digital marketing, performance
                advertising, search engine optimization, branding, or website development services, you
                agree to be bound by these Terms and Conditions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-[#111321]">2. Scope of Professional Services</h2>
              <p>
                CoreClick provides customized marketing and technical development services as defined
                in individual written proposals, Statements of Work (SOW), or service agreements. Any
                modifications to project scope will be mutually agreed upon in writing.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-[#111321]">3. Advertising Spend & Third-Party Platforms</h2>
              <p>
                All third-party media and advertising costs (including but not limited to Google Ads,
                Meta Ads, LinkedIn Ads, or domain registrations) are billed directly by the respective
                platform to the client's credit card or account. CoreClick's management fees cover
                strategy, creative design, copywriting, campaign setup, bid optimization, and
                reporting.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-[#111321]">4. Client Account Ownership</h2>
              <p>
                Clients retain 100% administrative ownership of their advertising accounts, domain
                names, hosting accounts, and website assets upon settlement of all contractual fees.
                CoreClick operates with complete transparency and does not hold client assets hostage.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-[#111321]">5. Realistic Performance Disclaimers</h2>
              <p>
                While CoreClick executes data-led marketing strategies conforming to industry best
                practices, digital marketing results depend on external variables outside any agency's
                control (such as competitor bidding changes, algorithm updates by Google or Meta, product
                market demand, and client sales closing capability). CoreClick does not guarantee
                fixed returns, specific search engine positions, or guaranteed lead volumes.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-[#111321]">6. Governing Law & Jurisdiction</h2>
              <p>
                These terms shall be governed by and interpreted in accordance with the laws of India.
                Any disputes arising under or related to these terms shall be subject to the exclusive
                jurisdiction of the courts in Varanasi, Uttar Pradesh.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};
