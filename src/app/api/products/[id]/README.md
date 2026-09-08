# Product Detail API Route (`src/app/api/products/[id]/`)

Provides dynamic retrieval of a single product with complete specifications, variant lists, and available EMI plans by its unique product identifier.

---

## Endpoint Details

- **Route**: `GET /api/products/[id]`
- **URL Parameters**:
  - `id` *(string, required)*: The unique product identifier (e.g. `prod-iphone-16-pro`, `prod-samsung-s24-ultra`).
- **Response Format**:
  ```json
  {
    "success": true,
    "data": {
      "id": "prod-iphone-16-pro",
      "title": "Apple iPhone 16 Pro Max",
      "brand": "Apple",
      "basePrice": 144900,
      "variants": [ ... ],
      "specifications": { ... },
      "availableTenures": [3, 6, 9, 12, 18, 24]
    }
  }
  ```
- **Error Responses**:
  - `404 Not Found`: Returns `{ "success": false, "error": "Product not found" }` if the product ID does not match any record.
  - `500 Internal Server Error`: Returns `{ "success": false, "error": "Failed to fetch product" }`.
