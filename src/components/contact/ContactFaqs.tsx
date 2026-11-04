import React, { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    q: "1. What services does CoreClick offer?",
    a: "CoreClick provides 12 specialized digital capabilities across Paid Advertising (Google Search & Meta Ads, Performance Marketing, Lead Gen), Organic Growth (SEO, Local Maps SEO, Strategy), Brand & Creative (Social Media Reels, Content, Branding), and Tech & Conversion (React Web Development, Landing Page CRO).",
  },
  {
    q: "2. Do you work with small businesses?",
    a: "Yes! We work with ambitious local SMBs in Varanasi and across India as well as scaling regional brands, tailoring acquisition strategies to match your unit economics and budget.",
  },
  {
    q: "3. Can I choose an individual service?",
    a: "辦理. Whether you need a standalone high-speed landing page, dedicated Meta Reels creative, or a targeted Google Search campaign, every service works independently or combines into a multi-channel growth system.",
  },
  {
    q: "4. Do you provide Google Ads and Meta Ads management?",
    a: "Yes. We build, manage, and optimize Search, Performance Max, Instagram Reels, and Facebook Ads campaigns with 100% client account ownership and server-side CAPI tracking.",
  },
  {
    q: "5. Can CoreClick help with local SEO in Varanasi?",
    a: "Yes, local SEO is one of our flagship capabilities. We optimize your Google Business Profile, local citations, and geo-targeted keywords so your business dominates the Google Maps 3-Pack.",
  },
  {
    q: "6. Do you design and develop websites?",
    a: "Yes. We build ultra-fast, mobile-first React and Vite websites engineered for sub-1.5s loading speeds, high conversion rates, and zero layout shift.",
  },
  {
    q: "7. How do you determine project pricing?",
    a: "Project pricing is transparent and based on scope, deliverables, and campaign scale. Following your discovery call, we provide itemized proposals with zero hidden fees.",
  },
  {
    q: "8. How do I get started?",
    a: "Simply complete the business enquiry form above, or call/WhatsApp us directly at +91 87074 14150. A senior strategist will review your requirements and schedule your discovery consultation.",
  },
];

export const ContactFaqs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-[#FFF9F6] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF0E9] border border-[#FF6038]/20 text-xs font-mono font-bold uppercase tracking-wider text-[#FF6038]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" />
            <span>BEFORE WE GET STARTED</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111321] tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-sm text-[#727383] max-w-xl mx-auto">
            Clear answers regarding our services, engagement models, and onboarding process.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#FF6038] shadow-[6px_6px_0px_0px_#111321]"
                    : "border-[#111321]/15 shadow-sm hover:border-[#111321]/30"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038]"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-extrabold text-base md:text-lg text-[#111321]">
                    {faq.q}
                  </span>

                  <span
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "bg-gradient-brand text-white rotate-180" : "bg-[#FFF0E9] text-[#FF6038]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-[#343644] leading-relaxed border-t border-[#111321]/10 bg-[#FFF9F6]/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
