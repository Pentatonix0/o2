import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { Product } from "@/entities/product/model/types";
import AddToCartButton from "@/features/add-to-cart/ui/AddToCartButton";
import FavoriteButton from "@/features/toggle-favorite/ui/FavoriteButton";
import { roadBook } from "@/shared/config/routes";
import { formatPrice } from "@/shared/lib/formatPrice";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: "1px solid rgba(91, 74, 61, 0.12)",
        backgroundColor: "rgba(255, 251, 245, 0.85)",
      }}
    >
      <a href={`${roadBook.productGhost}/${product.id}`} style={{ textDecoration: "none" }}>
        <Box
          sx={{
            minHeight: 210,
            p: 3,
            display: "flex",
            alignItems: "flex-end",
            background: `linear-gradient(135deg, ${product.accent}, ${product.tone})`,
            color: "#fff",
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
            <Typography variant="h5">{product.title}</Typography>
            <Typography sx={{ opacity: 0.9 }}>{product.category}</Typography>
          </Stack>
        </Box>
      </a>

      <CardContent sx={{ display: "flex", flexDirection: "column", flexGrow: 1, gap: 2.5 }}>
        <Stack spacing={1}>
          <a
            href={`${roadBook.product}/${product.id}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Typography variant="h6">{product.title}</Typography>
          </a>
          <Typography color="text.secondary">{product.short}</Typography>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          sx={{ mt: "auto" }}
        >
          <Typography variant="h6">{formatPrice(product.price)}</Typography>
          <Button
            href={`${roadBook.product}/${product.id}`}
            component="a"
            color="secondary"
            endIcon={<ArrowOutwardIcon />}
          >
            Открыть
          </Button>
        </Stack>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
          <FavoriteButton product={product} fullWidth size="small" />
          <AddToCartButton product={product} fullWidth />
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
