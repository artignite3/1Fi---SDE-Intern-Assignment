"use client";

import React, { useState } from "react";
import { X, Mail, Clock, Plus, Minus, ArrowUpRight } from "lucide-react";
import { FAQS } from "@/lib/data/faqs";

export function SupportFAQModal({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<
    "Intro & Eligibility" | "Using 1Fi & Merchants" | "Repayment & Account"
  >("Intro & Eligibility");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const tabs = [
    "Intro & Eligibility",
    "Using 1Fi & Merchants",
    "Repayment & Account",
  ] as const;

  const filteredFaqs = FAQS.filter((f) => f.category === activeTab);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white w-full max-w-lg rounded-t-[36px] sm:rounded-3xl shadow-2xl animate-in slide-in-from-bottom duration-300 max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900">Support & FAQs</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-y-auto p-5 space-y-5 flex-1">
          {/* Top Support Cards matching screenshot 2 */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href="mailto:support@1fi.in"
              className="bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:border-fi-purple transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-fi-purple flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-fi-purple group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <span className="text-[10px] font-bold text-fi-purple uppercase tracking-wider block">
                EMAIL SUPPORT
              </span>
              <span className="text-xs font-bold text-slate-800 truncate block mt-0.5">
                support@1fi.in
              </span>
            </a>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-purple-100 text-fi-purple flex items-center justify-center mb-2">
                <Clock className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                RESPONSE TIME
              </span>
              <span className="text-xs font-bold text-slate-800 block mt-0.5">
                Within 24 hours
              </span>
            </div>
          </div>

          {/* Category Tabs matching screenshot 2 & 7 */}
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setExpandedIndex(0);
                }}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? "bg-fi-purple text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List matching screenshot 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
              <div className="w-1 h-3.5 bg-fi-purple rounded-full" />
              <span>
                {activeTab === "Intro & Eligibility" && "1. Intro & Eligibility"}
                {activeTab === "Using 1Fi & Merchants" && "2. Using 1Fi & Merchants"}
                {activeTab === "Repayment & Account" && "3. Repayment & Account"}
              </span>
            </div>

            <div className="space-y-2.5">
              {filteredFaqs.map((faq, idx) => {
                const isExpanded = expandedIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200/80 p-4 transition-all shadow-sm"
                  >
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                      className="w-full flex items-center justify-between text-left gap-3"
                    >
                      <span className="text-xs font-bold text-slate-800">
                        {faq.question}
                      </span>
                      <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-500">
                        {isExpanded ? (
                          <Minus className="w-3.5 h-3.5" />
                        ) : (
                          <Plus className="w-3.5 h-3.5" />
                        )}
                      </div>
                    </button>
                    {isExpanded && (
                      <p className="text-xs text-slate-500 mt-3 leading-relaxed pt-2 border-t border-slate-100 animate-in fade-in">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
