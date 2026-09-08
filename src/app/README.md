# Next.js App Router (`src/app`)

This directory contains the core application entry point, routing structure, global styling, and backend REST API route handlers built with the **Next.js 14 App Router**.

---

## 📁 Directory Structure

```
src/app/
├── api/                  # Backend REST API route handlers
│   ├── brands/           # Partner brands endpoint (/api/brands)
│   ├── categories/       # Product categories endpoint (/api/categories)
│   ├── emi/calculate/    # Dynamic 0% No-cost EMI calculator (/api/emi/calculate)
│   ├── products/         # Product catalog and search (/api/products)
│   │   └── [id]/         # Single product details (/api/products/[id])
│   └── stores/           # Nearby store locator (/api/stores)
├── globals.css           # Global Tailwind CSS directives & scrollbar utilities
├── layout.tsx            # Root layout with font optimization & metadata
├── page.tsx              # Application client root rendering MobileShell
└── README.md             # This documentation file
```

---

## 🔑 Key Files & Architectural Roles

### 1. `layout.tsx` (Root Layout)
- Loads and optimizes Google Fonts: **Plus Jakarta Sans** and **Inter** via `@next/font/google` for ultra-crisp typography.
- Injects standard PWA metadata (`viewport`, `themeColor: "#0F144B"`, `appleWebApp`).
- Wraps the entire application with `AppProvider` context.

### 2. `page.tsx` (App Entry Point)
- Mounts the client-side `MobileShell` container, rendering the unified 6.3-inch mobile web app interface.

### 3. `globals.css` (Global Styles)
- Configures Tailwind CSS `@tailwind` layers.
- Adds utility classes for hiding default scrollbars (`.scrollbar-none`) while preserving smooth horizontal flick-scrolling across brand and category rails.
