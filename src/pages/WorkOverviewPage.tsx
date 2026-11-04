import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { SeoHead } from "../components/common/SeoHead";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { Button } from "../components/common/Button";
import { PROJECTS_DATA } from "../content/projectsData";

export const WorkOverviewPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("category") || "All";

  const categories = [
    "All",
    "Local Business Growth",
    "Performance Marketing",
    "Website Development",
    "Branding",
  ];

  const handleCategorySelect = (cat: string) => {
    if (cat === "All") {
      searchParams.delete("category");
      setSearchParams(searchParams);
    } else {
      searchParams.set("category", cat);
      setSearchParams(searchParams);
    }
  };

  const filteredProjects =
    currentCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.serviceCategory === currentCategory);

  return (
    <div className="bg-[#FFF9F6] text-[#111321] selection:bg-[#FF087F]/20 selection:text-[#FF087F]">
      <SeoHead
        title="Our Work & Case Studies | CoreClick Varanasi"
        description="Explore CoreClick's portfolio of local business growth, performance marketing ad campaigns, brand identities, and high-speed web platforms."
        canonicalPath="/work/"
      />

      {/* Header Section */}
      <section className="relative bg-[#FFF9F6] py-16 md:py-24 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Our Work" }]} className="mb-6" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0E9] text-[#FF6038] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" />
              <span>PORTFOLIO & PROOF OF WORK</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#111321] tracking-tight leading-tight">
              Real Performance Outcomes & <br />
              <span className="text-gradient-brand">Strategic Design.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#343644] mt-4 leading-relaxed font-normal">
              We hold ourselves accountable to business metrics: verified foot-traffic, lower customer
              acquisition costs, and high-speed web architecture. In accordance with ethical standards,
              we clearly distinguish verified client projects from conceptual architectural builds.
            </p>
          </div>

          {/* Interactive Category Filter Controls */}
          <div className="mt-10 flex items-center flex-wrap gap-2 p-1.5 bg-[#FFF0E9] rounded-2xl border border-[#111321]/10 max-w-fit shadow-sm">
            {categories.map((cat) => {
              const isActive = currentCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038] ${
                    isActive
                      ? "bg-gradient-brand text-white shadow-md font-bold"
                      : "text-[#343644] hover:text-[#111321]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="relative py-16 md:py-24 bg-[#FFF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#111321]/10">
              <p className="text-base font-medium text-[#111321]">
                No projects found in this category.
              </p>
              <button
                onClick={() => handleCategorySelect("All")}
                className="mt-3 text-xs font-bold text-[#FF6038] hover:text-[#FF8A24] underline cursor-pointer"
              >
                Reset to View All Projects
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.slug}
                  className="group bg-white rounded-3xl overflow-hidden border border-[#111321]/10 hover:border-[#FF6038] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Preview */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 bg-[#111321] text-white text-[11px] font-semibold px-3 py-1 rounded-md">
                        {project.isConcept ? "Concept Architecture" : "Verified Client Case Study"}
                      </div>
                    </div>

                    <div className="p-6 md:p-8">
                      {/* Metadata */}
                      <div className="text-xs text-[#727383] mb-2.5 flex items-center gap-2">
                        <span>{project.industry}</span>
                        <span aria-hidden="true" className="text-[#111321]/20">·</span>
                        <span className="text-[#FF8A24] font-mono font-bold">{project.serviceCategory}</span>
                      </div>

                      <h2 className="font-heading font-bold text-xl md:text-2xl text-[#111321] group-hover:text-[#FF6038] transition-colors">
                        {project.title}
                      </h2>

                      <p className="text-xs md:text-sm text-[#727383] mt-3 leading-relaxed font-normal">
                        {project.summary}
                      </p>

                      {/* Proof Metrics */}
                      <div className="grid grid-cols-3 gap-3 my-5 py-4 border-y border-[#111321]/10 bg-[#FFF0E9] rounded-xl px-4">
                        {project.metrics.map((metric, i) => (
                          <div key={i}>
                            <div className="font-heading font-extrabold text-base md:text-lg text-[#111321]">
                              {metric.value}
                            </div>
                            <div className="text-[10px] md:text-xs text-[#727383] mt-0.5 line-clamp-1">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
                    <Link
                      to={`/work/${project.slug}/`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#111321] group-hover:text-[#FF6038] transition-colors"
                    >
                      <span>Read Complete Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Consultation CTA Banner */}
          <div className="mt-20 bg-[#111321] text-white rounded-3xl p-8 md:p-14 text-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-white">
                Want Similar Measurable Results for Your Business?
              </h3>
              <p className="text-sm md:text-base text-[#D4CBD5] max-w-lg mx-auto leading-relaxed font-light">
                Whether you need to capture local search demand in Varanasi or scale e-commerce orders
                across India, we build custom growth roadmaps.
              </p>
              <div className="pt-4">
                <Button to="/contact/" variant="brand" size="lg">
                  Discuss Your Project With Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
