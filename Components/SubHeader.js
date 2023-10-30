import {View, StyleSheet} from 'react-native';
import Cat from './ui/Cat';
import IconButton from './ui/Icon';
import {ScrollView} from 'react-native-gesture-handler';
import {CategoriesScreen} from '../Screens/CategoriesScreen';

function SubHeader() {
  return (
    // <ScrollView>
    <View style={styles.container}>
      <Cat
        source="https://img.icons8.com/?size=30&id=HZ5SrBVYXYO0&format=png"
        onPress={() => console.log('Image pressed!')}
        catName="All"
      />
      <CategoriesScreen />
      <Cat
        source="https://img.icons8.com/?size=48&id=17379&format=png"
        onPress={() => console.log('Image pressed!')}
        catName="Clothing"
      />
      <Cat
        source="https://img.icons8.com/?size=80&id=u2JMqCmSYBp0&format=png"
        onPress={() => console.log('Image pressed!')}
        catName="Accessories"
      />

      <Cat />
    </View>

    // </ScrollView>
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
