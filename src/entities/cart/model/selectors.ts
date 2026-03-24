import type { RootState } from "@/entities/cart/model/store";
import type { CartSummary } from "@/entities/cart/model/types";

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartSummary = (state: RootState): CartSummary =>
  state.cart.items.reduce(
    (memo, unit) => {
      memo.qty += Number(unit.qty || 0);
      memo.total += Number(unit.total || unit.price || 0);
      return memo;
    },
    { qty: 0, total: 0 } as CartSummary,
  );
