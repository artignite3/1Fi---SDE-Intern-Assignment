# Layout Components (`src/components/layout`)

This module provides the global structural framework for the 1Fi application.

---

## 📦 Components

### 1. `MobileShell.tsx`
- Serves as the single unified viewport container:
  - **Universal Mobile Ratio**: Standard 6.3-inch (`1206 × 2622 px`, `19.5:9` aspect ratio) with `max-w-[430px]` centered on desktop and full-width on mobile.
  - **No Fake Status Bar**: Avoids rendering mock Android status bars to ensure clean presentation across any device.
  - Controls modal rendering layers (`ProductDetailModal`, `CheckoutFlowModal`, `SupportFAQModal`, `ReferAndEarnModal`, `PurchasesModal`).

### 2. `BottomNav.tsx`
- Floating capsule navigation dock matching the original 1Fi mobile application:
  - `rounded-[32px]` with backdrop blur and soft shadow elevation.
  - Built-in horizontal purple indicator bar (`w-8 h-[3.5px] bg-fi-purple`) directly above the active tab.
  - Perfectly aligned baseline typography with single-line labels (`Home`, `Shop`, `EMI Dues`, `Limit`, `Profile`).
