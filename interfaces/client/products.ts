export interface ProductItem {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  originalPrice: number | null;
  availableQuantity: number;
}
