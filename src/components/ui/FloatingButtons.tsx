import { MessageCircle, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function FloatingButtons() {
  const whatsappHref = `https://wa.me/${SITE_CONFIG.whatsapp.replace("+", "")}`;
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
      <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Chat with SSIS Ranip on WhatsApp" className="flex min-h-12 items-center gap-2 rounded-full bg-[#168f53] px-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#117744]">
        <MessageCircle size={18} /><span>WhatsApp</span>
      </a>
      <a href={`tel:${SITE_CONFIG.phones[0]}`} aria-label="Call SSIS Ranip" className="flex min-h-12 items-center gap-2 rounded-full bg-[#10284B] px-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#1a3d6e]">
        <Phone size={18} /><span>Call us</span>
      </a>
    </div>
  );
}
