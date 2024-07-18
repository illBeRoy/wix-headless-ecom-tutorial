import { Image, StyleSheet, Text, View } from 'react-native';

export interface ProductItemProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

export const ProductItem = ({
  title,
  description,
  price,
  image,
}: ProductItemProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.infoContainer}>
        <Text style={styles.titleLabel}>{title}</Text>
        <Text style={styles.descriptionLabel}>{description}</Text>
        <Text style={styles.priceLabel}>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 8,
    flex: 1,
  },
  image: {
    width: '100%',
    height: 112,
    objectFit: 'cover',
  },
  infoContainer: {
    flexDirection: 'column',
    gap: 5,
  },
  titleLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#20303C',
  },
  descriptionLabel: {
    fontWeight: '400',
    fontSize: 14,
    color: '#6E7881',
  },
  priceLabel: {
    fontWeight: '400',
    fontSize: 14,
    color: '#4D5963',
  },
});
