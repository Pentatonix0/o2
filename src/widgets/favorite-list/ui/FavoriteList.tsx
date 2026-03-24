import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { clearFavorites } from "@/entities/favorites/model/favoritesSlice";
import {
  selectFavoriteItems,
  selectFavoritesCount,
} from "@/entities/favorites/model/selectors";
import { roadBook } from "@/shared/config/routes";
import { useAppDispatch, useAppSelector } from "@/shared/lib/storeHooks";
import ProductGrid from "@/widgets/product-grid/ui/ProductGrid";

function FavoriteList() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectFavoriteItems);
  const total = useAppSelector(selectFavoritesCount);

  if (!items.length) {
    return (
      <Paper
        elevation={0}
        sx={{
          p: 4,
          textAlign: "center",
          border: "1px solid rgba(91, 74, 61, 0.12)",
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h5">Избранное пока пустое</Typography>
          <Typography color="text.secondary">
            Добавьте несколько товаров сердцем, и они появятся здесь.
          </Typography>
          <Button component="a" href={roadBook.home} color="secondary">
            Вернуться на главную
          </Button>
        </Stack>
      </Paper>
    );
  }

  return (
    <Stack spacing={3}>
      <Paper
        elevation={0}
        sx={{
          p: 3,
          border: "1px solid rgba(91, 74, 61, 0.12)",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent="space-between"
          spacing={2}
        >
          <Stack spacing={0.5}>
            <Typography color="text.secondary">Сохранено товаров</Typography>
            <Typography variant="h5">{total}</Typography>
          </Stack>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<DeleteOutlineIcon />}
            onClick={() => dispatch(clearFavorites())}
          >
            Очистить избранное
          </Button>
        </Stack>
      </Paper>

      <ProductGrid items={items} />
    </Stack>
  );
}

export default FavoriteList;
