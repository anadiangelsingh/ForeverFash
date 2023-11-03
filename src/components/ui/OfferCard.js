import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Cat from './Cat';

function OfferCard({onPress, title, imageSource, OfferDesc, OfferPercentage}) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.cardContainer}>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
            }}>
            <Image source={imageSource} style={styles.cardImage} />
          </View>

          <View
            style={{
              flex: 3,
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}>
            <Text style={styles.textStyle}>{OfferPercentage} </Text>
            <Text>{OfferDesc}</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View>
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
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
    fontSize: 25,
  },
});

export default OfferCard;
