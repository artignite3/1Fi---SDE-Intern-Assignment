# Shop Hub Components (`src/components/shop`)

This module implements the top-level Shop navigation and tabs specified in the assignment document.

---

## 📦 Components

### 1. `ShopHeader.tsx`
- Renders the signature 1Fi gradient hero banner (`bg-gradient-to-br from-[#0F144B] to-[#25186A]`).
- Includes a 3-tab pill switcher:
  - **Top Brands**
  - **Nearby Stores**
  - **1Fi Marketplace** (Highlighted badge)

### 2. `TopBrandsTab.tsx`
- Searchable directory of partner retail brands (Apple, Croma, Vijay Sales, Reliance Digital, Tanishq, CaratLane, Dyson, Sony, LG, Wakefit, MakeMyTrip, EaseMyTrip, Goibibo, Air India, Taj, Yatra, CGH Earth).
- Displays local brand SVG logos with 0% EMI partner tags.

### 3. `NearbyStoresTab.tsx`
- Physical store locator displaying distance calculations (e.g. `1.2 km away`), store addresses, operating hours, and a simulated GPS location picker.
