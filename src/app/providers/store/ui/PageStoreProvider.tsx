import type { ReactNode } from "react";
import { useRef } from "react";
import { Provider } from "react-redux";
import { createShopStore, type AppStore } from "@/entities/cart/model/store";

interface PageStoreProviderProps {
  children: ReactNode;
}

function PageStoreProvider({ children }: PageStoreProviderProps) {
  const pocket = useRef<AppStore | null>(null);

  if (!pocket.current) {
    pocket.current = createShopStore();
  }

  return <Provider store={pocket.current}>{children}</Provider>;
}

export default PageStoreProvider;
