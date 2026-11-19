import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  Bus,
  Compass,
  Flame,
  GraduationCap,
  HeartHandshake,
  Microscope,
  Monitor,
  Music2,
  Palette,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";
import {
  ACADEMIC_WINGS,
  FACILITIES,
  SITE_CONFIG,
  SITE_IMAGES,
  SPORTS_DATA,
} from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ExperienceCards from "@/components/home/ExperienceCards";
import NewsCards from "@/components/home/NewsCards";
import LifeAtSsisGallery from "@/components/home/LifeAtSsisGallery";
import AdmissionsContactCard from "@/components/home/AdmissionsContactCard";
import CampusLocationCard from "@/components/ui/CampusLocationCard";

const facilityIcons = [
  Building2,
  Monitor,
  Sparkles,
  Microscope,
  Monitor,
  BookOpen,
  Trophy,
  Palette,
  Music2,
  HeartHandshake,
  Bus,
  ShieldCheck,
];

const topStars = SPORTS_DATA.shiningStars.slice(0, 4);

export default function HomeSections() {
  const wingCards = ACADEMIC_WINGS.map((wing, index) => {
    const delayMs = index * 70;
    return (
      <RevealOnScroll key={wing.level} delayMs={delayMs} className="h-full">
        <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#e4b669] hover:shadow-md">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[.14em] text-[#A96812]">
              <GraduationCap size={15} />
              {wing.ageGroup}
            </span>
            <h3 className="mt-2 font-serif text-lg font-semibold text-[#142C55]">
              {wing.level}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {wing.details}
            </p>
          </div>
        </div>
      </RevealOnScroll>
    );
  });

  const facilityTiles = FACILITIES.slice(0, 8).map((facility, index) => {
    const Icon = facilityIcons[index % facilityIcons.length];
    const delayMs = (index % 4) * 70;
    return (
      <RevealOnScroll key={facility.name} delayMs={delayMs}>
        <div className="facility-tile group">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8F0E3] text-[#A96812] transition-colors duration-300 group-hover:bg-[#10284B] group-hover:text-[#F0B95F]">
            <Icon size={20} strokeWidth={1.8} />
          </span>
          <span>{facility.name}</span>
        </div>
      </RevealOnScroll>
    );
  });

  const starBadges = topStars.map((star, index) => {
    const delayMs = index * 80;
    return (
      <RevealOnScroll key={star.name} delayMs={delayMs}>
        <div className="group flex items-start gap-3.5 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#e4b669] hover:shadow-md">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF6E5] text-[#B87318] transition-colors duration-300 group-hover:bg-[#10284B] group-hover:text-[#F0B95F]">
            <Award size={20} />
          </span>
          <div className="min-w-0">
            <p className="font-serif text-base font-semibold text-[#142C55]">
              {star.name}
            </p>
            <p className="mt-0.5 text-xs font-semibold text-[#A96812]">
              {star.sport}
            </p>
            <span className="mt-1.5 inline-block rounded-full bg-[#F5F7FA] px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
              {star.level}
            </span>
          </div>
        </div>
      </RevealOnScroll>
    );
  });

  return (
    <>
      {/* Clean Transition Bridge: Hero -> School Highlights -> About */}
      <section
        className="relative z-10 border-b border-slate-100 bg-gradient-to-b from-[#EFF3F9] via-[#F7F9FC] to-white py-6 sm:py-9"
        aria-label="School at a glance"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="grid gap-3 rounded-[1.75rem] border border-slate-200/80 bg-white p-3.5 shadow-[0_18px_50px_rgba(16,40,75,0.08)] sm:grid-cols-2 sm:p-5 lg:grid-cols-4">
              <div className="group flex min-w-0 items-start gap-3.5 rounded-2xl border border-slate-100 bg-[#F8FAFC] p-4 transition-all duration-300 hover:border-[#E5A23C]/40 hover:bg-[#FFFBF4]">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF6E5] text-[#B87318] transition-colors duration-300 group-hover:bg-[#10284B] group-hover:text-[#F0B95F]">
                  <Building2 size={18} />
                </span>
                <div className="min-w-0">
                  <p className="eyebrow">Established 2012</p>
                  <p className="mt-1 text-sm font-semibold leading-snug text-[#142C55]">
                    2-Acre Serene AC Campus in Ranip
                  </p>
                </div>
              </div>

              <div className="group flex min-w-0 items-start gap-3.5 rounded-2xl border border-slate-100 bg-[#F8FAFC] p-4 transition-all duration-300 hover:border-[#E5A23C]/40 hover:bg-[#FFFBF4]">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF6E5] text-[#B87318] transition-colors duration-300 group-hover:bg-[#10284B] group-hover:text-[#F0B95F]">
                  <GraduationCap size={18} />
                </span>
                <div className="min-w-0">
                  <p className="eyebrow">3,000+ Students</p>
                  <p className="mt-1 text-sm font-semibold leading-snug text-[#142C55]">
                    Pre-Primary to 12th (Sci & Com)
                  </p>
                </div>
              </div>

              <div className="group flex min-w-0 items-start gap-3.5 rounded-2xl border border-slate-100 bg-[#F8FAFC] p-4 transition-all duration-300 hover:border-[#E5A23C]/40 hover:bg-[#FFFBF4]">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF6E5] text-[#B87318] transition-colors duration-300 group-hover:bg-[#10284B] group-hover:text-[#F0B95F]">
                  <Sparkles size={18} />
                </span>
                <div className="min-w-0">
                  <p className="eyebrow">Gurukul Heritage</p>
                  <p className="mt-1 text-sm font-semibold leading-snug text-[#142C55]">
                    Shree Swaminarayan Trust (Est. 1992)
                  </p>
                </div>
              </div>

              <a
                href={SITE_CONFIG.admissionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-0 items-center justify-between gap-2 rounded-2xl bg-gradient-to-br from-[#F5A623] to-[#E4961B] p-4 font-semibold text-[#10284B] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#10284B]/80">
                    Admissions Open
                  </p>
                  <span className="mt-1 block text-base font-bold">
                    Apply Online Now
                  </span>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#10284B]/10 transition group-hover:translate-x-0.5 group-hover:bg-[#10284B] group-hover:text-[#F0B95F]">
                  <ArrowRight size={17} />
                </span>
              </a>
            </div>
          </RevealOnScroll>
        </div>

        {/* Subtle visual connector accent leading into About */}
        <div
          className="mx-auto mt-6 flex items-center justify-center gap-3 px-4"
          aria-hidden="true"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#E5A23C]/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#E5A23C]" />
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#E5A23C]/50" />
        </div>
      </section>

      {/* About & Image-with-Content Section */}
      <section
        className="section-space bg-white"
        aria-labelledby="story-heading"
      >
        <div className="section-container grid items-center gap-10 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
          <RevealOnScroll variant="image">
            <div className="relative mx-auto w-full max-w-[560px] pb-2 sm:pb-6">
              {/* Subtle layered editorial depth frame behind photo */}
              <div
                className="pointer-events-none absolute -inset-2 hidden rounded-[2.25rem] border border-[#E5A23C]/25 bg-[#FDF6EA]/60 sm:block translate-x-3 translate-y-3 rotate-[1.5deg]"
                aria-hidden="true"
              />
              <div className="image-frame relative aspect-[4/3] rounded-[2rem] shadow-[0_24px_60px_rgba(18,45,86,.16)]">
                <Image
                  src={SITE_IMAGES.homeAboutPhoto}
                  alt="Students learning and growing together at SSIS Ranip"
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
              <div className="relative z-10 mt-3 rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-lg backdrop-blur sm:absolute sm:-bottom-4 sm:right-4 sm:mt-0 sm:max-w-[280px] sm:p-5">
                <p className="font-serif text-base font-semibold leading-snug text-[#142C55]">
                  “We believe that a happy child is a successful one.”
                </p>
                <p className="mt-1.5 text-xs font-semibold uppercase tracking-[.14em] text-[#A96812]">
                  SSIS Ranip Philosophy
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delayMs={120}>
            <div className="pt-4 lg:pt-0">
              <p className="eyebrow">
                About Shree Swaminarayan International School
              </p>
              <h2 id="story-heading" className="section-title mt-4">
                A strong beginning for{" "}
                <span className="text-[#B87318]">every kind of future.</span>
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                Welcome to{" "}
                <strong className="font-semibold text-[#142C55]">
                  Shree Swaminarayan International School (SSIS)
                </strong>
                . Located in a serene 2-acre environment in the Ranip area of
                Ahmedabad, SSIS has earned its name with a strength of{" "}
                <strong className="font-semibold text-[#142C55]">
                  3,000+ students
                </strong>
                , commanding all the facilities and air-conditioned amenities
                necessary for top-class education.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                As a Government-recognised co-educational school offering{" "}
                <strong className="font-semibold text-[#142C55]">
                  Pre-Primary (3–5 yrs), Primary (6–13 yrs), and Secondary & Sr.
                  Secondary (14–17 yrs)
                </strong>{" "}
                in both English and Gujarati mediums, we stimulate intellectual
                curiosity, critical thinking, and strong moral character.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <Link href="/about-us" className="btn-primary">
                  Read Our Full Story <ArrowRight size={17} />
                </Link>
                <Link href="/about-us#directors-message" className="text-link">
                  Leadership Messages <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* The SSIS Experience + Academic Wings */}
      <section
        className="section-space bg-[#F5F7FA]"
        aria-labelledby="pillars-heading"
      >
        <div className="section-container">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="The SSIS Experience"
              title="Where knowledge and values grow together"
              description="Our curriculum is structured so that students become independent, well-balanced, active, and caring members of society."
              id="pillars-heading"
            />
          </RevealOnScroll>

          {/* Enhanced Experience Cards: Desktop hover elevation + Mobile Read More/Less */}
          <ExperienceCards />

          <div className="mt-14">
            <RevealOnScroll>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="eyebrow">Academic Structure</p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-[#142C55] sm:text-3xl">
                    Programmes from Pre-Primary to Grade 12 (JEE & NEET)
                  </h3>
                </div>
                <Link href="/academics#courses" className="text-link">
                  Explore Courses & JEE/NEET <ArrowRight size={17} />
                </Link>
              </div>
            </RevealOnScroll>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {wingCards}
            </div>
          </div>
        </div>
      </section>

      {/* Our Guiding Principles — Distinct Visual Identity & Moving Ambient Glows */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#0B1E3B] via-[#10284B] to-[#0D2140] py-20 text-white sm:py-24"
        aria-labelledby="values-heading"
      >
        <div
          className="animated-dots absolute inset-0 opacity-20"
          aria-hidden="true"
        />
        <div
          className="ambient-orb-gold pointer-events-none absolute -right-24 -top-28 h-[26rem] w-[26rem] rounded-full bg-[#E9A53B] blur-3xl"
          aria-hidden="true"
        />
        <div
          className="ambient-orb-blue pointer-events-none absolute -bottom-24 -left-24 h-[22rem] w-[22rem] rounded-full bg-[#38BDF8] blur-3xl"
          aria-hidden="true"
        />

        <div className="section-container relative">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
            <RevealOnScroll>
              <div>
                <p className="eyebrow eyebrow-light">Our Guiding Principles</p>
                <h2
                  id="values-heading"
                  className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl"
                >
                  A good education shapes{" "}
                  <span className="text-[#F0B95F]">who we become.</span>
                </h2>
                <div className="mt-4 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#F0B95F] to-transparent" />
                <p className="mt-5 leading-7 text-white/75">
                  Constituent institution of Shree Swaminarayan Vishvamangal
                  Gurukul Trust, Saij, Kalol — blending spiritual Sanskars with
                  modern academic excellence.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid gap-5 sm:grid-cols-2">
              <RevealOnScroll delayMs={100} className="h-full">
                <blockquote className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-white/[.06] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F0B95F]/50 hover:bg-white/[.09] sm:p-8">
                  <div
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#F0B95F] via-[#E5A23C] to-transparent"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E5A23C]/20 text-[#F0B95F] ring-1 ring-[#F0B95F]/30 transition-transform duration-300 group-hover:scale-105">
                        <Compass size={22} />
                      </span>
                      <span className="text-xs font-bold uppercase tracking-[.2em] text-[#F0B95F]">
                        Vision
                      </span>
                    </div>
                    <p className="mt-6 font-serif text-xl leading-8 text-white/95">
                      “{SITE_CONFIG.vision}”
                    </p>
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[.15em] text-white/50">
                    Igniting Curiosity & Individual Growth
                  </p>
                </blockquote>
              </RevealOnScroll>

              <RevealOnScroll delayMs={200} className="h-full">
                <blockquote className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-white/[.06] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F0B95F]/50 hover:bg-white/[.09] sm:p-8">
                  <div
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#F0B95F] via-[#E5A23C] to-transparent"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E5A23C]/20 text-[#F0B95F] ring-1 ring-[#F0B95F]/30 transition-transform duration-300 group-hover:scale-105">
                        <Flame size={22} />
                      </span>
                      <span className="text-xs font-bold uppercase tracking-[.2em] text-[#F0B95F]">
                        Mission
                      </span>
                    </div>
                    <p className="mt-6 font-serif text-xl leading-8 text-white/95">
                      “{SITE_CONFIG.mission}”
                    </p>
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[.15em] text-white/50">
                    Prayer · Sanskars · Perseverance · Success
                  </p>
                </blockquote>
              </RevealOnScroll>
            </div>
          </div>

          {/* Elevated Daily Reflection & Prayer Banner */}
          <RevealOnScroll delayMs={150}>
            <div className="mt-10 rounded-3xl border border-[#F0B95F]/30 bg-gradient-to-r from-white/[.04] via-white/[.08] to-white/[.04] p-6 text-center backdrop-blur-md sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[.22em] text-[#F0B95F]">
                Daily Reflection & Prayer
              </p>
              <p className="mx-auto mt-3 max-w-3xl font-serif text-xl italic leading-relaxed text-white sm:text-2xl">
                “{SITE_CONFIG.prayerQuote}”
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2-Acre Campus Infrastructure */}
      <section
        className="section-space bg-white"
        aria-labelledby="facilities-heading"
      >
        <div className="section-container grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <RevealOnScroll>
            <div>
              <p className="eyebrow">2-Acre Campus Infrastructure</p>
              <h2 id="facilities-heading" className="section-title mt-4">
                Thoughtfully designed for{" "}
                <span className="text-[#B87318]">vibrant learning.</span>
              </h2>
              <p className="mt-5 max-w-lg leading-8 text-slate-600">
                From fully air-conditioned smart classrooms with interactive
                Promethean boards to specialized science labs, three
                playgrounds, a wall-sized projector auditorium, soundproof music
                studio, and CCTV-monitored bus transport.
              </p>
              <Link href="/academics#facilities" className="text-link mt-7">
                Explore all 14 campus facilities <ArrowRight size={17} />
              </Link>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4">
            {facilityTiles}
          </div>
        </div>
      </section>

      {/* Hall of Fame & Sports */}
      <section
        className="bg-[#F5F7FA] py-16 sm:py-24"
        aria-labelledby="community-heading"
      >
        <div className="section-container grid items-center gap-10 lg:grid-cols-[1.02fr_.98fr] lg:gap-14">
          <RevealOnScroll variant="image">
            <div className="relative">
              <div className="image-frame aspect-[16/10] rounded-[2rem] shadow-[0_22px_55px_rgba(16,40,75,0.14)]">
                <Image
                  src={SITE_IMAGES.homeSportsPhoto}
                  alt="Students gathered together at SSIS Ranip"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-[#142C55] shadow-xs">
                <Trophy size={15} className="text-[#B87318]" />
                <span>
                  12 Medals at Goa Skating Festival · Khel Mahakumbh Champions
                </span>
              </div>
            </div>
          </RevealOnScroll>

          <div>
            <RevealOnScroll>
              <p className="eyebrow">Hall of Fame & Sports</p>
              <h2 id="community-heading" className="section-title mt-3">
                Shining Stars of{" "}
                <span className="text-[#B87318]">SSIS Ranip.</span>
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                Our students excel at Taluka, District, State, National, and
                International levels—including winning{" "}
                <strong className="font-semibold text-[#142C55]">
                  12 medals at the Goa Skating Festival
                </strong>{" "}
                (selected for Malaysia), Khel Mahakumbh championships, and
                inter-school trophies in Volleyball, Kho-Kho, and Kabaddi.
              </p>
            </RevealOnScroll>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">{starBadges}</div>
            <RevealOnScroll delayMs={180}>
              <div className="mt-7 flex flex-wrap gap-5">
                <Link href="/gallery#sports" className="text-link">
                  View Sports Achievements <ArrowRight size={17} />
                </Link>
                <Link href="/gallery#events" className="text-link">
                  26 Annual Celebrations <ArrowRight size={17} />
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Campus Updates (School News) — Compact Mobile Cards with Read More */}
      <section className="section-space bg-white" aria-labelledby="news-heading">
        <div className="section-container">
          <RevealOnScroll>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Campus Updates</p>
                <h2 id="news-heading" className="section-title mt-3">
                  School News &{" "}
                  <span className="text-[#B87318]">Highlights</span>
                </h2>
              </div>
              <Link href="/academics#news" className="text-link">
                View all school news <ArrowRight size={17} />
              </Link>
            </div>
          </RevealOnScroll>
          <NewsCards />
        </div>
      </section>

      {/* Life at SSIS — Editorial Desktop Accordion + Mobile Swipeable Carousel */}
      <section
        className="section-space bg-[#F5F7FA]"
        aria-labelledby="gallery-heading"
      >
        <div className="section-container">
          <RevealOnScroll>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Life at SSIS</p>
                <h2 id="gallery-heading" className="section-title mt-3">
                  Small moments.{" "}
                  <span className="text-[#B87318]">Big possibilities.</span>
                </h2>
              </div>
              <Link href="/gallery" className="text-link">
                Explore Photo & Video Gallery <ArrowRight size={17} />
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll variant="image" delayMs={100}>
            <LifeAtSsisGallery />
          </RevealOnScroll>
        </div>
      </section>

      {/* Rolling Admissions & Campus Location Section */}
      <section
        className="section-space bg-white"
        aria-labelledby="visit-heading"
      >
        <div className="section-container grid gap-6 lg:grid-cols-[1.02fr_.98fr] lg:gap-8">
          <RevealOnScroll className="h-full">
            <AdmissionsContactCard />
          </RevealOnScroll>

          <RevealOnScroll delayMs={120} className="h-full">
            <CampusLocationCard />
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
