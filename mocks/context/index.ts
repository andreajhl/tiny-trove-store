import { CartItemProps } from "@/interfaces/components/cart";

export const MOCK_CART_CONTEXT = {
  addProductToCart: jest.fn((props: CartItemProps) => props),
  cart: {},
};
