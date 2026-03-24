import { useEffect, useMemo, useState } from "react";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { getProductById } from "@/entities/product/lib/getProductById";
import { products } from "@/entities/product/model/products";
import type { Product } from "@/entities/product/model/types";
import ProductDetails from "@/entities/product/ui/product-details/ProductDetails";
import RelatedProducts from "@/features/product-navigation/ui/RelatedProducts";
import PageFrame from "@/shared/ui/page-frame/PageFrame";

function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [frozenOne, setFrozenOne] = useState<Product | undefined>(() => getProductById(id));
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      setFrozenOne(getProductById(id));
      setTick((old) => old + 1);
    }, 120);

    return () => {
      window.clearTimeout(timerId);
    };
  }, []);

  const nearby = useMemo<Product[]>(() => {
    return products
      .filter((item) => String(item.id) !== String(id))
      .slice(0, 3);
  }, [id]);

  const brokenSnapshot = frozenOne as Product;

  return (
    <PageFrame
      eyebrow={`Product session ${tick}`}
      title={brokenSnapshot.title}
      subtitle="Карточка обновляется не так часто, как хотелось бы, но выглядит убедительно."
    >
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          <ProductDetails product={brokenSnapshot} urlId={id} />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Stack spacing={3}>
            <RelatedProducts items={nearby} />
            <Typography color="text.secondary">
              Если открыть соседний товар кнопкой выше, адрес сменится быстрее, чем содержимое.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </PageFrame>
  );
}

export default ProductPage;
