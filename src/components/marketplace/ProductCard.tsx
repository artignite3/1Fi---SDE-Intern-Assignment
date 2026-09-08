"use client";

import React from "react";
import { Star, ChevronRight } from "lucide-react";
import { Product } from "@/lib/types";
import { calculateEMIPlan, formatRupees } from "@/lib/utils/emi";
import { useApp } from "@/context/AppContext";

export function ProductCard({ product }: { product: Product }) {
  const { openProductDetails } = useApp();

  const maxTenure = Math.max(...product.availableTenures);
  const minEmiPlan = calculateEMIPlan(product.basePrice, maxTenure, true);

  return (
    <div
      onClick={() => openProductDetails(product)}
      className="bg-white rounded-[20px] p-3 border border-fi-border shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
    >
      {/* Top Floating Tag / Discount */}
      <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1 items-start">
        {product.tag && (
          <span className="px-2 py-0.5 rounded-full bg-slate-900/85 backdrop-blur-md text-white text-[8.5px] font-bold tracking-wide uppercase shadow-sm">
            {product.tag}
          </span>
        )}
        {product.discountPercentage > 0 && (
          <span className="px-1.5 py-0.5 rounded-full bg-emerald-500 text-white text-[8.5px] font-bold">
            {product.discountPercentage}% OFF
          </span>
        )}
      </div>

      <div>
        {/* Product Image */}
        <div className="w-full aspect-square rounded-[16px] bg-[#F8F9FC] overflow-hidden relative flex items-center justify-center p-2 mb-2.5">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onError={(e) => {
              const target = e.currentTarget;
              target.onerror = null;
              target.src = "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&auto=format&fit=crop&q=80";
            }}
          />
        </div>

        {/* Brand & Ratings */}
        <div className="flex items-center justify-between gap-1 mb-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-fi-muted">
            {product.brand}
          </span>
          <div className="flex items-center gap-0.5 bg-amber-50 px-1.5 py-0.5 rounded-md text-[9.5px] font-bold text-amber-700">
            <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
            <span>{product.rating}</span>
          </div>
        </div>

        {/* Product Title */}
        <h3 className="text-[12.5px] font-bold text-fi-text line-clamp-2 leading-snug group-hover:text-fi-purple transition-colors">
          {product.title}
        </h3>

        {/* Color variants preview dots */}
        {product.availableColors && product.availableColors.length > 0 && (
          <div className="flex items-center gap-1 mt-1.5">
            {product.availableColors.slice(0, 4).map((c, i) => (
              <span
                key={i}
                className="w-2 h-2 rounded-full border border-slate-300"
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
            {product.availableColors.length > 4 && (
              <span className="text-[8.5px] text-fi-muted font-medium">
                +{product.availableColors.length - 4}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Pricing & 0% EMI Section */}
      <div className="mt-2.5 pt-2 border-t border-slate-100 space-y-1.5">
        <div className="flex items-baseline gap-1.5">
          <span className="text-[14px] font-extrabold text-fi-text">
            {formatRupees(product.basePrice)}
          </span>
          {product.originalPrice > product.basePrice && (
            <span className="text-[10px] text-slate-400 line-through">
              {formatRupees(product.originalPrice)}
            </span>
          )}
        </div>

        {/* 0% EMI Installment Badge */}
        <div className="bg-fi-purple-light group-hover:bg-[#EFEBFF] border border-[#E9E2FB] rounded-[13px] px-2 py-1.5 flex items-center justify-between transition-colors">
          <div className="flex flex-col">
            <span className="text-[8.5px] text-fi-purple/80 font-medium leading-none">0% No-cost EMI</span>
            <span className="text-[11px] font-black text-fi-purple mt-0.5 leading-none">
              {formatRupees(minEmiPlan.monthlyAmount)}
              <span className="text-[8.5px] font-semibold text-fi-purple/70">/mo</span>
            </span>
          </div>
          <div className="w-4.5 h-4.5 rounded-full bg-fi-purple text-white flex items-center justify-center shrink-0 shadow-sm p-0.5">
            <ChevronRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
