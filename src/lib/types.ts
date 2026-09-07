export interface ProductVariant {
  id: string;
  name: string; // e.g. "256 GB - Natural Titanium"
  sku: string;
  price: number;
  originalPrice: number;
  inStock: boolean;
  attributes: {
    storage?: string;
    ram?: string;
    color?: {
      name: string;
      hex: string;
    };
    size?: string;
  };
  image?: string;
}

export interface EMIPlan {
  tenureMonths: number;
  monthlyAmount: number;
  totalPayable: number;
  isNoCost: boolean;
  interestRate: number; // e.g. 0% for no-cost, or 12% standard
  interestAmount: number;
  interestDiscount: number; // Discount provided by 1Fi for 0%
  processingFee: number;
  mfLienAmount: number; // Amount of Mutual Fund required to pledge (e.g. 1.5x principal)
  badge?: string; // e.g. "Most Popular", "Lowest Monthly", "Best Value"
  isRecommended?: boolean;
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  brand: string;
  brandLogo?: string;
  category: string;
  rating: number;
  reviewsCount: number;
  basePrice: number;
  originalPrice: number;
  discountPercentage: number;
  images: string[];
  description: string;
  highlights: string[];
  specifications: Record<string, string>;
  availableTenures: number[]; // e.g. [3, 6, 9, 12, 18, 24]
  variants: ProductVariant[];
  availableColors: { name: string; hex: string }[];
  availableStorage?: string[];
  inStock: boolean;
  isFeatured?: boolean;
  isNew?: boolean;
  tag?: string; // e.g., "Trending", "Apple Flagship Deal", "Top Seller"
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count?: number;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  category: string;
  maxTenureMonths: number;
  tagline: string;
  isNoCost: boolean;
  website?: string;
}

export interface Store {
  id: string;
  name: string;
  brand: string;
  address: string;
  city: string;
  pincode: string;
  distanceKm: number;
  phone: string;
  hours: string;
  logo: string;
}

export interface Order {
  id: string;
  product: Product;
  selectedVariant: ProductVariant;
  emiPlan: EMIPlan;
  purchaseDate: string;
  firstDueDate: string;
  status: "ACTIVE" | "COMPLETED" | "PROCESSING";
  loanAccountNumber: string;
  lienPledgedMutualFund: string;
  remainingMonths: number;
  paidMonths: number;
}

export interface UserProfile {
  name: string;
  phone: string;
  email: string;
  pan: string;
  kycStatus: "VERIFIED" | "PENDING" | "NOT_STARTED";
  creditLimitTotal: number;
  creditLimitAvailable: number;
  mutualFundHoldingsValue: number;
  pledgedHoldingsValue: number;
  referralCode: string;
  referralEarnings: number;
}
