"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Menu, X, ChevronDown, Phone, GraduationCap } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navIsSolid = isScrolled || pathname !== "/";
  const navBg = navIsSolid
    ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-blue-900/10"
    : "bg-transparent";

  const textColor = navIsSolid ? "text-[#1E293B]" : "text-white";
  const toggleMobile = () => {
    setIsMobileOpen((prev) => !prev);
    setMobileExpanded(null);
  };

  const toggleMobileExpand = (label: string) => {
    setMobileExpanded((prev) => (prev === label ? null : label));
  };

  const desktopNavItems = NAV_LINKS.map((link) => {
    const children = link.children?.map((child) => (
      <Link key={child.label} href={child.href} className="block px-4 py-3 text-sm text-[#1E293B] transition-colors duration-200 hover:bg-[#0F2D6E] hover:text-white" onClick={() => setActiveDropdown(null)}>{child.label}</Link>
    ));
    const isOpen = activeDropdown === link.label;
    const linkControl = link.children ? (
      <button className={`nav-link flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ${textColor} hover:text-[#F59E0B]`} onClick={() => setActiveDropdown(isOpen ? null : link.label)} aria-expanded={isOpen} aria-haspopup="true">
        {link.label}<ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
    ) : (
      <Link href={link.href} className={`nav-link rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ${textColor} hover:text-[#F59E0B]`}>{link.label}</Link>
    );
    const dropdown = link.children && isOpen ? <div className="glass-card absolute left-0 top-full mt-2 w-52 overflow-hidden rounded-2xl border border-blue-100 shadow-2xl">{children}</div> : null;
    return <div key={link.label} className="relative">{linkControl}{dropdown}</div>;
  });

  const mobileNavItems = NAV_LINKS.map((link) => {
    const children = link.children?.map((child) => (
      <Link key={child.label} href={child.href} className="block py-2 text-sm text-[#64748B] transition-colors hover:text-[#0F2D6E]" onClick={() => setIsMobileOpen(false)}>{child.label}</Link>
    ));
    const isExpanded = mobileExpanded === link.label;
    if (!link.children) {
      return <Link key={link.label} href={link.href} className="block rounded-xl px-4 py-3 text-sm font-medium text-[#1E293B] transition-colors hover:bg-blue-50 hover:text-[#0F2D6E]" onClick={() => setIsMobileOpen(false)}>{link.label}</Link>;
    }
    return (
      <div key={link.label}>
        <button className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-[#1E293B] transition-colors hover:bg-blue-50" onClick={() => toggleMobileExpand(link.label)} aria-expanded={isExpanded}>
          {link.label}<ChevronDown size={16} className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="ml-4 mt-1 space-y-1 border-l-2 border-[#F59E0B] pl-4">{children}</div>
        </div>
      </div>
    );
  });

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="relative rounded-lg bg-white p-1 shadow-sm">
                <Image
                  src="/logo-ssisranip.webp"
                  alt="SSIS Ranip Logo"
                  width={60}
                  height={54}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <div
                  className={`font-bold text-sm leading-tight transition-colors duration-500 ${
                    navIsSolid ? "text-[#0F2D6E]" : "text-white"
                  }`}
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Shree Swaminarayan
                </div>
                <div
                  className={`font-bold text-sm leading-tight transition-colors duration-500 ${
                    navIsSolid ? "text-[#F59E0B]" : "text-[#F59E0B]"
                  }`}
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  International School
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
              {desktopNavItems}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={SITE_CONFIG.erpLogin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border-2 border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-white transition-all duration-300"
                id="erp-login-btn"
              >
                <GraduationCap size={16} />
                ERP Login
              </a>
              <a
                href={SITE_CONFIG.admissionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-2 px-5"
                id="admission-btn"
              >
                Admission
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                navIsSolid ? "text-[#0F2D6E]" : "text-white"
              }`}
              onClick={toggleMobile}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileOpen}
              id="mobile-menu-btn"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } bg-white/98 backdrop-blur-xl border-t border-gray-100 shadow-2xl`}
        >
          <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {mobileNavItems}

            <div className="pt-4 border-t border-gray-100 space-y-3">
              <a
                href={`tel:${SITE_CONFIG.phones[0]}`}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-50 text-[#0F2D6E] font-semibold text-sm"
              >
                <Phone size={16} />
                {SITE_CONFIG.phones[0]}
              </a>
              <a
                href={SITE_CONFIG.erpLogin}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 rounded-xl border-2 border-[#F59E0B] text-[#F59E0B] font-semibold text-sm"
                onClick={() => setIsMobileOpen(false)}
              >
                ERP Login
              </a>
              <a
                href={SITE_CONFIG.admissionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center btn-primary justify-center"
                onClick={() => setIsMobileOpen(false)}
              >
                Apply for Admission
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
