import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';

function Cat({source, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.imageBackground}>
        <Image style={styles.imageButton} source={{uri: source}} />
      </View>
    </TouchableOpacity>
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
  imageButton: {
    height: 50,
    width: 50,
    resizeMode: 'stretch',
  },
  imageBackground: {
    backgroundColor: '#e6dfdf',
    borderRadius: 20,
    padding: 6,
    margin: 8,
  },
});
