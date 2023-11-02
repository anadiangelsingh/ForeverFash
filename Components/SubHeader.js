import {View, StyleSheet, ScrollView} from 'react-native';
import Cat from './ui/Cat';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation

import CategoryScreen from '../screens/CategoryScreen';

import WishlistScreen from '../screens/WishlistScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import FavouriteScreen from '../screens/FavouriteScreen';

function SubHeader() {
  const navigation = useNavigation(); // Initialize navigation

  const handlePress = pressType => {
    switch (pressType) {
      case 'All':
        navigation.navigate('CategoryScreen');
        console.log('Pressed');
        break;

      // case 'Women':
      //   navigation.navigate('WishlistScreen');
      //   console.log('Pressed');
      //   break;
    } // navigation.navigate('WelcomeScreen');
  };
  return (
    <>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4">
        <Cat
          source="/Users/anadiangelsingh/ReactWorkspace/ForeverFash/Assets/Icons/5791999.webp"
          onPress={handlePress.bind(this, 'All')}
          catName="All"
        />
        <Cat
          source="/Users/anadiangelsingh/ReactWorkspace/ForeverFash/Assets/Icons/3798530.png"
          onPress={() => console.log('Image pressed!')}
          categoryId="Men"
        />
        <Cat
          source="/Users/anadiangelsingh/ReactWorkspace/ForeverFash/Assets/Icons/3259155.webp"
          onPress={handlePress.bind(this, 'Women')}
          categoryId="Women"
        />
        <Cat
          source="/Users/anadiangelsingh/ReactWorkspace/ForeverFash/Assets/Icons/4551874.webp"
          onPress={() => console.log('Image pressed!')}
          categoryId="Kids"
        />

        <Cat
          source="/Users/anadiangelsingh/ReactWorkspace/ForeverFash/Assets/Icons/4522698.webp"
          onPress={() => console.log('Image pressed!')}
          categoryId="Accessories"
        />

        <Cat
          source="/Users/anadiangelsingh/ReactWorkspace/ForeverFash/Assets/Icons/4522696.webp"
          onPress={() => console.log('Image pressed!')}
          categoryId="Bags"
        />
        <Cat
          source="/Users/anadiangelsingh/ReactWorkspace/ForeverFash/Assets/Icons/7332676.webp"
          onPress={() => console.log('Image pressed!')}
          categoryId="Footwear"
        />
        <Cat
          source="/Users/anadiangelsingh/ReactWorkspace/ForeverFash/Assets/Icons/5818789.webp"
          onPress={() => console.log('Image pressed!')}
          categoryId="Sports"
        />
      </ScrollView>
    </>
  );
}

export default SubHeader;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 6,
    margin: 6,
  },
});
