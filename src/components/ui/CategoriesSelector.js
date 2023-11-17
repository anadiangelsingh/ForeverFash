import {View, StyleSheet, ScrollView} from 'react-native';
import Cat from './Cat';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation

function CategoriesSelector() {
  const navigation = useNavigation(); // Initialize navigation

  const handlePress = pressType => {
    switch (pressType) {
      case 'All':
        navigation.navigate('CategoryScreen');
        console.log('Pressed');
        break;
      case 'Women':
        navigation.navigate('Women');
        console.log('Pressed');
        break;
      case 'Men':
        navigation.navigate('Men');
        console.log('Pressed');
        break;
      case 'Kids':
        navigation.navigate('Kids');
        console.log('Pressed');
        break;
      case 'Accessories':
        navigation.navigate('Accessories');
        console.log('Pressed');
        break;
      case 'Bags':
        navigation.navigate('Bags');
        console.log('Pressed');
        break;
      case 'Footwear':
        navigation.navigate('Footwear');
        console.log('Pressed');
        break;
      case 'Sports':
        navigation.navigate('Sports');
        console.log('Pressed');
        break;
    }
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
          source={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Icons/5791999.webp')}
          onPress={handlePress.bind(this, 'All')}
          catName="All"
        />
        <Cat
          source={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Icons/3798530.png')}
          onPress={handlePress.bind(this, 'Men')}
          categoryId="Men"
        />
        <Cat
          source={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Icons/3259155.webp')}
          onPress={handlePress.bind(this, 'Women')}
          categoryId="Women"
        />
        <Cat
          source={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Icons/4551874.webp')}
          onPress={handlePress.bind(this, 'Kids')}
          categoryId="Kids"
        />

        <Cat
          source={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Icons/4522698.webp')}
          onPress={handlePress.bind(this, 'Accessories')}
          categoryId="Accessories"
        />

        <Cat
          source={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Icons/4522696.webp')}
          onPress={handlePress.bind(this, 'Bags')}
          categoryId="Bags"
        />
        <Cat
          source={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Icons/7332676.webp')}
          onPress={handlePress.bind(this, 'Footwear')}
          categoryId="Footwear"
        />
        <Cat
          source={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Icons/5818789.webp')}
          onPress={handlePress.bind(this, 'Sports')}
          categoryId="Sports"
        />
      </ScrollView>
    </>
  );
}

export default CategoriesSelector;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 6,
    margin: 6,
  },
});
