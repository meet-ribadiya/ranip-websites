"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = String(formData.get("firstName") || "");
    const lastName = String(formData.get("lastName") || "");
    const email = String(formData.get("email") || "");
    const comments = String(formData.get("comments") || "");

    const subject = encodeURIComponent(
      `Website Enquiry from ${firstName} ${lastName}`
    );
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nComments / Questions:\n${comments}`
    );

    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const successBanner = submitted ? (
    <div className="mb-6 flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-900">
      <CheckCircle2 size={20} className="shrink-0 text-emerald-600" />
      <span>
        Thank you! Your message has been opened in your email client to send to{" "}
        {SITE_CONFIG.email}.
      </span>
    </div>
  ) : null;

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10"
    >
      <p className="eyebrow">Get Connected</p>
      <h2 className="mt-2 font-serif text-3xl font-semibold text-[#142C55]">
        Let us know how to get back to you.
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        How can we help? Feel free to ask a question or simply leave a comment.
      </p>

      <div className="mt-6">{successBanner}</div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="block text-xs font-bold uppercase tracking-wider text-[#142C55]"
          >
            First Name *
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="First Name"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm text-[#142C55] focus:border-[#E5A23C] focus:bg-white focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-xs font-bold uppercase tracking-wider text-[#142C55]"
          >
            Last Name *
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Last Name"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm text-[#142C55] focus:border-[#E5A23C] focus:bg-white focus:outline-none"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="contactEmail"
            className="block text-xs font-bold uppercase tracking-wider text-[#142C55]"
          >
            Email Address *
          </label>
          <input
            id="contactEmail"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm text-[#142C55] focus:border-[#E5A23C] focus:bg-white focus:outline-none"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="comments"
            className="block text-xs font-bold uppercase tracking-wider text-[#142C55]"
          >
            Comments / Questions *
          </label>
          <textarea
            id="comments"
            name="comments"
            rows={4}
            required
            placeholder="How can we help you today?"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm text-[#142C55] focus:border-[#E5A23C] focus:bg-white focus:outline-none"
          />
        </div>
      </div>

      <button type="submit" className="btn-primary mt-7">
        Send Message <Send size={16} />
      </button>
    </form>
  );
}
