"use client";

import React, { useState } from "react";
import {
  User,
  ShoppingBag,
  PiggyBank,
  Users,
  HelpCircle,
  Shield,
  FileText,
  LogOut,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { useApp } from "@/context/AppContext";

export function ProfileView() {
  const { userProfile, setActiveModal } = useApp();
  const [showKycDetails, setShowKycDetails] = useState(false);

  const quickActions = [
    {
      id: "profile-details",
      title: "Profile details",
      subtitle: "Name, contact and KYC info",
      icon: User,
      action: () => setShowKycDetails(!showKycDetails),
    },
    {
      id: "purchases",
      title: "Purchases",
      subtitle: "Orders, invoices and loan status",
      icon: ShoppingBag,
      action: () => setActiveModal("purchases"),
    },
    {
      id: "pledge-history",
      title: "Pledge history",
      subtitle: "Funds you pledged or released",
      icon: PiggyBank,
      action: () => alert(`Total pledged mutual fund units: ₹${userProfile.pledgedHoldingsValue.toLocaleString("en-IN")}`),
    },
    {
      id: "invite-friends",
      title: "Invite friends",
      subtitle: "Share the app, earn rewards",
      icon: Users,
      badge: "EARN ₹500",
      action: () => setActiveModal("refer"),
    },
    {
      id: "support-faqs",
      title: "Support & FAQs",
      subtitle: "Find answers or contact us",
      icon: HelpCircle,
      action: () => setActiveModal("faqs"),
    },
    {
      id: "privacy-policy",
      title: "Privacy policy",
      subtitle: "How we handle your data",
      icon: Shield,
      action: () => alert("1Fi Privacy Policy: Your financial information is encrypted using bank-grade 256-bit SSL encryption."),
    },
    {
      id: "terms-conditions",
      title: "Terms & conditions",
      subtitle: "Rules governing your use",
      icon: FileText,
      action: () => alert("1Fi Terms: RBI regulated lending guidelines apply."),
    },
  ];

  return (
    <div className="px-4 py-6 space-y-6 pb-12">
      {/* Title Header matching screenshot 3 & 5 */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Profile</h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Manage your account settings and personal preferences.
        </p>
      </div>

      {/* User Info Header Card matching screenshot 1 */}
      <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#6C38FF] to-[#8B5CF6] text-white flex items-center justify-center text-xl font-bold shadow-md">
          {userProfile.name ? userProfile.name[0].toUpperCase() : "U"}
        </div>

        <div className="space-y-0.5">
          <h2 className="text-base font-bold text-slate-900">
            {userProfile.name || "User"}
          </h2>
          <p className="text-xs text-slate-500 font-mono">{userProfile.phone}</p>
          <div className="flex items-center gap-1.5 pt-0.5">
            <span className="text-[11px] text-slate-400 font-medium">KYC Status:</span>
            {userProfile.kycStatus === "VERIFIED" ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                <CheckCircle2 className="w-3 h-3" />
                <span>Verified</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Pending</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Expanded KYC Details (matching screenshot 1) */}
      {showKycDetails && (
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-3.5 animate-in slide-in-from-top-4 duration-300">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              KYC DETAILS
            </span>
            <button
              onClick={() => setShowKycDetails(false)}
              className="text-xs font-semibold text-fi-purple hover:underline"
            >
              Hide
            </button>
          </div>

          <div className="space-y-3 text-xs divide-y divide-slate-50">
            <div className="flex items-center justify-between pt-1">
              <div>
                <span className="text-slate-400 block text-[10px]">Full Name</span>
                <span className="font-semibold text-slate-800">{userProfile.name}</span>
              </div>
              <span className="text-[11px] text-slate-400">— Not Provided</span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div>
                <span className="text-slate-400 block text-[10px]">Email</span>
                <span className="font-semibold text-slate-800">{userProfile.email}</span>
              </div>
              <span className="text-[11px] text-slate-400">— Not Provided</span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div>
                <span className="text-slate-400 block text-[10px]">Phone Number</span>
                <span className="font-semibold text-slate-800 font-mono">{userProfile.phone}</span>
              </div>
              <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                ✓ Verified
              </span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div>
                <span className="text-slate-400 block text-[10px]">PAN</span>
                <span className="font-semibold text-slate-800 font-mono">{userProfile.pan}</span>
              </div>
              <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                ✓ Verified
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions List matching screenshot 3 & 5 */}
      <div className="space-y-3">
        <div className="flex items-center gap-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          <span>QUICK ACTIONS</span>
        </div>

        <div className="space-y-2.5">
          {quickActions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={item.action}
                className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-fi-purple flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 group-hover:text-fi-purple transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-0.5">{item.subtitle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {item.badge && (
                    <span className="text-[10px] font-bold text-fi-purple bg-purple-50 px-2 py-0.5 rounded-md">
                      {item.badge}
                    </span>
                  )}
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-fi-purple transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Log Out Button matching screenshot 3 & 5 */}
      <button
        onClick={() => alert("Logged out successfully!")}
        className="w-full py-3.5 rounded-2xl bg-white border border-rose-100 text-rose-600 font-bold text-xs hover:bg-rose-50 transition-colors flex items-center justify-center gap-2 shadow-sm"
      >
        <LogOut className="w-4 h-4" />
        <span>Log out</span>
      </button>

      {/* Footer matching screenshot 5 */}
      <div className="text-center pt-2">
        <span className="text-xs text-slate-400 font-medium">
          Made with <span className="text-fi-purple">💜</span> by 1Fi
        </span>
      </div>
    </div>
  );
}
