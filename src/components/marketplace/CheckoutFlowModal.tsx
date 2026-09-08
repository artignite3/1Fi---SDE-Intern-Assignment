"use client";

import React, { useState } from "react";
import {
  X,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Lock,
  FileText,
  Calendar,
  CreditCard,
  Download,
  PartyPopper,
  Loader2,
} from "lucide-react";
import confetti from "canvas-confetti";
import { Product, ProductVariant, EMIPlan, Order } from "@/lib/types";
import { formatRupees } from "@/lib/utils/emi";
import { useApp } from "@/context/AppContext";

interface CheckoutFlowModalProps {
  product: Product;
  variant: ProductVariant;
  emiPlan: EMIPlan;
  onClose: () => void;
  onSuccess: (order: Order) => void;
}

export function CheckoutFlowModal({
  product,
  variant,
  emiPlan,
  onClose,
  onSuccess,
}: CheckoutFlowModalProps) {
  const { userProfile, setActiveBottomTab } = useApp();
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [pan, setPan] = useState(userProfile.pan || "ABCDE1234F");
  const [otp, setOtp] = useState(["4", "9", "2", "1", "8", "6"]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [createdOrder, setCreatedOrder] = useState<Order | null>(null);

  const handlePledgeAndConfirm = () => {
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const newOrder: Order = {
        id: `1FI-ORD-${Math.floor(100000 + Math.random() * 900000)}`,
        product,
        selectedVariant: variant,
        emiPlan,
        purchaseDate: new Date().toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        firstDueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(
          "en-IN",
          {
            day: "numeric",
            month: "short",
            year: "numeric",
          }
        ),
        status: "ACTIVE",
        loanAccountNumber: `LN-1FI-MF-${Math.floor(10000000 + Math.random() * 90000000)}`,
        lienPledgedMutualFund: "HDFC Top 100 Fund & Parag Parikh Flexi Cap",
        remainingMonths: emiPlan.tenureMonths,
        paidMonths: 0,
      };

      setCreatedOrder(newOrder);
      onSuccess(newOrder);
      setCurrentStep(3);

      // Trigger festive confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#6C38FF", "#10B981", "#F59E0B", "#3B82F6", "#EC4899"],
      });
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white w-full max-w-md rounded-t-[36px] sm:rounded-3xl shadow-2xl animate-in slide-in-from-bottom duration-300 max-h-[92vh] flex flex-col overflow-hidden relative">
        {/* Step Indicator Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-fi-purple">
              Step {currentStep} of 3
            </span>
            <h2 className="text-sm font-bold text-slate-900">
              {currentStep === 1 && "Review Plan & Summary"}
              {currentStep === 2 && "Pledge Mutual Funds"}
              {currentStep === 3 && "Sanction & Order Placed"}
            </h2>
          </div>
          {currentStep !== 3 && (
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Step Progress Bar */}
        <div className="w-full bg-slate-100 h-1">
          <div
            className="bg-fi-purple h-1 transition-all duration-300"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          />
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-5 space-y-5 flex-1">
          {/* STEP 1: REVIEW SUMMARY */}
          {currentStep === 1 && (
            <div className="space-y-4">
              {/* Product item banner */}
              <div className="flex items-center gap-3.5 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                <div className="w-14 h-14 rounded-xl bg-white p-1 border border-slate-100 shrink-0 flex items-center justify-center">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-fi-purple">
                    {product.brand}
                  </span>
                  <h3 className="text-xs font-bold text-slate-900 truncate">
                    {product.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 truncate">
                    {variant.name}
                  </p>
                </div>
              </div>

              {/* Loan & EMI breakdown */}
              <div className="bg-purple-50/50 rounded-2xl p-4 border border-purple-100 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600">Selected EMI Plan</span>
                  <span className="text-xs font-bold text-fi-purple">
                    {emiPlan.tenureMonths} Months (0% No-cost)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600">Monthly Installment</span>
                  <span className="text-sm font-black text-slate-900">
                    {formatRupees(emiPlan.monthlyAmount)}
                    <span className="text-[10px] text-slate-500 font-normal">/mo</span>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600">Total Purchase Amount</span>
                  <span className="text-xs font-bold text-slate-900">
                    {formatRupees(variant.price)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600">Processing & Foreclosure Fee</span>
                  <span className="text-xs font-bold text-emerald-600">₹0 (Free)</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-purple-100">
                  <span className="text-xs font-bold text-slate-800">Interest Saved</span>
                  <span className="text-xs font-bold text-emerald-600">
                    {formatRupees(emiPlan.interestDiscount)}
                  </span>
                </div>
              </div>

              {/* Delivery info */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-fi-purple" />
                  <span>Estimated Delivery</span>
                </div>
                <span className="font-bold text-slate-900">In 2-3 Business Days</span>
              </div>
            </div>
          )}

          {/* STEP 2: PLEDGE MUTUAL FUNDS */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">Total MF Portfolio (MFCentral)</span>
                  <span className="text-xs font-bold text-slate-900">
                    {formatRupees(userProfile.mutualFundHoldingsValue)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">MF Collateral Lien Required</span>
                  <span className="text-xs font-bold text-fi-purple">
                    {formatRupees(emiPlan.mfLienAmount)}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-slate-200">
                  <span className="text-xs font-bold text-slate-700">Remaining Free Units</span>
                  <span className="text-xs font-bold text-emerald-600">
                    {formatRupees(userProfile.mutualFundHoldingsValue - emiPlan.mfLienAmount)}
                  </span>
                </div>
              </div>

              {/* PAN details */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">PAN Number</label>
                <input
                  type="text"
                  value={pan}
                  onChange={(e) => setPan(e.target.value.toUpperCase())}
                  className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono font-bold tracking-wider uppercase text-slate-800"
                />
              </div>

              {/* OTP Simulation */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700">
                    Enter 6-digit Lien Approval OTP
                  </label>
                  <span className="text-[10px] text-fi-purple font-semibold">
                    Sent to {userProfile.phone}
                  </span>
                </div>
                <div className="flex justify-between gap-1.5">
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => {
                        const newOtp = [...otp];
                        newOtp[i] = e.target.value;
                        setOtp(newOtp);
                      }}
                      className="w-10 h-11 text-center font-bold text-sm bg-slate-50 rounded-xl border border-slate-200 focus:border-fi-purple focus:ring-1 focus:ring-fi-purple"
                    />
                  ))}
                </div>
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 flex items-start gap-2 text-[11px] text-emerald-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Your mutual funds remain 100% in your name, continue generating returns and NAV growth, and are unlocked automatically after repayment.
                </span>
              </div>
            </div>
          )}

          {/* STEP 3: ORDER SUCCESS */}
          {currentStep === 3 && createdOrder && (
            <div className="space-y-4 text-center py-2">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md animate-bounce">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                  Success!
                </span>
                <h2 className="text-lg font-black text-slate-900 mt-0.5">
                  0% EMI Plan Sanctioned!
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Order ID: <span className="font-bold text-slate-700">{createdOrder.id}</span>
                </p>
              </div>

              {/* Sanction Details Summary */}
              <div className="bg-slate-50 rounded-2xl p-4 text-left border border-slate-100 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Loan Account No:</span>
                  <span className="font-mono font-bold text-slate-800">
                    {createdOrder.loanAccountNumber}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Monthly EMI:</span>
                  <span className="font-black text-fi-purple">
                    {formatRupees(emiPlan.monthlyAmount)}/mo
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">First Auto-debit:</span>
                  <span className="font-bold text-slate-800">
                    {createdOrder.firstDueDate}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Pledged Collateral:</span>
                  <span className="font-bold text-slate-800">
                    {createdOrder.lienPledgedMutualFund}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => alert("Sanction Letter & Order Invoice downloaded!")}
                  className="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Sanction Letter</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom CTA */}
        <div className="p-4 border-t border-slate-100 bg-white">
          {currentStep === 1 && (
            <button
              onClick={() => setCurrentStep(2)}
              className="w-full py-3.5 bg-fi-purple text-white rounded-2xl text-xs font-bold hover:bg-fi-purple-hover transition-all flex items-center justify-center gap-2 shadow-fi-btn"
            >
              <span>Continue to MF Pledge</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {currentStep === 2 && (
            <button
              onClick={handlePledgeAndConfirm}
              disabled={isProcessing}
              className="w-full py-3.5 bg-fi-purple text-white rounded-2xl text-xs font-bold hover:bg-fi-purple-hover transition-all flex items-center justify-center gap-2 shadow-fi-btn disabled:opacity-70"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Authorizing Lien & Sanctioning...</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Pledge & Sanction 0% EMI</span>
                </>
              )}
            </button>
          )}

          {currentStep === 3 && (
            <div className="space-y-2">
              <button
                onClick={() => {
                  onClose();
                  setActiveBottomTab("profile");
                }}
                className="w-full py-3.5 bg-fi-purple text-white rounded-2xl text-xs font-bold hover:bg-fi-purple-hover transition-all shadow-fi-btn"
              >
                View Purchases & Loan Status
              </button>
              <button
                onClick={onClose}
                className="w-full py-2 text-xs font-semibold text-slate-500 hover:text-slate-800"
              >
                Back to Marketplace
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
