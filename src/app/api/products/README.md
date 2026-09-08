# Products API Endpoint (src/app/api/products/)

Provides REST API endpoints for browsing, searching, and filtering products within the 1Fi Marketplace.

---

## Endpoints

- GET /api/products: Retrieve filtered product listing. Supports query, category, minPrice, maxPrice, 	enure, and sortBy.
- GET /api/products/[id]: Retrieve single product with full specifications, variants, and EMI plans.
