import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { createClient, OAuthStrategy } from '@wix/sdk';
import * as stores from '@wix/stores';
import { ProductItemProps } from '@/components/ProductItem';
import { ProductsList } from '@/components/ProductsList';

export default function HomePage() {
  const [products, setProducts] = useState<ProductItemProps[]>([]);

  useEffect(() => {
    async function fetchProductsFromWix() {
      const wix = createClient({
        auth: OAuthStrategy({
          clientId: 'YOUR CLIENT ID HERE',
        }),
        modules: { stores },
      });

      const response = await wix.stores.products.queryProducts().find();

      setProducts(
        response.items.map((item) => ({
          title: item.name!,
          description: item.description!.replace(/<[^>]*>/g, ''),
          price: item.priceData!.formatted!.price!,
          image: item.media!.mainMedia!.image!.url!,
        })),
      );
    }

    fetchProductsFromWix();
  }, []);

  return (
    <SafeAreaView>
      <ProductsList products={products} />
    </SafeAreaView>
  );
}
