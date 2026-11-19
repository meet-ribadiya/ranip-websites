"use client";

import { useEffect, useState } from "react";

const INITIAL_YEAR = 2026;

export default function CurrentYear() {
  const [year, setYear] = useState(INITIAL_YEAR);

  useEffect(() => {
    const current = new Date().getFullYear();
    if (current !== INITIAL_YEAR) {
      const rafId = window.requestAnimationFrame(() => setYear(current));
      return () => window.cancelAnimationFrame(rafId);
    }
  }, []);

  return <span suppressHydrationWarning>{year}</span>;
}
