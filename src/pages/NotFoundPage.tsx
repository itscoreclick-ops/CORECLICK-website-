import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";
import { SeoHead } from "../components/common/SeoHead";
import { Button } from "../components/common/Button";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-[#FFF9F6] text-[#111321] selection:bg-[#FF087F]/20 selection:text-[#FF087F]">
      <SeoHead
        title="404 – Page Not Found | CoreClick"
        description="The requested page could not be found. Explore CoreClick's digital marketing services or contact us."
        canonicalPath="/404/"
      />

      <section className="relative py-24 md:py-36 bg-[#FFF9F6] min-h-[75vh] flex items-center overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white border-2 border-[#111321] text-gradient-brand font-mono font-extrabold text-4xl mx-auto shadow-[6px_6px_0px_0px_#111321]">
            404
          </div>

          <div className="space-y-3">
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#111321] tracking-tight">
              Page Not Found
            </h1>
            <p className="text-sm md:text-base text-[#343644] max-w-md mx-auto leading-relaxed font-normal">
              The page you are looking for may have been moved, renamed, or does not exist.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/" variant="primary" size="md" leftIcon={<Home className="w-4 h-4" />}>
              Back to Home
            </Button>
            <Button to="/services/" variant="secondary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Browse All Services
            </Button>
          </div>

          <div className="pt-10 border-t border-[#111321]/10 mt-6">
            <p className="text-xs text-[#727383] mb-4 font-mono font-bold uppercase tracking-wider">
              Popular Destinations:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-bold text-[#111321]">
              <Link to="/services/google-ads/" className="hover:text-[#FF8A24] transition-colors">
                Google Ads
              </Link>
              <span className="text-[#111321]/20">·</span>
              <Link to="/services/meta-ads/" className="hover:text-[#FF8A24] transition-colors">
                Meta Ads
              </Link>
              <span className="text-[#111321]/20">·</span>
              <Link to="/services/seo/" className="hover:text-[#FF8A24] transition-colors">
                SEO Services
              </Link>
              <span className="text-[#111321]/20">·</span>
              <Link to="/services/local-seo/" className="hover:text-[#FF8A24] transition-colors">
                Varanasi Local SEO
              </Link>
              <span className="text-[#111321]/20">·</span>
              <Link to="/contact/" className="hover:text-[#FF8A24] transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
