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

function HomeScreen() {
  const screenHeight = Dimensions.get('window').height;
  const topSpacePercentage = 0;
  const topSpace = (screenHeight * topSpacePercentage) / 100;

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        vertical
        contentContainerStyle={{
          paddingVertical: 1,
        }}
        showsVerticalScrollIndicator={false}
        className="pt-4">
        <View style={[{marginTop: topSpace}]}>
          <View style={styles.header}>
            <View style={styles.textInput}>
              <TextInput placeholder="  Search" />
              <View style={styles.icon}>
                <IconButton name="search" size={25} />
              </View>
            </View>
            <View style={styles.icon}>
              <IconButton name="filter" size={25} />
            </View>
          </View>
          {/* Categories Icon */}
          <SubHeader />
        </View>
        <View>
          <OfferCard
            imageSource={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Images/marissa-grootes-flRm0z3MEoA-unsplash.jpg')}
            OfferPercentage="40%"
            OfferDesc="on all Women's collection"
            // title="Testing 2"
          />
          <OfferCard
            imageSource={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Images/marissa-grootes-flRm0z3MEoA-unsplash.jpg')}
            OfferPercentage="50%"
            OfferDesc="on all Kids's collection"
            // title="Testing 2"
          />
        </View>
        <View style={styles.itemDescStyle}>
          <Title>New Items</Title>
        </View>
        <View style={styles.cardStyle}>
          <CategoryTile
            imageSource={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Images/marissa-grootes-flRm0z3MEoA-unsplash.jpg')}
            itemDesc="Stylish Suit"
            itemPrice="87.00"
            onPress={() => console.log('Card pressed!')}
          />
          <CategoryTile
            imageSource={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Images/marissa-grootes-flRm0z3MEoA-unsplash.jpg')}
            itemDesc="New Shirt"
            itemPrice="72.00"
          />
        </View>
        <View style={styles.cardStyle}>
          <CategoryTile
            imageSource={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Images/marissa-grootes-flRm0z3MEoA-unsplash.jpg')}
            itemDesc="Stylish Suit"
            itemPrice="87.00"
            onPress={() => console.log('Card pressed!')}
          />
          <CategoryTile
            imageSource={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Images/marissa-grootes-flRm0z3MEoA-unsplash.jpg')}
            itemDesc="New Shirt"
            itemPrice="72.00"
          />
        </View>
        <View style={styles.cardStyle}>
          <CategoryTile
            imageSource={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Images/marissa-grootes-flRm0z3MEoA-unsplash.jpg')}
            itemDesc="Stylish Suit"
            itemPrice="87.00"
            onPress={() => console.log('Card pressed!')}
          />
          <CategoryTile
            imageSource={require('/Users/anadiangelsingh/ReactWorkspace/ForeverFash/src/Assets/Images/marissa-grootes-flRm0z3MEoA-unsplash.jpg')}
            itemDesc="New Shirt"
            itemPrice="72.00"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    margin: 8,
  },
  header: {
    flexDirection: 'row',
    margin: 2,
    padding: 4,
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
});
