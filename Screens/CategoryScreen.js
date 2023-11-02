import {
  Dimensions,
  View,
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
} from 'react-native';
import SubHeader from '../components/SubHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import IconButton from '../components/ui/Icon';
import CategoryTile from '../components/ui/CategoryTile';
import {Title} from 'react-native-paper';
import OfferCard from '../components/ui/OfferCard';
import CategoryCard from '../components/ui/CategoryCard';
import Cat from '../components/ui/Cat';
import {Categories} from '../components/store/Categories';
import Icons from 'react-native-vector-icons/MaterialIcons';

function CategoryScreen() {
  const screenHeight = Dimensions.get('window').height;
  const topSpacePercentage = 0;
  const topSpace = (screenHeight * topSpacePercentage) / 100;

  return (
    <SafeAreaView style={styles.main}>
      <View>
        <View style={styles.header}>
          <Icons
            name="keyboard-arrow-left"
            size={40} // Adjust icon size as needed
            //onPress={onPress}
            style={{padding: 0}}
          />
          <Text style={styles.textStyle}>Categories</Text>
        </View>
      </View>

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
            imageSource={{
              uri: '/Users/anadiangelsingh/ReactWorkspace/ForeverFash/Assets/Images/marissa-grootes-flRm0z3MEoA-unsplash (1).jpg',
            }}
            categoryId="Women"

            // title="Testing 2"
          />
          <CategoryCard
            imageSource={{
              uri: '/Users/anadiangelsingh/ReactWorkspace/ForeverFash/Assets/Images/marissa-grootes-flRm0z3MEoA-unsplash (1).jpg',
            }}
            categoryId="Men"
            // title="Testing 2"
          />
          <CategoryCard
            imageSource={{
              uri: '/Users/anadiangelsingh/ReactWorkspace/ForeverFash/Assets/Images/marissa-grootes-flRm0z3MEoA-unsplash (1).jpg',
            }}
            categoryId="Kids"
            // title="Testing 2"
          />
          <CategoryCard
            imageSource={{
              uri: '/Users/anadiangelsingh/ReactWorkspace/ForeverFash/Assets/Images/marissa-grootes-flRm0z3MEoA-unsplash (1).jpg',
            }}
            categoryId="Accessories"
            // title="Testing 2"
          />
          <CategoryCard
            imageSource={{
              uri: '/Users/anadiangelsingh/ReactWorkspace/ForeverFash/Assets/Images/marissa-grootes-flRm0z3MEoA-unsplash (1).jpg',
            }}
            categoryId="Bags"
            // title="Testing 2"
          />
          <CategoryCard
            imageSource={{
              uri: '/Users/anadiangelsingh/ReactWorkspace/ForeverFash/Assets/Images/marissa-grootes-flRm0z3MEoA-unsplash (1).jpg',
            }}
            categoryId="Footwear"
            // title="Testing 2"
          />
          <CategoryCard
            imageSource={{
              uri: '/Users/anadiangelsingh/ReactWorkspace/ForeverFash/Assets/Images/marissa-grootes-flRm0z3MEoA-unsplash (1).jpg',
            }}
            categoryId="Sports"
            // title="Testing 2"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CategoryScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    margin: 8,
  },
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
