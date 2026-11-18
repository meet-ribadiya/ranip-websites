import Image from "next/image";

const ringStyle = {
  borderTopColor: "#e4a13a",
  borderRightColor: "rgba(228,161,58,0.3)",
};

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <div className="relative flex items-center justify-center">
        <div
          className="absolute h-20 w-20 rounded-full border-2 border-transparent spin-ring"
          style={ringStyle}
        />
        <div className="relative flex h-14 w-14 items-center justify-center">
          <Image
            src="/logo-ssisranip.webp"
            alt="Loading SSIS Ranip"
            width={48}
            height={44}
            className="object-contain opacity-80"
          />
        </div>
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
        Loading...
      </p>
    </div>
  );
}
