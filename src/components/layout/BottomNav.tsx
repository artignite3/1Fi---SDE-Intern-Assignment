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
    <nav className="fixed sm:sticky bottom-0 left-0 right-0 max-w-md mx-auto bg-white/95 backdrop-blur-lg border-t border-slate-100/90 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeBottomTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveBottomTab(item.id);
                // Scroll to top when switching main tabs
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex flex-col items-center justify-center flex-1 py-1 relative transition-all duration-200 group active:scale-95"
            >
              {/* Active indicator bar */}
              {isActive && (
                <div className="absolute -top-2 w-8 h-1 bg-fi-purple rounded-full shadow-[0_2px_8px_rgba(108,56,255,0.4)] animate-in fade-in zoom-in-75 duration-200" />
              )}

              <div
                className={`p-1 rounded-xl transition-colors ${
                  isActive ? "text-fi-purple" : "text-slate-400 group-hover:text-slate-600"
                }`}
              >
                <Icon className={`w-5 h-5 transition-transform ${isActive ? "scale-110" : ""}`} />
              </div>

              <span
                className={`text-[11px] font-medium tracking-tight mt-0.5 transition-colors ${
                  isActive ? "text-fi-purple font-semibold" : "text-slate-400 group-hover:text-slate-600"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
