import {Dimensions, View, StyleSheet} from 'react-native';
import Header from '../Components/Header';
import SubHeader from '../Components/SubHeader';
import {SafeAreaView} from 'react-native-safe-area-context';

function MainScreen() {
  const screenHeight = Dimensions.get('window').height;
  const topSpacePercentage = 0;
  const topSpace = (screenHeight * topSpacePercentage) / 100;

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, {marginTop: topSpace}]}>
        <Header />
        <SubHeader />
      </View>
    </SafeAreaView>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2eeee',
  },
});
