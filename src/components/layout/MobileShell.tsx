"use client";

import React from "react";
import { BottomNav } from "./BottomNav";
import { ShopHeader } from "../shop/ShopHeader";
import { TopBrandsTab } from "../shop/TopBrandsTab";
import { NearbyStoresTab } from "../shop/NearbyStoresTab";
import { MarketplaceView } from "../marketplace/MarketplaceView";
import { HomeView } from "../home/HomeView";
import { EmiDuesView } from "../dues/EmiDuesView";
import { LimitView } from "../limit/LimitView";
import { ProfileView } from "../profile/ProfileView";
import { ProductDetailModal } from "../marketplace/ProductDetailModal";
import { CheckoutFlowModal } from "../marketplace/CheckoutFlowModal";
import { SupportFAQModal } from "../profile/SupportFAQModal";
import { ReferAndEarnModal } from "../profile/ReferAndEarnModal";
import { PurchasesModal } from "../profile/PurchasesModal";
import { useApp } from "@/context/AppContext";
import { Smartphone, Monitor } from "lucide-react";

export function MobileShell() {
  const {
    activeBottomTab,
    shopSubTab,
    selectedProduct,
    setSelectedProduct,
    selectedVariant,
    setSelectedVariant,
    selectedEMIPlan,
    setSelectedEMIPlan,
    isCheckoutModalOpen,
    setIsCheckoutModalOpen,
    activeModal,
    setActiveModal,
    addOrder,
    isMobileFrame,
    setIsMobileFrame,
  } = useApp();

  const handleProceedToCheckout = (variant: any, plan: any) => {
    setSelectedVariant(variant);
    setSelectedEMIPlan(plan);
    setActiveModal("none");
    setIsCheckoutModalOpen(true);
  };

  return (
    <div className="min-h-screen w-full bg-[#0D1017] sm:bg-[#0D1017] flex flex-col items-center justify-start sm:py-6 sm:px-4">
      {/* Top Helper Bar for Desktop Screens */}
      <div className="w-full max-w-md hidden sm:flex items-center justify-between py-2.5 px-4 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800 text-white mb-4 shadow-xl">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-fi-purple text-white flex items-center justify-center font-black text-xs shadow-fi-btn">
            1Fi
          </div>
          <div>
            <h1 className="text-xs font-bold tracking-tight text-white flex items-center gap-1.5">
              <span>1Fi Mobile Web App</span>
              <span className="text-[9px] font-semibold bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded-full border border-emerald-500/30">
                Responsive
              </span>
            </h1>
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setIsMobileFrame(true)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
              isMobileFrame
                ? "bg-fi-purple text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
            title="Mobile Device Preview"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile</span>
          </button>
          <button
            onClick={() => setIsMobileFrame(false)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
              !isMobileFrame
                ? "bg-fi-purple text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
            title="Responsive Full Screen"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Fluid</span>
          </button>
        </div>
      </div>

      {/* Main Responsive Mobile Container */}
      <div
        className={`w-full bg-fi-bg flex flex-col relative transition-all duration-300 ${
          isMobileFrame
            ? "max-w-md min-h-screen sm:min-h-[890px] sm:rounded-[38px] sm:shadow-[0_20px_60px_rgba(0,0,0,0.5)] sm:border-[6px] sm:border-slate-800 overflow-hidden"
            : "max-w-2xl min-h-screen sm:rounded-3xl sm:shadow-2xl sm:border border-slate-800"
        }`}
      >
        {/* Scrollable Content Area */}
        <main className="flex-1 w-full pb-20 overflow-x-hidden">
          {/* TAB 1: SHOP */}
          {activeBottomTab === "shop" && (
            <div className="animate-in fade-in duration-200">
              <ShopHeader />
              {shopSubTab === "top-brands" && <TopBrandsTab />}
              {shopSubTab === "nearby-stores" && <NearbyStoresTab />}
              {shopSubTab === "marketplace" && <MarketplaceView />}
            </div>
          )}

          {/* TAB 2: HOME */}
          {activeBottomTab === "home" && (
            <div className="animate-in fade-in duration-200">
              <HomeView />
            </div>
          )}

          {/* TAB 3: EMI DUES */}
          {activeBottomTab === "dues" && (
            <div className="animate-in fade-in duration-200">
              <EmiDuesView />
            </div>
          )}

          {/* TAB 4: LIMIT */}
          {activeBottomTab === "limit" && (
            <div className="animate-in fade-in duration-200">
              <LimitView />
            </div>
          )}

          {/* TAB 5: PROFILE */}
          {activeBottomTab === "profile" && (
            <div className="animate-in fade-in duration-200">
              <ProfileView />
            </div>
          )}
        </main>

        {/* Fixed Mobile Bottom Navigation */}
        <BottomNav />

        {/* Global Modals */}
        {activeModal === "productDetail" && selectedProduct && (
          <ProductDetailModal
            product={selectedProduct}
            onClose={() => {
              setActiveModal("none");
              setSelectedProduct(null);
            }}
            onProceedToCheckout={handleProceedToCheckout}
          />
        )}

        {isCheckoutModalOpen && selectedProduct && selectedVariant && selectedEMIPlan && (
          <CheckoutFlowModal
            product={selectedProduct}
            variant={selectedVariant}
            emiPlan={selectedEMIPlan}
            onClose={() => {
              setIsCheckoutModalOpen(false);
              setSelectedProduct(null);
            }}
            onSuccess={(order) => {
              addOrder(order);
            }}
          />
        )}

        {activeModal === "faqs" && (
          <SupportFAQModal onClose={() => setActiveModal("none")} />
        )}

        {activeModal === "refer" && (
          <ReferAndEarnModal onClose={() => setActiveModal("none")} />
        )}

        {activeModal === "purchases" && (
          <PurchasesModal onClose={() => setActiveModal("none")} />
        )}
      </div>
    </div>
  );
}
