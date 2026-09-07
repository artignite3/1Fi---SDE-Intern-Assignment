"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { useApp } from "@/context/AppContext";

export function ShopHeader() {
  const { shopSubTab, setShopSubTab } = useApp();

  return (
    <div className="w-full">
      {/* Hero Banner with 1Fi Visual Theme */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0F144B] via-[#231A85] to-[#5926E6] text-white pt-6 pb-8 px-5 rounded-b-[28px] shadow-lg">
        {/* Decorative background glow circles */}
        <div className="absolute -top-16 -right-16 w-56 h-56 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 -left-10 w-40 h-40 bg-indigo-400/20 rounded-full blur-2xl pointer-events-none" />

        {/* Floating confetti dots */}
        <div className="absolute top-4 right-12 w-2.5 h-1.5 bg-yellow-400 rounded-sm rotate-45 opacity-80" />
        <div className="absolute top-14 right-28 w-2 h-2 bg-yellow-300 rounded-full opacity-70" />
        <div className="absolute bottom-10 right-40 w-3 h-1.5 bg-yellow-400 -rotate-12 opacity-80" />

        <div className="relative z-10 max-w-md">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-white mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
            <span>NO-COST EMIs</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white leading-tight">
                Shop today, <br />
                Pay later using <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-indigo-200">
                  Mutual funds.
                </span>
              </h1>
              <p className="text-xs text-indigo-100/80 mt-2 font-normal max-w-[240px] leading-relaxed">
                No credit score required. No interest. Backed by your investments.
              </p>
            </div>

            {/* Shopping & Lifestyle Illustration elements */}
            <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
              <div className="relative transform hover:scale-105 transition-transform duration-300">
                {/* Yellow shopping bag & 0% interest badge */}
                <div className="w-20 h-20 bg-gradient-to-tr from-amber-500 to-yellow-400 rounded-2xl shadow-xl flex flex-col items-center justify-center text-slate-900 border-2 border-yellow-200/50 transform -rotate-6">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-950">0%</span>
                  <span className="text-[9px] font-bold text-amber-900">INTEREST</span>
                  <span className="text-lg">🛍️</span>
                </div>
                <div className="absolute -top-3 -right-2 bg-white text-fi-purple p-1.5 rounded-xl shadow-lg border border-purple-100 text-xs font-black">
                  ₹0 fee
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Tabs Switcher (Top Brands, Nearby Stores, 1Fi Marketplace) */}
      <div className="px-4 -mt-4 relative z-20">
        <div className="bg-[#ECEBFA]/90 backdrop-blur-md p-1.5 rounded-2xl flex items-center shadow-md border border-white/80">
          <button
            onClick={() => setShopSubTab("top-brands")}
            className={`flex-1 py-2.5 px-2 rounded-xl text-xs font-semibold transition-all duration-200 text-center relative ${
              shopSubTab === "top-brands"
                ? "bg-white text-fi-purple shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Top Brands
            {shopSubTab === "top-brands" && (
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-fi-purple rounded-full" />
            )}
          </button>

          <button
            onClick={() => setShopSubTab("nearby-stores")}
            className={`flex-1 py-2.5 px-2 rounded-xl text-xs font-semibold transition-all duration-200 text-center relative ${
              shopSubTab === "nearby-stores"
                ? "bg-white text-fi-purple shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Nearby Stores
            {shopSubTab === "nearby-stores" && (
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-fi-purple rounded-full" />
            )}
          </button>

          <button
            onClick={() => setShopSubTab("marketplace")}
            className={`flex-1 py-2.5 px-2 rounded-xl text-xs font-semibold transition-all duration-200 text-center relative flex items-center justify-center gap-1 ${
              shopSubTab === "marketplace"
                ? "bg-fi-purple text-white shadow-[0_4px_14px_rgba(108,56,255,0.4)]"
                : "text-fi-purple hover:bg-white/50 font-bold"
            }`}
          >
            <span>1Fi Market</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </button>
        </div>
      </div>
    </div>
  );
}
