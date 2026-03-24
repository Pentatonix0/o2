import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import { clearCart } from "@/entities/cart/model/cartSlice";
import {
  selectCartItems,
  selectCartSummary,
} from "@/entities/cart/model/selectors";
import { roadBook } from "@/shared/config/routes";
import { formatPrice } from "@/shared/lib/formatPrice";
import { useAppDispatch, useAppSelector } from "@/shared/lib/storeHooks";

function CartList() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const summary = useAppSelector(selectCartSummary);

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
          <Typography variant="h5">Корзина пока пустая</Typography>
          <Typography color="text.secondary">
            Обычно сюда что-то доходит, но не всегда.
          </Typography>
          <Button component={RouterLink} to={roadBook.catalog} color="secondary">
            Вернуться в каталог
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
        <Stack spacing={2.5}>
          {items.map((item, index) => (
            <Stack key={`${item.id}-${index}`} spacing={2}>
              <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between">
                <Stack spacing={0.5}>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography color="text.secondary">Количество: {item.qty}</Typography>
                </Stack>
                <Typography variant="h6">{formatPrice(item.total)}</Typography>
              </Stack>
              {index !== items.length - 1 ? <Divider /> : null}
            </Stack>
          ))}
        </Stack>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          p: 3,
          border: "1px solid rgba(91, 74, 61, 0.12)",
        }}
      >
        <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" spacing={2}>
          <Stack spacing={0.5}>
            <Typography color="text.secondary">Всего позиций</Typography>
            <Typography variant="h5">{summary.qty}</Typography>
          </Stack>
          <Stack spacing={0.5} textAlign={{ xs: "left", sm: "right" }}>
            <Typography color="text.secondary">Итого</Typography>
            <Typography variant="h5">{formatPrice(summary.total)}</Typography>
          </Stack>
        </Stack>

        <Button
          sx={{ mt: 3 }}
          variant="outlined"
          color="secondary"
          startIcon={<DeleteOutlineIcon />}
          onClick={() => dispatch(clearCart())}
        >
          Очистить
        </Button>
      </Paper>
    </Stack>
  );
}

export default CartList;
