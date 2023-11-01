import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavouriteScreen from '../../screens/FavouriteScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {View} from 'react-native';
import HomeScreen from '../../screens/HomeScreen';
import WishlistScreen from '../../screens/WishlistScreen';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        backgroundColor: 'black', // Set the background color to black
        borderTopLeftRadius: 25, // Rounded top-left corner
        borderTopRightRadius: 25, // Rounded top-right corner
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 80, // Adjust the height as needed
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel || route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const iconName = options.tabBarIconName || ''; // Customize icon names if needed

        return (
          <MaterialIcons
            key={index}
            name={iconName}
            size={40} // Adjust icon size as needed
            color={isFocused ? '#f4d808' : 'gray'} // Set icon color
            onPress={onPress}
            style={{padding: 10}}
          />
        );
      })}
    </View>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name=" "
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIconName: 'home', // Customize icon name
          showLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouriteScreen}
        options={{
          tabBarLabel: 'Categories',
          tabBarIconName: 'favorite', // Customize icon name
          showLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarLabel: 'Wishlist',
          tabBarIconName: 'bookmark', // Customize icon name
          showLabel: false,
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIconName: 'person', // Customize icon name
          showLabel: false,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
