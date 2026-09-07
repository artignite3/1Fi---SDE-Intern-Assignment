"use client";

import React, { useState } from "react";
import { X, Package, FileText, Download, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { formatRupees } from "@/lib/utils/emi";

export function PurchasesModal({ onClose }: { onClose: () => void }) {
  const { orders, setActiveBottomTab, setShopSubTab } = useApp();
  const [filterTab, setFilterTab] = useState<"All" | "Pending" | "Completed">("All");

  const filteredOrders = orders.filter((o) => {
    if (filterTab === "Pending") return o.status === "ACTIVE" || o.status === "PROCESSING";
    if (filterTab === "Completed") return o.status === "COMPLETED";
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white w-full max-w-lg rounded-t-[36px] sm:rounded-3xl shadow-2xl animate-in slide-in-from-bottom duration-300 max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900">Purchases</h2>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Track and manage your previous purchases and loan details.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Status Sub-tabs matching video (01:03) */}
        <div className="px-5 pt-3 flex gap-2 border-b border-slate-100 pb-3">
          {(["All", "Pending", "Completed"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilterTab(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filterTab === tab
                  ? "bg-fi-purple text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="overflow-y-auto p-5 space-y-4 flex-1">
          {filteredOrders.length === 0 ? (
            /* Empty State matching video 01:03 */
            <div className="py-16 flex flex-col items-center justify-center text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-bold text-slate-800">No purchases found</h3>
              <p className="text-xs text-slate-500 max-w-xs">
                Your purchases will appear here once they are placed from the 1Fi Marketplace.
              </p>
              <button
                onClick={() => {
                  onClose();
                  setActiveBottomTab("shop");
                  setShopSubTab("marketplace");
                }}
                className="mt-2 px-5 py-2.5 bg-fi-purple text-white rounded-full text-xs font-bold hover:bg-fi-purple-hover"
              >
                Browse Marketplace
              </button>
            </div>
          ) : (
            <div className="space-y-3.5">
              {filteredOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white rounded-3xl p-4 border border-slate-200/80 shadow-sm space-y-3"
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
                        <h4 className="text-xs font-bold text-slate-900 truncate max-w-[180px]">
                          {order.product.title}
                        </h4>
                        <p className="text-[11px] text-slate-500">
                          {order.selectedVariant.name}
                        </p>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold">
                      {order.status}
                    </span>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-3 space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center justify-between">
                      <span>Order ID:</span>
                      <span className="font-mono font-bold text-slate-800">{order.id}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Purchased On:</span>
                      <span className="font-semibold text-slate-800">{order.purchaseDate}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Monthly Installment:</span>
                      <span className="font-bold text-fi-purple">
                        {formatRupees(order.emiPlan.monthlyAmount)}/mo ({order.emiPlan.tenureMonths}M @ 0%)
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Pledged Collateral:</span>
                      <span className="font-semibold text-slate-800">{order.lienPledgedMutualFund}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => alert(`Invoice & Loan Agreement for ${order.id} downloaded!`)}
                      className="flex-1 py-2 px-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Invoice</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
