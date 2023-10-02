// app.js
//Code Added to Appjs
const { View, Text, StyleSheet } = require("react-native");

function App(){
  return (<View style={styles.container}>
    <Text>hello bambu</Text>
  </View>)
}
export default App;

const styles=StyleSheet.create({
  container:{
    color:'black',
    alignItems:"center"

  }
})