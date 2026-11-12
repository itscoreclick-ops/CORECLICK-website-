import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check, AlertCircle, ArrowRight, Sparkles, Building2, User, Target, DollarSign, Globe, CheckCircle2 } from "lucide-react";
import { submitLead } from "../../services/leadService";
import { LeadSubmission } from "../../types";

const BUDGET_OPTIONS = [
  "Under ₹25,000 / mo",
  "₹25,000 – ₹50,000 / mo",
  "₹50,000 – ₹1,00,000 / mo",
  "₹1,00,000 – ₹3,00,000 / mo",
  "₹3,00,000+ / mo",
];

const PLATFORM_OPTIONS = [
  { id: "both", label: "Both Google & Meta Ads", desc: "Recommended for highest blended ROAS" },
  { id: "google", label: "Google Ads Only", desc: "High-intent Search, PMax & YouTube" },
  { id: "meta", label: "Meta Ads Only", desc: "Facebook & Instagram Reels acquisition" },
  { id: "audit", label: "Existing Account Audit", desc: "Fix low ROAS on live campaigns" },
];

const OBJECTIVE_OPTIONS = [
  "Generate High-Intent Business Inquiries",
  "Scale E-Commerce Transactions & ROAS",
  "Attract Local Patients / Store Footfall",
  "Launch New Product / Brand Acquisition",
];

