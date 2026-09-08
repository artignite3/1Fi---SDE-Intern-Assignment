# 1Fi REST API Layer (`src/app/api`)

This directory provides the server-side REST API route handlers powering product searches, category counts, brand filtering, store locator queries, and dynamic 0% No-cost EMI calculations.

---

## 📡 Endpoints Overview

| Method | Endpoint | Description | Query / Body Parameters |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/products` | Search & filter products | `query`, `category`, `brand`, `tenure`, `minPrice`, `maxPrice`, `sortBy` |
| `GET` | `/api/products/[id]` | Fetch single product details | URL param `id` |
| `GET` | `/api/categories` | List categories with item counts | None |
| `GET` | `/api/brands` | Search partner brands | `query` |
| `GET` | `/api/stores` | Nearby retail stores locator | `query`, `city` |
| `POST` | `/api/emi/calculate` | Compute 0% EMI plans & savings | JSON Body: `{ price: number, tenureMonths?: number }` |

---

## 💡 API Usage Examples

### 1. Product Search & Filter
```http
GET /api/products?category=electronics&minPrice=20000&maxPrice=100000&sortBy=price-asc HTTP/1.1
```
**Response (200 OK):**
```json
{
  "success": true,
  "count": 4,
  "data": [
    {
      "id": "prod-1",
      "title": "Apple iPhone 16 Pro (128 GB)",
      "brand": "Apple",
      "basePrice": 119900,
      "discountPercentage": 7,
      "availableTenures": [3, 6, 9, 12, 18, 24],
      "emiPerMonth": 4995,
      ...
    }
  ]
}
```

### 2. Dynamic EMI Calculation
```http
POST /api/emi/calculate HTTP/1.1
Content-Type: application/json

{
  "price": 119900,
  "tenureMonths": 24
}
```
**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "tenureMonths": 24,
    "monthlyInstallment": 4995,
    "totalAmount": 119900,
    "interestRate": 0,
    "interestSaved": 19184,
    "processingFee": 0,
    "isNoCost": true,
    "requiredMFPortfolio": 179850
  }
}
```
