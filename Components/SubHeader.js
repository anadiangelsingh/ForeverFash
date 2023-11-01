import {View, StyleSheet} from 'react-native';
import Cat from './ui/Cat';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation

import CategoriesScreen from '../screens/CategoriesScreen';

import WishlistScreen from '../screens/WishlistScreen';

function SubHeader() {
  const navigation = useNavigation(); // Initialize navigation

  // function pressHandler(pressType) {
  //   switch (pressType) {
  //     case 'ALL':
  //       navigation.navigate('CategoriesScreen');
  //       break;
  //   }
  // }
  return (
    <View style={styles.container}>
      <Cat
        source="https://img.icons8.com/?size=30&id=HZ5SrBVYXYO0&format=png"
        onPress={() => console.log('Image pressed!')}
        catName="All"
      />
      <Cat
        source="https://img.icons8.com/?size=48&id=17379&format=png"
        // onPress={pressHandler.bind(this, 'ALL')}
        categoryId="Women"
      />
      <Cat
        source="https://img.icons8.com/?size=80&id=u2JMqCmSYBp0&format=png"
        onPress={() => console.log('Image pressed!')}
        categoryId="Accessories"
      />

      <Cat
        source="https://img.icons8.com/?size=80&id=u2JMqCmSYBp0&format=png"
        onPress={() => console.log('Image pressed!')}
        categoryId="Men"
      />
      <Cat
        source="https://img.icons8.com/?size=80&id=u2JMqCmSYBp0&format=png"
        onPress={() => console.log('Image pressed!')}
        categoryId="Accessories"
      />
    </View>
  );
}

export default SubHeader;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 6,
    margin: 6,
  },
});
