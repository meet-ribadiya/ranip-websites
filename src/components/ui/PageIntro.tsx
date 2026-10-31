import Link from "next/link";
import Image from "next/image";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  breadcrumb?: string;
};

export default function PageIntro({ eyebrow, title, description, image = "/banner11.webp", breadcrumb }: PageIntroProps) {
  const breadcrumbs = breadcrumb ? <><span className="px-2 text-white/40">/</span><span>{breadcrumb}</span></> : null;
  return (
    <section className="relative flex min-h-[380px] items-end overflow-hidden bg-[#10284B] pb-12 pt-32 text-white sm:min-h-[440px] sm:pb-16">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#10284B]/95 via-[#10284B]/75 to-[#10284B]/35" />
      <div className="section-container relative w-full">
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">{description}</p>
        <div className="mt-7 text-xs font-semibold uppercase tracking-[.16em] text-white/65"><Link href="/" className="hover:text-white">Home</Link>{breadcrumbs}</div>
      </div>
    </section>
  );
}
