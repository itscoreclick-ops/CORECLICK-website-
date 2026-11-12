import React, { useState } from "react";
import {
  Check,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Building2,
  User,
  Globe,
  Code2,
  Calendar,
  Sparkles,
  Phone,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { submitLead } from "../../services/leadService";
import { LeadSubmission } from "../../types";

const PROJECT_TYPE_OPTIONS = [
  { id: "new-website", label: "New Business Website", desc: "Built from scratch with modern responsive UI" },
  { id: "redesign", label: "Complete Website Redesign", desc: "Modern overhaul of slow or outdated site" },
  { id: "ecommerce", label: "E-Commerce Flagship", desc: "Catalog, payment gateways & high-converting checkout" },
  { id: "landing-page", label: "High-Converting Landing Page", desc: "Laser-focused lead capture for paid ads" },
  { id: "web-app", label: "Custom Web Application", desc: "Interactive dashboards, portals & custom logic" },
];

const SCOPE_OPTIONS = [
  "1 - 5 Pages (Quick Launch)",
  "6 - 15 Pages (Growing Brand)",
  "15+ Pages (Enterprise Portal)",
  "E-Commerce Catalog (50+ Products)",
];

const TIMELINE_OPTIONS = [
  "Fast Track (Within 2 Weeks)",
  "Standard (3 - 4 Weeks)",
  "1 - 2 Months",
  "Flexible / Discovery Phase",
];

const BUDGET_OPTIONS = [
  "₹30,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹2,50,000",
  "₹2,50,000+",
];

const INDUSTRY_OPTIONS = [
  "Retail & E-commerce",
  "Hospitality & Tourism (Varanasi/Regional)",
  "Healthcare, Hospitals & Clinics",
  "Real Estate & Infrastructure",
  "Education & Coaching Institutes",
  "Professional B2B & Legal Services",
  "Manufacturing & Export",
  "Technology & Startups",
];

export const WebDevEnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadSubmission>({
    fullName: "",
    phone: "",
    email: "",
    businessName: "",
    city: "Varanasi",
    industry: "Retail & E-commerce",
    serviceInterestedIn: "Website Design & Development",
    websiteUrl: "",
    projectType: "New Business Website",
    estimatedPages: "6 - 15 Pages (Growing Brand)",
    timeline: "Standard (3 - 4 Weeks)",
    budgetRange: "₹50,000 - ₹1,00,000",
    message: "",
  });

  const [activeStep, setActiveStep] = useState<number>(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [leadId, setLeadId] = useState("");
  const [serverError, setServerError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSelectProjectType = (typeLabel: string) => {
    setFormData((prev) => ({ ...prev, projectType: typeLabel }));
  };

  const validateStep = (stepNumber: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (stepNumber === 1) {
      if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
        newErrors.fullName = "Please enter your name (at least 2 characters).";
      }
      const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, "");
      const phoneRegex = /^(?:\+91|91)?[6-9]\d{9}$/;
      if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
        newErrors.phone = "Please enter a valid 10-digit Indian phone number (e.g. 8707414150).";
      }
      if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (stepNumber === 2) {
      if (!formData.businessName || !formData.businessName.trim()) {
        newErrors.businessName = "Please enter your business or brand name.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(activeStep)) {
      setActiveStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const handlePrevStep = () => {
    setActiveStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");

    if (!validateStep(1) || !validateStep(2)) {
      setActiveStep(1);
      return;
    }

    setIsLoading(true);

    const payload: LeadSubmission = {
      ...formData,
      businessObjectives: `Project Type: ${formData.projectType || "New Website"} | Scope: ${formData.estimatedPages || "Standard"} | Budget: ${formData.budgetRange || "Flexible"} | Timeline: ${formData.timeline || "Standard"}`,
      message: formData.message?.trim()
        ? `Notes: ${formData.message.trim()} | Current URL: ${formData.websiteUrl || "None"}`
        : `Website Development Enquiry for ${formData.businessName} (${formData.projectType})`,
    };

    const result = await submitLead(payload);
    setIsLoading(false);

    if (result.success) {
      setSubmittedSuccess(true);
      setLeadId(result.leadId || `CC-WEB-${Date.now().toString(36).toUpperCase()}`);
    } else {
      if (result.errors) {
        setErrors(result.errors);
      }
      setServerError(result.message || "Failed to submit project requirements. Please contact us via WhatsApp.");
    }
  };

  if (submittedSuccess) {
    const waSummary = `Hello CoreClick Team, I just submitted an inquiry for Website Development (ID: ${leadId}) for my business "${formData.businessName}". Project: ${formData.projectType}. Scope: ${formData.estimatedPages}. Phone: ${formData.phone}. Let's discuss!`;
    const waUrl = `https://wa.me/918707414150?text=${encodeURIComponent(waSummary)}`;

    return (
      <div className="bg-white rounded-3xl border border-[#11111F]/10 p-8 sm:p-12 shadow-xl relative overflow-hidden">
        {/* Subtle decorative gradient glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#FF6B35]/15 to-[#FF286B]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="max-w-xl mx-auto text-center space-y-6 relative">
          <div className="w-16 h-16 rounded-2xl bg-gradient-brand text-white flex items-center justify-center mx-auto shadow-lg shadow-[#FF6B35]/25">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-[#FF6B35] tracking-wider uppercase">
              SPECIFICATION RECEIVED · REF #{leadId}
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#11111F]">
              Your Website Architecture Review Has Started
            </h3>
            <p className="text-sm sm:text-base text-[#73778A] leading-relaxed">
              Thank you, <span className="font-semibold text-[#11111F]">{formData.fullName}</span>. Our lead digital engineer is reviewing the scope for <span className="font-semibold text-[#11111F]">{formData.businessName}</span>. We will deliver a bespoke architecture recommendation and timeline breakdown within 4 business hours.
            </p>
          </div>

          <div className="bg-[#FFF9F6] border border-[#11111F]/10 rounded-2xl p-5 text-left space-y-2.5 text-xs text-[#11111F]">
            <div className="font-bold font-mono text-[11px] text-[#FF6B35] uppercase tracking-wider">
              Project Specification Summary:
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-[#73778A]">Project Type:</span>{" "}
                <span className="font-semibold">{formData.projectType}</span>
              </div>
              <div>
                <span className="text-[#73778A]">Scope:</span>{" "}
                <span className="font-semibold">{formData.estimatedPages}</span>
              </div>
              <div>
                <span className="text-[#73778A]">Target Timeline:</span>{" "}
                <span className="font-semibold">{formData.timeline}</span>
              </div>
              <div>
                <span className="text-[#73778A]">Budget Range:</span>{" "}
                <span className="font-semibold">{formData.budgetRange}</span>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Fast-Track on WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
            <button
              onClick={() => {
                setSubmittedSuccess(false);
                setActiveStep(1);
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#11111F]/20 text-[#11111F] hover:bg-[#FFF0E9] font-semibold text-sm transition-colors"
            >
              Submit Another Project
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-[#11111F]/10 p-6 sm:p-10 shadow-xl relative overflow-hidden">
      {/* Step Indicator Bar */}
      <div className="mb-8">
        <div className="grid grid-cols-3 gap-2 sm:gap-4 p-1.5 bg-[#FFF0E9] rounded-2xl border border-[#11111F]/10">
          {[
            { step: 1, label: "Your Details", icon: User },
            { step: 2, label: "Your Business", icon: Building2 },
            { step: 3, label: "Requirements", icon: Code2 },
          ].map((item) => {
            const Icon = item.icon;
            const isCompleted = activeStep > item.step;
            const isCurrent = activeStep === item.step;

            return (
              <button
                type="button"
                key={item.step}
                onClick={() => {
                  if (item.step < activeStep || validateStep(activeStep)) {
                    setActiveStep(item.step);
                  }
                }}
                className={`flex items-center justify-center gap-2 py-2.5 px-2 rounded-xl text-xs font-bold transition-all text-left ${
                  isCurrent
                    ? "bg-white text-[#11111F] shadow-sm border border-[#11111F]/10"
                    : isCompleted
                    ? "text-[#FF6B35] hover:bg-white/50"
                    : "text-[#73778A] hover:text-[#11111F]"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono shrink-0 ${
                    isCurrent
                      ? "bg-gradient-brand text-white font-extrabold"
                      : isCompleted
                      ? "bg-[#FF6B35] text-white"
                      : "bg-[#11111F]/10 text-[#73778A]"
                  }`}
                >
                  {isCompleted ? <Check className="w-3 h-3" /> : item.step}
                </div>
                <span className="hidden sm:inline truncate">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {serverError && (
        <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* STEP 1: YOUR DETAILS */}
        {activeStep === 1 && (
          <div className="space-y-6">
            <div className="border-b border-[#11111F]/10 pb-4">
              <span className="font-mono text-xs font-bold text-[#FF6B35] uppercase tracking-wider">
                STEP 1 OF 3
              </span>
              <h4 className="font-heading font-extrabold text-xl text-[#11111F] mt-1">
                Tell Us Who We Are Building For
              </h4>
              <p className="text-xs sm:text-sm text-[#73778A] mt-0.5">
                We respect your privacy. No spam, just a straightforward technical consultation.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#11111F] uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-[#FF286B]">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full px-4 py-3.5 rounded-xl border bg-[#FFF9F6] text-sm text-[#11111F] placeholder:text-[#73778A]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/30 transition-all ${
                    errors.fullName ? "border-red-400 bg-red-50/50" : "border-[#11111F]/15"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.fullName}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#11111F] uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp <span className="text-[#FF286B]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 8707414150"
                    className={`w-full px-4 py-3.5 rounded-xl border bg-[#FFF9F6] text-sm text-[#11111F] placeholder:text-[#73778A]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/30 transition-all ${
                      errors.phone ? "border-red-400 bg-red-50/50" : "border-[#11111F]/15"
                    }`}
                  />
                  {errors.phone ? (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  ) : (
                    <p className="text-[11px] text-[#73778A] mt-1">10-digit Indian mobile number</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#11111F] uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-[#73778A] font-normal">(For Proposal)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="rahul@example.com"
                    className={`w-full px-4 py-3.5 rounded-xl border bg-[#FFF9F6] text-sm text-[#11111F] placeholder:text-[#73778A]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/30 transition-all ${
                      errors.email ? "border-red-400 bg-red-50/50" : "border-[#11111F]/15"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={handleNextStep}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-brand hover:opacity-95 text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Continue to Business Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: YOUR BUSINESS */}
        {activeStep === 2 && (
          <div className="space-y-6">
            <div className="border-b border-[#11111F]/10 pb-4">
              <span className="font-mono text-xs font-bold text-[#FF6B35] uppercase tracking-wider">
                STEP 2 OF 3
              </span>
              <h4 className="font-heading font-extrabold text-xl text-[#11111F] mt-1">
                Your Business & Online Presence
              </h4>
              <p className="text-xs sm:text-sm text-[#73778A] mt-0.5">
                Helps our engineers analyze your current competitive landscape and technical baseline.
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#11111F] uppercase tracking-wider mb-1.5">
                    Business / Brand Name <span className="text-[#FF286B]">*</span>
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="e.g. Keshav Bhog Sweets / Aura Clinic"
                    className={`w-full px-4 py-3.5 rounded-xl border bg-[#FFF9F6] text-sm text-[#11111F] placeholder:text-[#73778A]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/30 transition-all ${
                      errors.businessName ? "border-red-400 bg-red-50/50" : "border-[#11111F]/15"
                    }`}
                  />
                  {errors.businessName && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.businessName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#11111F] uppercase tracking-wider mb-1.5">
                    City / Target Market
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Varanasi, Lucknow, Delhi NCR, Pan-India"
                    className="w-full px-4 py-3.5 rounded-xl border border-[#11111F]/15 bg-[#FFF9F6] text-sm text-[#11111F] placeholder:text-[#73778A]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/30 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#11111F] uppercase tracking-wider mb-1.5">
                    Current Website URL <span className="text-[#73778A] font-normal">(If redesigning)</span>
                  </label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-[#73778A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="url"
                      name="websiteUrl"
                      value={formData.websiteUrl}
                      onChange={handleChange}
                      placeholder="https://yourbrand.com"
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-[#11111F]/15 bg-[#FFF9F6] text-sm text-[#11111F] placeholder:text-[#73778A]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#11111F] uppercase tracking-wider mb-1.5">
                    Industry / Sector
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-[#11111F]/15 bg-[#FFF9F6] text-sm text-[#11111F] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/30 transition-all"
                  >
                    {INDUSTRY_OPTIONS.map((ind) => (
                      <option key={ind} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handlePrevStep}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#11111F]/20 text-[#11111F] hover:bg-[#FFF0E9] font-semibold text-xs transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
              <button
                type="button"
                onClick={handleNextStep}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-brand hover:opacity-95 text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Continue to Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: REQUIREMENTS */}
        {activeStep === 3 && (
          <div className="space-y-6">
            <div className="border-b border-[#11111F]/10 pb-4">
              <span className="font-mono text-xs font-bold text-[#FF6B35] uppercase tracking-wider">
                STEP 3 OF 3
              </span>
              <h4 className="font-heading font-extrabold text-xl text-[#11111F] mt-1">
                Project Scope & Engineering Specifications
              </h4>
              <p className="text-xs sm:text-sm text-[#73778A] mt-0.5">
                Select your intended scope to receive an accurate timeline and roadmap.
              </p>
            </div>

            {/* Project Type Grid */}
            <div>
              <label className="block text-xs font-bold text-[#11111F] uppercase tracking-wider mb-2">
                Project Type <span className="text-[#FF286B]">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PROJECT_TYPE_OPTIONS.map((item) => {
                  const isSelected = formData.projectType === item.label;
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => handleSelectProjectType(item.label)}
                      className={`p-3.5 rounded-2xl border text-left transition-all flex items-start gap-3 ${
                        isSelected
                          ? "bg-[#FFF0E9] border-[#FF6B35] shadow-sm ring-1 ring-[#FF6B35]"
                          : "bg-[#FFF9F6] border-[#11111F]/10 hover:border-[#11111F]/25 hover:bg-white"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0 ${
                          isSelected
                            ? "border-[#FF6B35] bg-[#FF6B35] text-white"
                            : "border-[#11111F]/30"
                        }`}
                      >
                        {isSelected && <Check className="w-2.5 h-2.5" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#11111F]">{item.label}</div>
                        <div className="text-[11px] text-[#73778A] mt-0.5">{item.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Scope & Timeline Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#11111F] uppercase tracking-wider mb-1.5">
                  Estimated Pages / Scope
                </label>
                <select
                  name="estimatedPages"
                  value={formData.estimatedPages}
                  onChange={handleChange}
                  className="w-full px-3.5 py-3 rounded-xl border border-[#11111F]/15 bg-[#FFF9F6] text-xs font-medium text-[#11111F] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/30 transition-all"
                >
                  {SCOPE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#11111F] uppercase tracking-wider mb-1.5">
                  Target Launch Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-3.5 py-3 rounded-xl border border-[#11111F]/15 bg-[#FFF9F6] text-xs font-medium text-[#11111F] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/30 transition-all"
                >
                  {TIMELINE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#11111F] uppercase tracking-wider mb-1.5">
                  Estimated Budget
                </label>
                <select
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className="w-full px-3.5 py-3 rounded-xl border border-[#11111F]/15 bg-[#FFF9F6] text-xs font-medium text-[#11111F] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/30 transition-all"
                >
                  {BUDGET_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Additional Project Notes */}
            <div>
              <label className="block text-xs font-bold text-[#11111F] uppercase tracking-wider mb-1.5">
                Specific Features or Reference Websites <span className="text-[#73778A] font-normal">(Optional)</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Mention any must-have integrations (e.g. WhatsApp checkout, CRM, booking calendar, payment gateway, multi-language support, custom calculator)..."
                className="w-full px-4 py-3 rounded-xl border border-[#11111F]/15 bg-[#FFF9F6] text-sm text-[#11111F] placeholder:text-[#73778A]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/30 transition-all resize-none"
              />
            </div>

            <div className="pt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handlePrevStep}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#11111F]/20 text-[#11111F] hover:bg-[#FFF0E9] font-semibold text-xs transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-gradient-brand hover:opacity-95 text-white font-bold text-sm shadow-lg shadow-[#FF6B35]/25 transition-all disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Analyzing Requirements...</span>
                  </>
                ) : (
                  <>
                    <span>Submit & Request Architecture Review</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
