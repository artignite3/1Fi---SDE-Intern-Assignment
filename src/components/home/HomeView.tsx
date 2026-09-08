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

  const offersList = [
    {
      id: 1,
      tag: "ADVENTURE RIDE DEAL",
      title: "Upgrade to your next Adventurous Ride",
      badge: "✓ Adventure on 60m EMIs",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&auto=format&fit=crop&q=80",
      gradient: "from-[#0A1128] via-[#1C2541] to-[#3A506B]",
      accent: "text-cyan-300",
    },
    {
      id: 2,
      tag: "APPLE FLAGSHIP DEAL",
      title: "Upgrade to iPhone 17 Pro with Easy EMIs",
      badge: "✓ Upto 24m no cost EMI",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop&q=80",
      gradient: "from-[#1A0B2E] via-[#2D1B4E] to-[#4A154B]",
      accent: "text-amber-300",
    },
    {
      id: 3,
      tag: "HOLIDAY VOUCHER DEAL",
      title: "Book Your Euro-phoric Escape with 1Fi",
      badge: "✓ Starts at ₹2,481/mo",
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&auto=format&fit=crop&q=80",
      gradient: "from-[#3B1204] via-[#5C230B] to-[#1E1B4B]",
      accent: "text-amber-300",
    },
    {
      id: 4,
      tag: "AUDIO & SOUND DEAL",
      title: "Experience Pure Sound with Sony ANC",
      badge: "✓ Starts at ₹1,666/mo",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
      gradient: "from-[#08182B] via-[#0F294A] to-[#1E1B4B]",
      accent: "text-sky-300",
    },
    {
      id: 5,
      tag: "GOLD & LUXURY DEAL",
      title: "Tanishq 24K Gold Coins at 0% EMI",
      badge: "✓ Upto 6m no cost EMI",
      image: "https://images.unsplash.com/photo-1611591475152-478311399767?w=600&auto=format&fit=crop&q=80",
      gradient: "from-[#2D0B20] via-[#481234] to-[#3B0764]",
      accent: "text-yellow-300",
    },
  ];

  const [activeOfferIdx, setActiveOfferIdx] = useState(0);

  // Auto slide offers carousel every 3.5 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveOfferIdx((prev) => (prev + 1) % offersList.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [offersList.length]);

  // Full partner brands list for smooth continuous marquee
  const allBrands = [
    { name: "EaseMyTrip", logo: "/brands/easemytrip.svg" },
    { name: "Yatra", logo: "/brands/yatra.svg" },
    { name: "Taj Hotels", logo: "/brands/taj.svg" },
    { name: "Apple", logo: "/brands/apple.svg" },
    { name: "Reliance Digital", logo: "/brands/reliance-digital.svg" },
    { name: "Croma", logo: "/brands/croma.svg" },
    { name: "Vijay Sales", logo: "/brands/vijay-sales.svg" },
    { name: "MakeMyTrip", logo: "/brands/makemytrip.svg" },
    { name: "Air India", logo: "/brands/air-india.svg" },
    { name: "Goibibo", logo: "/brands/goibibo.svg" },
    { name: "Wakefit", logo: "/brands/wakefit.svg" },
    { name: "Tanishq", logo: "/brands/tanishq.svg" },
    { name: "CaratLane", logo: "/brands/caratlane.svg" },
    { name: "Dyson", logo: "/brands/dyson.svg" },
    { name: "Sony", logo: "/brands/sony.svg" },
    { name: "LG", logo: "/brands/lg.svg" },
    { name: "World of Titan", logo: "/brands/titan.svg" },
    { name: "CGH Earth", logo: "/brands/cgh-earth.svg" },
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
              className="mt-2 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white text-fi-purple text-xs font-bold shadow-md hover:bg-purple-50 transition-all active:scale-95"
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

      {/* Offers auto-sliding carousel matching video 00:00 - 00:10 */}
      <div className="px-4 space-y-2.5">
        <div className="flex items-center gap-1.5 text-[11px] font-bold text-fi-purple uppercase tracking-wider">
          <div className="w-1.5 h-3.5 bg-fi-purple rounded-full" />
          <span>OFFERS</span>
        </div>

        <div className="relative overflow-hidden rounded-[24px] shadow-sm">
          {/* Slide item */}
          <div
            onClick={() => {
              setActiveBottomTab("shop");
              setShopSubTab("marketplace");
            }}
            className={`relative overflow-hidden p-5 bg-gradient-to-r ${offersList[activeOfferIdx].gradient} text-white cursor-pointer min-h-[148px] flex flex-col justify-between transition-all duration-500`}
          >
            {/* Background image preview with soft overlay */}
            <div className="absolute inset-0 opacity-25 mix-blend-overlay">
              <img
                src={offersList[activeOfferIdx].image}
                alt="deal"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 space-y-1.5 max-w-[70%]">
              <span className={`text-[9px] font-black uppercase tracking-wider ${offersList[activeOfferIdx].accent}`}>
                {offersList[activeOfferIdx].tag}
              </span>
              <h3 className="text-sm font-bold text-white leading-snug">
                {offersList[activeOfferIdx].title}
              </h3>
            </div>

            <div className="relative z-10 pt-2">
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-[10.5px] font-semibold text-white border border-white/10">
                <span>{offersList[activeOfferIdx].badge}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Pagination Dots matching video */}
        <div className="flex items-center justify-center gap-1.5 pt-1">
          {offersList.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveOfferIdx(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeOfferIdx === idx
                  ? "w-6 bg-fi-purple"
                  : "w-1.5 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Shop Using 1Fi at Top Brands with continuous smooth auto-scrolling marquee */}
      <div className="space-y-3">
        <div className="px-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-fi-purple uppercase tracking-wider">
            <div className="w-1.5 h-3.5 bg-fi-purple rounded-full" />
            <span>SHOP USING 1FI AT TOP BRANDS</span>
          </div>
          <button
            onClick={() => {
              setActiveBottomTab("shop");
              setShopSubTab("top-brands");
            }}
            className="text-[11px] font-semibold text-fi-purple hover:underline"
          >
            View All
          </button>
        </div>

        {/* Continuous Infinite Marquee Rail */}
        <div className="relative overflow-hidden w-full py-1">
          {/* Subtle edge fade gradient masks */}
          <div className="absolute left-0 inset-y-0 w-6 bg-gradient-to-r from-fi-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-6 bg-gradient-to-l from-fi-bg to-transparent z-10 pointer-events-none" />

          {/* Marquee Row (Doubled items for infinite seamless scroll) */}
          <div className="animate-marquee-left flex gap-3 px-3">
            {[...allBrands, ...allBrands].map((brand, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setActiveBottomTab("shop");
                  setShopSubTab("top-brands");
                }}
                className="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer group select-none active:scale-95 transition-transform"
              >
                <div className="w-[66px] h-[66px] rounded-[20px] bg-white p-2.5 border border-[#F0F2F9] shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex items-center justify-center group-hover:border-fi-purple transition-all">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                </div>
                <span className="text-[10px] font-semibold text-slate-700 text-center max-w-[66px] truncate">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
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
