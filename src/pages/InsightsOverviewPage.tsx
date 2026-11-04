import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, Clock, Sparkles } from "lucide-react";
import { SeoHead } from "../components/common/SeoHead";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { INSIGHTS_DATA } from "../content/insightsData";

export const InsightsOverviewPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Performance Marketing",
    "Search Engine Optimization",
    "Conversion Rate Optimization",
    "Digital Marketing Strategy",
  ];

  const filteredArticles = useMemo(() => {
    return INSIGHTS_DATA.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="bg-[#FFF9F6] text-[#111321] selection:bg-[#FF087F]/20 selection:text-[#FF087F]">
      <SeoHead
        title="Marketing Insights & Growth Playbooks | CoreClick Varanasi"
        description="Read actionable digital marketing playbooks, local SEO guides, and advertising unit economics written by the CoreClick strategy team."
        canonicalPath="/insights/"
      />

      {/* Header Section */}
      <section className="relative bg-[#FFF9F6] py-16 md:py-24 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Insights" }]} className="mb-6" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0E9] text-[#FF6038] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" />
              <span>THE KNOWLEDGE BASE</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#111321] tracking-tight leading-tight">
              Marketing Playbooks & <br />
              <span className="text-gradient-brand">Growth Analysis.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#343644] mt-4 leading-relaxed font-normal">
              No generic fluff or recycled listicles. We share pragmatic, data-led insights on local
              search optimization in India, paid advertising unit economics, and high-conversion web
              architecture.
            </p>
          </div>

          {/* Search Bar & Category Filters */}
          <div className="mt-10 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Real Working Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#727383] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl text-xs md:text-sm border border-[#111321]/20 bg-white text-[#111321] placeholder:text-[#727383]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038]"
              />
            </div>

            {/* Interactive Category Tabs */}
            <div className="flex items-center flex-wrap gap-2 p-1.5 bg-[#FFF0E9] rounded-2xl border border-[#111321]/10 shadow-sm">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038] ${
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
        </div>
      </section>

      {/* Article Feed */}
      <section className="relative py-16 md:py-24 bg-[#FFF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#111321]/10">
              <p className="text-base font-semibold text-[#111321]">No articles matched your search.</p>
              <p className="text-xs text-[#727383] mt-1">
                Try searching for "SEO", "Ads", "ROAS", or clear the filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-4 text-xs font-bold text-[#FF6038] hover:text-[#FF8A24] underline cursor-pointer"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.slug}
                  className="group bg-white rounded-3xl border border-[#111321]/10 p-6 md:p-8 hover:border-[#FF6038] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Metadata */}
                    <div className="text-xs text-[#727383] mb-3 flex items-center flex-wrap gap-2">
                      <span className="font-mono font-bold text-[#FF8A24]">{article.category}</span>
                      <span aria-hidden="true" className="text-[#111321]/20">·</span>
                      <span className="flex items-center gap-1 font-mono">
                        <Clock className="w-3.5 h-3.5 text-[#FF6038]" />
                        {article.readTime}
                      </span>
                      <span aria-hidden="true" className="text-[#111321]/20">·</span>
                      <span className="text-[#727383]">{article.publishedDate}</span>
                    </div>

                    <h2 className="font-heading font-bold text-xl md:text-2xl text-[#111321] group-hover:text-[#FF6038] transition-colors leading-snug">
                      {article.title}
                    </h2>

                    <p className="text-xs md:text-sm text-[#727383] mt-3 leading-relaxed font-normal">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#111321]/5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5 text-xs text-[#343644]">
                      <div className="w-7 h-7 rounded-full bg-gradient-brand text-white flex items-center justify-center font-bold text-[10px] shadow-sm">
                        CC
                      </div>
                      <span className="font-bold text-[#111321]">{article.author.name}</span>
                    </div>

                    <Link
                      to={`/insights/${article.slug}/`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111321] group-hover:text-[#FF6038] transition-colors"
                    >
                      <span>Read Playbook</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
