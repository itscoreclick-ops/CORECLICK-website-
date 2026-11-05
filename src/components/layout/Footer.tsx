import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { Logo } from "../common/Logo";
import { CONFIG } from "../../config/siteConfig";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFF0E9] text-[#11121D] relative overflow-hidden border-t-2 border-[#11121D]/10">
      {/* Background Subtle Accent Glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-gradient-to-r from-[#FF8A24]/10 via-[#FF6038]/10 to-[#FF087F]/10 blur-[120px] pointer-events-none rounded-full"
      />

      {/* Pre-Footer Floating CTA Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4 relative z-10">
        <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-[#11121D] shadow-[8px_8px_0px_0px_#11121D] relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#FF6038] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" />
              <span>Click Smart. Grow Fast.</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl tracking-tight text-[#11121D]">
              Ready to Accelerate Your Digital Growth?
            </h2>
            <p className="text-[#343644] text-sm mt-1 max-w-xl font-normal">
              Partner with Varanasi's premier digital growth agency. Strategic paid advertising,
              SEO, brand identities, and high-converting websites.
            </p>
          </div>
          <Link
            to="/contact/"
            className="relative z-10 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#11121D] text-white font-extrabold text-sm shadow-xl hover:bg-black transition-all shrink-0 hover:scale-105"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 text-[#FF8A24]" />
          </Link>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Location */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="default" showTagline={true} />
            <p className="text-[#343644] text-sm leading-relaxed max-w-sm pt-2 font-normal">
              CoreClick is a modern digital marketing and business growth agency headquartered in
              Varanasi, Uttar Pradesh. We engineer data-backed acquisition systems and brand
              identities that convert attention into sustainable revenue.
            </p>

            <div className="space-y-2.5 pt-2 text-xs font-medium text-[#11121D]">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF8A24] shrink-0" />
                <span>{CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF6038] shrink-0" />
                <a
                  href={`tel:${CONFIG.phone}`}
                  className="hover:text-[#FF6038] transition-colors font-bold"
                >
                  Direct: {CONFIG.formattedPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF087F] shrink-0" />
                <a
                  href={`mailto:${CONFIG.email}`}
                  className="hover:text-[#FF087F] transition-colors font-bold"
                >
                  {CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <a
                  href={`https://wa.me/91${CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-600 transition-colors font-bold text-emerald-700"
                >
                  WhatsApp: +91 {CONFIG.whatsapp}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div>
            <h3 className="text-xs font-mono font-extrabold text-[#FF6038] uppercase tracking-wider mb-4">
              Growth Services
            </h3>
            <ul className="space-y-2.5 text-xs text-[#343644] font-medium list-none p-0 m-0">
              <li>
                <Link to="/services/performance-marketing/" className="hover:text-[#FF6038] transition-colors">
                  Performance Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/google-ads/" className="hover:text-[#FF6038] transition-colors">
                  Google Ads & Search
                </Link>
              </li>
              <li>
                <Link to="/services/meta-ads/" className="hover:text-[#FF6038] transition-colors">
                  Meta Ads (FB & IG)
                </Link>
              </li>
              <li>
                <Link to="/services/seo/" className="hover:text-[#FF6038] transition-colors">
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link to="/services/local-seo/" className="hover:text-[#FF6038] transition-colors">
                  Local SEO & Google Maps
                </Link>
              </li>
              <li>
                <Link to="/services/lead-generation/" className="hover:text-[#FF6038] transition-colors">
                  Lead Generation Funnels
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Brand & Tech */}
          <div>
            <h3 className="text-xs font-mono font-extrabold text-[#FF087F] uppercase tracking-wider mb-4">
              Creative & Tech
            </h3>
            <ul className="space-y-2.5 text-xs text-[#343644] font-medium list-none p-0 m-0">
              <li>
                <Link to="/services/website-development/" className="hover:text-[#FF087F] transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services/landing-page-design/" className="hover:text-[#FF087F] transition-colors">
                  Landing Page Design & CRO
                </Link>
              </li>
              <li>
                <Link to="/services/branding/" className="hover:text-[#FF087F] transition-colors">
                  Branding & Visual Identity
                </Link>
              </li>
              <li>
                <Link to="/services/social-media-marketing/" className="hover:text-[#FF087F] transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/content-marketing/" className="hover:text-[#FF087F] transition-colors">
                  Content Marketing & Copy
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing-strategy/" className="hover:text-[#FF087F] transition-colors">
                  Growth Strategy Blueprints
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Agency & Legal */}
          <div>
            <h3 className="text-xs font-mono font-extrabold text-[#11121D] uppercase tracking-wider mb-4">
              About CoreClick
            </h3>
            <ul className="space-y-2.5 text-xs text-[#343644] font-medium list-none p-0 m-0">
              <li>
                <Link to="/about/" className="hover:text-[#FF6038] transition-colors">
                  About Us & Story
                </Link>
              </li>
              <li>
                <Link to="/services/" className="hover:text-[#FF6038] transition-colors">
                  Capabilities & Services
                </Link>
              </li>
              <li>
                <Link to="/blogs/" className="hover:text-[#FF6038] transition-colors">
                  Blogs & Growth Guides
                </Link>
              </li>
              <li>
                <Link to="/contact/" className="hover:text-[#FF6038] transition-colors">
                  Contact & Consultation
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy/" className="hover:text-[#FF6038] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions/" className="hover:text-[#FF6038] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-12 pt-8 border-t-2 border-[#11121D]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#727383]">
          <p>
            © {new Date().getFullYear()} {CONFIG.businessName}. All rights reserved. Varanasi, Uttar Pradesh, India.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy/" className="hover:text-[#11121D] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions/" className="hover:text-[#11121D] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
