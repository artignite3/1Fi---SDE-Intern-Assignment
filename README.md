# 🛍️ 1Fi Marketplace — Web Application

[![Next.js](https://img.shields.io/badge/Next.js-14.2_App_Router-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Build Status](https://img.shields.io/badge/Build-Passing_(9/9_Routes)-brightgreen)]()
[![Type Safety](https://img.shields.io/badge/Type_Safety-100%25_Strict-success)]()

A high-performance, pixel-perfect mobile web application implementing the **1Fi Marketplace** within the **Shop** experience of the 1Fi financial platform. Built for the **1Fi SDE Intern Assignment**, maintaining 100% consistency with the authentic 1Fi mobile application design system, interaction animations, and financial architecture.

---

## 📑 Assignment Objective & Scope

| Requirement (Assignment Brief) | Implementation Details | Status |
| :--- | :--- | :---: |
| **Explore 1Fi App & Experience** | Replicated signature `#5C24EB` brand purple, Google Font Plus Jakarta Sans, floating pill bottom dock, authentic hero banners, companion views (Home, EMI Dues, Limit, Profile). | **100% Completed** |
| **Shop Page — 3 Sub-Tabs** | Includes **Top Brands**, **Nearby Stores**, and **1Fi Marketplace**. Top Brands & Nearby Stores exceed requirements with full search, brand vector logos, and location drawers. | **100% Completed** |
| **1Fi Marketplace Product Grid** | 12 curated products across 6 categories (Electronics, Luxury Gold, Mobiles, Audio, Travel, Appliances). | **100% Completed** |
| **Product Imagery & Pricing** | High-res imagery, slashed MRP, discount percentage tags, and calculated monthly 0% EMI installments. | **100% Completed** |
| **Dynamic Product Variants** | Interactive color swatches and storage capacity selectors with instant live recalculation of price and installment figures. | **100% Completed** |
| **0% No-Cost EMI Calculator** | Flexible tenures (3, 6, 9, 12, 18, 24 months), interest saved against credit cards, ₹0 processing fee, and Mutual Fund lien requirement. | **100% Completed** |
| **End-to-End Checkout Flow** | 3-step Mutual Fund lien pledge checkout with PAN validation, CAMS/KFintech OTP simulation, and confetti sanction celebration. | **100% Completed** |
| **Backend REST APIs** | 6 dynamic Next.js Route Handlers (`/api/products`, `/api/products/[id]`, `/api/categories`, `/api/brands`, `/api/stores`, `/api/emi/calculate`). | **100% Completed** |
| **Shimmer & Empty States** | Shimmer skeleton loading cards, empty search states with 1-tap reset, and offline image fallbacks. | **100% Completed** |

---

## 💡 How 1Fi Works (Financial & Product Concept)

Traditional credit cards and consumer loans charge 14%–24% interest or require intrusive credit bureau pulls (CIBIL/Experian).

**1Fi transforms personal financing through Mutual Fund Lien Marking:**
1. **Zero Liquidations**: Users do **not** sell their Mutual Fund units.
2. **Continued Compounding**: Pledged units remain inside the user's folio and continue to generate daily market NAV returns and dividends.
3. **0% No-Cost Interest**: Merchant partnerships subsidize interest, offering genuine 0% APR to consumers.
4. **Digital Lien Pledge**: Units are digitally lien-marked with SEBI-registered RTAs (CAMS / KFintech) via 2-factor OTP authorization.
5. **Automatic Lien Release**: As monthly EMIs are paid or the loan is foreclosed early (with ₹0 penalty), pledged units are automatically released back to the user's free portfolio.

---

## 📱 Feature & Screen Showcase

### 1. Home Dashboard (`HomeView.tsx`)
- **Hero Banner**: Deep signature gradient (`#120E52` → `#241380` → `#5C24EB`) with 0% interest graphic and eligibility CTA.
- **Curated Offers Carousel**: Auto-sliding carousel with 6 authentic deals (Adventure Ride, Apple Flagship, Euro-phoric Escape, Sony ANC, Tanishq 24K Gold, Dyson Styling) with animated indicator pills.
- **Continuous Brand Marquee**: Smooth infinite leftward auto-scrolling rail displaying 18+ official partner brand vector SVGs.
- **"Why Pay With 1Fi" Micro-Interaction**: 2 stacked layers with the authentic **alternating pendulum sway** (sway left → millisecond slowdown pause → sway right → repeat).
- **"How 1Fi Works"**: Solid purple gradient step circles (`#6C38FF` to `#501EE6`) with white iconography, dark numeric badges (1, 2, 3), and connecting dashed lines.
- **Refer & Earn**: High-impact card with 3D angled gold typography and `INVITE` pill.
- **Support & FAQs Accordion**: Expandable FAQ preview with direct access to the full Help Center modal.

### 2. Shop Experience (`ShopHeader.tsx`)
- **Sub-Tabs Switcher**: Clean pill container with high-contrast active state for **Top Brands**, **Nearby Stores**, and **1Fi Marketplace**.
- **Top Brands Tab**: Live brand search, partner count, and retail brand listings with authentic SVGs and 0% EMI availability badges.
- **Nearby Stores Tab**: Physical retail partners with distance indicators (`km`), store hours, and a bottom sheet location selector with GPS simulation.
- **1Fi Marketplace Tab**:
  - Horizontal category filter rail with product count badges.
  - Search bar with live debounced filtering (200ms) and 1-tap clear.
  - Filter & Sort Drawer: Filter by category, brand, price range, EMI tenure, and multiple sorting algorithms.
  - Interactive Product Cards with discount pills, color swatch previews, and monthly EMI chips.
  - Shimmer skeleton loaders and empty search results states with reset triggers.

### 3. Product Detail & Checkout Experience
- **Product Detail Modal (`ProductDetailModal.tsx`)**:
  - Image gallery with interactive thumbnail switcher.
  - Color swatches & storage selectors that dynamically update pricing and SKU details.
  - Interactive 0% EMI tenure grid (3, 6, 9, 12, 18, 24 months) showing monthly installments, total savings, and required Mutual Fund lien collateral.
  - Accordion for technical specifications, product highlights, and 100% genuine brand warranty badges.
  - Wishlist toggle and native Web Share API integration.
- **3-Step MF Pledge Checkout (`CheckoutFlowModal.tsx`)**:
  - *Step 1 (Review Plan)*: Order item summary, monthly installment, zero processing fee confirmation, and delivery estimates.
  - *Step 2 (Pledge Mutual Funds)*: Portfolio holding balance, lien collateral deduction calculation, PAN verification, and 6-digit RTA OTP simulation.
  - *Step 3 (Sanction & Celebration)*: High-energy canvas confetti animation, loan account creation, order ID, and sanction confirmation.

### 4. Companion Views & Modals
- **EMI Dues (`EmiDuesView.tsx`)**: Zero dues celebration state + active repayment schedule tracker with monthly due dates and early repayment simulation.
- **Limit (`LimitView.tsx`)**: Pre-approved credit limit card (`₹4,35,000` / `₹5,00,000`), portfolio balance, and instant CAMS/KFintech refresh simulation.
- **Profile (`ProfileView.tsx`)**: Verified KYC card (Full Name, Phone, Email, PAN), quick action menu, and log out.
- **Tax Invoice & Agreement Download (`PurchasesModal.tsx`)**: 1-click generation and download of a complete, print-ready HTML **Tax Invoice & SEBI/RTA Mutual Fund Lien Acknowledgement Receipt**.
- **Legal Compliance Modals**:
  - 16-section **Privacy Policy** compliant with India's Digital Personal Data Protection (DPDP) Act 2023.
  - 21-section **Terms & Conditions** covering RBI NBFC lending terms and mutual fund lien enforcement.

---

## 📡 REST API Reference

All data is served dynamically through Next.js Route Handlers:

| Endpoint | Method | Description | Parameters / Payload |
| :--- | :---: | :--- | :--- |
| `/api/products` | `GET` | Filter and retrieve marketplace products | `query`, `category`, `brand`, `tenure`, `minPrice`, `maxPrice`, `sortBy` |
| `/api/products/[id]` | `GET` | Retrieve single product details & variants | Dynamic route parameter `id` |
| `/api/categories` | `GET` | List all product categories with counts | None |
| `/api/brands` | `GET` | Partner retail merchant brands | `query` *(optional keyword search)* |
| `/api/stores` | `GET` | Physical partner stores locator | `query`, `city` *(default: Gurugram)* |
| `/api/emi/calculate` | `POST` | Calculate 0% EMI installments & MF lien | `{ "amount": number, "tenureMonths": number }` |

---

## 🏗️ Architecture & Codebase Structure

```
1Fi/
├── public/                       # Static assets, SVG vector logos, and PWA manifest
│   ├── brands/                   # 23 partner brand vector SVGs (Apple, Samsung, Croma, etc.)
│   ├── icons/                    # PWA icons (192px and 512px)
│   └── manifest.json             # PWA Web App Manifest
│
├── src/
│   ├── app/                      # Next.js 14 App Router
│   │   ├── api/                  # 6 REST API Route Handlers
│   │   │   ├── brands/           # /api/brands
│   │   │   ├── categories/       # /api/categories
│   │   │   ├── emi/calculate/    # /api/emi/calculate
│   │   │   ├── products/         # /api/products & /api/products/[id]
│   │   │   └── stores/           # /api/stores
│   │   ├── globals.css           # Tailwind base styles and custom utility classes
│   │   ├── layout.tsx            # Root layout, Google Fonts, and viewport configuration
│   │   └── page.tsx              # Root entry point rendering MobileShell
│   │
│   ├── components/               # Modular UI Component Library
│   │   ├── dues/                 # EMI Dues & repayment tracking
│   │   ├── home/                 # Home dashboard, carousel, marquee, and animations
│   │   ├── layout/               # MobileShell container & BottomNav floating dock
│   │   ├── limit/                # Credit limit & mutual fund portfolio gauge
│   │   ├── marketplace/          # MarketplaceView, ProductCard, DetailModal, CheckoutFlow
│   │   ├── profile/              # ProfileView, KYC, FAQs, Refer & Earn, Purchases, Legal Modals
│   │   └── shop/                 # ShopHeader, TopBrandsTab, NearbyStoresTab
│   │
│   ├── context/                  # Global reactive state management
│   │   └── AppContext.tsx        # Central context for navigation, cart, modals, and profile
│   │
│   └── lib/                      # Core business logic, data models, and services
│       ├── api/                  # marketplaceService.ts (API client with local fallbacks)
│       ├── data/                 # Curated datasets (products, brands, stores, faqs)
│       ├── types.ts              # TypeScript domain types and interfaces
│       └── utils/                # emi.ts (amortization engine) and formatting helpers
│
└── preparatory/                  # Assignment brief, 12 reference screenshots, and walkthrough videos
```

> **Documentation**: Every folder across the codebase (33/33 directories) includes a dedicated `README.md` detailing its purpose, architecture, and interfaces.

---

## 🎨 Design System & Visual Tokens

- **Primary Brand Purple**: `#5C24EB` (Hover: `#4E1BD6`, Soft Tint: `#F5F3FF`)
- **Accent Gradients**:
  - Hero: `linear-gradient(135deg, #120E52 0%, #241380 50%, #5C24EB 100%)`
  - Step Circles: `linear-gradient(135deg, #6C38FF 0%, #501EE6 100%)`
- **Backgrounds**: App Background: `#F8F9FA`, Container: `#EEF2F9`, Card: `#FFFFFF`
- **Typography**: `Plus Jakarta Sans` (Primary UI) and `Inter` (Numbers & Currency)
- **Viewport Specification**: Universal 6.3-inch flagship mobile viewport (`max-w-[430px]`, centered on desktop and full-screen edge-to-edge as an installed PWA on mobile devices).
- **Navigation Dock**: Floating pill capsule (`rounded-[18px]`) with active top purple bar (`h-[3.5px]`).

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17.0 or higher
- npm 9.0.0 or higher

### Installation & Local Development
```bash
# 1. Clone the repository
git clone https://github.com/artignite3/1Fi---SDE-Intern-Assignment.git
cd 1Fi---SDE-Intern-Assignment

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build Verification
```bash
# Run production build and type checking
npm run build

# Start production server
npm start
```

---

## 👤 Author & Submission

- **Candidate**: Riddhesh Dalal
- **Email**: riddhesh_2401ct18@iitp.ac.in
