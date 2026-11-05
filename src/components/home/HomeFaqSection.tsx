import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Sparkles, MessageCircle, ArrowRight, Phone } from "lucide-react";
import { CONFIG } from "../../config/siteConfig";

interface FaqItem {
  id: number;
  q: string;
  a: string;
}

const FAQS_DATA: FaqItem[] = [
  {
    id: 1,
    q: "What specific digital marketing services does CoreClick offer?",
    a: "CoreClick provides digital growth solutions including Google Ads, Meta Ads, SEO, Local SEO, Google Business Profile optimization, social media marketing, branding, content marketing, website development and conversion-focused landing pages.",
  },
  {
    id: 2,
    q: "How do you price your marketing and web development services?",
    a: "Pricing depends on your business goals, project scope, required services and campaign complexity. We provide customized proposals after understanding your requirements.",
  },
  {
    id: 3,
    q: "Are advertising budgets paid directly to Google and Meta or to CoreClick?",
    a: "Advertising budgets are paid directly to the respective advertising platforms through your business accounts. CoreClick's management fees are separate.",
  },
  {
    id: 4,
    q: "What is the typical timeline to launch a new marketing campaign or website?",
    a: "Campaign timelines depend on research, account setup, creative development and tracking requirements. Website timelines depend on the number of pages, functionality and project scope. We share a clear timeline before starting.",
  },
  {
    id: 5,
    q: "How often will we receive reports on our campaign performance?",
    a: "We provide regular performance updates covering campaign spend, leads, conversions, traffic and other relevant KPIs. Reporting frequency is agreed upon according to the engagement.",
  },
  {
    id: 6,
    q: "Will I own my advertising accounts, website and creative assets?",
    a: "Yes. Your business retains ownership of its advertising accounts and agreed project deliverables. Account access and ownership remain transparent.",
  },
  {
    id: 7,
    q: "Does CoreClick work with businesses outside Varanasi?",
    a: "Yes. CoreClick is based in Varanasi and can work with businesses across India and international clients through remote collaboration.",
  },
  {
    id: 8,
    q: "How do we get started?",
    a: "Contact us through the website, phone or WhatsApp. We'll understand your business requirements and recommend the right growth strategy.",
  },
];

export const HomeFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Default open item 1

  const toggleFaq = (id: number) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section className="py-24 md:py-32 bg-[#FFF9F6] text-[#11121D] relative overflow-hidden">
      {/* Background Subtle Radial Lighting & Grid Overlay */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 -left-32 w-96 h-96 bg-[#FF8A24]/10 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/3 -right-32 w-96 h-96 bg-[#FF087F]/10 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF0E9] border border-[#FF6038]/20 text-xs font-mono font-extrabold uppercase tracking-widest text-[#FF6038]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" />
            <span>CLEAR ANSWERS / EVERYTHING YOU NEED TO KNOW</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#11121D] tracking-tight">
            Frequently Asked <span className="text-gradient-brand">Questions.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#777585] leading-relaxed font-normal max-w-2xl mx-auto">
            Have questions about growing your business? Here's everything you need to know about working with CoreClick.
          </p>
        </div>

        {/* 2-Column Split Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: Editorial Contact Card & Brand Symbol */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#11121D] shadow-[8px_8px_0px_0px_#11121D] space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-[#FF6038]">
                  [SUPPORT & CLEARITY]
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-2xl text-[#11121D]">
                  Got Questions?
                </h3>
                <p className="text-xs sm:text-sm text-[#777585] mt-2 leading-relaxed">
                  We believe in 100% transparency. Here is how we partner with ambitious businesses to engineer real growth.
                </p>
              </div>

              {/* Decorative CoreClick Brand Logo Mark */}
              <div className="p-4 rounded-2xl bg-[#FFF0E9] border border-[#FF6038]/20 flex items-center gap-4">
                <img
                  src="/assets/aistudio/Gradient_C_Cursor_Logo_transparent.png"
                  alt="CoreClick Symbol"
                  className="w-12 h-12 object-contain"
                />
                <div className="space-y-0.5">
                  <div className="font-heading font-extrabold text-xs text-[#11121D]">
                    CoreClick Agency Team
                  </div>
                  <div className="text-[11px] text-[#777585]">
                    Direct consultations via WhatsApp & Call
                  </div>
                </div>
              </div>

              {/* Small Contact Card */}
              <div className="p-4 rounded-2xl bg-[#FFF9F6] border border-[#11121D]/10 space-y-2">
                <div className="text-xs font-extrabold text-[#11121D]">
                  Still have questions? Let's talk.
                </div>
                <p className="text-[11px] text-[#777585]">
                  Speak directly with senior strategists about your project scope.
                </p>
                <div className="pt-1 flex flex-col gap-2">
                  <Link
                    to="/contact/"
                    className="w-full py-3 px-4 rounded-full bg-[#11121D] text-white text-xs font-extrabold hover:bg-black transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF8A24]" />
                  </Link>

                  <a
                    href={`https://wa.me/91${CONFIG.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs font-extrabold hover:bg-emerald-100 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp Direct</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive FAQ Accordion List */}
          <div className="lg:col-span-8 space-y-4">
            {FAQS_DATA.map((faq) => {
              const isOpen = openIndex === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#FF6038] shadow-[8px_8px_0px_0px_#11121D] -translate-y-1"
                      : "border-[#11121D]/15 shadow-[4px_4px_0px_0px_rgba(17,18,29,0.06)] hover:border-[#11121D]/40 hover:-translate-y-0.5"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038]"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-heading font-extrabold text-base sm:text-lg transition-colors ${
                        isOpen ? "text-[#FF6038]" : "text-[#11121D]"
                      }`}
                    >
                      {faq.q}
                    </span>

                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-gradient-brand text-white rotate-180 shadow"
                          : "bg-[#FFF0E9] text-[#FF6038]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-[#11121D] leading-relaxed border-t border-[#11121D]/10 bg-[#FFF9F6]/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------------- 6. BOTTOM DISTINCTIVE CONTACT PANEL ---------------- */}
        <div className="mt-16 sm:mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#FFF0E9] via-[#FFE5ED] to-[#FFF0E9] border-2 border-[#11121D] shadow-[8px_8px_0px_0px_#11121D] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#11121D]">
              Still Have Questions?
            </h3>
            <p className="text-xs sm:text-sm text-[#777585] max-w-xl font-normal leading-relaxed">
              Let's discuss your business goals and find the right digital growth strategy.
            </p>
          </div>

          <Link
            to="/contact/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#11121D] text-white font-extrabold text-sm shadow-xl hover:bg-black transition-all shrink-0 hover:scale-105"
          >
            <span>Talk to Our Team</span>
            <ArrowRight className="w-4 h-4 text-[#FF8A24]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
