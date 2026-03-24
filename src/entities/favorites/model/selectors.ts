import type { RootState } from "@/entities/cart/model/store";

export const selectFavoriteItems = (state: RootState) => state.favorites.items;

export const selectFavoritesCount = (state: RootState) => state.favorites.items.length;

export const selectIsFavorite = (state: RootState, productId?: string) =>
  state.favorites.items.some((item) => String(item.id) === String(productId));
