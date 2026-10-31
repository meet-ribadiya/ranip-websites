import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import PageIntro from "@/components/ui/PageIntro";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = { title: "Contact & Admissions", description: "Contact SSIS Ranip for admissions enquiries, school information and directions to our Ahmedabad campus." };

export default function ContactPage() {
  const phoneLinks = SITE_CONFIG.phones.map((phone) => <a key={phone} href={`tel:${phone}`} className="contact-detail">{phone}</a>);
  const mapsHref = `https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.address)}`;
  return (
    <>
      <PageIntro eyebrow="We’re here to help" title="Let’s talk about your child’s next step." description="Our team can help with admissions enquiries, campus information and finding the right next step for your family." image="/banner11.webp" breadcrumb="Contact" />
      <section className="section-space bg-[#F5F7FA]"><div className="section-container grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <div className="rounded-[2rem] bg-white p-7 shadow-sm sm:p-10"><p className="eyebrow">Get in touch</p><h2 className="mt-3 font-serif text-3xl font-semibold text-[#142C55]">We’d love to hear from you.</h2><p className="mt-3 leading-7 text-slate-600">Call us or email the school. For admissions, you can also send an enquiry through our online application partner.</p><div className="mt-8"><div className="mb-3 flex items-center gap-3 text-sm font-bold uppercase tracking-[.13em] text-[#142C55]"><Phone size={18} className="text-[#B87318]" />Call the school</div><div className="grid gap-2 sm:grid-cols-2">{phoneLinks}<a href={`tel:${SITE_CONFIG.landline}`} className="contact-detail">{SITE_CONFIG.landline}</a></div></div><div className="mt-7 flex items-start gap-3"><Mail size={18} className="mt-1 shrink-0 text-[#B87318]" /><div><p className="font-semibold text-[#142C55]">Email</p><a href={`mailto:${SITE_CONFIG.email}`} className="mt-1 inline-block text-slate-600 hover:text-[#A96812]">{SITE_CONFIG.email}</a></div></div><a href={SITE_CONFIG.admissionUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">Admissions enquiry <span aria-hidden="true">↗</span></a></div>
        <div className="flex flex-col rounded-[2rem] bg-[#10284B] p-7 text-white sm:p-10"><span className="icon-tile icon-tile-gold"><MapPin size={22} /></span><p className="eyebrow eyebrow-light mt-6">Visit our campus</p><h2 className="mt-2 font-serif text-2xl font-semibold">Shree Swaminarayan International School</h2><p className="mt-4 leading-7 text-white/75">{SITE_CONFIG.address}</p><div className="mt-7 flex-1 rounded-2xl border border-white/10 bg-white/[.04] p-5"><p className="text-sm leading-7 text-white/70">Near GST Railway Crossing, Balol Nagar Cross Road, Ranip, Ahmedabad.</p><a href={mapsHref} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#F0B95F] hover:text-white">Open directions <span aria-hidden="true">↗</span></a></div></div>
      </div></section>
    </>
  );
}
