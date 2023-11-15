import {
  Dimensions,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';

import CategoryCard from '../components/ui/CategoryCard';

function CategoryScreen() {
  const screenHeight = Dimensions.get('window').height;
  const topSpacePercentage = 0;
  const topSpace = (screenHeight * topSpacePercentage) / 100;

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
          imageSource={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Images/marissa-grootes-flRm0z3MEoA-unsplash.jpg')}
          categoryId="Women"
          // create Women section card
          // title="Testing 2"
        />
        <CategoryCard
          imageSource={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Images/marissa-grootes-flRm0z3MEoA-unsplash.jpg')}
          categoryId="Men"
          // title="Testing 2"
        />
        <CategoryCard
          imageSource={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Images/marissa-grootes-flRm0z3MEoA-unsplash.jpg')}
          categoryId="Kids"
          // title="Testing 2"
        />
        <CategoryCard
          imageSource={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Images/marissa-grootes-flRm0z3MEoA-unsplash.jpg')}
          categoryId="Accessories"
          // title="Testing 2"
        />
        <CategoryCard
          imageSource={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Images/marissa-grootes-flRm0z3MEoA-unsplash.jpg')}
          categoryId="Bags"
          // title="Testing 2"
        />
        <CategoryCard
          imageSource={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Images/marissa-grootes-flRm0z3MEoA-unsplash.jpg')}
          categoryId="Footwear"
          // title="Testing 2"
        />
        <CategoryCard
          imageSource={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Images/marissa-grootes-flRm0z3MEoA-unsplash.jpg')}
          categoryId="Sports"
          // title="Testing 2"
        />
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
