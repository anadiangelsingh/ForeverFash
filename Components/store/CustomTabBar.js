import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'black',
        borderTopLeftRadius: 20, // Adjust the border radius as needed
        borderTopRightRadius: 20, // Adjust the border radius as needed
        overflow: 'hidden', // Clip content to rounded corners
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            onPress={onPress}
            style={{flex: 1, alignItems: 'center', paddingVertical: 8}}>
            <MaterialCommunityIcons
              name={
                route.name === 'Home'
                  ? 'home'
                  : route.name === 'Wishlist'
                  ? 'heart-multiple'
                  : route.name === 'Shopping Bag'
                  ? 'bag-checked'
                  : 'account'
              }
              size={26}
              color={isFocused ? '#f7e708' : '#a4a2a3'}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
