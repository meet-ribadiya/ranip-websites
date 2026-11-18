import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy of Shree Swaminarayan International School (SSIS Ranip), Ahmedabad.",
};

const policySections = [
  {
    heading: "Introduction",
    content:
      "Shree Swaminarayan International School, Ranip (“Institute” / “SSISRANIP”) recognizes the importance of your privacy and is committed to ensuring that you are aware of how your information is being used. This policy describes the types of information the Institute may collect from you or that you may provide in relation to the use or access of https://ssisranip.com/ and the manner in which such information is collected, used, processed, disclosed, and maintained.",
  },
  {
    heading: "Applicability of the Policy",
    content:
      "This policy applies to all information the Institute collects on the Website, including any information you upload, emails that you exchange with the Institute, and any information submitted by you to the Institute for admissions, career enquiries, or general correspondence.",
  },
  {
    heading: "Nature of Information Collected",
    content:
      "As you navigate through the Website, the Institute may collect User Information submitted voluntarily (such as name, telephone numbers, email addresses, residential address, and student enquiry details) as well as standard technical usage details including IP addresses, browser type, and session cookies intended to improve your user experience.",
  },
  {
    heading: "Use of Your Information",
    content:
      "The information we collect on the Website is used to respond to admissions enquiries, process career applications, provide academic updates, and improve our educational services. No personally identifiable information will be sold, rented, or shared with third parties for marketing purposes without your explicit consent.",
  },
  {
    heading: "Disclosure of Information",
    content:
      "The Institute may disclose information only to authorized school personnel, affiliated educational portal providers (such as our Online ERP and Admissions partners) for operating school services, or to regulatory and governmental authorities when required by applicable law.",
  },
  {
    heading: "Data Security",
    content:
      "The information that you provide is maintained in a safe and secure manner on protected servers. Users are advised not to share their ERP login credentials or passwords with unauthorized individuals.",
  },
  {
    heading: "Accessing and Updating Your Information",
    content:
      "Parents, students, and applicants may request updates or corrections to their submitted contact details by reaching out to the school administration office or emailing us directly.",
  },
  {
    heading: "Amendments to the Privacy Policy",
    content:
      "This Privacy Policy is subject to periodic updates by the Institute. Any changes to the Privacy Policy will be published on this page.",
  },
];

const emailHref = `mailto:${SITE_CONFIG.email}`;

export default function PrivacyPolicyPage() {
  const sections = policySections.map((sec) => (
    <div key={sec.heading} className="border-b border-slate-200/80 pb-6 last:border-b-0">
      <h2 className="font-serif text-2xl font-semibold text-[#142C55]">
        {sec.heading}
      </h2>
      <p className="mt-3 leading-8 text-slate-600">{sec.content}</p>
    </div>
  ));

  return (
    <>
      <PageIntro
        eyebrow="Legal & Privacy"
        title="Privacy Policy"
        description="How Shree Swaminarayan International School, Ranip collects, uses, and safeguards your information."
        breadcrumb="Privacy Policy"
      />
      <section className="section-space bg-white">
        <div className="section-container max-w-4xl">
          <div className="space-y-8 rounded-[2rem] border border-slate-200 bg-[#F7F9FC] p-7 sm:p-12">
            {sections}
            <div className="rounded-2xl bg-white p-5 text-sm text-slate-600">
              <p className="font-semibold text-[#142C55]">
                Questions regarding this Privacy Policy?
              </p>
              <p className="mt-1">
                Contact {SITE_CONFIG.name} at{" "}
                <a
                  href={emailHref}
                  className="font-semibold text-[#B87318]"
                >
                  {SITE_CONFIG.email}
                </a>{" "}
                or call {SITE_CONFIG.phones[0]}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
