import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Compass,
  Flame,
  GraduationCap,
  Heart,
  Lightbulb,
  Quote,
  ShieldCheck,
  Users,
} from "lucide-react";
import PageIntro from "@/components/ui/PageIntro";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import MobileExpandable from "@/components/ui/MobileExpandable";
import AboutSectionNav from "@/components/about/AboutSectionNav";
import AboutStats from "@/components/about/AboutStats";
import {
  DIRECTORS_MESSAGE,
  FACULTY_LIST,
  GROWTH_PILLARS,
  PAGE_INTROS,
  SITE_CONFIG,
  SITE_IMAGES,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us, Leadership & Faculty",
  description:
    "Discover the history, vision, mission, Director's Message, Principal's Message, and qualified faculty of Shree Swaminarayan International School in Ranip, Ahmedabad.",
};

const values = [
  {
    number: "01",
    icon: BookOpen,
    title: "Intellectual Curiosity",
    text: "We believe in education that stimulates intellectual curiosity, critical thinking, and problem solving.",
  },
  {
    number: "02",
    icon: Heart,
    title: "Spiritual & Moral Values",
    text: "Blending India’s rich cultural and spiritual heritage with contemporary education and core discipline.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Personality Grooming",
    text: "We don’t only teach, we groom the personality of children so they become confident, independent, and responsible.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Happy & Safe Campus",
    text: "A welcoming, air-conditioned, co-educational environment with a low student-teacher ratio where every achievement is celebrated.",
  },
];

const growthPillars = GROWTH_PILLARS;

