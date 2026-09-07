"use client";

import React, { useState } from "react";
import { X, Check, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { ProductFilterParams } from "@/lib/api/marketplaceService";
import { formatRupees } from "@/lib/utils/emi";

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: ProductFilterParams;
  onApplyFilters: (newFilters: ProductFilterParams) => void;
  brands: string[];
}

export function FilterDrawer({
  isOpen,
  onClose,
  filters,
  onApplyFilters,
  brands,
}: FilterDrawerProps) {
  const [localFilters, setLocalFilters] = useState<ProductFilterParams>(filters);

  if (!isOpen) return null;

  const handleApply = () => {
    onApplyFilters(localFilters);
    onClose();
  };

  const handleReset = () => {
    const reset: ProductFilterParams = {
      ...localFilters,
      brand: undefined,
      minPrice: undefined,
      maxPrice: undefined,
      tenure: undefined,
      sortBy: "featured",
    };
    setLocalFilters(reset);
    onApplyFilters(reset);
    onClose();
  };

  const priceRanges = [
    { label: "All Prices", min: undefined, max: undefined },
    { label: "Under ₹30,000", min: 0, max: 30000 },
    { label: "₹30,000 - ₹75,000", min: 30000, max: 75000 },
    { label: "₹75,000 - ₹1,50,000", min: 75000, max: 150000 },
    { label: "Above ₹1,50,000", min: 150000, max: undefined },
  ];

  const tenures = [3, 6, 9, 12, 18, 24];

  const sortOptions = [
    { id: "featured", label: "Recommended / Featured" },
    { id: "price-asc", label: "Price: Low to High" },
    { id: "price-desc", label: "Price: High to Low" },
    { id: "discount", label: "Highest Discount" },
    { id: "rating", label: "Customer Rating" },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white w-full max-w-lg rounded-t-[32px] sm:rounded-3xl p-6 shadow-2xl animate-in slide-in-from-bottom duration-300 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-fi-purple" />
            <h3 className="text-base font-bold text-slate-900">Filter & Sort</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Body */}
        <div className="overflow-y-auto py-4 space-y-6 flex-1 pr-1">
          {/* Sort By */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <ArrowUpDown className="w-3.5 h-3.5 text-fi-purple" />
              <span>Sort By</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {sortOptions.map((opt) => {
                const isSelected = localFilters.sortBy === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() =>
                      setLocalFilters((prev) => ({
                        ...prev,
                        sortBy: opt.id as ProductFilterParams["sortBy"],
                      }))
                    }
                    className={`p-2.5 rounded-xl text-xs font-semibold text-left transition-all flex items-center justify-between ${
                      isSelected
                        ? "bg-fi-purple text-white shadow-sm"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/60"
                    }`}
                  >
                    <span>{opt.label}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Price Range
            </label>
            <div className="flex flex-wrap gap-2">
              {priceRanges.map((range, idx) => {
                const isSelected =
                  localFilters.minPrice === range.min &&
                  localFilters.maxPrice === range.max;
                return (
                  <button
                    key={idx}
                    onClick={() =>
                      setLocalFilters((prev) => ({
                        ...prev,
                        minPrice: range.min,
                        maxPrice: range.max,
                      }))
                    }
                    className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      isSelected
                        ? "bg-fi-purple text-white shadow-sm"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/60"
                    }`}
                  >
                    {range.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* No-Cost EMI Tenure Filter */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              No-Cost EMI Tenure
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  setLocalFilters((prev) => ({ ...prev, tenure: undefined }))
                }
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  localFilters.tenure === undefined
                    ? "bg-fi-purple text-white shadow-sm"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/60"
                }`}
              >
                All Tenures
              </button>
              {tenures.map((t) => {
                const isSelected = localFilters.tenure === t;
                return (
                  <button
                    key={t}
                    onClick={() =>
                      setLocalFilters((prev) => ({
                        ...prev,
                        tenure: isSelected ? undefined : t,
                      }))
                    }
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                      isSelected
                        ? "bg-fi-purple text-white shadow-sm"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/60"
                    }`}
                  >
                    {t} Months
                  </button>
                );
              })}
            </div>
          </div>

          {/* Brands */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Brands
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  setLocalFilters((prev) => ({ ...prev, brand: undefined }))
                }
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  !localFilters.brand
                    ? "bg-fi-purple text-white shadow-sm"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/60"
                }`}
              >
                All Brands
              </button>
              {brands.map((b) => {
                const isSelected =
                  localFilters.brand?.toLowerCase() === b.toLowerCase();
                return (
                  <button
                    key={b}
                    onClick={() =>
                      setLocalFilters((prev) => ({
                        ...prev,
                        brand: isSelected ? undefined : b,
                      }))
                    }
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                      isSelected
                        ? "bg-fi-purple text-white shadow-sm"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/60"
                    }`}
                  >
                    {b}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
          <button
            onClick={handleReset}
            className="flex-1 py-3 px-4 rounded-2xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors"
          >
            Reset Filters
          </button>
          <button
            onClick={handleApply}
            className="flex-1 py-3 px-4 rounded-2xl bg-fi-purple text-white text-xs font-bold hover:bg-fi-purple-hover shadow-fi-btn transition-colors"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}
