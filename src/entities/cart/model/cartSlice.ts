import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "@/entities/product/model/types";
import type { CartState } from "@/entities/cart/model/types";

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "basketPocket",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product | undefined>) {
      const thing = action.payload;
      const maybeThere = state.items.find(
        (unit) => String(unit.id) === String(thing?.id),
      );

      if (maybeThere) {
        maybeThere.qty = Number(maybeThere.qty || 0) + 1;
        maybeThere.total = Number(maybeThere.qty || 0) * Number(maybeThere.price || 0);
        return;
      }

      state.items.push({
        id: thing?.id || "",
        title: thing?.title || "",
        price: Number(thing?.price || 0),
        image: thing?.image,
        qty: 1,
        total: Number(thing?.price || 0),
      });
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
