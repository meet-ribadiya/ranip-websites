import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "Admission cancellation and fee refund policy for Shree Swaminarayan International School, Ranip.",
};

const policyPoints = [
  "The candidate / parent shall submit a duly signed written application for cancellation of admission to the institution along with original fee receipts.",
  "After receiving the duly signed admission cancellation request letter, the Institution shall process the cancellation and issue an acknowledgment as per the schedule published by the Competent Authority.",
  "The refund of fees on or before the cut-off date of admission declared by the Competent Authority shall be processed after deducting applicable administrative/processing charges as per the guidelines of the appropriate educational authorities or State Government.",
  "If the admission is cancelled after the cut-off date declared by the Competent Authority, there shall be no refund except the Caution / Security Deposit (if any).",
  "Confirmation of admission requires payment of the prescribed tuition and school fees and submission of required original documents within the stipulated time.",
];

const refundRows = [
  {
    sr: "1",
    situation:
      "Request received before cut-off date & if the seat is filled before the cut-off date",
    refund: "Entire fee less Rs. 1,000/- processing charges",
  },
  {
    sr: "2",
    situation:
      "Request received after cut-off date or seat remains unfilled after the cut-off date",
    refund: "No Refund (except refundable Security / Caution Deposit, if any)",
  },
];

export default function RefundCancellationPage() {
  const listItems = policyPoints.map((pt, i) => (
    <li key={i} className="flex items-start gap-3 leading-7 text-slate-600">
      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#10284B] text-xs font-bold text-[#F0B95F]">
        {i + 1}
      </span>
      <span>{pt}</span>
    </li>
  ));

  const tableRows = refundRows.map((row) => (
    <tr key={row.sr} className="border-b border-slate-100">
      <td className="px-5 py-4 text-sm font-semibold text-[#142C55]">
        {row.sr}
      </td>
      <td className="px-5 py-4 text-sm text-slate-700">{row.situation}</td>
      <td className="px-5 py-4 text-sm font-semibold text-[#A96812]">
        {row.refund}
      </td>
    </tr>
  ));

  return (
    <>
      <PageIntro
        eyebrow="Admissions Policy"
        title="Refund & Cancellation"
        description="Guidelines and rules regarding admission cancellation and fee refund."
        breadcrumb="Refund & Cancellation"
      />
      <section className="section-space bg-white">
        <div className="section-container max-w-4xl">
          <div className="rounded-[2rem] border border-slate-200 bg-[#F7F9FC] p-7 sm:p-12">
            <p className="eyebrow">Admission Cancellation Policy</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-[#142C55]">
              Fee Refund & Cancellation Norms
            </h2>
            <ul className="mt-6 space-y-4">{listItems}</ul>

            <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-[#10284B] text-xs font-bold uppercase tracking-wider text-white">
                    <th className="px-5 py-3.5">Sr. No</th>
                    <th className="px-5 py-3.5">Situation</th>
                    <th className="px-5 py-3.5">Refund Amount</th>
                  </tr>
                </thead>
                <tbody>{tableRows}</tbody>
              </table>
            </div>

            <p className="mt-6 text-xs text-slate-500">
              Note: The above policy is subject to revision as per guidelines
              declared by the Competent Educational Authority / State
              Government. For any query, please contact the school office at{" "}
              {SITE_CONFIG.phones[0]} or {SITE_CONFIG.email}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
