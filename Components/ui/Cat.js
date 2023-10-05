import {View, TouchableOpacity, Image, StyleSheet, Text, Pressable} from 'react-native';

function Cat({source, catName,iconBackground,flex,text}) {
  const navigation=useNavigation();
  function categoriesHandler(){
      navigation.navigate('Categories')
  }
  return (
    <Pressable style={[styles.container,flex]} onPress={categoriesHandler}>
      <View style={[styles.imageBackground,iconBackground]}>
        <Image style={styles.imageButton} source={{uri: source}} />
      </View>
      <Text style={[styles.text,text]}>{catName}</Text>
    </Pressable>
  );
}



import IconButton from './Icon';
import { useNavigation } from '@react-navigation/native';


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
    color:'black',
    fontWeight:'700',
    fontSize:15
  },
});
