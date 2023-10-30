import React from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './Components/store/TabNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />

      {/* Navigate directly to the TabNavigator */}
    </NavigationContainer>
  );
}
