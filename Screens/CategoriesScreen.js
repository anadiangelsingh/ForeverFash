import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {fetchCategories} from '../util/http';

export function CategoriesScreen({categoryId}) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCategories(categoryId);
        console.log('API Response:', response);

        if (response.status === 200) {
          const data = response.data;
          setCategories(data);
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

    fetchData();
  }, [categoryId]);

  // const handleCategoryClick = categoryId => {
  //   // Handle category click here
  //   console.log(`Clicked category: ${categories[categoryId].name}`);
  //   console.log(categoryId);
  // };

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={{color: 'red'}}>{error}</Text>
      ) : categories ? (
        <Text>{categories.name}</Text>
      ) : // Add more category-specific content here
      null}
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
