import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CheckCircle2, MessageCircle, ArrowRight, Home } from "lucide-react";
import { SeoHead } from "../components/common/SeoHead";
import { Button } from "../components/common/Button";
import { CONFIG } from "../config/siteConfig";

export const ThankYouPage: React.FC = () => {
  const location = useLocation();
  const state = (location.state as { fullName?: string; serviceInterestedIn?: string; leadId?: string }) || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FFF9F6] text-[#111321] selection:bg-[#FF087F]/20 selection:text-[#FF087F]">
      <SeoHead
        title="Thank You | CoreClick – Digital Marketing Agency"
        description="Thank you for your enquiry. Our growth team in Varanasi will review your request and get in touch shortly."
        canonicalPath="/thank-you/"
      />

      <section className="relative py-20 md:py-32 bg-[#FFF9F6] min-h-[75vh] flex items-center overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 md:p-12 rounded-3xl border-2 border-[#111321] shadow-[8px_8px_0px_0px_#111321] space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-400 flex items-center justify-center text-emerald-700 mx-auto shadow-md">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest">
                {state.leadId ? `ENQUIRY ID: ${state.leadId}` : "ENQUIRY RECORDED"}
              </span>
              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#111321] tracking-tight">
                Thank You{state.fullName ? `, ${state.fullName}` : ""}!
              </h1>
              <p className="text-sm md:text-base text-[#343644] max-w-lg mx-auto leading-relaxed font-normal">
                Your enquiry {state.serviceInterestedIn ? `regarding "${state.serviceInterestedIn}" ` : ""}has
                been successfully recorded. A senior strategist from CoreClick (Varanasi) will review
                your request and get in touch within 24 business hours.
              </p>
            </div>

            {/* Direct WhatsApp Prompt */}
            <div className="p-4 rounded-2xl bg-[#FFF0E9] border border-[#111321]/10 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-[#111321]">Need Immediate Assistance?</div>
                <div className="text-[11px] text-[#727383]">Connect with our team on WhatsApp directly.</div>
              </div>
              <a
                href={`https://wa.me/91${CONFIG.whatsapp}?text=${encodeURIComponent(
                  `Hello CoreClick, I just submitted an enquiry on your website${
                    state.leadId ? ` (ID: ${state.leadId})` : ""
                  }.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#25D366] text-white font-bold text-xs hover:bg-[#20bd5a] transition-all shrink-0 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Navigation back */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button to="/" variant="secondary" size="md" leftIcon={<Home className="w-4 h-4" />}>
                Return to Homepage
              </Button>
              <Button to="/services/" variant="outline" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Explore Other Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
