import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  Bus,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Microscope,
  Monitor,
  Music2,
  Palette,
  Phone,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";
import {
  ACADEMIC_WINGS,
  FACILITIES,
  GALLERY_IMAGES,
  SCHOOL_NEWS,
  SITE_CONFIG,
  SPORTS_DATA,
} from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

const learningPillars = [
  {
    icon: BookOpen,
    title: "All-Round Development",
    description:
      "We believe that a happy child is a successful one. We don't only teach—we groom the personality of children in a welcoming, safe, and air-conditioned learning environment.",
  },
  {
    icon: HeartHandshake,
    title: "Sanskars & Discipline",
    description:
      "Blending India's rich cultural and spiritual heritage with contemporary education. Discipline and responsibility are nurtured as core values through a well-planned schedule.",
  },
  {
    icon: Sparkles,
    title: "Teach, Inspire & Transform",
    description:
      "Total development of each child—spiritual, moral, intellectual, social, emotional, and physical—supported by teachers with up to 30 years of experience.",
  },
];

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

const galleryImages = GALLERY_IMAGES.slice(0, 4);
const featuredNews = SCHOOL_NEWS.slice(0, 3);
const topStars = SPORTS_DATA.shiningStars.slice(0, 4);
const phoneLinks = SITE_CONFIG.phones.map((phone) => ({
  phone,
  href: `tel:${phone}`,
}));
const mapHref = `https://maps.google.com/?q=${encodeURIComponent(
  SITE_CONFIG.address
)}`;

const primaryPhoneHref = `tel:${SITE_CONFIG.primaryPhone}`;

