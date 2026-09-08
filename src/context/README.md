# Global State Management (`src/context`)

This module provides global application state management using React Context and custom hooks.

---

## 📦 `AppContext.tsx`

Provides centralized reactive state across the entire mobile web app:

```typescript
interface AppContextType {
  // Navigation State
  activeBottomTab: "home" | "shop" | "dues" | "limit" | "profile";
  setActiveBottomTab: (tab: BottomTab) => void;
  shopSubTab: "top-brands" | "nearby-stores" | "marketplace";
  setShopSubTab: (tab: ShopSubTab) => void;

  // Selected Product & Checkout Flow
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  selectedVariant: ProductVariant | null;
  setSelectedVariant: (variant: ProductVariant | null) => void;
  selectedEMIPlan: EMIPlan | null;
  setSelectedEMIPlan: (plan: EMIPlan | null) => void;
  isCheckoutModalOpen: boolean;
  setIsCheckoutModalOpen: (open: boolean) => void;

  // Modals & Order Store
  activeModal: "none" | "faqs" | "refer" | "purchases" | "productDetail";
  setActiveModal: (modal: ModalType) => void;
  orders: Order[];
  addOrder: (order: Order) => void;
}
```

### Usage
```tsx
import { useApp } from "@/context/AppContext";

function MyComponent() {
  const { activeBottomTab, setActiveBottomTab } = useApp();
  // ...
}
```
