# 1Fi Web Application Source (src/)

This directory contains the entire core source code for the **1Fi** web application. The architecture is organized according to Next.js 14 App Router conventions, modular component design, and clean separation of concerns.

---

## Directory Structure

`
src/
├── app/                  # Next.js 14 App Router pages, layout, and API Route Handlers
│   ├── api/              # RESTful API route handlers for products, brands, stores, EMI
│   ├── globals.css       # Tailwind CSS styles and custom utility classes
│   ├── layout.tsx        # Root HTML layout, font loaders, metadata, and PWA configuration
│   └── page.tsx          # Root page entry point rendering MobileShell
│
├── components/           # UI Component library divided by domain/feature
│   ├── dues/             # EMI Dues tracking and payment history views
│   ├── home/             # Home view with hero banner, carousels, and animations
│   ├── layout/           # Mobile container shell and bottom dock navigation
│   ├── limit/            # Credit limit unlocking and mutual fund portfolio gauge
│   ├── marketplace/      # 1Fi Marketplace product listing, filters, and checkout
│   ├── profile/          # User profile, KYC card, and legal agreement dialogs
│   └── shop/             # Shop companion views (Top Brands & Nearby Stores)
│
├── context/              # React Context state management
│   └── AppContext.tsx    # Global active tab, modal, product, order, and profile state
│
└── lib/                  # Application utilities, models, and mock data
    ├── api/              # API service client abstraction layer
    ├── data/             # Static datasets for products, categories, brands, stores, FAQs
    ├── types.ts          # TypeScript type definitions and interfaces
    └── utils/            # Mathematical and financial calculation helpers (EMI, currency)
`

---

## Architecture Principles

1. **Mobile-First Responsive Shell**:
   The entire application is rendered inside a universal 6.3-inch flagship mobile frame (max-w-[430px]), centering on desktop viewports and running edge-to-edge as an installed Progressive Web App (PWA) on mobile devices.

2. **Data Decoupling**:
   UI components do not hardcode product or financial figures. All data flows through [src/lib/api/marketplaceService.ts](./lib/api/marketplaceService.ts) and Next.js Route Handlers.

3. **Domain-Driven Modular Components**:
   Components are grouped by business domain with clear boundaries and independent reusability.

4. **Type Safety**:
   All entities, API payloads, and state models adhere strictly to TypeScript definitions in [src/lib/types.ts](./lib/types.ts).
