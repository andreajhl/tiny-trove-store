export interface ProductCardProps {
  thumbnail: string;
  title: string;
  price: number;
  originalPrice: number | null;
  availableQuantity: number;
  id: string;
}
