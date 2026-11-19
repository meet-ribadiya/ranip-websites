"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SITE_IMAGES } from "@/lib/constants";

const ringStyle = {
  borderTopColor: "#e4a13a",
  borderRightColor: "rgba(228,161,58,0.3)",
};

const fontStyle = {
  fontFamily: "var(--font-poppins), sans-serif",
};

const dotIndices = [0, 1, 2];

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1200);
    const hideTimer = setTimeout(() => setVisible(false), 1700);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  const wrapperStyle = {
    opacity: fadeOut ? 0 : 1,
    transition: "opacity 0.5s ease",
  };

  const dots = dotIndices.map((i) => {
    const dotStyle = {
      animation: `float-pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
    };
    return (
      <span
        key={i}
        className="h-1.5 w-1.5 rounded-full bg-[#e4a13a]"
        style={dotStyle}
      />
    );
  });

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0b1c35]"
      style={wrapperStyle}
    >
      <div className="relative flex items-center justify-center">
        <div
          className="absolute h-28 w-28 rounded-full border-2 border-transparent spin-ring"
          style={ringStyle}
        />
        <div className="relative h-20 w-20 flex items-center justify-center">
          <Image
            src={SITE_IMAGES.logo}
            alt="SSIS Ranip"
            width={72}
            height={65}
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="mt-6 text-center">
        <p
          className="text-sm font-bold uppercase tracking-[.22em] text-white/90"
          style={fontStyle}
        >
          Shree Swaminarayan
        </p>
        <p
          className="mt-0.5 text-xs font-semibold uppercase tracking-[.18em] text-[#e4a13a]"
          style={fontStyle}
        >
          International School
        </p>
      </div>

      <div className="mt-6 flex gap-1.5">{dots}</div>
    </div>
  );
}
