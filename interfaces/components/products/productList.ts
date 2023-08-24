import { ProductItem } from "@/interfaces/client/products";
export interface ProductListProps {
  productList: ProductItem[];
  totalItems: number;
  customRedirect: (offset: number) => Record<string, any>
}
