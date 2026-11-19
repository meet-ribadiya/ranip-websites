import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

type CampusLocationCardProps = {
  showSchoolHours?: boolean;
};

const mapsQuery = encodeURIComponent(
  `Shree Swaminarayan International School, ${SITE_CONFIG.address}`
);
const mapsDirectionsHref = `https://maps.google.com/?q=${mapsQuery}`;
const mapsEmbedSrc = `https://maps.google.com/maps?q=${mapsQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
const emailHref = `mailto:${SITE_CONFIG.email}`;
const landlineHref = `tel:${SITE_CONFIG.landline}`;

export default function CampusLocationCard({
  showSchoolHours = false,
}: CampusLocationCardProps) {
  const hoursBlock = showSchoolHours ? (
    <div className="mt-4 rounded-2xl border border-white/10 bg-white/[.05] p-4 backdrop-blur-sm">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.15em] text-[#F0B95F]">
        <Clock size={14} />
        <span>School Hours</span>
      </div>
      <p className="mt-2 text-xs leading-6 text-white/80 sm:text-sm">
        Classes 1st – 8th: Mon–Fri 7:00 AM – 12:20 PM · Sat 12:20 PM – 3:30 PM
      </p>
      <p className="mt-0.5 text-xs leading-6 text-white/80 sm:text-sm">
        Classes 9th – 12th: Mon–Fri 7:00 AM – 12:20 PM · Sat 7:10 AM – 10:40 AM
      </p>
    </div>
  ) : null;

  return (
    <div className="relative flex h-full min-w-0 flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0A1A33] via-[#10284B] to-[#0C203D] p-6 text-white shadow-[0_24px_60px_rgba(11,28,53,0.28)] sm:p-9">
      {/* Subtle animated dot matrix */}
      <div
        className="animated-dots absolute inset-0 opacity-20"
        aria-hidden="true"
      />
      {/* Soft center ambient glow inside the middle of the box */}
      <div
        className="ambient-orb-gold pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E9A53B] blur-[90px]"
        aria-hidden="true"
      />
      <div
        className="ambient-orb-blue pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#38BDF8] blur-[80px]"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="icon-tile icon-tile-gold shrink-0 shadow-md">
              <MapPin size={21} />
            </span>
            <div className="min-w-0">
              <p className="eyebrow eyebrow-light">2-Acre Campus · Ranip</p>
              <h3 className="mt-0.5 font-serif text-xl font-semibold text-white sm:text-2xl">
                Visit SSIS Ranip Campus
              </h3>
            </div>
          </div>

          {/* Embedded responsive no-API-key Google Map preview */}
          <div className="mt-5 overflow-hidden rounded-2xl border border-white/15 bg-[#081529] shadow-inner">
            <div className="relative aspect-[16/10] w-full">
              <iframe
                src={mapsEmbedSrc}
                title="Shree Swaminarayan International School Ranip Campus Map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </div>

          {/* Verified Address & Quick Info */}
          <div className="mt-4 space-y-2">
            <p className="text-sm leading-6 text-white/85">
              {SITE_CONFIG.address}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#F0B95F]">
              <a
                href={landlineHref}
                className="inline-flex items-center gap-1.5 transition hover:text-white"
              >
                <Phone size={13} />
                <span>{SITE_CONFIG.landline}</span>
              </a>
              <a
                href={emailHref}
                className="inline-flex items-center gap-1.5 break-all transition hover:text-white"
              >
                <Mail size={13} />
                <span>{SITE_CONFIG.email}</span>
              </a>
            </div>
          </div>

          {hoursBlock}
        </div>

        <div className="mt-6">
          <a
            href={mapsDirectionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#F0B95F]/45 bg-white/[.08] px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#F0B95F] hover:bg-[#E5A23C] hover:text-[#10284B] sm:w-fit"
          >
            Get Directions <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
