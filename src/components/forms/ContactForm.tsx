import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { submitLead } from "../../services/leadService";
import { LeadSubmission } from "../../types";
import { SERVICES_DATA } from "../../content/servicesData";
import { Button } from "../common/Button";

interface ContactFormProps {
  defaultService?: string;
  redirectToThankYou?: boolean;
  className?: string;
  formTitle?: string;
  formSubtitle?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  defaultService = "",
  redirectToThankYou = true,
  className = "",
  formTitle = "Start Your Growth Conversation",
  formSubtitle = "Tell us about your business, current marketing challenges, and target outcomes.",
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
      <div className="mb-6 relative">
        <h3 className="font-heading font-extrabold text-xl md:text-2xl text-[#111321] tracking-tight">
          {formTitle}
        </h3>
        <p className="text-xs md:text-sm text-[#727383] mt-1.5 leading-relaxed">{formSubtitle}</p>
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

      {submittedSuccess && !redirectToThankYou ? (
        <div
          role="status"
          className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-center animate-fadeIn"
        >
          <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
          <h4 className="font-heading font-bold text-lg text-[#111321]">Enquiry Received!</h4>
          <p className="text-xs sm:text-sm text-emerald-800 mt-1 max-w-sm mx-auto">
            Thank you, {formData.fullName}. A senior strategist from CoreClick (Varanasi) will reach
            out to you within 24 business hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4 relative">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-bold text-[#111321] uppercase tracking-wider mb-1.5"
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
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              className={`w-full px-3.5 py-2.5 rounded-xl text-sm border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038] ${
                errors.fullName
                  ? "border-rose-500 bg-rose-50 text-rose-900"
                  : "border-[#111321]/20 bg-[#FFF9F6] text-[#111321] placeholder:text-[#727383]/50 hover:border-[#111321]"
              }`}
            />
            {errors.fullName && (
              <p id="fullName-error" className="mt-1 text-xs text-rose-600">
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Grid: Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-bold text-[#111321] uppercase tracking-wider mb-1.5"
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
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={`w-full px-3.5 py-2.5 rounded-xl text-sm border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038] ${
                  errors.phone
                    ? "border-rose-500 bg-rose-50 text-rose-900"
                    : "border-[#111321]/20 bg-[#FFF9F6] text-[#111321] placeholder:text-[#727383]/50 hover:border-[#111321]"
                }`}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-xs text-rose-600">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold text-[#111321] uppercase tracking-wider mb-1.5"
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
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full px-3.5 py-2.5 rounded-xl text-sm border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038] ${
                  errors.email
                    ? "border-rose-500 bg-rose-50 text-rose-900"
                    : "border-[#111321]/20 bg-[#FFF9F6] text-[#111321] placeholder:text-[#727383]/50 hover:border-[#111321]"
                }`}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-rose-600">
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
                className="block text-xs font-bold text-[#111321] uppercase tracking-wider mb-1.5"
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
                className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-[#111321]/20 bg-[#FFF9F6] text-[#111321] placeholder:text-[#727383]/50 hover:border-[#111321] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038]"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-xs font-bold text-[#111321] uppercase tracking-wider mb-1.5"
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
                className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-[#111321]/20 bg-[#FFF9F6] text-[#111321] placeholder:text-[#727383]/50 hover:border-[#111321] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038]"
              />
            </div>
          </div>

          {/* Service Selector */}
          <div>
            <label
              htmlFor="serviceInterestedIn"
              className="block text-xs font-bold text-[#111321] uppercase tracking-wider mb-1.5"
            >
              Primary Service of Interest
            </label>
            <select
              id="serviceInterestedIn"
              name="serviceInterestedIn"
              value={formData.serviceInterestedIn}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-[#111321]/20 bg-[#FFF9F6] text-[#111321] hover:border-[#111321] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038]"
            >
              <option value="">Select a service (or General Enquiry)</option>
              {SERVICES_DATA.map((srv) => (
                <option key={srv.slug} value={srv.title}>
                  {srv.title}
                </option>
              ))}
              <option value="Complete Growth Overhaul">Complete Growth Overhaul (Multi-Service)</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-bold text-[#111321] uppercase tracking-wider mb-1.5"
            >
              Project Details or Current Challenges
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder="What are your goals? E.g., need more local foot traffic, scaling e-commerce orders, new website redesign..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-[#111321]/20 bg-[#FFF9F6] text-[#111321] placeholder:text-[#727383]/50 hover:border-[#111321] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6038] resize-none"
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isLoading}
              className="w-full shadow-lg"
              rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
            >
              Submit Business Enquiry
            </Button>
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
