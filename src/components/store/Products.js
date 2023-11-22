import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, StyleSheet, Image} from 'react-native';
import {fetchProductsByCategory} from '../../util/http';
import CategoryTile from '../ui/CategoryTile';

export function Products({productId}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProductsByCategory(productId);
        // console.log('Full API Response:', response);
        const data = response;
        setProducts(data);
        setImageUrl(data.imageUrl); // Store imageUrl in the state variable
        setLoading(false);
      } catch (error) {
        setError('An error occurred while fetching data');
        setLoading(false);
      }
    };

    fetchData();
  });
  return (
    <View>
      {loading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : error ? (
        <Text style={{color: 'red'}}>{error}</Text>
      ) : products ? (
        <View>
          <Text>{products.name}</Text>
          {/* <Text>{products.category}</Text> */}
          {/* <Text>{products.description}</Text> */}
          <Text>{products.price}</Text>

          {/* <Text>{imageUrl}</Text> */}
        </View>
      ) : // Add more category-specific content here
      null}
    </View>
  );
  console.log(products.price);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // Add any additional styles as needed
  },
  cardStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  cardImage: {
    width: 160, // Adjust the width of the image
    height: 220, // Adjust the height of the image
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
