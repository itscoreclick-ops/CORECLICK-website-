import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { Logo } from "../common/Logo";
import { Button } from "../common/Button";
import { SERVICES_DATA } from "../../content/servicesData";

export const Header: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    setIsServicesDropdownOpen(false);
  }, [location.pathname]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#FFF9F6]/95 backdrop-blur-md border-b border-[#111321]/10 shadow-sm py-3.5 md:py-4"
          : "bg-[#FFF9F6]/90 backdrop-blur-xs py-5 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Left: Enlarged Brand Logo & Tagline */}
        <Logo variant="default" showTagline={true} size="md" className="shrink-0" />

        {/* Center: Larger Navigation Links (17-19px, Font Weight 600) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-8 lg:gap-11 text-[17px] lg:text-[18px] font-semibold text-[#111321]"
        >
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

          {/* Services Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <div className="flex items-center gap-1.5">
              <Link
                to="/services/"
                className={`whitespace-nowrap transition-colors hover:text-[#FF6038] py-1 relative ${
                  isActive("/services") ? "text-[#111321] font-bold" : "text-[#343644]"
                }`}
              >
                Services
                {isActive("/services") && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[3px] bg-gradient-brand rounded-full" />
                )}
              </Link>
              <button
                type="button"
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                aria-expanded={isServicesDropdownOpen}
                aria-haspopup="true"
                aria-label="Toggle Services Menu"
                className="p-1 text-[#343644] hover:text-[#FF6038] focus-visible:outline-none cursor-pointer"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesDropdownOpen ? "rotate-180 text-[#FF6038]" : ""
                  }`}
                />
              </button>
            </div>

            {/* Dropdown Menu */}
            {isServicesDropdownOpen && (
              <div
                role="menu"
                className="absolute top-full -left-20 w-[580px] mt-3 bg-[#FFF9F6] backdrop-blur-2xl rounded-2xl shadow-2xl border-2 border-[#111321]/10 p-6 animate-fadeIn z-50 text-[#111321]"
              >
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#111321]/10">
                  <span className="text-xs font-bold text-[#FF8A24] uppercase tracking-wider flex items-center gap-1.5 font-mono">
                    <Sparkles className="w-3.5 h-3.5" />
                    Growth Services
                  </span>
                  <Link
                    to="/services/"
                    className="text-xs font-bold text-[#FF6038] hover:text-[#FF087F] flex items-center gap-1 transition-colors"
                  >
                    Explore All Services <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {SERVICES_DATA.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}/`}
                      className="group/item flex flex-col p-2.5 rounded-xl hover:bg-[#FFE5ED]/60 border border-transparent hover:border-[#FF6038]/20 transition-all"
                      role="menuitem"
                    >
                      <span className="text-xs font-bold text-[#111321] group-hover/item:text-[#FF6038] transition-colors">
                        {service.title}
                      </span>
                      <span className="text-[11px] text-[#727383] line-clamp-1 mt-0.5">
                        {service.shortDescription}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/work/"
            className={`whitespace-nowrap transition-colors hover:text-[#FF6038] py-1 relative ${
              isActive("/work") ? "text-[#111321] font-bold" : "text-[#343644]"
            }`}
          >
            Work
            {isActive("/work") && (
              <span className="absolute -bottom-1.5 left-0 right-0 h-[3px] bg-gradient-brand rounded-full" />
            )}
          </Link>

          <Link
            to="/insights/"
            className={`whitespace-nowrap transition-colors hover:text-[#FF6038] py-1 relative ${
              isActive("/insights") ? "text-[#111321] font-bold" : "text-[#343644]"
            }`}
          >
            Blog
            {isActive("/insights") && (
              <span className="absolute -bottom-1.5 left-0 right-0 h-[3px] bg-gradient-brand rounded-full" />
            )}
          </Link>
        </nav>

        {/* Right: Premium Near-Black Pill CTA Button ("Let's Grow ↗") */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <Link
            to="/contact/"
            className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full bg-[#111321] text-white hover:bg-black font-semibold text-base shadow-sm hover:scale-[1.02] active:scale-95 transition-all"
          >
            <span>Let's Grow</span>
            <ArrowUpRight className="w-4.5 h-4.5" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            to="/contact/"
            className="inline-flex items-center justify-center gap-1 px-4 py-2 rounded-full bg-[#111321] text-white font-semibold text-xs"
          >
            <span>Let's Grow</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            className="p-2 rounded-lg text-[#111321] hover:bg-[#FFE5ED]/50 focus-visible:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t-2 border-[#111321]/10 bg-[#FFF9F6] px-4 pt-4 pb-6 space-y-4 shadow-2xl animate-fadeIn text-[#111321]">
          <div className="flex flex-col space-y-2">
            <Link
              to="/"
              className={`px-3.5 py-2.5 rounded-xl text-base font-bold ${
                isActive("/") ? "bg-[#FFE5ED] text-[#111321]" : "text-[#343644]"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about/"
              className={`px-3.5 py-2.5 rounded-xl text-base font-bold ${
                isActive("/about") ? "bg-[#FFE5ED] text-[#111321]" : "text-[#343644]"
              }`}
            >
              About
            </Link>
            <Link
              to="/services/"
              className={`px-3.5 py-2.5 rounded-xl text-base font-bold ${
                isActive("/services") ? "bg-[#FFE5ED] text-[#111321]" : "text-[#343644]"
              }`}
            >
              Services
            </Link>

            {/* Mobile Submenu for services */}
            <div className="pl-6 space-y-1.5 py-1 border-l-2 border-[#FF6038]/30 ml-3">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}/`}
                  className="block py-1 text-xs text-[#343644] hover:text-[#FF6038]"
                >
                  {service.title}
                </Link>
              ))}
              <Link
                to="/services/"
                className="block pt-1 text-xs font-bold text-[#FF6038]"
              >
                + View all 12 services
              </Link>
            </div>

            <Link
              to="/work/"
              className={`px-3.5 py-2.5 rounded-xl text-base font-bold ${
                isActive("/work") ? "bg-[#FFE5ED] text-[#111321]" : "text-[#343644]"
              }`}
            >
              Work
            </Link>
            <Link
              to="/insights/"
              className={`px-3.5 py-2.5 rounded-xl text-base font-bold ${
                isActive("/insights") ? "bg-[#FFE5ED] text-[#111321]" : "text-[#343644]"
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contact/"
              className={`px-3.5 py-2.5 rounded-xl text-base font-bold ${
                isActive("/contact") ? "bg-[#FFE5ED] text-[#111321]" : "text-[#343644]"
              }`}
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-3 border-t border-[#111321]/10 flex flex-col gap-3">
            <Button to="/contact/" variant="primary" size="md" className="w-full text-center justify-center">
              Let's Grow Together
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
