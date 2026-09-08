"use client";

import React from "react";
import { ArrowLeft, FileText } from "lucide-react";

interface TermsConditionsModalProps {
  onClose: () => void;
}

export function TermsConditionsModal({ onClose }: TermsConditionsModalProps) {
  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col max-w-[430px] mx-auto overflow-hidden animate-in slide-in-from-right duration-200">
      {/* Top Header */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 py-3.5 flex items-center gap-3 z-10">
        <button
          onClick={onClose}
          className="p-1.5 -ml-1.5 rounded-full hover:bg-slate-100 text-slate-700 transition-colors"
          aria-label="Back"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-base font-bold text-slate-900">Terms & Conditions</h1>
      </div>

      {/* Document Content */}
      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6 text-slate-700 text-xs leading-relaxed">
        <div className="space-y-1">
          <h2 className="text-xl font-black text-slate-900">1Fi — Terms & Conditions</h2>
          <p className="text-[11px] font-semibold text-fi-purple">Last Updated: 22 May 2026</p>
        </div>

        <p>
          These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the 1Fi mobile application, website, and related services (together, the &quot;Platform&quot;).
        </p>

        <p>
          The Platform is owned and operated by Fiquity Technology Private Limited, a company incorporated under the Companies Act, 2013, having its registered office at 1st Floor, Orchid Business Park, Sector 48, Gurugram, Haryana, India (&quot;1Fi&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
        </p>

        <div className="border-t border-slate-100 pt-4 space-y-2">
          <h3 className="text-sm font-bold text-slate-900">1. Definitions</h3>
          <div className="space-y-1.5 pl-2">
            <p><strong>&quot;Lending Partner&quot;</strong>: Any bank or Non-Banking Financial Company (NBFC) regulated by the Reserve Bank of India (RBI) with whom 1Fi has entered into an arrangement.</p>
            <p><strong>&quot;Loan Against Mutual Funds (LAMF)&quot;</strong>: A credit facility sanctioned and disbursed by a Lending Partner backed by your mutual fund holdings.</p>
            <p><strong>&quot;MFCentral&quot;</strong>: Digital platform operated jointly by RTAs (CAMS & KFinTech) for lien marking and pledge execution.</p>
            <p><strong>&quot;KFS&quot;</strong>: Key Fact Statement containing standardized loan terms provided prior to loan acceptance.</p>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-4 space-y-2">
          <h3 className="text-sm font-bold text-slate-900">2. About 1Fi and Nature of Services</h3>
          <p>
            1Fi operates as a Lending Service Provider (LSP) and Technology Service Provider (TSP). 1Fi is not a bank or lender, does not lend money, and does not determine creditworthiness.
          </p>
          <p>
            Every loan decision, sanction amount, LTV ratio, interest rate, and recovery is handled exclusively by the RBI-regulated Lending Partner.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-4 space-y-2">
          <h3 className="text-sm font-bold text-slate-900">3. Eligibility</h3>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Be at least eighteen (18) years of age</li>
            <li>Be a resident of India</li>
            <li>Hold valid mutual fund investments in your own name free from encumbrance</li>
          </ul>
        </div>

        <div className="border-t border-slate-100 pt-4 space-y-2">
          <h3 className="text-sm font-bold text-slate-900">5. How the Loan Against Mutual Funds Works</h3>
          <p>
            Your mutual fund units are <strong>not redeemed or sold</strong> when a lien is marked. You continue to remain the owner of the pledged units and receive all dividends, gains, and compounding benefits unless the pledge is invoked due to loan default.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-4 space-y-2">
          <h3 className="text-sm font-bold text-slate-900">21. Grievance Redressal</h3>
          <div className="p-3.5 bg-purple-50/70 rounded-2xl border border-purple-100 space-y-1 text-slate-800">
            <p className="font-bold text-fi-purple">Grievance Redressal Officer: Pranav Aggarwal</p>
            <p>Email: <a href="mailto:contact@1fi.in" className="text-fi-purple underline font-semibold">contact@1fi.in</a></p>
            <p>Address: 1st Floor, Orchid Business Park, Sector 48, Gurugram, Haryana, India</p>
            <p className="text-[10.5px] text-slate-500 mt-1">Response Timeline: Acknowledged within 48 hours, resolution within 30 days.</p>
          </div>
        </div>

        <div className="pt-4 pb-8 text-center text-slate-400 text-[11px]">
          © 2026 1Fi. All rights reserved.
        </div>
      </div>
    </div>
  );
}
