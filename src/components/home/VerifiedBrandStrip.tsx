import React from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export const VerifiedBrandStrip: React.FC = () => {
  const verifiedPillars = [
    { title: "100% Account Ownership", desc: "You retain full admin rights to Google & Meta ad accounts." },
    { title: "Server-Side Tracking", desc: "Meta CAPI & Google Enhanced Conversions pre-configured." },
    { title: "Zero Vanity Metrics", desc: "We optimize strictly for qualified leads, phone calls & net ROI." },
    { title: "Sub-1.5s Web Speeds", desc: "Mobile landing pages built for zero layout shift & high conversion." },
  ];

  return (
    <section className="py-8 bg-[#FFF0E9] border-y-2 border-[#11121D]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-white border border-[#FF6038]/30 flex items-center justify-center text-[#FF6038] shadow-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-mono text-xs font-extrabold text-[#11121D] uppercase tracking-wider">
                CORECLICK AGENCY GUARANTEE
              </div>
              <div className="text-[11px] text-[#727383]">Verified Standards & Transparency</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {verifiedPillars.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-3.5 rounded-2xl border border-[#11121D]/10 flex items-start gap-2.5 shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-extrabold text-[#11121D]">{item.title}</div>
                  <div className="text-[11px] text-[#727383] leading-tight mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
