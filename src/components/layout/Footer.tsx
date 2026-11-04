import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { Logo } from "../common/Logo";
import { CONFIG } from "../../config/siteConfig";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111321] text-[#FFF7FA] relative overflow-hidden mt-16">
      {/* Background Accent Glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-gradient-brand opacity-15 blur-[120px] pointer-events-none rounded-full"
      />

      {/* Pre-Footer Floating CTA Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4 relative z-10">
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#FF8A24] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Click Smart. Grow Fast.</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl tracking-tight text-white">
              Ready to Accelerate Your Digital Growth?
            </h2>
            <p className="text-[#D4CBD5] text-sm mt-1 max-w-xl font-light">
              Partner with Varanasi's premier digital growth agency. Strategic paid advertising,
              SEO, brand identities, and high-converting websites.
            </p>
          </div>
          <Link
            to="/contact/"
            className="relative z-10 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-brand text-white font-semibold text-sm shadow-xl hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-95 transition-all shrink-0"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Location */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="white" showTagline={true} />
            <p className="text-[#D4CBD5] text-sm leading-relaxed max-w-sm pt-2">
              CoreClick is a modern digital marketing and business growth agency headquartered in
              Varanasi, Uttar Pradesh. We engineer data-backed acquisition systems and brand
              identities that convert attention into sustainable revenue.
            </p>
            <div className="space-y-2.5 pt-2 text-xs text-[#D4CBD5]">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF8A24] shrink-0" />
                <span>{CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF6038] shrink-0" />
                <a
                  href={`tel:${CONFIG.phone}`}
                  className="hover:text-white transition-colors"
                >
                  Direct: {CONFIG.formattedPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF087F] shrink-0" />
                <a
                  href={`mailto:${CONFIG.email}`}
                  className="hover:text-white transition-colors"
                >
                  {CONFIG.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Growth Services
            </h3>
            <ul className="space-y-2.5 text-xs text-[#D4CBD5] list-none p-0 m-0">
              <li>
                <Link to="/services/performance-marketing/" className="hover:text-white transition-colors">
                  Performance Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/google-ads/" className="hover:text-white transition-colors">
                  Google Ads & Search
                </Link>
              </li>
              <li>
                <Link to="/services/meta-ads/" className="hover:text-white transition-colors">
                  Meta Ads (FB & IG)
                </Link>
              </li>
              <li>
                <Link to="/services/seo/" className="hover:text-white transition-colors">
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link to="/services/local-seo/" className="hover:text-white transition-colors">
                  Local SEO & Google Maps
                </Link>
              </li>
              <li>
                <Link to="/services/lead-generation/" className="hover:text-white transition-colors">
                  Lead Generation Funnels
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Brand & Tech */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Creative & Tech
            </h3>
            <ul className="space-y-2.5 text-xs text-[#D4CBD5] list-none p-0 m-0">
              <li>
                <Link to="/services/website-development/" className="hover:text-white transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services/landing-page-design/" className="hover:text-white transition-colors">
                  Landing Page Design & CRO
                </Link>
              </li>
              <li>
                <Link to="/services/branding/" className="hover:text-white transition-colors">
                  Branding & Visual Identity
                </Link>
              </li>
              <li>
                <Link to="/services/social-media-marketing/" className="hover:text-white transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/content-marketing/" className="hover:text-white transition-colors">
                  Content Marketing & Copy
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing-strategy/" className="hover:text-white transition-colors">
                  Growth Strategy Blueprints
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Agency & Resources */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Agency & Resources
            </h3>
            <ul className="space-y-2.5 text-xs text-[#D4CBD5] list-none p-0 m-0">
              <li>
                <Link to="/about/" className="hover:text-white transition-colors">
                  About CoreClick
                </Link>
              </li>
              <li>
                <Link to="/work/" className="hover:text-white transition-colors">
                  Selected Work & Case Studies
                </Link>
              </li>
              <li>
                <Link to="/insights/" className="hover:text-white transition-colors">
                  Insights & Playbooks
                </Link>
              </li>
              <li>
                <Link to="/contact/" className="hover:text-white transition-colors">
                  Contact & Consultation
                </Link>
              </li>
              <li>
                <Link to="/lp/local-business-growth/" className="hover:text-white transition-colors">
                  Varanasi Local Growth Funnel
                </Link>
              </li>
              <li>
                <Link to="/lp/google-ads/" className="hover:text-white transition-colors">
                  Google Ads Campaign Landing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D4CBD5]/70">
          <p>
            © {new Date().getFullYear()} {CONFIG.businessName}. All rights reserved. Varanasi, Uttar
            Pradesh, India.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions/" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
