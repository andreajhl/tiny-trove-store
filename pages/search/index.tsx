import type { GetServerSideProps } from 'next';
import ShopLayout from '@/components/layouts/ShopLayout';
import { getProductSearch } from '@/client/product';
import ProductList from '@/components/products/productList';
import { CategoryPageProps } from '@/interfaces/pages/categories';

const SearchPage = ({ productList, total }: CategoryPageProps) => {
  return (
    <ShopLayout
      title={'Tiny Trove - Search'}
      pageDescription={''}
    >
      <ProductList productList={productList} total={total} />
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { offset, q } = query as Record<string, string>;

  try {
    if (!q) return { redirect: { destination: '/', permanent: true } };
    const { productList, total} = await getProductSearch(offset, q);

    return { props: { productList, total } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { redirect: { destination: '/', permanent: true } };
  };
};


export default SearchPage;
