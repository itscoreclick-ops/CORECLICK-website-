import React from "react";
import { Phone, MessageCircle, Mail, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { SeoHead } from "../components/common/SeoHead";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { ContactForm } from "../components/forms/ContactForm";
import { CONFIG } from "../config/siteConfig";

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-[#FFF9F6] text-[#111321] selection:bg-[#FF087F]/20 selection:text-[#FF087F]">
      <SeoHead
        title="Contact Us | CoreClick – Digital Marketing Agency in Varanasi"
        description="Get in touch with CoreClick. Phone & WhatsApp: 8707414150. Address: Varanasi, Uttar Pradesh. Schedule a strategic digital growth consultation."
        canonicalPath="/contact/"
      />

      {/* Header Section */}
      <section className="relative bg-[#FFF9F6] py-16 md:py-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact Us" }]} className="mb-6" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0E9] text-[#FF6038] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" />
              <span>LET'S CONNECT</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#111321] tracking-tight leading-tight">
              Start Your Business <br />
              <span className="text-gradient-brand">Growth Conversation.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#343644] mt-4 leading-relaxed font-normal">
              Whether you need to scale paid ad customer acquisition, dominate local Google Maps search
              in Varanasi, or launch an ultra-fast website, our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Contact Cards & Form */}
      <section className="relative py-12 md:py-20 bg-[#FFF0E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Agency Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 md:p-8 rounded-3xl border-2 border-[#111321] shadow-[8px_8px_0px_0px_#111321] space-y-6">
                <div>
                  <h2 className="font-heading font-bold text-xl text-[#111321]">
                    Direct Contact Channels
                  </h2>
                  <p className="text-xs text-[#727383] mt-1">
                    Reach out directly via phone or WhatsApp for immediate assistance.
                  </p>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF0E9] border border-[#FF8A24]/30 flex items-center justify-center text-[#FF8A24] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#727383]">Call Directly</div>
                    <a
                      href={`tel:${CONFIG.phone}`}
                      className="text-base font-bold text-[#FF8A24] hover:text-[#FF6038] transition-colors"
                    >
                      {CONFIG.formattedPhone}
                    </a>
                    <div className="text-[11px] text-[#727383] mt-0.5">Mon–Sat, 9:30 AM – 6:30 PM IST</div>
                  </div>
                </div>

                {/* WhatsApp Chat */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#727383]">WhatsApp Messenger</div>
                    <a
                      href={`https://wa.me/91${CONFIG.whatsapp}?text=${encodeURIComponent(
                        CONFIG.whatsappMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      Chat on WhatsApp (+91 {CONFIG.whatsapp})
                    </a>
                    <div className="text-[11px] text-[#727383] mt-0.5">Quick responses for business enquiries</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFE5ED] border border-[#FF087F]/30 flex items-center justify-center text-[#FF087F] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#727383]">Official Email</div>
                    <a
                      href={`mailto:${CONFIG.email}`}
                      className="text-base font-bold text-[#111321] hover:text-[#FF8A24] transition-colors"
                    >
                      {CONFIG.email}
                    </a>
                    <div className="text-[11px] text-[#727383] mt-0.5">Proposals & RFP submissions</div>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-4 pt-4 border-t border-[#111321]/10">
                  <div className="w-10 h-10 rounded-xl bg-[#F0E9FF] border border-[#111321]/10 flex items-center justify-center text-[#111321] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#727383]">Agency Headquarters</div>
                    <div className="text-xs text-[#111321] mt-0.5 font-bold">
                      {CONFIG.address}
                    </div>
                    <div className="text-[11px] text-[#727383] mt-0.5">Varanasi, UP · Serving India & Global Clients</div>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="bg-white p-6 rounded-2xl border border-[#111321]/10 space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#111321] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Our Consultation Commitment</span>
                </div>
                <ul className="text-xs text-[#727383] space-y-2 list-none p-0 m-0">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF8A24] font-bold">·</span>
                    <span>100% confidential discussion. We sign mutual NDAs on request.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF8A24] font-bold">·</span>
                    <span>No aggressive sales scripts. You speak with senior strategists.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF8A24] font-bold">·</span>
                    <span>Itemized proposals detailing deliverables and timelines.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm
                formTitle="Tell Us About Your Project"
                formSubtitle="Complete the details below. We typically review and respond within 24 business hours."
                redirectToThankYou={true}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
