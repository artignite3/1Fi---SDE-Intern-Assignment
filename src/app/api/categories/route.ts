import { NextResponse } from "next/server";
import { CATEGORIES, PRODUCTS } from "@/lib/data/products";

export async function GET() {
  try {
    const categoriesWithCount = CATEGORIES.map((cat) => {
      if (cat.id === "all") return { ...cat, count: PRODUCTS.length };
      const count = PRODUCTS.filter((p) => p.category === cat.id).length;
      return { ...cat, count };
    });

    return NextResponse.json({
      success: true,
      data: categoriesWithCount,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}
