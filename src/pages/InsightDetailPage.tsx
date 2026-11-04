import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, ArrowRight, Check } from "lucide-react";
import { SeoHead } from "../components/common/SeoHead";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { Button } from "../components/common/Button";
import { INSIGHTS_DATA } from "../content/insightsData";

export const InsightDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = INSIGHTS_DATA.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/404/" replace />;
  }

  const relatedArticles = INSIGHTS_DATA.filter((a) =>
    article.relatedSlugs.includes(a.slug)
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "CoreClick",
      url: "https://coreclick.in",
    },
    datePublished: article.publishedDate,
  };

  return (
    <div className="bg-[#FFF9F6] text-[#111321] selection:bg-[#FF087F]/20 selection:text-[#FF087F]">
      <SeoHead
        title={`${article.title} | CoreClick Insights`}
        description={article.summary}
        canonicalPath={`/insights/${article.slug}/`}
        ogType="article"
        structuredData={structuredData}
      />

      <article className="relative bg-[#FFF9F6] py-14 md:py-20 overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Insights", href: "/insights/" },
              { label: article.title },
            ]}
            className="mb-8"
          />

          {/* Article Header */}
          <header className="space-y-4 pb-8 border-b border-[#111321]/10">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF6038] uppercase tracking-wider">
              <span>{article.category}</span>
              <span aria-hidden="true" className="text-[#111321]/20">·</span>
              <span className="flex items-center gap-1 text-[#727383]">
                <Clock className="w-3.5 h-3.5 text-[#FF8A24]" />
                {article.readTime}
              </span>
              <span aria-hidden="true" className="text-[#111321]/20">·</span>
              <span className="text-[#727383]">{article.publishedDate}</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#111321] tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-[#343644] leading-relaxed font-normal">
              {article.summary}
            </p>

            <div className="pt-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-brand text-white flex items-center justify-center font-bold text-xs shadow-md">
                CC
              </div>
              <div className="text-xs">
                <div className="font-bold text-[#111321]">{article.author.name}</div>
                <div className="text-[#727383]">{article.author.role}</div>
              </div>
            </div>
          </header>

          {/* Key Takeaways Box */}
          <div className="my-10 p-6 sm:p-8 rounded-3xl bg-[#FFF0E9] border border-[#111321]/10 shadow-sm">
            <h2 className="font-heading font-bold text-xs text-[#FF8A24] uppercase tracking-widest mb-4">
              Strategic Takeaways
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-[#343644] list-none p-0 m-0">
              {article.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-normal">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Body */}
          <div className="space-y-10 text-sm sm:text-base text-[#343644] leading-relaxed font-normal">
            {article.content.map((section, idx) => (
              <section key={idx} className="space-y-3">
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#111321]">
                  {section.heading}
                </h2>
                <p className="text-[#343644] leading-relaxed">{section.body}</p>
              </section>
            ))}
          </div>

          {/* Author Callout */}
          <div className="mt-14 pt-8 border-t border-[#111321]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link
              to="/insights/"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#111321] hover:text-[#FF6038] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all insights</span>
            </Link>

            <Button to="/contact/" variant="primary" size="sm">
              Discuss Strategy With Our Team
            </Button>
          </div>
        </div>
      </article>

      {/* Related Insights */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-[#FFF0E9]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="font-heading font-bold text-xl text-[#111321] mb-6">Related Playbooks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/insights/${rel.slug}/`}
                  className="group bg-white p-6 rounded-3xl border border-[#111321]/10 hover:border-[#FF6038] transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#FF8A24] uppercase tracking-wider">
                      {rel.category}
                    </span>
                    <h4 className="font-heading font-bold text-base text-[#111321] group-hover:text-[#FF6038] transition-colors mt-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-[#727383] mt-2 line-clamp-2">{rel.summary}</p>
                  </div>
                  <div className="pt-5 flex items-center gap-1.5 text-xs font-bold text-[#111321] group-hover:text-[#FF6038] transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
