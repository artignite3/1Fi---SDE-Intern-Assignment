"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { useApp } from "@/context/AppContext";

export function ShopHeader() {
  const { shopSubTab, setShopSubTab } = useApp();

  return (
    <div className="w-full select-none">
      {/* Hero Banner matching screenshot 12 */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#120E52] via-[#241380] to-[#5C24EB] text-white pt-5 pb-7 px-5 rounded-b-[30px] shadow-md">
        {/* Ambient glow */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-16 -left-8 w-36 h-36 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* Confetti flakes */}
        <div className="absolute top-4 right-16 w-2 h-1.5 bg-yellow-400 rounded-sm rotate-45 opacity-80" />
        <div className="absolute top-12 right-28 w-1.5 h-1.5 bg-amber-300 rounded-full opacity-70" />
        <div className="absolute bottom-6 right-36 w-2.5 h-1 bg-yellow-400 -rotate-12 opacity-80" />

        <div className="relative z-10 max-w-sm">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white mb-2.5 tracking-wide shadow-sm">
            <Sparkles className="w-3 h-3 text-yellow-300 fill-yellow-300" />
            <span>NO-COST EMIs</span>
          </div>

          <div className="flex items-center justify-between gap-2">
            <div>
              <h1 className="text-[22px] font-extrabold tracking-tight text-white leading-[1.2]">
                Shop today, <br />
                Pay later using <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-indigo-100">
                  Mutual funds.
                </span>
              </h1>
              <p className="text-[11px] text-purple-100/80 mt-2 font-normal max-w-[210px] leading-relaxed">
                No credit score required. No interest. Backed by your investments.
              </p>
            </div>

            {/* Visual Icon Illustration */}
            <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
              <div className="relative transform hover:scale-105 transition-transform duration-300">
                <div className="w-18 h-18 bg-gradient-to-tr from-amber-500 to-yellow-400 rounded-2xl shadow-xl flex flex-col items-center justify-center text-slate-900 border-2 border-yellow-200/60 transform -rotate-6 p-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-amber-950">0%</span>
                  <span className="text-[8px] font-bold text-amber-900">INTEREST</span>
                  <span className="text-base mt-0.5">🛍️</span>
                </div>
                <div className="absolute -top-2.5 -right-2 bg-white text-fi-purple px-1.5 py-0.5 rounded-lg shadow-md border border-purple-100 text-[10px] font-black">
                  ₹0 fee
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Tabs Switcher matching 1Fi design (clean, slightly lighter background) */}
      <div className="px-4 -mt-4 relative z-20">
        <div className="bg-[#F5F3FF]/95 backdrop-blur-md p-1 rounded-full flex items-center shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-white/95">
          <button
            onClick={() => setShopSubTab("top-brands")}
            className={`flex-1 py-2 rounded-full text-[11px] font-bold tracking-tight transition-all text-center relative ${
              shopSubTab === "top-brands"
                ? "bg-white text-fi-purple shadow-[0_2px_8px_rgba(92,36,235,0.08)]"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Top Brands
            {shopSubTab === "top-brands" && (
              <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-6 h-[2.5px] bg-fi-purple rounded-full" />
            )}
          </button>

          <button
            onClick={() => setShopSubTab("nearby-stores")}
            className={`flex-1 py-2 rounded-full text-[11px] font-bold tracking-tight transition-all text-center relative ${
              shopSubTab === "nearby-stores"
                ? "bg-white text-fi-purple shadow-[0_2px_8px_rgba(92,36,235,0.08)]"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Nearby Stores
            {shopSubTab === "nearby-stores" && (
              <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-6 h-[2.5px] bg-fi-purple rounded-full" />
            )}
          </button>

          <button
            onClick={() => setShopSubTab("marketplace")}
            className={`flex-1 py-2 rounded-full text-[11px] font-bold tracking-tight transition-all text-center relative flex items-center justify-center gap-1 ${
              shopSubTab === "marketplace"
                ? "bg-fi-purple text-white shadow-fi-btn"
                : "text-fi-purple hover:bg-white/60"
            }`}
          >
            <span>1Fi Marketplace</span>
            {shopSubTab !== "marketplace" && (
              <span className="w-1.5 h-1.5 rounded-full bg-fi-purple" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
