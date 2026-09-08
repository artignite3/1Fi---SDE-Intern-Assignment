"use client";

import React, { useState } from "react";
import { X, Copy, Share2, Users, Gift, Check, Sparkles, ShieldCheck } from "lucide-react";
import { useApp } from "@/context/AppContext";

export function ReferAndEarnModal({ onClose }: { onClose: () => void }) {
  const { userProfile } = useApp();
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(userProfile.referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Join 1Fi - 0% EMI with Mutual Funds",
        text: `Use my code ${userProfile.referralCode} to shop with 0% interest on 1Fi!`,
        url: window.location.href,
      });
    } else {
      handleCopyCode();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white w-full max-w-lg rounded-t-[36px] sm:rounded-3xl shadow-2xl animate-in slide-in-from-bottom duration-300 max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900">Refer & Earn</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-y-auto p-5 space-y-5 flex-1">
          {/* Refer & Earn Hero Banner */}
          <div className="relative overflow-hidden rounded-3xl p-5 bg-gradient-to-r from-[#1E085A] via-[#3B0FA0] to-[#6C38FF] text-white shadow-md">
            <div className="relative z-10 max-w-[65%] space-y-1">
              <p className="text-xs text-purple-100">Invite your friends & earn</p>
              <h3 className="text-lg font-black text-white">upto ₹50,000</h3>
              <span className="inline-block text-[11px] font-bold text-amber-300 bg-black/30 px-2 py-0.5 rounded-full">
                1 credit = ₹1
              </span>
            </div>
            <div className="absolute top-4 right-4 text-right">
              <div className="text-xl font-black text-white tracking-widest">
                REFER
              </div>
              <div className="text-sm font-black text-amber-300">
                AND EARN
              </div>
            </div>
          </div>

          {/* Referral Stats */}
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <span className="text-lg font-black text-slate-900 block">0</span>
              <span className="text-[10px] text-slate-500 font-medium uppercase">
                Friends Referred
              </span>
            </div>
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <span className="text-lg font-black text-slate-900 block">0</span>
              <span className="text-[10px] text-slate-500 font-medium uppercase">
                Credits Redeemed
              </span>
            </div>
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <span className="text-lg font-black text-fi-purple block">0</span>
              <span className="text-[10px] text-slate-500 font-medium uppercase">
                Credits Remaining
              </span>
            </div>
          </div>

          {/* Referral Code & Actions */}
          <div className="space-y-2.5">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block text-center">
              YOUR REFERRAL CODE
            </span>
            <div className="p-3 bg-purple-50 rounded-2xl border border-purple-200 flex items-center justify-between">
              <span className="text-lg font-black tracking-widest text-fi-purple font-mono pl-3">
                {userProfile.referralCode}
              </span>
              <button
                onClick={handleCopyCode}
                className="p-2 rounded-xl bg-white shadow-sm text-fi-purple hover:bg-purple-100 transition-colors"
                title="Copy code"
              >
                {copied ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleCopyCode}
                className="flex-1 py-3 px-4 rounded-2xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-2"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? "Copied!" : "Copy link"}</span>
              </button>
              <button
                onClick={handleShare}
                className="flex-1 py-3 px-4 rounded-2xl bg-fi-purple text-white text-xs font-bold hover:bg-fi-purple-hover flex items-center justify-center gap-2 shadow-fi-btn"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share link</span>
              </button>
            </div>
          </div>

          {/* Reward Tiers Table */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
              Reward Tiers
            </span>
            <div className="bg-slate-50 rounded-2xl p-4 divide-y divide-slate-200/60 text-xs">
              <div className="py-2 flex items-center justify-between">
                <span className="text-slate-600">₹10K - ₹50K</span>
                <span className="font-bold text-slate-900">50 credits</span>
              </div>
              <div className="py-2 flex items-center justify-between">
                <span className="text-slate-600">₹50K - ₹1L</span>
                <span className="font-bold text-slate-900">100 credits</span>
              </div>
              <div className="py-2 flex items-center justify-between">
                <span className="text-slate-600">₹1L - ₹5L</span>
                <span className="font-bold text-slate-900">200 credits</span>
              </div>
              <div className="py-2 flex items-center justify-between">
                <span className="text-slate-600">₹5L - ₹10L</span>
                <span className="font-bold text-slate-900">300 credits</span>
              </div>
              <div className="py-2 flex items-center justify-between">
                <span className="text-slate-600">₹10L+</span>
                <span className="font-bold text-slate-900">500 credits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
