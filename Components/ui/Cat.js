import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
import {CategoriesScreen} from '../../Screens/CategoriesScreen';

function Cat({source, onPress, catName, categoryId}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <ScrollView style={styles.container}>
        <View style={styles.imageBackground}>
          <Image style={styles.imageButton} source={{uri: source}} />
        </View>
        <CategoriesScreen style={styles.text} categoryId={categoryId} />
        <Text>{catName}</Text>
      </ScrollView>
    </TouchableOpacity>
  );
}

export default Cat;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  imageButton: {
    height: 50,
    width: 50,
    resizeMode: 'stretch',
  },
  imageBackground: {
    backgroundColor: '#ffffffff',
    borderRadius: 100,
    padding: 6,
    margin: 8,
  },
  text: {
    marginTop: 5,
  },
});
