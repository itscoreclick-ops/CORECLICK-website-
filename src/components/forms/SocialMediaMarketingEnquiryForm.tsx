import React, { useState } from "react";
import { Check, AlertCircle, ArrowRight, Sparkles, Building2, User, Instagram, Video, MessageCircle } from "lucide-react";
import { submitLead } from "../../services/leadService";
import { LeadSubmission } from "../../types";

const PLATFORM_CHOICES = [
  { id: "instagram", label: "Instagram (Reels, Carousels & Stories)" },
  { id: "facebook", label: "Facebook (Feed & Community)" },
  { id: "linkedin", label: "LinkedIn (Founder & Company Branding)" },
  { id: "youtube", label: "YouTube (Shorts & Long-Form Video)" },
  { id: "pinterest", label: "Pinterest (Visual Discovery)" },
];

const FREQUENCY_OPTIONS = [
  "8–12 Posts + 4 Reels / month",
  "12–16 Posts + 8 Reels / month (Recommended)",
  "20+ Posts + 12 Reels + Daily Stories",
  "Complete Creative Production & Management",
];

const GOAL_OPTIONS = [
  "Elevate Visual Aesthetics & Brand Positioning",
  "Generate Inbound Client Enquiries & DMs",
  "Viral Organic Reach & Follower Growth",
  "Launch New Product or Seasonal Campaign",
];

