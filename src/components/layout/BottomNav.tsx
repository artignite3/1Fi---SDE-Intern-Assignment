"use client";

import React from "react";
import { Home, Store, ReceiptIndianRupee, TrendingUp, User } from "lucide-react";
import { useApp } from "@/context/AppContext";

export function BottomNav() {
  const { activeBottomTab, setActiveBottomTab } = useApp();

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "shop", label: "Shop", icon: Store },
    { id: "dues", label: "EMI Dues", icon: ReceiptIndianRupee },
    { id: "limit", label: "Limit", icon: TrendingUp },
    { id: "profile", label: "Profile", icon: User },
  ] as const;

  return (
    <div className="fixed bottom-3 inset-x-0 max-w-[412px] mx-auto px-3.5 z-40 pointer-events-none">
      <nav className="pointer-events-auto bg-white/95 backdrop-blur-md border border-slate-100/90 rounded-[18px] px-1.5 py-1 shadow-[0_8px_30px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)]">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeBottomTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveBottomTab(item.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex flex-col items-center justify-start flex-1 pt-1.5 pb-1 relative transition-all duration-200 group active:scale-95 min-w-0"
              >
                {/* 1Fi Active indicator bar directly at the top of the pill */}
                <div
                  className={`h-[3.5px] rounded-full transition-all duration-200 mb-1 ${
                    isActive
                      ? "w-8 bg-fi-purple shadow-[0_1px_4px_rgba(92,36,235,0.4)]"
                      : "w-8 bg-transparent"
                  }`}
                />

                {/* Icon */}
                <div
                  className={`transition-colors duration-150 flex items-center justify-center ${
                    isActive ? "text-fi-purple" : "text-[#8E98A8] group-hover:text-slate-600"
                  }`}
                >
                  <Icon
                    className="w-[21px] h-[21px] transition-transform duration-200"
                    strokeWidth={isActive ? 2.3 : 1.8}
                  />
                </div>

                {/* Single-line Label with exact baseline alignment */}
                <span
                  className={`text-[10.5px] tracking-tight leading-tight mt-1 whitespace-nowrap transition-colors duration-150 ${
                    isActive
                      ? "text-fi-purple font-bold"
                      : "text-[#8E98A8] font-medium group-hover:text-slate-600"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

