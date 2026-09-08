"use client";

import React, { useState } from "react";
import { Lock, Sparkles, TrendingUp, ShieldCheck, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { formatRupees } from "@/lib/utils/emi";

export function LimitView() {
  const { userProfile, setUserProfile, setActiveBottomTab, setShopSubTab } = useApp();
  const [isFetching, setIsFetching] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(true);

  const handleFetchPortfolio = () => {
    setIsFetching(true);
    setTimeout(() => {
      setIsFetching(false);
      setIsUnlocked(true);
      setUserProfile((prev) => ({
        ...prev,
        creditLimitTotal: 500000,
        creditLimitAvailable: 435000,
        mutualFundHoldingsValue: 1250000,
      }));
    }, 1500);
  };

  return (
    <div className="min-h-[75vh] flex flex-col justify-center px-5 py-8">
      {/* Credit Limit Lock Illustration */}
      <div className="flex flex-col items-center justify-center text-center space-y-6">
        <div className="relative w-28 h-28 flex items-center justify-center">
          <div className="w-20 h-24 bg-gradient-to-b from-[#7C3AED] to-[#581C87] rounded-3xl shadow-xl flex items-center justify-center relative border-2 border-purple-300/40">
            {/* Lock shackle */}
            <div className="w-12 h-14 border-4 border-amber-300 rounded-t-full absolute -top-8 border-b-0" />
            {/* Keyhole */}
            <div className="w-3 h-6 bg-slate-950 rounded-full" />

            <Sparkles className="w-4 h-4 text-purple-300 absolute -top-1 -left-3" />
            <Sparkles className="w-4 h-4 text-amber-300 absolute bottom-2 -right-3" />
          </div>
          <div className="w-24 h-4 bg-purple-200/50 rounded-full absolute -bottom-2 blur-sm" />
        </div>

        <div className="space-y-1.5 max-w-xs">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            CHECK ELIGIBILITY
          </span>
          <h2 className="text-lg font-bold text-slate-900 leading-tight">
            Shop on 0% interest backed by your Mutual Funds
          </h2>
        </div>

        {/* Dynamic Credit Limit Card */}
        <div className="w-full max-w-sm bg-white rounded-3xl p-5 border border-slate-100 shadow-sm text-left space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Eligible Credit Limit
              </span>
              <h3 className="text-2xl font-black text-fi-purple">
                {formatRupees(userProfile.creditLimitAvailable)}
              </h3>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold">
              ✓ Pre-Approved
            </span>
          </div>

          <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
            <div className="flex items-center justify-between">
              <span>Total MF Holdings (MFCentral):</span>
              <span className="font-bold text-slate-900">
                {formatRupees(userProfile.mutualFundHoldingsValue)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Current Pledged Collateral:</span>
              <span className="font-bold text-slate-900">
                {formatRupees(userProfile.pledgedHoldingsValue)}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-sm space-y-2.5">
          <button
            onClick={() => {
              setActiveBottomTab("shop");
              setShopSubTab("marketplace");
            }}
            className="w-full py-4 px-6 bg-fi-purple text-white rounded-full text-xs font-bold hover:bg-fi-purple-hover transition-all shadow-fi-btn active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Browse 1Fi Marketplace</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleFetchPortfolio}
            disabled={isFetching}
            className="w-full py-3 px-6 bg-purple-50 text-fi-purple rounded-full text-xs font-bold hover:bg-purple-100 transition-all flex items-center justify-center gap-2"
          >
            {isFetching ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Refreshing CAMS / KFintech Data...</span>
              </>
            ) : (
              <span>Refresh Portfolio Balance</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
