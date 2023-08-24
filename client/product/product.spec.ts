import axios from 'axios';
import { getProductByCategory, getProductSearch, getProductByID } from '.';
import { PRODUCT_ITEM, PRODUCT_ITEM_NORMALIZE, PRODUCT_LIST, PRODUCT_LIST_NORMALIZE } from '@/mocks/client/produc';

jest.mock('axios');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('API Client', () => {
  describe('getProductByCategory', () => {
    test('getProductByCategory should return normalized product list and total', async () => {
      const mockData = { results: PRODUCT_LIST, paging: { total: 2 } };
      jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: mockData });

      const result = await getProductByCategory('0', 'someCategory');

      expect(result.productList).toEqual(expect.arrayContaining(PRODUCT_LIST_NORMALIZE));
      expect(result.totalItems).toBe(2);
    });

    test('throws an error when the API request fails', async () => {
      const errorMessage = 'Network Error';
      jest.spyOn(axios, 'get').mockRejectedValueOnce(new Error(errorMessage));

      await expect(getProductByCategory('0', 'example')).rejects.toThrow(errorMessage);
    });

    test('throws a custom error when results are empty', async () => {
      jest.spyOn(axios, 'get').mockResolvedValue({ data: { results: [] } });

      await expect(getProductByCategory('0', 'example')).rejects.toThrow('Not Found');
    });
  });

  describe('getProductSearch', () => {
    test('getProductSearch should return normalized product list and total', async () => {
      const mockData = { results: PRODUCT_LIST, paging: { total: 2 } };
      jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: mockData });
  
      const result = await getProductSearch('0', 'bebe');
  
      expect(result.productList).toEqual(expect.arrayContaining(PRODUCT_LIST_NORMALIZE));
      expect(result.totalItems).toBe(2);
    });

    test('throws an error when the API request fails', async () => {
      const errorMessage = 'Network Error';
      jest.spyOn(axios, 'get').mockRejectedValueOnce(new Error(errorMessage));

      await expect(getProductSearch('0', 'example')).rejects.toThrow(errorMessage);
    });

    test('throws a custom error when results are empty', async () => {
      jest.spyOn(axios, 'get').mockResolvedValue({ data: { results: [] } });

      await expect(getProductSearch('0', 'example')).rejects.toThrow('Not Found');
    });
  });

  describe('getProductByID', () => {
    test('getProductByID should return normalized product', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: PRODUCT_ITEM });

      const result = await getProductByID('MLA1143744131');
      expect(result).toEqual(PRODUCT_ITEM_NORMALIZE);
    });

    test('throws an error when the API request fails', async () => {
      const errorMessage = 'Network Error';
      jest.spyOn(axios, 'get').mockRejectedValueOnce(new Error(errorMessage));

      await expect(getProductByID('MLA1143744131')).rejects.toThrow(errorMessage);
    });

    test('throws a custom error when results are empty', async () => {
      jest.spyOn(axios, 'get').mockResolvedValue({ data: {} });

      await expect(getProductByID('MLA1143744131')).rejects.toThrow('Not Found');
    });
  })
});
