import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  Search,
  Palette,
  Code,
  ArrowRight,
  Building2,
  BookOpen,
  HelpCircle,
  MessageSquare,
} from "lucide-react";
import { Logo } from "../common/Logo";

interface ServiceMenuItem {
  title: string;
  desc: string;
  slug: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  items: ServiceMenuItem[];
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "paid",
    title: "CATEGORY 01 — PAID ADVERTISING",
    icon: TrendingUp,
    color: "#FF8A24",
    items: [
      {
        title: "Performance Marketing",
        desc: "Data-led acquisition and campaign optimization.",
        slug: "performance-marketing",
      },
      {
        title: "Google Ads",
        desc: "Search, Display, YouTube and Performance Max campaigns.",
        slug: "google-ads",
      },
      {
        title: "Meta Ads",
        desc: "Facebook and Instagram advertising focused on qualified enquiries.",
        slug: "meta-ads",
      },
    ],
  },
  {
    id: "organic",
    title: "CATEGORY 02 — ORGANIC GROWTH",
    icon: Search,
    color: "#FF6038",
    items: [
      {
        title: "Search Engine Optimization (SEO)",
        desc: "Improve organic rankings, search visibility and website authority.",
        slug: "seo",
      },
      {
        title: "Local SEO & Google Business Profile",
        desc: "Strengthen local visibility and attract nearby customers.",
        slug: "local-seo",
      },
    ],
  },
  {
    id: "creative",
    title: "CATEGORY 03 — BRAND & CREATIVE",
    icon: Palette,
    color: "#FF087F",
    items: [
      {
        title: "Social Media Marketing",
        desc: "Content strategy, reels and social media management.",
        slug: "social-media-marketing",
      },
      {
        title: "Branding & Brand Identity",
        desc: "Brand positioning, logo design and visual identity.",
        slug: "branding",
      },
      {
        title: "Content Marketing",
        desc: "Strategic content, copywriting and storytelling.",
        slug: "content-marketing",
      },
    ],
  },
  {
    id: "tech",
    title: "CATEGORY 04 — TECHNOLOGY & CONVERSION",
    icon: Code,
    color: "#7000FF",
    items: [
      {
        title: "Website Design & Development",
        desc: "Modern, responsive, high-performance websites.",
        slug: "website-development",
      },
      {
        title: "Landing Page Design & CRO",
        desc: "Conversion-focused landing pages and optimization.",
        slug: "landing-page-design",
      },
      {
        title: "Lead Generation",
        desc: "Campaigns and funnels designed to generate business enquiries.",
        slug: "lead-generation",
      },
      {
        title: "Digital Marketing Strategy",
        desc: "Integrated digital growth planning and execution.",
        slug: "digital-marketing-strategy",
      },
    ],
  },
];

const INDUSTRIES_LIST = [
  { name: "Retail & E-commerce", desc: "Digital sales & acquisition funnels", slug: "retail-ecommerce" },
  { name: "Healthcare & Clinics", desc: "Patient acquisition & local search", slug: "healthcare" },
  { name: "Education & Institutions", desc: "Student enrollment lead pipelines", slug: "education" },
  { name: "Hospitality & Hotels", desc: "Direct booking & brand exposure", slug: "hospitality" },
  { name: "Real Estate", desc: "High-intent buyer & investor leads", slug: "real-estate" },
  { name: "Local Businesses", desc: "Varanasi & regional Maps 3-Pack SEO", slug: "local-businesses" },
  { name: "Startups & Professional Services", desc: "Brand positioning & growth scale", slug: "startups" },
];

const INSIGHTS_LIST = [
  { name: "Marketing Insights", desc: "Deep dives on unit economics & ROAS", href: "/insights/" },
  { name: "SEO Guides", desc: "Technical & local search strategies", href: "/insights/" },
  { name: "Google Ads Guides", desc: "Search & PMax campaign playbooks", href: "/insights/" },
  { name: "Social Media Tips", desc: "Short-form video reel retention", href: "/insights/" },
  { name: "Case Studies", desc: "Verified growth stories & metrics", href: "/work/" },
  { name: "Digital Growth Resources", desc: "Frameworks, checklists & playbooks", href: "/insights/" },
];

