# 1Fi Marketplace - Shop Page Implementation

A modern, pixel-perfect implementation of the **1Fi Marketplace** section within the **Shop** experience of the 1Fi application, built with **Next.js 14**, **React 18**, **TypeScript**, and **Tailwind CSS**.

---

## 🌟 Overview & Features

### 1. Shop Page Navigation & Sub-Tabs
- **Hero Banner**: Faithfully reproduces 1Fi's signature blue-purple gradient hero banner (`✦ NO-COST EMIs`, *"Shop today, Pay later using Mutual funds"*, 3D lifestyle illustration & golden confetti).
- **Sub-Tabs Switcher**:
  - `Top Brands`: Interactive brand listing (Air India, Apple Premium Reseller, CaratLane, Croma, MakeMyTrip, Reliance Digital, Tanishq, Vijay Sales, etc.) with search filter and empty states.
  - `Nearby Stores`: Location-aware store directory with distance markers (`km`), store hours, calling & directions triggers, and a **"Select Your Location"** drawer with live GPS detection animation and pincode search.
  - `1Fi Marketplace`: The comprehensive marketplace flow evaluated in the assignment.

### 2. 1Fi Marketplace Features
- **Product Catalog & Dynamic Search**: Instant debounced search for products, brands, and categories.
- **Category Filter Pills**: Sparkles (All Products), Smartphones, Laptops & PCs, Audio & Wearables, TVs & Home, Travel & Tours, Gold & Luxury.
- **Promotional Carousel**: Auto-rotating feature banners (*"Apple Flagship Deal"*, *"Euro-phoric Escape"*, *"Sony ANC"*).
- **Comprehensive Filter & Sort Drawer**:
  - Sort by Featured, Price Low-High, Price High-Low, Rating, Highest Discount.
  - Price Range filters (Under ₹30k, ₹30k-₹75k, ₹75k-₹1.5L, ₹1.5L+).
  - No-cost EMI tenure filter (3, 6, 9, 12, 18, 24 months).
  - Brand filter tags.
- **Product Cards**: High-res images, brand badges, discount percentages, customer ratings, color swatches preview, and dynamic `0% No-cost EMI from ₹X/mo` pills.
- **Loading & Empty States**: Shimmer skeleton cards matching the 1Fi design system and search zero-results states.

### 3. Interactive Product Details & EMI Selector
- **Interactive Variant Picker**: Switch colors and storage options with live price & EMI recalculation.
- **Dynamic 0% EMI Calculator Engine**:
  - Interactive tenure selection: 3, 6, 9, 12, 18, 24 months.
  - Transparent cost breakdown: Monthly installment, 0% interest, ₹0 processing fee, interest saved amount.
  - Mutual Fund Lien Collateral calculator (e.g. ₹X pledged while your portfolio continues compounding).
- **Technical Specs & Highlights Accordion**: In-depth product features, warranty, and delivery information.

### 4. Multi-Step MF-Backed Checkout Flow
- **Step 1: Review Summary**: Complete loan and EMI installment breakdown.
- **Step 2: Mutual Fund Pledge**: Real-time portfolio check via MFCentral/PAN, OTP authorization simulator, and lien confirmation.
- **Step 3: Loan Sanction & Order Confirmation**: Festive confetti celebration, loan account number, sanction letter download, and auto-debit schedule.

### 5. Authentic Companion Tabs
- **Home Tab**: Hero get started card, top brands carousel, "Why pay with 1Fi" benefit grid, "How 1Fi Works" 3-step guide, Refer & Earn banner, and expandable FAQ accordion.
- **EMI Dues Tab**: "Nothing Due Yet" empty state matching screenshots + active loan repayment tracker.
- **Limit Tab**: "Check Eligibility" lock illustration and mutual fund portfolio limit unlock simulator.
- **Profile Tab**: Profile details, KYC verification status, Purchases history modal, Refer & Earn modal, and Support & FAQs drawer.
- **Device Frame Toggle**: Switch between **Mobile App Frame (iPhone/Android aspect ratio)** and **Full Screen Responsive Web**.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, React Server Components & Client Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type-safety)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with customized 1Fi color tokens (`#6C38FF`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations & Effects**: [Framer Motion](https://www.framer.com/motion/) & [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Architecture**: Clean modular separation across `src/components/`, `src/lib/data/`, `src/lib/api/`, `src/lib/utils/`, and `src/context/`.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```
