import type { Metadata } from "next";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import PageIntro from "@/components/ui/PageIntro";
import ContactForm from "@/components/ui/ContactForm";
import CampusLocationCard from "@/components/ui/CampusLocationCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { PAGE_INTROS, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Admissions",
  description:
    "Contact Shree Swaminarayan International School (SSIS Ranip) for admissions enquiries, school information and directions to our Ahmedabad campus.",
};

const landlineHref = `tel:${SITE_CONFIG.landline}`;
const whatsappHref = `https://wa.me/${SITE_CONFIG.whatsapp.replace("+", "")}`;
const primaryEmailHref = `mailto:${SITE_CONFIG.email}`;
const secondaryEmailHref = `mailto:${SITE_CONFIG.secondaryEmail}`;

export default function ContactPage() {
  const phoneLinks = SITE_CONFIG.phones.map((phone) => {
    const telHref = `tel:${phone}`;
    return (
      <a
        key={phone}
        href={telHref}
        className="flex min-w-0 items-center gap-2.5 rounded-xl border border-slate-200/90 bg-[#F8FAFC] px-3.5 py-3 text-sm font-semibold text-[#142C55] transition hover:border-[#E5A23C] hover:bg-[#FFFBF4]"
      >
        <Phone size={15} className="shrink-0 text-[#B87318]" />
        <span className="truncate">{phone}</span>
      </a>
    );
  });

  return (
    <>
      <PageIntro
        eyebrow={PAGE_INTROS.contact.eyebrow}
        title={PAGE_INTROS.contact.title}
        titleHighlight={PAGE_INTROS.contact.titleHighlight}
        description={PAGE_INTROS.contact.description}
        image={PAGE_INTROS.contact.image}
      />

      <section className="section-space bg-[#F5F7FA]">
        <div className="section-container space-y-8 sm:space-y-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.08fr_.92fr] lg:items-stretch">
            {/* Contact Information Card */}
            <RevealOnScroll className="min-w-0">
              <div className="flex h-full min-w-0 flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-5 shadow-[0_12px_36px_rgba(16,40,75,0.06)] sm:p-8 lg:p-10">
                <div className="min-w-0">
                  <p className="eyebrow">Get in Touch</p>
                  <h2 className="mt-3 font-serif text-2xl font-semibold leading-snug text-[#142C55] sm:text-3xl">
                    Shree Swaminarayan{" "}
                    <span className="text-[#B87318]">International School</span>
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    Rolling admissions are now open. Call us, message on
                    WhatsApp, email the school, or submit an online admission
                    enquiry below.
                  </p>

                  {/* Phone Numbers Grid — strictly responsive, zero clipping */}
                  <div className="mt-7">
                    <div className="mb-3 flex items-center gap-2.5 text-xs font-bold uppercase tracking-[.14em] text-[#142C55]">
                      <Phone size={16} className="shrink-0 text-[#B87318]" />
                      <span>Call the School</span>
                    </div>
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {phoneLinks}
                      <a
                        href={landlineHref}
                        className="flex min-w-0 items-center gap-2.5 rounded-xl border border-slate-200/90 bg-[#F8FAFC] px-3.5 py-3 text-sm font-semibold text-[#142C55] transition hover:border-[#E5A23C] hover:bg-[#FFFBF4]"
                      >
                        <Phone size={15} className="shrink-0 text-[#B87318]" />
                        <span className="truncate">
                          Landline: {SITE_CONFIG.landline}
                        </span>
                      </a>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-w-0 items-center gap-2.5 rounded-xl border border-emerald-200/80 bg-emerald-50/70 px-3.5 py-3 text-sm font-semibold text-emerald-900 transition hover:border-emerald-400 hover:bg-emerald-50"
                      >
                        <MessageCircle
                          size={15}
                          className="shrink-0 text-emerald-600"
                        />
                        <span className="truncate">
                          WhatsApp: {SITE_CONFIG.whatsapp}
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Email Addresses — stacked cleanly on mobile */}
                  <div className="mt-6 rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-4">
                    <div className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFF6E5] text-[#B87318]">
                        <Mail size={17} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold uppercase tracking-[.14em] text-[#142C55]">
                          Email Address
                        </p>
                        <div className="mt-1.5 flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                          <a
                            href={primaryEmailHref}
                            className="break-all text-sm font-semibold text-[#142C55] transition hover:text-[#B87318]"
                          >
                            {SITE_CONFIG.email}
                          </a>
                          <span
                            className="hidden text-slate-300 sm:inline"
                            aria-hidden="true"
                          >
                            |
                          </span>
                          <a
                            href={secondaryEmailHref}
                            className="break-all text-sm font-medium text-slate-600 transition hover:text-[#B87318]"
                          >
                            {SITE_CONFIG.secondaryEmail}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-7 pt-1">
                  <a
                    href={SITE_CONFIG.admissionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center sm:w-auto"
                  >
                    <span>Online Admission Inquiry Form</span>
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>
            </RevealOnScroll>

            {/* Campus Location Box with Embedded Map & School Hours */}
            <RevealOnScroll delayMs={100} className="min-w-0">
              <CampusLocationCard showSchoolHours={true} />
            </RevealOnScroll>
          </div>

          <RevealOnScroll delayMs={80}>
            <ContactForm />
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
