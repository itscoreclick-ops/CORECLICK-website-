import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Quote, Sparkles } from "lucide-react";
import { SeoHead } from "../components/common/SeoHead";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { Button } from "../components/common/Button";
import { PROJECTS_DATA } from "../content/projectsData";

export const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const projectIndex = PROJECTS_DATA.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    return <Navigate to="/404/" replace />;
  }

  const project = PROJECTS_DATA[projectIndex];
  const prevProject = projectIndex > 0 ? PROJECTS_DATA[projectIndex - 1] : null;
  const nextProject =
    projectIndex < PROJECTS_DATA.length - 1 ? PROJECTS_DATA[projectIndex + 1] : null;

  return (
    <div className="bg-[#FFF9F6] text-[#111321] selection:bg-[#FF087F]/20 selection:text-[#FF087F]">
      <SeoHead
        title={`${project.title} – Case Study | CoreClick`}
        description={project.summary}
        canonicalPath={`/work/${project.slug}/`}
      />

      {/* Case Study Header */}
      <section className="relative bg-[#FFF9F6] py-14 md:py-20 overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Our Work", href: "/work/" },
              { label: project.title },
            ]}
            className="mb-6"
          />

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF6038] uppercase tracking-wider">
              <span>{project.industry}</span>
              <span aria-hidden="true" className="text-[#111321]/20">·</span>
              <span className="text-[#FF8A24]">{project.serviceCategory}</span>
              <span aria-hidden="true" className="text-[#111321]/20">·</span>
              <span className="text-[#727383]">
                {project.isConcept ? "Concept Architecture" : "Client Project"}
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#111321] tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-[#343644] leading-relaxed max-w-3xl font-normal">
              {project.summary}
            </p>
          </div>

          {/* Key Metrics Strip */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-2xl bg-[#FFF0E9] border border-[#111321]/10 shadow-sm">
            {project.metrics.map((metric, i) => (
              <div key={i}>
                <div className="font-heading font-extrabold text-2xl md:text-3xl text-[#111321]">
                  {metric.value}
                </div>
                <div className="text-xs font-bold text-[#FF6038] mt-1">{metric.label}</div>
                <div className="text-[11px] text-[#727383] mt-0.5">{metric.timeframe}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Showcase Image */}
      <section className="bg-[#FFF9F6] py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border-2 border-[#111321] shadow-[8px_8px_0px_0px_#111321] bg-black/5">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="w-full h-auto max-h-[550px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* In-Depth Story Sections */}
      <section className="py-16 md:py-24 bg-[#FFF9F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* 1. The Challenge */}
          <div className="space-y-4">
            <div className="text-xs font-mono font-bold text-[#FF6038] uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF6038]" />
              <span>01. The Challenge</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-[#111321]">
              The Core Problem & Roadblocks
            </h2>
            <p className="text-sm md:text-base text-[#343644] leading-relaxed font-normal">
              {project.challenge}
            </p>
          </div>

          {/* 2. The Strategy */}
          <div className="space-y-4">
            <div className="text-xs font-mono font-bold text-[#FF8A24] uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF8A24]" />
              <span>02. The Strategy</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-[#111321]">
              CoreClick's Execution Blueprint
            </h2>
            <p className="text-sm md:text-base text-[#343644] leading-relaxed font-normal">
              {project.strategy}
            </p>
          </div>

          {/* 3. Deliverables */}
          <div className="space-y-4 bg-white p-8 rounded-3xl border border-[#111321]/10 shadow-sm">
            <div className="text-xs font-mono font-bold text-[#FF087F] uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF087F]" />
              <span>03. Deliverables & Infrastructure</span>
            </div>
            <h3 className="font-heading font-bold text-xl text-[#111321]">
              Assets Deployed in This Sprint
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {project.deliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-xs md:text-sm text-[#343644]">
                  <div className="w-5 h-5 rounded-full bg-[#FFF0E9] text-[#FF6038] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Outcomes */}
          <div className="space-y-4">
            <div className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>04. The Business Impact</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-[#111321]">
              Verified Results & Growth
            </h2>
            <div className="space-y-3.5">
              {project.outcomes.map((outcome, i) => (
                <div key={i} className="flex items-start gap-3 text-sm md:text-base text-[#343644]">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Client Testimonial / Quote */}
          {project.quote && (
            <div className="relative bg-[#111321] text-white p-8 md:p-10 rounded-3xl shadow-xl">
              <Quote className="w-10 h-10 text-[#FF6038] opacity-80 mb-4" />
              <blockquote className="text-base sm:text-lg font-normal leading-relaxed italic text-white">
                "{project.quote.text}"
              </blockquote>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs">
                <div className="font-bold text-white">{project.quote.author}</div>
                <div className="text-[#D4CBD5] mt-0.5">{project.quote.role}</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Next & Previous Project Navigation */}
      <section className="bg-[#FFF0E9] py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {prevProject ? (
            <Link
              to={`/work/${prevProject.slug}/`}
              className="flex items-center gap-2 text-xs font-bold text-[#111321] hover:text-[#FF8A24] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous: {prevProject.title}</span>
              <span className="sm:hidden">Previous</span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            to="/work/"
            className="text-xs font-bold text-[#111321] hover:text-[#FF6038] transition-colors underline"
          >
            All Case Studies
          </Link>

          {nextProject ? (
            <Link
              to={`/work/${nextProject.slug}/`}
              className="flex items-center gap-2 text-xs font-bold text-[#111321] hover:text-[#FF8A24] transition-colors"
            >
              <span className="hidden sm:inline">Next: {nextProject.title}</span>
              <span className="sm:hidden">Next</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* Final Action CTA */}
      <section className="bg-[#FFF9F6] py-16 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-[#111321]">
            Ready to Build Your Growth Case Study?
          </h3>
          <p className="text-sm md:text-base text-[#727383]">
            Let's discuss how we can engineer similar results for your business.
          </p>
          <div className="pt-4">
            <Button to="/contact/" variant="primary" size="lg">
              Contact Us for a Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
