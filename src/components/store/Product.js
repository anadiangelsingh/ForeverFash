import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {fetchProduct} from '../../util/http';

export function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProduct(products);
        console.log('API Response:', response);

        if (response.status === 200) {
          const data = response.data;
          const productsArray = data.products;
          setProducts(data);
          setLoading(false);
        } else {
          setError('Failed to fetch data from the API');
          setLoading(false);
        }
      } catch (error) {
        setError('An error occurred while fetching data');
        setLoading(false);
      }
    };
    console.log(products);

    fetchData();
  }, []);
  console.log('wqerty', products);
  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={{color: 'red'}}>{error}</Text>
      ) : (
        Object.values(products).map((product, index) => (
          <View key={index}>
            <Text>{product.category}</Text>
            <Text>{product.name}</Text>
            <Text>{product.price}</Text>
            {/* Add other product details here if needed */}
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // Add any additional styles as needed
  },
});
