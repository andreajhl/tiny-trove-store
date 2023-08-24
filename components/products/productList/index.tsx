import React from 'react';
import ProductCard from '../cardProduct';
import { ProductItem } from '@/interfaces/client/products';
import { ProductListProps } from '@/interfaces/components/products/productList'
import { LIMIT_ITEMS } from '@/constants/client';
import Pagination from '../../pagination';
import './styles.scss';

const ProductList = ({ productList, totalItems, customRedirect }: ProductListProps) => {
  const itemsPerPage = LIMIT_ITEMS;
  const maxVisiblePages = 10;

  const visiblePages = Math.round(totalItems / itemsPerPage) > maxVisiblePages
    ? maxVisiblePages
    : Math.round(totalItems / itemsPerPage);

  return (
    <div className="product-list">
      <div className="product-list__content">
        {
          productList?.map((product: ProductItem, index: number) => (
            <ProductCard {...product} key={index} />
          ))
        }
      </div>
      {
        visiblePages > 1 && (
           <div className="w-100 d-flex justify-content-center mt-4">
            <Pagination
              visiblePages={visiblePages}
              customRedirect={customRedirect}
            />
          </div>
        )
      }
    </div>
  )
}

export default ProductList;
