import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Lightbulb, UsersRound } from "lucide-react";
import PageIntro from "@/components/ui/PageIntro";
import CareerForm from "@/components/ui/CareerForm";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Connect with Shree Swaminarayan International School about career opportunities in Ranip, Ahmedabad.",
};

const qualities = [
  {
    icon: HeartHandshake,
    title: "Care with purpose",
    text: "Help create a respectful, disciplined, and supportive environment for every learner.",
  },
  {
    icon: Lightbulb,
    title: "A curious mindset",
    text: "Bring strong subject expertise, fresh ideas, and a commitment to continuous learning.",
  },
  {
    icon: UsersRound,
    title: "A team approach",
    text: "Work alongside experienced colleagues and families to support all-round student growth.",
  },
];

export default function CareersPage() {
  const qualityCards = qualities.map(({ icon: Icon, title, text }) => (
    <article key={title} className="feature-card">
      <div className="icon-tile">
        <Icon size={22} />
      </div>
      <h3 className="mt-5 font-serif text-xl font-semibold text-[#142C55]">
        {title}
      </h3>
      <p className="mt-2 leading-7 text-slate-600">{text}</p>
    </article>
  ));

  return (
    <>
      <PageIntro
        eyebrow="Careers at SSIS Ranip"
        title="Help young minds discover what’s possible."
        description="Join a 3,000+ student school community in Ranip, Ahmedabad built around academic excellence, Sanskars, and all-round development."
        image="/banner5.jpg"
        breadcrumb="Careers"
      />
      <section className="section-space bg-[#F5F7FA]">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Make a difference every day</p>
            <h2 className="section-title mt-4">
              Bring your talent to a place that puts students first.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              We welcome qualified educators (Pre-Primary, Primary, Secondary,
              Higher Secondary Science/Commerce, and JEE/NEET faculty) and
              administrative professionals across English and Gujarati mediums.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">{qualityCards}</div>

          <div className="mx-auto mt-12 max-w-4xl">
            <CareerForm />
          </div>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="section-container text-center">
          <p className="text-slate-600">Have a question first?</p>
          <Link href="/contact" className="text-link mt-2">
            Contact the school <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
