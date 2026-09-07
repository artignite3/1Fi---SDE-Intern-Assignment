import { NextRequest, NextResponse } from "next/server";
import { calculateEMIPlan, getAvailableEMIPlans } from "@/lib/utils/emi";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { price, tenureMonths, isNoCost } = body;

    if (!price || typeof price !== "number") {
      return NextResponse.json(
        { success: false, error: "Valid price is required" },
        { status: 400 }
      );
    }

    if (tenureMonths) {
      const plan = calculateEMIPlan(price, Number(tenureMonths), isNoCost !== false);
      return NextResponse.json({
        success: true,
        data: plan,
      });
    }

    const plans = getAvailableEMIPlans(price);
    return NextResponse.json({
      success: true,
      data: plans,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to calculate EMI" },
      { status: 500 }
    );
  }
}