export default function HomeSections() {
  const pillarCards = learningPillars.map(
    ({ icon: Icon, title, description }, index) => (
      <article key={title} className="feature-card group">
        <div className="icon-tile">
          <Icon size={23} strokeWidth={1.8} />
        </div>
        <p className="mt-7 text-xs font-bold uppercase tracking-[.18em] text-[#AD711E]">
          0{index + 1}
        </p>
        <h3 className="mt-2 font-serif text-2xl font-semibold text-[#142C55]">
          {title}
        </h3>
        <p className="mt-3 leading-7 text-slate-600">{description}</p>
        <div className="mt-6 h-px w-12 bg-[#E7AC4E] transition-all group-hover:w-20" />
      </article>
    )
  );

  const wingCards = ACADEMIC_WINGS.map((wing) => (
    <div
      key={wing.level}
      className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition hover:-translate-y-1 hover:border-[#e7c48f] hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[.15em] text-[#A96812]">
          <GraduationCap size={15} />
          {wing.ageGroup}
        </span>
      </div>
      <h3 className="mt-2 font-serif text-lg font-semibold text-[#142C55]">
        {wing.level}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{wing.details}</p>
    </div>
  ));

  const facilityTiles = FACILITIES.slice(0, 8).map((facility, index) => {
    const Icon = facilityIcons[index % facilityIcons.length];
    return (
      <div key={facility.name} className="facility-tile">
        <Icon size={22} strokeWidth={1.7} />
        <span>{facility.name}</span>
      </div>
    );
  });

  const newsCards = featuredNews.map((item) => (
    <article key={item.title} className="feature-card flex flex-col justify-between">
      <div>
        <p className="eyebrow">{item.date}</p>
        <h3 className="mt-3 font-serif text-xl font-semibold text-[#142C55]">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          {item.description}
        </p>
      </div>
      <Link href="/academics#news" className="text-link mt-6">
        Read more <ArrowRight size={15} />
      </Link>
    </article>
  ));

  const starBadges = topStars.map((star) => (
    <div
      key={star.name}
      className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs"
    >
      <span className="icon-tile shrink-0">
        <Award size={19} />
      </span>
      <div>
        <p className="font-serif text-base font-semibold text-[#142C55]">
          {star.name}
        </p>
        <p className="text-xs font-semibold text-[#A96812]">{star.sport}</p>
        <p className="mt-0.5 text-xs text-slate-500">{star.level}</p>
      </div>
    </div>
  ));

  const galleryTiles = galleryImages.map((photo, index) => (
    <Link
      href="/gallery"
      key={photo.src}
      className={`gallery-card ${index === 1 ? "sm:translate-y-6" : ""}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover"
      />
      <span className="gallery-caption">{photo.category}</span>
    </Link>
  ));

  const contactLinks = phoneLinks.map(({ phone, href }) => (
    <a
      key={phone}
      href={href}
      className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 font-semibold text-[#142C55] shadow-sm transition hover:shadow-md"
    >
      <Phone size={17} className="text-[#B87318]" />
      {phone}
    </a>
  ));

  return (
    <>
      {/* Quick Highlights Bar */}
      <section
        className="relative z-10 -mt-8 px-4 sm:px-6 lg:px-8"
        aria-label="School at a glance"
      >
        <div className="mx-auto grid max-w-6xl gap-3 rounded-3xl border border-slate-100 bg-white p-4 shadow-[0_24px_70px_rgba(18,45,86,.12)] sm:grid-cols-2 lg:grid-cols-4 sm:p-6">
          <div className="rounded-2xl bg-[#F7F9FC] p-5">
            <p className="eyebrow">Established 2012</p>
            <p className="mt-2 font-semibold text-[#142C55]">
              2-Acre Serene AC Campus in Ranip
            </p>
          </div>
          <div className="rounded-2xl bg-[#F7F9FC] p-5">
            <p className="eyebrow">3,000+ Students</p>
            <p className="mt-2 font-semibold text-[#142C55]">
              Pre-Primary to 12th (Sci & Com)
            </p>
          </div>
          <div className="rounded-2xl bg-[#F7F9FC] p-5">
            <p className="eyebrow">Gurukul Heritage</p>
            <p className="mt-2 font-semibold text-[#142C55]">
              Shree Swaminarayan Trust (Est. 1992)
            </p>
          </div>
          <a
            href={SITE_CONFIG.admissionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl bg-[#F5A623] p-5 font-semibold text-[#142C55] transition hover:bg-[#ffc45f]"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#142C55]/80">
                Admissions Open
              </p>
              <span className="mt-1 block text-base font-bold">
                Apply Online Now
              </span>
            </div>
            <ArrowRight
              size={19}
              className="transition group-hover:translate-x-1"
            />
          </a>
        </div>
      </section>

      {/* About Story Section */}
      <section
        className="section-space bg-white"
        aria-labelledby="story-heading"
      >
        <div className="section-container grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="image-frame aspect-[4/3] rounded-[2rem] shadow-[0_24px_60px_rgba(18,45,86,.16)]">
              <Image
                src="/bg-kids2-min-1.jpg"
                alt="Students learning and growing together at SSIS Ranip"
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 right-4 max-w-[270px] rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur sm:-right-5 sm:p-5">
              <p className="font-serif text-base font-semibold leading-snug text-[#142C55]">
                “We believe that a happy child is a successful one.”
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[.14em] text-[#A96812]">
                SSIS Ranip Philosophy
              </p>
            </div>
          </div>
          <div className="pt-4 lg:pt-0">
            <p className="eyebrow">About Shree Swaminarayan International School</p>
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
        </div>
      </section>

      {/* Core Pillars + Academic Wings */}
      <section
        className="section-space bg-[#F5F7FA]"
        aria-labelledby="pillars-heading"
      >
        <div className="section-container">
          <SectionHeading
            eyebrow="The SSIS Experience"
            title="Where knowledge and values grow together"
            description="Our curriculum is structured so that students become independent, well-balanced, active, and caring members of society."
            id="pillars-heading"
          />
          <div className="mt-11 grid gap-5 md:grid-cols-3">{pillarCards}</div>

          <div className="mt-14">
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
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {wingCards}
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Prayer Section (Dark Animated Navy) */}
      <section
        className="relative overflow-hidden bg-[#10284B] py-20 text-white sm:py-24"
        aria-labelledby="values-heading"
      >
        <div
          className="animated-dots absolute inset-0 opacity-20"
          aria-hidden="true"
        />
        <div
          className="absolute -right-28 -top-36 h-96 w-96 rounded-full bg-[#E9A53B]/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#168f53]/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="section-container relative">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
            <div>
              <p className="eyebrow eyebrow-light">Our Guiding Principles</p>
              <h2
                id="values-heading"
                className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl"
              >
                A good education shapes{" "}
                <span className="text-[#F0B95F]">who we become.</span>
              </h2>
              <p className="mt-4 leading-7 text-white/75">
                Constituent institution of Shree Swaminarayan Vishvamangal
                Gurukul Trust, Saij, Kalol — blending spiritual Sanskars with
                modern academic excellence.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <blockquote className="rounded-3xl border border-white/10 bg-white/[.06] p-6 sm:p-8">
                <p className="text-sm font-bold uppercase tracking-[.16em] text-[#F0B95F]">
                  Vision
                </p>
                <p className="mt-4 font-serif text-xl leading-8 text-white/95">
                  “{SITE_CONFIG.vision}”
                </p>
              </blockquote>
              <blockquote className="rounded-3xl border border-white/10 bg-white/[.06] p-6 sm:p-8">
                <p className="text-sm font-bold uppercase tracking-[.16em] text-[#F0B95F]">
                  Mission
                </p>
                <p className="mt-4 font-serif text-xl leading-8 text-white/95">
                  “{SITE_CONFIG.mission}”
                </p>
              </blockquote>
            </div>
          </div>

          {/* Prayer Quote Banner from Homepage */}
          <div className="mt-10 rounded-3xl border border-[#F0B95F]/30 bg-white/[.05] p-6 text-center sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#F0B95F]">
              Daily Reflection & Prayer
            </p>
            <p className="mx-auto mt-3 max-w-3xl font-serif text-xl italic leading-relaxed text-white sm:text-2xl">
              “{SITE_CONFIG.prayerQuote}”
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section
        className="section-space bg-white"
        aria-labelledby="facilities-heading"
      >
        <div className="section-container grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow">2-Acre Campus Infrastructure</p>
            <h2 id="facilities-heading" className="section-title mt-4">
              Thoughtfully designed for{" "}
              <span className="text-[#B87318]">vibrant learning.</span>
            </h2>
            <p className="mt-5 max-w-lg leading-8 text-slate-600">
              From fully air-conditioned smart classrooms with interactive
              Promethean boards to specialized science labs, three playgrounds,
              a wall-sized projector auditorium, soundproof music studio, and
              CCTV-monitored bus transport.
            </p>
            <Link href="/academics#facilities" className="text-link mt-7">
              Explore all 14 campus facilities <ArrowRight size={17} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {facilityTiles}
          </div>
        </div>
      </section>

      {/* Sports & Shining Stars Preview */}
      <section
        className="bg-[#F5F7FA] py-16 sm:py-20"
        aria-labelledby="community-heading"
      >
        <div className="section-container grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
          <div className="image-frame aspect-[16/10] rounded-[2rem] shadow-xl">
            <Image
              src="/result-bg.webp"
              alt="Students gathered together at SSIS Ranip"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Hall of Fame & Sports</p>
            <h2 id="community-heading" className="section-title mt-3">
              Shining Stars of <span className="text-[#B87318]">SSIS Ranip.</span>
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
            <div className="mt-6 grid gap-3 sm:grid-cols-2">{starBadges}</div>
            <div className="mt-7 flex flex-wrap gap-5">
              <Link href="/gallery#sports" className="text-link">
                View Sports Achievements <ArrowRight size={17} />
              </Link>
              <Link href="/gallery#events" className="text-link">
                26 Annual Celebrations <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* School News & Celebrations */}
      <section className="section-space bg-white" aria-labelledby="news-heading">
        <div className="section-container">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Campus Updates</p>
              <h2 id="news-heading" className="section-title mt-3">
                School News & <span className="text-[#B87318]">Highlights</span>
              </h2>
            </div>
            <Link href="/academics#news" className="text-link">
              View all school news <ArrowRight size={17} />
            </Link>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">{newsCards}</div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section
        className="section-space bg-[#F5F7FA]"
        aria-labelledby="gallery-heading"
      >
        <div className="section-container">
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
          <div className="mt-9 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {galleryTiles}
          </div>
        </div>
      </section>

      {/* Rolling Admissions & Contact Section */}
      <section
        className="section-space bg-white"
        aria-labelledby="visit-heading"
      >
        <div className="section-container grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <div className="rounded-[2rem] bg-[#F4F6F9] p-7 sm:p-10">
            <p className="eyebrow">Rolling Admissions Now Open</p>
            <h2 id="visit-heading" className="section-title mt-4">
              Get in touch with us to{" "}
              <span className="text-[#B87318]">discuss it.</span>
            </h2>
            <p className="mt-4 max-w-xl leading-8 text-slate-600">
              Whether you are from any part of Ahmedabad, Gujarat, or elsewhere
              in India, we aim to help your child make the best of the
              educational opportunities at SSIS Ranip.
            </p>
            <div className="mt-7 grid gap-2 sm:grid-cols-2">{contactLinks}</div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={SITE_CONFIG.admissionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center"
              >
                Online Admission Inquiry <ArrowRight size={17} />
              </a>
              <a
                href={primaryPhoneHref}
                className="btn-outline justify-center"
              >
                Call {SITE_CONFIG.primaryPhone}
              </a>
            </div>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] bg-[#10284B] p-7 text-white sm:p-10">
            <div
              className="animated-dots absolute inset-0 opacity-20"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-[#E9A53B]/15 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative flex h-full min-h-[260px] flex-col justify-between">
              <div>
                <span className="icon-tile icon-tile-gold">
                  <MapPin size={22} />
                </span>
                <h3 className="mt-6 font-serif text-2xl font-semibold">
                  Visit SSIS Ranip Campus
                </h3>
                <p className="mt-3 max-w-sm leading-7 text-white/75">
                  {SITE_CONFIG.address}
                </p>
                <p className="mt-3 text-sm text-[#F0B95F]">
                  Landline: {SITE_CONFIG.landline} · Email: {SITE_CONFIG.email}
                </p>
              </div>
              <a
                href={mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#F0B95F] hover:text-[#F0B95F]"
              >
                Open Google Maps Directions <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
