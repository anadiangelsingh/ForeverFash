import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Categories} from '../store/Categories';
import Icons from 'react-native-vector-icons/MaterialIcons';

function CategoryCard({onPress, imageSource, OfferDesc, categoryId}) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.cardContainer}>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
            }}>
            <Image size="50" source={imageSource} style={styles.cardImage} />
          </View>

          <View
            style={{
              flex: 3,
              alignItems: 'center',
            }}>
            <Categories style={styles.textStyle} categoryId={categoryId} />
          </View>
          <Icons
            name="keyboard-arrow-right"
            size={40} // Adjust icon size as needed
            style={{padding: 0, opacity: 0.5}}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10, // Reduced the border radius for a softer look
    borderWidth: 1, // Reduced the border width
    margin: 10, // Margin around the card
    borderColor: 'rgba(0, 0, 0, 0.1)', // Slight gray border
    backgroundColor: 'white',
    padding: 30, // Increased padding for more space
    shadowColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2, // Added a subtle drop shadow
    shadowRadius: 2,
    elevation: 2, // Android shadow
  },
  cardImage: {
    width: 50, // Adjust the width of the image
    height: 50, // Adjust the height of the image
    resizeMode: 'cover',
    borderRadius: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
  },
  textStyle: {
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 90,
  },
});

export default CategoryCard;
