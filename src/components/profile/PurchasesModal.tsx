"use client";

import React, { useState } from "react";
import { X, Package, FileText, Download, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { formatRupees } from "@/lib/utils/emi";
import { Order } from "@/lib/types";

export function PurchasesModal({ onClose }: { onClose: () => void }) {
  const { orders, setActiveBottomTab, setShopSubTab } = useApp();
  const [filterTab, setFilterTab] = useState<"All" | "Pending" | "Completed">("All");

  const handleDownloadInvoice = (order: Order) => {
    const invoiceHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>1Fi Tax Invoice - ${order.id}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 40px; color: #1e293b; line-height: 1.5; }
    .header { display: flex; justify-content: space-between; border-bottom: 2px solid #5C24EB; padding-bottom: 20px; margin-bottom: 30px; }
    .brand { font-size: 28px; font-weight: 800; color: #5C24EB; }
    .badge { display: inline-block; background: #EEF2FF; color: #5C24EB; padding: 4px 10px; border-radius: 6px; font-weight: 600; font-size: 12px; margin-top: 5px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px; }
    .card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; font-size: 13px; }
    .table { width: 100%; border-collapse: collapse; margin-top: 20px; margin-bottom: 30px; }
    .table th, .table td { border: 1px solid #e2e8f0; padding: 12px 16px; text-align: left; font-size: 13px; }
    .table th { background: #f1f5f9; font-weight: 700; color: #475569; }
    .total-row { font-weight: bold; background: #faf5ff; color: #5C24EB; }
    .notice { background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 8px; padding: 14px; font-size: 12px; color: #166534; margin-top: 25px; }
    .footer { text-align: center; margin-top: 40px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 20px; }
    @media print { body { margin: 0; } }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <div class="brand">1Fi</div>
      <div class="badge">0% No-Cost EMI Powered by Mutual Funds</div>
    </div>
    <div style="text-align: right; font-size: 13px; color: #64748b;">
      <h2 style="margin: 0 0 5px 0; color: #0f172a; font-size: 20px;">TAX INVOICE & LIEN RECEIPT</h2>
      <div><strong>Order ID:</strong> ${order.id}</div>
      <div><strong>Date:</strong> ${order.purchaseDate}</div>
      <div><strong>Status:</strong> ${order.status}</div>
    </div>
  </div>

  <div class="grid">
    <div class="card">
      <h4 style="margin: 0 0 10px 0; color: #334155; font-size: 14px;">Customer & Loan Details</h4>
      <div><strong>Loan Account No:</strong> ${order.loanAccountNumber}</div>
      <div><strong>Pledged Mutual Fund:</strong> ${order.lienPledgedMutualFund}</div>
      <div><strong>First EMI Due Date:</strong> ${order.firstDueDate}</div>
    </div>
    <div class="card">
      <h4 style="margin: 0 0 10px 0; color: #334155; font-size: 14px;">Financing Partner</h4>
      <div><strong>Lender:</strong> 1Fi Capital (RBI Reg. NBFC)</div>
      <div><strong>Lien Depository:</strong> CAMS / KFintech</div>
      <div><strong>Interest Rate:</strong> 0% APR (Subsidized by Merchant)</div>
    </div>
  </div>

  <table class="table">
    <thead>
      <tr>
        <th>Item Description</th>
        <th>Variant</th>
        <th>Tenure</th>
        <th>Monthly EMI</th>
        <th style="text-align: right;">Total Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>${order.product.title}</strong><br/><small style="color: #64748b;">Brand: ${order.product.brand}</small></td>
        <td>${order.selectedVariant.name}</td>
        <td>${order.emiPlan.tenureMonths} Months</td>
        <td>₹${order.emiPlan.monthlyAmount.toLocaleString("en-IN")}/mo</td>
        <td style="text-align: right;">₹${order.emiPlan.totalPayable.toLocaleString("en-IN")}</td>
      </tr>
      <tr class="total-row">
        <td colspan="4" style="text-align: right;">Total Amount Payable:</td>
        <td style="text-align: right;">₹${order.emiPlan.totalPayable.toLocaleString("en-IN")}</td>
      </tr>
    </tbody>
  </table>

  <div class="notice">
    <strong>✓ Mutual Fund Lien Pledge Verified:</strong>
    Your units in <em>${order.lienPledgedMutualFund}</em> have been digitally lien-marked with SEBI registered RTAs (CAMS/KFintech). The units remain in your demat folio and continue to earn daily market NAV returns while serving as collateral.
  </div>

  <div class="footer">
    This is a computer-generated tax invoice and lien acknowledgement issued by 1Fi Technologies Private Limited.<br/>
    For inquiries, visit support.1fi.in or reach out to help@1fi.in.
  </div>
</body>
</html>`;

    const blob = new Blob([invoiceHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `1Fi-Invoice-${order.id}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

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

        {/* Order Status Sub-tabs */}
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
            /* Empty State */
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
                      onClick={() => handleDownloadInvoice(order)}
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
