"use client";

import React from "react";
import { ReceiptIndianRupee, Sparkles, CheckCircle2, Calendar, CreditCard, ChevronRight } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { formatRupees } from "@/lib/utils/emi";

export function EmiDuesView() {
  const { orders, setActiveBottomTab, setShopSubTab } = useApp();

  return (
    <div className="min-h-[75vh] flex flex-col justify-center px-5 py-8">
      {orders.length === 0 ? (
        /* Empty State - No Dues Found */
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          {/* Document receipt graphic */}
          <div className="relative w-28 h-32 flex items-center justify-center">
            <div className="w-24 h-32 bg-white rounded-2xl border-2 border-slate-200 shadow-md flex flex-col items-center justify-between p-3 relative">
              <div className="w-7 h-2 bg-purple-600 rounded-full" />
              <div className="w-full space-y-1.5">
                <div className="w-4/5 h-1.5 bg-slate-200 rounded-full mx-auto" />
                <div className="w-full h-1.5 bg-slate-200 rounded-full" />
                <div className="w-3/4 h-1.5 bg-slate-200 rounded-full mx-auto" />
              </div>
              <div className="w-8 h-2 bg-amber-300 rounded-full" />
              {/* Star sparkles */}
              <Sparkles className="w-4 h-4 text-purple-400 absolute -top-2 -left-2" />
              <Sparkles className="w-4 h-4 text-purple-500 absolute -bottom-1 -right-2" />
            </div>
            <div className="w-24 h-4 bg-slate-200/60 rounded-full absolute -bottom-3 blur-sm" />
          </div>

          <div className="space-y-1.5 max-w-xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              NOTHING DUE YET
            </span>
            <h2 className="text-base font-bold text-slate-800">
              Looks like you haven't shopped yet with 1Fi
            </h2>
          </div>

          <button
            onClick={() => {
              setActiveBottomTab("shop");
              setShopSubTab("marketplace");
            }}
            className="w-full max-w-xs py-3.5 px-6 bg-fi-purple text-white rounded-full text-xs font-bold hover:bg-fi-purple-hover transition-all shadow-fi-btn active:scale-95"
          >
            Check eligibility & Shop
          </button>
        </div>
      ) : (
        /* Active Dues Tracking View */
        <div className="space-y-5">
          <div>
            <span className="text-[11px] font-bold text-fi-purple uppercase tracking-widest">
              YOUR ACTIVE REPAYMENTS
            </span>
            <h1 className="text-xl font-black text-slate-900 mt-1">
              Upcoming EMI Schedule
            </h1>
          </div>

          <div className="space-y-3.5">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 p-1 border border-slate-100 flex items-center justify-center">
                      <img
                        src={order.product.images[0]}
                        alt={order.product.title}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 truncate max-w-[180px]">
                        {order.product.title}
                      </h3>
                      <p className="text-[11px] text-slate-500">
                        {order.selectedVariant.name}
                      </p>
                    </div>
                  </div>

                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold">
                    0% ACTIVE
                  </span>
                </div>

                <div className="bg-slate-50 rounded-2xl p-3.5 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Monthly EMI Due:</span>
                    <span className="font-black text-fi-purple text-sm">
                      {formatRupees(order.emiPlan.monthlyAmount)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Next Auto-debit Date:</span>
                    <span className="font-bold text-slate-800">
                      {order.firstDueDate}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Tenure Progress:</span>
                    <span className="font-semibold text-slate-700">
                      {order.paidMonths} of {order.emiPlan.tenureMonths} Months
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => alert("Early repayment is 100% free with zero charges!")}
                    className="flex-1 py-2.5 bg-fi-purple text-white rounded-xl text-xs font-bold hover:bg-fi-purple-hover transition-colors shadow-sm"
                  >
                    Pay Early (₹0 Fee)
                  </button>
                  <button
                    onClick={() => alert(`Loan Account: ${order.loanAccountNumber}`)}
                    className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50"
                  >
                    <ReceiptIndianRupee className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
