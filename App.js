// app.js

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./Screens/MainScreen";
import CategoriesScreen from "./Screens/Categories Screen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import FavoritesScreen from "./Screens/FavoritesScreen";
import CartScreen from "./Screens/CartScreen";
import AccountScreen from "./Screens/AccountScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-vector-icons/Icon";
import IconButton from "./Components/ui/Icon";

//Code Added to Appjs
const { View, Text, StyleSheet } = require("react-native");

const Bottom=createBottomTabNavigator();
const Stack=createNativeStackNavigator();

function BottomNavigator(){
  return (
    
  <Bottom.Navigator activeColor="#d9f909"
  inactiveColor="#ffffff"
  screenOptions={{
    tabBarStyle:{position:'absolute',backgroundColor:'black',
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    borderWidth:10,
    height:80,
    paddingBottom:8
    },
    tabBarActiveTintColor:'#e1e108',
    tabBarInactiveTintColor:'white',
    headerShown:false
  }}
  
  >
    <Bottom.Screen name="Main" component={MainScreen} options={{
      tabBarIcon:<IconButton name="search" color='white'/>
    }}/>
    <Bottom.Screen name="Favs" component={FavoritesScreen}/>
    <Bottom.Screen name='Cart' component={CartScreen}/>
    <Bottom.Screen name="Account" component={AccountScreen}/>
  </Bottom.Navigator>
  )
}

export default function App(){
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{
        headerStyle:{backgroundColor:'#cecdcd'}
      }}>
        <Stack.Screen name="Bottom" component={BottomNavigator} options={{
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