export const PerformanceMarketingEnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadSubmission>({
    fullName: "",
    phone: "",
    email: "",
    businessName: "",
    websiteUrl: "",
    adBudget: "₹50,000 – ₹1,00,000 / mo",
    preferredPlatform: "Both Google & Meta Ads",
    businessObjectives: "Generate High-Intent Business Inquiries",
    serviceInterestedIn: "Performance Marketing",
    message: "",
  });

  const [activeStep, setActiveStep] = useState<number>(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
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

  const handleSelectBudget = (budget: string) => {
    setFormData((prev) => ({ ...prev, adBudget: budget }));
  };

  const handleSelectPlatform = (platform: string) => {
    setFormData((prev) => ({ ...prev, preferredPlatform: platform }));
  };

  const handleSelectObjective = (obj: string) => {
    setFormData((prev) => ({ ...prev, businessObjectives: obj }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");

    // Step 1 validation
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      setActiveStep(1);
      setErrors({ fullName: "Please enter your full name (at least 2 characters)." });
      return;
    }

    if (!formData.phone.trim()) {
      setActiveStep(1);
      setErrors({ phone: "Please enter your 10-digit mobile number." });
      return;
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setActiveStep(1);
      setErrors({ email: "Please enter a valid email address." });
      return;
    }

    setIsLoading(true);

    // Combine objective and budget into message notes for transparency
    const compositeMessage = [
      formData.message ? `Notes: ${formData.message}` : "",
      formData.websiteUrl ? `Website: ${formData.websiteUrl}` : "",
      `Target Ad Budget: ${formData.adBudget}`,
      `Preferred Platform: ${formData.preferredPlatform}`,
      `Primary Objective: ${formData.businessObjectives}`,
    ]
      .filter(Boolean)
      .join(" | ");

    const submissionPayload: LeadSubmission = {
      ...formData,
      message: compositeMessage,
    };

    const result = await submitLead(submissionPayload);
    setIsLoading(false);

    if (result.success) {
      setSubmittedSuccess(true);
    } else {
      if (result.errors) {
        setErrors(result.errors);
      }
      setServerError(result.message || "Failed to submit enquiry. Please check your contact information.");
    }
  };

  return (
    <div className="bg-white rounded-3xl border-2 border-[#11121D] p-6 sm:p-10 shadow-[8px_8px_0px_0px_#11121D] relative overflow-hidden">
      {/* Background Subtle Gradient Lighting */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#FF8A24]/10 via-[#FF6038]/5 to-transparent blur-3xl pointer-events-none"
      />

      {/* Header */}
      <div className="mb-6 relative">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0E9] border border-[#FF6038]/20 text-[#FF6038] text-xs font-mono font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" />
          <span>CAMPAIGN SCOPING ENGINE</span>
        </div>
        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#11121D] tracking-tight">
          Start Your Performance Campaign
        </h3>
        <p className="text-xs sm:text-sm text-[#343644] mt-1.5 leading-relaxed font-normal">
          Tell us about your target acquisition goals. We'll audit your category economics and propose a customized Google & Meta advertising structure.
        </p>
      </div>

      {/* Multi-Step Guide Bar */}
      <div className="mb-8 p-1.5 bg-[#FFF0E9] rounded-2xl border border-[#11121D]/10 flex items-center justify-between gap-1 text-[11px] font-mono font-extrabold">
        <button
          type="button"
          onClick={() => setActiveStep(1)}
          className={`flex-1 py-2.5 px-3 text-center rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeStep === 1
              ? "bg-[#11121D] text-white shadow-sm"
              : formData.fullName && formData.phone
              ? "bg-white text-emerald-800"
              : "text-[#727383] hover:text-[#11121D]"
          }`}
        >
          <User className="w-3.5 h-3.5 shrink-0" />
          <span>1. Contact Info</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveStep(2)}
          className={`flex-1 py-2.5 px-3 text-center rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeStep === 2
              ? "bg-[#11121D] text-white shadow-sm"
              : formData.businessName
              ? "bg-white text-emerald-800"
              : "text-[#727383] hover:text-[#11121D]"
          }`}
        >
          <Building2 className="w-3.5 h-3.5 shrink-0" />
          <span>2. Business & Budget</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveStep(3)}
          className={`flex-1 py-2.5 px-3 text-center rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeStep === 3
              ? "bg-[#11121D] text-white shadow-sm"
              : "text-[#727383] hover:text-[#11121D]"
          }`}
        >
          <Target className="w-3.5 h-3.5 shrink-0" />
          <span>3. Strategy Scope</span>
        </button>
      </div>

      {serverError && (
        <div
          role="alert"
          className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-300 text-rose-800 text-xs sm:text-sm flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 shrink-0 text-rose-600 mt-0.5" />
          <span>{serverError}</span>
        </div>
      )}

      {submittedSuccess ? (
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#FFF0E9] to-[#FFE5ED] border-2 border-emerald-500 text-center space-y-5 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
            <Check className="w-8 h-8 stroke-[3]" />
          </div>

          <h4 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#11121D]">
            Campaign Brief Received!
          </h4>

          <p className="text-xs sm:text-sm text-[#343644] max-w-lg mx-auto leading-relaxed">
            Thank you, <strong>{formData.fullName}</strong>. Our senior performance media directors at CoreClick will review your acquisition goals for{" "}
            <strong>{formData.businessName || "your business"}</strong> and prepare initial keyword & audience recommendations.
          </p>

          <div className="p-5 rounded-2xl bg-white border border-[#11121D]/15 text-left text-xs space-y-2 max-w-md mx-auto shadow-sm">
            <div className="font-mono text-[10px] font-extrabold text-[#FF6038] uppercase tracking-wider">
              YOUR SUBMISSION SUMMARY
            </div>
            <div><strong>Contact:</strong> {formData.fullName} ({formData.phone})</div>
            {formData.email && <div><strong>Email:</strong> {formData.email}</div>}
            {formData.businessName && <div><strong>Brand:</strong> {formData.businessName}</div>}
            {formData.websiteUrl && <div><strong>Website:</strong> {formData.websiteUrl}</div>}
            <div><strong>Monthly Ad Budget:</strong> {formData.adBudget}</div>
            <div><strong>Preferred Platform:</strong> {formData.preferredPlatform}</div>
            <div><strong>Primary Objective:</strong> {formData.businessObjectives}</div>
          </div>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/918707414150?text=${encodeURIComponent(
                `Hello CoreClick, I just submitted the performance campaign brief for ${formData.fullName} (${formData.businessName || "My Business"}). Can we discuss the launch timeline?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#11121D] text-white text-xs font-extrabold hover:bg-black transition-all shadow-md"
            >
              <span>Instant WhatsApp Priority</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FF8A24]" />
            </a>

            <button
              type="button"
              onClick={() => {
                setSubmittedSuccess(false);
                setActiveStep(1);
                setFormData({
                  fullName: "",
                  phone: "",
                  email: "",
                  businessName: "",
                  websiteUrl: "",
                  adBudget: "₹50,000 – ₹1,00,000 / mo",
                  preferredPlatform: "Both Google & Meta Ads",
                  businessObjectives: "Generate High-Intent Business Inquiries",
                  serviceInterestedIn: "Performance Marketing",
                  message: "",
                });
              }}
              className="inline-flex items-center px-5 py-3 rounded-full bg-white border border-[#11121D]/20 text-xs font-bold text-[#11121D] hover:bg-[#FFF9F6]"
            >
              Submit Another Brief
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Anti-Spam Honeypot Field */}
          <div style={{ display: "none" }} aria-hidden="true">
            <input
              type="text"
              name="website_hp"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot || ""}
              onChange={(e) => setFormData((prev) => ({ ...prev, honeypot: e.target.value }))}
            />
          </div>

          {/* STEP 1: CONTACT DETAILS */}
          {activeStep === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="border-b border-[#11121D]/10 pb-2 mb-4">
                <span className="font-mono text-xs font-extrabold text-[#FF6038] uppercase">
                  Step 1 of 3: Primary Point of Contact
                </span>
              </div>

              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-extrabold text-[#111321] uppercase tracking-wider mb-1.5"
                >
                  Full Name <span className="text-[#FF087F]">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="e.g. Ramesh Verma"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl text-sm border bg-[#FFF9F6] text-[#11121D] placeholder:text-[#727383]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038] ${
                    errors.fullName ? "border-rose-500 bg-rose-50" : "border-[#11121D]/20 hover:border-[#11121D]"
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-rose-600 font-medium">{errors.fullName}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-extrabold text-[#11121D] uppercase tracking-wider mb-1.5"
                  >
                    10-Digit Phone Number <span className="text-[#FF087F]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="e.g. 8707414150"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl text-sm border bg-[#FFF9F6] text-[#11121D] placeholder:text-[#727383]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038] ${
                      errors.phone ? "border-rose-500 bg-rose-50" : "border-[#11121D]/20 hover:border-[#11121D]"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-rose-600 font-medium">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-extrabold text-[#11121D] uppercase tracking-wider mb-1.5"
                  >
                    Email Address <span className="text-[#FF087F]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl text-sm border bg-[#FFF9F6] text-[#11121D] placeholder:text-[#727383]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038] ${
                      errors.email ? "border-rose-500 bg-rose-50" : "border-[#11121D]/20 hover:border-[#11121D]"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-600 font-medium">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    if (!formData.fullName.trim()) {
                      setErrors({ fullName: "Please enter your name." });
                      return;
                    }
                    if (!formData.phone.trim()) {
                      setErrors({ phone: "Please enter your phone number." });
                      return;
                    }
                    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
                      setErrors({ email: "Please enter a valid email address." });
                      return;
                    }
                    setActiveStep(2);
                  }}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#11121D] text-white font-extrabold text-xs hover:bg-black transition-all cursor-pointer shadow-md"
                >
                  <span>Continue to Business Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF8A24]" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: BUSINESS & BUDGET */}
          {activeStep === 2 && (
            <div className="space-y-5 animate-fadeIn">
              <div className="border-b border-[#11121D]/10 pb-2 mb-4">
                <span className="font-mono text-xs font-extrabold text-[#FF6038] uppercase">
                  Step 2 of 3: Business & Advertising Capital
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-xs font-extrabold text-[#11121D] uppercase tracking-wider mb-1.5"
                  >
                    Business / Brand Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    placeholder="e.g. Kashi Lifestyle Store"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm border border-[#11121D]/20 bg-[#FFF9F6] text-[#11121D] placeholder:text-[#727383]/50 hover:border-[#11121D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="websiteUrl"
                    className="block text-xs font-extrabold text-[#11121D] uppercase tracking-wider mb-1.5"
                  >
                    Website / Instagram Profile <span className="text-[#727383] font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="websiteUrl"
                    name="websiteUrl"
                    placeholder="e.g. yourbrand.in or @yourbrand"
                    value={formData.websiteUrl}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm border border-[#11121D]/20 bg-[#FFF9F6] text-[#11121D] placeholder:text-[#727383]/50 hover:border-[#11121D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038]"
                  />
                </div>
              </div>

              {/* Monthly Ad Budget Options */}
              <div>
                <label className="block text-xs font-extrabold text-[#11121D] uppercase tracking-wider mb-2">
                  Estimated Monthly Ad Budget (Direct Platform Spend)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {BUDGET_OPTIONS.map((budget) => {
                    const isSelected = formData.adBudget === budget;
                    return (
                      <button
                        key={budget}
                        type="button"
                        onClick={() => handleSelectBudget(budget)}
                        className={`p-3 rounded-xl text-xs font-bold text-left transition-all border cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? "bg-[#11121D] text-white border-[#11121D] shadow-sm"
                            : "bg-[#FFF9F6] text-[#343644] border-[#11121D]/15 hover:border-[#FF6038]"
                        }`}
                      >
                        <span>{budget}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#FF8A24]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveStep(1)}
                  className="text-xs font-bold text-[#727383] hover:text-[#11121D] cursor-pointer"
                >
                  ← Back to Contact Info
                </button>

                <button
                  type="button"
                  onClick={() => setActiveStep(3)}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#11121D] text-white font-extrabold text-xs hover:bg-black transition-all cursor-pointer shadow-md"
                >
                  <span>Continue to Campaign Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF8A24]" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: SCOPE & OBJECTIVES */}
          {activeStep === 3 && (
            <div className="space-y-5 animate-fadeIn">
              <div className="border-b border-[#11121D]/10 pb-2 mb-4">
                <span className="font-mono text-xs font-extrabold text-[#FF6038] uppercase">
                  Step 3 of 3: Channels & Business Goals
                </span>
              </div>

              {/* Preferred Platform Selection */}
              <div>
                <label className="block text-xs font-extrabold text-[#11121D] uppercase tracking-wider mb-2">
                  Preferred Advertising Platform
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PLATFORM_OPTIONS.map((plat) => {
                    const isSelected = formData.preferredPlatform === plat.label;
                    return (
                      <button
                        key={plat.id}
                        type="button"
                        onClick={() => handleSelectPlatform(plat.label)}
                        className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#FFF0E9] border-[#FF6038] shadow-sm ring-1 ring-[#FF6038]"
                            : "bg-white border-[#11121D]/15 hover:border-[#11121D]/40"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-xs text-[#11121D]">{plat.label}</span>
                          {isSelected ? (
                            <span className="w-4 h-4 rounded-full bg-[#FF6038] text-white flex items-center justify-center text-[10px] font-bold">
                              ✓
                            </span>
                          ) : (
                            <span className="w-4 h-4 rounded-full border border-[#11121D]/20" />
                          )}
                        </div>
                        <p className="text-[11px] text-[#727383] mt-1 leading-snug">{plat.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Business Objectives */}
              <div>
                <label className="block text-xs font-extrabold text-[#11121D] uppercase tracking-wider mb-2">
                  Primary Commercial Objective
                </label>
                <div className="space-y-2">
                  {OBJECTIVE_OPTIONS.map((obj) => {
                    const isSelected = formData.businessObjectives === obj;
                    return (
                      <button
                        key={obj}
                        type="button"
                        onClick={() => handleSelectObjective(obj)}
                        className={`w-full p-3 rounded-xl text-left text-xs font-bold transition-all border cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? "bg-[#11121D] text-white border-[#11121D]"
                            : "bg-[#FFF9F6] text-[#343644] border-[#11121D]/15 hover:border-[#FF6038]"
                        }`}
                      >
                        <span>{obj}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#FF8A24]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Additional Requirements Textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-extrabold text-[#11121D] uppercase tracking-wider mb-1.5"
                >
                  Specific Pain Points or Historical ROAS <span className="text-[#727383] font-normal lowercase">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  placeholder="e.g. Previous ads were burning money with low lead quality; need help scaling Meta reels and Google PMax in Uttar Pradesh."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl text-sm border border-[#11121D]/20 bg-[#FFF9F6] text-[#11121D] placeholder:text-[#727383]/50 hover:border-[#11121D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038] resize-none"
                />
              </div>

              {/* Form Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-[#11121D]/10">
                <button
                  type="button"
                  onClick={() => setActiveStep(2)}
                  className="text-xs font-bold text-[#727383] hover:text-[#11121D] cursor-pointer text-center sm:text-left py-2"
                >
                  ← Back to Business & Budget
                </button>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="py-4 px-8 rounded-full bg-[#11121D] text-white font-extrabold text-sm shadow-xl hover:bg-black transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isLoading ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Submitting Campaign Scope...</span>
                    </>
                  ) : (
                    <>
                      <span>Launch Your Performance Campaign</span>
                      <ArrowRight className="w-4 h-4 text-[#FF8A24]" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          <p className="text-[11px] text-[#727383] text-center leading-normal pt-2">
            🔒 Direct to CoreClick Strategy Team. No spam, ever. Your phone number is strictly used for project consultation.
          </p>
        </form>
      )}
    </div>
  );
};
