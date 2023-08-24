import type { GetServerSideProps } from 'next';
import ShopLayout from '@/components/layouts/ShopLayout';
import { getProductSearch } from '@/client/product';
import ProductList from '@/components/products/productList';
import { CategoryPageProps } from '@/interfaces/pages/categories';
import { useRouter } from 'next/router';

const SearchPage = ({ productList, totalItems }: CategoryPageProps) => {
  const router = useRouter();
  const { query: { q }, pathname } = router

  const customRedirect = (offset: number) => ({ pathname, query: { q, offset } });

  return (
    <ShopLayout
      title={'Tiny Trove - Search'}
      pageDescription={''}
    >
      <ProductList
        customRedirect={customRedirect}
        productList={productList}
        totalItems={totalItems}
      />
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { offset, q } = query as Record<string, string>;

  try {
    if (!q) return { redirect: { destination: '/', permanent: true } };
    const { productList, totalItems} = await getProductSearch(offset, q);

    return { props: { productList, totalItems } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { redirect: { destination: '/', permanent: true } };
  };
};


export default SearchPage;
