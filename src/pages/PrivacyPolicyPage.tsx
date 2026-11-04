import React from "react";
import { SeoHead } from "../components/common/SeoHead";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { CONFIG } from "../config/siteConfig";

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-[#FFF9F6] text-[#111321] selection:bg-[#FF087F]/20 selection:text-[#FF087F]">
      <SeoHead
        title="Privacy Policy | CoreClick – Digital Marketing Agency"
        description="CoreClick's privacy policy explaining how we collect, handle, and safeguard customer enquiry data."
        canonicalPath="/privacy-policy/"
      />

      <section className="relative bg-[#FFF9F6] py-16 md:py-24 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} className="mb-6" />

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111321] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#727383] mt-2">
            Last Updated: November 2026 · {CONFIG.businessName} (Varanasi, Uttar Pradesh, India)
          </p>

          <div className="mt-10 space-y-8 text-sm text-[#343644] leading-relaxed font-normal">
            <section className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-[#111321]">1. Commitment to Privacy</h2>
              <p>
                At CoreClick ("we", "our", or "us"), respecting and safeguarding the personal
                information of our website visitors and clients is fundamental to how we operate.
                This Privacy Policy outlines the types of information we collect, how it is utilized,
                and your rights regarding your data.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-[#111321]">2. Information We Collect</h2>
              <p>
                When you interact with our website or submit an enquiry via our forms, we may collect:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>Full Name</li>
                <li>Phone Number (for project communication and verification)</li>
                <li>Email Address (optional or required depending on form context)</li>
                <li>Business/Brand Name and City</li>
                <li>Project requirements, requested services, and message details</li>
                <li>Technical data including browser type, IP address, and UTM campaign parameters</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-[#111321]">3. How We Use Your Information</h2>
              <p>
                The information you provide is utilized solely for legitimate business purposes:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>Reviewing and responding to your digital marketing consultation requests</li>
                <li>Preparing tailored proposals, project timelines, and scope estimates</li>
                <li>Communicating project updates via phone, email, or WhatsApp</li>
                <li>Analyzing website traffic trends and improving website user experience</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-[#111321]">4. Zero Resale Policy</h2>
              <p>
                We do not sell, rent, trade, or lease your personal information or contact details to
                third-party brokers or advertisers under any circumstances. All client data and lead
                submissions remain confidential to CoreClick.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-[#111321]">5. Data Security</h2>
              <p>
                We implement industry-standard administrative and technical security measures to protect
                your information from unauthorized access, loss, or misuse. Transmission of form data
                is encrypted via HTTPS/TLS.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading font-bold text-lg text-[#111321]">6. Contact Information</h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to request data deletion,
                contact us directly at:
              </p>
              <div className="p-5 rounded-2xl bg-white border border-[#111321]/10 text-xs space-y-1.5 text-[#343644] shadow-sm">
                <div><strong className="text-[#111321]">Business Name:</strong> {CONFIG.businessName}</div>
                <div><strong className="text-[#111321]">Location:</strong> {CONFIG.address}</div>
                <div><strong className="text-[#111321]">Phone:</strong> {CONFIG.formattedPhone}</div>
                <div><strong className="text-[#111321]">Email:</strong> {CONFIG.email}</div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};
