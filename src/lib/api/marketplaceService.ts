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

// Simulates real asynchronous network latency
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const marketplaceService = {
  /**
   * Fetches products with async filtering, search, and sorting
   */
  async getProducts(params: ProductFilterParams = {}, simulateLatency = 300): Promise<Product[]> {
    if (simulateLatency > 0) {
      await delay(simulateLatency);
    }

    let results = [...PRODUCTS];

    // Category filter
    if (params.category && params.category !== "all") {
      results = results.filter((p) => p.category.toLowerCase() === params.category?.toLowerCase());
    }

    // Brand filter
    if (params.brand && params.brand !== "all") {
      results = results.filter((p) => p.brand.toLowerCase() === params.brand?.toLowerCase());
    }

    // Tenure filter
    if (params.tenure) {
      results = results.filter((p) => p.availableTenures.includes(params.tenure!));
    }

    // Min price
    if (typeof params.minPrice === "number") {
      results = results.filter((p) => p.basePrice >= params.minPrice!);
    }

    // Max price
    if (typeof params.maxPrice === "number") {
      results = results.filter((p) => p.basePrice <= params.maxPrice!);
    }

    // Search query
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

    // Sorting
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
    await delay(150);
    const product = PRODUCTS.find((p) => p.id === id);
    return product || null;
  },

  /**
   * Fetches category list with item counts
   */
  async getCategories(): Promise<Category[]> {
    await delay(100);
    return CATEGORIES.map((cat) => {
      if (cat.id === "all") return { ...cat, count: PRODUCTS.length };
      const count = PRODUCTS.filter((p) => p.category === cat.id).length;
      return { ...cat, count };
    });
  },

  /**
   * Fetches Top Brands list with optional search
   */
  async getTopBrands(query?: string): Promise<Brand[]> {
    await delay(200);
    if (!query || !query.trim()) return BRANDS;
    const q = query.trim().toLowerCase();
    return BRANDS.filter(
      (b) => b.name.toLowerCase().includes(q) || b.category.toLowerCase().includes(q)
    );
  },

  /**
   * Fetches Nearby Stores with search and location
   */
  async getNearbyStores(query?: string, city = "Gurugram"): Promise<Store[]> {
    await delay(250);
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
   * Dynamically calculates EMI options for a given price
   */
  async getEMIOptionsForProduct(price: number, tenures?: number[]): Promise<EMIPlan[]> {
    await delay(50);
    return getAvailableEMIPlans(price, tenures);
  },

  /**
   * Calculate single plan detail
   */
  calculatePlan(price: number, tenureMonths: number, isNoCost = true): EMIPlan {
    return calculateEMIPlan(price, tenureMonths, isNoCost);
  },
};
