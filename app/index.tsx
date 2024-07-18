import { SafeAreaView } from 'react-native';
import { ProductItemProps } from '@/components/ProductItem';
import { ProductsList } from '@/components/ProductsList';

export default function HomePage() {
  return (
    <SafeAreaView>
      <ProductsList products={fakeProducts} />
    </SafeAreaView>
  );
}

const fakeProducts: ProductItemProps[] = [
  {
    title: 'Empty!',
    description: 'Here is a kitty instead',
    price: '50.00$',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600',
  },
  {
    title: 'Empty!',
    description: 'Here is a kitty instead',
    price: '50.00$',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600',
  },
  {
    title: 'Empty!',
    description: 'Here is a kitty instead',
    price: '50.00$',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600',
  },
  {
    title: 'Empty!',
    description: 'Here is a kitty instead',
    price: '50.00$',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600',
  },
];
