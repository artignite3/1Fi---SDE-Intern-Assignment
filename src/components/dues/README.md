# EMI Dues Module (`src/components/dues`)

This module tracks active loan repayments, upcoming monthly installments, and historical payments.

---

## 📦 Components

### `EmiDuesView.tsx`
- Displays upcoming monthly dues for purchases sanctioned via the 1Fi Marketplace.
- Auto-updates when a new product is pledged and purchased through the 3-step checkout flow.
- Features dynamic "Pay Now" simulation and clear zero-dues celebration state when all payments are settled.
