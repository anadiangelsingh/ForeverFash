import {Dimensions, View, StyleSheet, TextInput} from 'react-native';
import SubHeader from '../Components/SubHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
//const {View, TextInput, StyleSheet} = require('react-native');
import IconButton from '../Components/ui/Icon';

function HomeScreen() {
  const screenHeight = Dimensions.get('window').height;
  const topSpacePercentage = 0;
  const topSpace = (screenHeight * topSpacePercentage) / 100;

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, {marginTop: topSpace}]}>
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
        <SubHeader />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
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
    margin: 6,
    padding: 4,
  },
});
