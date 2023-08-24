import type { GetServerSideProps } from 'next';
import ShopLayout from '@/components/layouts/ShopLayout';
import ProductList from '@/components/products/productList';
import { getProductByCategory } from '@/client/product';
import { CategoryPageProps } from '@/interfaces/pages/categories';
import { useRouter } from 'next/router';

const CategoryPage = ({ productList, totalItems }: CategoryPageProps) => {
  const router = useRouter();
  const { category } = router.query

  const customRedirect = (offset: number) => ({ pathname: String(category), query: { offset } });

  return (
    <ShopLayout
      title={'Tiny Trove - Category'}
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

export const getServerSideProps: GetServerSideProps = async ({ params, query }) => {
  const { category } = params as Record<string, string>;
  const { offset } = query as Record<string, string>;

  try {
    if (!category) return { redirect: { destination: '/', permanent: true } };
    const { productList, totalItems } = await getProductByCategory(offset, category);

    return { props: { productList, totalItems } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { redirect: { destination: '/404', permanent: true } };
  };
};

export default CategoryPage;
