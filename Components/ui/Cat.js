import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';

function Cat({source, onPress, catName}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageBackground}>
        <Image style={styles.imageButton} source={{uri: source}} />
      </View>
      <Text style={styles.text}>{catName}</Text>
    </View>
  );
}

//import {View, StyleSheet, Image, Text} from 'react-native';

import IconButton from './Icon';
// function Cat({source}){
//     return (<View>

//     <View style={style.imageBackground}>
//     <Image style={style.imageButton}
//      source={{uri:source}}/>
//     </View>

//     </View>)
// }

// Component added made pressable

export default Cat;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
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
