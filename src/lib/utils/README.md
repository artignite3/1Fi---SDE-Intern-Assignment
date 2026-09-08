# Utility Functions (`src/lib/utils`)

This directory contains pure utility functions for calculations and styling.

---

## 📁 Files

### 1. `emi.ts`
- **`calculateEMIPlan(price, tenureMonths, isNoCost)`**:
  - Computes 0% No-cost monthly installment: `Math.round(price / tenureMonths)`.
  - Calculates interest subsidy savings against a benchmark 16% credit card interest rate.
  - Computes required Mutual Fund portfolio lien holding based on conservative 66% LTV ratio (`price * 1.5`).
- **`getAvailableEMIPlans(price, tenures)`**:
  - Generates full plan options for 3, 6, 9, 12, 18, and 24 months.
- **`formatCurrency(amount)`**: Formats INR with commas (`₹1,19,900`).

### 2. `cn.ts`
- Combines `clsx` and `tailwind-merge` for conditional Tailwind class merging.
