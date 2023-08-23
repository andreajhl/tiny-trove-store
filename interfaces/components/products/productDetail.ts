export interface ProductDetailProps {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  originalPrice: number | null;
  availableQuantity: number;
  pictures: Record<string, string>[];
}

export interface ProductPageProps {
  product: ProductDetailProps
}