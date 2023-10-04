import {Dimensions, View, StyleSheet} from 'react-native';
import Header from '../Components/Header';
import SubHeader from '../Components/SubHeader';

function MainScreen() {
  const screenHeight = Dimensions.get('window').height;
  const topSpacePercentage = 0;
  const topSpace = (screenHeight * topSpacePercentage) / 100;

  return (
    <View style={[styles.container, {marginTop: topSpace}]}>
      <Header />
      <SubHeader />
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#EEEEEE',

    //paddingTop: 20, // Adjust this value to set the space from the top
  },
});
