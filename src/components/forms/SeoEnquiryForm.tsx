import React, { useState } from "react";
import { Check, AlertCircle, ArrowRight, Sparkles, Building2, User, Search, Globe, Target } from "lucide-react";
import { submitLead } from "../../services/leadService";
import { LeadSubmission } from "../../types";

const SEO_OBJECTIVE_OPTIONS = [
  "Dominate Google First Page Rankings",
  "Win Local Google Maps 3-Pack in Varanasi / Regional Markets",
  "Recover from Algorithm Drop / Traffic Decline",
  "Scale Organic E-commerce Traffic & Revenue",
  "Full Technical SEO & Core Web Vitals Fix",
];

const SEO_CHALLENGE_OPTIONS = [
  "Not ranking for high-intent commercial keywords",
  "Competitors outranking us on Google Search & Maps",
  "Slow website speed & poor Core Web Vitals",
  "Poor indexation or crawl errors in Google Search Console",
  "New website launch requiring SEO architecture from scratch",
];

const INDUSTRY_OPTIONS = [
  "Retail & E-commerce",
  "Healthcare & Medical Clinics",
  "Education & Coaching Institutes",
  "Hospitality & Tourism",
  "Real Estate & Construction",
  "Professional Services & B2B",
  "Manufacturing & Industrial",
  "Local Varanasi Business",
];

