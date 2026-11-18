import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  GraduationCap,
  Heart,
  Lightbulb,
  Quote,
  ShieldCheck,
  Users,
} from "lucide-react";
import PageIntro from "@/components/ui/PageIntro";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  ABOUT_PARAGRAPHS,
  DIRECTORS_MESSAGE,
  FACULTY_LIST,
  PRINCIPALS_MESSAGE,
  SITE_CONFIG,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us, Leadership & Faculty",
  description:
    "Discover the history, vision, mission, Director's Message, Principal's Message, and qualified faculty of Shree Swaminarayan International School in Ranip, Ahmedabad.",
};

const values = [
  {
    icon: BookOpen,
    title: "Intellectual Curiosity",
    text: "We believe in education that stimulates intellectual curiosity, critical thinking, and problem solving.",
  },
  {
    icon: Heart,
    title: "Spiritual & Moral Values",
    text: "Blending India’s rich cultural and spiritual heritage with contemporary education and core discipline.",
  },
  {
    icon: Lightbulb,
    title: "Personality Grooming",
    text: "We don’t only teach, we groom the personality of children so they become confident, independent, and responsible.",
  },
  {
    icon: ShieldCheck,
    title: "Happy & Safe Campus",
    text: "A welcoming, air-conditioned, co-educational environment with a low student-teacher ratio where every achievement is celebrated.",
  },
];

const keyStats = [
  { label: "Established", value: "2012", sub: "In Ranip, Ahmedabad" },
  { label: "Trust Legacy", value: "1992", sub: "Vishvamangal Gurukul Trust" },
  { label: "Student Strength", value: "3,000+", sub: "Earned in 5 Years" },
  { label: "Campus Area", value: "2 Acres", sub: "Fully Air-Conditioned Classrooms" },
];