export const Header: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Click outside to close active dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#FFF9F6]/95 backdrop-blur-md border-b border-[#111321]/10 shadow-sm py-3.5 md:py-4"
          : "bg-[#FFF9F6]/90 backdrop-blur-xs py-5 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
        {/* Left: Prominent Official CoreClick Logo Lockup */}
        <Logo variant="default" showTagline={true} size="md" className="shrink-0" />

        {/* Center: New Top Navigation Bar (Home, About, Services ▼, Industries ▼, Insights ▼, Contact) */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-7 text-[16px] xl:text-[17px] font-semibold text-[#111321]"
        >
          {/* Home */}
          <Link
            to="/"
            className={`whitespace-nowrap transition-colors hover:text-[#FF6038] py-1 relative ${
              isActive("/") ? "text-[#111321] font-bold" : "text-[#343644]"
            }`}
          >
            Home
            {isActive("/") && (
              <span className="absolute -bottom-1.5 left-0 right-0 h-[3px] bg-gradient-brand rounded-full" />
            )}
          </Link>

          {/* About */}
          <Link
            to="/about/"
            className={`whitespace-nowrap transition-colors hover:text-[#FF6038] py-1 relative ${
              isActive("/about") ? "text-[#111321] font-bold" : "text-[#343644]"
            }`}
          >
            About
            {isActive("/about") && (
              <span className="absolute -bottom-1.5 left-0 right-0 h-[3px] bg-gradient-brand rounded-full" />
            )}
          </Link>

          {/* Services ▼ Mega Menu Trigger */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer py-1">
              <Link
                to="/services/"
                className={`whitespace-nowrap transition-colors hover:text-[#FF6038] relative ${
                  isActive("/services") ? "text-[#111321] font-bold" : "text-[#343644]"
                }`}
              >
                Services
                {isActive("/services") && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[3px] bg-gradient-brand rounded-full" />
                )}
              </Link>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 text-[#343644] ${
                  activeDropdown === "services" ? "rotate-180 text-[#FF6038]" : ""
                }`}
              />
            </div>

            {/* ---------------- 2. REDESIGNED SERVICES MEGA MENU DROPDOWN ---------------- */}
            {activeDropdown === "services" && (
              <div className="absolute top-full -left-48 w-[920px] xl:w-[980px] mt-2 bg-[#FFF9F6] rounded-3xl shadow-2xl border-2 border-[#111321]/15 p-6 xl:p-8 animate-fadeIn z-50 text-[#111321]">
                {/* Mega Menu Top Bar */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#111321]/10">
                  <div>
                    <div className="font-mono text-xs font-extrabold text-[#FF8A24] uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" />
                      OUR GROWTH SERVICES
                    </div>
                    <div className="text-sm font-bold text-[#111321] mt-0.5">
                      "Everything Your Business Needs to Grow Digitally."
                    </div>
                  </div>

                  <Link
                    to="/services/"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FFF0E9] border border-[#FF6038]/30 text-xs font-extrabold text-[#FF6038] hover:bg-gradient-brand hover:text-white transition-all shadow-sm shrink-0"
                  >
                    <span>Explore All 12 Services</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* 4 Categorized Columns */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                  {SERVICE_CATEGORIES.map((cat) => {
                    const CategoryIcon = cat.icon;
                    return (
                      <div key={cat.id} className="space-y-3">
                        <div className="flex items-center gap-2 pb-2 border-b border-[#111321]/10">
                          <CategoryIcon className="w-4 h-4" style={{ color: cat.color }} />
                          <span className="font-mono text-[11px] font-extrabold text-[#111321] tracking-wider uppercase">
                            {cat.title}
                          </span>
                        </div>

                        <div className="space-y-2">
                          {cat.items.map((item) => (
                            <Link
                              key={item.slug}
                              to={`/services/${item.slug}/`}
                              className="group block p-2.5 rounded-2xl hover:bg-[#FFF0E9] border border-transparent hover:border-[#FF6038]/30 transition-all duration-200"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-heading font-extrabold text-xs text-[#111321] group-hover:text-[#FF6038] transition-colors">
                                  {item.title}
                                </span>
                                <ArrowRight className="w-3.5 h-3.5 text-[#727383] group-hover:text-[#FF6038] group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
                              </div>
                              <p className="text-[11px] text-[#727383] mt-1 leading-snug line-clamp-2">
                                {item.desc}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Service Discovery Footer Strip */}
                <div className="mt-6 pt-4 border-t-2 border-[#111321]/10 bg-[#FFF0E9] rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-extrabold text-[#111321]">
                      Not Sure Which Service Your Business Needs?
                    </div>
                    <div className="text-[11px] text-[#727383]">
                      Let's find the right digital growth strategy for your business.
                    </div>
                  </div>

                  <Link
                    to="/contact/"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#111321] text-white text-xs font-extrabold hover:bg-black transition-all shrink-0"
                  >
                    <span>Talk to CoreClick</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF8A24]" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Industries ▼ Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("industries")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer py-1">
              <Link
                to="/work/"
                className={`whitespace-nowrap transition-colors hover:text-[#FF6038] relative ${
                  isActive("/work") ? "text-[#111321] font-bold" : "text-[#343644]"
                }`}
              >
                Industries
              </Link>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 text-[#343644] ${
                  activeDropdown === "industries" ? "rotate-180 text-[#FF6038]" : ""
                }`}
              />
            </div>

            {/* Industries Dropdown Panel */}
            {activeDropdown === "industries" && (
              <div className="absolute top-full -left-20 w-[420px] mt-2 bg-[#FFF9F6] rounded-3xl shadow-2xl border-2 border-[#111321]/15 p-5 animate-fadeIn z-50 text-[#111321]">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#111321]/10">
                  <span className="font-mono text-xs font-extrabold text-[#FF6038] uppercase tracking-wider flex items-center gap-1.5">
                    <Building2 className="w-4 h-4" />
                    TARGET INDUSTRIES
                  </span>
                  <Link to="/work/" className="text-xs font-bold text-[#111321] hover:text-[#FF6038]">
                    View Case Studies ↗
                  </Link>
                </div>

                <div className="space-y-1.5">
                  {INDUSTRIES_LIST.map((ind, idx) => (
                    <Link
                      key={idx}
                      to="/work/"
                      className="group block p-2 rounded-xl hover:bg-[#FFF0E9] transition-all"
                    >
                      <div className="text-xs font-bold text-[#111321] group-hover:text-[#FF6038]">
                        {ind.name}
                      </div>
                      <div className="text-[11px] text-[#727383]">{ind.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Insights ▼ Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("insights")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer py-1">
              <Link
                to="/insights/"
                className={`whitespace-nowrap transition-colors hover:text-[#FF6038] relative ${
                  isActive("/insights") ? "text-[#111321] font-bold" : "text-[#343644]"
                }`}
              >
                Insights
              </Link>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 text-[#343644] ${
                  activeDropdown === "insights" ? "rotate-180 text-[#FF6038]" : ""
                }`}
              />
            </div>

            {/* Insights Dropdown Panel */}
            {activeDropdown === "insights" && (
              <div className="absolute top-full -left-20 w-[420px] mt-2 bg-[#FFF9F6] rounded-3xl shadow-2xl border-2 border-[#111321]/15 p-5 animate-fadeIn z-50 text-[#111321]">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#111321]/10">
                  <span className="font-mono text-xs font-extrabold text-[#FF087F] uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" />
                    KNOWLEDGE & RESOURCES
                  </span>
                  <Link to="/insights/" className="text-xs font-bold text-[#111321] hover:text-[#FF087F]">
                    Browse All Articles ↗
                  </Link>
                </div>

                <div className="space-y-1.5">
                  {INSIGHTS_LIST.map((ins, idx) => (
                    <Link
                      key={idx}
                      to={ins.href}
                      className="group block p-2 rounded-xl hover:bg-[#FFE5ED] transition-all"
                    >
                      <div className="text-xs font-bold text-[#111321] group-hover:text-[#FF087F]">
                        {ins.name}
                      </div>
                      <div className="text-[11px] text-[#727383]">{ins.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contact */}
          <Link
            to="/contact/"
            className={`whitespace-nowrap transition-colors hover:text-[#FF6038] py-1 relative ${
              isActive("/contact") ? "text-[#111321] font-bold" : "text-[#343644]"
            }`}
          >
            Contact
            {isActive("/contact") && (
              <span className="absolute -bottom-1.5 left-0 right-0 h-[3px] bg-gradient-brand rounded-full" />
            )}
          </Link>
        </nav>

        {/* Right Primary CTA: "LET'S GROW ↗" */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <Link
            to="/contact/"
            className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full bg-[#111321] text-white hover:bg-black font-extrabold text-sm shadow-md hover:scale-[1.02] active:scale-95 transition-all duration-200"
          >
            <span>LET'S GROW</span>
            <ArrowUpRight className="w-4 h-4 text-[#FF8A24]" />
          </Link>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="flex lg:hidden items-center gap-3">
          <Link
            to="/contact/"
            className="inline-flex items-center justify-center gap-1 px-4 py-2 rounded-full bg-[#111321] text-white font-extrabold text-xs shadow"
          >
            <span>LET'S GROW</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#FF8A24]" />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            className="p-2 rounded-xl text-[#111321] hover:bg-[#FFF0E9] focus-visible:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ---------------- 10. FULL MOBILE NAVIGATION DRAWER ---------------- */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-[#111321]/15 bg-[#FFF9F6] px-4 pt-4 pb-8 space-y-4 shadow-2xl animate-fadeIn text-[#111321] max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            <Link
              to="/"
              className={`px-4 py-3 rounded-2xl text-base font-extrabold ${
                isActive("/") ? "bg-[#FFF0E9] text-[#111321]" : "text-[#343644]"
              }`}
            >
              Home
            </Link>

            <Link
              to="/about/"
              className={`px-4 py-3 rounded-2xl text-base font-extrabold ${
                isActive("/about") ? "bg-[#FFF0E9] text-[#111321]" : "text-[#343644]"
              }`}
            >
              About
            </Link>

            {/* Services Accordion */}
            <div>
              <button
                onClick={() => setMobileAccordion(mobileAccordion === "services" ? null : "services")}
                className="w-full px-4 py-3 rounded-2xl text-base font-extrabold text-left flex items-center justify-between text-[#111321] hover:bg-[#FFF0E9]"
              >
                <span>Services</span>
                <span className="text-xs font-bold text-[#FF6038]">
                  {mobileAccordion === "services" ? "[-] " : "[+]"}
                </span>
              </button>

              {mobileAccordion === "services" && (
                <div className="pl-6 space-y-3 py-2 border-l-2 border-[#FF6038]/30 ml-4">
                  {SERVICE_CATEGORIES.map((cat) => (
                    <div key={cat.id} className="space-y-1">
                      <div className="text-[11px] font-mono font-extrabold text-[#FF6038]">
                        {cat.title}
                      </div>
                      {cat.items.map((item) => (
                        <Link
                          key={item.slug}
                          to={`/services/${item.slug}/`}
                          className="block py-1 text-xs font-bold text-[#343644] hover:text-[#FF6038]"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <Link to="/services/" className="block pt-2 text-xs font-extrabold text-[#FF087F]">
                    Explore All 12 Services →
                  </Link>
                </div>
              )}
            </div>

            {/* Industries Accordion */}
            <div>
              <button
                onClick={() =>
                  setMobileAccordion(mobileAccordion === "industries" ? null : "industries")
                }
                className="w-full px-4 py-3 rounded-2xl text-base font-extrabold text-left flex items-center justify-between text-[#111321] hover:bg-[#FFF0E9]"
              >
                <span>Industries</span>
                <span className="text-xs font-bold text-[#FF6038]">
                  {mobileAccordion === "industries" ? "[-] " : "[+]"}
                </span>
              </button>

              {mobileAccordion === "industries" && (
                <div className="pl-6 space-y-1.5 py-2 border-l-2 border-[#FF6038]/30 ml-4">
                  {INDUSTRIES_LIST.map((ind, idx) => (
                    <Link
                      key={idx}
                      to="/work/"
                      className="block py-1 text-xs font-medium text-[#343644] hover:text-[#FF6038]"
                    >
                      {ind.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Insights Accordion */}
            <div>
              <button
                onClick={() => setMobileAccordion(mobileAccordion === "insights" ? null : "insights")}
                className="w-full px-4 py-3 rounded-2xl text-base font-extrabold text-left flex items-center justify-between text-[#111321] hover:bg-[#FFF0E9]"
              >
                <span>Insights</span>
                <span className="text-xs font-bold text-[#FF6038]">
                  {mobileAccordion === "insights" ? "[-] " : "[+]"}
                </span>
              </button>

              {mobileAccordion === "insights" && (
                <div className="pl-6 space-y-1.5 py-2 border-l-2 border-[#FF6038]/30 ml-4">
                  {INSIGHTS_LIST.map((ins, idx) => (
                    <Link
                      key={idx}
                      to={ins.href}
                      className="block py-1 text-xs font-medium text-[#343644] hover:text-[#FF087F]"
                    >
                      {ins.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact/"
              className={`px-4 py-3 rounded-2xl text-base font-extrabold ${
                isActive("/contact") ? "bg-[#FFF0E9] text-[#111321]" : "text-[#343644]"
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="pt-4 border-t border-[#111321]/10">
            <Link
              to="/contact/"
              className="w-full py-3.5 px-6 rounded-full bg-[#111321] text-white font-extrabold text-sm text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <span>LET'S GROW</span>
              <ArrowUpRight className="w-4 h-4 text-[#FF8A24]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
