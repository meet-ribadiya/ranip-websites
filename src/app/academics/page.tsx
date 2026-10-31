import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, FlaskConical, Monitor, Palette, Trophy } from "lucide-react";
import PageIntro from "@/components/ui/PageIntro";
import SectionHeading from "@/components/ui/SectionHeading";
import { FACILITIES, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = { title: "Academics & Campus", description: "Explore learning, student life and campus facilities at SSIS Ranip in Ahmedabad." };

const experiences = [
  { icon: BookOpen, title: "Academic learning", text: "Build understanding, strengthen essential skills and approach new ideas with curiosity." },
  { icon: FlaskConical, title: "Hands-on discovery", text: "Practical learning gives students the chance to investigate, create and connect ideas." },
  { icon: Trophy, title: "Movement & teamwork", text: "Sport and active play help develop teamwork, resilience and a healthy sense of challenge." },
  { icon: Palette, title: "Creative expression", text: "Art, music and performance open new ways for students to share their ideas and imagination." },
];
const facilityIcons = [Monitor, FlaskConical, BookOpen, Trophy, Palette];

export default function AcademicsPage() {
  const experienceCards = experiences.map(({ icon: Icon, title, text }) => <article key={title} className="feature-card"><div className="icon-tile"><Icon size={22} /></div><h3 className="mt-5 font-serif text-xl font-semibold text-[#142C55]">{title}</h3><p className="mt-2 leading-7 text-slate-600">{text}</p></article>);
  const facilityCards = FACILITIES.slice(0, 8).map((facility, index) => { const Icon = facilityIcons[index % facilityIcons.length]; return <li key={facility.name} className="facility-tile"><Icon size={20} /><span>{facility.name}</span></li>; });
  return (
    <>
      <PageIntro eyebrow="Academics & student life" title="Learning that reaches beyond the lesson." description="A supportive environment for building knowledge, confidence and the curiosity to keep exploring." image="/banner44.webp" breadcrumb="Academics" />
      <section id="learning-approach" className="section-space bg-white"><div className="section-container"><SectionHeading eyebrow="A well-rounded experience" title="Many ways to learn and grow" description="Students learn through thoughtful teaching, meaningful practice and opportunities to take part." /><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{experienceCards}</div></div></section>
      <section id="facilities" className="section-space bg-[#F5F7FA]"><div className="section-container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><p className="eyebrow">Our campus</p><h2 className="section-title mt-4">Spaces to <span className="text-[#B87318]">make it happen.</span></h2><p className="mt-5 leading-8 text-slate-600">A welcoming campus gives students room to concentrate, collaborate and explore their interests. Learn more about these spaces when you connect with our team.</p><a href={`tel:${SITE_CONFIG.phones[0]}`} className="btn-primary mt-7">Ask about the campus <ArrowRight size={17} /></a></div><ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">{facilityCards}</ul></div></section>
      <section id="parents-corner" className="section-space bg-white"><div className="section-container grid gap-5 md:grid-cols-2"><article className="rounded-3xl border border-slate-200 p-7 sm:p-9"><p className="eyebrow">For families</p><h2 className="mt-3 font-serif text-2xl font-semibold text-[#142C55]">A school partnership</h2><p className="mt-3 leading-7 text-slate-600">Families are an important part of a child’s learning journey. Contact the school for the latest updates, parent information and support.</p><Link href="/contact" className="text-link mt-5">Contact the school <ArrowRight size={17} /></Link></article><article id="students-corner" className="rounded-3xl border border-slate-200 p-7 sm:p-9"><p className="eyebrow">For students</p><h2 className="mt-3 font-serif text-2xl font-semibold text-[#142C55]">Curiosity has a home here</h2><p className="mt-3 leading-7 text-slate-600">From class projects to sports and creative pursuits, school life offers chances to try, practice and share what you discover.</p><a href={SITE_CONFIG.erpLogin} target="_blank" rel="noopener noreferrer" className="text-link mt-5">Student ERP login <ArrowRight size={17} /></a></article></div></section>
    </>
  );
}
