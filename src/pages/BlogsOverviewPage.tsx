import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, Clock, Sparkles, BookOpen, ArrowUpRight, Filter, ChevronRight } from "lucide-react";
import { SeoHead } from "../components/common/SeoHead";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { BLOGS_DATA } from "../content/blogsData";
import { BlogPost } from "../types";

const CATEGORIES = [
  "All Articles",
  "Digital Marketing",
  "Google Ads",
  "Meta Ads",
  "SEO",
  "Social Media",
  "Branding",
  "Website & CRO",
  "Business Growth",
];

const INITIAL_VISIBLE_COUNT = 6;

export const BlogsOverviewPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  // Identify top featured article
  const featuredArticle: BlogPost = useMemo(() => {
    return BLOGS_DATA.find((a) => a.isFeatured) || BLOGS_DATA[0];
  }, []);

  const filteredArticles = useMemo(() => {
    return BLOGS_DATA.filter((article) => {
      const matchesCategory =
        selectedCategory === "All Articles" || article.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const displayedArticles = useMemo(() => {
    return filteredArticles.slice(0, visibleCount);
  }, [filteredArticles, visibleCount]);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "The CoreClick Journal",
    description: "Ideas That Move Businesses Forward. Practical insights on digital marketing, branding, advertising, SEO and web development.",
    url: "https://coreclick.in/blogs/",
    publisher: {
      "@type": "Organization",
      name: "CoreClick",
      url: "https://coreclick.in",
      logo: "https://coreclick.in/favicon.svg",
    },
    blogPost: BLOGS_DATA.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `https://coreclick.in/blogs/${post.slug}/`,
      datePublished: post.publishedDate,
      author: {
        "@type": "Person",
        name: post.author.name,
      },
    })),
  };

  return (
    <div className="bg-[#FFF9F6] text-[#111321] selection:bg-[#FF087F]/20 selection:text-[#111321]">
      <SeoHead
        title="CoreClick Journal — Blogs, Marketing Insights & Digital Growth Guides"
        description="Explore practical guides on digital marketing, Google Ads, Meta Ads, SEO, social media, branding, and CRO written by the CoreClick strategy team."
        canonicalPath="/blogs/"
        structuredData={blogSchema}
      />

      {/* Hero Header Section */}
      <section className="relative bg-[#FFF9F6] pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden border-b border-[#111321]/10">
        {/* Subtle Ambient Background Gradient Lighting */}
        <div
          aria-hidden="true"
          className="absolute -top-24 right-1/4 w-[600px] h-[350px] bg-gradient-to-br from-[#FF8A24]/10 via-[#FF6038]/10 to-[#FF087F]/10 blur-[130px] pointer-events-none rounded-full"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blogs" }]} className="mb-6" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFF0E9] border border-[#FF6038]/20 text-[#FF6038] text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" />
              <span>THE CORECLICK JOURNAL</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#111321] tracking-tight leading-tight">
              Ideas That Move <br />
              <span className="text-gradient-brand">Businesses Forward.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#343644] mt-4 leading-relaxed font-normal max-w-2xl">
              Explore practical insights on digital marketing, branding, advertising, SEO and building a stronger online presence.
            </p>
          </div>

          {/* Featured Article Banner Card */}
          {featuredArticle && (
            <div className="mt-12 bg-white rounded-3xl border-2 border-[#111321] shadow-[8px_8px_0px_0px_#111321] overflow-hidden group hover:border-[#FF6038] transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Featured Image Col */}
                <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-auto overflow-hidden bg-[#111321]">
                  <img
                    src={featuredArticle.featuredImage}
                    alt={featuredArticle.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111321]/60 via-transparent to-transparent lg:hidden" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF8A24] text-white text-[11px] font-mono font-extrabold uppercase tracking-wider shadow-md">
                    FEATURED STORY
                  </div>
                </div>

                {/* Featured Content Col */}
                <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#727383] mb-3 font-mono">
                      <span className="font-extrabold text-[#FF087F] uppercase tracking-wider">
                        {featuredArticle.category}
                      </span>
                      <span aria-hidden="true">•</span>
                      <span className="flex items-center gap-1 text-[#343644]">
                        <Clock className="w-3.5 h-3.5 text-[#FF6038]" />
                        {featuredArticle.readTime}
                      </span>
                      <span aria-hidden="true">•</span>
                      <span>{featuredArticle.publishedDate}</span>
                    </div>

                    <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#111321] group-hover:text-[#FF6038] transition-colors leading-snug">
                      <Link to={`/blogs/${featuredArticle.slug}/`}>
                        {featuredArticle.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-[#343644] mt-3 leading-relaxed line-clamp-3 font-normal">
                      {featuredArticle.summary}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#111321]/10 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={featuredArticle.author.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"}
                        alt={featuredArticle.author.name}
                        className="w-8 h-8 rounded-full object-cover border border-[#111321]/20 shadow-xs"
                      />
                      <div className="text-xs">
                        <div className="font-extrabold text-[#111321]">{featuredArticle.author.name}</div>
                        <div className="text-[10px] text-[#727383]">{featuredArticle.author.role}</div>
                      </div>
                    </div>

                    <Link
                      to={`/blogs/${featuredArticle.slug}/`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111321] text-white font-extrabold text-xs hover:bg-black transition-all group-hover:scale-105 shadow-md shrink-0"
                    >
                      <span>Read Article</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#FF8A24]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Category Filter & Feed Section */}
      <section className="relative py-12 md:py-20 bg-[#FFF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls Bar: Search + Category Pills */}
          <div className="space-y-6 mb-12">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
              
              {/* Category Pills Slider/Flex */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar max-w-full">
                {CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setVisibleCount(INITIAL_VISIBLE_COUNT);
                      }}
                      className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 border ${
                        isActive
                          ? "bg-gradient-brand text-white border-transparent shadow-md scale-[1.02]"
                          : "bg-white text-[#343644] border-[#111321]/15 hover:border-[#FF6038] hover:text-[#111321]"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Search Bar */}
              <div className="relative min-w-[260px] lg:w-80 shrink-0">
                <Search className="w-4 h-4 text-[#727383] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search articles, ads, SEO..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setVisibleCount(INITIAL_VISIBLE_COUNT);
                  }}
                  className="w-full pl-9 pr-4 py-2.5 rounded-2xl text-xs md:text-sm border-2 border-[#111321]/15 bg-white text-[#111321] placeholder:text-[#727383]/60 focus-visible:outline-none focus-visible:border-[#FF6038] focus-visible:ring-2 focus-visible:ring-[#FF6038]/20 transition-all shadow-xs"
                />
              </div>
            </div>

            {/* Filter Active Summary */}
            {(selectedCategory !== "All Articles" || searchQuery) && (
              <div className="flex items-center justify-between text-xs text-[#727383] bg-[#FFF0E9] px-4 py-2.5 rounded-xl border border-[#FF6038]/20">
                <div className="flex items-center gap-2">
                  <Filter className="w-3.5 h-3.5 text-[#FF6038]" />
                  <span>
                    Showing <strong>{filteredArticles.length}</strong> result{filteredArticles.length === 1 ? "" : "s"}
                    {selectedCategory !== "All Articles" && <> in category <strong>"{selectedCategory}"</strong></>}
                    {searchQuery && <> for query <strong>"{searchQuery}"</strong></>}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setSelectedCategory("All Articles");
                    setSearchQuery("");
                  }}
                  className="font-bold text-[#FF6038] hover:underline cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* Article Cards Grid */}
          {displayedArticles.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border-2 border-[#111321]/10 p-8 max-w-xl mx-auto shadow-sm">
              <BookOpen className="w-10 h-10 text-[#FF6038] mx-auto mb-3 opacity-60" />
              <h3 className="font-heading font-bold text-lg text-[#111321]">No matching articles found</h3>
              <p className="text-xs text-[#727383] mt-2 leading-relaxed">
                We couldn't find any articles matching your search criteria. Try searching for broader terms like "SEO", "Ads", or reset your category filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All Articles");
                  setSearchQuery("");
                }}
                className="mt-6 inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#111321] text-white font-extrabold text-xs hover:bg-black transition-all cursor-pointer"
              >
                <span>Reset All Filters</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedArticles.map((article) => (
                <article
                  key={article.slug}
                  className="group bg-white rounded-3xl border-2 border-[#111321]/10 p-5 sm:p-6 hover:border-[#FF6038] hover:shadow-[8px_8px_0px_0px_#111321] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Featured Image Frame with Zoom Effect */}
                    <Link
                      to={`/blogs/${article.slug}/`}
                      className="block relative w-full h-48 rounded-2xl overflow-hidden mb-5 bg-[#111321]"
                    >
                      <img
                        src={article.featuredImage}
                        alt={article.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[#FF6038] font-mono text-[10px] font-extrabold uppercase tracking-wider shadow-sm border border-[#111321]/10">
                          {article.category}
                        </span>
                      </div>
                    </Link>

                    {/* Metadata */}
                    <div className="text-[11px] text-[#727383] mb-2.5 flex items-center gap-2 font-mono">
                      <span className="flex items-center gap-1 text-[#343644]">
                        <Clock className="w-3 h-3 text-[#FF8A24]" />
                        {article.readTime}
                      </span>
                      <span aria-hidden="true">•</span>
                      <span>{article.publishedDate}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#111321] group-hover:text-[#FF6038] transition-colors leading-snug line-clamp-2">
                      <Link to={`/blogs/${article.slug}/`}>{article.title}</Link>
                    </h3>

                    {/* Summary */}
                    <p className="text-xs text-[#343644] mt-2.5 leading-relaxed line-clamp-3 font-normal">
                      {article.summary}
                    </p>
                  </div>

                  {/* Footer Bar */}
                  <div className="pt-5 mt-6 border-t border-[#111321]/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={article.author.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"}
                        alt={article.author.name}
                        className="w-6 h-6 rounded-full object-cover border border-[#111321]/10"
                      />
                      <span className="text-[11px] font-extrabold text-[#111321] truncate max-w-[110px]">
                        {article.author.name}
                      </span>
                    </div>

                    <Link
                      to={`/blogs/${article.slug}/`}
                      className="inline-flex items-center gap-1 text-xs font-extrabold text-[#111321] group-hover:text-[#FF6038] transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Load More Pagination Button */}
          {visibleCount < filteredArticles.length && (
            <div className="mt-14 text-center">
              <button
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#111321] border-2 border-[#111321] font-extrabold text-sm shadow-[4px_4px_0px_0px_#111321] hover:shadow-[6px_6px_0px_0px_#FF6038] hover:border-[#FF6038] hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Load More Articles</span>
                <ChevronRight className="w-4 h-4 text-[#FF6038]" />
              </button>
              <div className="text-xs text-[#727383] mt-3 font-mono">
                Showing {displayedArticles.length} of {filteredArticles.length} articles
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Conversion Newsletter / Enquiry Banner */}
      <section className="py-16 md:py-20 bg-[#FFF0E9] border-t-2 border-[#111321]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-[#FF6038] text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-[#FF6038]/20 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" />
            <span>ACCELERATE YOUR GROWTH</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#111321]">
            Ready to Turn Marketing Ideas Into Revenue?
          </h2>

          <p className="text-sm sm:text-base text-[#343644] mt-3 max-w-2xl mx-auto leading-relaxed">
            Partner with CoreClick's strategy team to implement these exact performance marketing, local search, and brand positioning playbooks for your business.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#111321] text-white font-extrabold text-sm shadow-xl hover:bg-black transition-all hover:scale-105"
            >
              <span>Book a Free Growth Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-[#FF8A24]" />
            </Link>

            <Link
              to="/services/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#111321] border border-[#111321]/20 font-extrabold text-sm hover:bg-[#FFF9F6] transition-all"
            >
              <span>Explore Agency Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
