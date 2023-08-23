import { CartItemProps } from "@/interfaces/components/cart";
import {
  LOAD_CART_FROM_STORAGE,
  REMOVE_PRODUCT_IN_CART,
  UPDATE_PRODUCTS_IN_CART,
} from '@/constants/cart';
import { Cart } from "@/interfaces/context/cart";

export type CartActionType = 
  | { type: typeof LOAD_CART_FROM_STORAGE, payload: Cart } 
  | { type: typeof UPDATE_PRODUCTS_IN_CART, payload: CartItemProps }
  | { type: typeof REMOVE_PRODUCT_IN_CART, payload: Cart }