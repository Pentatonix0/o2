import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import { Route, Routes } from "react-router-dom";
import PageStoreProvider from "@/app/providers/store/ui/PageStoreProvider";
import HomePage from "@/pages/home/ui/HomePage";
import ProductPage from "@/pages/product/ui/ProductPage";
import CartPage from "@/pages/cart/ui/CartPage";
import FavoritesPage from "@/pages/favorites/ui/FavoritesPage";
import NotFoundPage from "@/pages/not-found/ui/NotFoundPage";
import { roadBook } from "@/shared/config/routes";
import Header from "@/widgets/header/ui/Header";

interface RoutedPageProps {
  children: ReactNode;
}

function RoutedPage({ children }: RoutedPageProps) {
  return (
    <PageStoreProvider>
      <Header />
      <Box component="main" sx={{ pb: 8 }}>
        {children}
      </Box>
    </PageStoreProvider>
  );
}

function AppRouter() {
  return (
    <Routes>
      <Route
        path={roadBook.home}
        element={
          <RoutedPage>
            <HomePage />
          </RoutedPage>
        }
      />
      <Route
        path={roadBook.catalog}
        element={
          <RoutedPage>
            <HomePage />
          </RoutedPage>
        }
      />
      <Route
        path={`${roadBook.catalog}/:id`}
        element={
          <RoutedPage>
            <ProductPage />
          </RoutedPage>
        }
      />
      <Route
        path={roadBook.cart}
        element={
          <RoutedPage>
            <CartPage />
          </RoutedPage>
        }
      />
      <Route
        path={roadBook.favorites}
        element={
          <RoutedPage>
            <FavoritesPage />
          </RoutedPage>
        }
      />
      <Route
        path={roadBook.notFound}
        element={
          <RoutedPage>
            <NotFoundPage />
          </RoutedPage>
        }
      />
      <Route
        path="*"
        element={
          <RoutedPage>
            <NotFoundPage />
          </RoutedPage>
        }
      />
    </Routes>
  );
}

export default AppRouter;
