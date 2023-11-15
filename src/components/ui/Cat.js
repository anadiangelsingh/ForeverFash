import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import {Categories} from '../store/Categories';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function Cat({iconName, onPress, catName, categoryId, source}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.text}>
        <View style={styles.imageBackground}>
          {/* <MaterialIcons
            name={iconName}
            size={40} // Adjust icon size as needed
            onPress={onPress}
            style={{padding: 10}}
          /> */}
          <Image style={styles.imageButton} source={source} />
        </View>
        <Categories categoryId={categoryId} />
        {/* <Text>{categoryId}</Text> */}
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
