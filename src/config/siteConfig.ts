/**
 * CoreClick Centralized Configuration
 * Single source of truth for branding, contact data, services, and design parameters.
 */

export const CONFIG = {
  businessName: "CoreClick",
  tagline: "Click Smart. Grow Fast.",
  legalName: "CoreClick Digital Growth Agency",
  
  phone: "8707414150",
  formattedPhone: "+91 87074 14150",
  whatsapp: "8707414150",
  whatsappMessage: "Hello CoreClick, I would like to discuss digital marketing services for my business.",
  
  // Note: Validated official contact email
  email: "itscoreclick@gmail.com",
  isEmailVerified: true,

  address: "Varanasi, Uttar Pradesh, India",
  city: "Varanasi",
  state: "Uttar Pradesh",
  country: "India",
  pincode: "221001",

  primaryCTA: "Contact Us",
  primaryCTALink: "/contact/",
  
  websiteURL: "https://coreclick.in",

  colors: {
    orange: "#FF8A24",
    coral: "#FF6038",
    pink: "#FF087F",
    deepPink: "#F50070",
    ivory: "#FFF9F6",
    peach: "#FFF0E9",
    lightPink: "#FFE5ED",
    lavender: "#F0E9FF",
    dark: "#111321",
    darkGrey: "#343644",
    mutedGrey: "#727383",
    gradient: "linear-gradient(110deg, #FF8A24 0%, #FF6038 48%, #FF087F 100%)",
  },

  integrations: {
    apiEndpoint: "/api/leads",
    webhookURL: "",
    googleAppsScriptURL: "",
    analyticsMeasurementID: "",
    googleAdsConversionID: "",
    googleAdsConversionLabel: "",
    metaPixelID: "",
  },

  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about/" },
    { label: "Services", href: "/services/", hasDropdown: true },
    { label: "Work", href: "/work/" },
    { label: "Blog", href: "/blogs/" },
  ],
} as const;

export type SiteConfig = typeof CONFIG;
