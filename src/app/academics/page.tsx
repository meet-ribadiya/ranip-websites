import type { Metadata } from "next";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  Bus,
  CalendarDays,
  CheckCircle2,
  Clock,
  Coffee,
  Cpu,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Monitor,
  Music,
  Palette,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import PageIntro from "@/components/ui/PageIntro";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import MobileExpandable from "@/components/ui/MobileExpandable";
import AcademicsSectionNav from "@/components/academics/AcademicsSectionNav";
import {
  ACADEMIC_WINGS,
  COURSES_HIGHLIGHTS,
  FACILITIES,
  FACILITY_NEEDS,
  PAGE_INTROS,
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

const jeeHighlightsSummary = [
  { icon: Award, label: "Up to 30 Years", sub: "Experienced & Gold Medalist Faculty" },
  { icon: GraduationCap, label: "PhD & Board Setters", sub: "12th Board Paper-Setting Experience" },
  { icon: Sparkles, label: "Day Care Practice", sub: "Stress-Free NEET & JEE Mentoring" },
];

function splitFirstSentence(text: string): { lead: string; rest: string } {
  const periodIdx = text.indexOf(". ");
  if (periodIdx === -1 || periodIdx > 170) {
    return { lead: text, rest: "" };
  }
  return {
    lead: text.slice(0, periodIdx + 1),
    rest: text.slice(periodIdx + 2),
  };
}

export default function AcademicsPage() {
  const wingCards = ACADEMIC_WINGS.map((wing, index) => {
    const numberLabel = `0${index + 1}`;
    const delayMs = index * 70;
    return (
      <RevealOnScroll key={wing.level} delayMs={delayMs} className="h-full">
        <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.6rem] border border-slate-200/80 bg-white p-5 shadow-[0_8px_24px_rgba(16,40,75,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#e4b669] hover:shadow-[0_18px_38px_rgba(16,40,75,0.09)] sm:p-6">
          <div
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#10284B] via-[#E5A23C] to-[#F0B95F] opacity-65 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden="true"
          />
          <div>
            <div className="flex items-center justify-between">
              <div className="icon-tile transition-colors duration-300 group-hover:bg-[#10284B] group-hover:text-[#F0B95F]">
                <GraduationCap size={21} />
              </div>
              <span className="font-serif text-xl font-bold text-slate-200 transition-colors duration-300 group-hover:text-[#E5A23C]">
                {numberLabel}
              </span>
            </div>
            <span className="mt-4 inline-block rounded-full bg-[#FFF7E8] px-3 py-1 text-[11px] font-bold uppercase tracking-[.14em] text-[#A96812]">
              {wing.ageGroup}
            </span>
            <h3 className="mt-3 font-serif text-lg font-semibold leading-snug text-[#142C55] sm:text-xl">
              {wing.level}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {wing.details}
            </p>
          </div>
          <div className="mt-5 h-[2px] w-8 rounded-full bg-[#E5A23C] transition-all duration-300 group-hover:w-16" />
        </article>
      </RevealOnScroll>
    );
  });

  const jeeBenefitPills = jeeHighlightsSummary.map(({ icon: Icon, label, sub }) => (
    <div
      key={label}
      className="flex items-center gap-3.5 rounded-2xl border border-white/15 bg-white/[.07] p-4 backdrop-blur-sm"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E5A23C]/20 text-[#F0B95F] ring-1 ring-[#F0B95F]/30">
        <Icon size={19} />
      </span>
      <div className="min-w-0">
        <p className="font-serif text-base font-bold text-white">{label}</p>
        <p className="text-xs text-white/70">{sub}</p>
      </div>
    </div>
  ));

  const primaryCoursePoints = COURSES_HIGHLIGHTS.slice(0, 6).map((point) => (
    <li
      key={point}
      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[.06] p-4 text-sm leading-6 text-white/90"
    >
      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#F0B95F]" />
      <span>{point}</span>
    </li>
  ));

  const extraCoursePoints = COURSES_HIGHLIGHTS.slice(6).map((point) => (
    <li
      key={point}
      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[.06] p-4 text-sm leading-6 text-white/90"
    >
      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#F0B95F]" />
      <span>{point}</span>
    </li>
  ));

  const primaryNeedBadges = FACILITY_NEEDS.slice(0, 4).map((need) => (
    <li
      key={need}
      className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm font-semibold text-[#142C55]"
    >
      <CheckCircle2 size={16} className="shrink-0 text-[#B87318]" />
      <span>{need}</span>
    </li>
  ));

  const extraNeedBadges = FACILITY_NEEDS.slice(4).map((need) => (
    <li
      key={need}
      className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm font-semibold text-[#142C55]"
    >
      <CheckCircle2 size={16} className="shrink-0 text-[#B87318]" />
      <span>{need}</span>
    </li>
  ));

  const detailedFacilityCards = FACILITIES.map((facility, index) => {
    const Icon = facilityIconMap[index % facilityIconMap.length];
    const delayMs = (index % 3) * 70;
    const { lead, rest } = splitFirstSentence(facility.description);
    const bodyNode = rest ? (
      <MobileExpandable
        labelMore="Read More"
        labelLess="Read Less"
        preview={
          <p className="mt-3.5 text-sm leading-7 text-slate-600">{lead}</p>
        }
      >
        <p className="mt-2 text-sm leading-7 text-slate-600">{rest}</p>
      </MobileExpandable>
    ) : (
      <p className="mt-3.5 text-sm leading-7 text-slate-600">
        {facility.description}
      </p>
    );

    return (
      <RevealOnScroll key={facility.name} delayMs={delayMs} className="h-full">
        <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-slate-200/80 bg-white p-6 shadow-[0_8px_24px_rgba(16,40,75,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#e4b669] hover:shadow-[0_18px_38px_rgba(16,40,75,0.09)]">
          <div
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#10284B] via-[#E5A23C] to-transparent opacity-55 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden="true"
          />
          <div className="flex items-center gap-3.5">
            <div className="icon-tile shrink-0 transition-colors duration-300 group-hover:bg-[#10284B] group-hover:text-[#F0B95F]">
              <Icon size={21} />
            </div>
            <h3 className="font-serif text-xl font-semibold leading-snug text-[#142C55]">
              {facility.name}
            </h3>
          </div>
          {bodyNode}
        </article>
      </RevealOnScroll>
    );
  });

  const parentRegularityItems = PARENTS_CORNER.regularityPoints.map((point) => (
    <li
      key={point}
      className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white p-4 text-sm leading-7 text-slate-600 shadow-2xs"
    >
      <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#B87318]" />
      <span>{point}</span>
    </li>
  ));

  const ptmTableRows = PARENTS_CORNER.ptmSchedule.map((row) => (
    <tr
      key={row.sr}
      className="border-b border-slate-100 transition hover:bg-[#FFFBF4]"
    >
      <td className="px-4 py-3.5 text-sm font-semibold text-[#142C55]">
        {row.sr}
      </td>
      <td className="px-4 py-3.5 text-sm font-semibold text-[#142C55]">
        {row.event}
      </td>
      <td className="px-4 py-3.5 text-sm text-slate-600">{row.timing}</td>
    </tr>
  ));

  const ptmMobileCards = PARENTS_CORNER.ptmSchedule.map((row) => (
    <div
      key={row.sr}
      className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#10284B] text-xs font-bold text-[#F0B95F]">
          {row.sr}
        </span>
        <span className="text-xs font-semibold text-[#A96812]">
          {row.timing}
        </span>
      </div>
      <p className="mt-2 font-serif text-base font-semibold text-[#142C55]">
        {row.event}
      </p>
    </div>
  ));

  const allStudentRules = STUDENTS_CORNER.rules.map((rule, idx) => (
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

  const primaryStudentRules = allStudentRules.slice(0, 3);
  const extraStudentRules = allStudentRules.slice(3);

  const timingCards = STUDENTS_CORNER.timings.map((t) => (
    <div
      key={t.group}
      className="relative overflow-hidden rounded-2xl border border-[#F0B95F]/35 bg-gradient-to-br from-[#0B1E3B] via-[#10284B] to-[#0D2140] p-5 text-white shadow-md sm:p-6"
    >
      <div
        className="animated-dots absolute inset-0 opacity-15"
        aria-hidden="true"
      />
      <div className="relative">
        <div className="flex items-center gap-2 text-[#F0B95F]">
          <Clock size={17} />
          <p className="text-xs font-bold uppercase tracking-[.15em]">
            School Timings
          </p>
        </div>
        <h4 className="mt-2 font-serif text-xl font-semibold">{t.group}</h4>
        <p className="mt-3 text-sm text-white/85">{t.weekdays}</p>
        <p className="mt-1 text-sm font-semibold text-[#F0B95F]">
          {t.saturday}
        </p>
      </div>
    </div>
  ));

  const newsArticles = SCHOOL_NEWS.map((news, index) => {
    const delayMs = (index % 3) * 70;
    const { lead, rest } = splitFirstSentence(news.description);
    const descriptionNode = rest ? (
      <MobileExpandable
        labelMore="Read More"
        labelLess="Read Less"
        preview={
          <p className="mt-3 text-sm leading-7 text-slate-600">{lead}</p>
        }
      >
        <p className="mt-2 text-sm leading-7 text-slate-600">{rest}</p>
      </MobileExpandable>
    ) : (
      <p className="mt-3 text-sm leading-7 text-slate-600">
        {news.description}
      </p>
    );

    return (
      <RevealOnScroll key={news.title} delayMs={delayMs} className="h-full">
        <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.6rem] border border-slate-200/80 bg-white p-6 shadow-[0_8px_24px_rgba(16,40,75,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#e4b669] hover:shadow-[0_18px_38px_rgba(16,40,75,0.09)]">
          <div
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#10284B] via-[#E5A23C] to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden="true"
          />
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF7E8] px-3 py-1 text-xs font-bold uppercase tracking-[.12em] text-[#A96812]">
              <CalendarDays size={13} />
              {news.date}
            </span>
            <h3 className="mt-4 font-serif text-xl font-semibold leading-snug text-[#142C55]">
              {news.title}
            </h3>
            {descriptionNode}
          </div>
          <div className="mt-5 h-[2px] w-8 rounded-full bg-[#E5A23C] transition-all duration-300 group-hover:w-16" />
        </article>
      </RevealOnScroll>
    );
  });

  return (
    <>
      <PageIntro
        eyebrow={PAGE_INTROS.academics.eyebrow}
        title={PAGE_INTROS.academics.title}
        titleHighlight={PAGE_INTROS.academics.titleHighlight}
        description={PAGE_INTROS.academics.description}
        image={PAGE_INTROS.academics.image}
      />

      {/* Sticky Section Navigation with Active Scroll Tracking */}
      <AcademicsSectionNav />

      {/* Section 1: Academic Streams & JEE/NEET Courses */}
      <section id="courses" className="scroll-mt-36 section-space bg-white">
        <div className="section-container">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Academic Streams"
              title="Pre-Primary, Primary, CBSE,"
              titleHighlight="Secondary & Higher Secondary"
              description="Govt. recognised co-educational school offering S.S.C., H.S.C. (Science & Commerce) and CBSE streams in English and Gujarati mediums."
            />
          </RevealOnScroll>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {wingCards}
          </div>

          {/* JEE & NEET Courses Feature Showcase */}
          <RevealOnScroll delayMs={80}>
            <div
              id="learning-approach"
              className="scroll-mt-36 relative mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0B1E3B] via-[#10284B] to-[#0D2140] p-6 text-white shadow-[0_24px_60px_rgba(16,40,75,0.22)] sm:p-10 lg:p-12"
            >
              <div
                className="animated-dots absolute inset-0 opacity-20"
                aria-hidden="true"
              />
              <div
                className="ambient-orb-gold pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#E9A53B] blur-3xl"
                aria-hidden="true"
              />
              <div
                className="ambient-orb-blue pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#38BDF8] blur-3xl"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="eyebrow eyebrow-light">
                      Specialized Competitive Coaching & Board Prep
                    </p>
                    <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
                      Courses at SSIS:{" "}
                      <span className="text-[#F0B95F]">JEE & NEET</span>{" "}
                      Excellence
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
                      If you want to experience stress-free education with
                      guaranteed result-oriented Day Care mentoring, come and
                      experience it at SSIS Ranip.
                    </p>
                  </div>
                  <a
                    href={SITE_CONFIG.admissionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center sm:w-fit"
                  >
                    Enquire for JEE / NEET <ArrowRight size={17} />
                  </a>
                </div>

                {/* Scannable Key Benefits Strip */}
                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {jeeBenefitPills}
                </div>

                {/* 14 Highlights — compact mobile Read More for points 7-14 */}
                <div className="mt-7">
                  <MobileExpandable
                    variant="dark"
                    labelMore="View All 14 Coaching Highlights"
                    labelLess="Show Fewer Highlights"
                    preview={
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {primaryCoursePoints}
                      </ul>
                    }
                  >
                    <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                      {extraCoursePoints}
                    </ul>
                  </MobileExpandable>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Section 2: School Facilities & Infrastructure */}
      <section
        id="facilities"
        className="scroll-mt-36 section-space bg-[#F5F7FA]"
      >
        <div className="section-container">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="2-Acre Campus in Ranip, Ahmedabad"
              title="School Facilities &"
              titleHighlight="Infrastructure"
              description="Shree Swaminarayan International School is thoughtfully designed to provide students with a safe, vibrant, and high-quality learning atmosphere."
            />
          </RevealOnScroll>

          <RevealOnScroll delayMs={80}>
            <div className="mt-10 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-2xs sm:p-8">
              <h3 className="font-serif text-xl font-semibold text-[#142C55]">
                Need for Facilities in School
              </h3>
              <div className="mt-4">
                <MobileExpandable
                  labelMore="Show All 8 Objectives"
                  labelLess="Show Less"
                  preview={
                    <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
                      {primaryNeedBadges}
                    </ul>
                  }
                >
                  <ul className="mt-2.5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
                    {extraNeedBadges}
                  </ul>
                </MobileExpandable>
              </div>
            </div>
          </RevealOnScroll>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {detailedFacilityCards}
          </div>
        </div>
      </section>

      {/* Section 3: Parent's Corner & Student's Corner */}
      <section
        id="parents-corner"
        className="scroll-mt-36 section-space bg-white"
      >
        <div className="section-container space-y-12 sm:space-y-14">
          {/* Parent's Corner */}
          <RevealOnScroll>
            <div className="rounded-[2rem] border border-slate-200/90 bg-[#F7F9FC] p-6 shadow-2xs sm:p-10">
              <div className="flex items-center gap-3.5">
                <span className="icon-tile shrink-0">
                  <Users size={22} />
                </span>
                <div>
                  <p className="eyebrow">For Families</p>
                  <h2 className="font-serif text-2xl font-semibold text-[#142C55] sm:text-3xl">
                    Parent&apos;s{" "}
                    <span className="text-[#B87318]">Corner</span>
                  </h2>
                </div>
              </div>

              <blockquote className="mt-6 rounded-2xl border-l-4 border-[#E5A23C] bg-white p-5 font-serif text-base leading-7 text-[#142C55] shadow-2xs sm:p-6 sm:text-lg sm:leading-8">
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

                  {/* Desktop/Tablet Table */}
                  <div className="mt-4 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white sm:block">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-200 bg-[#10284B] text-xs font-bold uppercase tracking-wider text-white">
                          <th className="px-4 py-3.5">S. No.</th>
                          <th className="px-4 py-3.5">Programme / PTM</th>
                          <th className="px-4 py-3.5">Schedule</th>
                        </tr>
                      </thead>
                      <tbody>{ptmTableRows}</tbody>
                    </table>
                  </div>

                  {/* Mobile Stacked Schedule Cards (zero horizontal overflow) */}
                  <div className="mt-4 space-y-3 sm:hidden">
                    {ptmMobileCards}
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Student's Corner */}
          <RevealOnScroll delayMs={80}>
            <div
              id="students-corner"
              className="scroll-mt-36 rounded-[2rem] border border-slate-200/90 bg-white p-6 shadow-[0_12px_36px_rgba(16,40,75,0.06)] sm:p-10"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3.5">
                  <span className="icon-tile shrink-0">
                    <GraduationCap size={22} />
                  </span>
                  <div>
                    <p className="eyebrow">For Learners</p>
                    <h2 className="font-serif text-2xl font-semibold text-[#142C55] sm:text-3xl">
                      Student&apos;s Corner —{" "}
                      <span className="text-[#B87318]">Rules & Timings</span>
                    </h2>
                  </div>
                </div>
                <a
                  href={SITE_CONFIG.erpLogin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center sm:w-fit"
                >
                  Online ERP Login <ArrowRight size={17} />
                </a>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {timingCards}
              </div>

              <div className="mt-8">
                <h3 className="font-serif text-xl font-semibold text-[#142C55]">
                  Rules & Regulations for Students
                </h3>
                {/* Desktop: single balanced 2-column grid for all 6 rules (zero empty slots) */}
                <ul className="mt-4 hidden gap-3 md:grid md:grid-cols-2">
                  {allStudentRules}
                </ul>
                {/* Mobile: compact 3-rule preview + smooth Read More */}
                <div className="mt-4 md:hidden">
                  <MobileExpandable
                    labelMore="Read All 6 Rules"
                    labelLess="Show Fewer Rules"
                    preview={
                      <ul className="grid gap-3">{primaryStudentRules}</ul>
                    }
                  >
                    <ul className="mt-3 grid gap-3">{extraStudentRules}</ul>
                  </MobileExpandable>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Section 4: School News & Campus Chronicles */}
      <section id="news" className="scroll-mt-36 section-space bg-[#F5F7FA]">
        <div className="section-container">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Latest News & Milestones"
              title="School News &"
              titleHighlight="Campus Chronicles"
              description="Highlights from our exhibitions, annual functions, national day parades, and traditional celebrations."
            />
          </RevealOnScroll>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles}
          </div>
        </div>
      </section>
    </>
  );
}
