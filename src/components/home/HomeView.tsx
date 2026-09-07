"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Percent,
  Zap,
  ShieldCheck,
  ChevronDown,
  Gift,
  QrCode,
  Lock,
  ShoppingBag,
  ChevronRight,
} from "lucide-react";
import { useApp } from "@/context/AppContext";
import { FAQS } from "@/lib/data/faqs";

export function HomeView() {
  const { setActiveBottomTab, setShopSubTab, setActiveModal } = useApp();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const topBrandsShort = [
    { name: "Reliance Digital", logo: "/brands/reliance-digital.svg" },
    { name: "Croma", logo: "/brands/croma.svg" },
    { name: "Vijay Sales", logo: "/brands/vijay-sales.svg" },
    { name: "MakeMyTrip", logo: "/brands/makemytrip.svg" },
    { name: "Air India", logo: "/brands/air-india.svg" },
  ];

  return (
    <div className="pb-8 space-y-6">
      {/* Top Hero Banner matching screenshot 8 */}
      <div className="px-4 pt-4">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#2E1065] via-[#4C1D95] to-[#7C3AED] text-white p-6 rounded-[28px] shadow-lg">
          <div className="relative z-10 max-w-[65%] space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-purple-200">
              GET STARTED
            </span>
            <h1 className="text-xl font-bold leading-tight">
              Shop on <span className="text-amber-300">no-cost EMI</span>
            </h1>
            <p className="text-xs text-purple-100/80 leading-relaxed">
              Backed by your mutual funds, No credit pull, No charges, & quick approval.
            </p>

            <button
              onClick={() => {
                setActiveBottomTab("shop");
                setShopSubTab("marketplace");
              }}
              className="mt-2 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white text-fi-purple text-xs font-bold shadow-md hover:bg-purple-50 transition-all"
            >
              <span>Check eligibility</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 0% Interest Big Graphic */}
          <div className="absolute top-4 right-4 text-center">
            <div className="text-4xl font-black tracking-tight text-white drop-shadow-md">
              0%
            </div>
            <div className="text-[10px] font-black tracking-widest text-amber-300 uppercase">
              INTEREST
            </div>
          </div>
        </div>
      </div>

      {/* Offers carousel banner matching screenshot 8 */}
      <div className="px-4 space-y-2">
        <div className="flex items-center gap-1 text-[11px] font-bold text-fi-purple uppercase tracking-wider">
          <div className="w-1 h-3.5 bg-fi-purple rounded-full" />
          <span>OFFERS</span>
        </div>

        <div
          onClick={() => {
            setActiveBottomTab("shop");
            setShopSubTab("marketplace");
          }}
          className="relative overflow-hidden rounded-3xl p-5 bg-gradient-to-r from-amber-950 via-amber-900 to-indigo-950 text-white shadow-md cursor-pointer group"
        >
          <div className="relative z-10 space-y-1.5 max-w-[70%]">
            <span className="text-[9px] font-black uppercase tracking-wider text-amber-300">
              HOLIDAY VOUCHER DEAL
            </span>
            <h3 className="text-sm font-bold text-white group-hover:underline">
              Book Your Euro-phoric Escape with 1Fi
            </h3>
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/40 text-[10px] font-semibold text-white">
              <span>✓ Starts at ₹2,481/mo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Using 1Fi at Top Brands matching screenshot 8 */}
      <div className="px-4 space-y-3">
        <div className="flex items-center gap-1 text-[11px] font-bold text-fi-purple uppercase tracking-wider">
          <div className="w-1 h-3.5 bg-fi-purple rounded-full" />
          <span>SHOP USING 1FI AT TOP BRANDS</span>
        </div>

        <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar pb-1">
          {topBrandsShort.map((brand, idx) => (
            <div
              key={idx}
              onClick={() => {
                setActiveBottomTab("shop");
                setShopSubTab("top-brands");
              }}
              className="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white p-2 border border-slate-100 shadow-sm flex items-center justify-center group-hover:border-fi-purple transition-all">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span className="text-[10px] font-semibold text-slate-700 text-center max-w-[64px] truncate">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Why Pay With 1Fi Cards matching screenshot 8 & 10 */}
      <div className="px-4 space-y-3">
        <div className="flex items-center gap-1 text-[11px] font-bold text-fi-purple uppercase tracking-wider">
          <div className="w-1 h-3.5 bg-fi-purple rounded-full" />
          <span>WHY PAY WITH 1FI</span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">Keep growing</h4>
              <p className="text-[10px] text-slate-500 mt-0.5">No tax, no exit load.</p>
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-fi-purple flex items-center justify-center shrink-0">
              <Percent className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">0% interest</h4>
              <p className="text-[10px] text-slate-500 mt-0.5">Repay only what you spend.</p>
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">Zero charges</h4>
              <p className="text-[10px] text-slate-500 mt-0.5">No fees, nothing hidden.</p>
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">Quickest approvals</h4>
              <p className="text-[10px] text-slate-500 mt-0.5">Instant eligibility check.</p>
            </div>
          </div>
        </div>
      </div>

      {/* How 1Fi Works 1-2-3 matching screenshot 9 & 10 */}
      <div className="px-4 space-y-3">
        <div className="flex items-center gap-1 text-[11px] font-bold text-fi-purple uppercase tracking-wider">
          <div className="w-1 h-3.5 bg-fi-purple rounded-full" />
          <span>HOW 1FI WORKS</span>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm">
          <div className="grid grid-cols-3 gap-2 text-center relative">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-fi-purple flex items-center justify-center relative shadow-sm">
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-slate-900 text-white rounded-full text-[9px] font-bold flex items-center justify-center">
                  1
                </span>
                <QrCode className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tight mt-2">
                CONNECT YOUR PORTFOLIO
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-fi-purple flex items-center justify-center relative shadow-sm">
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-slate-900 text-white rounded-full text-[9px] font-bold flex items-center justify-center">
                  2
                </span>
                <Lock className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tight mt-2">
                UNLOCK YOUR LIMIT
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-fi-purple flex items-center justify-center relative shadow-sm">
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-slate-900 text-white rounded-full text-[9px] font-bold flex items-center justify-center">
                  3
                </span>
                <ShoppingBag className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tight mt-2">
                SHOP & PAY LATER
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Refer and Earn Banner matching screenshot 9 & 10 */}
      <div className="px-4">
        <div
          onClick={() => setActiveModal("refer")}
          className="relative overflow-hidden rounded-3xl p-5 bg-gradient-to-r from-[#2A0872] via-[#4A0EBE] to-[#6C38FF] text-white shadow-md cursor-pointer group"
        >
          <div className="relative z-10 max-w-[65%] space-y-1.5">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[9px] font-bold uppercase">
              <Gift className="w-3 h-3" />
              <span>INVITE</span>
            </span>
            <h3 className="text-sm font-black text-white">
              Get upto ₹1000 for every friend.
            </h3>
            <p className="text-[10px] text-purple-100/80">
              Plus they'll also get rewards.
            </p>
          </div>

          <div className="absolute top-4 right-4 transform rotate-6 text-right">
            <div className="text-xl font-black text-white tracking-wider">
              REFER
            </div>
            <div className="text-sm font-black text-amber-300">
              AND EARN
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions matching screenshot 9 & 10 */}
      <div className="px-4 space-y-3">
        <div className="flex items-center gap-1 text-[11px] font-bold text-fi-purple uppercase tracking-wider">
          <div className="w-1 h-3.5 bg-fi-purple rounded-full" />
          <span>FREQUENTLY ASKED QUESTIONS</span>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 divide-y divide-slate-100 overflow-hidden shadow-sm">
          {FAQS.slice(0, 5).map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div key={idx} className="p-4 transition-colors">
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-3"
                >
                  <span className="text-xs font-bold text-slate-800">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                      isOpen ? "rotate-180 text-fi-purple" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="text-xs text-slate-500 mt-2.5 leading-relaxed animate-in fade-in">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <button
          onClick={() => setActiveModal("faqs")}
          className="w-full py-3 text-center text-xs font-bold text-fi-purple hover:underline flex items-center justify-center gap-1"
        >
          <span>View all FAQs</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
