import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LayoutGrid, TrendingUp, Search, Sparkles, Cpu, Phone, MessageSquare, ArrowRight } from "lucide-react";
import { SeoHead } from "../components/common/SeoHead";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { SERVICES_DATA } from "../content/servicesData";
import { FullServiceCard } from "../components/services/FullServiceCard";
import { EcosystemDiagram } from "../components/services/EcosystemDiagram";
import { SiloBreakSection } from "../components/services/SiloBreakSection";

export const ServicesOverviewPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Services");

  const categories = [
    { name: "All Services", icon: LayoutGrid },
    { name: "Paid Advertising", icon: TrendingUp },
    { name: "Organic Growth", icon: Search },
    { name: "Brand & Creative", icon: Sparkles },
    { name: "Tech & Conversion", icon: Cpu },
  ];

  const filteredServices =
    selectedCategory === "All Services"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  return (
    <div className="bg-[#FFF9F6] text-[#111321] selection:bg-[#FF087F]/20 selection:text-[#FF087F]">
      <SeoHead
        title="Integrated Digital Services — CoreClick Varanasi"
        description="Explore CoreClick's 12 specialized digital growth services: Google Ads, Meta Ads, SEO, Local SEO, Branding, Website Development, and Lead Generation."
        canonicalPath="/services/"
      />

      {/* ---------------- 1. EDITORIAL HERO SECTION ---------------- */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-[#FFF9F6] overflow-hidden">
        {/* Subtle Grid Pattern Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"
        />

        {/* Ambient Radial Lighting Glows */}
        <div
          aria-hidden="true"
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#FF8A24]/15 via-[#FF6038]/15 to-[#FF087F]/15 rounded-full blur-3xl pointer-events-none"
        />

        {/* Large Decorative CoreClick Symbol Watermark */}
        <div
          aria-hidden="true"
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 md:w-[500px] opacity-[0.04] pointer-events-none select-none"
        >
          <img
            src="/assets/aistudio/Gradient_C_Cursor_Logo_transparent.webp"
            width="500"
            height="333"
            loading="lazy"
            decoding="async"
            alt=""
            className="w-full h-auto"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Services" }]} className="mb-6" />

          <div className="max-w-4xl space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF0E9] border border-[#FF6038]/20 text-xs font-mono font-bold uppercase tracking-widest text-[#FF6038]">
              <span className="w-2 h-2 rounded-full bg-[#FF087F] animate-ping" />
              <span>OUR CAPABILITIES</span>
            </div>

            {/* Editorial Prominent Heading */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight text-[#111321] leading-[1.08]">
              Integrated Services <br />
              <span className="text-gradient-brand">Designed to Acquire & Convert.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-[#343644] font-normal leading-relaxed max-w-3xl">
              We don't offer generic, disconnected tasks. Every capability is engineered to compound together: paid media fuels immediate demand, creative differentiation captures attention, and high-speed web technology seals the conversion.
            </p>

            {/* Floating Metric Badges Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <div className="px-4 py-2 rounded-xl bg-white border border-[#111321]/10 text-xs font-semibold text-[#111321] shadow-sm flex items-center gap-2">
                <span className="text-[#FF8A24]">⚡</span>
                <span>12 Growth Services</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-white border border-[#111321]/10 text-xs font-semibold text-[#111321] shadow-sm flex items-center gap-2">
                <span className="text-[#FF6038]">📊</span>
                <span>100% Account Ownership</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-white border border-[#111321]/10 text-xs font-semibold text-[#111321] shadow-sm flex items-center gap-2">
                <span className="text-[#FF087F]">🎯</span>
                <span>Sub-1.5s Web Speeds</span>
              </div>
            </div>
          </div>

          {/* ---------------- 2. INTERACTIVE SERVICE CATEGORY FILTER ---------------- */}
          <div className="mt-14 pt-8 border-t border-[#111321]/10">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
              <span className="font-mono text-xs font-bold text-[#FF6038] uppercase tracking-wider">
                FILTER BY CATEGORY ({filteredServices.length} CAPABILITIES)
              </span>
            </div>

            <div className="flex items-center flex-wrap gap-2 p-2 bg-[#FFF0E9] rounded-2xl border border-[#111321]/15 shadow-sm max-w-fit">
              {categories.map((cat) => {
                const IconComp = cat.icon;
                const isActive = selectedCategory === cat.name;

                return (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-extrabold rounded-xl transition-all duration-300 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038] ${
                      isActive
                        ? "bg-gradient-brand text-white shadow-lg -translate-y-0.5"
                        : "text-[#343644] hover:text-[#111321] hover:bg-white/60"
                    }`}
                  >
                    <IconComp className={`w-4 h-4 ${isActive ? "text-white" : "text-[#FF6038]"}`} />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 3. REDESIGNED 12 SERVICE CARDS GRID ---------------- */}
      <section className="pb-24 md:pb-32 bg-[#FFF9F6] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, idx) => (
              <FullServiceCard key={service.slug} service={service} index={idx} />
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#111321]/10">
              <p className="text-sm font-bold text-[#727383]">
                No services found in this category.
              </p>
              <button
                onClick={() => setSelectedCategory("All Services")}
                className="mt-4 px-4 py-2 text-xs font-bold text-[#FF6038] underline"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ---------------- 4. INTERACTIVE FEATURED SERVICES ECOSYSTEM DIAGRAM ---------------- */}
      <EcosystemDiagram />

      {/* ---------------- 5. FULL-WIDTH DARK CONTRAST SILO BREAK SECTION ---------------- */}
      <SiloBreakSection />

      {/* ---------------- 6. PREMIUM WARM CONTACT SECTION ---------------- */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-[#FFF0E9] via-[#FFE5ED] to-[#FFF0E9] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="inline-block font-mono text-xs font-bold uppercase tracking-widest text-[#FF087F] bg-white px-4 py-1.5 rounded-full border border-[#FF087F]/20 shadow-sm">
            TAKE THE NEXT STEP IN DIGITAL GROWTH
          </span>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#111321] tracking-tight leading-tight">
            Ready to Make Your Next Move?
          </h2>

          <p className="text-base sm:text-lg text-[#343644] max-w-2xl mx-auto font-normal">
            Let's build a smarter digital growth strategy for your business. Book a complimentary discovery call with our Varanasi growth engine team.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#111321] text-white font-extrabold text-sm shadow-xl hover:bg-black transition-all"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 text-[#FF8A24]" />
            </Link>

            <a
              href="tel:8707414150"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#111321] border border-[#111321]/15 font-extrabold text-sm shadow-md hover:bg-white/80 transition-all"
            >
              <Phone className="w-4 h-4 text-[#FF6038]" />
              <span>Call Us Direct: 8707414150</span>
            </a>

            <a
              href="https://wa.me/918707414150"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#25D366] text-white font-extrabold text-sm shadow-md hover:bg-[#22bf5b] transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
