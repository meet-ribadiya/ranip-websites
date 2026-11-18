import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import PageIntro from "@/components/ui/PageIntro";
import ContactForm from "@/components/ui/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Admissions",
  description:
    "Contact Shree Swaminarayan International School (SSIS Ranip) for admissions enquiries, school information and directions to our Ahmedabad campus.",
};

const landlineHref = `tel:${SITE_CONFIG.landline}`;
const whatsappHref = `https://wa.me/${SITE_CONFIG.whatsapp.replace("+", "")}`;
const primaryEmailHref = `mailto:${SITE_CONFIG.email}`;
const secondaryEmailHref = `mailto:${SITE_CONFIG.secondaryEmail}`;
const mapsHref = `https://maps.google.com/?q=${encodeURIComponent(
  SITE_CONFIG.address
)}`;

export default function ContactPage() {
  const phoneLinks = SITE_CONFIG.phones.map((phone) => {
    const telHref = `tel:${phone}`;
    return (
      <a key={phone} href={telHref} className="contact-detail">
        {phone}
      </a>
    );
  });

  return (
    <>
      <PageIntro
        eyebrow="We’re here to help"
        title="Let’s talk about your child’s next step."
        description="Contact Shree Swaminarayan International School in Ranip, Ahmedabad for admissions enquiries, campus tours, and academic information."
        image="/banner11.webp"
        breadcrumb="Contact"
      />
      <section className="section-space bg-[#F5F7FA]">
        <div className="section-container space-y-10">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
            <div className="rounded-[2rem] bg-white p-7 shadow-sm sm:p-10">
              <p className="eyebrow">Get in touch</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-[#142C55]">
                Shree Swaminarayan International School
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Rolling admissions are now open. Call us, email the school, or
                submit an online admission enquiry below.
              </p>

              <div className="mt-8">
                <div className="mb-3 flex items-center gap-3 text-sm font-bold uppercase tracking-[.13em] text-[#142C55]">
                  <Phone size={18} className="text-[#B87318]" />
                  Call the school
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {phoneLinks}
                  <a href={landlineHref} className="contact-detail">
                    Landline: {SITE_CONFIG.landline}
                  </a>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-detail"
                  >
                    WhatsApp: {SITE_CONFIG.whatsapp}
                  </a>
                </div>
              </div>

              <div className="mt-7 flex items-start gap-3">
                <Mail size={18} className="mt-1 shrink-0 text-[#B87318]" />
                <div>
                  <p className="font-semibold text-[#142C55]">Email Address</p>
                  <div className="mt-1 flex flex-wrap gap-4">
                    <a
                      href={primaryEmailHref}
                      className="text-slate-600 hover:text-[#A96812] font-medium"
                    >
                      {SITE_CONFIG.email}
                    </a>
                    <span className="text-slate-300">|</span>
                    <a
                      href={secondaryEmailHref}
                      className="text-slate-600 hover:text-[#A96812] font-medium"
                    >
                      {SITE_CONFIG.secondaryEmail}
                    </a>
                  </div>
                </div>
              </div>

              <a
                href={SITE_CONFIG.admissionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8"
              >
                Online Admission Inquiry Form <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="relative flex flex-col overflow-hidden rounded-[2rem] bg-[#10284B] p-7 text-white sm:p-10">
              <div
                className="animated-dots absolute inset-0 opacity-20"
                aria-hidden="true"
              />
              <div
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#E9A53B]/15 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative z-10 flex h-full flex-col">
                <span className="icon-tile icon-tile-gold">
                  <MapPin size={22} />
                </span>
                <p className="eyebrow eyebrow-light mt-6">Visit our campus</p>
                <h2 className="mt-2 font-serif text-2xl font-semibold">
                  Shree Swaminarayan International School
                </h2>
                <p className="mt-4 leading-7 text-white/75">
                  {SITE_CONFIG.address}
                </p>
                <div className="mt-7 flex-1 rounded-2xl border border-white/10 bg-white/[.04] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F0B95F]">
                    School Hours
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/80">
                    Classes 1st – 8th: Mon–Fri 7:00 AM – 12:20 PM | Sat 12:20 PM – 3:30 PM
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/80">
                    Classes 9th – 12th: Mon–Fri 7:00 AM – 12:20 PM | Sat 7:10 AM – 10:40 AM
                  </p>
                  <a
                    href={mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#F0B95F] hover:text-white"
                  >
                    Open Google Maps Directions <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
