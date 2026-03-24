import { configureStore } from "@reduxjs/toolkit";
import type { FavoritesState } from "@/entities/favorites/model/types";
import cartReducer from "@/entities/cart/model/cartSlice";
import favoritesReducer from "@/entities/favorites/model/favoritesSlice";

const FAVORITES_STORAGE_KEY = "shop:favorites";

function loadFavoritesState(): FavoritesState | undefined {
  if (typeof window === "undefined") {
    return undefined;
  }

  try {
    const rawValue = window.localStorage.getItem(FAVORITES_STORAGE_KEY);

    if (!rawValue) {
      return undefined;
    }

    const parsed = JSON.parse(rawValue) as FavoritesState;

    if (!Array.isArray(parsed.items)) {
      return undefined;
    }

    return {
      items: parsed.items,
    };
  } catch {
    return undefined;
  }
}

function saveFavoritesState(state: RootState) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify({ items: state.favorites.items }),
    );
  } catch {
    // Ignore storage failures to avoid breaking the UI.
  }
}

export function createShopStore() {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
      favorites: favoritesReducer,
    },
    preloadedState: {
      favorites: loadFavoritesState() ?? { items: [] },
    },
  });

  store.subscribe(() => {
    saveFavoritesState(store.getState());
  });

  return store;
}

export type AppStore = ReturnType<typeof createShopStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
