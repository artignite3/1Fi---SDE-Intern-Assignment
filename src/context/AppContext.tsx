"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { EMIPlan, Order, Product, ProductVariant, UserProfile } from "../lib/types";

export type ModalType = "none" | "faqs" | "purchases" | "refer" | "location" | "productDetail" | "privacy" | "terms";

interface AppContextType {
  activeBottomTab: "home" | "shop" | "dues" | "limit" | "profile";
  setActiveBottomTab: (tab: "home" | "shop" | "dues" | "limit" | "profile") => void;
  shopSubTab: "top-brands" | "nearby-stores" | "marketplace";
  setShopSubTab: (tab: "top-brands" | "nearby-stores" | "marketplace") => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  selectedVariant: ProductVariant | null;
  setSelectedVariant: (variant: ProductVariant | null) => void;
  selectedEMIPlan: EMIPlan | null;
  setSelectedEMIPlan: (plan: EMIPlan | null) => void;
  isCheckoutModalOpen: boolean;
  setIsCheckoutModalOpen: (open: boolean) => void;
  activeModal: ModalType;
  setActiveModal: (modal: ModalType) => void;
  orders: Order[];
  addOrder: (order: Order) => void;
  userProfile: UserProfile;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  isMobileFrame: boolean;
  setIsMobileFrame: (val: boolean) => void;
  openProductDetails: (product: Product) => void;
}

const initialProfile: UserProfile = {
  name: "Riddhish",
  phone: "+91 8982094147",
  email: "riddhish@example.com",
  pan: "ABCDE1234F",
  kycStatus: "VERIFIED",
  creditLimitTotal: 500000,
  creditLimitAvailable: 435000,
  mutualFundHoldingsValue: 1250000,
  pledgedHoldingsValue: 65000,
  referralCode: "PXZ34147",
  referralEarnings: 1500,
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [activeBottomTab, setActiveBottomTab] = useState<"home" | "shop" | "dues" | "limit" | "profile">("home");
  const [shopSubTab, setShopSubTab] = useState<"top-brands" | "nearby-stores" | "marketplace">("marketplace");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [selectedEMIPlan, setSelectedEMIPlan] = useState<EMIPlan | null>(null);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<ModalType>("none");
  const [orders, setOrders] = useState<Order[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile>(initialProfile);
  const [isMobileFrame, setIsMobileFrame] = useState(true);

  const openProductDetails = (product: Product) => {
    setSelectedProduct(product);
    setSelectedVariant(product.variants[0] || null);
    setActiveModal("productDetail");
  };

  const addOrder = (order: Order) => {
    setOrders((prev) => [order, ...prev]);
    setUserProfile((prev) => ({
      ...prev,
      creditLimitAvailable: Math.max(0, prev.creditLimitAvailable - order.emiPlan.totalPayable),
      pledgedHoldingsValue: prev.pledgedHoldingsValue + order.emiPlan.mfLienAmount,
    }));
  };

  return (
    <AppContext.Provider
      value={{
        activeBottomTab,
        setActiveBottomTab,
        shopSubTab,
        setShopSubTab,
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
        orders,
        addOrder,
        userProfile,
        setUserProfile,
        isMobileFrame,
        setIsMobileFrame,
        openProductDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
