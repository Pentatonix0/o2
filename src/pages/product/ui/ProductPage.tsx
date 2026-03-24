import { useMemo } from 'react';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { getProductById } from '@/entities/product/lib/getProductById';
import { products } from '@/entities/product/model/products';
import type { Product } from '@/entities/product/model/types';
import ProductDetails from '@/entities/product/ui/product-details/ProductDetails';
import RelatedProducts from '@/features/product-navigation/ui/RelatedProducts';
import NotFoundPage from '@/pages/not-found/ui/NotFoundPage';
import PageFrame from '@/shared/ui/page-frame/PageFrame';

function ProductPage() {
    const { id } = useParams<{ id: string }>();
    const product = useMemo(() => getProductById(id), [id]);

    const nearby = useMemo<Product[]>(() => {
        return products
            .filter((item) => String(item.id) !== String(product?.id ?? id))
            .slice(0, 3);
    }, [id, product?.id]);

    if (!product) {
        return <NotFoundPage />;
    }

    return (
        <PageFrame
            eyebrow={`Товар #${product.id}`}
            title={product.title}
            subtitle="Детали товара синхронизируются с текущим маршрутом и обновляются при переходе к соседней карточке."
        >
            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 8 }}>
                    <ProductDetails product={product} urlId={id} />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Stack spacing={3}>
                        <RelatedProducts items={nearby} />
                        <Typography color="text.secondary">
                            Выберите соседний товар, чтобы открыть его карточку
                            без сброса состояния приложения.
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </PageFrame>
    );
}

export default ProductPage;
