"use client";

import { useEffect, useState, useCallback } from "react";
import { MessageCircle, Phone, ChevronUp } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const whatsappHref = `https://wa.me/${SITE_CONFIG.whatsapp.replace("+", "")}`;
const callHref = `tel:${SITE_CONFIG.phones[0]}`;

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = useCallback(() => {
    setShowScrollTop(window.scrollY > 400);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollBtnStyle: React.CSSProperties = {
    opacity: showScrollTop ? 1 : 0,
    transform: showScrollTop
      ? "translateY(0) scale(1)"
      : "translateY(8px) scale(0.9)",
    pointerEvents: showScrollTop ? "auto" : "none",
    transition: "opacity 0.3s ease, transform 0.3s ease, background 0.2s ease",
  };

  return (
    <div
      className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6"
      aria-label="Quick contact options"
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        id="scroll-to-top-btn"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#172b47]/90 text-white shadow-lg backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-[#0F2D6E]"
        style={scrollBtnStyle}
      >
        <ChevronUp size={18} />
      </button>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SSIS Ranip on WhatsApp"
        id="whatsapp-float-btn"
        className="flex min-h-11 items-center gap-2 rounded-full bg-[#168f53] px-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#117744] hover:shadow-xl"
      >
        <MessageCircle size={17} />
        <span>WhatsApp</span>
      </a>

      <a
        href={callHref}
        aria-label="Call SSIS Ranip"
        id="call-float-btn"
        className="flex min-h-11 items-center gap-2 rounded-full bg-[#10284B] px-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#1a3d6e] hover:shadow-xl"
      >
        <Phone size={17} />
        <span>Call us</span>
      </a>
    </div>
  );
}
