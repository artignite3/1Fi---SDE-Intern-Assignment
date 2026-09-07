import { EMIPlan } from "../types";

/**
 * Calculates monthly EMI using standard reducing balance formula or 0% No-cost EMI
 */
export function calculateEMIPlan(
  principal: number,
  tenureMonths: number,
  isNoCost: boolean = true,
  annualInterestRate: number = 13.5
): EMIPlan {
  if (isNoCost || tenureMonths <= 0) {
    const monthlyAmount = Math.round(principal / tenureMonths);
    // Calculate standard interest that the user saved
    const r = annualInterestRate / 12 / 100;
    const standardEMI =
      (principal * r * Math.pow(1 + r, tenureMonths)) /
      (Math.pow(1 + r, tenureMonths) - 1);
    const standardTotal = standardEMI * tenureMonths;
    const interestSaved = Math.max(0, Math.round(standardTotal - principal));

    let badge: string | undefined;
    if (tenureMonths === 6) badge = "Most Popular";
    else if (tenureMonths === 12) badge = "Best Value";
    else if (tenureMonths === 24) badge = "Lowest Monthly";

    return {
      tenureMonths,
      monthlyAmount,
      totalPayable: principal,
      isNoCost: true,
      interestRate: 0,
      interestAmount: 0,
      interestDiscount: interestSaved,
      processingFee: 0,
      mfLienAmount: Math.round(principal * 1.3),
      badge,
      isRecommended: tenureMonths === 6 || tenureMonths === 12,
    };
  }

  // Standard Interest calculation
  const r = annualInterestRate / 12 / 100;
  const emi =
    (principal * r * Math.pow(1 + r, tenureMonths)) /
    (Math.pow(1 + r, tenureMonths) - 1);
  const monthlyAmount = Math.round(emi);
  const totalPayable = monthlyAmount * tenureMonths;
  const interestAmount = totalPayable - principal;

  return {
    tenureMonths,
    monthlyAmount,
    totalPayable,
    isNoCost: false,
    interestRate: annualInterestRate,
    interestAmount,
    interestDiscount: 0,
    processingFee: 199,
    mfLienAmount: Math.round(principal * 1.3),
    badge: tenureMonths === 12 ? "Flexible" : undefined,
    isRecommended: false,
  };
}

/**
 * Generates all available EMI plans for a product price
 */
export function getAvailableEMIPlans(
  principal: number,
  tenures: number[] = [3, 6, 9, 12, 18, 24]
): EMIPlan[] {
  return tenures.map((tenure) => calculateEMIPlan(principal, tenure, true));
}

/**
 * Currency formatter for Indian Rupees (₹)
 */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Formats number in Indian format with ₹ symbol
 */
export function formatRupees(amount: number): string {
  if (isNaN(amount)) return "₹0";
  return `₹${amount.toLocaleString("en-IN")}`;
}
