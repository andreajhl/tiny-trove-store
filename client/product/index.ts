import axios from 'axios';
import 'dotenv/config';
import { normalizeProduct, normalizeProductList } from '@/client/dtos';
import { toQueryParams } from '@/utils/urls';
import { createCustomError } from '@/utils/errors';
import { arrayIsEmpty } from '@/utils/arrays';
import { objectIsEmpty } from '@/utils/objects';
import { BRANDS, HAS_PICTURES, ITEM_CONDITION, LIMIT_ITEMS, STATE, STORES } from '@/constants/client';

const URL_BASE = process.env.API_URL;
const basicParams = {
  brand: BRANDS,
  state: STATE,
  limit: LIMIT_ITEMS,
  official_store: STORES,
  has_pictures: HAS_PICTURES,
  item_condition: ITEM_CONDITION,
};

export const getProductByCategory = async (offset: string, category: string) => {
  const params = { ...basicParams, offset, category };
  const path = `/sites/MLA/search`;

  try {
    const { data } = await axios.get(`${URL_BASE}${path}${toQueryParams(params)}`);
    
    if(arrayIsEmpty(data.results)) throw createCustomError('Not Found', 404);
  
    return {
      productList: normalizeProductList(data.results),
      totalItems: data.paging.total
    };
  } catch (error) {
    throw error;
  }
};

export const getProductSearch = async (offset: string, search: string) => {
  const params = { ...basicParams, offset, q: search };
  const path = `/sites/MLA/search`;

  try {
    const { data } = await axios.get(`${URL_BASE}${path}${toQueryParams(params)}`);
    
    if(arrayIsEmpty(data.results)) throw createCustomError('Not Found', 404);

    return {
      productList: normalizeProductList(data.results),
      totalItems: data.paging.total
    };
  } catch (error) {
    throw error;
  }
};

export const getProductByID = async (id: string) => {
  const path = `/items`;

  try {
    const { data } = await axios.get(`${URL_BASE}${path}/${id}`);

    if(objectIsEmpty(data)) throw createCustomError('Not Found', 404);

    return normalizeProduct(data);
  } catch (error) {
    throw error;
  }
};
