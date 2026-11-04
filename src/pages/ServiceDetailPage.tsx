import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  Check,
  ArrowRight,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";
import { SeoHead } from "../components/common/SeoHead";
import { Button } from "../components/common/Button";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { Accordion } from "../components/common/Accordion";
import { ContactForm } from "../components/forms/ContactForm";
import { SERVICES_DATA } from "../content/servicesData";

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/404/" replace />;
  }

  const relatedServicesList = SERVICES_DATA.filter((s) =>
    service.relatedServices.includes(s.slug)
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      name: "CoreClick",
      url: "https://coreclick.in",
      telephone: "+918707414150",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Varanasi",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
    },
    areaServed: ["Varanasi", "Uttar Pradesh", "India"],
    description: service.shortDescription,
  };

  return (
    <div className="bg-[#FFF9F6] text-[#111321] selection:bg-[#FF087F]/20 selection:text-[#FF087F]">
      <SeoHead
        title={`${service.title} Services | CoreClick Varanasi`}
        description={service.shortDescription}
        canonicalPath={`/services/${service.slug}/`}
        structuredData={structuredData}
      />

      {/* 1. Hero Section */}
      <section className="bg-[#FFF9F6] py-16 md:py-24 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services/" },
              { label: service.title },
            ]}
            className="mb-6"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#FF6038] uppercase tracking-wider">
                <span>{service.category}</span>
                <span aria-hidden="true" className="text-[#111321]/20">·</span>
                <span className="text-[#727383]">CoreClick Varanasi</span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#111321] tracking-tight leading-tight">
                {service.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-[#343644] leading-relaxed max-w-2xl font-normal">
                {service.heroSubheadline}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button to="#enquiry-section" variant="primary" size="lg">
                  Get Started With {service.title}
                </Button>
                <a
                  href={`https://wa.me/918707414150?text=${encodeURIComponent(
                    `Hello CoreClick, I am interested in discussing your ${service.title} service.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#111321] text-[#111321] hover:bg-[#FFF0E9] font-bold text-sm transition-colors"
                >
                  Quick WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Quick Benefits Sidebar Card */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 space-y-4 border-2 border-[#111321] shadow-[6px_6px_0px_0px_#111321]">
              <h3 className="font-heading font-bold text-base text-[#111321] border-b border-[#111321]/10 pb-2">
                Strategic Advantages
              </h3>
              <div className="space-y-3.5">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="space-y-0.5">
                    <div className="text-xs font-bold text-[#111321] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FF6038]" />
                      {benefit.title}
                    </div>
                    <p className="text-[11px] text-[#727383] leading-relaxed pl-3 font-normal">
                      {benefit.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Customer Challenges & Approach */}
      <section className="py-16 md:py-24 bg-[#FFF0E9] relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Challenges Block */}
            <div className="bg-white p-8 rounded-3xl border border-rose-300 shadow-lg space-y-6">
              <div className="flex items-center gap-2 text-rose-600 text-xs font-bold uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>The Friction Points</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl text-[#111321]">
                Common Industry Problems We Resolve
              </h2>
              <div className="space-y-3.5">
                {service.challenges.map((challenge, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs md:text-sm text-[#343644]">
                    <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      ✕
                    </span>
                    <span>{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Approach Block */}
            <div className="bg-white p-8 rounded-3xl border border-emerald-300 shadow-lg space-y-6">
              <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                <Check className="w-4 h-4" />
                <span>The CoreClick Method</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl text-[#111321]">
                Our Precision Growth Approach
              </h2>
              <div className="space-y-3.5">
                {service.approach.map((approachItem, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs md:text-sm text-[#343644]">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      ✓
                    </span>
                    <span>{approachItem}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Deliverables Matrix */}
      <section className="py-16 md:py-24 bg-[#FFF9F6] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-bold text-[#FF8A24] uppercase tracking-wider">
              CONCRETE OUTPUTS
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#111321] mt-1">
              What You Receive With {service.title}
            </h2>
            <p className="text-sm text-[#727383] mt-2">
              Every deliverable is documented, shared in real-time, and backed by itemized client
              ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-[#111321]/10 bg-white hover:border-[#FF6038] hover:shadow-lg transition-all"
              >
                <div className="text-xs font-mono font-bold text-[#FF8A24] mb-3">
                  ITEM 0{idx + 1}
                </div>
                <h3 className="font-heading font-bold text-base text-[#111321] leading-snug">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Process Stepper */}
      <section className="py-16 md:py-24 bg-[#F0E9FF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-bold text-[#FF087F] uppercase tracking-wider">
              STEP-BY-STEP
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#111321] mt-1">
              Execution Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div key={step.step} className="bg-white p-6 rounded-2xl border border-[#111321]/10 shadow-sm">
                <div className="text-xs font-mono font-bold text-[#FF087F] mb-2">{step.step}</div>
                <h3 className="font-heading font-bold text-base text-[#111321]">{step.title}</h3>
                <p className="text-xs text-[#727383] mt-2 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs Accordion */}
      <section className="py-16 md:py-24 bg-[#FFF9F6] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs font-mono font-bold text-[#FF8A24] uppercase tracking-wider">
              COMMON QUERIES
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#111321] mt-1">
              {service.title} FAQs
            </h2>
          </div>

          <Accordion
            items={service.faqs.map((faq, i) => ({
              id: `service-faq-${i}`,
              question: faq.question,
              answer: faq.answer,
            }))}
          />
        </div>
      </section>

      {/* 6. Related Services Interconnection */}
      {relatedServicesList.length > 0 && (
        <section className="py-16 bg-[#FFF0E9] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-heading font-bold text-xl text-[#111321]">Related Growth Services</h3>
              <Link
                to="/services/"
                className="text-xs font-semibold text-[#FF6038] hover:text-[#FF087F] flex items-center gap-1 transition-colors"
              >
                All Services <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServicesList.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/services/${rel.slug}/`}
                  className="group bg-white p-5 rounded-2xl border border-[#111321]/10 hover:border-[#FF6038] transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#FF8A24] uppercase">
                      {rel.category}
                    </span>
                    <h4 className="font-heading font-bold text-sm text-[#111321] group-hover:text-[#FF6038] transition-colors mt-1">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-[#727383] mt-1.5 line-clamp-2">
                      {rel.shortDescription}
                    </p>
                  </div>
                  <div className="pt-4 flex items-center gap-1 text-xs font-bold text-[#111321] group-hover:text-[#FF6038]">
                    <span>Learn more</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Dedicated Enquiry Form Anchor */}
      <section id="enquiry-section" className="py-16 md:py-24 bg-[#FFF9F6] relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            defaultService={service.title}
            formTitle={`Enquire About ${service.title}`}
            formSubtitle={`Let's discuss how our ${service.title.toLowerCase()} service can drive measurable growth for your business.`}
          />
        </div>
      </section>
    </div>
  );
};
