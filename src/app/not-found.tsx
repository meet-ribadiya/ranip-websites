import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0b1c35] text-white">
      <div
        className="animated-dots absolute inset-0 opacity-30"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e4a13a]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative flex flex-col items-center px-6 text-center">
        <Image
          src="/logo-ssisranip.webp"
          alt="SSIS Ranip"
          width={72}
          height={65}
          className="mb-8 opacity-80"
        />

        <p className="eyebrow eyebrow-light mb-4">Page not found</p>

        <h1 className="font-serif text-7xl font-bold text-[#e4a13a] sm:text-9xl">
          404
        </h1>

        <h2 className="mt-4 font-serif text-2xl font-semibold text-white sm:text-3xl">
          Oops — this page doesn&apos;t exist.
        </h2>

        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-white/65">
          The page you&apos;re looking for may have been moved, deleted, or the
          link might be incorrect. Let&apos;s get you back on track.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            <Home size={17} />
            Back to Home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact the school
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </div>
  );
}
