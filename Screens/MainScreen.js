import {Text, View, StyleSheet} from 'react-native';
import Header from '../Components/Header';
import SubHeader from '../Components/SubHeader';

function MainScreen() {
  return (
    <View>
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
  },
});
