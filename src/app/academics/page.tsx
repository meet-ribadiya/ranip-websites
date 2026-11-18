import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Bus,
  CheckCircle2,
  Clock,
  Coffee,
  Cpu,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Monitor,
  Music,
  Newspaper,
  Palette,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import PageIntro from "@/components/ui/PageIntro";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  ACADEMIC_WINGS,
  COURSES_HIGHLIGHTS,
  FACILITIES,
  FACILITY_NEEDS,
  PARENTS_CORNER,
  SCHOOL_NEWS,
  SITE_CONFIG,
  STUDENTS_CORNER,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Academics, Courses (JEE/NEET), Facilities, Parents & Students Corner",
  description:
    "Explore courses (JEE & NEET), 14 campus facilities, Parent's Corner, Student's Corner rules & timings, and school news at SSIS Ranip in Ahmedabad.",
};

const facilityIconMap = [
  Building2,
  Monitor,
  Sparkles,
  FlaskConical,
  Cpu,
  BookOpen,
  Trophy,
  Sparkles,
  Music,
  HeartPulse,
  Bus,
  ShieldCheck,
  Coffee,
  Palette,
];

export default function AcademicsPage() {
  const wingCards = ACADEMIC_WINGS.map((wing) => (
    <article key={wing.level} className="feature-card">
      <div className="icon-tile">
        <GraduationCap size={22} />
      </div>
      <p className="mt-4 text-xs font-bold uppercase tracking-[.15em] text-[#A96812]">
        {wing.ageGroup}
      </p>
      <h3 className="mt-2 font-serif text-xl font-semibold text-[#142C55]">
        {wing.level}
      </h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{wing.details}</p>
    </article>
  ));

  const coursePointItems = COURSES_HIGHLIGHTS.map((point) => (
    <li
      key={point}
      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[.06] p-4 text-sm leading-6 text-white/90"
    >
      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#F0B95F]" />
      <span>{point}</span>
    </li>
  ));

  const needBadges = FACILITY_NEEDS.map((need) => (
    <li
      key={need}
      className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-[#142C55] shadow-2xs"
    >
      <CheckCircle2 size={16} className="shrink-0 text-[#B87318]" />
      <span>{need}</span>
    </li>
  ));

  const detailedFacilityCards = FACILITIES.map((facility, index) => {
    const Icon = facilityIconMap[index % facilityIconMap.length];
    return (
      <article key={facility.name} className="feature-card flex flex-col">
        <div className="flex items-center gap-3.5">
          <div className="icon-tile shrink-0">
            <Icon size={22} />
          </div>
          <h3 className="font-serif text-xl font-semibold text-[#142C55]">
            {facility.name}
          </h3>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          {facility.description}
        </p>
      </article>
    );
  });

  const parentRegularityItems = PARENTS_CORNER.regularityPoints.map((point) => (
    <li key={point} className="flex items-start gap-3 text-sm leading-7 text-slate-600">
      <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#B87318]" />
      <span>{point}</span>
    </li>
  ));

  const ptmRows = PARENTS_CORNER.ptmSchedule.map((row) => (
    <tr key={row.sr} className="border-b border-slate-100">
      <td className="px-4 py-3 text-sm font-semibold text-[#142C55]">
        {row.sr}
      </td>
      <td className="px-4 py-3 text-sm font-semibold text-[#142C55]">
        {row.event}
      </td>
      <td className="px-4 py-3 text-sm text-slate-600">{row.timing}</td>
    </tr>
  ));

  const studentRuleItems = STUDENTS_CORNER.rules.map((rule, idx) => (
    <li
      key={rule}
      className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-[#F7F9FC] p-4 text-sm leading-6 text-slate-700"
    >
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#10284B] text-xs font-bold text-[#F0B95F]">
        {idx + 1}
      </span>
      <span>{rule}</span>
    </li>
  ));

  const timingCards = STUDENTS_CORNER.timings.map((t) => (
    <div
      key={t.group}
      className="rounded-2xl border border-[#F0B95F]/40 bg-[#10284B] p-5 text-white"
    >
      <div className="flex items-center gap-2 text-[#F0B95F]">
        <Clock size={18} />
        <p className="text-xs font-bold uppercase tracking-[.15em]">
          School Timings
        </p>
      </div>
      <h4 className="mt-2 font-serif text-xl font-semibold">{t.group}</h4>
      <p className="mt-3 text-sm text-white/85">{t.weekdays}</p>
      <p className="mt-1 text-sm font-semibold text-[#F0B95F]">{t.saturday}</p>
    </div>
  ));

  const newsArticles = SCHOOL_NEWS.map((news) => (
    <article key={news.title} className="feature-card">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.15em] text-[#A96812]">
        <Newspaper size={15} />
        <span>{news.date}</span>
      </div>
      <h3 className="mt-3 font-serif text-xl font-semibold text-[#142C55]">
        {news.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        {news.description}
      </p>
    </article>
  ));

  return (
    <>
      <PageIntro
        eyebrow="Academics, Courses & Campus Life"
        title="Comprehensive education from Pre-Primary to JEE & NEET."
        description="Explore our academic streams, JEE & NEET preparation, 14 state-of-the-art campus facilities, Parent's Corner, Student's Corner, and latest school news."
        image="/banner44.webp"
        breadcrumb="Academics"
      />

      {/* Quick Sub-navigation */}
      <div className="border-b border-slate-200 bg-white py-4">
        <div className="section-container flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm font-semibold text-[#142C55]">
          <a href="#courses" className="hover:text-[#B87318]">
            Courses (JEE & NEET)
          </a>
          <span className="text-slate-300">•</span>
          <a href="#facilities" className="hover:text-[#B87318]">
            14 Campus Facilities
          </a>
          <span className="text-slate-300">•</span>
          <a href="#parents-corner" className="hover:text-[#B87318]">
            Parent&apos;s Corner
          </a>
          <span className="text-slate-300">•</span>
          <a href="#students-corner" className="hover:text-[#B87318]">
            Student&apos;s Corner & Timings
          </a>
          <span className="text-slate-300">•</span>
          <a href="#news" className="hover:text-[#B87318]">
            School News
          </a>
        </div>
      </div>

      {/* Section 1: Academic Wings & Courses (JEE / NEET) */}
      <section id="courses" className="section-space bg-white">
        <div className="section-container">
          <SectionHeading
            eyebrow="Academic Streams"
            title="Pre-Primary, Primary, CBSE, Secondary & Higher Secondary"
            description="Govt. recognised co-educational school offering S.S.C., H.S.C. (Science & Commerce) and CBSE streams in English and Gujarati mediums."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {wingCards}
          </div>

          {/* JEE & NEET Courses Feature Box */}
          <div
            id="learning-approach"
            className="relative mt-14 overflow-hidden rounded-[2rem] bg-[#10284B] p-7 text-white sm:p-12"
          >
            <div
              className="animated-dots absolute inset-0 opacity-20"
              aria-hidden="true"
            />
            <div
              className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#E9A53B]/15 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="eyebrow eyebrow-light">
                    Specialized Competitive Coaching & Board Prep
                  </p>
                  <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
                    Courses at SSIS:{" "}
                    <span className="text-[#F0B95F]">JEE & NEET</span>{" "}
                    Excellence
                  </h2>
                  <p className="mt-3 max-w-2xl text-white/80 leading-7">
                    If you want to experience stress-free education with
                    guaranteed result-oriented Day Care mentoring, come and
                    experience it at SSIS Ranip.
                  </p>
                </div>
                <a
                  href={SITE_CONFIG.admissionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-fit"
                >
                  Enquire for JEE / NEET <ArrowRight size={17} />
                </a>
              </div>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {coursePointItems}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Facilities (All 14 Detailed Facilities) */}
      <section id="facilities" className="section-space bg-[#F5F7FA]">
        <div className="section-container">
          <SectionHeading
            eyebrow="2-Acre Campus in Ranip, Ahmedabad"
            title="School Facilities & Infrastructure"
            description="Shree Swaminarayan International School is thoughtfully designed to provide students with a safe, vibrant, and high-quality learning atmosphere."
          />

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="font-serif text-xl font-semibold text-[#142C55]">
              Need for Facilities in School
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {needBadges}
            </ul>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {detailedFacilityCards}
          </div>
        </div>
      </section>

      {/* Section 3: Parent's Corner & Student's Corner */}
      <section id="parents-corner" className="section-space bg-white">
        <div className="section-container space-y-14">
          {/* Parent's Corner */}
          <div className="rounded-[2rem] border border-slate-200 bg-[#F7F9FC] p-7 sm:p-11">
            <div className="flex items-center gap-3">
              <span className="icon-tile">
                <Users size={22} />
              </span>
              <div>
                <p className="eyebrow">For Families</p>
                <h2 className="font-serif text-3xl font-semibold text-[#142C55]">
                  Parent&apos;s Corner
                </h2>
              </div>
            </div>

            <blockquote className="mt-6 rounded-2xl border-l-4 border-[#E5A23C] bg-white p-6 font-serif text-lg leading-8 text-[#142C55] shadow-2xs">
              “{PARENTS_CORNER.guidelineQuote}”
            </blockquote>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="font-serif text-xl font-semibold text-[#142C55]">
                  Regularity & Parent Guidelines
                </h3>
                <ul className="mt-4 space-y-3">{parentRegularityItems}</ul>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-[#142C55]">
                  PTM & Orientation Programme Schedule
                </h3>
                <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-600">
                        <th className="px-4 py-3">S. No.</th>
                        <th className="px-4 py-3">Programme / PTM</th>
                        <th className="px-4 py-3">Schedule</th>
                      </tr>
                    </thead>
                    <tbody>{ptmRows}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Student's Corner */}
          <div
            id="students-corner"
            className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-11"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="icon-tile">
                  <GraduationCap size={22} />
                </span>
                <div>
                  <p className="eyebrow">For Learners</p>
                  <h2 className="font-serif text-3xl font-semibold text-[#142C55]">
                    Student&apos;s Corner — Rules & School Timings
                  </h2>
                </div>
              </div>
              <a
                href={SITE_CONFIG.erpLogin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Online ERP Login <ArrowRight size={17} />
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">{timingCards}</div>

            <div className="mt-8">
              <h3 className="font-serif text-xl font-semibold text-[#142C55]">
                Rules & Regulations for Students
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {studentRuleItems}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: School News */}
      <section id="news" className="section-space bg-[#F5F7FA]">
        <div className="section-container">
          <SectionHeading
            eyebrow="Latest News & Milestones"
            title="School News & Campus Chronicles"
            description="Highlights from our exhibitions, annual functions, national day parades, and traditional celebrations."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles}
          </div>
        </div>
      </section>
    </>
  );
}
