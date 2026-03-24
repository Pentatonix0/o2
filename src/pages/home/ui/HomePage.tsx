import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { products } from "@/entities/product/model/products";
import { roadBook } from "@/shared/config/routes";
import PageFrame from "@/shared/ui/page-frame/PageFrame";
import ProductGrid from "@/widgets/product-grid/ui/ProductGrid";

function HomePage() {
  const leading = products.slice(0, 2);

  return (
    <PageFrame
      title="Тихие вещи для дома"
      subtitle="Небольшой магазин предметов с мягкой витриной, аккуратной типографикой и логикой, которая местами живет своей жизнью."
    >
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {leading.map((unit) => (
          <Grid key={unit.id} size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                minHeight: 220,
                color: "#fff",
                display: "flex",
                alignItems: "flex-center" as never,
                paddingLeft: "50px",
                borderRadius: 6,
                background: `linear-gradient(135deg, ${unit.accent}, ${unit.tone})`,
              }}
            >
              <Stack spacing={1.5} maxWidth={360}>
                <Chip
                  label={unit.tag}
                  sx={{
                    alignSelf: "flex-start",
                    color: "#fff",
                    backgroundColor: "rgba(255,255,255,0.18)",
                  }}
                />
                <Typography variant="h4">{unit.title}</Typography>
                <Typography sx={{ opacity: 0.92 }}>{unit.short}</Typography>
                <Box>
                  <a
                    href={`${roadBook.product}/${unit.id}`}
                    style={{
                      color: "#fff",
                      fontWeight: 700,
                      textDecoration: "none",
                    }}
                  >
                    Смотреть товар
                  </a>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <ProductGrid items={products} />
    </PageFrame>
  );
}

export default HomePage;
