"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE_IMAGES } from "@/lib/constants";

export default function FooterLogoLink() {
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      if (window.location.hash) {
        window.history.replaceState(null, "", "/");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link
      href="/"
      onClick={handleClick}
      className="group flex w-fit items-center gap-3"
      aria-label="Back to SSIS Ranip Homepage"
    >
      <div className="rounded-xl bg-white p-1.5 shadow-sm transition-transform duration-300 group-hover:scale-105">
        <Image
          src={SITE_IMAGES.logo}
          alt="SSIS Ranip"
          width={44}
          height={40}
          className="object-contain"
        />
      </div>
      <span className="max-w-[220px] text-sm font-semibold leading-snug text-white transition-colors group-hover:text-[#F0B95F]">
        Shree Swaminarayan
        <br />
        <span className="text-[#F0B95F]">International School</span>
      </span>
    </Link>
  );
}
