import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Bus,
  HeartHandshake,
  MapPin,
  Microscope,
  Music2,
  Palette,
  Phone,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";
import { FACILITIES, GALLERY_IMAGES, SITE_CONFIG } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

const learningPillars = [
  {
    icon: BookOpen,
    title: "Learning with purpose",
    description:
      "A strong academic foundation helps students ask better questions, think clearly and grow with confidence.",
  },
  {
    icon: HeartHandshake,
    title: "Character that lasts",
    description:
      "Everyday learning is grounded in respect, responsibility and the values that help a child thrive with others.",
  },
  {
    icon: Sparkles,
    title: "Room to discover",
    description:
      "Creative, physical and collaborative experiences give students more ways to find what they love.",
  },
];

const facilityIcons = [Microscope, BookOpen, Trophy, Palette, Music2, ShieldCheck, Bus, Sparkles];
const galleryImages = GALLERY_IMAGES.slice(0, 4);
const phoneLinks = SITE_CONFIG.phones.map((phone) => ({ phone, href: `tel:${phone}` }));
const mapHref = `https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.address)}`;

export default function HomeSections() {
  const pillarCards = learningPillars.map(({ icon: Icon, title, description }, index) => (
    <article key={title} className="feature-card group">
      <div className="icon-tile"><Icon size={23} strokeWidth={1.8} /></div>
      <p className="mt-7 text-xs font-bold uppercase tracking-[.18em] text-[#AD711E]">0{index + 1}</p>
      <h3 className="mt-2 font-serif text-2xl font-semibold text-[#142C55]">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
      <div className="mt-6 h-px w-12 bg-[#E7AC4E] transition-all group-hover:w-20" />
    </article>
  ));
  const facilityTiles = FACILITIES.slice(0, 8).map((facility, index) => {
    const Icon = facilityIcons[index];
    return <div key={facility.name} className="facility-tile"><Icon size={22} strokeWidth={1.7} /><span>{facility.name}</span></div>;
  });
  const galleryTiles = galleryImages.map((photo, index) => (
    <Link href="/gallery" key={photo.src} className={`gallery-card ${index === 1 ? "sm:translate-y-6" : ""}`}>
      <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-700 group-hover:scale-105" />
      <span className="gallery-caption">{photo.category}</span>
    </Link>
  ));
  const contactLinks = phoneLinks.map(({ phone, href }) => <a key={phone} href={href} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 font-semibold text-[#142C55] shadow-sm transition hover:shadow-md"><Phone size={17} className="text-[#B87318]" />{phone}</a>);

  return (
    <>
      <section className="relative z-10 -mt-8 px-4 sm:px-6 lg:px-8" aria-label="School at a glance">
        <div className="mx-auto grid max-w-6xl gap-3 rounded-3xl border border-slate-100 bg-white p-4 shadow-[0_24px_70px_rgba(18,45,86,.12)] sm:grid-cols-3 sm:p-6">
          <div className="rounded-2xl bg-[#F7F9FC] p-5">
            <p className="eyebrow">A place to grow</p>
            <p className="mt-2 font-semibold text-[#142C55]">Knowledge, values and possibility</p>
          </div>
          <div className="rounded-2xl bg-[#F7F9FC] p-5">
            <p className="eyebrow">Rooted in Ranip</p>
            <p className="mt-2 font-semibold text-[#142C55]">A learning community in Ahmedabad</p>
          </div>
          <a href={SITE_CONFIG.admissionUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-2xl bg-[#F5A623] p-5 font-semibold text-[#142C55] transition hover:bg-[#ffc45f]">
            <span>Explore admissions</span><ArrowRight size={19} className="transition group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      <section className="section-space bg-white" aria-labelledby="story-heading">
        <div className="section-container grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="image-frame aspect-[4/3] rounded-[2rem] shadow-[0_24px_60px_rgba(18,45,86,.16)]">
              <Image src="/bg-kids2-min-1.jpg" alt="Students learning and growing together at SSIS Ranip" fill sizes="(max-width: 768px) 100vw, 560px" className="object-cover transition duration-700 hover:scale-[1.04]" />
            </div>
            <div className="absolute -bottom-5 right-4 max-w-[250px] rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur sm:-right-5 sm:p-5">
              <p className="font-serif text-lg font-semibold leading-snug text-[#142C55]">“Igniting a thirst for knowledge.”</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[.14em] text-[#A96812]">Our vision</p>
            </div>
          </div>
          <div className="pt-4 lg:pt-0">
            <p className="eyebrow">A school with heart</p>
            <h2 id="story-heading" className="section-title mt-4">A strong beginning for <span className="text-[#B87318]">every kind of future.</span></h2>
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">At Shree Swaminarayan International School, learning is more than a lesson. It is the confidence to try, the curiosity to keep asking and the character to use what you know with care.</p>
            <p className="mt-4 text-base leading-8 text-slate-600">Our Ranip community brings contemporary learning together with enduring values, creating space for each student to discover their strengths and take their next step.</p>
            <Link href="/about-us" className="text-link mt-7">Meet SSIS Ranip <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="section-space bg-[#F5F7FA]" aria-labelledby="pillars-heading">
        <div className="section-container">
          <SectionHeading eyebrow="The SSIS experience" title="More than a classroom" description="A thoughtful school experience makes room for achievement, belonging and the joy of discovery." id="pillars-heading" />
          <div className="mt-11 grid gap-5 md:grid-cols-3">
            {pillarCards}
          </div>
        </div>
      </section>

      <section className="section-space bg-white" aria-labelledby="facilities-heading">
        <div className="section-container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Spaces that support growth</p>
            <h2 id="facilities-heading" className="section-title mt-4">Made for the way <span className="text-[#B87318]">children learn.</span></h2>
            <p className="mt-5 max-w-lg leading-8 text-slate-600">From focused study to active play, a school campus should help students feel safe, curious and ready to take part.</p>
            <Link href="/academics#facilities" className="text-link mt-7">Explore the campus <ArrowRight size={17} /></Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {facilityTiles}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#10284B] py-20 text-white sm:py-24" aria-labelledby="values-heading">
        <div className="absolute -right-28 -top-36 h-96 w-96 rounded-full bg-[#E9A53B]/10 blur-3xl" />
        <div className="section-container relative grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
          <div><p className="eyebrow eyebrow-light">Our values in action</p><h2 id="values-heading" className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">A good education shapes <span className="text-[#F0B95F]">who we become.</span></h2></div>
          <div className="grid gap-5 sm:grid-cols-2">
            <blockquote className="rounded-3xl border border-white/10 bg-white/[.06] p-6 sm:p-8"><p className="text-sm font-bold uppercase tracking-[.16em] text-[#F0B95F]">Our vision</p><p className="mt-4 font-serif text-xl leading-8 text-white/90">{SITE_CONFIG.vision}</p></blockquote>
            <blockquote className="rounded-3xl border border-white/10 bg-white/[.06] p-6 sm:p-8"><p className="text-sm font-bold uppercase tracking-[.16em] text-[#F0B95F]">Our mission</p><p className="mt-4 font-serif text-xl leading-8 text-white/90">{SITE_CONFIG.mission}</p></blockquote>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="community-heading">
        <div className="section-container grid items-center gap-8 lg:grid-cols-[1.1fr_.9fr] lg:gap-14">
          <div className="image-frame aspect-[16/10] rounded-[2rem] shadow-xl">
            <Image src="/result-bg.webp" alt="Students gathered together for a moment of reflection" fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover" />
          </div>
          <div><p className="eyebrow">Growing together</p><h2 id="community-heading" className="section-title mt-4">Learning is a <span className="text-[#B87318]">shared journey.</span></h2><p className="mt-5 leading-8 text-slate-600">School is made of everyday moments: showing up for one another, listening closely and finding a little more confidence each day. These shared experiences help students feel part of something bigger.</p><Link href="/gallery#events" className="text-link mt-7">Explore school life <ArrowRight size={17} /></Link></div>
        </div>
      </section>

      <section className="section-space bg-[#F5F7FA]" aria-labelledby="gallery-heading">
        <div className="section-container">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow">Life at SSIS</p><h2 id="gallery-heading" className="section-title mt-3">Small moments. <span className="text-[#B87318]">Big possibilities.</span></h2></div><Link href="/gallery" className="text-link">View the gallery <ArrowRight size={17} /></Link></div>
          <div className="mt-9 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {galleryTiles}
          </div>
        </div>
      </section>

      <section className="section-space bg-white" aria-labelledby="visit-heading">
        <div className="section-container grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <div className="rounded-[2rem] bg-[#F4F6F9] p-7 sm:p-10">
            <p className="eyebrow">Come say hello</p><h2 id="visit-heading" className="section-title mt-4">Let’s start a <span className="text-[#B87318]">conversation.</span></h2>
            <p className="mt-4 max-w-xl leading-8 text-slate-600">Choosing a school is a big decision. Our team can help you learn about the campus, admissions and the SSIS experience.</p>
            <div className="mt-7 grid gap-2 sm:grid-cols-2">{contactLinks}</div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row"><a href={SITE_CONFIG.admissionUrl} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center">Admissions enquiry <ArrowRight size={17} /></a><a href={`mailto:${SITE_CONFIG.email}`} className="btn-outline justify-center">Email the school</a></div>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] bg-[#10284B] p-7 text-white sm:p-10">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            <div className="relative flex h-full min-h-[260px] flex-col justify-between">
              <div><span className="icon-tile icon-tile-gold"><MapPin size={22} /></span><h3 className="mt-6 font-serif text-2xl font-semibold">Find us in Ranip</h3><p className="mt-3 max-w-sm leading-7 text-white/75">{SITE_CONFIG.address}</p></div>
              <a href={mapHref} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#F0B95F] hover:text-[#F0B95F]">Open directions <ArrowRight size={16} /></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
