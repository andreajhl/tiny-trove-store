import { ProductItem } from "@/interfaces/client/products";

export interface CartItemProps extends ProductItem {
  quantity: number
}
