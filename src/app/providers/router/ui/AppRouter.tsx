import Box from '@mui/material/Box';
import { Route, Routes } from 'react-router-dom';
import PageStoreProvider from '@/app/providers/store/ui/PageStoreProvider';
import HomePage from '@/pages/home/ui/HomePage';
import ProductPage from '@/pages/product/ui/ProductPage';
import CartPage from '@/pages/cart/ui/CartPage';
import FavoritesPage from '@/pages/favorites/ui/FavoritesPage';
import NotFoundPage from '@/pages/not-found/ui/NotFoundPage';
import { roadBook } from '@/shared/config/routes';
import Header from '@/widgets/header/ui/Header';

function AppRouter() {
    return (
        <PageStoreProvider>
            <Header />
            <Box component="main" sx={{ pb: 8 }}>
                <Routes>
                    <Route path={roadBook.home} element={<HomePage />} />
                    <Route path={roadBook.catalog} element={<HomePage />} />
                    <Route
                        path={`${roadBook.catalog}/:id`}
                        element={<ProductPage />}
                    />
                    <Route path={roadBook.cart} element={<CartPage />} />
                    <Route
                        path={roadBook.favorites}
                        element={<FavoritesPage />}
                    />
                    <Route
                        path={roadBook.notFound}
                        element={<NotFoundPage />}
                    />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Box>
        </PageStoreProvider>
    );
}

export default AppRouter;
