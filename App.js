import {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import {StatusBar} from 'expo-status-bar';

import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import {Colors} from './src/components/constants/styles';
import {AuthContext} from './src/components/store/auth-context';
import AuthContextProvider from './src/components/store/auth-context';
import HomeScreen from './src/screens/HomeScreen';
import TabNavigator from './src/components/store/TabNavigator';
import CategoryScreen from './src/screens/CategoryScreen';
import WishlistScreen from './src/screens/WishlistScreen';

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

// function AuthenticatedStack1() {
//   const authCtx = useContext(AuthContext);
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: {},
//         headerTintColor: '#000000',
//         contdentStyle: {},
//         headerShown: false,
//       }}>
//       <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
//     </Stack.Navigator>
//   );
// }

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {/* <AuthenticatedStack /> */}

      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
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
