import React from 'react';
import ProductCard from '../cardProduct';
import { ProductItem } from '@/interfaces/client/products';
import { ProductListProps } from '@/interfaces/components/products/productList'
import { LIMIT_ITEMS } from '@/constants/client';
import Pagination from '../../pagination';
import './styles.scss';

const ProductList = ({ productList, total }: ProductListProps) => {
  const totalPage = Math.round(total / LIMIT_ITEMS) > 10 ? 10 : Math.round(total / LIMIT_ITEMS) ;

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
        totalPage > 1 && (
           <div className="w-100 d-flex justify-content-center mt-4">
            <Pagination totalPage={totalPage} />
          </div>
        )
      }
    </div>
  )
}

export default ProductList;
