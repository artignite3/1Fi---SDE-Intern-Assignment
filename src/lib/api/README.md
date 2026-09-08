# API Client Service Layer (`src/lib/api`)

This directory provides `marketplaceService.ts`, a unified frontend service that queries Next.js REST API endpoints with automatic offline/fallback recovery.

---

## 🛠 Methods

```typescript
export const marketplaceService = {
  // Fetch products with search, category, brand, price, and tenure filters
  getProducts(params?: ProductFilterParams, simulateLatency?: number): Promise<Product[]>;

  // Fetch single product by ID
  getProductById(id: string): Promise<Product | null>;

  // Fetch all categories with dynamic product counts
  getCategories(): Promise<Category[]>;

  // Fetch partner brands list with optional query search
  getTopBrands(query?: string): Promise<Brand[]>;

  // Fetch nearby retail stores with city filter
  getNearbyStores(query?: string, city?: string): Promise<Store[]>;

  // Calculate dynamic 0% No-cost EMI plans
  getEMIOptionsForProduct(price: number, tenures?: number[]): Promise<EMIPlan[]>;
};
```
