"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send, Upload } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function CareerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("No file chosen (PDF format)");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const post = String(formData.get("postAppliedFor") || "");
    const fullName = String(formData.get("fullName") || "");
    const phone = String(formData.get("contactNumber") || "");
    const email = String(formData.get("email") || "");
    const address = String(formData.get("address") || "");
    const message = String(formData.get("message") || "");

    const subject = encodeURIComponent(`Career Application: ${post} - ${fullName}`);
    const body = encodeURIComponent(
      `Post Applied For: ${post}\nFull Name: ${fullName}\nContact Number: ${phone}\nEmail: ${email}\nAddress: ${address}\n\nMessage / Comments:\n${message}\n\n(Please attach your CV PDF when sending this email)`
    );

    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : "No file chosen (PDF format)");
  };

  const successBanner = submitted ? (
    <div className="mb-6 flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-900">
      <CheckCircle2 size={20} className="shrink-0 text-emerald-600" />
      <span>
        Thank you! Your application details have been prepared in your email
        client to send to {SITE_CONFIG.email}. Please attach your PDF CV and hit
        send.
      </span>
    </div>
  ) : null;

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10"
    >
      <p className="eyebrow">Apply Online</p>
      <h2 className="mt-2 font-serif text-3xl font-semibold text-[#142C55]">
        Career Opportunity Form
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        Complete the application details below to apply for teaching or
        administrative positions at Shree Swaminarayan International School,
        Ranip.
      </p>

      <div className="mt-6">{successBanner}</div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="postAppliedFor"
            className="block text-xs font-bold uppercase tracking-wider text-[#142C55]"
          >
            Post Applied For *
          </label>
          <input
            id="postAppliedFor"
            name="postAppliedFor"
            type="text"
            required
            placeholder="e.g. Science Teacher / Primary Teacher"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm text-[#142C55] focus:border-[#E5A23C] focus:bg-white focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-bold uppercase tracking-wider text-[#142C55]"
          >
            Full Name *
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="Enter your full name"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm text-[#142C55] focus:border-[#E5A23C] focus:bg-white focus:outline-none"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="address"
            className="block text-xs font-bold uppercase tracking-wider text-[#142C55]"
          >
            Address *
          </label>
          <input
            id="address"
            name="address"
            type="text"
            required
            placeholder="Your residential address"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm text-[#142C55] focus:border-[#E5A23C] focus:bg-white focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-bold uppercase tracking-wider text-[#142C55]"
          >
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm text-[#142C55] focus:border-[#E5A23C] focus:bg-white focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="contactNumber"
            className="block text-xs font-bold uppercase tracking-wider text-[#142C55]"
          >
            Contact Number *
          </label>
          <input
            id="contactNumber"
            name="contactNumber"
            type="tel"
            required
            placeholder="10-digit mobile number"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm text-[#142C55] focus:border-[#E5A23C] focus:bg-white focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="alternateContactNumber"
            className="block text-xs font-bold uppercase tracking-wider text-[#142C55]"
          >
            Alternate Contact Number
          </label>
          <input
            id="alternateContactNumber"
            name="alternateContactNumber"
            type="tel"
            placeholder="Optional alternate number"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm text-[#142C55] focus:border-[#E5A23C] focus:bg-white focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="cvFile"
            className="block text-xs font-bold uppercase tracking-wider text-[#142C55]"
          >
            Upload CV (Please upload your CV in PDF format)
          </label>
          <label
            htmlFor="cvFile"
            className="mt-2 flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-slate-300 bg-[#F8FAFC] px-4 py-3 text-sm text-slate-600 transition hover:border-[#E5A23C] hover:bg-[#FFFBF4]"
          >
            <Upload size={17} className="shrink-0 text-[#B87318]" />
            <span className="truncate">{fileName}</span>
            <input
              id="cvFile"
              name="cvFile"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="sr-only"
            />
          </label>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-xs font-bold uppercase tracking-wider text-[#142C55]"
          >
            Message / Comments
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Share your teaching experience, qualifications, and subjects..."
            className="mt-2 w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm text-[#142C55] focus:border-[#E5A23C] focus:bg-white focus:outline-none"
          />
        </div>
      </div>

      <button type="submit" className="btn-primary mt-7">
        Submit Application <Send size={16} />
      </button>
    </form>
  );
}
