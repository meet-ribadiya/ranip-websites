"use client";

import { useState, useEffect, useRef, type MouseEvent as ReactMouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE_CONFIG, SITE_IMAGES } from "@/lib/constants";
import { Menu, X, ChevronDown, Phone, GraduationCap } from "lucide-react";

const poppinsFontStyle = { fontFamily: "var(--font-poppins)" };
const primaryPhoneHref = `tel:${SITE_CONFIG.primaryPhone}`;
const primaryPhoneDisplay = "+91 75750 38282";

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
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navIsSolid = isScrolled || pathname !== "/" || isMobileOpen;
  const navBg = navIsSolid
    ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/70 shadow-[0_8px_30px_rgba(16,40,75,0.08)]"
    : "bg-transparent border-b border-transparent";
  const navClassName = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`;

  const textColor = navIsSolid ? "text-[#172B47]" : "text-white";
  const brandPrimaryClass = `font-bold text-xs sm:text-sm leading-tight transition-colors duration-300 ${
    navIsSolid ? "text-[#10284B]" : "text-white"
  }`;
  const brandSecondaryClass =
    "font-bold text-[11px] sm:text-xs leading-tight tracking-wide text-[#E5A23C]";

  const mobileToggleBtnClass = `lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 ${
    navIsSolid
      ? "border-slate-200 bg-[#F7F9FC] text-[#10284B] hover:border-[#E5A23C] hover:bg-[#FFFBF4]"
      : "border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
  }`;

  const mobileMenuIcon = isMobileOpen ? <X size={21} /> : <Menu size={21} />;
  const mobileDrawerStateClass = isMobileOpen
    ? "max-h-[85vh] opacity-100"
    : "max-h-0 opacity-0 pointer-events-none";
  const mobileDrawerClass = `lg:hidden relative overflow-hidden transition-all duration-400 ease-out ${mobileDrawerStateClass} bg-gradient-to-b from-white via-[#F9FAFC] to-[#FFFBF4] border-t border-slate-200/70 shadow-2xl`;

  const toggleMobile = () => {
    setIsMobileOpen((prev) => !prev);
    setMobileExpanded(null);
  };

  const closeMobile = () => {
    setIsMobileOpen(false);
    setMobileExpanded(null);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const handleLogoClick = (e: ReactMouseEvent<HTMLAnchorElement>) => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
    if (pathname === "/") {
      e.preventDefault();
      if (window.location.hash) {
        window.history.replaceState(null, "", "/");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleMobileExpand = (label: string) => {
    setMobileExpanded((prev) => (prev === label ? null : label));
  };

  const desktopNavItems = NAV_LINKS.map((link) => {
    const isActive =
      pathname === link.href ||
      (link.href !== "/" && pathname.startsWith(link.href));
    const children = link.children?.map((child) => (
      <Link
        key={child.label}
        href={child.href}
        className="block px-4 py-2.5 text-sm font-medium text-[#172B47] transition-colors duration-200 hover:bg-[#10284B] hover:text-white"
        onClick={closeDropdown}
      >
        {child.label}
      </Link>
    ));
    const isOpen = activeDropdown === link.label;
    const activeCls = isActive
      ? navIsSolid
        ? "text-[#B87318] font-semibold"
        : "text-[#F0B95F] font-semibold"
      : `${textColor} font-medium`;
    const activeBar = isActive ? (
      <span
        className="absolute bottom-0.5 left-3 right-3 h-[2px] rounded-full bg-[#E5A23C]"
        aria-hidden="true"
      />
    ) : null;
    const chevronCls = `transition-transform duration-300 ${
      isOpen ? "rotate-180" : ""
    }`;
    const ariaCurrent = isActive ? ("page" as const) : undefined;
    const handleToggleDropdown = () => {
      setActiveDropdown(isOpen ? null : link.label);
    };

    const linkControl = link.children ? (
      <button
        type="button"
        className={`relative flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm transition-colors duration-200 ${activeCls} hover:text-[#E5A23C]`}
        onClick={handleToggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-current={ariaCurrent}
      >
        <span>{link.label}</span>
        <ChevronDown size={14} className={chevronCls} />
        {activeBar}
      </button>
    ) : (
      <Link
        href={link.href}
        aria-current={ariaCurrent}
        className={`relative rounded-lg px-3.5 py-2 text-sm transition-colors duration-200 ${activeCls} hover:text-[#E5A23C]`}
      >
        <span>{link.label}</span>
        {activeBar}
      </Link>
    );

    const dropdown =
      link.children && isOpen ? (
        <div className="absolute left-0 top-full mt-2.5 w-60 overflow-hidden rounded-2xl border border-slate-200/90 bg-white py-1.5 shadow-[0_20px_50px_rgba(16,40,75,0.16)]">
          {children}
        </div>
      ) : null;

    return (
      <div key={link.label} className="relative">
        {linkControl}
        {dropdown}
      </div>
    );
  });

  const mobileNavItems = NAV_LINKS.map((link) => {
    const isActive =
      pathname === link.href ||
      (link.href !== "/" && pathname.startsWith(link.href));
    const children = link.children?.map((child) => (
      <Link
        key={child.label}
        href={child.href}
        className="flex min-h-10 items-center py-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-[#10284B]"
        onClick={closeMobile}
      >
        {child.label}
      </Link>
    ));
    const isExpanded = mobileExpanded === link.label;
    const ariaCurrent = isActive ? ("page" as const) : undefined;
    const singleLinkCls = `flex min-h-12 items-center justify-between rounded-xl px-4 py-2.5 text-sm transition-colors ${
      isActive
        ? "bg-[#FFF7E8] font-bold text-[#A96812]"
        : "font-semibold text-[#172B47] hover:bg-slate-100/80"
    }`;

    if (!link.children) {
      return (
        <Link
          key={link.label}
          href={link.href}
          aria-current={ariaCurrent}
          className={singleLinkCls}
          onClick={closeMobile}
        >
          {link.label}
        </Link>
      );
    }

    const parentBtnCls = `flex min-h-12 w-full items-center justify-between rounded-xl px-4 py-2.5 text-sm transition-colors ${
      isActive
        ? "bg-[#FFF7E8] font-bold text-[#A96812]"
        : "font-semibold text-[#172B47] hover:bg-slate-100/80"
    }`;
    const chevronCls = `transition-transform duration-300 ${
      isExpanded ? "rotate-180" : ""
    }`;
    const subDrawerCls = `overflow-hidden transition-all duration-300 ${
      isExpanded ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
    }`;
    const handleExpand = () => {
      toggleMobileExpand(link.label);
    };

    return (
      <div key={link.label}>
        <button
          type="button"
          className={parentBtnCls}
          onClick={handleExpand}
          aria-expanded={isExpanded}
          aria-current={ariaCurrent}
        >
          <span>{link.label}</span>
          <ChevronDown size={16} className={chevronCls} />
        </button>
        <div className={subDrawerCls}>
          <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-[#E5A23C] pl-4 pb-1">
            {children}
          </div>
        </div>
      </div>
    );
  });

  return (
    <nav
      className={navClassName}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0"
            aria-label="SSIS Ranip Home"
          >
            <div className="relative rounded-xl bg-white p-1 shadow-sm ring-1 ring-slate-200/60">
              <Image
                src={SITE_IMAGES.logo}
                alt="SSIS Ranip Logo"
                width={48}
                height={44}
                className="h-9 w-10 sm:h-11 sm:w-12 object-contain"
                priority
              />
            </div>
            <div>
              <div className={brandPrimaryClass} style={poppinsFontStyle}>
                Shree Swaminarayan
              </div>
              <div className={brandSecondaryClass} style={poppinsFontStyle}>
                International School
              </div>
            </div>
          </Link>

          <div
            className="hidden lg:flex items-center gap-1"
            ref={dropdownRef}
          >
            {desktopNavItems}
          </div>

          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href={SITE_CONFIG.erpLogin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border border-[#E5A23C] text-[#B87318] bg-white/90 hover:bg-[#E5A23C] hover:text-[#10284B] transition-all duration-300"
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

          <button
            type="button"
            className={mobileToggleBtnClass}
            onClick={toggleMobile}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileOpen}
            id="mobile-menu-btn"
          >
            {mobileMenuIcon}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer with Subtle School Logo Watermark */}
      <div className={mobileDrawerClass}>
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none"
          aria-hidden="true"
        >
          <Image
            src={SITE_IMAGES.logo}
            alt=""
            width={280}
            height={252}
            className="opacity-[0.05] object-contain"
          />
        </div>

        <div className="relative z-10 px-4 py-4 space-y-1 max-h-[78vh] overflow-y-auto">
          {mobileNavItems}

          <div className="pt-4 mt-3 border-t border-slate-200/80 space-y-2.5">
            <a
              href={primaryPhoneHref}
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-[#10284B] shadow-2xs"
            >
              <Phone size={16} className="text-[#B87318]" />
              {primaryPhoneDisplay}
            </a>
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={SITE_CONFIG.erpLogin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center justify-center rounded-xl border border-[#E5A23C] bg-white px-3 py-2 text-center text-sm font-semibold text-[#A96812]"
                onClick={closeMobile}
              >
                ERP Login
              </a>
              <a
                href={SITE_CONFIG.admissionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center justify-center rounded-xl bg-[#E5A23C] px-3 py-2 text-center text-sm font-bold text-[#10284B] shadow-sm"
                onClick={closeMobile}
              >
                Admission
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
