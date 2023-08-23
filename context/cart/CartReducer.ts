
import { CartActionType } from '@/types/context';
import {
  LOAD_CART_FROM_STORAGE,
  REMOVE_PRODUCT_IN_CART,
  UPDATE_PRODUCTS_IN_CART,
} from '@/constants/cart';
import { CartState } from '@/interfaces/context/cart';

export const cartReducer = ( state: CartState, action: CartActionType ): CartState => {

  switch (action.type) {
    case LOAD_CART_FROM_STORAGE:
      return {
        ...state,
        isLoaded: true,
        cart: { ...action.payload }
      }

    case UPDATE_PRODUCTS_IN_CART:

      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: { ...action.payload }
        }
      }

    case REMOVE_PRODUCT_IN_CART:
      return {
        ...state,
        cart: { ...action.payload }
      }

    default:
      return state;
  }
};
