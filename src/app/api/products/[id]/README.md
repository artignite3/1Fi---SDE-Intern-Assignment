# Single Product Dynamic Route Handler (src/app/api/products/[id]/)

Handles dynamic API requests for individual product detail lookups within the 1Fi Marketplace.

---

## Endpoint Details

- **Route**: GET /api/products/[id]
- **Parameters**:
  - id *(string, required)*: The unique product identifier (e.g., prod-iphone-16-pro, prod-macbook-air-m3).
- **Response Format**:
  Returns the complete Product object including specs, variant definitions, image gallery, rating, highlights, and pre-calculated EMI tenure plans.
- **Error Handling**:
  Returns HTTP 404 with { error: "Product not found" } if the ID does not match any catalog entry.
