import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {Products} from '../../components/store/Products';

function CategoryTile({
  onPress,
  itemDesc,
  imageSource,
  itemPrice,
  addPress,
  productId,
}) {
  const handleIconClick = () => {
    // Add  click handling logic here
    console.log('Icon clicked');
  };
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
        <Image source={imageSource} style={styles.cardImage} />
      </TouchableOpacity>
      <View style={styles.itemDescStyle}>
        <Products productId={productId} />

        {/* <Text>{itemDesc}</Text> */}

        <Icons
          name="add-shopping-cart"
          size={25} // Adjust icon size as needed
          onPress={handleIconClick}
          color="#5a5959"
          style={{marginLeft: 50}}
        />
      </View>
      <View style={styles.itemPriceStyle}>
        {/* <Text style={styles.cardTitle}>$ {itemPrice}</Text> */}
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
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row',
  },
  itemPriceStyle: {
    marginLeft: 15,
  },
});

export default CategoryTile;
