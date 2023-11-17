import {
  Dimensions,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation

import CategoryCard from '../components/ui/CategoryCard';
import WomenScreen from './Sub-Categories/Women';

function CategoryScreen() {
  const screenHeight = Dimensions.get('window').height;
  const topSpacePercentage = 0;
  const topSpace = (screenHeight * topSpacePercentage) / 100;

  const navigation = useNavigation(); // Initialize navigation

  const handlePress = pressType => {
    switch (pressType) {
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
    <ScrollView
      vertical
      contentContainerStyle={{
        paddingVertical: 1,
      }}
      showsVerticalScrollIndicator={false}
      className="pt-4">
      <View style={[{marginTop: topSpace}]}></View>

      <View>
        <CategoryCard
          onPress={handlePress.bind(this, 'Women')}
          imageSource={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Icons/3259155.webp')}
          categoryId="Women"
          // create Women section card
          // title="Testing 2"
        />
        <CategoryCard
          onPress={handlePress.bind(this, 'Men')}
          imageSource={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Icons/3798530.png')}
          categoryId="Men"
          // title="Testing 2"
        />
        <CategoryCard
          onPress={handlePress.bind(this, 'Kids')}
          imageSource={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Icons/4551874.webp')}
          categoryId="Kids"
          // title="Testing 2"
        />
        <CategoryCard
          onPress={handlePress.bind(this, 'Accessories')}
          imageSource={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Icons/4522698.webp')}
          categoryId="Accessories"
          // title="Testing 2"
        />
        <CategoryCard
          onPress={handlePress.bind(this, 'Bags')}
          imageSource={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Icons/4522696.webp')}
          categoryId="Bags"
          // title="Testing 2"
        />
        <CategoryCard
          onPress={handlePress.bind(this, 'Footwear')}
          imageSource={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Icons/7332676.webp')}
          categoryId="Footwear"
          // title="Testing 2"
        />
        <CategoryCard
          onPress={handlePress.bind(this, 'Sports')}
          imageSource={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Icons/5818789.webp')}
          categoryId="Sports"
          // title="Testing 2"
        ></CategoryCard>
      </View>
    </ScrollView>
  );
}

export default CategoryScreen;

const styles = StyleSheet.create({
  // main: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   margin: 8,
  // },
  header: {
    flexDirection: 'row',
    padding: 4,
    // alignSelf: 'center',
    alignContent: 'flex-start',
  },
  textInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 16,
    borderWidth: 2,
    margin: 6,
    flex: 1,
  },
  icon: {
    margin: 9,
    padding: 5,
  },

  cardStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  itemDescStyle: {
    marginLeft: 15,
  },
  textStyle: {
    //fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 25,
    marginLeft: 85,
  },
});
