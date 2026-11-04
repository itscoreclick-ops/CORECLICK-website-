import React from "react";
import { MessageCircle } from "lucide-react";
import { CONFIG } from "../../config/siteConfig";

export const WhatsAppButton: React.FC = () => {
  const encodedMessage = encodeURIComponent(CONFIG.whatsappMessage);
  const whatsappUrl = `https://wa.me/91${CONFIG.whatsapp}?text=${encodedMessage}`;

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-5 right-5 z-40 select-none print:hidden pointer-events-auto"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct message CoreClick on WhatsApp (8707414150)"
        className="group flex items-center gap-2 pl-3 pr-3.5 py-2.5 bg-[#140C1A]/95 hover:bg-[#1C1224] text-[#FFF7FA] rounded-full shadow-xl hover:shadow-emerald-500/20 border border-white/15 hover:border-emerald-500/40 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] backdrop-blur-md"
      >
        <span className="w-6 h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
          <MessageCircle className="w-3.5 h-3.5 fill-white stroke-none" aria-hidden="true" />
        </span>
        <span className="text-xs font-semibold tracking-tight text-[#D4CBD5] group-hover:text-[#FFF7FA] hidden sm:inline whitespace-nowrap">
          WhatsApp
        </span>
      </a>
    </aside>
  );
};
