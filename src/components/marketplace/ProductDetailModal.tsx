"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Star,
  Check,
  Shield,
  Truck,
  RotateCcw,
  Sparkles,
  ChevronRight,
  Share2,
  Heart,
} from "lucide-react";
import { Product, ProductVariant, EMIPlan } from "@/lib/types";
import { formatRupees } from "@/lib/utils/emi";
import { EmiPlanSelector } from "./EmiPlanSelector";
import { useApp } from "@/context/AppContext";

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  onProceedToCheckout: (variant: ProductVariant, plan: EMIPlan) => void;
}

export function ProductDetailModal({
  product,
  onClose,
  onProceedToCheckout,
}: ProductDetailModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(
    product.availableColors[0]?.name || ""
  );
  const [selectedStorage, setSelectedStorage] = useState(
    product.availableStorage ? product.availableStorage[0] : ""
  );
  const [activeVariant, setActiveVariant] = useState<ProductVariant>(
    product.variants[0]
  );
  const [selectedPlan, setSelectedPlan] = useState<EMIPlan | null>(null);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Sync variant when color or storage changes
  useEffect(() => {
    let matchedVariant = product.variants.find((v) => {
      const matchColor = selectedColor
        ? v.attributes.color?.name === selectedColor
        : true;
      const matchStorage = selectedStorage
        ? v.attributes.storage === selectedStorage ||
          v.attributes.size === selectedStorage
        : true;
      return matchColor && matchStorage;
    });

    if (!matchedVariant && product.variants.length > 0) {
      // Fallback to closest match or first variant
      matchedVariant =
        product.variants.find(
          (v) =>
            v.attributes.storage === selectedStorage ||
            v.attributes.size === selectedStorage
        ) || product.variants[0];
    }

    if (matchedVariant) {
      setActiveVariant(matchedVariant);
    }
  }, [selectedColor, selectedStorage, product]);

  const currentPrice = activeVariant ? activeVariant.price : product.basePrice;
  const currentOriginalPrice = activeVariant
    ? activeVariant.originalPrice
    : product.originalPrice;

  const handleProceed = () => {
    if (activeVariant && selectedPlan) {
      onProceedToCheckout(activeVariant, selectedPlan);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white w-full max-w-lg rounded-t-[36px] sm:rounded-3xl shadow-2xl animate-in slide-in-from-bottom duration-300 max-h-[92vh] flex flex-col overflow-hidden relative">
        {/* Top Floating Action Bar */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center text-slate-700 hover:text-slate-900 pointer-events-auto transition-transform hover:scale-105"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center text-slate-700 hover:text-rose-500 transition-colors"
            >
              <Heart
                className={`w-5 h-5 ${
                  isWishlisted ? "fill-rose-500 text-rose-500" : ""
                }`}
              />
            </button>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: product.title,
                    text: `Shop ${product.title} at 0% interest on 1Fi!`,
                    url: window.location.href,
                  });
                } else {
                  alert("Product link copied to clipboard!");
                }
              }}
              className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center text-slate-700 hover:text-slate-900 transition-transform hover:scale-105"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto flex-1 pb-28">
          {/* Main Gallery Banner */}
          <div className="bg-slate-50 relative pt-10 pb-6 px-6 flex flex-col items-center">
            <div className="w-64 h-64 relative flex items-center justify-center my-2">
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.title}
                className="max-h-full max-w-full object-contain mix-blend-multiply transition-all duration-300"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.onerror = null;
                  target.src = "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&auto=format&fit=crop&q=80";
                }}
              />
            </div>

            {/* Thumbnail dots */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-2 mt-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-10 h-10 rounded-xl border-2 overflow-hidden transition-all ${
                      selectedImageIndex === idx
                        ? "border-fi-purple scale-110 shadow-sm"
                        : "border-slate-200 opacity-60"
                    }`}
                  >
                    <img
                      src={img}
                      alt="thumbnail"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.onerror = null;
                        target.src = "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=100&auto=format&fit=crop&q=80";
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="p-5 space-y-6">
            {/* Header info */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold tracking-wider text-fi-purple uppercase bg-purple-50 px-2.5 py-1 rounded-full">
                  {product.brand}
                </span>
                <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-lg text-xs font-bold text-amber-700">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{product.rating}</span>
                  <span className="text-slate-400 font-normal">
                    ({product.reviewsCount})
                  </span>
                </div>
              </div>

              <h1 className="text-lg font-bold text-slate-900 leading-snug">
                {product.title}
              </h1>
              <p className="text-xs text-slate-500 mt-1">{product.subtitle}</p>

              {/* Pricing breakdown */}
              <div className="flex items-baseline gap-2.5 mt-3">
                <span className="text-2xl font-black text-slate-900">
                  {formatRupees(currentPrice)}
                </span>
                {currentOriginalPrice > currentPrice && (
                  <span className="text-sm text-slate-400 line-through">
                    {formatRupees(currentOriginalPrice)}
                  </span>
                )}
                {product.discountPercentage > 0 && (
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    {product.discountPercentage}% OFF
                  </span>
                )}
              </div>
            </div>

            {/* Color Variant Selector */}
            {product.availableColors && product.availableColors.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Color: <span className="text-slate-900 font-bold">{selectedColor}</span>
                  </label>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {product.availableColors.map((col) => {
                    const isSelected = selectedColor === col.name;
                    return (
                      <button
                        key={col.name}
                        onClick={() => setSelectedColor(col.name)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl border-2 transition-all ${
                          isSelected
                            ? "border-fi-purple bg-purple-50/50 shadow-sm"
                            : "border-slate-200 hover:border-slate-300 bg-white"
                        }`}
                      >
                        <span
                          className="w-4 h-4 rounded-full border border-slate-300 shadow-inner"
                          style={{ backgroundColor: col.hex }}
                        />
                        <span className="text-xs font-semibold text-slate-800">
                          {col.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Storage / Size Selector */}
            {product.availableStorage && product.availableStorage.length > 0 && (
              <div className="space-y-2.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Option / Capacity
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {product.availableStorage.map((size) => {
                    const isSelected = selectedStorage === size;
                    return (
                      <button
                        key={size}
                        onClick={() => setSelectedStorage(size)}
                        className={`px-4 py-2.5 rounded-xl border-2 text-xs font-bold transition-all ${
                          isSelected
                            ? "border-fi-purple bg-purple-50 text-fi-purple shadow-sm"
                            : "border-slate-200 hover:border-slate-300 text-slate-700 bg-white"
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 1Fi EMI Plan Selector Engine */}
            <div className="pt-2 border-t border-slate-100">
              <EmiPlanSelector
                price={currentPrice}
                availableTenures={product.availableTenures}
                selectedPlan={selectedPlan}
                onSelectPlan={setSelectedPlan}
              />
            </div>

            {/* Highlights */}
            <div className="space-y-2.5 pt-2 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Product Highlights
              </h3>
              <ul className="space-y-2">
                {product.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications Table */}
            <div className="space-y-2.5 pt-2 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Technical Specifications
              </h3>
              <div className="bg-slate-50 rounded-2xl p-3 divide-y divide-slate-200/60 text-xs">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="py-2 flex items-start justify-between gap-4">
                    <span className="text-slate-500 font-medium">{key}</span>
                    <span className="text-slate-900 font-semibold text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust & Guarantee Badges */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center text-[10px] text-slate-600">
              <div className="bg-slate-50 p-2.5 rounded-xl flex flex-col items-center gap-1">
                <Shield className="w-4 h-4 text-fi-purple" />
                <span className="font-bold text-slate-800">100% Genuine</span>
                <span>Brand Warranty</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-xl flex flex-col items-center gap-1">
                <Truck className="w-4 h-4 text-emerald-600" />
                <span className="font-bold text-slate-800">Free Delivery</span>
                <span>2-4 Business Days</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-xl flex flex-col items-center gap-1">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="font-bold text-slate-800">0% Interest</span>
                <span>Mutual Fund backed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Bottom Action CTA */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-100 p-4 px-5 flex items-center justify-between gap-4 shadow-[0_-4px_25px_rgba(0,0,0,0.08)] z-30">
          <div>
            <span className="text-[10px] font-semibold text-slate-400 block uppercase">
              {selectedPlan ? `${selectedPlan.tenureMonths} Months EMI` : "Monthly EMI"}
            </span>
            <span className="text-lg font-black text-fi-purple">
              {selectedPlan ? formatRupees(selectedPlan.monthlyAmount) : formatRupees(Math.round(currentPrice / 12))}
              <span className="text-xs font-normal text-slate-500">/mo</span>
            </span>
          </div>

          <button
            onClick={handleProceed}
            className="flex-1 py-3.5 px-5 bg-fi-purple text-white rounded-2xl font-bold text-xs hover:bg-fi-purple-hover transition-all flex items-center justify-center gap-2 shadow-fi-btn hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Proceed with {selectedPlan?.tenureMonths || 12}M Plan</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
