"use client";

import React, { useEffect, useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import { Brand } from "@/lib/types";
import { marketplaceService } from "@/lib/api/marketplaceService";
import { ShimmerSkeletonList } from "../marketplace/ShimmerSkeleton";

export function TopBrandsTab() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    marketplaceService.getTopBrands(query).then((data) => {
      if (isMounted) {
        setBrands(data);
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [query]);

  return (
    <div className="px-4 py-4 space-y-4">
      {/* Brand Search Bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-slate-400" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search online stores..."
          className="w-full pl-10 pr-4 py-2.5 bg-white rounded-full border border-slate-200/80 text-[13px] font-medium focus:outline-none focus:ring-2 focus:ring-fi-purple/20 focus:border-fi-purple transition-all placeholder:text-slate-400 shadow-sm"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-slate-400 hover:text-slate-600 font-semibold"
          >
            ✕
          </button>
        )}
      </div>

      <div className="flex items-center justify-between pt-1">
        <h2 className="text-[16px] font-bold text-fi-text">Top Brands</h2>
        <span className="text-[11px] font-semibold text-fi-muted">
          {brands.length} partners
        </span>
      </div>

      {loading ? (
        <ShimmerSkeletonList count={5} />
      ) : brands.length === 0 ? (
        <div className="py-12 flex flex-col items-center justify-center text-center px-4 bg-white rounded-[22px] border border-fi-border shadow-fi-card">
          <div className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center text-fi-purple mb-3">
            <Search className="w-6 h-6 text-fi-purple" />
          </div>
          <h3 className="text-sm font-bold text-fi-text">No matching stores found</h3>
          <p className="text-xs text-fi-muted mt-1 max-w-xs">
            Try a different store or brand name.
          </p>
        </div>
      ) : (
        <div className="space-y-2.5">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-[20px] p-3.5 border border-fi-border shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-center gap-3.5">
                {/* Brand Logo Container */}
                <div className="w-[52px] h-[52px] rounded-[16px] bg-[#F8F9FC] border border-[#F0F2F9] flex items-center justify-center overflow-hidden shrink-0 p-2">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                </div>

                <div>
                  <h3 className="text-[15px] font-bold text-fi-text group-hover:text-fi-purple transition-colors leading-tight">
                    {brand.name}
                  </h3>
                  <p className="text-[12px] font-normal text-fi-muted mt-0.5">
                    {brand.tagline}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-slate-300 group-hover:text-fi-purple transition-colors">
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full hidden sm:inline-block">
                  0% EMI
                </span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
