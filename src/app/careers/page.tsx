import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Lightbulb, UsersRound } from "lucide-react";
import PageIntro from "@/components/ui/PageIntro";

export const metadata: Metadata = { title: "Careers", description: "Connect with Shree Swaminarayan International School about career opportunities in Ranip, Ahmedabad." };

const qualities = [
  { icon: HeartHandshake, title: "Care with purpose", text: "Help create a respectful and supportive environment for every learner." },
  { icon: Lightbulb, title: "A curious mindset", text: "Bring fresh ideas and a commitment to continuous learning." },
  { icon: UsersRound, title: "A team approach", text: "Work alongside colleagues and families to support student growth." },
];

export default function CareersPage() {
  const qualityCards = qualities.map(({ icon: Icon, title, text }) => <article key={title} className="feature-card"><div className="icon-tile"><Icon size={22} /></div><h2 className="mt-5 font-serif text-xl font-semibold text-[#142C55]">{title}</h2><p className="mt-2 leading-7 text-slate-600">{text}</p></article>);
  return (
    <>
      <PageIntro eyebrow="Careers at SSIS" title="Help young minds discover what’s possible." description="Join a school community built around learning, care and the belief that every child can grow." image="/banner5.jpg" breadcrumb="Careers" />
      <section className="section-space bg-white"><div className="section-container"><div className="mx-auto max-w-3xl text-center"><p className="eyebrow">Make a difference every day</p><h2 className="section-title mt-4">Bring your talent to a place that puts students first.</h2><p className="mt-5 leading-8 text-slate-600">We welcome thoughtful educators and professionals who share our commitment to helping students learn with confidence and grow with strong values. For current openings and application details, contact our school team.</p></div><div className="mt-10 grid gap-4 md:grid-cols-3">{qualityCards}</div><div className="mt-10 rounded-[2rem] bg-[#F5F7FA] p-7 text-center sm:p-10"><h3 className="font-serif text-2xl font-semibold text-[#142C55]">Interested in working with us?</h3><p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">Send your CV and a short introduction to our team. We’ll be glad to hear from you.</p><a href="mailto:info@ssisranip.com?subject=Career%20enquiry%20-%20SSIS%20Ranip" className="btn-primary mt-6">Email your CV <ArrowRight size={17} /></a></div></div></section>
      <section className="pb-20"><div className="section-container text-center"><p className="text-slate-600">Have a question first?</p><Link href="/contact" className="text-link mt-2">Contact the school <ArrowRight size={17} /></Link></div></section>
    </>
  );
}