export const SeoEnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadSubmission>({
    fullName: "",
    phone: "",
    email: "",
    businessName: "",
    websiteUrl: "",
    city: "Varanasi",
    industry: "Retail & E-commerce",
    serviceInterestedIn: "Search Engine Optimization (SEO)",
    businessObjectives: "Dominate Google First Page Rankings",
    targetKeywords: "",
    message: "",
  });

  const [activeStep, setActiveStep] = useState<number>(1);
  const [selectedChallenge, setSelectedChallenge] = useState<string>(
    "Not ranking for high-intent commercial keywords"
  );
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

  const handleSelectObjective = (obj: string) => {
    setFormData((prev) => ({ ...prev, businessObjectives: obj }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      setActiveStep(1);
      setErrors({ fullName: "Please enter your full name (at least 2 characters)." });
      return;
    }

    if (!formData.phone.trim()) {
      setActiveStep(1);
      setErrors({ phone: "Please enter your 10-digit mobile phone number." });
      return;
    }

    setIsLoading(true);

    const compositeMessage = [
      formData.message ? `Requirements: ${formData.message}` : "",
      formData.websiteUrl ? `Website: ${formData.websiteUrl}` : "",
      `Industry: ${formData.industry}`,
      `Primary SEO Goal: ${formData.businessObjectives}`,
      `Current SEO Challenge: ${selectedChallenge}`,
      formData.targetKeywords ? `Target Keywords: ${formData.targetKeywords}` : "",
      `City: ${formData.city || "Varanasi"}`,
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
      setServerError(result.message || "Failed to submit SEO audit brief. Please verify your contact details.");
    }
  };

  return (
    <div className="bg-white rounded-3xl border-2 border-[#11121D] p-6 sm:p-10 shadow-[8px_8px_0px_0px_#11121D] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#FF8A24]/10 via-[#FF6038]/5 to-transparent blur-3xl pointer-events-none"
      />

      {/* Header */}
      <div className="mb-6 relative">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0E9] border border-[#FF6038]/20 text-[#FF6038] text-xs font-mono font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#FF8A24]" />
          <span>SEO AUDIT & RANKING SCOPING</span>
        </div>
        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#11121D] tracking-tight">
          Let's Grow Your Organic Search Presence.
        </h3>
        <p className="text-xs sm:text-sm text-[#343644] mt-1.5 leading-relaxed font-normal">
          Tell us about your website and business goals. Our technical SEO team will analyze your search visibility and identify immediate ranking opportunities.
        </p>
      </div>

      {/* 3-Step Guided Bar */}
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
          <span>1. Your Details</span>
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
          <span>2. Your Business</span>
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
          <span>3. SEO Goals</span>
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
            SEO Audit Request Received!
          </h4>

          <p className="text-xs sm:text-sm text-[#343644] max-w-lg mx-auto leading-relaxed">
            Thank you, <strong>{formData.fullName}</strong>. Our senior search consultants at CoreClick will analyze the domain health and search visibility for{" "}
            <strong>{formData.websiteUrl || formData.businessName || "your business"}</strong> and prepare initial technical & keyword recommendations.
          </p>

          <div className="p-5 rounded-2xl bg-white border border-[#11121D]/15 text-left text-xs space-y-2 max-w-md mx-auto shadow-sm">
            <div className="font-mono text-[10px] font-extrabold text-[#FF6038] uppercase tracking-wider">
              YOUR SEO AUDIT BRIEF
            </div>
            <div><strong>Contact Name:</strong> {formData.fullName} ({formData.phone})</div>
            {formData.email && <div><strong>Email:</strong> {formData.email}</div>}
            {formData.businessName && <div><strong>Business Name:</strong> {formData.businessName}</div>}
            {formData.websiteUrl && <div><strong>Website URL:</strong> {formData.websiteUrl}</div>}
            <div><strong>Industry:</strong> {formData.industry}</div>
            <div><strong>Primary SEO Goal:</strong> {formData.businessObjectives}</div>
            <div><strong>Identified Challenge:</strong> {selectedChallenge}</div>
          </div>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/918707414150?text=${encodeURIComponent(
                `Hello CoreClick, I just submitted an SEO audit brief for ${formData.fullName} (${formData.websiteUrl || formData.businessName || "My Website"}). Let's discuss our organic search strategy!`
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
                  city: "Varanasi",
                  industry: "Retail & E-commerce",
                  serviceInterestedIn: "Search Engine Optimization (SEO)",
                  businessObjectives: "Dominate Google First Page Rankings",
                  targetKeywords: "",
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

          {/* STEP 1: YOUR DETAILS */}
          {activeStep === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="border-b border-[#11121D]/10 pb-2 mb-4">
                <span className="font-mono text-xs font-extrabold text-[#FF6038] uppercase">
                  Step 1 of 3: Primary Contact
                </span>
              </div>

              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-extrabold text-[#11121D] uppercase tracking-wider mb-1.5"
                >
                  Full Name <span className="text-[#FF087F]">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="e.g. Vikram Singhania"
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
                    10-Digit Mobile Number <span className="text-[#FF087F]">*</span>
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
                    Work Email <span className="text-[#727383] font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="vikram@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm border border-[#11121D]/20 bg-[#FFF9F6] text-[#11121D] placeholder:text-[#727383]/50 hover:border-[#11121D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038]"
                  />
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
                      setErrors({ phone: "Please enter your mobile phone number." });
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

          {/* STEP 2: YOUR BUSINESS & DOMAIN */}
          {activeStep === 2 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="border-b border-[#11121D]/10 pb-2 mb-4">
                <span className="font-mono text-xs font-extrabold text-[#FF6038] uppercase">
                  Step 2 of 3: Website & Industry
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
                    placeholder="e.g. Kashi Dental Clinic"
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
                    Website URL (or Target Domain)
                  </label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-[#727383] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      id="websiteUrl"
                      name="websiteUrl"
                      placeholder="e.g. https://yourbusiness.com"
                      value={formData.websiteUrl}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl text-sm border border-[#11121D]/20 bg-[#FFF9F6] text-[#11121D] placeholder:text-[#727383]/50 hover:border-[#11121D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="industry"
                    className="block text-xs font-extrabold text-[#11121D] uppercase tracking-wider mb-1.5"
                  >
                    Primary Industry Sector
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm border border-[#11121D]/20 bg-[#FFF9F6] text-[#11121D] hover:border-[#11121D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038]"
                  >
                    {INDUSTRY_OPTIONS.map((ind) => (
                      <option key={ind} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block text-xs font-extrabold text-[#11121D] uppercase tracking-wider mb-1.5"
                  >
                    City / Target Market
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="e.g. Varanasi, Lucknow, Delhi NCR, Pan-India"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm border border-[#11121D]/20 bg-[#FFF9F6] text-[#11121D] placeholder:text-[#727383]/50 hover:border-[#11121D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038]"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveStep(1)}
                  className="text-xs font-bold text-[#727383] hover:text-[#11121D] cursor-pointer"
                >
                  ← Back to Details
                </button>

                <button
                  type="button"
                  onClick={() => setActiveStep(3)}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#11121D] text-white font-extrabold text-xs hover:bg-black transition-all cursor-pointer shadow-md"
                >
                  <span>Continue to SEO Requirements</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF8A24]" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: SEO REQUIREMENTS */}
          {activeStep === 3 && (
            <div className="space-y-5 animate-fadeIn">
              <div className="border-b border-[#11121D]/10 pb-2 mb-4">
                <span className="font-mono text-xs font-extrabold text-[#FF6038] uppercase">
                  Step 3 of 3: Organic Strategy & Ranking Goals
                </span>
              </div>

              {/* Primary Objective */}
              <div>
                <label className="block text-xs font-extrabold text-[#11121D] uppercase tracking-wider mb-2">
                  Primary SEO Objective
                </label>
                <div className="space-y-2">
                  {SEO_OBJECTIVE_OPTIONS.map((obj) => {
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

              {/* Current SEO Challenges */}
              <div>
                <label className="block text-xs font-extrabold text-[#11121D] uppercase tracking-wider mb-2">
                  Current Search Friction or Pain Point
                </label>
                <select
                  value={selectedChallenge}
                  onChange={(e) => setSelectedChallenge(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm border border-[#11121D]/20 bg-[#FFF9F6] text-[#11121D] hover:border-[#11121D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038]"
                >
                  {SEO_CHALLENGE_OPTIONS.map((chal) => (
                    <option key={chal} value={chal}>
                      {chal}
                    </option>
                  ))}
                </select>
              </div>

              {/* Target Keywords (Optional) */}
              <div>
                <label
                  htmlFor="targetKeywords"
                  className="block text-xs font-extrabold text-[#11121D] uppercase tracking-wider mb-1.5"
                >
                  Desired Keywords or Queries <span className="text-[#727383] font-normal lowercase">(optional)</span>
                </label>
                <input
                  type="text"
                  id="targetKeywords"
                  name="targetKeywords"
                  placeholder="e.g. best dental clinic varanasi, silk sarees online india, real estate prayagraj"
                  value={formData.targetKeywords || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl text-sm border border-[#11121D]/20 bg-[#FFF9F6] text-[#11121D] placeholder:text-[#727383]/50 hover:border-[#11121D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038]"
                />
              </div>

              {/* Additional Project Requirements */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-extrabold text-[#11121D] uppercase tracking-wider mb-1.5"
                >
                  Additional Information or Website Context <span className="text-[#727383] font-normal lowercase">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  placeholder="e.g. Existing website built on WordPress; suffered a traffic drop after a redesign; need help outranking regional competitors on Google Maps."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl text-sm border border-[#11121D]/20 bg-[#FFF9F6] text-[#11121D] placeholder:text-[#727383]/50 hover:border-[#11121D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038] resize-none"
                />
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-[#11121D]/10">
                <button
                  type="button"
                  onClick={() => setActiveStep(2)}
                  className="text-xs font-bold text-[#727383] hover:text-[#11121D] cursor-pointer text-center sm:text-left py-2"
                >
                  ← Back to Business Details
                </button>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="py-4 px-8 rounded-full bg-[#11121D] text-white font-extrabold text-sm shadow-xl hover:bg-black transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isLoading ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Submitting SEO Brief...</span>
                    </>
                  ) : (
                    <>
                      <span>Launch Your Organic SEO Audit</span>
                      <ArrowRight className="w-4 h-4 text-[#FF8A24]" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          <p className="text-[11px] text-[#727383] text-center leading-normal pt-2">
            🔒 Direct to CoreClick Technical SEO Team. Zero spam, ever. Your phone number is strictly used for project consultation.
          </p>
        </form>
      )}
    </div>
  );
};
