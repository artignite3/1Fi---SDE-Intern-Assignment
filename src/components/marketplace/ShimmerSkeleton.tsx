import React from "react";

export function ShimmerSkeletonList({ count = 4 }: { count?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center gap-3.5 animate-pulse"
        >
          {/* Image placeholder */}
          <div className="w-12 h-12 rounded-xl bg-slate-100 shrink-0" />

          {/* Text placeholder lines matching screenshot 29 */}
          <div className="flex-1 space-y-2">
            <div className="h-3.5 bg-slate-100 rounded-full w-3/5" />
            <div className="h-2.5 bg-slate-100 rounded-full w-4/5" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function ShimmerProductGrid({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm space-y-3 animate-pulse"
        >
          {/* Product image placeholder */}
          <div className="w-full aspect-square rounded-xl bg-slate-100" />

          {/* Title line */}
          <div className="space-y-1.5">
            <div className="h-2.5 bg-slate-100 rounded-full w-1/3" />
            <div className="h-3.5 bg-slate-100 rounded-full w-4/5" />
            <div className="h-2.5 bg-slate-100 rounded-full w-2/3" />
          </div>

          {/* Price & EMI block */}
          <div className="pt-2 border-t border-slate-50 space-y-1.5">
            <div className="h-4 bg-slate-100 rounded-md w-1/2" />
            <div className="h-3 bg-purple-50 rounded-full w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
