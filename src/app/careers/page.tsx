import type { Metadata } from "next";
import { HeartHandshake, Lightbulb, UsersRound } from "lucide-react";
import PageIntro from "@/components/ui/PageIntro";
import CareerForm from "@/components/ui/CareerForm";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { CAREER_QUALITIES, PAGE_INTROS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Connect with Shree Swaminarayan International School about career opportunities in Ranip, Ahmedabad.",
};

const iconMap = {
  heart: HeartHandshake,
  lightbulb: Lightbulb,
  users: UsersRound,
};

export default function CareersPage() {
  const qualityCards = CAREER_QUALITIES.map(
    ({ number, iconKey, title, text }, index) => {
      const Icon = iconMap[iconKey];
      const delayMs = index * 90;
      return (
        <RevealOnScroll key={title} delayMs={delayMs} className="h-full">
          <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_8px_28px_rgba(16,40,75,0.045)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#e4b669] hover:shadow-[0_20px_42px_rgba(16,40,75,0.1)] active:scale-[0.99] sm:p-7">
            <div
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#10284B] via-[#E5A23C] to-[#F0B95F] opacity-65 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />
            <div>
              <div className="flex items-center justify-between">
                <div className="icon-tile transition-colors duration-300 group-hover:bg-[#10284B] group-hover:text-[#F0B95F]">
                  <Icon size={22} />
                </div>
                <span className="font-serif text-2xl font-bold text-slate-200 transition-colors duration-300 group-hover:text-[#E5A23C]">
                  {number}
                </span>
              </div>
              <h3 className="mt-6 font-serif text-xl font-semibold text-[#142C55] sm:text-2xl">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-[15px]">
                {text}
              </p>
            </div>
            <div className="mt-6 h-[2px] w-10 rounded-full bg-[#E5A23C] transition-all duration-300 group-hover:w-20" />
          </article>
        </RevealOnScroll>
      );
    }
  );

  return (
    <>
      <PageIntro
        eyebrow={PAGE_INTROS.careers.eyebrow}
        title={PAGE_INTROS.careers.title}
        titleHighlight={PAGE_INTROS.careers.titleHighlight}
        description={PAGE_INTROS.careers.description}
        image={PAGE_INTROS.careers.image}
      />
      <section className="section-space bg-[#F5F7FA]">
        <div className="section-container">
          <RevealOnScroll>
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Make a Difference Every Day</p>
              <h2 className="section-title mx-auto mt-4">
                Bring your talent to a place that{" "}
                <span className="text-[#B87318]">puts students first.</span>
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                We welcome qualified educators (Pre-Primary, Primary, Secondary,
                Higher Secondary Science/Commerce, and JEE/NEET faculty) and
                administrative professionals across English and Gujarati mediums.
              </p>
            </div>
          </RevealOnScroll>

          <div className="mt-10 grid gap-5 md:grid-cols-3">{qualityCards}</div>

          <RevealOnScroll delayMs={120}>
            <div className="mx-auto mt-12 max-w-4xl">
              <CareerForm />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