export const SocialMediaMarketingEnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadSubmission>({
    fullName: "",
    phone: "",
    email: "",
    businessName: "",
    city: "Varanasi",
    instagramProfile: "",
    preferredPlatform: "Instagram, Facebook",
    contentFrequency: "12–16 Posts + 8 Reels / month (Recommended)",
    businessObjectives: "Elevate Visual Aesthetics & Brand Positioning",
    serviceInterestedIn: "Social Media Marketing",
    message: "",
  });

  const [activeStep, setActiveStep] = useState<number>(1);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["Instagram", "Facebook"]);
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

  const togglePlatform = (label: string) => {
    setSelectedPlatforms((prev) => {
      const exists = prev.includes(label);
      const updated = exists ? prev.filter((p) => p !== label) : [...prev, label];
      setFormData((f) => ({ ...f, preferredPlatform: updated.join(", ") }));
      return updated;
    });
  };

  const handleSelectFrequency = (freq: string) => {
    setFormData((prev) => ({ ...prev, contentFrequency: freq }));
  };

  const handleSelectGoal = (goal: string) => {
    setFormData((prev) => ({ ...prev, businessObjectives: goal }));
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
      setErrors({ phone: "Please enter your 10-digit mobile number." });
      return;
    }

    setIsLoading(true);

    const compositeMessage = [
      formData.message ? `Requirements: ${formData.message}` : "",
      formData.instagramProfile ? `Instagram: ${formData.instagramProfile}` : "",
      `Target Platforms: ${formData.preferredPlatform}`,
      `Monthly Output: ${formData.contentFrequency}`,
      `Primary Goal: ${formData.businessObjectives}`,
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
      setServerError(result.message || "Failed to submit brief. Please check your contact details.");
    }
  };

  return (
    <div className="bg-white rounded-3xl border-2 border-[#11121D] p-6 sm:p-10 shadow-[8px_8px_0px_0px_#11121D] relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#FF087F]/10 via-[#FF6038]/5 to-transparent blur-3xl pointer-events-none"
      />

      {/* Header */}
      <div className="mb-6 relative">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE5ED] border border-[#FF087F]/20 text-[#FF087F] text-xs font-mono font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#FF6038]" />
          <span>CREATIVE BRIEF & CONSULTATION</span>
        </div>
        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#11121D] tracking-tight">
          Ready to Make Your Brand Stand Out?
        </h3>
        <p className="text-xs sm:text-sm text-[#343644] mt-1.5 leading-relaxed font-normal">
          Tell us about your brand aesthetic and content goals. Our creative directors will review your current profiles and design a tailored monthly creative plan.
        </p>
      </div>

      {/* 3-Step Guided Progress Bar */}
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
          <span>2. Brand & Handles</span>
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
          <Video className="w-3.5 h-3.5 shrink-0" />
          <span>3. Content Scope</span>
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
            Creative Brief Received!
          </h4>

          <p className="text-xs sm:text-sm text-[#343644] max-w-lg mx-auto leading-relaxed">
            Thank you, <strong>{formData.fullName}</strong>. Our social media and visual design team at CoreClick will audit <strong>{formData.instagramProfile || formData.businessName || "your brand profile"}</strong> and prepare sample creative concepts.
          </p>

          <div className="p-5 rounded-2xl bg-white border border-[#11121D]/15 text-left text-xs space-y-2 max-w-md mx-auto shadow-sm">
            <div className="font-mono text-[10px] font-extrabold text-[#FF087F] uppercase tracking-wider">
              YOUR CREATIVE BRIEF SUMMARY
            </div>
            <div><strong>Contact:</strong> {formData.fullName} ({formData.phone})</div>
            {formData.email && <div><strong>Email:</strong> {formData.email}</div>}
            {formData.businessName && <div><strong>Brand Name:</strong> {formData.businessName}</div>}
            {formData.instagramProfile && <div><strong>Instagram:</strong> {formData.instagramProfile}</div>}
            <div><strong>Target Platforms:</strong> {formData.preferredPlatform}</div>
            <div><strong>Content Scope:</strong> {formData.contentFrequency}</div>
            <div><strong>Primary Goal:</strong> {formData.businessObjectives}</div>
          </div>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/918707414150?text=${encodeURIComponent(
                `Hello CoreClick, I just submitted the social media creative brief for ${formData.fullName} (${formData.businessName || "My Brand"}). Let's discuss content production!`
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
                  city: "Varanasi",
                  instagramProfile: "",
                  preferredPlatform: "Instagram, Facebook",
                  contentFrequency: "12–16 Posts + 8 Reels / month (Recommended)",
                  businessObjectives: "Elevate Visual Aesthetics & Brand Positioning",
                  serviceInterestedIn: "Social Media Marketing",
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
                <span className="font-mono text-xs font-extrabold text-[#FF087F] uppercase">
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
                  placeholder="e.g. Ananya Sen"
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
                    Work Email <span className="text-[#727383] font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="ananya@brand.com"
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
                      setErrors({ phone: "Please enter your mobile number." });
                      return;
                    }
                    setActiveStep(2);
                  }}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#11121D] text-white font-extrabold text-xs hover:bg-black transition-all cursor-pointer shadow-md"
                >
                  <span>Continue to Brand Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF8A24]" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: BRAND & SOCIAL HANDLES */}
          {activeStep === 2 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="border-b border-[#11121D]/10 pb-2 mb-4">
                <span className="font-mono text-xs font-extrabold text-[#FF087F] uppercase">
                  Step 2 of 3: Brand Identity & Handles
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
                    placeholder="e.g. Aurelia Studio"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm border border-[#11121D]/20 bg-[#FFF9F6] text-[#11121D] placeholder:text-[#727383]/50 hover:border-[#11121D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block text-xs font-extrabold text-[#11121D] uppercase tracking-wider mb-1.5"
                  >
                    City / Location
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="e.g. Varanasi, Lucknow, Delhi"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm border border-[#11121D]/20 bg-[#FFF9F6] text-[#11121D] placeholder:text-[#727383]/50 hover:border-[#11121D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="instagramProfile"
                  className="block text-xs font-extrabold text-[#11121D] uppercase tracking-wider mb-1.5"
                >
                  Instagram Profile Handle or Website
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#FF087F]">
                    @
                  </span>
                  <input
                    type="text"
                    id="instagramProfile"
                    name="instagramProfile"
                    placeholder="yourbrandname or https://instagram.com/yourbrand"
                    value={formData.instagramProfile}
                    onChange={handleChange}
                    className="w-full pl-8 pr-4 py-3 rounded-xl text-sm border border-[#11121D]/20 bg-[#FFF9F6] text-[#11121D] placeholder:text-[#727383]/50 hover:border-[#11121D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038]"
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
                  <span>Continue to Content Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF8A24]" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: CONTENT SCOPE & OBJECTIVES */}
          {activeStep === 3 && (
            <div className="space-y-5 animate-fadeIn">
              <div className="border-b border-[#11121D]/10 pb-2 mb-4">
                <span className="font-mono text-xs font-extrabold text-[#FF087F] uppercase">
                  Step 3 of 3: Channels & Creative Scope
                </span>
              </div>

              {/* Multi-platform selector */}
              <div>
                <label className="block text-xs font-extrabold text-[#11121D] uppercase tracking-wider mb-2">
                  Preferred Social Platforms (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PLATFORM_CHOICES.map((plat) => {
                    const isSelected = selectedPlatforms.includes(plat.label.split(" ")[0]);
                    return (
                      <button
                        key={plat.id}
                        type="button"
                        onClick={() => togglePlatform(plat.label.split(" ")[0])}
                        className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? "bg-[#FFE5ED] border-[#FF087F] text-[#11121D] font-extrabold shadow-xs"
                            : "bg-[#FFF9F6] border-[#11121D]/15 text-[#343644] font-medium hover:border-[#11121D]"
                        }`}
                      >
                        <span className="text-xs">{plat.label}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#FF087F] shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Monthly content frequency */}
              <div>
                <label className="block text-xs font-extrabold text-[#11121D] uppercase tracking-wider mb-2">
                  Monthly Content Output Requirement
                </label>
                <div className="space-y-2">
                  {FREQUENCY_OPTIONS.map((freq) => {
                    const isSelected = formData.contentFrequency === freq;
                    return (
                      <button
                        key={freq}
                        type="button"
                        onClick={() => handleSelectFrequency(freq)}
                        className={`w-full p-3 rounded-xl text-left text-xs font-bold transition-all border cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? "bg-[#11121D] text-white border-[#11121D]"
                            : "bg-[#FFF9F6] text-[#343644] border-[#11121D]/15 hover:border-[#FF6038]"
                        }`}
                      >
                        <span>{freq}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#FF8A24]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Goal options */}
              <div>
                <label className="block text-xs font-extrabold text-[#11121D] uppercase tracking-wider mb-2">
                  Primary Objective
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {GOAL_OPTIONS.map((goal) => {
                    const isSelected = formData.businessObjectives === goal;
                    return (
                      <button
                        key={goal}
                        type="button"
                        onClick={() => handleSelectGoal(goal)}
                        className={`p-2.5 rounded-xl text-left text-xs font-bold transition-all border cursor-pointer ${
                          isSelected
                            ? "bg-[#FFF0E9] border-[#FF6038] text-[#11121D] ring-1 ring-[#FF6038]"
                            : "bg-white border-[#11121D]/15 text-[#343644] hover:border-[#11121D]"
                        }`}
                      >
                        {goal}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Specific requirements */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-extrabold text-[#11121D] uppercase tracking-wider mb-1.5"
                >
                  Tell Us About Your Brand Vision or Current Content Pain Points
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  placeholder="e.g. Our Instagram profile looks disjointed and inconsistent; we need professional reel editing, carousels, and aesthetic product showcases."
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
                  ← Back to Brand Details
                </button>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="py-4 px-8 rounded-full bg-[#11121D] text-white font-extrabold text-sm shadow-xl hover:bg-black transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isLoading ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Submitting Creative Scope...</span>
                    </>
                  ) : (
                    <>
                      <span>Start Your Social Media Transformation</span>
                      <ArrowRight className="w-4 h-4 text-[#FF8A24]" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          <p className="text-[11px] text-[#727383] text-center leading-normal pt-2">
            🔒 Direct to CoreClick Creative Team. No spam, ever. Your information is strictly used for project scoping.
          </p>
        </form>
      )}
    </div>
  );
};