export default function AboutPage() {
  const statCards = keyStats.map((stat) => (
    <div
      key={stat.label}
      className="rounded-2xl border border-slate-200/80 bg-[#F7F9FC] p-5 text-center"
    >
      <p className="font-serif text-3xl font-bold text-[#10284B]">
        {stat.value}
      </p>
      <p className="mt-1 text-xs font-bold uppercase tracking-[.15em] text-[#A96812]">
        {stat.label}
      </p>
      <p className="mt-1 text-xs text-slate-500">{stat.sub}</p>
    </div>
  ));

  const storyParagraphs = ABOUT_PARAGRAPHS.map((paragraph, idx) => (
    <p key={idx} className="mt-4 leading-8 text-slate-600">
      {paragraph}
    </p>
  ));

  const valueCards = values.map(({ icon: Icon, title, text }) => (
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

  const directorParagraphs = DIRECTORS_MESSAGE.paragraphs.map((p, idx) => (
    <p key={idx} className="mt-4 leading-8 text-slate-600">
      {p}
    </p>
  ));

  const sisterInstituteBadges = DIRECTORS_MESSAGE.sisterInstitutes.map(
    (inst) => (
      <span
        key={inst}
        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-[#F7F9FC] px-4 py-2 text-xs font-semibold text-[#142C55]"
      >
        <Building2 size={14} className="text-[#B87318]" />
        {inst}
      </span>
    )
  );

  const principalParagraphs = PRINCIPALS_MESSAGE.paragraphs.map((p, idx) => (
    <p key={idx} className="mt-4 leading-8 text-slate-600">
      {p}
    </p>
  ));

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
        eyebrow="About SSIS Ranip"
        title="Where education means all-round development of the child."
        description="Welcome to Shree Swaminarayan International School (SSIS). Whether you are from any part of the city or state, or from elsewhere in India, we aim to help you make the best of educational opportunity that SSIS can offer you."
        breadcrumb="About Us"
      />

      {/* Quick Jump Sub-Navigation */}
      <div className="border-b border-slate-200 bg-white py-4">
        <div className="section-container flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm font-semibold text-[#142C55]">
          <a href="#our-story" className="hover:text-[#B87318]">
            About SSIS
          </a>
          <span className="text-slate-300">•</span>
          <a href="#our-vision" className="hover:text-[#B87318]">
            Our Vision & Mission
          </a>
          <span className="text-slate-300">•</span>
          <a href="#directors-message" className="hover:text-[#B87318]">
            Director&apos;s Message
          </a>
          <span className="text-slate-300">•</span>
          <a href="#principals-message" className="hover:text-[#B87318]">
            Principal&apos;s Message
          </a>
          <span className="text-slate-300">•</span>
          <a href="#faculty-and-staff" className="hover:text-[#B87318]">
            Faculty & Staff
          </a>
        </div>
      </div>

      {/* Section 1: About Shree Swaminarayan International School */}
      <section id="our-story" className="section-space bg-white">
        <div className="section-container">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-14">
            {statCards}
          </div>

          <div className="grid items-start gap-12 lg:grid-cols-[.95fr_1.05fr]">
            <div className="space-y-6">
              <div className="image-frame aspect-[4/3] rounded-[2rem] shadow-xl">
                <Image
                  src="/banner2.webp"
                  alt="Students taking part in school life at SSIS Ranip"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="rounded-3xl border border-slate-200 bg-[#F7F9FC] p-6">
                <p className="eyebrow">Age & Grade Structure</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li className="flex items-center justify-between border-b border-slate-200/70 pb-2.5">
                    <span className="font-semibold text-[#142C55]">
                      Pre-Primary Programme (Lower School)
                    </span>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#A96812]">
                      3 – 5 Years of Age
                    </span>
                  </li>
                  <li className="flex items-center justify-between border-b border-slate-200/70 pb-2.5">
                    <span className="font-semibold text-[#142C55]">
                      Primary School (Classes 1st to 8th)
                    </span>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#A96812]">
                      6 – 13 Years of Age
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="font-semibold text-[#142C55]">
                      Secondary & Sr. Secondary (9th to 12th)
                    </span>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#A96812]">
                      14 – 17 Years of Age
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <p className="eyebrow">Our Story & Identity</p>
              <h2 className="section-title mt-3">
                About Shree Swaminarayan{" "}
                <span className="text-[#B87318]">International School</span>
              </h2>
              <div className="mt-2">{storyParagraphs}</div>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link href="/academics" className="btn-primary">
                  Explore Academics & Facilities <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Vision & Our Mission (Full Text from About Us + Homepage) */}
      <section id="our-vision" className="section-space bg-[#F5F7FA]">
        <div className="section-container">
          <SectionHeading
            eyebrow="Our Purpose"
            title="Our Vision & Our Mission"
            description="We stress the total development of each child: spiritual, moral, intellectual, social, emotional, and physical."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* Vision Card */}
            <article className="relative overflow-hidden rounded-[2rem] bg-[#10284B] p-7 text-white sm:p-10">
              <div
                className="animated-dots absolute inset-0 opacity-20"
                aria-hidden="true"
              />
              <div
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#E9A53B]/15 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative">
                <p className="eyebrow eyebrow-light">Our Vision</p>
                <h3 className="mt-3 font-serif text-2xl font-bold text-[#F0B95F] sm:text-3xl">
                  “{SITE_CONFIG.aboutVisionHeadline}”
                </h3>
                <blockquote className="mt-4 border-l-2 border-[#F0B95F] pl-4 font-serif text-lg italic text-white/90">
                  “{SITE_CONFIG.vision}”
                </blockquote>
                <p className="mt-5 leading-8 text-white/80">
                  {SITE_CONFIG.aboutVisionText}
                </p>
              </div>
            </article>

            {/* Mission Card */}
            <article className="relative overflow-hidden rounded-[2rem] bg-[#10284B] p-7 text-white sm:p-10">
              <div
                className="animated-dots absolute inset-0 opacity-20"
                aria-hidden="true"
              />
              <div
                className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[#E9A53B]/15 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <p className="eyebrow eyebrow-light">Our Mission</p>
                  <h3 className="mt-3 font-serif text-2xl font-bold text-[#F0B95F] sm:text-3xl">
                    “{SITE_CONFIG.aboutMissionHeadline}”
                  </h3>
                  <blockquote className="mt-4 border-l-2 border-[#F0B95F] pl-4 font-serif text-lg italic text-white/90">
                    “{SITE_CONFIG.mission}”
                  </blockquote>
                  <p className="mt-5 leading-8 text-white/80">
                    {SITE_CONFIG.aboutMissionText}
                  </p>
                </div>
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/[.05] p-5">
                  <p className="text-xs font-bold uppercase tracking-[.16em] text-[#F0B95F]">
                    Core Pillars of Growth
                  </p>
                  <p className="mt-2 text-sm text-white/85">
                    Spiritual · Moral · Intellectual · Social · Emotional ·
                    Physical
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div id="our-values" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {valueCards}
          </div>
        </div>
      </section>

      {/* Section 3: Director's Message & Principal's Message */}
      <section id="directors-message" className="section-space bg-white">
        <div className="section-container space-y-12">
          {/* Director's Message */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="icon-tile">
                <Award size={22} />
              </span>
              <div>
                <p className="eyebrow">{DIRECTORS_MESSAGE.subtitle}</p>
                <h2 className="font-serif text-3xl font-semibold text-[#142C55]">
                  {DIRECTORS_MESSAGE.title}
                </h2>
              </div>
            </div>
            <div className="mt-4">{directorParagraphs}</div>

            <div className="mt-8 border-t border-slate-100 pt-6">
              <p className="text-xs font-bold uppercase tracking-[.16em] text-[#A96812]">
                Other Sister Institutes under Shree Swaminarayan Vishvamangal Gurukul Trust (Saij, Kalol):
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {sisterInstituteBadges}
              </div>
            </div>
          </div>

          {/* Principal's Message */}
          <div
            id="principals-message"
            className="rounded-[2rem] border border-slate-200 bg-[#F7F9FC] p-7 shadow-sm sm:p-12"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="icon-tile">
                <Quote size={22} />
              </span>
              <div>
                <p className="eyebrow">{PRINCIPALS_MESSAGE.subtitle}</p>
                <h2 className="font-serif text-3xl font-semibold text-[#142C55]">
                  {PRINCIPALS_MESSAGE.title}
                </h2>
              </div>
            </div>
            <div className="mt-4">{principalParagraphs}</div>
          </div>
        </div>
      </section>

      {/* Section 4: Faculty and Staff */}
      <section id="faculty-and-staff" className="section-space bg-[#F5F7FA]">
        <div className="section-container">
          <SectionHeading
            eyebrow="Well Qualified Teachers"
            title="Faculty and Staff"
            description="Our dedicated team of experienced and qualified educators across English Medium and Gujarati Medium streams."
          />

          <div className="mt-10 space-y-8">
            {/* English Medium Table */}
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

            {/* Gujarati Medium Table */}
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 sm:py-24">
        <div className="section-container text-center">
          <h2 className="section-title mx-auto">Ready to get to know us?</h2>
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
      </section>
    </>
  );
}
