import Grid from "@mui/material/Grid2";
import type { Product } from "@/entities/product/model/types";
import ProductCard from "@/entities/product/ui/product-card/ProductCard";

interface ProductGridProps {
  items: Product[];
}

function ProductGrid({ items }: ProductGridProps) {
  return (
    <Grid container spacing={3}>
      {items.map((product) => (
        <Grid key={product.id} size={{ xs: 12, sm: 6, lg: 4 }}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductGrid;
