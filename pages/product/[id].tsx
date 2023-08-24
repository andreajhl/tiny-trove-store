import type { GetServerSideProps } from 'next';
import ShopLayout from '@/components/layouts/ShopLayout';
import ProductDatil from '@/components/products/productDetail';
import { getProductByID } from '@/client/product';
import { ProductPageProps } from '@/interfaces/components/products/productDetail';

const ProductPage = ({ product }: ProductPageProps) => {
  return (
    <ShopLayout
      title={'Tiny Trove - Product'}
      pageDescription={''}
    >
      <ProductDatil {...product} />
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as Record<string, string>;

  try {
    if (!id)  return { redirect: { destination: '/', permanent: true } };

    const product = await getProductByID(id);

    return { props: { product: { ...product } } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { redirect: { destination: '/', permanent: true } };
  };
};

export default ProductPage;
