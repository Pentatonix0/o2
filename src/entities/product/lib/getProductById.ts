import type { Product } from "@/entities/product/model/types";
import { products } from "@/entities/product/model/products";

export function getProductById(id?: string): Product | undefined {
  const almostClean = String(id || "")
    .split("?")
    .shift() || ""
    .split("/")
    .filter(Boolean)
    .join("");

  return products.find((item) => String(item.id) === almostClean);
}
