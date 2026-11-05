import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, ArrowRight, Check, List, Sparkles, Share2, Bookmark, ArrowUpRight } from "lucide-react";
import { SeoHead } from "../components/common/SeoHead";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { Button } from "../components/common/Button";
import { BLOGS_DATA } from "../content/blogsData";

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = BLOGS_DATA.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/404/" replace />;
  }

  const relatedArticles = BLOGS_DATA.filter((a) =>
    article.relatedSlugs.includes(a.slug)
  ).slice(0, 2);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.summary,
    image: article.featuredImage,
    datePublished: article.publishedDate,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "CoreClick",
      url: "https://coreclick.in",
      logo: "https://coreclick.in/favicon.svg",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://coreclick.in/blogs/${article.slug}/`,
    },
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-[#FFF9F6] text-[#111321] selection:bg-[#FF087F]/20 selection:text-[#111321]">
      <SeoHead
        title={`${article.title} | CoreClick Blog`}
        description={article.summary}
        canonicalPath={`/blogs/${article.slug}/`}
        ogType="article"
        structuredData={structuredData}
      />

      <article className="relative bg-[#FFF9F6] pt-10 pb-16 md:pt-14 md:pb-24 overflow-hidden">
        {/* Ambient Gradient Glow */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-1/3 w-[500px] h-[300px] bg-gradient-to-r from-[#FF8A24]/10 via-[#FF6038]/10 to-[#FF087F]/10 blur-[120px] pointer-events-none rounded-full"
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <Breadcrumbs
            items={[
              { label: "Blogs", href: "/blogs/" },
              { label: article.title },
            ]}
            className="mb-8"
          />

          {/* Header Metadata & Title */}
          <header className="space-y-4 pb-8 border-b-2 border-[#111321]/10">
            <div className="flex items-center flex-wrap gap-2 text-xs font-mono font-extrabold">
              <span className="px-3 py-1 rounded-full bg-[#FFF0E9] text-[#FF6038] uppercase tracking-wider border border-[#FF6038]/20">
                {article.category}
              </span>
              <span aria-hidden="true" className="text-[#111321]/20">•</span>
              <span className="flex items-center gap-1 text-[#343644]">
                <Clock className="w-3.5 h-3.5 text-[#FF8A24]" />
                {article.readTime}
              </span>
              <span aria-hidden="true" className="text-[#111321]/20">•</span>
              <span className="text-[#727383]">{article.publishedDate}</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111321] tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-xl text-[#343644] leading-relaxed font-normal pt-1">
              {article.summary}
            </p>

            {/* Author Profile Lockup */}
            <div className="pt-4 flex items-center justify-between border-t border-[#111321]/5">
              <div className="flex items-center gap-3">
                <img
                  src={article.author.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#111321]/20 shadow-xs"
                />
                <div>
                  <div className="font-extrabold text-xs sm:text-sm text-[#111321]">
                    {article.author.name}
                  </div>
                  <div className="text-[11px] text-[#727383]">{article.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ title: article.title, url: window.location.href });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Article link copied to clipboard!");
                    }
                  }}
                  className="p-2 rounded-full bg-white border border-[#111321]/15 text-[#111321] hover:text-[#FF6038] hover:border-[#FF6038] transition-all cursor-pointer shadow-xs"
                  title="Share Article"
                  aria-label="Share Article"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </header>

          {/* Hero Featured Image */}
          <div className="my-8 rounded-3xl overflow-hidden border-2 border-[#111321] shadow-[8px_8px_0px_0px_#111321] bg-[#111321] relative">
            <img
              src={article.featuredImage}
              alt={article.imageAlt}
              className="w-full h-auto max-h-[440px] object-cover"
              loading="eager"
            />
          </div>

          {/* Table of Contents (if present) */}
          {article.tableOfContents && article.tableOfContents.length > 0 && (
            <nav
              aria-label="Table of Contents"
              className="my-8 p-6 rounded-3xl bg-white border-2 border-[#111321]/15 shadow-sm"
            >
              <div className="flex items-center gap-2 text-xs font-mono font-extrabold text-[#111321] uppercase tracking-wider mb-3">
                <List className="w-4 h-4 text-[#FF6038]" />
                <span>TABLE OF CONTENTS</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#343644] list-none p-0 m-0">
                {article.tableOfContents.map((toc) => (
                  <li key={toc.id}>
                    <button
                      onClick={() => scrollToSection(toc.id)}
                      className="text-left font-semibold text-[#111321] hover:text-[#FF6038] transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <span className="text-[#FF8A24]">•</span>
                      <span>{toc.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Strategic Takeaways Box */}
          <div className="my-8 p-6 sm:p-8 rounded-3xl bg-[#FFF0E9] border-2 border-[#111321]/10 shadow-sm">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-extrabold text-[#FF6038] uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" />
              <span>KEY STRATEGIC TAKEAWAYS</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-[#343644] list-none p-0 m-0">
              {article.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-semibold text-[#111321]">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Body Content */}
          <div className="space-y-10 text-sm sm:text-base text-[#343644] leading-relaxed font-normal">
            {article.content.map((section, idx) => (
              <section key={idx} id={section.id || `section-${idx}`} className="space-y-4 scroll-mt-24">
                <h2 className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-[#111321] leading-tight pt-2 border-t border-[#111321]/10">
                  {section.heading}
                </h2>
                
                <p className="text-[#343644] leading-relaxed font-normal">{section.body}</p>

                {section.callout && (
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-[#FFF0E9] to-[#FFE5ED] border-l-4 border-[#FF6038] text-xs sm:text-sm font-extrabold text-[#111321] shadow-xs">
                    "{section.callout}"
                  </div>
                )}

                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <ul className="space-y-2 text-xs sm:text-sm text-[#343644] pl-4 list-disc marker:text-[#FF6038]">
                    {section.bulletPoints.map((bp, bidx) => (
                      <li key={bidx} className="leading-relaxed">
                        {bp}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Bottom Action Strip */}
          <div className="mt-14 pt-8 border-t-2 border-[#111321]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link
              to="/blogs/"
              className="inline-flex items-center gap-2 text-xs font-extrabold text-[#111321] hover:text-[#FF6038] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all articles</span>
            </Link>

            <Button to="/contact/" variant="primary" size="sm">
              Discuss This Strategy With CoreClick
            </Button>
          </div>
        </div>
      </article>

      {/* Related Articles Grid */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-[#FFF0E9] border-t-2 border-[#111321]/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#111321]">
                Related Articles
              </h3>
              <Link
                to="/blogs/"
                className="text-xs font-extrabold text-[#FF6038] hover:text-[#FF8A24] flex items-center gap-1"
              >
                <span>Browse All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/blogs/${rel.slug}/`}
                  className="group bg-white p-6 rounded-3xl border-2 border-[#111321]/10 hover:border-[#FF6038] hover:shadow-[6px_6px_0px_0px_#111321] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-[10px] font-mono font-extrabold text-[#FF8A24] uppercase tracking-wider mb-2">
                      <span>{rel.category}</span>
                      <span>•</span>
                      <span className="text-[#727383]">{rel.readTime}</span>
                    </div>

                    <h4 className="font-heading font-extrabold text-base sm:text-lg text-[#111321] group-hover:text-[#FF6038] transition-colors leading-snug">
                      {rel.title}
                    </h4>

                    <p className="text-xs text-[#343644] mt-2 line-clamp-2 leading-relaxed">
                      {rel.summary}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-[#111321]/10 flex items-center justify-between text-xs font-extrabold text-[#111321] group-hover:text-[#FF6038] transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Conversion Banner */}
      <section className="py-14 bg-[#FFF9F6] border-t border-[#111321]/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="font-heading font-extrabold text-2xl text-[#111321]">
            Ready to Build Your Digital Growth Engine?
          </h3>
          <p className="text-xs sm:text-sm text-[#343644] mt-2 max-w-xl mx-auto">
            From strategic performance ads to organic search domination and custom high-converting web apps.
          </p>
          <div className="mt-6">
            <Link
              to="/contact/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#111321] text-white font-extrabold text-xs sm:text-sm hover:bg-black transition-all shadow-md hover:scale-105"
            >
              <span>Get Started With CoreClick</span>
              <ArrowUpRight className="w-4 h-4 text-[#FF8A24]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
