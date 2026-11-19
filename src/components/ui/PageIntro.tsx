import Image from "next/image";
import { SITE_IMAGES } from "@/lib/constants";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  titleHighlight?: string;
  description: string;
  image?: string;
  breadcrumb?: string;
  hideBreadcrumb?: boolean;
};

export default function PageIntro({
  eyebrow,
  title,
  titleHighlight,
  description,
  image = SITE_IMAGES.defaultPageBanner,
}: PageIntroProps) {
  const highlightNode = titleHighlight ? (
    <>
      {" "}
      <span className="text-[#F0B95F]">{titleHighlight}</span>
    </>
  ) : null;

  return (
    <section className="relative flex min-h-[340px] items-end overflow-hidden bg-[#10284B] pb-12 pt-28 text-white sm:min-h-[420px] sm:pb-16 sm:pt-32">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#10284B]/95 via-[#10284B]/80 to-[#10284B]/40" />
      <div
        className="animated-dots absolute inset-0 opacity-15"
        aria-hidden="true"
      />
      <div
        className="ambient-orb-gold pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#E9A53B]/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="section-container relative w-full">
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-serif text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
          {title}
          {highlightNode}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:mt-5 sm:text-lg sm:leading-8">
          {description}
        </p>
      </div>
    </section>
  );
}
