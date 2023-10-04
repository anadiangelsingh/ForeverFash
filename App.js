// app.js

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./Screens/MainScreen";
import CategoriesScreen from "./Screens/Categories Screen";

//Code Added to Appjs
const { View, Text, StyleSheet } = require("react-native");

const Stack=createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="Categories" component={CategoriesScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <MainScreen/>
  )
}


const styles=StyleSheet.create({
  container:{
    color:'black',
    alignItems:"center"

  }
})