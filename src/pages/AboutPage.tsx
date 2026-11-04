import React from "react";
import { MapPin, Target, Sparkles, Shield, Cpu, ArrowRight } from "lucide-react";
import { SeoHead } from "../components/common/SeoHead";
import { Button } from "../components/common/Button";
import { Breadcrumbs } from "../components/common/Breadcrumbs";

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#FFF9F6] text-[#111321] selection:bg-[#FF087F]/20 selection:text-[#FF087F]">
      <SeoHead
        title="About CoreClick – Digital Marketing Agency in Varanasi"
        description="Learn about CoreClick, a performance marketing and digital growth partner in Varanasi, Uttar Pradesh. Our mission: Click Smart. Grow Fast."
        canonicalPath="/about/"
      />

      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-[#FFF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "About Us" }]} className="mb-6" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0E9] text-[#FF6038] text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <span>WHO WE ARE</span>
            </div>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#111321] tracking-tight leading-tight">
              We Help Ambitious Businesses <br />
              <span className="text-gradient-brand">Click Smart & Grow Fast.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#343644] mt-4 leading-relaxed font-normal">
              CoreClick is a digital marketing and business growth agency headquartered in Varanasi,
              Uttar Pradesh. We were founded on a simple principle: businesses do not need more
              decorative vanity metrics—they need measurable, profitable customer acquisition.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section with Local Roots */}
      <section className="py-20 md:py-28 bg-[#FFF0E9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5 text-sm md:text-base text-[#343644] leading-relaxed font-normal">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#FF6038] uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#FF087F]" />
                <span>Rooted in Varanasi, Uttar Pradesh</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl md:text-4xl text-[#111321] leading-snug">
                A Modern Growth Partner in India's Cultural Capital
              </h2>
              <p>
                Varanasi and Northern India are experiencing a massive entrepreneurial awakening. From
                centuries-old heritage handloom studios and regional retailers to modern healthcare
                clinics and high-growth consumer startups, businesses possess world-class products but
                frequently struggle with digital discovery.
              </p>
              <p>
                Too many agencies treat digital marketing as a superficial checklist of generic
                Instagram posts and boosted ads. CoreClick was built to bridge this gap: combining
                rigorous unit economic analysis, creative storytelling, server-side attribution
                tracking, and high-performance React web engineering under one roof.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white p-8 rounded-3xl border-2 border-[#111321] shadow-[8px_8px_0px_0px_#111321] space-y-6">
                <div className="border-b border-[#111321]/10 pb-4">
                  <span className="text-xs font-mono font-bold text-[#FF087F]">BRAND POSITIONING</span>
                  <h3 className="font-heading font-bold text-xl text-[#111321] mt-1">
                    Growth Partner, Not Just a Social Media Poster
                  </h3>
                </div>
                <ul className="space-y-4 text-xs md:text-sm text-[#343644]">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#FFF0E9] text-[#FF8A24] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      ✓
                    </div>
                    <span>
                      <strong className="text-[#111321] font-bold">Economics First:</strong> We align every ad campaign with your product
                      gross margins and target customer acquisition cost.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#FFE5ED] text-[#FF6038] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      ✓
                    </div>
                    <span>
                      <strong className="text-[#111321] font-bold">Creative as Targeting:</strong> We test real creative hooks, emotional
                      angles, and objection-handling copy rather than generic stock templates.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#F0E9FF] text-[#FF087F] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      ✓
                    </div>
                    <span>
                      <strong className="text-[#111321] font-bold">Engineering Integrity:</strong> We build lightning-fast web assets
                      optimized for India's mobile-first consumers.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Values */}
      <section className="py-20 md:py-28 bg-[#FFF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-bold text-[#FF8A24] uppercase tracking-wider">
              OUR CORE PRINCIPLES
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#111321] mt-1">
              How We Make Decisions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-[#111321]/10 bg-white hover:shadow-lg transition-all">
              <Target className="w-6 h-6 text-[#FF8A24] mb-3" />
              <h3 className="font-heading font-bold text-base text-[#111321]">Clarity Over Noise</h3>
              <p className="text-xs text-[#727383] mt-2 leading-relaxed">
                We eliminate vanity metrics. If an action does not generate qualified enquiries or
                verifiable revenue, we do not recommend it.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#111321]/10 bg-white hover:shadow-lg transition-all">
              <Sparkles className="w-6 h-6 text-[#FF6038] mb-3" />
              <h3 className="font-heading font-bold text-base text-[#111321]">Creative Craft</h3>
              <p className="text-xs text-[#727383] mt-2 leading-relaxed">
                Great design is not decorative; it commands respect, justifies premium pricing, and
                converts skeptical visitors into loyal clients.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#111321]/10 bg-white hover:shadow-lg transition-all">
              <Shield className="w-6 h-6 text-[#FF087F] mb-3" />
              <h3 className="font-heading font-bold text-base text-[#111321]">Complete Ownership</h3>
              <p className="text-xs text-[#727383] mt-2 leading-relaxed">
                You own 100% of your ad accounts, pixel data, custom domain, and creatives. We operate
                with absolute transparency.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#111321]/10 bg-white hover:shadow-lg transition-all">
              <Cpu className="w-6 h-6 text-[#FF6038] mb-3" />
              <h3 className="font-heading font-bold text-base text-[#111321]">Technical Speed</h3>
              <p className="text-xs text-[#727383] mt-2 leading-relaxed">
                We engineer modern web experiences with sub-second response times, zero layout shifts,
                and airtight mobile usability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 md:py-28 bg-[#111321] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 relative z-10">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white">
            Want to Discuss Your Marketing Strategy?
          </h2>
          <p className="text-[#D4CBD5] text-sm md:text-base max-w-xl mx-auto font-light">
            Book a direct consultation with our growth strategists in Varanasi. We'll analyze your
            current funnel and outline actionable steps.
          </p>
          <div className="pt-2">
            <Button to="/contact/" variant="brand" size="lg" rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}>
              Contact CoreClick Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
