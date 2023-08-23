import { CartItemProps } from "@/interfaces/components/cart";

export interface Cart {
  [key: string]: CartItemProps
}

export interface CartState {
  isLoaded: boolean;
  cart: Cart;
}

export interface ContextProps {
  isLoaded: boolean;
  cart: Cart;

  addProductToCart: (product: CartItemProps) => void;
  removeCartProduct: (id: string) => void;
}
