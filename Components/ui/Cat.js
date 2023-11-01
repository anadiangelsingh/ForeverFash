import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import {Categories} from '../store/Categories';

function Cat({source, onPress, catName, categoryId}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.text}>
        <View style={styles.imageBackground}>
          <Image style={styles.imageButton} source={{uri: source}} />
        </View>
        <Categories categoryId={categoryId} />

        <Text>{catName}</Text>
      </View>
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
    alignContent: 'center',
    alignItems: 'center',
  },
});
