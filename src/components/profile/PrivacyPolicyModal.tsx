"use client";

import React from "react";
import { ArrowLeft, Shield } from "lucide-react";

interface PrivacyPolicyModalProps {
  onClose: () => void;
}

export function PrivacyPolicyModal({ onClose }: PrivacyPolicyModalProps) {
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
        <h1 className="text-base font-bold text-slate-900">Privacy Policy</h1>
      </div>

      {/* Document Content */}
      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6 text-slate-700 text-xs leading-relaxed">
        <div className="space-y-1">
          <h2 className="text-xl font-black text-slate-900">1Fi — Privacy Policy</h2>
          <p className="text-[11px] font-semibold text-fi-purple">Last Updated: 22 May 2026</p>
        </div>

        <p>
          This Privacy Policy explains how Fiquity Technology Private Limited (&quot;1Fi&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, processes, stores, shares, and protects your personal data when you access or use the 1Fi mobile application, website, and related services (together, the &quot;Platform&quot;).
        </p>

        <p>
          1Fi acts as a Data Fiduciary in respect of the personal data it processes, and is committed to handling your data in accordance with:
        </p>

        <ul className="list-disc pl-5 space-y-1 text-slate-600">
          <li>The Digital Personal Data Protection Act, 2023</li>
          <li>The Digital Personal Data Protection Rules, 2025</li>
          <li>The Information Technology Act, 2000 and the rules made thereunder</li>
          <li>Applicable directions of the Reserve Bank of India (RBI)</li>
          <li>Other applicable Indian law</li>
        </ul>

        <div className="border-t border-slate-100 pt-4 space-y-2">
          <h3 className="text-sm font-bold text-slate-900">1. Scope of this Policy</h3>
          <p>
            This Policy applies to personal data we collect through the 1Fi mobile application and website and in the course of providing our services.
          </p>
          <p>
            1Fi operates as a Lending Service Provider and Technology Service Provider that facilitates loans against mutual funds offered by RBI-regulated banks and NBFCs (&quot;Lending Partners&quot;). 1Fi is not a lender.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-4 space-y-3">
          <h3 className="text-sm font-bold text-slate-900">2. Information We Collect</h3>
          <p>
            We collect only the information that is necessary to provide our services, facilitate your loan application, enable the pledge of your mutual fund units, operate rewards, and comply with legal obligations.
          </p>
          
          <div className="space-y-1 pl-2">
            <h4 className="font-bold text-slate-800">Account Information</h4>
            <p className="text-slate-600">Name, Mobile number, Email address, Residential address, and Communication preferences.</p>
          </div>

          <div className="space-y-1 pl-2">
            <h4 className="font-bold text-slate-800">Identity and KYC Information</h4>
            <p className="text-slate-600">PAN, Aadhaar number (masked), government ID, photograph/selfie, video KYC data, date of birth, and electronic signature.</p>
          </div>

          <div className="space-y-1 pl-2">
            <h4 className="font-bold text-slate-800">Financial and Mutual Fund Information</h4>
            <p className="text-slate-600">Mutual fund scheme details, folio information, pledged units, bank account details, and loan sanction schedules.</p>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-4 space-y-2">
          <h3 className="text-sm font-bold text-slate-900">3. Mobile Application Permissions</h3>
          <p>
            The 1Fi mobile application requests only necessary permissions: Camera (for KYC verification) and limited document picker access.
          </p>
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200/60 text-emerald-900">
            <p className="font-bold text-[11px]">We do NOT collect or access:</p>
            <p className="text-[10.5px] mt-0.5">Phone contacts, Call logs, SMS messages, Photo galleries, or precise GPS location for credit recovery or facilitation.</p>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-4 space-y-2">
          <h3 className="text-sm font-bold text-slate-900">4. How We Use Your Information</h3>
          <p>
            To create and manage your account, facilitate loan applications with Lending Partners, enable lien marking on mutual fund units via MFCentral, and calculate 0% EMI rewards and cashback.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-4 space-y-2">
          <h3 className="text-sm font-bold text-slate-900">6. How We Share Your Information</h3>
          <p>
            We share information strictly with RBI-regulated Lending Partners, MFCentral, and Registrars & Transfer Agents (CAMS and KFinTech) for lien marking and pledge processing. We never sell your personal data.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-4 space-y-2">
          <h3 className="text-sm font-bold text-slate-900">16. Grievance Redressal and Contact</h3>
          <div className="p-3.5 bg-purple-50/70 rounded-2xl border border-purple-100 space-y-1 text-slate-800">
            <p className="font-bold text-fi-purple">Data Protection Officer: Pranav Aggarwal</p>
            <p>Company: Fiquity Technology Private Limited (1Fi)</p>
            <p>Email: <a href="mailto:contact@1fi.in" className="text-fi-purple underline font-semibold">contact@1fi.in</a></p>
            <p>Address: 1st Floor, Orchid Business Park, Sector 48, Gurugram, Haryana, India</p>
            <p className="text-[10.5px] text-slate-500 mt-1">Working Hours: Monday to Friday, 10:00 AM to 6:00 PM</p>
          </div>
        </div>

        <div className="pt-4 pb-8 text-center text-slate-400 text-[11px]">
          © 2026 1Fi. All rights reserved.
        </div>
      </div>
    </div>
  );
}
