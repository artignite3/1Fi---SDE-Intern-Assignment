# UI Components Architecture (`src/components`)

This directory houses all modular React UI components structured by domain feature areas.

---

## 🏛 Component Hierarchy

```
src/components/
├── layout/              # Mobile app shell & floating bottom navigation dock
│   ├── BottomNav.tsx    # Floating 5-tab capsule navigation dock
│   └── MobileShell.tsx  # Universal 6.3-inch mobile responsive container
│
├── shop/                # Shop Hub main switcher & static/partner tabs
│   ├── ShopHeader.tsx   # Purple gradient hero banner with 3-tab pill switcher
│   ├── TopBrandsTab.tsx # Top retail partners list with live search
│   └── NearbyStoresTab.tsx # Nearby store locator & GPS simulation
│
├── marketplace/         # 1Fi Marketplace core feature (The Assignment Scope)
│   ├── MarketplaceView.tsx       # Main marketplace grid, banner carousel & search
│   ├── ProductCard.tsx           # Product card with 0% EMI badge & CTAs
│   ├── ProductDetailModal.tsx    # Variant switcher, live EMI specs, & warranty modal
│   ├── EmiPlanSelector.tsx       # Interactive 3m to 24m tenure selector
│   ├── CheckoutFlowModal.tsx     # 3-step Mutual Fund pledge checkout flow
│   ├── FilterDrawer.tsx          # Multi-criteria filter & sort bottom sheet
│   └── ShimmerSkeleton.tsx       # Loading shimmer skeleton states
│
├── home/                # Home credit dashboard matching 1Fi app
│   └── HomeView.tsx
├── dues/                # EMI Dues & active loan tracker
│   └── EmiDuesView.tsx
├── limit/               # Limit unlock simulator & eligibility calculator
│   └── LimitView.tsx
└── profile/             # Profile, KYC & interactive action modals
    ├── ProfileView.tsx        # Profile screen & quick actions
    ├── SupportFAQModal.tsx    # Accordion FAQ & support modal
    ├── ReferAndEarnModal.tsx  # Referral rewards & invite code modal
    └── PurchasesModal.tsx     # Order history & voucher code tracker
```
