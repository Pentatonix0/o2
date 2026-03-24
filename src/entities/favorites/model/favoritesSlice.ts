import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "@/entities/product/model/types";
import type { FavoritesState } from "@/entities/favorites/model/types";

function squeezeProduct(product?: Product): Product {
  return {
    id: product?.id || "",
    title: product?.title || "",
    short: product?.short || "",
    description: product?.description || "",
    price: Number(product?.price || 0),
    category: product?.category || "",
    tag: product?.tag || "",
    accent: product?.accent || "#000000",
    tone: product?.tone || "#000000",
    image: product?.image,
  };
}

const initialState: FavoritesState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favoritesPocket",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<Product | undefined>) {
      const thing = action.payload;
      const index = state.items.findIndex(
        (unit) => String(unit.id) === String(thing?.id),
      );

      if (index >= 0) {
        state.items.splice(index, 1);
        return;
      }

      state.items.unshift(squeezeProduct(thing));
    },
    clearFavorites(state) {
      state.items = [];
    },
  },
});

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
