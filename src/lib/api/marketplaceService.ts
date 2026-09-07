import { BRANDS, NEARBY_STORES } from "../data/brands";
import { CATEGORIES, PRODUCTS } from "../data/products";
import { Brand, Category, EMIPlan, Product, Store } from "../types";
import { calculateEMIPlan, getAvailableEMIPlans } from "../utils/emi";

export interface ProductFilterParams {
  query?: string;
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  tenure?: number;
  sortBy?: "featured" | "price-asc" | "price-desc" | "rating" | "discount";
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const marketplaceService = {
  /**
   * Fetches products via Next.js API route /api/products with fallback
   */
  async getProducts(params: ProductFilterParams = {}, simulateLatency = 200): Promise<Product[]> {
    try {
      if (typeof window !== "undefined") {
        const queryParams = new URLSearchParams();
        if (params.query) queryParams.set("query", params.query);
        if (params.category && params.category !== "all") queryParams.set("category", params.category);
        if (params.brand && params.brand !== "all") queryParams.set("brand", params.brand);
        if (params.tenure) queryParams.set("tenure", params.tenure.toString());
        if (typeof params.minPrice === "number") queryParams.set("minPrice", params.minPrice.toString());
        if (typeof params.maxPrice === "number") queryParams.set("maxPrice", params.maxPrice.toString());
        if (params.sortBy) queryParams.set("sortBy", params.sortBy);

        const res = await fetch(`/api/products?${queryParams.toString()}`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data)) {
            return json.data;
          }
        }
      }
    } catch (e) {
      // Fallback to local filtering
    }

    if (simulateLatency > 0) {
      await delay(simulateLatency);
    }

    let results = [...PRODUCTS];

    if (params.category && params.category !== "all") {
      results = results.filter((p) => p.category.toLowerCase() === params.category?.toLowerCase());
    }

    if (params.brand && params.brand !== "all") {
      results = results.filter((p) => p.brand.toLowerCase() === params.brand?.toLowerCase());
    }

    if (params.tenure) {
      results = results.filter((p) => p.availableTenures.includes(params.tenure!));
    }

    if (typeof params.minPrice === "number") {
      results = results.filter((p) => p.basePrice >= params.minPrice!);
    }

    if (typeof params.maxPrice === "number") {
      results = results.filter((p) => p.basePrice <= params.maxPrice!);
    }

    if (params.query && params.query.trim()) {
      const q = params.query.trim().toLowerCase();
      results = results.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.tag && p.tag.toLowerCase().includes(q))
      );
    }

    if (params.sortBy) {
      switch (params.sortBy) {
        case "price-asc":
          results.sort((a, b) => a.basePrice - b.basePrice);
          break;
        case "price-desc":
          results.sort((a, b) => b.basePrice - a.basePrice);
          break;
        case "rating":
          results.sort((a, b) => b.rating - a.rating);
          break;
        case "discount":
          results.sort((a, b) => b.discountPercentage - a.discountPercentage);
          break;
        case "featured":
        default:
          results.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
          break;
      }
    }

    return results;
  },

  /**
   * Fetches single product by ID
   */
  async getProductById(id: string): Promise<Product | null> {
    try {
      if (typeof window !== "undefined") {
        const res = await fetch(`/api/products/${id}`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data) return json.data;
        }
      }
    } catch (e) {}

    await delay(100);
    const product = PRODUCTS.find((p) => p.id === id);
    return product || null;
  },

  /**
   * Fetches category list with item counts
   */
  async getCategories(): Promise<Category[]> {
    try {
      if (typeof window !== "undefined") {
        const res = await fetch(`/api/categories`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data)) return json.data;
        }
      }
    } catch (e) {}

    await delay(50);
    return CATEGORIES.map((cat) => {
      if (cat.id === "all") return { ...cat, count: PRODUCTS.length };
      const count = PRODUCTS.filter((p) => p.category === cat.id).length;
      return { ...cat, count };
    });
  },

  /**
   * Fetches Top Brands list
   */
  async getTopBrands(query?: string): Promise<Brand[]> {
    try {
      if (typeof window !== "undefined") {
        const url = query ? `/api/brands?query=${encodeURIComponent(query)}` : `/api/brands`;
        const res = await fetch(url);
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data)) return json.data;
        }
      }
    } catch (e) {}

    await delay(100);
    if (!query || !query.trim()) return BRANDS;
    const q = query.trim().toLowerCase();
    return BRANDS.filter(
      (b) => b.name.toLowerCase().includes(q) || b.category.toLowerCase().includes(q)
    );
  },

  /**
   * Fetches Nearby Stores
   */
  async getNearbyStores(query?: string, city = "Gurugram"): Promise<Store[]> {
    try {
      if (typeof window !== "undefined") {
        const params = new URLSearchParams();
        if (query) params.set("query", query);
        if (city) params.set("city", city);
        const res = await fetch(`/api/stores?${params.toString()}`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data)) return json.data;
        }
      }
    } catch (e) {}

    await delay(150);
    let stores = [...NEARBY_STORES];
    if (city) {
      stores = stores.filter((s) => s.city.toLowerCase() === city.toLowerCase());
    }
    if (query && query.trim()) {
      const q = query.trim().toLowerCase();
      stores = stores.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.brand.toLowerCase().includes(q) ||
          s.address.toLowerCase().includes(q)
      );
    }
    return stores;
  },

  /**
   * Dynamically calculates EMI options
   */
  async getEMIOptionsForProduct(price: number, tenures?: number[]): Promise<EMIPlan[]> {
    return getAvailableEMIPlans(price, tenures);
  },

  calculatePlan(price: number, tenureMonths: number, isNoCost = true): EMIPlan {
    return calculateEMIPlan(price, tenureMonths, isNoCost);
  },
};
