import React from 'react';
import {View, StyleSheet,SafeAreaView,Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './Screens/MainScreen';
import CategoriesScreen from './Screens/Categories Screen';

import IconButton from './Components/ui/Icon';
import CartScreen from './Screens/CartScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Categories" component={CategoriesScreen} options={{
            headerRight:()=>{<Pressable><IconButton name='search' color='black' size={40}/></Pressable>}
          }} />
          <Stack.Screen name='Cart' component={CartScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up all available space
    backgroundColor: '#f4f3f3',
  },
});
