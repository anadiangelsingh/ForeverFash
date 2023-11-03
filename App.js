// import React from 'react';
// import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
// import 'react-native-gesture-handler';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import TabNavigator from './components/store/TabNavigator';
// import CategoriesScreen from './screens/CategoriesScreen';
// import {useNavigation} from '@react-navigation/native'; // Import useNavigation

// const Stack = createNativeStackNavigator();

// function screenNavigator() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: {backgroundColor: Colors.primary500},
//         headerTintColor: 'white',
//         //contentStyle: {backgroundColor: Colors.primary100},
//         headerShown: false,
//       }}>
//       <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <>
//       <NavigationContainer>
//         <TabNavigator />
//       </NavigationContainer>
//     </>
//   );
// }

import {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import {StatusBar} from 'expo-status-bar';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import {Colors} from './components/constants/styles';
import {AuthContext} from './components/store/auth-context';
import AuthContextProvider from './components/store/auth-context';
import IconButton from './components/ui/IconButton';
import HomeScreen from './screens/HomeScreen';
import TabNavigator from './components/store/TabNavigator';
import CategoryScreen from './screens/CategoryScreen';
import WishlistScreen from './screens/WishlistScreen';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.primary500},
        headerTintColor: '#100909',
        contentStyle: {backgroundColor: Colors.primary100},
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {},
        headerTintColor: '#000000',
        contdentStyle: {},
        headerShown: false,
      }}>
      {/* <TabNavigator /> */}
      <Stack.Screen
        name=" "
        component={TabNavigator}
        options={
          {
            // headerRight: ({tintColor}) => (
            //   <IconButton
            //     icon="exit"
            //     color={tintColor}
            //     size={24}
            //     onPress={authCtx.logout}
            //   />
            // ),
          }
        }
      />
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{
          headerShown: true,
          //   headerRight: ({tintColor}) => (
          //     // <IconButton
          //     //   icon="exit"
          //     //   color={tintColor}
          //     //   size={24}
          //     //   onPress={authCtx.logout}
          //     // />
          //   ),
        }}
      />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      {/* <Stack.Screen name="WishlistScreen" component={WishlistScreen} /> */}
    </Stack.Navigator>
  );
}

function AuthenticatedStack1() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {},
        headerTintColor: '#000000',
        contdentStyle: {},
        headerShown: false,
      }}>
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      <AuthenticatedStack />
      {/* <AuthenticatedStack1 /> */}
      {/* <TabNavigator /> */}

      {/* {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />} */}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      {/* <StatusBar style="light" /> */}
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </>
  );
}
