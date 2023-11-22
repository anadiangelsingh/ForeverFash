import React from 'react';
import {
  Dimensions,
  View,
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
} from 'react-native';
import {CategoriesScreen} from './CategoryScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Categories} from '../../components/store/Categories';
import {Products} from '../../components/store/Products';

import {useNavigation} from '@react-navigation/native'; // Import useNavigation
import CategoryTile from '../../components/ui/CategoryTile';

function ProfileScreen() {
  const screenHeight = Dimensions.get('window').height;
  const topSpacePercentage = 0;
  const topSpace = (screenHeight * topSpacePercentage) / 100;

  const navigation = useNavigation(); // Initialize navigation
  // const categoryId = 'Men'; // Replace with the actual category ID you want to fetch
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        vertical
        contentContainerStyle={{
          paddingVertical: 1,
        }}
        showsVerticalScrollIndicator={false}
        className="pt-4">
        <View>
          <Text>Profile Screen</Text>
          <View style={styles.cardStyle}>
            <CategoryTile
              imageSource={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Images/marissa-grootes-flRm0z3MEoA-unsplash.jpg')}
              itemDesc="Stylish Suit"
              itemPrice="87.00"
              productId="product2"
              onPress={() => console.log('Card pressed!')}
            />
            <CategoryTile
              imageSource={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Images/marissa-grootes-flRm0z3MEoA-unsplash.jpg')}
              itemDesc="New Shirt"
              itemPrice="72.00"
              productId="product1"
            />
          </View>

          {/* <Products productId="product1" /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProfileScreen;
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
