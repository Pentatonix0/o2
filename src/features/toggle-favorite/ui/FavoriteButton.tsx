import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import Button, { type ButtonProps } from "@mui/material/Button";
import { selectIsFavorite } from "@/entities/favorites/model/selectors";
import { toggleFavorite } from "@/entities/favorites/model/favoritesSlice";
import type { Product } from "@/entities/product/model/types";
import { useAppDispatch, useAppSelector } from "@/shared/lib/storeHooks";

interface FavoriteButtonProps {
  product: Product;
  fullWidth?: boolean;
  size?: ButtonProps["size"];
}

function FavoriteButton({
  product,
  fullWidth = false,
  size = "medium",
}: FavoriteButtonProps) {
  const dispatch = useAppDispatch();
  const isFavorite = useAppSelector((state) => selectIsFavorite(state, product.id));

  return (
    <Button
      variant={isFavorite ? "contained" : "outlined"}
      color="secondary"
      fullWidth={fullWidth}
      size={size}
      startIcon={isFavorite ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}
      onClick={() => dispatch(toggleFavorite(product))}
    >
      {isFavorite ? "В избранном" : "В избранное"}
    </Button>
  );
}

export default FavoriteButton;
