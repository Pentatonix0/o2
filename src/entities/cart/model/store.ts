import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/entities/cart/model/cartSlice";
import favoritesReducer from "@/entities/favorites/model/favoritesSlice";

export function createShopStore() {
  return configureStore({
    reducer: {
      cart: cartReducer,
      favorites: favoritesReducer,
    },
  });
}

export type AppStore = ReturnType<typeof createShopStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
