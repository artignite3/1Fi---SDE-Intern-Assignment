import { NextRequest, NextResponse } from "next/server";
import { NEARBY_STORES } from "@/lib/data/brands";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query")?.toLowerCase();
    const city = searchParams.get("city")?.toLowerCase();

    let results = [...NEARBY_STORES];

    if (city) {
      results = results.filter((s) => s.city.toLowerCase() === city);
    }

    if (query && query.trim()) {
      results = results.filter(
        (s) =>
          s.name.toLowerCase().includes(query) ||
          s.brand.toLowerCase().includes(query) ||
          s.address.toLowerCase().includes(query)
      );
    }

    return NextResponse.json({
      success: true,
      count: results.length,
      data: results,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch stores" },
      { status: 500 }
    );
  }
}
