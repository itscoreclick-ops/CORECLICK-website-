import React, { useEffect } from "react";
import { CONFIG } from "../../config/siteConfig";

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: "website" | "article";
  structuredData?: Record<string, unknown>;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  canonicalPath = "",
  ogType = "website",
  structuredData,
}) => {
  useEffect(() => {
    // 1. Page Title
    const formattedTitle = title.includes("CoreClick")
      ? title
      : `${title} | CoreClick – Digital Marketing Agency`;
    document.title = formattedTitle;

    // 2. Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // 3. Canonical URL
    const canonicalUrl = `${CONFIG.websiteURL}${canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonicalUrl);

    // 4. OpenGraph Tags
    const updateOrCreateMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    updateOrCreateMeta("og:title", formattedTitle);
    updateOrCreateMeta("og:description", description);
    updateOrCreateMeta("og:url", canonicalUrl);
    updateOrCreateMeta("og:type", ogType);
    updateOrCreateMeta("og:site_name", CONFIG.businessName);

    // 5. Twitter Tags
    const updateOrCreateTwitterMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    updateOrCreateTwitterMeta("twitter:title", formattedTitle);
    updateOrCreateTwitterMeta("twitter:description", description);

    // 6. Structured Data injection if provided
    let scriptTag: HTMLScriptElement | null = null;
    if (structuredData) {
      scriptTag = document.createElement("script");
      scriptTag.type = "application/ld+json";
      scriptTag.text = JSON.stringify(structuredData);
      scriptTag.id = "page-specific-structured-data";
      document.head.appendChild(scriptTag);
    }

    return () => {
      if (scriptTag && scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag);
      }
    };
  }, [title, description, canonicalPath, ogType, structuredData]);

  return null;
};
