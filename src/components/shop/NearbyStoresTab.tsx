"use client";

import React, { useEffect, useState } from "react";
import { Search, MapPin, Navigation, Phone, ChevronDown, Check, Loader2 } from "lucide-react";
import { Store } from "@/lib/types";
import { marketplaceService } from "@/lib/api/marketplaceService";
import { ShimmerSkeletonList } from "../marketplace/ShimmerSkeleton";

export function NearbyStoresTab() {
  const [stores, setStores] = useState<Store[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Gurugram");
  const [isDetecting, setIsDetecting] = useState(false);
  const [pincode, setPincode] = useState("122001");

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    marketplaceService.getNearbyStores(query, selectedCity).then((data) => {
      if (isMounted) {
        setStores(data);
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [query, selectedCity]);

  const handleUseCurrentLocation = () => {
    setIsDetecting(true);
    setTimeout(() => {
      setIsDetecting(false);
      setSelectedCity("Gurugram");
      setIsLocationModalOpen(false);
    }, 1200);
  };

  return (
    <div className="px-4 py-4 space-y-4">
      {/* Search and Location Header */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-400" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stores..."
            className="w-full pl-10 pr-4 py-2.5 bg-white rounded-2xl border border-slate-200/80 text-xs focus:outline-none focus:ring-2 focus:ring-fi-purple/30 focus:border-fi-purple shadow-sm"
          />
        </div>

        {/* Location Dropdown Button */}
        <button
          onClick={() => setIsLocationModalOpen(true)}
          className="flex items-center gap-1.5 px-3 py-2.5 bg-white rounded-2xl border border-slate-200/80 text-xs font-semibold text-fi-purple shadow-sm hover:bg-purple-50/50 transition-colors"
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>{selectedCity}</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </button>
      </div>

      <div className="flex items-center justify-between pt-1">
        <h2 className="text-base font-bold text-slate-900">Nearby Stores</h2>
        <span className="text-[11px] font-medium text-slate-500">
          {stores.length} outlets near you
        </span>
      </div>

      {loading ? (
        <ShimmerSkeletonList count={4} />
      ) : stores.length === 0 ? (
        <div className="py-12 flex flex-col items-center justify-center text-center px-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <div className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center text-fi-purple mb-3">
            <MapPin className="w-6 h-6 text-fi-purple" />
          </div>
          <h3 className="text-sm font-bold text-slate-900">No stores found nearby</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-xs">
            Try changing your location or search terms.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {stores.map((store) => (
            <div
              key={store.id}
              className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all space-y-3"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden shrink-0">
                    <img
                      src={store.logo}
                      alt={store.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{store.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-2 max-w-[220px]">
                      {store.address}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-bold text-fi-purple bg-purple-50 px-2 py-1 rounded-lg">
                    {store.distanceKm} km
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-50 text-xs text-slate-600">
                <span className="text-[11px] text-slate-400">Open • {store.hours}</span>
                <div className="flex items-center gap-3">
                  <a
                    href={`tel:${store.phone}`}
                    className="inline-flex items-center gap-1 text-slate-600 hover:text-fi-purple font-medium"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call</span>
                  </a>
                  <button
                    onClick={() =>
                      alert(`Directions to ${store.name} (${store.address}) opened!`)
                    }
                    className="inline-flex items-center gap-1 text-fi-purple font-semibold hover:underline"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Directions</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Location Modal Drawer: Bottom Sheet matching video 00:52 - 01:00 */}
      {isLocationModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center p-0">
          <div className="bg-white w-full max-w-[430px] rounded-t-[28px] p-6 pb-8 shadow-[0_-8px_30px_rgba(0,0,0,0.15)] animate-in slide-in-from-bottom duration-300">
            {/* Top drag handle indicator */}
            <div className="w-12 h-1 bg-slate-200 rounded-full mx-auto mb-4" />

            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-slate-900">Select Your Location</h3>
              <button
                onClick={() => setIsLocationModalOpen(false)}
                className="text-xs font-semibold text-slate-400 hover:text-slate-600 p-1"
              >
                ✕ Close
              </button>
            </div>

            {/* Use Current Location Button matching video 00:52 */}
            <button
              onClick={handleUseCurrentLocation}
              disabled={isDetecting}
              className="w-full p-4 rounded-2xl border-2 border-purple-200 hover:border-fi-purple bg-purple-50/40 flex items-center justify-between text-left transition-all group active:scale-[0.99]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-fi-purple border border-purple-100 shrink-0">
                  {isDetecting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Navigation className="w-5 h-5 rotate-45 text-fi-purple fill-fi-purple/20" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    {isDetecting ? "Detecting location..." : "Use Current Location"}
                  </p>
                  <p className="text-xs text-slate-500">
                    Grant location access to sort stores
                  </p>
                </div>
              </div>
            </button>

            <div className="flex items-center my-4">
              <div className="flex-1 border-t border-slate-200" />
              <span className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">OR</span>
              <div className="flex-1 border-t border-slate-200" />
            </div>

            <div className="space-y-2.5">
              <label className="text-xs font-semibold text-slate-700">Enter Pincode</label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="Enter 6 digit pincode"
                    className="w-full pl-10 pr-3 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-fi-purple focus:outline-none"
                  />
                </div>
                <button
                  onClick={() => {
                    setSelectedCity("Gurugram");
                    setIsLocationModalOpen(false);
                  }}
                  className="px-5 py-2.5 bg-fi-purple text-white rounded-xl text-xs font-bold hover:bg-fi-purple-hover transition-colors shadow-sm active:scale-95"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
