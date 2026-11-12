import React from "react";
import { Phone, MessageCircle, Mail, MapPin, ShieldCheck, Sparkles, ArrowRight, Check } from "lucide-react";
import { SeoHead } from "../components/common/SeoHead";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { ContactForm } from "../components/forms/ContactForm";
import { ContactFaqs } from "../components/contact/ContactFaqs";
import { CONFIG } from "../config/siteConfig";

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-[#FFF9F6] text-[#111321] selection:bg-[#FF087F]/20 selection:text-[#FF087F]">
      <SeoHead
        title="Contact Us — Start Your Growth Conversation | CoreClick Varanasi"
        description="Connect with CoreClick. Phone & WhatsApp: +91 87074 14150. Official Email: itscoreclick@gmail.com. Address: Varanasi, UP, India. Schedule your strategic digital growth consultation."
        canonicalPath="/contact/"
      />

      {/* ---------------- 1. EDITORIAL HERO INTRODUCTION ---------------- */}
      <section className="relative bg-[#FFF9F6] pt-12 pb-20 md:pt-16 md:pb-24 overflow-hidden">
        {/* Subtle Grid Backing */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"
        />

        {/* Soft Ambient Radial Lighting */}
        <div
          aria-hidden="true"
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#FF8A24]/15 via-[#FF6038]/15 to-[#FF087F]/15 rounded-full blur-3xl pointer-events-none"
        />

        {/* Watermark Brand Asset */}
        <div
          aria-hidden="true"
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 md:w-[420px] opacity-[0.04] pointer-events-none select-none"
        >
          <img
            src="/assets/aistudio/Gradient_C_Cursor_Logo_transparent.webp"
            width="420"
            height="280"
            loading="lazy"
            decoding="async"
            alt=""
            className="w-full h-auto"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact Us" }]} className="mb-6" />

          <div className="max-w-4xl space-y-5">
            {/* Small Label Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF0E9] border border-[#FF6038]/20 text-xs font-mono font-bold uppercase tracking-widest text-[#FF6038]">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" />
              <span>✦ LET'S CONNECT</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight text-[#111321] leading-[1.08]">
              Start Your Business <br />
              <span className="text-gradient-brand">Growth Conversation.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-[#343644] font-normal leading-relaxed max-w-3xl">
              Whether you're looking to generate more leads, strengthen your brand, improve search visibility, or build a high-performing website, let's discuss how CoreClick can help your business move forward.
            </p>
          </div>
        </div>

        {/* Smooth Organic Gradient Wave Transition */}
        <div className="w-full overflow-hidden leading-none mt-12 md:mt-16 relative h-16 sm:h-24">
          <svg
            viewBox="0 0 1440 90"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,35 C320,80 640,10 960,55 C1200,90 1360,25 1440,45 L1440,90 L0,90 Z"
              fill="#FFF0E9"
            />
          </svg>
        </div>
      </section>

      {/* ---------------- 2. MAIN CONTENT: INTERACTIVE CONTACT HUB & ENQUIRY FORM ---------------- */}
      <section className="relative pb-20 md:pb-28 bg-[#FFF0E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* ---------------- LEFT COLUMN: INTERACTIVE CONTACT CHANNELS HUB ---------------- */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#111321] shadow-[8px_8px_0px_0px_#111321] space-y-6">
                <div>
                  <h2 className="font-heading font-extrabold text-2xl text-[#111321]">
                    Let's Talk Business.
                  </h2>
                  <p className="text-xs sm:text-sm text-[#727383] mt-1 leading-relaxed">
                    Choose the easiest way to connect with our team.
                  </p>
                </div>

                {/* 4 Interactive Contact Rows */}
                <div className="space-y-4">
                  {/* 01 — Phone */}
                  <a
                    href={`tel:${CONFIG.phone}`}
                    className="group block p-4 rounded-2xl border-2 border-[#111321]/10 bg-[#FFF9F6] hover:border-[#FF8A24] hover:shadow-[4px_4px_0px_0px_#FF8A24] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        <div className="w-11 h-11 rounded-xl bg-[#FFF0E9] text-[#FF8A24] group-hover:bg-gradient-brand group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-sm">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-[10px] font-mono font-extrabold text-[#FF8A24] uppercase tracking-wider">
                            01 · CALL DIRECTLY
                          </div>
                          <div className="text-base font-extrabold text-[#111321] group-hover:text-[#FF8A24] transition-colors">
                            {CONFIG.formattedPhone}
                          </div>
                          <div className="text-[11px] text-[#727383] mt-0.5">
                            Speak with our team about your business requirements.
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#727383] group-hover:text-[#FF8A24] group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                  </a>

                  {/* 02 — WhatsApp */}
                  <a
                    href={`https://wa.me/91${CONFIG.whatsapp}?text=${encodeURIComponent(
                      CONFIG.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-4 rounded-2xl border-2 border-[#111321]/10 bg-[#FFF9F6] hover:border-emerald-500 hover:shadow-[4px_4px_0px_0px_#059669] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-sm">
                          <MessageCircle className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-[10px] font-mono font-extrabold text-emerald-600 uppercase tracking-wider">
                            02 · WHATSAPP MESSENGER
                          </div>
                          <div className="text-base font-extrabold text-[#111321] group-hover:text-emerald-600 transition-colors">
                            Chat with CoreClick
                          </div>
                          <div className="text-[11px] text-[#727383] mt-0.5">
                            Send us your requirements and start a conversation.
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#727383] group-hover:text-emerald-600 group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                  </a>

                  {/* 03 — Email */}
                  <a
                    href={`mailto:${CONFIG.email}`}
                    className="group block p-4 rounded-2xl border-2 border-[#111321]/10 bg-[#FFF9F6] hover:border-[#FF087F] hover:shadow-[4px_4px_0px_0px_#FF087F] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        <div className="w-11 h-11 rounded-xl bg-[#FFE5ED] text-[#FF087F] group-hover:bg-gradient-brand group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-sm">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-[10px] font-mono font-extrabold text-[#FF087F] uppercase tracking-wider">
                            03 · OFFICIAL EMAIL
                          </div>
                          <div className="text-base font-extrabold text-[#111321] group-hover:text-[#FF087F] transition-colors">
                            {CONFIG.email}
                          </div>
                          <div className="text-[11px] text-[#727383] mt-0.5">
                            Send us your project brief or business enquiry.
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#727383] group-hover:text-[#FF087F] group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                  </a>

                  {/* 04 — Location */}
                  <a
                    href="https://maps.google.com/?q=Varanasi,Uttar+Pradesh,India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-4 rounded-2xl border-2 border-[#111321]/10 bg-[#FFF9F6] hover:border-[#111321] hover:shadow-[4px_4px_0px_0px_#111321] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        <div className="w-11 h-11 rounded-xl bg-[#F0E9FF] text-[#111321] group-hover:bg-[#111321] group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-sm">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-[10px] font-mono font-extrabold text-[#111321] uppercase tracking-wider">
                            04 · AGENCY LOCATION
                          </div>
                          <div className="text-base font-extrabold text-[#111321] group-hover:text-[#FF6038] transition-colors">
                            {CONFIG.address}
                          </div>
                          <div className="text-[11px] text-[#727383] mt-0.5">
                            Serving businesses across India.
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#727383] group-hover:text-[#111321] group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                  </a>
                </div>
              </div>

              {/* Consultation Commitment Card */}
              <div className="bg-white p-6 rounded-3xl border-2 border-[#111321]/15 hover:border-[#FF6038] transition-all duration-300 space-y-4 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <ShieldCheck className="w-4.5 h-4.5" />
                  </div>
                  <span className="font-heading font-extrabold text-sm text-[#111321] uppercase tracking-wider">
                    OUR COMMITMENT
                  </span>
                </div>

                <ul className="text-xs text-[#343644] space-y-2.5 list-none p-0 m-0">
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                      ✓
                    </div>
                    <span>Clear communication and transparent proposals.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                      ✓
                    </div>
                    <span>No unnecessary services or misleading promises.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                      ✓
                    </div>
                    <span>Recommendations based on your business requirements.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ---------------- RIGHT COLUMN: PREMIUM INTERACTIVE ENQUIRY FORM ---------------- */}
            <div className="lg:col-span-7">
              <ContactForm
                formTitle="Tell Us About Your Project"
                formSubtitle="Share a few details about your business. We'll use them to understand your requirements and recommend the right direction."
                redirectToThankYou={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 3. FAQ SECTION: BEFORE WE GET STARTED ---------------- */}
      <ContactFaqs />
    </div>
  );
};
