import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const ourSchoolLinks = [
  { label: "About Us", href: "/about-us" },
  {
    label: "Director's & Principal's Message",
    href: "/about-us#directors-message",
  },
  { label: "Faculty & Staff", href: "/about-us#faculty-and-staff" },
  { label: "Courses (JEE & NEET)", href: "/academics#courses" },
  { label: "Facilities", href: "/academics#facilities" },
  { label: "Events", href: "/gallery#events" },
  { label: "News", href: "/academics#news" },
  { label: "Sports & Hall of Fame", href: "/gallery#sports" },
  { label: "Tours & Excursions", href: "/gallery#tours" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

const ourPolicyLinks = [
  { label: "Term & Condition", href: "/term-condition" },
  { label: "Refund & Cancellation", href: "/refund-cancellation" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Parent's Corner", href: "/academics#parents-corner" },
  { label: "Student's Corner", href: "/academics#students-corner" },
];

const socials = [
  { label: "Facebook", href: SITE_CONFIG.social.facebook, short: "f" },
  { label: "YouTube", href: SITE_CONFIG.social.youtube, short: "yt" },
  { label: "Instagram", href: SITE_CONFIG.social.instagram, short: "ig" },
  { label: "X", href: SITE_CONFIG.social.twitter, short: "x" },
];

const mapHref = `https://maps.google.com/?q=${encodeURIComponent(
  SITE_CONFIG.address
)}`;
const emailHref = `mailto:${SITE_CONFIG.email}`;
const copyrightText = `© Copyright 2026 by ${SITE_CONFIG.name}. All rights reserved.`;

export default function Footer() {
  const phoneLinks = [...SITE_CONFIG.phones, SITE_CONFIG.landline].map(
    (phone) => {
      const telHref = `tel:${phone}`;
      return (
        <a
          key={phone}
          href={telHref}
          className="block text-sm text-white/65 transition hover:text-[#F0B95F]"
        >
          {phone}
        </a>
      );
    }
  );
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
  const socialLinks = socials.map((social) => (
    <a
      key={social.label}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      className="flex h-9 min-w-9 items-center justify-center rounded-full border border-white/15 px-2 text-xs font-bold text-white/75 transition hover:border-[#F0B95F] hover:bg-white/10 hover:text-[#F0B95F]"
    >
      {social.short}
    </a>
  ));

  return (
    <footer className="relative overflow-hidden bg-[#0B1C35] text-white">
      <div
        className="animated-dots absolute inset-0 opacity-10"
        aria-hidden="true"
      />
      <div
        className="absolute -right-40 -top-48 h-[26rem] w-[26rem] rounded-full bg-[#d8912e]/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="section-container relative grid gap-10 py-14 sm:py-16 lg:grid-cols-[1.3fr_.8fr_.75fr_1fr]">
        <div>
          <Link href="/" className="flex w-fit items-center gap-3">
            <Image
              src="/logo-ssisranip.webp"
              alt="SSIS Ranip"
              width={52}
              height={48}
              className="object-contain"
            />
            <span className="max-w-[220px] text-sm font-semibold leading-snug">
              Shree Swaminarayan
              <br />
              <span className="text-[#F0B95F]">International School</span>
            </span>
          </Link>
          <h2 className="mt-6 text-xs font-bold uppercase tracking-[.16em] text-[#F0B95F]">
            About The School
          </h2>
          <p className="mt-2 max-w-md text-sm leading-7 text-white/65">
            Welcome to Shree Swaminarayan International School (SSIS). Whether
            you are from any part of the city or state, or from elsewhere in
            India we aim to help you make the best of educational opportunity
            that SSIS can offer you.
          </p>
          <div className="mt-5 flex gap-2">{socialLinks}</div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={SITE_CONFIG.admissionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#E5A23C] px-4 py-2.5 text-sm font-bold text-[#172b47] transition hover:bg-[#f1b653]"
            >
              Admission <ArrowUpRight size={15} />
            </a>
            <a
              href={SITE_CONFIG.erpLogin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm font-semibold text-white/85 transition hover:border-white/50 hover:text-white"
            >
              Online ERP Login <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[.16em] text-white">
            Our School
          </h2>
          <ul className="mt-5 grid grid-cols-1 gap-2.5">{schoolLinkItems}</ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[.16em] text-white">
            Our Links
          </h2>
          <ul className="mt-5 space-y-2.5">{policyLinkItems}</ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[.16em] text-white">
            Get in Touch
          </h2>
          <div className="mt-5 flex items-start gap-3">
            <MapPin size={17} className="mt-1 shrink-0 text-[#F0B95F]" />
            <a
              href={mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm leading-6 text-white/65 transition hover:text-[#F0B95F]"
            >
              {SITE_CONFIG.address}
            </a>
          </div>
          <div className="mt-4 flex items-start gap-3">
            <Phone size={17} className="mt-1 shrink-0 text-[#F0B95F]" />
            <div className="space-y-1">{phoneLinks}</div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <Mail size={17} className="shrink-0 text-[#F0B95F]" />
            <a
              href={emailHref}
              className="text-sm text-white/65 transition hover:text-[#F0B95F]"
            >
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="section-container flex flex-col gap-2 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>{copyrightText}</p>
          <p>Ranip, Ahmedabad – 382480 · Gujarat, India</p>
        </div>
      </div>
    </footer>
  );
}
