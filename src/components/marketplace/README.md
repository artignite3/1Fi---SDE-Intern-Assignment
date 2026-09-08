# 1Fi Marketplace Feature Module (`src/components/marketplace`)

This directory contains the full implementation of the **1Fi Marketplace** as mandated in the SDE Intern Assignment.

---

## 📦 Components

### 1. `MarketplaceView.tsx`
- The central marketplace container featuring:
  - **Category Rail**: Horizontal scrolling filter pills (`All`, `Electronics`, `Gold & Silver`, `EV & Mobility`, `Travel & Stay`, `Fashion & Watches`, `Home & Living`).
  - **Live Search & Filter Bar**: Instant debounce search with active filter counter badge.
  - **Promotional Banners Carousel**: Auto-rotating promotional banners highlighting zero collateral sale and 0% interest deals.
  - **Product Grid**: Responsive 1-column mobile product cards with lazy image loading and shimmers.

### 2. `ProductCard.tsx`
- Displays product image, brand badge, discount percent, full price, calculated 0% monthly installment, and "Pledge MF to Buy" quick CTA button.

### 3. `ProductDetailModal.tsx`
- Full-screen modal showing:
  - High-res product media gallery.
  - **Variant Switchers**: Interactive storage capacity and color selection pills that dynamically recalculate base price and EMI options in real-time.
  - Key technical specifications, warranty terms, and Instant Voucher Delivery guarantee.
  - Interactive EMI plan selector.

### 4. `EmiPlanSelector.tsx`
- Interactive tenure cards (`3m`, `6m`, `9m`, `12m`, `18m`, `24m`) showing:
  - Monthly EMI amount.
  - "0% Interest" badge.
  - Total interest subsidy saved versus credit cards.

### 5. `CheckoutFlowModal.tsx`
- Complete 3-step Mutual Fund lien pledge checkout:
  - **Step 1 (Pledge Portfolio)**: Allocates portfolio units (e.g. Parag Parikh Flexi Cap, Mirae Asset Large Cap) for 0% loan security without liquidating mutual funds.
  - **Step 2 (OTP Verification)**: Simulates SEBI / CAMS / KFintech lien approval with auto-filling OTP.
  - **Step 3 (Sanction & Voucher)**: Animated confetti celebration screen displaying the issued digital shopping voucher code, auto-saving order to `Purchases` and creating repayment dues in `EMI Dues`.

### 6. `FilterDrawer.tsx`
- Bottom sheet drawer for fine-grained multi-criteria filtering by Category, Brand, Price Range slider, and Sorting options.

### 7. `ShimmerSkeleton.tsx`
- High-fidelity animated skeleton placeholders for zero-layout-shift loading states.
