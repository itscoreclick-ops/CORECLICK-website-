import React, { useState, useEffect, useCallback, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ChevronUp, Compass, Sparkles } from "lucide-react";

export interface SectionItem {
  id: string;
  label: string;
  shortLabel?: string;
}

// Default homepage sections with editorial titles
const HOMEPAGE_SECTIONS: SectionItem[] = [
  { id: "hero", label: "Overview", shortLabel: "01" },
  { id: "philosophy", label: "Philosophy", shortLabel: "02" },
  { id: "difference", label: "Interconnection", shortLabel: "03" },
  { id: "services", label: "Growth Capabilities", shortLabel: "04" },
  { id: "portfolio", label: "Selected Work", shortLabel: "05" },
  { id: "process", label: "5-Stage Process", shortLabel: "06" },
  { id: "capabilities", label: "Artifacts & Output", shortLabel: "07" },
  { id: "about", label: "About CoreClick", shortLabel: "08" },
  { id: "faqs", label: "Questions & Answers", shortLabel: "09" },
  { id: "contact", label: "Start A Project", shortLabel: "10" },
];

export const ScrollProgressIndicator: React.FC = () => {
  const { pathname } = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSectionId, setActiveSectionId] = useState<string>("");
  const [availableSections, setAvailableSections] = useState<SectionItem[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const animationFrameRef = useRef<number | null>(null);

  // Discover sections on the current page
  useEffect(() => {
    const discoverSections = () => {
      if (pathname === "/") {
        // Filter homepage sections to only those actually present in the DOM
        const existing = HOMEPAGE_SECTIONS.filter(
          (sec) => document.getElementById(sec.id) !== null
        );
        setAvailableSections(existing.length > 0 ? existing : HOMEPAGE_SECTIONS);
      } else {
        // Dynamic discovery for other pages that have data-section-title or semantic section ids
        const sectionNodes = document.querySelectorAll<HTMLElement>(
          "section[id], [data-scroll-section='true'][id]"
        );
        const discovered: SectionItem[] = [];

        sectionNodes.forEach((node, index) => {
          const id = node.id;
          if (!id) return;
          const label =
            node.getAttribute("data-section-title") ||
            node.querySelector("h2, h3")?.textContent?.trim().slice(0, 24) ||
            id.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

          discovered.push({
            id,
            label,
            shortLabel: String(index + 1).padStart(2, "0"),
          });
        });

        // Only show rail if page has 3 or more distinct sections
        setAvailableSections(discovered.length >= 3 ? discovered : []);
      }
    };

    // Run after DOM paints
    const timer = setTimeout(discoverSections, 150);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Track scroll depth and active section using requestAnimationFrame (lightweight, 60fps)
  const handleScroll = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollY / docHeight) * 100)) : 0;
      setScrollProgress(progress);
      setShowScrollTop(scrollY > 400);

      // Section-spy detection
      if (availableSections.length > 0) {
        // Calculate offset based on sticky header height (~80px)
        const headerOffset = 140;
        let currentActive = availableSections[0]?.id || "";

        for (let i = availableSections.length - 1; i >= 0; i--) {
          const sec = availableSections[i];
          const el = document.getElementById(sec.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            // If top of section is at or above viewport trigger point
            if (rect.top <= headerOffset) {
              currentActive = sec.id;
              break;
            }
          }
        }

        setActiveSectionId(currentActive);
      }
    });
  }, [availableSections]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [handleScroll]);

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const headerOffset = 84;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = el.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const activeIndex = availableSections.findIndex((s) => s.id === activeSectionId);
  const activeSection = availableSections[activeIndex];

  return (
    <>
      {/* ---------------- 1. STICKY TOP READING PROGRESS BAR ---------------- */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none bg-white/5"
      >
        <div
          className="h-full bg-gradient-brand transition-all duration-150 ease-out origin-left shadow-[0_0_12px_rgba(255,8,127,0.7)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ---------------- 2. FLOATING DESKTOP SECTION-SPY DOCK ---------------- */}
      {availableSections.length > 0 && (
        <aside
          aria-label="Page section navigation"
          className="fixed right-3 md:right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end select-none pointer-events-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Glass Rail Container */}
          <div className="relative flex flex-col items-center bg-[#140C1A]/85 backdrop-blur-xl border border-white/15 rounded-full py-3.5 px-2 shadow-2xl shadow-black/80 transition-all duration-300">
            {/* Header / Tracker Icon */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              title={isCollapsed ? "Expand section navigator" : "Collapse section navigator"}
              className="w-6 h-6 rounded-full flex items-center justify-center text-[#FF8A24] hover:text-white hover:bg-white/10 transition-colors mb-2 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6038]"
              aria-label="Toggle Section Spy"
            >
              <Compass className="w-3.5 h-3.5 animate-spin-slow" />
            </button>

            {/* Section Dots List */}
            {!isCollapsed && (
              <div className="flex flex-col items-center gap-2.5 py-1">
                {availableSections.map((sec, idx) => {
                  const isActive = sec.id === activeSectionId;

                  return (
                    <div key={sec.id} className="relative flex items-center group">
                      {/* Floating Expanded Tooltip on Hover or when Rail is Hovered & Active */}
                      <div
                        className={`absolute right-9 px-3 py-1.5 rounded-xl bg-[#0B0F17]/95 border border-white/20 backdrop-blur-md shadow-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 pointer-events-none flex items-center gap-2 ${
                          isHovered || isActive
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-2 invisible group-hover:opacity-100 group-hover:translate-x-0 group-hover:visible"
                        } ${
                          isActive
                            ? "border-[#FF6038]/50 text-white shadow-pink-500/10"
                            : "text-[#D4CBD5]"
                        }`}
                      >
                        <span className="font-mono text-[10px] text-[#FF8A24]">
                          {sec.shortLabel || `0${idx + 1}`}
                        </span>
                        <span>{sec.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF087F] animate-pulse" />
                        )}
                      </div>

                      {/* Interactive Section Node */}
                      <button
                        onClick={() => scrollToSection(sec.id)}
                        aria-label={`Jump to ${sec.label}`}
                        aria-current={isActive ? "true" : undefined}
                        className={`group relative rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038] ${
                          isActive
                            ? "w-2.5 h-7 bg-gradient-brand shadow-[0_0_12px_rgba(255,8,127,0.7)]"
                            : "w-2 h-2 bg-white/25 hover:bg-white/70 hover:scale-125"
                        }`}
                      >
                        <span className="sr-only">{sec.label}</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Scroll To Top Trigger */}
            {showScrollTop && (
              <button
                onClick={scrollToTop}
                title="Scroll back to top"
                className="w-6 h-6 mt-2 rounded-full flex items-center justify-center text-[#D4CBD5] hover:text-white hover:bg-white/10 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6038]"
                aria-label="Scroll to top"
              >
                <ChevronUp className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Current Section Pill indicator (subtle footer tag) */}
          {activeSection && !isCollapsed && (
            <div className="mt-2 text-[10px] font-mono text-[#D4CBD5]/70 bg-[#0B0F17]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 shadow-md">
              <span className="text-[#FF8A24] font-bold">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-white/30"> / </span>
              <span>{String(availableSections.length).padStart(2, "0")}</span>
            </div>
          )}
        </aside>
      )}

      {/* ---------------- 3. MOBILE FLOATING COMPACT CHAPTER PILL ---------------- */}
      {availableSections.length > 0 && activeSection && (
        <div className="md:hidden fixed bottom-20 left-4 z-40 pointer-events-auto">
          <button
            onClick={() => {
              const nextIndex = (activeIndex + 1) % availableSections.length;
              scrollToSection(availableSections[nextIndex].id);
            }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#140C1A]/90 backdrop-blur-md border border-white/15 shadow-xl text-[11px] font-semibold text-[#FFF7FA] active:scale-95 transition-all"
            aria-label={`Current section: ${activeSection.label}. Tap to jump to next.`}
          >
            <Sparkles className="w-3 h-3 text-[#FF8A24]" />
            <span className="font-mono text-[10px] text-[#FF6038]">
              {activeSection.shortLabel}
            </span>
            <span className="max-w-[120px] truncate">{activeSection.label}</span>
          </button>
        </div>
      )}
    </>
  );
};
