import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Button from "@mui/material/Button";
import { addToCart } from "@/entities/cart/model/cartSlice";
import type { Product } from "@/entities/product/model/types";
import { useAppDispatch } from "@/shared/lib/storeHooks";

interface AddToCartButtonProps {
  product: Product;
  fullWidth?: boolean;
}

function AddToCartButton({
  product,
  fullWidth = false,
}: AddToCartButtonProps) {
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product));
  };

  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth={fullWidth}
      startIcon={<ShoppingBagOutlinedIcon />}
      onClick={handleAdd}
    >
      В корзину
    </Button>
  );
}

export default AddToCartButton;
