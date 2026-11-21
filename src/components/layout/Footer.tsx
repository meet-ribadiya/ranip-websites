import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG, SITE_IMAGES } from "@/lib/constants";
import CurrentYear from "@/components/ui/CurrentYear";
import FooterLogoLink from "@/components/layout/FooterLogoLink";
import FooterNavGroups from "@/components/layout/FooterNavGroups";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/term-condition" },
  { label: "Refund & Cancellation", href: "/refund-cancellation" },
];

const mapHref = `https://maps.google.com/?q=${encodeURIComponent(
  SITE_CONFIG.address
)}`;
const emailHref = `mailto:${SITE_CONFIG.email}`;
const primaryPhoneHref = `tel:${SITE_CONFIG.primaryPhone}`;
const landlineHref = `tel:${SITE_CONFIG.landline}`;

export default function Footer() {
  const legalItems = legalLinks.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className="text-xs text-white/55 transition-colors hover:text-[#F0B95F]"
    >
      {item.label}
    </Link>
  ));

  return (
    <footer className="relative overflow-hidden bg-[#0B1C35] text-white">
      <div
        className="animated-dots absolute inset-0 opacity-10"
        aria-hidden="true"
      />
      <div
        className="absolute -right-36 -top-44 h-[20rem] w-[20rem] rounded-full bg-[#d8912e]/10 blur-3xl"
        aria-hidden="true"
      />
      {/* Subtle School Logo Watermark in Footer Background */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none"
        aria-hidden="true"
      >
        <Image
          src={SITE_IMAGES.logo}
          alt=""
          width={320}
          height={290}
          className="opacity-[0.045] object-contain"
        />
      </div>

      <div className="section-container relative py-8 sm:py-10">
        <div className="grid items-start gap-7 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.1fr] lg:gap-7">
          {/* Column 1: Compact Brand, Socials & Quick CTAs */}
          <div className="min-w-0">
            <FooterLogoLink />
            <p className="mt-3 max-w-xs text-sm leading-6 text-white/65">
              Blending academic excellence with Swaminarayan Sanskars in Ranip,
              Ahmedabad since 2012.
            </p>

            {/* Official Brand Social Icons + Compact Action Pills */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SSIS Ranip on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[.04] text-white/80 transition hover:-translate-y-0.5 hover:border-[#F0B95F] hover:bg-[#1877F2] hover:text-white"
              >
                <svg
                  width="15"
                  height="15"
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
                  width="15"
                  height="15"
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
                  width="16"
                  height="16"
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

            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={SITE_CONFIG.admissionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#E5A23C] px-3.5 py-1.5 text-xs font-bold text-[#172b47] transition hover:bg-[#f1b653]"
              >
                Admission <ArrowUpRight size={13} />
              </a>
              <a
                href={SITE_CONFIG.erpLogin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3.5 py-1.5 text-xs font-semibold text-white/85 transition hover:border-white/50 hover:text-white"
              >
                ERP Login <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Columns 2, 3, 4: About SSIS, Quick Links, Explore */}
          <FooterNavGroups />

          {/* Column 5: Contact Information */}
          <div className="min-w-0">
            <h2 className="text-xs font-bold uppercase tracking-[.16em] text-[#F0B95F]">
              Contact Information
            </h2>
            <div className="mt-3.5 flex items-start gap-2.5">
              <MapPin size={15} className="mt-1 shrink-0 text-[#F0B95F]" />
              <a
                href={mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm leading-6 text-white/70 transition hover:text-[#F0B95F]"
              >
                {SITE_CONFIG.address}
              </a>
            </div>
            <div className="mt-2.5 flex items-start gap-2.5">
              <Phone size={15} className="mt-1 shrink-0 text-[#F0B95F]" />
              <div className="space-y-0.5 text-sm">
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
            <div className="mt-2.5 flex items-center gap-2.5">
              <Mail size={15} className="shrink-0 text-[#F0B95F]" />
              <a
                href={emailHref}
                className="break-all text-sm text-white/70 transition hover:text-[#F0B95F]"
              >
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="section-container flex flex-col gap-2.5 py-3.5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {legalItems}
          </div>
        </div>
      </div>
    </footer>
  );
}
