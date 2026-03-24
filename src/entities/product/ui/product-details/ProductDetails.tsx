import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { Product } from "@/entities/product/model/types";
import AddToCartButton from "@/features/add-to-cart/ui/AddToCartButton";
import FavoriteButton from "@/features/toggle-favorite/ui/FavoriteButton";
import { formatPrice } from "@/shared/lib/formatPrice";

interface ProductDetailsProps {
  product: Product;
  urlId?: string;
}

function ProductDetails({ product, urlId }: ProductDetailsProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, md: 4 },
        border: "1px solid rgba(91, 74, 61, 0.12)",
      }}
    >
      <Stack spacing={3}>
        <Box
          sx={{
            minHeight: 280,
            p: 3,
            display: "flex",
            alignItems: "center",
            borderRadius: 4,
            color: "#fff",
            background: `linear-gradient(135deg, ${product.accent}, ${product.tone})`,
          }}
        >
          <Stack spacing={1}>
            <Chip
              label={product.tag}
              sx={{
                alignSelf: "flex-start",
                backgroundColor: "rgba(255,255,255,0.18)",
                color: "#fff",
              }}
            />
            <Typography variant="h3">{product.title}</Typography>
            <Typography sx={{ opacity: 0.92 }}>
              Текущий URL id: {String(urlId || "empty")}
            </Typography>
          </Stack>
        </Box>

        <Stack spacing={1}>
          <Typography color="secondary" fontWeight={700}>
            {product.category}
          </Typography>
          <Typography variant="h4">{formatPrice(product.price)}</Typography>
          <Typography color="text.secondary">{product.short}</Typography>
        </Stack>

        <Divider />

        <Typography sx={{ lineHeight: 1.75 }}>{product.description}</Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <FavoriteButton product={product} />
          <AddToCartButton product={product} />
        </Stack>
      </Stack>
    </Paper>
  );
}

export default ProductDetails;
