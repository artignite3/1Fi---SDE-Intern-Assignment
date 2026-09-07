import { NextRequest, NextResponse } from "next/server";
import { PRODUCTS } from "@/lib/data/products";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query")?.toLowerCase();
    const category = searchParams.get("category")?.toLowerCase();
    const brand = searchParams.get("brand")?.toLowerCase();
    const tenure = searchParams.get("tenure") ? Number(searchParams.get("tenure")) : null;
    const minPrice = searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : null;
    const maxPrice = searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : null;
    const sortBy = searchParams.get("sortBy") || "featured";

    let results = [...PRODUCTS];

    if (category && category !== "all") {
      results = results.filter((p) => p.category.toLowerCase() === category);
    }

    if (brand && brand !== "all") {
      results = results.filter((p) => p.brand.toLowerCase() === brand);
    }

    if (tenure) {
      results = results.filter((p) => p.availableTenures.includes(tenure));
    }

    if (minPrice !== null) {
      results = results.filter((p) => p.basePrice >= minPrice);
    }

    if (maxPrice !== null) {
      results = results.filter((p) => p.basePrice <= maxPrice);
    }

    if (query && query.trim()) {
      const q = query.trim();
      results = results.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.tag && p.tag.toLowerCase().includes(q))
      );
    }

    switch (sortBy) {
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

    return NextResponse.json({
      success: true,
      count: results.length,
      data: results,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
