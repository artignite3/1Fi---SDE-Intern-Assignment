# Library & Core Services (`src/lib`)

This directory contains TypeScript domain definitions, data access services, mock dataset seed files, and financial calculation utilities.

---

## 📁 Subdirectories & Files

```
src/lib/
├── api/                  # API client service layer (marketplaceService.ts)
├── data/                 # Seed data files (products.ts, brands.ts, faqs.ts)
├── utils/                # Pure mathematical & styling utilities (emi.ts, cn.ts)
├── types.ts              # Core TypeScript interface definitions
└── README.md             # This documentation file
```

---

## 🏷️ Domain Interfaces (`types.ts`)
- `Product`: Complete product entity including variants, specs, tenures, rating, and merchant info.
- `ProductVariant`: SKU variant with custom storage, color, hex, and price adjustment.
- `EMIPlan`: EMI tenure breakdown with monthly installment, interest saved, and required MF portfolio lien.
- `Brand`: Partner brand entity with category and SVG logo path.
- `Store`: Physical retail store with distance, city, and GPS coordinates.
- `Order`: Sanctioned purchase record with voucher code and pledged funds.
- `UserProfile`: User KYC and portfolio summary.
