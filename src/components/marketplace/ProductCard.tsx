"use client";

import React from "react";
import { Sparkles, Star, ChevronRight, Check } from "lucide-react";
import { Product } from "@/lib/types";
import { calculateEMIPlan, formatINR, formatRupees } from "@/lib/utils/emi";
import { useApp } from "@/context/AppContext";

export function ProductCard({ product }: { product: Product }) {
  const { openProductDetails } = useApp();

  // Calculate lowest monthly EMI for maximum tenure (e.g. 24 months)
  const maxTenure = Math.max(...product.availableTenures);
  const minEmiPlan = calculateEMIPlan(product.basePrice, maxTenure, true);

  return (
    <div
      onClick={() => openProductDetails(product)}
      className="bg-white rounded-3xl p-3.5 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
    >
      {/* Top Floating Tag / Discount */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start">
        {product.tag && (
          <span className="px-2 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[9px] font-bold tracking-wide uppercase shadow-sm">
            {product.tag}
          </span>
        )}
        {product.discountPercentage > 0 && (
          <span className="px-1.5 py-0.5 rounded-full bg-emerald-500 text-white text-[9px] font-bold">
            {product.discountPercentage}% OFF
          </span>
        )}
      </div>

      <div>
        {/* Product Image */}
        <div className="w-full aspect-square rounded-2xl bg-slate-50/80 overflow-hidden relative flex items-center justify-center p-2 mb-3">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Brand & Ratings */}
        <div className="flex items-center justify-between gap-1 mb-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            {product.brand}
          </span>
          <div className="flex items-center gap-0.5 bg-amber-50 px-1.5 py-0.5 rounded-md text-[10px] font-bold text-amber-700">
            <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
            <span>{product.rating}</span>
          </div>
        </div>

        {/* Product Title */}
        <h3 className="text-xs font-bold text-slate-900 line-clamp-2 leading-snug group-hover:text-fi-purple transition-colors">
          {product.title}
        </h3>

        {/* Color variants preview dots */}
        {product.availableColors && product.availableColors.length > 0 && (
          <div className="flex items-center gap-1 mt-2">
            {product.availableColors.slice(0, 4).map((c, i) => (
              <span
                key={i}
                className="w-2.5 h-2.5 rounded-full border border-slate-200"
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
            {product.availableColors.length > 4 && (
              <span className="text-[9px] text-slate-400 font-medium">
                +{product.availableColors.length - 4}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Pricing & 0% EMI Section */}
      <div className="mt-3 pt-2.5 border-t border-slate-100/80 space-y-1.5">
        <div className="flex items-baseline gap-1.5">
          <span className="text-sm font-black text-slate-900">
            {formatRupees(product.basePrice)}
          </span>
          {product.originalPrice > product.basePrice && (
            <span className="text-[10px] text-slate-400 line-through">
              {formatRupees(product.originalPrice)}
            </span>
          )}
        </div>

        {/* 1Fi EMI Pill */}
        <div className="bg-fi-purple-light/70 group-hover:bg-fi-purple-light border border-purple-100 rounded-xl px-2 py-1.5 flex items-center justify-between transition-colors">
          <div className="flex flex-col">
            <span className="text-[9px] text-fi-purple/80 font-medium">0% No-cost EMI</span>
            <span className="text-[11px] font-black text-fi-purple">
              {formatRupees(minEmiPlan.monthlyAmount)}
              <span className="text-[9px] font-semibold text-fi-purple/70">/mo</span>
            </span>
          </div>
          <div className="w-5 h-5 rounded-full bg-fi-purple text-white flex items-center justify-center shrink-0 shadow-sm">
            <ChevronRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
