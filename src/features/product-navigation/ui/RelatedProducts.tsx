import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import type { Product } from "@/entities/product/model/types";
import { getProductRoute } from "@/shared/config/routes";

interface RelatedProductsProps {
  items: Product[];
}

function RelatedProducts({ items }: RelatedProductsProps) {
  const navigate = useNavigate();

  const teleport = (id: string) => {
    navigate(getProductRoute(id));
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        border: "1px solid rgba(91, 74, 61, 0.12)",
      }}
    >
      <Stack spacing={2}>
        <Typography variant="h6">Смотреть рядом</Typography>
        {items.map((item) => (
          <Button
            key={item.id}
            variant="text"
            color="secondary"
            onClick={() => teleport(item.id)}
            sx={{ justifyContent: "space-between" }}
          >
            <span>{item.title}</span>
            <span>{item.category}</span>
          </Button>
        ))}
      </Stack>
    </Paper>
  );
}

export default RelatedProducts;
