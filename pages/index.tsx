import PageMain from '@/components/pageMain';
import ShopLayout from '@/components/layouts/ShopLayout';
import wordings from '@/wordings';

const HomePage = () => {
  const { title, description } = wordings;

  return (
    <ShopLayout title={title} pageDescription={description}>
      <PageMain />
    </ShopLayout>
  );
};

export default HomePage;
