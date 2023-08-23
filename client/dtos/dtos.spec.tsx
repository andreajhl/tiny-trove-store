import { calculateAvailableQuantity, normalizeProductList, normalizeProduct } from '.';
import {
  PRODUCT_ITEM,
  PRODUCT_LIST,
  PRODUCT_LIST_NORMALIZE,
  PRODUCT_ITEM_NORMALIZE,
} from '@/mocks/client/produc';

jest.mock('axios');

describe('Dtos', () => {
  describe('calculateAvailableQuantity', () => {
    const initialQuantity = 30;

    test('should calculate available quantity correctly', () => {
      const soldQuantity = 5
      expect(calculateAvailableQuantity(initialQuantity, soldQuantity)).toEqual(25);
    });

    test('should return 0 if available quantity is negativ', () => {
      const soldQuantity = 35
      expect(calculateAvailableQuantity(initialQuantity, soldQuantity)).toEqual(0);
    });
  });

  describe('normalizeProductList', () => {
    test('should normalize product list', () => {
      const normalizedList = normalizeProductList(PRODUCT_LIST);
      expect(normalizedList).toEqual(PRODUCT_LIST_NORMALIZE);
    });
  });

  describe('normalizeProductList', () => {
    test('should normalize product', () => {
      const normalizedList = normalizeProduct(PRODUCT_ITEM);
      expect(normalizedList).toEqual(PRODUCT_ITEM_NORMALIZE);
    });
  });
});
