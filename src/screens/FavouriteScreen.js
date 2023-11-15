// HomeScreen.js
import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import {Categories} from '../components/store/Categories';
import OfferCard from '../components/ui/OfferCard';
//import {Image} from 'react-native-reanimated/lib/typescript/Animated';
import {Platform} from 'react-native';

function FavouriteScreen() {
  return (
    <ImageBackground
      source={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Images/marissa-grootes-flRm0z3MEoA-unsplash.jpg')}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}>
      <Text>vghftydtrdfrt</Text>
    </ImageBackground>
  );
}

export default FavouriteScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    //color: 'red',
  },
  backgroundImage: {
    opacity: 0.7,
  },
});
