import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

function CategoryCard({onPress, itemDesc, imageSource, itemPrice}) {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
        <Image source={imageSource} style={styles.cardImage} />
      </TouchableOpacity>
      <View style={styles.itemDescStyle}>
        <Text>{itemDesc}</Text>
        <Text style={styles.cardTitle}>${itemPrice}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',

    margin: 15,
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  cardImage: {
    width: 160, // Adjust the width of the image
    height: 220, // Adjust the height of the image
    resizeMode: 'cover',
    borderRadius: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
  },
  itemDescStyle: {
    marginLeft: 15,
  },
});

export default CategoryCard;
