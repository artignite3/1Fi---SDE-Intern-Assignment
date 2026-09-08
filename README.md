# 1Fi Marketplace — Shop Page Implementation

A modern, pixel-perfect, fully responsive mobile web application for the **1Fi Marketplace** section within the **Shop** experience of the 1Fi application, built with **Next.js 14 App Router**, **React 18**, **TypeScript**, and **Tailwind CSS**.

---

## 🌟 Overview & Feature Highlights

### 1. Shop Experience & 3 Sub-Tabs
- **Signature Gradient Hero Banner**: Faithful reproduction of 1Fi's blue-purple gradient hero banner (`✦ NO-COST EMIs`, *"Shop today, Pay later using Mutual funds"*).
- **Sub-Tabs Navigation**:
  - `Top Brands`: Searchable directory of partner retail brands (Apple, Croma, Vijay Sales, Reliance Digital, Tanishq, CaratLane, Dyson, Sony, LG, Wakefit, MakeMyTrip, EaseMyTrip, Goibibo, Air India, Taj, Yatra, CGH Earth) with local SVGs and 0% EMI badges.
  - `Nearby Stores`: Location-aware store directory with distance markers (`km`), store hours, and simulated GPS location picker.
  - `1Fi Marketplace`: The comprehensive marketplace flow evaluated in the assignment.

### 2. 1Fi Marketplace Feature Module
- **Category Rail**: Smooth horizontal scrolling filter pills (`All`, `Electronics`, `Gold & Silver`, `EV & Mobility`, `Travel & Stay`, `Fashion & Watches`, `Home & Living`).
- **Live Search & Filtering**: Instant debounced search for products, brands, and categories.
- **Filter & Sort Bottom Sheet**: Multi-criteria filtering by Category, Brand, Price Range slider, and Sorting options (Featured, Price: Low-High, Price: High-Low, Rating, Discount).
- **Interactive Product Cards**: High-res images, brand badges, discount percentages, calculated 0% monthly EMI badges, and "Pledge MF to Buy" CTA.
- **Product Detail Modal**: Live color & storage variant switching with instant price & EMI recalculation, technical specifications, warranty, and voucher delivery guarantees.
- **Dynamic 0% No-Cost EMI Calculator**: Interactive tenure selection (3, 6, 9, 12, 18, 24 months) showing monthly installment, total interest saved against credit cards, and Mutual Fund portfolio holding requirements.
- **3-Step MF Pledge Checkout Flow**:
  1. *Step 1 (Pledge Portfolio)*: Allocates portfolio units without liquidating mutual funds.
  2. *Step 2 (OTP Verification)*: Simulates SEBI / CAMS / KFintech lien approval.
  3. *Step 3 (Sanction & Voucher)*: Animated confetti celebration screen displaying the issued shopping voucher code, auto-saving order to `Purchases` and creating repayment dues in `EMI Dues`.

### 3. Authentic Companion Views & Modals (1Fi App Walkthrough)
- **Home View**: Credit limit dashboard (`₹2,50,000`), portfolio stats (`₹4,85,000`), merchant offers carousel, value proposition cards, and "How 1Fi Works" 3-step guide.
- **EMI Dues View**: Zero dues celebration state + active loan repayment tracker with "Pay Now" simulation.
- **Limit View**: Credit line unlock simulator and LTV calculator.
- **Profile View & Modals**: KYC verification card, Support & FAQs accordion modal, Refer & Earn referral link generator, and Purchases history tracker.
- **Floating Bottom Capsule Dock**: Floating rounded white pill dock (`rounded-[32px]`) with top purple indicator bar and single-line baseline typography.

---

## 🏗️ Architecture & Codebase Structure

```
├── public/                       # Static public assets & brand vector SVGs
│   ├── brands/                   # 20 local partner SVG logos
│   ├── icons/                    # PWA web app icons
│   ├── manifest.json             # Web App Manifest for mobile installation
│   └── README.md                 # Public assets documentation
│
├── src/
│   ├── app/                      # Next.js 14 App Router
│   │   ├── api/                  # Backend REST API route handlers
│   │   │   ├── brands/           # /api/brands
│   │   │   ├── categories/       # /api/categories
│   │   │   ├── emi/calculate/    # /api/emi/calculate
│   │   │   ├── products/         # /api/products & /api/products/[id]
│   │   │   └── stores/           # /api/stores
│   │   ├── globals.css           # Tailwind layers & utilities
│   │   ├── layout.tsx            # Font optimization & PWA metadata
│   │   ├── page.tsx              # MobileShell container mount
│   │   └── README.md             # App router documentation
│   │
│   ├── components/               # Modular UI Component hierarchy
│   │   ├── layout/               # MobileShell & Floating BottomNav
│   │   ├── shop/                 # ShopHeader, TopBrandsTab, NearbyStoresTab
│   │   ├── marketplace/          # Marketplace, ProductCard, Detail, EMI, Checkout
│   │   ├── home/                 # Home credit dashboard
│   │   ├── dues/                 # EMI Dues & repayment tracker
│   │   ├── limit/                # Limit unlock & eligibility simulator
│   │   ├── profile/              # Profile, FAQs, Refer & Earn, Purchases
│   │   └── README.md             # Components documentation
│   │
│   ├── context/                  # Global reactive state management
│   │   ├── AppContext.tsx        # Central context & hooks
│   │   └── README.md             # Context documentation
│   │
│   └── lib/                      # Core business logic & services
│       ├── api/                  # marketplaceService.ts (API client)
│       ├── data/                 # Static datasets (products, brands, faqs)
│       ├── utils/                # emi.ts (0% EMI engine), cn.ts
│       ├── types.ts              # TypeScript domain interfaces
│       └── README.md             # Library documentation
│
└── README.md                     # Root project documentation
```

---

## 📡 Backend REST API Reference

| Method | Endpoint | Description | Query / Body Parameters |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/products` | Search & filter products | `query`, `category`, `brand`, `tenure`, `minPrice`, `maxPrice`, `sortBy` |
| `GET` | `/api/products/[id]` | Fetch single product by ID | URL parameter `id` |
| `GET` | `/api/categories` | Categories with item counts | None |
| `GET` | `/api/brands` | Search partner brands | `query` |
| `GET` | `/api/stores` | Nearby retail stores locator | `query`, `city` |
| `POST` | `/api/emi/calculate` | Compute 0% EMI plans & savings | JSON: `{ price: number, tenureMonths?: number }` |

---

## 🎨 Design System & Tokens

- **1Fi Signature Purple**: `#5C24EB`
- **Soft Violet Pill Background**: `#F2EEFD`
- **Clean App Background**: `#F8F9FA`
- **Primary Charcoal Text**: `#181A20`
- **Secondary Muted Text**: `#80869A`
- **Crisp Card Border**: `#F1F3F9`
- **Success Green**: `#00BA88`
- **Typography**: Google Fonts `Plus Jakarta Sans` & `Inter`
- **Universal Mobile Ratio**: Standard 6.3-inch (`1206 × 2622 px`, `19.5:9` aspect ratio, `max-w-[430px]` centered on desktop and full-screen on mobile).

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or [http://localhost:3001](http://localhost:3001)) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## 📦 Pushing to GitHub (Whenever You Are Ready)

```bash
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git branch -M main
git push -u origin main
```
