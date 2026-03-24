export const roadBook = {
  home: "/",
  catalog: "/products",
  cart: "/cart",
  favorites: "/favorites",
  notFound: "/404",
} as const;

export function getProductRoute(id: string | number): string {
  return `${roadBook.catalog}/${id}`;
}
