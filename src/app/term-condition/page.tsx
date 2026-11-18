import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Website Terms of Use for Shree Swaminarayan International School, Ranip, Ahmedabad.",
};

const termSections = [
  {
    heading: "Shree Swaminarayan International School, Ranip — Website Terms of Use",
    content:
      "Access to, viewing, or use of https://ssisranip.com/ is governed by these Terms and Conditions. By accessing or using the Website owned and operated by Shree Swaminarayan International School, Ranip (“Institute”), you signify your agreement to be bound by these Terms of Use.",
  },
  {
    heading: "Acceptance & Website Access",
    content:
      "Users represent and warrant that any information submitted through admissions enquiries, career forms, or correspondence is accurate, current, and complete. Third-party links (such as the Online ERP Login and Online Admission Portal) are provided for convenience of parents and students.",
  },
  {
    heading: "Permitted & Prohibited Uses",
    content:
      "This Website may be used solely for lawful educational, informational, and school communication purposes. Users shall not upload or transmit defamatory, abusive, obscene, or unlawful content, infringe intellectual property rights, introduce malware/viruses, or attempt unauthorized access to school systems.",
  },
  {
    heading: "Intellectual Property",
    content:
      "All content, text, photographs, school logos, graphics, and design elements on this Website are the intellectual property of Shree Swaminarayan International School, Ranip. No content may be copied, reproduced, or republished without prior written permission from the Institute.",
  },
  {
    heading: "Disclaimer & Limitation of Liability",
    content:
      "The Website and its informational content are provided on an 'as is' basis. While the Institute strives to keep all academic schedules, timings, and notices accurate and up to date, the school reserves the right to modify schedules and policies as required.",
  },
  {
    heading: "Complaints & Contact",
    content: `In case of any queries, grievances, or copyright/privacy concerns regarding this Website, please contact us at ${SITE_CONFIG.email} or visit our campus at ${SITE_CONFIG.address}.`,
  },
  {
    heading: "Governing Law",
    content:
      "These Terms of Use are governed by and construed in accordance with the laws of the Republic of India.",
  },
];

export default function TermConditionPage() {
  const sections = termSections.map((sec) => (
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
        eyebrow="Terms of Use"
        title="Term & Condition"
        description="Website terms and conditions governing the use of ssisranip.com."
        breadcrumb="Term & Condition"
      />
      <section className="section-space bg-white">
        <div className="section-container max-w-4xl">
          <div className="space-y-8 rounded-[2rem] border border-slate-200 bg-[#F7F9FC] p-7 sm:p-12">
            {sections}
          </div>
        </div>
      </section>
    </>
  );
}
