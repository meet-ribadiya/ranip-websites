import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG, SITE_IMAGES } from "@/lib/constants";
import CurrentYear from "@/components/ui/CurrentYear";

const ourSchoolLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Leadership Messages", href: "/about-us#directors-message" },
  { label: "Faculty & Staff", href: "/about-us#faculty-and-staff" },
  { label: "Courses (JEE & NEET)", href: "/academics#courses" },
  { label: "Facilities", href: "/academics#facilities" },
  { label: "Events & Celebrations", href: "/gallery#events" },
  { label: "School News", href: "/academics#news" },
  { label: "Sports & Hall of Fame", href: "/gallery#sports" },
  { label: "Tours & Excursions", href: "/gallery#tours" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

const ourPolicyLinks = [
  { label: "Parent's Corner", href: "/academics#parents-corner" },
  { label: "Student's Corner", href: "/academics#students-corner" },
  { label: "Term & Condition", href: "/term-condition" },
  { label: "Refund & Cancellation", href: "/refund-cancellation" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const mapHref = `https://maps.google.com/?q=${encodeURIComponent(
  SITE_CONFIG.address
)}`;
const emailHref = `mailto:${SITE_CONFIG.email}`;
const primaryPhoneHref = `tel:${SITE_CONFIG.primaryPhone}`;
const landlineHref = `tel:${SITE_CONFIG.landline}`;

export default function Footer() {
  const schoolLinkItems = ourSchoolLinks.map((link) => (
    <li key={link.label}>
      <Link
        href={link.href}
        className="text-sm text-white/65 transition hover:text-[#F0B95F]"
      >
        {link.label}
      </Link>
    </li>
  ));

  const policyLinkItems = ourPolicyLinks.map((link) => (
    <li key={link.label}>
      <Link
        href={link.href}
        className="text-sm text-white/65 transition hover:text-[#F0B95F]"
      >
        {link.label}
      </Link>
    </li>
  ));

  return (
    <footer className="relative overflow-hidden bg-[#0B1C35] text-white">
      <div
        className="animated-dots absolute inset-0 opacity-10"
        aria-hidden="true"
      />
      <div
        className="absolute -right-36 -top-44 h-[22rem] w-[22rem] rounded-full bg-[#d8912e]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-container relative grid gap-8 py-10 sm:grid-cols-2 sm:py-12 lg:grid-cols-[1.25fr_1fr_.7fr_1fr] lg:gap-10">
        {/* Column 1: About & Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex w-fit items-center gap-3">
            <Image
              src={SITE_IMAGES.logo}
              alt="SSIS Ranip"
              width={48}
              height={44}
              className="object-contain"
            />
            <span className="max-w-[220px] text-sm font-semibold leading-snug">
              Shree Swaminarayan
              <br />
              <span className="text-[#F0B95F]">International School</span>
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/65">
            Welcome to Shree Swaminarayan International School (SSIS). Whether
            you are from any part of the city or state, or from elsewhere in
            India, we aim to help you make the best of educational opportunity
            that SSIS can offer you.
          </p>

          {/* Official Brand Social Icons */}
          <div className="mt-4 flex items-center gap-2.5">
            <a
              href={SITE_CONFIG.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SSIS Ranip on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[.04] text-white/80 transition hover:-translate-y-0.5 hover:border-[#F0B95F] hover:bg-[#1877F2] hover:text-white"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.2h2.8V22h3.4z" />
              </svg>
            </a>
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SSIS Ranip on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[.04] text-white/80 transition hover:-translate-y-0.5 hover:border-[#F0B95F] hover:bg-[#E1306C] hover:text-white"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href={SITE_CONFIG.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SSIS Ranip on YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[.04] text-white/80 transition hover:-translate-y-0.5 hover:border-[#F0B95F] hover:bg-[#FF0000] hover:text-white"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
              </svg>
            </a>
            <a
              href={SITE_CONFIG.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SSIS Ranip on X"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[.04] text-white/80 transition hover:-translate-y-0.5 hover:border-[#F0B95F] hover:bg-black hover:text-white"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5">
            <a
              href={SITE_CONFIG.admissionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#E5A23C] px-4 py-2 text-xs font-bold text-[#172b47] transition hover:bg-[#f1b653]"
            >
              Admission <ArrowUpRight size={14} />
            </a>
            <a
              href={SITE_CONFIG.erpLogin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/85 transition hover:border-white/50 hover:text-white"
            >
              Online ERP Login <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Column 2: Our School (compact 2-col grid) */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[.16em] text-[#F0B95F]">
            Our School
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
            {schoolLinkItems}
          </ul>
        </div>

        {/* Column 3: Quick & Policy Links */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[.16em] text-[#F0B95F]">
            Our Links
          </h2>
          <ul className="mt-4 space-y-2">{policyLinkItems}</ul>
        </div>

        {/* Column 4: Get in Touch */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[.16em] text-[#F0B95F]">
            Get in Touch
          </h2>
          <div className="mt-4 flex items-start gap-2.5">
            <MapPin size={16} className="mt-1 shrink-0 text-[#F0B95F]" />
            <a
              href={mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm leading-6 text-white/65 transition hover:text-[#F0B95F]"
            >
              {SITE_CONFIG.address}
            </a>
          </div>
          <div className="mt-3 flex items-start gap-2.5">
            <Phone size={16} className="mt-1 shrink-0 text-[#F0B95F]" />
            <div className="space-y-1 text-sm text-white/65">
              <a
                href={primaryPhoneHref}
                className="block font-semibold text-white/90 transition hover:text-[#F0B95F]"
              >
                +91 75750 38282
              </a>
              <a
                href={landlineHref}
                className="block text-xs text-white/60 transition hover:text-[#F0B95F]"
              >
                Landline: {SITE_CONFIG.landline}
              </a>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2.5">
            <Mail size={16} className="shrink-0 text-[#F0B95F]" />
            <a
              href={emailHref}
              className="break-all text-sm text-white/65 transition hover:text-[#F0B95F]"
            >
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="section-container flex flex-col gap-1.5 py-4 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p>Ranip, Ahmedabad – 382480 · Gujarat, India</p>
        </div>
      </div>
    </footer>
  );
}
