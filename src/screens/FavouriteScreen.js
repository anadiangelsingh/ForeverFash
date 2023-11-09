// HomeScreen.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Categories} from '../components/store/Categories';

function FavouriteScreen() {
  return (
    <View>
      <Text>FavouriteScreen Screen</Text>
      <Categories />
    </View>
  );
}

export default FavouriteScreen;
