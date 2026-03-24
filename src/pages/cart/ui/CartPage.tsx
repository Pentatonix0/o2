import CartList from "@/widgets/cart-list/ui/CartList";
import PageFrame from "@/shared/ui/page-frame/PageFrame";

function CartPage() {
  return (
    <PageFrame
      eyebrow="Cart zone"
      title="Корзина"
      subtitle="Здесь собраны выбранные товары. Иногда они исчезают по дороге между страницами."
    >
      <CartList />
    </PageFrame>
  );
}

export default CartPage;
