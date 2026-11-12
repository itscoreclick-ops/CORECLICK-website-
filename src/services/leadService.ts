import { LeadSubmission, LeadResponse } from "../types";
import { CONFIG } from "../config/siteConfig";

// Indian 10-digit mobile number validator (starts with 6, 7, 8, or 9, optional +91 prefix)
export function validateIndianPhone(phone: string): boolean {
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");
  const indianPhoneRegex = /^(?:\+91|91)?[6-9]\d{9}$/;
  return indianPhoneRegex.test(cleanPhone);
}

// Standard email validation (mandatory)
export function validateEmail(email: string): boolean {
  if (!email || !email.trim()) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

// Extract UTM parameters from current URL
export function getUtmParams(): {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
} {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get("utm_source") || undefined,
    utmMedium: params.get("utm_medium") || undefined,
    utmCampaign: params.get("utm_campaign") || undefined,
  };
}

let lastSubmittedFingerprint = "";
let lastSubmittedTime = 0;

export async function submitLead(formData: LeadSubmission): Promise<LeadResponse> {
  // 1. Client-Side Validation
  const errors: Record<string, string> = {};

  if (!formData.fullName || formData.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name (at least 2 characters).";
  }

  if (!formData.phone || !validateIndianPhone(formData.phone)) {
    errors.phone = "Please enter a valid 10-digit Indian phone number (e.g., 8707414150).";
  }

  if (!formData.email || !validateEmail(formData.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the highlighted fields.",
      errors,
    };
  }

  // 2. Duplicate Submission Prevention (within 30 seconds for identical lead)
  const leadFingerprint = `${formData.fullName.trim()}_${formData.phone.trim()}`;
  const now = Date.now();
  if (lastSubmittedFingerprint === leadFingerprint && now - lastSubmittedTime < 30000) {
    return {
      success: false,
      message: "This enquiry has already been received. Our team will contact you shortly.",
    };
  }

  // 3. Prepare payload with metadata & UTMs
  const utms = getUtmParams();
  const payload: LeadSubmission = {
    ...formData,
    submittedAt: new Date().toISOString(),
    sourceUrl: typeof window !== "undefined" ? window.location.href : "",
    utmSource: utms.utmSource,
    utmMedium: utms.utmMedium,
    utmCampaign: utms.utmCampaign,
  };

  try {
    const response = await fetch(CONFIG.integrations.apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const data = await response.json();
      lastSubmittedFingerprint = leadFingerprint;
      lastSubmittedTime = now;
      saveLocalLeadBackup(payload);
      return {
        success: true,
        message: data.message || "Thank you! Your enquiry has been received. CoreClick will contact you shortly.",
        leadId: data.leadId || `CC-${Date.now().toString(36).toUpperCase()}`,
      };
    } else {
      const errorData = await response.json().catch(() => ({}));
      return {
        success: false,
        message: errorData.message || "Failed to submit enquiry. Please call or WhatsApp us directly.",
        errors: errorData.errors,
      };
    }
  } catch (err: unknown) {
    saveLocalLeadBackup(payload);
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("[CoreClick Lead Submission Network Error]:", errorMsg);
    return {
      success: false,
      message: "Failed to connect to enquiry server. Please check your connection or contact us directly via phone or WhatsApp.",
    };
  }
}

function saveLocalLeadBackup(lead: LeadSubmission) {
  try {
    const existing = JSON.parse(localStorage.getItem("coreclick_leads_backup") || "[]");
    existing.unshift(lead);
    localStorage.setItem("coreclick_leads_backup", JSON.stringify(existing.slice(0, 50)));
  } catch {
    // Ignore storage quota errors
  }
}
