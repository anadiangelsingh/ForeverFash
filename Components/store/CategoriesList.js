import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {fetchCategories} from '../util/http';

export function CategoriesList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCategories();

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
  }, []);

  return (
    <View>
      <Text>Categories:</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={{color: 'red'}}>{error}</Text>
      ) : (
        categories &&
        Object.keys(categories).map(categoryId => (
          <Text key={categoryId}>{categories[categoryId].name}</Text>
        ))
      )}
    </View>
  );
}
