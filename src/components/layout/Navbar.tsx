"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Menu, X, ChevronDown, Phone, GraduationCap } from "lucide-react";

const poppinsFontStyle = { fontFamily: "var(--font-poppins)" };
const primaryPhoneHref = `tel:${SITE_CONFIG.phones[0]}`;
const primaryPhoneText = SITE_CONFIG.phones[0];

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

  const navIsSolid = isScrolled || pathname !== "/";
  const navBg = navIsSolid
    ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-blue-900/10"
    : "bg-transparent";
  const navClassName = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`;

  const textColor = navIsSolid ? "text-[#1E293B]" : "text-white";
  const brandPrimaryClass = `font-bold text-sm leading-tight transition-colors duration-500 ${
    navIsSolid ? "text-[#0F2D6E]" : "text-white"
  }`;
  const brandSecondaryClass =
    "font-bold text-sm leading-tight transition-colors duration-500 text-[#F59E0B]";
  const mobileToggleBtnClass = `lg:hidden p-2 rounded-lg transition-colors duration-300 ${
    navIsSolid ? "text-[#0F2D6E]" : "text-white"
  }`;
  const mobileMenuIcon = isMobileOpen ? <X size={24} /> : <Menu size={24} />;
  const mobileDrawerStateClass = isMobileOpen
    ? "max-h-screen opacity-100"
    : "max-h-0 opacity-0";
  const mobileDrawerClass = `lg:hidden transition-all duration-500 overflow-hidden ${mobileDrawerStateClass} bg-white/98 backdrop-blur-xl border-t border-gray-100 shadow-2xl`;

  const toggleMobile = () => {
    setIsMobileOpen((prev) => !prev);
    setMobileExpanded(null);
  };

  const closeMobile = () => {
    setIsMobileOpen(false);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
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
        className="block px-4 py-3 text-sm text-[#1E293B] transition-colors duration-200 hover:bg-[#0F2D6E] hover:text-white"
        onClick={closeDropdown}
      >
        {child.label}
      </Link>
    ));
    const isOpen = activeDropdown === link.label;
    const activeCls = isActive ? "text-[#F59E0B]" : textColor;
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
        className={`nav-link flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ${activeCls} hover:text-[#F59E0B]`}
        onClick={handleToggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-current={ariaCurrent}
      >
        {link.label}
        <ChevronDown size={14} className={chevronCls} />
      </button>
    ) : (
      <Link
        href={link.href}
        aria-current={ariaCurrent}
        className={`nav-link rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ${activeCls} hover:text-[#F59E0B]`}
      >
        {link.label}
      </Link>
    );

    const dropdown =
      link.children && isOpen ? (
        <div className="absolute left-0 top-full mt-2 w-56 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-2xl">
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
        className="block py-2 text-sm text-[#64748B] transition-colors hover:text-[#0F2D6E]"
        onClick={closeMobile}
      >
        {child.label}
      </Link>
    ));
    const isExpanded = mobileExpanded === link.label;
    const ariaCurrent = isActive ? ("page" as const) : undefined;
    const singleLinkCls = `block rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-blue-50 ${
      isActive
        ? "text-[#B87318] font-semibold"
        : "text-[#1E293B] hover:text-[#0F2D6E]"
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

    const parentBtnCls = `flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-blue-50 ${
      isActive ? "text-[#B87318]" : "text-[#1E293B]"
    }`;
    const chevronCls = `transition-transform duration-300 ${
      isExpanded ? "rotate-180" : ""
    }`;
    const subDrawerCls = `overflow-hidden transition-all duration-300 ${
      isExpanded ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
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
          {link.label}
          <ChevronDown size={16} className={chevronCls} />
        </button>
        <div className={subDrawerCls}>
          <div className="ml-4 mt-1 space-y-1 border-l-2 border-[#F59E0B] pl-4">
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
        <div className="flex items-center justify-between h-20">
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

      <div className={mobileDrawerClass}>
        <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          {mobileNavItems}

          <div className="pt-4 border-t border-gray-100 space-y-3">
            <a
              href={primaryPhoneHref}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-50 text-[#0F2D6E] font-semibold text-sm"
            >
              <Phone size={16} />
              {primaryPhoneText}
            </a>
            <a
              href={SITE_CONFIG.erpLogin}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-3 rounded-xl border-2 border-[#F59E0B] text-[#F59E0B] font-semibold text-sm"
              onClick={closeMobile}
            >
              ERP Login
            </a>
            <a
              href={SITE_CONFIG.admissionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center btn-primary justify-center"
              onClick={closeMobile}
            >
              Apply for Admission
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
