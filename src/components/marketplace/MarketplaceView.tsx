"use client";

import React, { useEffect, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Sparkles,
  Smartphone,
  Laptop,
  Headphones,
  Tv,
  Plane,
  Gem,
  ChevronRight,
  TrendingUp,
  Tag,
  ArrowRight,
} from "lucide-react";
import { Category, Product } from "@/lib/types";
import { marketplaceService, ProductFilterParams } from "@/lib/api/marketplaceService";
import { ProductCard } from "./ProductCard";
import { ShimmerProductGrid } from "./ShimmerSkeleton";
import { FilterDrawer } from "./FilterDrawer";
import { useApp } from "@/context/AppContext";

export function MarketplaceView() {
  const { openProductDetails } = useApp();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<ProductFilterParams>({
    sortBy: "featured",
  });
  const [activePromoIndex, setActivePromoIndex] = useState(0);

  // Available brands for filter
  const brandsList = ["Apple", "Samsung", "Sony", "LG", "Dyson", "MakeMyTrip", "Tanishq"];

  // Category icon mapping
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Smartphone":
        return Smartphone;
      case "Laptop":
        return Laptop;
      case "Headphones":
        return Headphones;
      case "Tv":
        return Tv;
      case "Plane":
        return Plane;
      case "Gem":
        return Gem;
      default:
        return Sparkles;
    }
  };

  // Promo Banners matching video & screenshot 8
  const promoBanners = [
    {
      id: "promo-1",
      tag: "APPLE FLAGSHIP DEAL",
      title: "Upgrade to iPhone 16 Pro with Easy EMIs",
      badge: "✓ Upto 24m no cost EMI",
      bgGradient: "from-[#20153B] via-[#4A1E8A] to-[#E55A38]",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&auto=format&fit=crop&q=80",
      productId: "prod-iphone-16-pro",
    },
    {
      id: "promo-2",
      tag: "HOLIDAY VOUCHER DEAL",
      title: "Book Your Euro-phoric Escape with 1Fi",
      badge: "✓ Starts at ₹2,481/mo",
      bgGradient: "from-[#0F1E3D] via-[#1B3B6F] to-[#D97706]",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&auto=format&fit=crop&q=80",
      productId: "prod-makemytrip-euro",
    },
    {
      id: "promo-3",
      tag: "PRO AUDIO & SOUND",
      title: "Sony WH-1000XM5 Studio Noise Cancelling",
      badge: "✓ ₹2,499/mo (0% Interest)",
      bgGradient: "from-[#111827] via-[#312E81] to-[#6366F1]",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=80",
      productId: "prod-sony-wh1000xm5",
    },
  ];

  // Auto rotate banner carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePromoIndex((prev) => (prev + 1) % promoBanners.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [promoBanners.length]);

  // Load categories
  useEffect(() => {
    marketplaceService.getCategories().then(setCategories);
  }, []);

  // Fetch filtered products
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    marketplaceService
      .getProducts({
        ...filters,
        category: selectedCategory,
        query: searchQuery,
      })
      .then((data) => {
        if (isMounted) {
          setProducts(data);
          setLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [selectedCategory, searchQuery, filters]);

  const handleBannerClick = (productId: string) => {
    const target = products.find((p) => p.id === productId);
    if (target) {
      openProductDetails(target);
    }
  };

  const hasActiveFilters =
    Boolean(filters.brand) ||
    Boolean(filters.minPrice) ||
    Boolean(filters.maxPrice) ||
    Boolean(filters.tenure) ||
    filters.sortBy !== "featured";

  return (
    <div className="py-3 space-y-4">
      {/* Search & Filter Trigger Bar */}
      <div className="px-4 flex items-center gap-2">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search iPhones, Laptops, Audio, Gold..."
            className="w-full pl-10 pr-4 py-2.5 bg-white rounded-2xl border border-slate-200/80 text-xs focus:outline-none focus:ring-2 focus:ring-fi-purple/30 focus:border-fi-purple shadow-sm transition-all placeholder:text-slate-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>
          )}
        </div>

        {/* Filter Drawer Button */}
        <button
          onClick={() => setIsFilterOpen(true)}
          className={`p-2.5 rounded-2xl border transition-all flex items-center justify-center relative ${
            hasActiveFilters
              ? "bg-fi-purple text-white border-fi-purple shadow-fi-btn"
              : "bg-white text-slate-700 border-slate-200/80 hover:border-slate-300 shadow-sm"
          }`}
          title="Filters & Sort"
        >
          <SlidersHorizontal className="w-4 h-4" />
          {hasActiveFilters && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white" />
          )}
        </button>
      </div>

      {/* Horizontal Category Scroll Bar */}
      <div className="overflow-x-auto hide-scrollbar px-4 flex items-center gap-2">
        {categories.map((cat) => {
          const Icon = getCategoryIcon(cat.icon);
          const isSelected = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                isSelected
                  ? "bg-fi-purple text-white shadow-[0_2px_10px_rgba(108,56,255,0.3)] scale-[1.02]"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-100 hover:border-slate-200 shadow-sm"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-white" : "text-fi-purple"}`} />
              <span>{cat.name}</span>
              {typeof cat.count === "number" && (
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {cat.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Featured Deals Carousel (matching screenshot 8 & video) */}
      {!searchQuery && selectedCategory === "all" && (
        <div className="px-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">
              Offers & Highlights
            </span>
            <div className="flex gap-1">
              {promoBanners.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActivePromoIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    activePromoIndex === i
                      ? "w-5 bg-fi-purple"
                      : "w-1.5 bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div
            onClick={() =>
              handleBannerClick(promoBanners[activePromoIndex].productId)
            }
            className={`relative overflow-hidden rounded-3xl p-4 bg-gradient-to-r ${promoBanners[activePromoIndex].bgGradient} text-white shadow-md cursor-pointer transition-all duration-300 min-h-[140px] flex items-center justify-between group`}
          >
            <div className="relative z-10 max-w-[65%] space-y-1.5">
              <span className="text-[9px] font-extrabold uppercase tracking-wider text-amber-300 block">
                {promoBanners[activePromoIndex].tag}
              </span>
              <h3 className="text-sm font-bold leading-tight text-white group-hover:underline">
                {promoBanners[activePromoIndex].title}
              </h3>
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-md text-[10px] font-semibold text-white/90">
                <span>{promoBanners[activePromoIndex].badge}</span>
              </div>
            </div>

            <div className="relative w-24 h-24 shrink-0 rounded-2xl overflow-hidden shadow-inner">
              <img
                src={promoBanners[activePromoIndex].image}
                alt="Promo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* Products Section Header */}
      <div className="px-4 flex items-center justify-between pt-1">
        <div>
          <h2 className="text-base font-bold text-slate-900">
            {selectedCategory === "all" ? "Featured Products" : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          <p className="text-[11px] text-slate-500">
            Backed by Mutual Funds • 0% Interest
          </p>
        </div>
        <span className="text-xs font-semibold text-fi-purple bg-purple-50 px-2.5 py-1 rounded-full">
          {products.length} Items
        </span>
      </div>

      {/* Active Filter Pills (if applied) */}
      {hasActiveFilters && (
        <div className="px-4 flex flex-wrap gap-1.5 items-center">
          <span className="text-[10px] font-bold text-slate-400 uppercase">Filters:</span>
          {filters.brand && (
            <span className="inline-flex items-center gap-1 text-[11px] bg-purple-50 text-fi-purple font-semibold px-2 py-0.5 rounded-lg">
              Brand: {filters.brand}
              <button onClick={() => setFilters({ ...filters, brand: undefined })}>✕</button>
            </span>
          )}
          {filters.tenure && (
            <span className="inline-flex items-center gap-1 text-[11px] bg-purple-50 text-fi-purple font-semibold px-2 py-0.5 rounded-lg">
              {filters.tenure} Months EMI
              <button onClick={() => setFilters({ ...filters, tenure: undefined })}>✕</button>
            </span>
          )}
          {filters.minPrice !== undefined && (
            <span className="inline-flex items-center gap-1 text-[11px] bg-purple-50 text-fi-purple font-semibold px-2 py-0.5 rounded-lg">
              Above ₹{filters.minPrice}
              <button onClick={() => setFilters({ ...filters, minPrice: undefined })}>✕</button>
            </span>
          )}
          <button
            onClick={() => setFilters({ sortBy: "featured" })}
            className="text-[10px] text-slate-400 hover:text-slate-600 underline font-semibold ml-1"
          >
            Clear All
          </button>
        </div>
      )}

      {/* Product Grid or Empty State */}
      <div className="px-4">
        {loading ? (
          <ShimmerProductGrid count={6} />
        ) : products.length === 0 ? (
          <div className="py-12 flex flex-col items-center justify-center text-center px-4 bg-white rounded-3xl border border-slate-100 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center text-fi-purple mb-3">
              <Search className="w-6 h-6 text-fi-purple" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">No products found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-xs">
              Try searching with different keywords or clearing applied filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setFilters({ sortBy: "featured" });
              }}
              className="mt-4 px-4 py-2 bg-fi-purple text-white rounded-xl text-xs font-bold hover:bg-fi-purple-hover transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 pb-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Filter Drawer */}
      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        onApplyFilters={setFilters}
        brands={brandsList}
      />
    </div>
  );
}
