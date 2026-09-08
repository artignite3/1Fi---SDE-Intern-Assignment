# Limit Unlock Module (`src/components/limit`)

This module provides the mutual fund credit limit eligibility simulator and portfolio lien calculator.

---

## 📦 Components

### `LimitView.tsx`
- Interactive slider to calculate sanctioned loan limit based on estimated Mutual Fund equity and debt holdings.
- Real-time display of LTV (Loan-To-Value) ratios:
  - Equity Mutual Funds: Up to 50% LTV
  - Debt / Liquid Funds: Up to 80% LTV
- 1-tap OTP portfolio fetch simulator.
