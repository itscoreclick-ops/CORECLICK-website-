import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CheckCircle2, AlertCircle, ArrowRight, Sparkles, Building2, User, FileText, Check } from "lucide-react";
import { submitLead } from "../../services/leadService";
import { LeadSubmission } from "../../types";
import { SERVICES_DATA } from "../../content/servicesData";

interface ContactFormProps {
  defaultService?: string;
  redirectToThankYou?: boolean;
  className?: string;
  formTitle?: string;
  formSubtitle?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  defaultService = "",
  redirectToThankYou = false, // Allow in-place confirmation view on Contact Page
  className = "",
  formTitle = "Tell Us About Your Project",
  formSubtitle = "Share a few details about your business. We'll use them to understand your requirements and recommend the right direction.",
}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LeadSubmission>({
    fullName: "",
    phone: "",
    email: "",
    businessName: "",
    city: "",
    serviceInterestedIn: defaultService || "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [serverError, setServerError] = useState("");
  const [activeStep, setActiveStep] = useState<number>(1); // 1: DETAILS, 2: BUSINESS, 3: REQUIREMENTS

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");
    setIsLoading(true);

    const result = await submitLead(formData);
    setIsLoading(false);

    if (result.success) {
      setSubmittedSuccess(true);
      if (redirectToThankYou) {
        setTimeout(() => {
          navigate("/thank-you/", {
            state: {
              fullName: formData.fullName,
              serviceInterestedIn: formData.serviceInterestedIn,
              leadId: result.leadId,
            },
          });
        }, 600);
      }
    } else {
      if (result.errors) {
        setErrors(result.errors);
      }
      setServerError(result.message || "Failed to submit enquiry. Please review the form.");
    }
  };

  return (
    <div
      className={`bg-white rounded-3xl border-2 border-[#111321] p-6 md:p-8 shadow-[8px_8px_0px_0px_#111321] relative overflow-hidden ${className}`}
    >
      {/* Form Header */}
      <div className="mb-6 relative">
        <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-[#111321] tracking-tight">
          {formTitle}
        </h3>
        <p className="text-xs md:text-sm text-[#343644] mt-1.5 leading-relaxed">{formSubtitle}</p>
      </div>

      {/* Guided Form Step Indicator Bar */}
      <div className="mb-8 p-1.5 bg-[#FFF0E9] rounded-2xl border border-[#111321]/10 flex items-center justify-between gap-1 text-[10px] font-mono font-extrabold text-[#727383]">
        <div
          onClick={() => setActiveStep(1)}
          className={`flex-1 py-2 px-2 text-center rounded-xl cursor-pointer transition-all flex items-center justify-center gap-1 ${
            activeStep === 1
              ? "bg-[#111321] text-white shadow"
              : formData.fullName && formData.phone
              ? "bg-white text-emerald-700"
              : "hover:text-[#111321]"
          }`}
        >
          <User className="w-3 h-3" />
          <span className="hidden sm:inline">1. YOUR DETAILS</span>
          <span className="sm:hidden">1. DETAILS</span>
        </div>

        <div
          onClick={() => setActiveStep(2)}
          className={`flex-1 py-2 px-2 text-center rounded-xl cursor-pointer transition-all flex items-center justify-center gap-1 ${
            activeStep === 2
              ? "bg-[#111321] text-white shadow"
              : formData.businessName
              ? "bg-white text-emerald-700"
              : "hover:text-[#111321]"
          }`}
        >
          <Building2 className="w-3 h-3" />
          <span className="hidden sm:inline">2. YOUR BUSINESS</span>
          <span className="sm:hidden">2. BUSINESS</span>
        </div>

        <div
          onClick={() => setActiveStep(3)}
          className={`flex-1 py-2 px-2 text-center rounded-xl cursor-pointer transition-all flex items-center justify-center gap-1 ${
            activeStep === 3
              ? "bg-[#111321] text-white shadow"
              : formData.serviceInterestedIn
              ? "bg-white text-emerald-700"
              : "hover:text-[#111321]"
          }`}
        >
          <FileText className="w-3 h-3" />
          <span className="hidden sm:inline">3. REQUIREMENTS</span>
          <span className="sm:hidden">3. SCOPE</span>
        </div>
      </div>

      {serverError && (
        <div
          role="alert"
          className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-300 text-rose-800 text-xs sm:text-sm flex items-start gap-2.5 animate-fadeIn"
        >
          <AlertCircle className="w-5 h-5 shrink-0 text-rose-600 mt-0.5" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Confirmed Success State View */}
      {submittedSuccess ? (
        <div
          role="status"
          className="p-8 rounded-3xl bg-gradient-to-br from-[#FFF0E9] to-[#FFE5ED] border-2 border-emerald-500 text-emerald-950 text-center space-y-4 animate-fadeIn shadow-lg"
        >
          <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
            <Check className="w-8 h-8 stroke-[3]" />
          </div>

          <h4 className="font-heading font-extrabold text-2xl text-[#111321]">
            Your Enquiry Is on Its Way!
          </h4>

          <p className="text-xs sm:text-sm text-[#343644] max-w-md mx-auto leading-relaxed">
            Thank you, <strong>{formData.fullName}</strong>. We've received your business enquiry for{" "}
            <strong>{formData.serviceInterestedIn || "Digital Growth"}</strong>. A senior strategist from CoreClick (Varanasi) will review your details and connect within 24 business hours.
          </p>

          <div className="p-4 rounded-2xl bg-white border border-[#111321]/10 text-left text-xs space-y-1.5 max-w-sm mx-auto shadow-sm">
            <div className="font-mono text-[10px] font-bold text-[#FF6038] uppercase">
              CONFIRMED SUBMISSION SUMMARY
            </div>
            <div><strong>Contact Name:</strong> {formData.fullName}</div>
            <div><strong>Phone Number:</strong> {formData.phone}</div>
            {formData.email && <div><strong>Work Email:</strong> {formData.email}</div>}
            {formData.businessName && <div><strong>Business:</strong> {formData.businessName}</div>}
            <div><strong>Selected Service:</strong> {formData.serviceInterestedIn || "General Growth Consultation"}</div>
          </div>

          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111321] text-white text-xs font-extrabold hover:bg-black transition-all shadow-md"
            >
              <span>Return to Home</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FF8A24]" />
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4 relative">
          {/* Full Name */}
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
              autoComplete="name"
              placeholder="e.g. Ramesh Verma"
              value={formData.fullName}
              onChange={handleChange}
              onFocus={() => setActiveStep(1)}
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              className={`w-full px-4 py-3 rounded-xl text-sm border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038] ${
                errors.fullName
                  ? "border-rose-500 bg-rose-50 text-rose-900"
                  : "border-[#111321]/20 bg-[#FFF9F6] text-[#111321] placeholder:text-[#727383]/50 hover:border-[#111321]"
              }`}
            />
            {errors.fullName && (
              <p id="fullName-error" className="mt-1 text-xs text-rose-600 font-medium">
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Grid: Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-extrabold text-[#111321] uppercase tracking-wider mb-1.5"
              >
                Phone Number <span className="text-[#FF087F]">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                autoComplete="tel"
                placeholder="10-digit mobile (e.g. 8707414150)"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setActiveStep(1)}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={`w-full px-4 py-3 rounded-xl text-sm border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038] ${
                  errors.phone
                    ? "border-rose-500 bg-rose-50 text-rose-900"
                    : "border-[#111321]/20 bg-[#FFF9F6] text-[#111321] placeholder:text-[#727383]/50 hover:border-[#111321]"
                }`}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-xs text-rose-600 font-medium">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-extrabold text-[#111321] uppercase tracking-wider mb-1.5"
              >
                Work Email <span className="text-[#727383] font-normal lowercase">(optional)</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setActiveStep(1)}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full px-4 py-3 rounded-xl text-sm border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038] ${
                  errors.email
                    ? "border-rose-500 bg-rose-50 text-rose-900"
                    : "border-[#111321]/20 bg-[#FFF9F6] text-[#111321] placeholder:text-[#727383]/50 hover:border-[#111321]"
                }`}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-rose-600 font-medium">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Grid: Business Name & City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="businessName"
                className="block text-xs font-extrabold text-[#111321] uppercase tracking-wider mb-1.5"
              >
                Business / Brand Name
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                placeholder="e.g. Kashi Silk Studio"
                value={formData.businessName}
                onChange={handleChange}
                onFocus={() => setActiveStep(2)}
                className="w-full px-4 py-3 rounded-xl text-sm border border-[#111321]/20 bg-[#FFF9F6] text-[#111321] placeholder:text-[#727383]/50 hover:border-[#111321] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038]"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-xs font-extrabold text-[#111321] uppercase tracking-wider mb-1.5"
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
                onFocus={() => setActiveStep(2)}
                className="w-full px-4 py-3 rounded-xl text-sm border border-[#111321]/20 bg-[#FFF9F6] text-[#111321] placeholder:text-[#727383]/50 hover:border-[#111321] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038]"
              />
            </div>
          </div>

          {/* Service Selector with Selection Badge */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor="serviceInterestedIn"
                className="block text-xs font-extrabold text-[#111321] uppercase tracking-wider"
              >
                Primary Service of Interest <span className="text-[#FF087F]">*</span>
              </label>
              {formData.serviceInterestedIn && (
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#FFE5ED] text-[#FF087F]">
                  ✓ {formData.serviceInterestedIn}
                </span>
              )}
            </div>

            <select
              id="serviceInterestedIn"
              name="serviceInterestedIn"
              value={formData.serviceInterestedIn}
              onChange={handleChange}
              onFocus={() => setActiveStep(3)}
              className="w-full px-4 py-3 rounded-xl text-sm border border-[#111321]/20 bg-[#FFF9F6] text-[#111321] hover:border-[#111321] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038]"
            >
              <option value="">Select primary service (or General Enquiry)</option>
              {SERVICES_DATA.map((srv) => (
                <option key={srv.slug} value={srv.title}>
                  {srv.title} ({srv.category})
                </option>
              ))}
              <option value="General Enquiry">General Growth Enquiry</option>
              <option value="Complete Growth Overhaul">Complete Growth Overhaul (Multi-Channel)</option>
            </select>
          </div>

          {/* Budget / Planned Investment */}
          <div>
            <label
              htmlFor="budgetRange"
              className="block text-xs font-extrabold text-[#111321] uppercase tracking-wider mb-1.5"
            >
              Estimated Monthly Budget / Investment
            </label>
            <select
              id="budgetRange"
              name="budgetRange"
              value={formData.budgetRange || ""}
              onChange={handleChange}
              onFocus={() => setActiveStep(3)}
              className="w-full px-4 py-3 rounded-xl text-sm border border-[#111321]/20 bg-[#FFF9F6] text-[#111321] hover:border-[#111321] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038]"
            >
              <option value="">Select budget range (or Flexible)</option>
              <option value="Under ₹25,000 / mo">Under ₹25,000 / mo (Starter / Local)</option>
              <option value="₹25,000 – ₹50,000 / mo">₹25,000 – ₹50,000 / mo (Growth)</option>
              <option value="₹50,000 – ₹1,00,000 / mo">₹50,000 – ₹1,00,000 / mo (Scale)</option>
              <option value="₹1,00,000 – ₹3,00,000 / mo">₹1,00,000 – ₹3,00,000 / mo (High Volume)</option>
              <option value="₹3,00,000+ / mo">₹3,00,000+ / mo (Enterprise / Pan-India)</option>
            </select>
          </div>

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

          {/* Project Details Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-extrabold text-[#111321] uppercase tracking-wider mb-1.5"
            >
              Project Details or Current Challenges <span className="text-[#FF087F]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              required
              placeholder="Tell us about your business goals. E.g., scaling Google Ads ROAS, ranking on Varanasi Google Maps 3-Pack, launching a new brand..."
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setActiveStep(3)}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`w-full px-4 py-3 rounded-xl text-sm border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038] resize-none ${
                errors.message
                  ? "border-rose-500 bg-rose-50 text-rose-900"
                  : "border-[#111321]/20 bg-[#FFF9F6] text-[#111321] placeholder:text-[#727383]/50 hover:border-[#111321]"
              }`}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-xs text-rose-600 font-medium">
                {errors.message}
              </p>
            )}
          </div>

          {/* Full Width Prominent Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 px-6 rounded-full bg-[#111321] text-white font-extrabold text-sm shadow-xl hover:bg-black hover:shadow-[#FF087F]/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {isLoading ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  <span>Submitting Business Enquiry...</span>
                </>
              ) : (
                <>
                  <span>Submit Business Enquiry</span>
                  <ArrowRight className="w-4 h-4 text-[#FF8A24] group-hover:translate-x-1.5 transition-transform" />
                </>
              )}
            </button>
          </div>

          <p className="text-[11px] text-[#727383] text-center leading-normal pt-1">
            🔒 Direct to CoreClick Strategy Team. No spam, ever. Your phone number is strictly used for
            project consultation.
          </p>
        </form>
      )}
    </div>
  );
};
