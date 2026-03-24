export interface CartItem {
  id: string;
  title: string;
  price: number;
  image?: string;
  qty: number;
  total: number;
}

export interface CartState {
  items: CartItem[];
}

export interface CartSummary {
  qty: number;
  total: number;
}
