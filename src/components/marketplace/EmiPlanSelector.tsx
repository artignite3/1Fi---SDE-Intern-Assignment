"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle2, Sparkles, ShieldCheck, Info, HelpCircle } from "lucide-react";
import { EMIPlan } from "@/lib/types";
import { getAvailableEMIPlans, formatRupees } from "@/lib/utils/emi";

interface EmiPlanSelectorProps {
  price: number;
  availableTenures?: number[];
  selectedPlan: EMIPlan | null;
  onSelectPlan: (plan: EMIPlan) => void;
}

export function EmiPlanSelector({
  price,
  availableTenures = [3, 6, 9, 12, 18, 24],
  selectedPlan,
  onSelectPlan,
}: EmiPlanSelectorProps) {
  const [plans, setPlans] = useState<EMIPlan[]>([]);
  const [showBreakdownTooltip, setShowBreakdownTooltip] = useState(false);

  useEffect(() => {
    const generatedPlans = getAvailableEMIPlans(price, availableTenures);
    setPlans(generatedPlans);

    // If no plan is selected or currently selected tenure isn't in new price, pick a default (e.g. 12m or 6m)
    if (
      !selectedPlan ||
      !generatedPlans.some((p) => p.tenureMonths === selectedPlan.tenureMonths)
    ) {
      const defaultPlan =
        generatedPlans.find((p) => p.tenureMonths === 12) ||
        generatedPlans.find((p) => p.tenureMonths === 6) ||
        generatedPlans[0];
      if (defaultPlan) {
        onSelectPlan(defaultPlan);
      }
    }
  }, [price, availableTenures]);

  const activePlan = selectedPlan || plans[0];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-fi-purple" />
          <h3 className="text-sm font-bold text-slate-900">Select 0% EMI Plan</h3>
        </div>
        <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
          No credit score required
        </span>
      </div>

      {/* Tenures Grid */}
      <div className="grid grid-cols-3 gap-2.5">
        {plans.map((plan) => {
          const isSelected = activePlan?.tenureMonths === plan.tenureMonths;

          return (
            <div
              key={plan.tenureMonths}
              onClick={() => onSelectPlan(plan)}
              className={`p-3 rounded-2xl border-2 transition-all cursor-pointer relative flex flex-col justify-between text-left ${
                isSelected
                  ? "border-fi-purple bg-purple-50/40 shadow-sm"
                  : "border-slate-100 hover:border-slate-200 bg-white"
              }`}
            >
              {/* Badge if available */}
              {plan.badge && (
                <div
                  className={`absolute -top-2.5 left-2 px-1.5 py-0.5 rounded-md text-[8px] font-bold uppercase tracking-wider ${
                    isSelected
                      ? "bg-fi-purple text-white shadow-sm"
                      : "bg-slate-800 text-white"
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <div>
                <span className="text-[11px] font-bold text-slate-600 block">
                  {plan.tenureMonths} Months
                </span>
                <span className="text-sm font-black text-slate-900 block mt-0.5">
                  {formatRupees(plan.monthlyAmount)}
                  <span className="text-[9px] font-normal text-slate-500">/mo</span>
                </span>
              </div>

              <div className="mt-2 pt-1.5 border-t border-slate-100/80 flex items-center justify-between">
                <span className="text-[9px] font-bold text-emerald-600">0% Interest</span>
                {isSelected && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-fi-purple fill-purple-100" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Plan Cost Breakdown Card */}
      {activePlan && (
        <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100 space-y-2.5">
          <div className="flex items-center justify-between text-xs font-bold text-slate-800 pb-2 border-b border-slate-200/60">
            <div className="flex items-center gap-1.5">
              <span>{activePlan.tenureMonths}-Month Plan Breakdown</span>
            </div>
            <span className="text-emerald-600 font-bold">
              Saved {formatRupees(activePlan.interestDiscount)}
            </span>
          </div>

          <div className="space-y-1.5 text-xs">
            <div className="flex items-center justify-between text-slate-600">
              <span>Principal Amount</span>
              <span className="font-semibold text-slate-900">
                {formatRupees(activePlan.totalPayable)}
              </span>
            </div>

            <div className="flex items-center justify-between text-slate-600">
              <span className="flex items-center gap-1">
                <span>Interest (0% No-cost)</span>
              </span>
              <span className="font-semibold text-emerald-600">₹0 (Free)</span>
            </div>

            <div className="flex items-center justify-between text-slate-600">
              <span>Processing Fee</span>
              <span className="font-semibold text-emerald-600">₹0</span>
            </div>

            <div className="flex items-center justify-between text-slate-600 pt-1.5 border-t border-slate-200/60">
              <span className="font-bold text-slate-800">Total Payable</span>
              <span className="font-black text-slate-900">
                {formatRupees(activePlan.totalPayable)}
              </span>
            </div>
          </div>

          {/* Mutual Fund Lien Collateral Notice */}
          <div className="pt-2 flex items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-200/70 text-[11px] text-slate-600">
            <ShieldCheck className="w-4 h-4 text-fi-purple shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-800">MF Lien Pledge Required: </span>
              <span className="font-bold text-fi-purple">
                {formatRupees(activePlan.mfLienAmount)}
              </span>
              <span className="block text-[10px] text-slate-500 mt-0.5">
                Your mutual fund stays invested and keeps compounding. Lien is automatically released upon full repayment.
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
