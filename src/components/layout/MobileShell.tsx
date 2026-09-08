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
import { PrivacyPolicyModal } from "../profile/PrivacyPolicyModal";
import { TermsConditionsModal } from "../profile/TermsConditionsModal";
import { useApp } from "@/context/AppContext";
import { ProductVariant, EMIPlan } from "@/lib/types";

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
  } = useApp();

  const handleProceedToCheckout = (variant: ProductVariant, plan: EMIPlan) => {
    setSelectedVariant(variant);
    setSelectedEMIPlan(plan);
    setActiveModal("none");
    setIsCheckoutModalOpen(true);
  };

  return (
    <div className="min-h-screen w-full bg-[#EEF2F9] sm:bg-[#EEF2F9] flex items-center justify-center">
      {/* 
        Single Unified Mobile Web App Container:
        - Ratio: 6.3 inches flagship mobile ratio (1206 x 2622 px, 19.5:9 ratio)
        - Max width: 430px (standard modern mobile viewport width)
        - On mobile/PWA: 100% full-screen native fit
        - On desktop/tablet: Centered mobile app view
      */}
      <div className="w-full max-w-[430px] min-h-screen bg-fi-bg sm:shadow-2xl flex flex-col relative overflow-x-hidden">
        {/* Scrollable Main Content Area */}
        <main className="flex-1 w-full pb-24 overflow-x-hidden">
          {/* TAB 1: SHOP (Default / Main Assignment Flow) */}
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

        {/* Sticky / Fixed Mobile Bottom Navigation */}
        <BottomNav />

        {/* Global Dialogs & Modals */}
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

        {activeModal === "privacy" && (
          <PrivacyPolicyModal onClose={() => setActiveModal("none")} />
        )}

        {activeModal === "terms" && (
          <TermsConditionsModal onClose={() => setActiveModal("none")} />
        )}
      </div>
    </div>
  );
}