export default function AboutPage() {
  const growthPillarPills = growthPillars.map((pillar) => (
    <span
      key={pillar}
      className="rounded-full border border-[#E5A23C]/40 bg-white px-3 py-1 text-xs font-semibold text-[#10284B]"
    >
      {pillar}
    </span>
  ));

  const valueCards = values.map(
    ({ number, icon: Icon, title, text }, index) => {
      const delayMs = index * 80;
      return (
        <RevealOnScroll key={title} delayMs={delayMs} className="h-full">
          <article className="group flex h-full flex-col justify-between rounded-[1.6rem] border border-slate-200/80 bg-white p-6 shadow-[0_8px_24px_rgba(16,40,75,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#e4b669] hover:shadow-[0_18px_38px_rgba(16,40,75,0.09)]">
            <div>
              <div className="flex items-center justify-between">
                <div className="icon-tile transition-colors duration-300 group-hover:bg-[#10284B] group-hover:text-[#F0B95F]">
                  <Icon size={21} />
                </div>
                <span className="font-serif text-xl font-bold text-slate-200 transition-colors duration-300 group-hover:text-[#E5A23C]">
                  {number}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-[#142C55]">
                {title}
              </h3>
              <p className="mt-2.5 text-sm leading-7 text-slate-600">{text}</p>
            </div>
            <div className="mt-5 h-[2px] w-8 rounded-full bg-[#E5A23C] transition-all duration-300 group-hover:w-16" />
          </article>
        </RevealOnScroll>
      );
    }
  );

  const sisterInstituteBadges = DIRECTORS_MESSAGE.sisterInstitutes.map(
    (inst) => (
      <span
        key={inst}
        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#142C55] shadow-2xs"
      >
        <Building2 size={13} className="shrink-0 text-[#B87318]" />
        <span>{inst}</span>
      </span>
    )
  );

  const englishFacultyRows = FACULTY_LIST.filter(
    (f) => f.medium === "English Medium"
  ).map((teacher) => (
    <tr
      key={teacher.sr}
      className="border-b border-slate-100 transition hover:bg-[#FFFBF4]"
    >
      <td className="px-5 py-3.5 text-sm font-semibold text-[#142C55]">
        {teacher.sr}
      </td>
      <td className="px-5 py-3.5 text-sm font-semibold text-[#142C55]">
        {teacher.subject}
      </td>
      <td className="px-5 py-3.5 text-sm text-slate-600">
        {teacher.qualification}
      </td>
      <td className="px-5 py-3.5">
        <span className="inline-flex rounded-full bg-[#F8F0E3] px-3 py-1 text-xs font-bold text-[#A96812]">
          {teacher.post}
        </span>
      </td>
    </tr>
  ));

  const gujaratiFacultyRows = FACULTY_LIST.filter(
    (f) => f.medium === "Gujarati Medium"
  ).map((teacher, idx) => (
    <tr
      key={teacher.sr}
      className="border-b border-slate-100 transition hover:bg-[#FFFBF4]"
    >
      <td className="px-5 py-3.5 text-sm font-semibold text-[#142C55]">
        {idx + 1}
      </td>
      <td className="px-5 py-3.5 text-sm font-semibold text-[#142C55]">
        {teacher.subject}
      </td>
      <td className="px-5 py-3.5 text-sm text-slate-600">
        {teacher.qualification}
      </td>
      <td className="px-5 py-3.5">
        <span className="inline-flex rounded-full bg-[#F8F0E3] px-3 py-1 text-xs font-bold text-[#A96812]">
          {teacher.post}
        </span>
      </td>
    </tr>
  ));

  return (
    <>
      <PageIntro
        eyebrow={PAGE_INTROS.about.eyebrow}
        title={PAGE_INTROS.about.title}
        titleHighlight={PAGE_INTROS.about.titleHighlight}
        description={PAGE_INTROS.about.description}
        image={PAGE_INTROS.about.image}
      />

      {/* Sticky Section Navigation with Active Scroll Tracking */}
      <AboutSectionNav />

      {/* Section 1: Animated Statistics + Our Story (Editorial Layout) */}
      <section
        id="our-story"
        className="scroll-mt-36 bg-gradient-to-b from-[#F7F9FC] via-white to-white py-12 sm:py-16 lg:py-20"
      >
        <div className="section-container">
          {/* Animated Count-Up Statistics Strip */}
          <RevealOnScroll>
            <AboutStats />
          </RevealOnScroll>

          {/* Editorial Our Story Grid */}
          <div className="mt-14 grid items-start gap-10 lg:mt-16 lg:grid-cols-[.92fr_1.08fr] lg:gap-14">
            <div className="space-y-6 lg:sticky lg:top-36">
              <RevealOnScroll variant="image">
                <div className="relative">
                  <div
                    className="pointer-events-none absolute -inset-2 hidden rounded-[2.25rem] border border-[#E5A23C]/30 bg-[#FDF6EA]/70 sm:block translate-x-2.5 translate-y-2.5 rotate-[1.2deg]"
                    aria-hidden="true"
                  />
                  <div className="image-frame relative aspect-[4/3] rounded-[2rem] shadow-[0_22px_55px_rgba(16,40,75,0.14)]">
                    <Image
                      src={SITE_IMAGES.aboutStoryPhoto}
                      alt="Students taking part in school life at SSIS Ranip"
                      fill
                      sizes="(max-width: 768px) 100vw, 48vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delayMs={100}>
                <div className="rounded-3xl border border-slate-200/90 bg-[#F7F9FC] p-5 shadow-2xs sm:p-6">
                  <p className="eyebrow">Age & Grade Structure</p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-700">
                    <li className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/70 pb-2.5">
                      <span className="font-semibold text-[#142C55]">
                        Pre-Primary Programme (Lower School)
                      </span>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#A96812] shadow-2xs">
                        3 – 5 Years
                      </span>
                    </li>
                    <li className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/70 pb-2.5">
                      <span className="font-semibold text-[#142C55]">
                        Primary School (Classes 1st to 8th)
                      </span>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#A96812] shadow-2xs">
                        6 – 13 Years
                      </span>
                    </li>
                    <li className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-semibold text-[#142C55]">
                        Secondary & Sr. Secondary (9th to 12th)
                      </span>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#A96812] shadow-2xs">
                        14 – 17 Years
                      </span>
                    </li>
                  </ul>
                </div>
              </RevealOnScroll>
            </div>

            <RevealOnScroll delayMs={120}>
              <div>
                <p className="eyebrow">Our Story & Identity</p>
                <h2 className="section-title mt-3">
                  About Shree Swaminarayan{" "}
                  <span className="text-[#B87318]">International School</span>
                </h2>
                <div
                  className="mt-4 h-[3px] w-14 rounded-full bg-gradient-to-r from-[#10284B] via-[#E5A23C] to-transparent"
                  aria-hidden="true"
                />

                <div className="mt-6 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  <MobileExpandable
                    labelMore="Read Full Story"
                    labelLess="Show Less"
                    preview={
                      <div className="space-y-4">
                        <p>
                          Welcome to{" "}
                          <strong className="font-semibold text-[#10284B]">
                            Shree Swaminarayan International School (SSIS)
                          </strong>
                          . Whether you are from any part of the city or state,
                          or from elsewhere in India we aim to help you make the
                          best of educational opportunity that SSIS can offer
                          you.
                        </p>
                        <p>
                          SSIS is located in a{" "}
                          <span className="font-semibold text-[#B87318]">
                            serene environment of Ranip Area in Ahmedabad city
                          </span>{" "}
                          and it has earned its name within a short time
                          challenging competitive schools around with the{" "}
                          <strong className="font-semibold text-[#10284B]">
                            strength of 3,000 in 5 years
                          </strong>
                          ; it commands all the facilities and amenities
                          necessary for top class education anywhere in the
                          country.
                        </p>
                      </div>
                    }
                  >
                    <div className="mt-4 space-y-4">
                      <p>
                        Though the climate is warm here, we facilitate our
                        students with a{" "}
                        <strong className="font-semibold text-[#10284B]">
                          pleasant class environment with AC connections
                        </strong>
                        . Being a developing industrial city with a multilingual
                        and multi-regional locality, there is an integrated
                        community that benefits from our presence. Shree
                        Swaminarayan International School is a{" "}
                        <span className="font-semibold text-[#B87318]">
                          Govt. recognised school affiliated with S.S.C. board
                        </span>{" "}
                        offering Pre-Primary, Primary, and Secondary & Sr.
                        Secondary Education. The Pre-Primary Programme is
                        provided for children in the lower school (3 – 5 years
                        of age). The Primary School consists of students aged 6
                        – 13 years and the Secondary & Sr. Secondary consists of
                        students from age group 14 to 17 years.
                      </p>
                      <p>
                        Our school is{" "}
                        <strong className="font-semibold text-[#10284B]">
                          co-educational
                        </strong>
                        , has a diverse community and a{" "}
                        <strong className="font-semibold text-[#10284B]">
                          low student-teacher ratio
                        </strong>
                        . The essential spirit of SSIS is to provide a
                        supportive atmosphere which challenges students to
                        excel.
                      </p>
                      <p>
                        SSIS offers a global and comprehensive study that
                        nourishes students with skills necessary for good,
                        life-long work habits. We believe in education that
                        stimulates{" "}
                        <span className="font-semibold text-[#B87318]">
                          intellectual curiosity, critical thinking and problem
                          solving
                        </span>{" "}
                        and allows students to be continually challenged at an
                        appropriate level. The curriculum is structured in a way
                        that enables students to become independent,
                        well-balanced, active and caring members of society.
                      </p>
                    </div>
                  </MobileExpandable>
                </div>

                <div className="mt-7 flex flex-wrap gap-4">
                  <Link href="/academics" className="btn-primary">
                    Explore Academics & Facilities <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Section 2: Our Purpose — Complementary Vision & Mission + 4 Value Cards */}
      <section
        id="our-vision"
        className="scroll-mt-36 section-space bg-[#F5F7FA]"
      >
        <div className="section-container">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Our Purpose"
              title="Our Vision &"
              titleHighlight="Our Mission"
              description="We stress the total development of each child: spiritual, moral, intellectual, social, emotional, and physical."
            />
          </RevealOnScroll>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-stretch">
            {/* Vision Card — Deep Navy Editorial Identity */}
            <RevealOnScroll className="h-full">
              <article className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0B1E3B] via-[#10284B] to-[#0D2140] p-6 text-white shadow-[0_20px_50px_rgba(16,40,75,0.2)] transition-transform duration-300 hover:-translate-y-1 sm:p-10">
                <div
                  className="animated-dots absolute inset-0 opacity-20"
                  aria-hidden="true"
                />
                <div
                  className="ambient-orb-gold pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#E9A53B] blur-3xl"
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E5A23C]/20 text-[#F0B95F] ring-1 ring-[#F0B95F]/35">
                      <Compass size={23} />
                    </span>
                    <span className="rounded-full border border-[#F0B95F]/35 bg-white/[.06] px-3.5 py-1 text-xs font-bold uppercase tracking-[.18em] text-[#F0B95F]">
                      Our Vision
                    </span>
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-bold leading-snug text-[#F0B95F] sm:text-3xl">
                    “{SITE_CONFIG.aboutVisionHeadline}”
                  </h3>
                  <blockquote className="mt-4 border-l-2 border-[#F0B95F] pl-4 font-serif text-base italic leading-7 text-white/95 sm:text-lg">
                    “{SITE_CONFIG.vision}”
                  </blockquote>
                  <MobileExpandable
                    variant="dark"
                    labelMore="Read Full Vision"
                    labelLess="Read Less"
                  >
                    <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                      {SITE_CONFIG.aboutVisionText}
                    </p>
                  </MobileExpandable>
                </div>
              </article>
            </RevealOnScroll>

            {/* Mission Card — Warm Ivory & Gold Contrast Identity */}
            <RevealOnScroll delayMs={110} className="h-full">
              <article className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-[#E5A23C]/40 bg-gradient-to-br from-white via-[#FFFDF8] to-[#FFF6E6] p-6 text-[#142C55] shadow-[0_18px_45px_rgba(16,40,75,0.08)] transition-transform duration-300 hover:-translate-y-1 sm:p-10">
                <div
                  className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#10284B] via-[#E5A23C] to-[#F0B95F]"
                  aria-hidden="true"
                />
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10284B] text-[#F0B95F] shadow-sm">
                      <Flame size={23} />
                    </span>
                    <span className="rounded-full border border-[#E5A23C]/40 bg-[#FFF7E8] px-3.5 py-1 text-xs font-bold uppercase tracking-[.18em] text-[#A96812]">
                      Our Mission
                    </span>
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-bold leading-snug text-[#10284B] sm:text-3xl">
                    “{SITE_CONFIG.aboutMissionHeadline}”
                  </h3>
                  <blockquote className="mt-4 border-l-2 border-[#B87318] pl-4 font-serif text-base italic leading-7 text-[#142C55]/90 sm:text-lg">
                    “{SITE_CONFIG.mission}”
                  </blockquote>
                  <MobileExpandable
                    labelMore="Read Full Mission"
                    labelLess="Read Less"
                  >
                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                      {SITE_CONFIG.aboutMissionText}
                    </p>
                  </MobileExpandable>
                </div>

                <div className="mt-7 rounded-2xl border border-[#E5A23C]/30 bg-white/85 p-5">
                  <p className="text-xs font-bold uppercase tracking-[.16em] text-[#A96812]">
                    Six Dimensions of Total Development
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {growthPillarPills}
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          </div>

          <div
            id="our-values"
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {valueCards}
          </div>
        </div>
      </section>

      {/* Section 3: Leadership Messages (Director's Message & Principal's Message) */}
      <section
        id="directors-message"
        className="scroll-mt-36 section-space bg-white"
      >
        <div className="section-container">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Guiding Voices"
              title="Messages from Our"
              titleHighlight="Leadership"
              description="Rooted in the educational mission of Shree Swaminarayan Vishvamangal Gurukul Trust and committed to every student's future."
            />
          </RevealOnScroll>

          <div className="mt-11 grid gap-7 lg:grid-cols-2 lg:items-stretch">
            {/* Director's Message Card */}
            <RevealOnScroll className="h-full">
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200/90 bg-gradient-to-b from-white to-[#F9FBFE] p-6 shadow-[0_14px_40px_rgba(16,40,75,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e4b669] hover:shadow-[0_22px_50px_rgba(16,40,75,0.1)] sm:p-9">
                <div
                  className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#10284B] via-[#E5A23C] to-transparent"
                  aria-hidden="true"
                />

                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-slate-200/70 pb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 border-[#E5A23C]/40 bg-white p-2 shadow-sm">
                        <Image
                          src={SITE_IMAGES.logo}
                          alt="SSIS Ranip Trust Emblem"
                          width={52}
                          height={46}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <span className="inline-block rounded-full bg-[#FFF7E8] px-3 py-0.5 text-[11px] font-bold uppercase tracking-[.15em] text-[#A96812]">
                          {DIRECTORS_MESSAGE.subtitle}
                        </span>
                        <h3 className="mt-1.5 font-serif text-2xl font-semibold text-[#10284B]">
                          {DIRECTORS_MESSAGE.title}
                        </h3>
                      </div>
                    </div>
                    <Quote
                      size={28}
                      className="hidden shrink-0 text-[#E5A23C]/35 sm:block"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="mt-6 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                    <MobileExpandable
                      labelMore="Read Full Message"
                      labelLess="Read Less"
                      preview={
                        <p>
                          Located on a{" "}
                          <strong className="font-semibold text-[#10284B]">
                            2-acre campus in Ranip
                          </strong>
                          , in the heart of city Ahmedabad, SSIS (Shree
                          Swaminarayan International School) Ranip (
                          <span className="font-semibold text-[#B87318]">
                            Established in 2012
                          </span>
                          ) is yet another initiative to blend{" "}
                          <strong className="font-semibold text-[#10284B]">
                            India’s rich cultural and spiritual heritage
                          </strong>{" "}
                          with contemporary education pedagogies and
                          technologies of the west, to offer holistic secondary
                          and Higher Secondary education.
                        </p>
                      }
                    >
                      <div className="mt-4 space-y-4">
                        <p>
                          SSIS is a constituent institution of{" "}
                          <span className="font-semibold text-[#B87318]">
                            Shree Swaminarayan Vishvamangal Gurukul Trust of
                            Saij, Kalol village in Gandhinagar district
                            established in 1992
                          </span>
                          . The trust is completely devoted to the noble cause
                          of spreading education in the region.
                        </p>
                        <p>
                          The trust also runs several other premier institutions
                          including B.Ed College, PTC College, Pharmacy College,
                          Diploma & Degree Engineering, PG in Engineering, PSM
                          Hospital, Physiotherapy College, and Ayurvedic College
                          & Hospital.
                        </p>
                      </div>
                    </MobileExpandable>
                  </div>
                </div>

                <div className="mt-7 border-t border-slate-200/70 pt-5">
                  <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#A96812]">
                    Sister Institutes under the Gurukul Trust
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {sisterInstituteBadges}
                  </div>
                </div>
              </article>
            </RevealOnScroll>

            {/* Principal's Message Card */}
            <RevealOnScroll delayMs={120} className="h-full">
              <article
                id="principals-message"
                className="scroll-mt-36 group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200/90 bg-gradient-to-b from-[#FFFDF9] to-[#F7F9FC] p-6 shadow-[0_14px_40px_rgba(16,40,75,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e4b669] hover:shadow-[0_22px_50px_rgba(16,40,75,0.1)] sm:p-9"
              >
                <div
                  className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#E5A23C] via-[#10284B] to-transparent"
                  aria-hidden="true"
                />

                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-slate-200/70 pb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 border-[#10284B]/20 bg-[#10284B] p-2 shadow-sm">
                        <Image
                          src={SITE_IMAGES.logo}
                          alt="SSIS Ranip Principal Desk Emblem"
                          width={52}
                          height={46}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <span className="inline-block rounded-full bg-[#10284B] px-3 py-0.5 text-[11px] font-bold uppercase tracking-[.15em] text-[#F0B95F]">
                          From the Principal&apos;s Desk
                        </span>
                        <h3 className="mt-1.5 font-serif text-2xl font-semibold text-[#10284B]">
                          Principal’s Message
                        </h3>
                      </div>
                    </div>
                    <Quote
                      size={28}
                      className="hidden shrink-0 text-[#10284B]/20 sm:block"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="mt-6 text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                    <MobileExpandable
                      labelMore="Read Full Message"
                      labelLess="Read Less"
                      preview={
                        <p>
                          Welcome to the world of SSIS where education means{" "}
                          <strong className="font-semibold text-[#10284B]">
                            all-round development of the child
                          </strong>
                          . We don’t only teach,{" "}
                          <span className="font-semibold text-[#B87318]">
                            we groom the personality of children
                          </span>
                          .{" "}
                          <strong className="font-semibold text-[#10284B]">
                            No false commitments, we give what we say.
                          </strong>{" "}
                          We give a lot of importance to making{" "}
                          <span className="font-semibold text-[#B87318]">
                            discipline a core value
                          </span>
                          , encouraging students to develop a sense of
                          responsibility through a well-planned academic
                          schedule.
                        </p>
                      }
                    >
                      <p className="mt-4">
                        The school has a{" "}
                        <strong className="font-semibold text-[#10284B]">
                          well-planned curriculum
                        </strong>{" "}
                        so that co-curricular activities are also given due
                        importance. Finally, I want to assure you that the
                        Management and our team of experienced teachers are
                        doing their best to give your child the{" "}
                        <span className="font-semibold text-[#B87318]">
                          required edge to make his/her mark in this global
                          world
                        </span>
                        .
                      </p>
                    </MobileExpandable>
                  </div>
                </div>

                <div className="mt-7 rounded-2xl border border-[#E5A23C]/30 bg-white p-5">
                  <p className="font-serif text-base italic text-[#10284B]">
                    “No false commitments, we give what we say — preparing every
                    learner with discipline, responsibility, and global
                    confidence.”
                  </p>
                </div>
              </article>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Section 4: Faculty and Staff */}
      <section
        id="faculty-and-staff"
        className="scroll-mt-36 section-space bg-[#F5F7FA]"
      >
        <div className="section-container">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Well Qualified Teachers"
              title="Faculty &"
              titleHighlight="Staff"
              description="Our dedicated team of experienced and qualified educators across English Medium and Gujarati Medium streams."
            />
          </RevealOnScroll>

          <div className="mt-10 space-y-8">
            <RevealOnScroll>
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xs">
                <div className="flex items-center gap-3 border-b border-slate-200 bg-[#10284B] px-6 py-4 text-white">
                  <GraduationCap size={20} className="text-[#F0B95F]" />
                  <h3 className="font-serif text-xl font-semibold">
                    Teachers Staff — English Medium
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-600">
                        <th className="px-5 py-3.5">Sr. No</th>
                        <th className="px-5 py-3.5">Teaching Subject</th>
                        <th className="px-5 py-3.5">Qualification</th>
                        <th className="px-5 py-3.5">Teacher&apos;s Post</th>
                      </tr>
                    </thead>
                    <tbody>{englishFacultyRows}</tbody>
                  </table>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delayMs={100}>
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xs">
                <div className="flex items-center gap-3 border-b border-slate-200 bg-[#10284B] px-6 py-4 text-white">
                  <Users size={20} className="text-[#F0B95F]" />
                  <h3 className="font-serif text-xl font-semibold">
                    Teachers Staff — Gujarati Medium
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-600">
                        <th className="px-5 py-3.5">Sr. No</th>
                        <th className="px-5 py-3.5">Teaching Subject</th>
                        <th className="px-5 py-3.5">Qualification</th>
                        <th className="px-5 py-3.5">Teacher&apos;s Post</th>
                      </tr>
                    </thead>
                    <tbody>{gujaratiFacultyRows}</tbody>
                  </table>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-16 sm:py-20">
        <RevealOnScroll>
          <div className="section-container text-center">
            <h2 className="section-title mx-auto">
              Ready to get to{" "}
              <span className="text-[#B87318]">know us?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
              Visit our 2-acre campus in Ranip or speak with our admissions team
              to learn more about SSIS.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Talk to our team <ArrowRight size={17} />
              </Link>
              <a
                href={SITE_CONFIG.admissionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Online Admission Form <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
