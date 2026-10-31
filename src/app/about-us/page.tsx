import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Heart, Lightbulb, ShieldCheck } from "lucide-react";
import PageIntro from "@/components/ui/PageIntro";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = { title: "About Our School", description: "Discover the vision, values and learning approach of Shree Swaminarayan International School in Ranip, Ahmedabad." };

const values = [
  { icon: BookOpen, title: "Curiosity", text: "A love of learning begins with questions. We encourage students to explore ideas and keep growing." },
  { icon: Heart, title: "Sanskars", text: "Respect, compassion and responsibility guide how we learn and live together." },
  { icon: Lightbulb, title: "Confidence", text: "Students deserve the space to try, discover their strengths and build belief in themselves." },
  { icon: ShieldCheck, title: "Wellbeing", text: "A supportive environment helps every learner feel seen, safe and ready to take part." },
];

export default function AboutPage() {
  const valueCards = values.map(({ icon: Icon, title, text }) => <article key={title} className="feature-card"><div className="icon-tile"><Icon size={22} /></div><h3 className="mt-5 font-serif text-xl font-semibold text-[#142C55]">{title}</h3><p className="mt-2 leading-7 text-slate-600">{text}</p></article>);
  return (
    <>
      <PageIntro eyebrow="About SSIS Ranip" title="Education that helps every child find their way." description="A learning community where knowledge and values grow side by side, and every student is encouraged to become their best self." breadcrumb="About us" />
      <section id="our-story" className="section-space bg-white"><div className="section-container grid items-center gap-12 lg:grid-cols-2">
        <div className="image-frame aspect-[4/3] rounded-[2rem] shadow-xl"><Image src="/banner2.webp" alt="Students taking part in school life" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div>
        <div><p className="eyebrow">Our story</p><h2 className="section-title mt-4">A place to learn, <span className="text-[#B87318]">belong and become.</span></h2><p className="mt-5 leading-8 text-slate-600">Shree Swaminarayan International School (SSIS Ranip) is built around a simple belief: a meaningful education should prepare children for life, as well as for what comes next in the classroom.</p><p className="mt-4 leading-8 text-slate-600">Here, academic learning is paired with curiosity, care and values. We want students to leave each day with something new to think about and the confidence to keep moving forward.</p><Link href="/academics" className="text-link mt-7">Explore how we learn <ArrowRight size={17} /></Link></div>
      </div></section>
      <section id="our-values" className="section-space bg-[#F5F7FA]"><div className="section-container"><SectionHeading eyebrow="What we believe" title="A foundation for a fuller life" description="Our purpose is reflected in the way we learn, the way we treat one another and the possibilities we help students discover." /><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{valueCards}</div></div></section>
      <section id="our-vision" className="section-space bg-white"><div className="section-container"><div className="mx-auto max-w-4xl rounded-[2rem] bg-[#10284B] p-7 text-white sm:p-12"><p className="eyebrow eyebrow-light">Our vision</p><blockquote className="mt-5 font-serif text-2xl leading-relaxed sm:text-3xl">“{SITE_CONFIG.vision}”</blockquote><p className="mt-7 text-sm font-semibold uppercase tracking-[.16em] text-[#F0B95F]">A guiding thought for every learner</p></div></div></section>
      <section className="pb-20 sm:pb-28"><div className="section-container text-center"><h2 className="section-title">Ready to get to know us?</h2><p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">We would be happy to help you learn more about our school and the admissions process.</p><Link href="/contact" className="btn-primary mt-7">Talk to our team <ArrowRight size={17} /></Link></div></section>
    </>
  );
}
