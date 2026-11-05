import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Stethoscope, Hotel, GraduationCap, Building, Utensils, Briefcase, MapPin, ArrowRight, Sparkles } from "lucide-react";

interface IndustryCardData {
  title: string;
  desc: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  bgClass: string;
  accentColor: string;
}

const INDUSTRIES: IndustryCardData[] = [
  {
    title: "Retail & E-commerce",
    desc: "Digital sales, catalog promotion & high-ROAS Meta Reels.",
    tag: "Online & Storefront Sales",
    icon: ShoppingBag,
    bgClass: "bg-[#FFF0E9]",
    accentColor: "#FF8A24",
  },
  {
    title: "Healthcare & Clinics",
    desc: "Patient appointment bookings & local Varanasi Google Maps 3-Pack.",
    tag: "Patient Acquisition",
    icon: Stethoscope,
    bgClass: "bg-[#FFE5ED]",
    accentColor: "#FF087F",
  },
  {
    title: "Hospitality & Hotels",
    desc: "Direct room bookings, regional exposure & visual Instagram reels.",
    tag: "Direct Bookings",
    icon: Hotel,
    bgClass: "bg-[#F0E9FF]",
    accentColor: "#7000FF",
  },
  {
    title: "Education & Institutions",
    desc: "Student enrollment lead pipelines & Google Search ads.",
    tag: "Student Lead Generation",
    icon: GraduationCap,
    bgClass: "bg-[#FFF9F6]",
    accentColor: "#FF6038",
  },
  {
    title: "Real Estate",
    desc: "High-intent property buyer lead generation & Instant Forms.",
    tag: "Property Buyer Pipeline",
    icon: Building,
    bgClass: "bg-[#FFF0E9]",
    accentColor: "#FF8A24",
  },
  {
    title: "Restaurants & Cafes",
    desc: "Local foot traffic, menu discovery & active Google Reviews.",
    tag: "Local Foot Traffic",
    icon: Utensils,
    bgClass: "bg-[#FFE5ED]",
    accentColor: "#FF087F",
  },
  {
    title: "Professional Services",
    desc: "B2B client acquisition, high-converting web UX & SEO.",
    tag: "B2B Client Growth",
    icon: Briefcase,
    bgClass: "bg-[#F0E9FF]",
    accentColor: "#7000FF",
  },
  {
    title: "Local Businesses",
    desc: "Varanasi regional market dominance & direct phone enquiries.",
    tag: "Local Maps 3-Pack",
    icon: MapPin,
    bgClass: "bg-[#FFF9F6]",
    accentColor: "#FF6038",
  },
];

export const IndustriesWeHelpSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#FFF9F6] relative overflow-hidden">
      {/* Background Soft Lighting & Grid */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 -left-32 w-96 h-96 bg-[#FF8A24]/10 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#FF087F]/10 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF0E9] border border-[#FF6038]/20 text-xs font-mono font-extrabold uppercase tracking-widest text-[#FF6038]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" />
            <span>INDUSTRIES WE HELP</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#11121D] tracking-tight">
            Built for Businesses <br />
            <span className="text-gradient-brand">Ready to Grow.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#777585] leading-relaxed font-normal max-w-2xl mx-auto">
            We tailor strategic digital acquisition systems for high-growth sectors across Varanasi, Uttar Pradesh, and regional markets.
          </p>
        </div>

        {/* 8 Industry Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind, idx) => {
            const IconComp = ind.icon;

            return (
              <div
                key={idx}
                className={`group rounded-3xl p-6 border-2 transition-all duration-300 flex flex-col justify-between ${
                  ind.bgClass
                } border-[#11121D]/15 shadow-[6px_6px_0px_0px_rgba(17,19,33,0.08)] hover:border-[#FF6038] hover:shadow-[10px_10px_0px_0px_#11121D] hover:-translate-y-2`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white text-[#FF6038] group-hover:bg-gradient-brand group-hover:text-white flex items-center justify-center transition-colors shadow-md">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-mono font-extrabold px-2.5 py-1 rounded-full bg-white/80 text-[#FF6038] border border-[#FF6038]/20">
                      SECTOR {idx + 1}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono font-extrabold text-[#FF087F] uppercase tracking-wider block mb-1">
                    {ind.tag}
                  </span>

                  <h3 className="font-heading font-extrabold text-xl text-[#11121D] group-hover:text-[#FF6038] transition-colors mb-2">
                    {ind.title}
                  </h3>

                  <p className="text-xs text-[#343644] leading-relaxed font-normal">
                    {ind.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#11121D]/10">
                  <Link
                    to="/contact/"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#11121D] group-hover:text-[#FF6038] transition-colors"
                  >
                    <span>Discuss Growth Plan</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
