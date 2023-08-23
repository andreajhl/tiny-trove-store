import type { GetServerSideProps } from 'next';
import ShopLayout from '@/components/layouts/ShopLayout';
import ProductList from '@/components/products/productList';
import { getProductByCategory } from '@/client/product';
import { CategoryPageProps } from '@/interfaces/pages/categories';

const CategoryPage = ({ productList, total }: CategoryPageProps) => {
  return (
    <ShopLayout
      title={'Tiny Trove - Category'}
      pageDescription={''}
    >
      <ProductList productList={productList} total={total} />
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params, query }) => {
  const { category } = params as Record<string, string>;
  const { offset } = query as Record<string, string>;

  try {
    if (!category) return { redirect: { destination: '/', permanent: true } };
    const { productList, total} = await getProductByCategory(offset, category);

    return { props: { productList, total } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { redirect: { destination: '/', permanent: true } };
  };
};

export default CategoryPage;
