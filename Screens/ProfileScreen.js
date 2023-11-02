import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {CategoriesScreen} from './CategoryScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Categories} from '../components/store/Categories';

function ProfileScreen() {
  // const categoryId = 'Men'; // Replace with the actual category ID you want to fetch
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Profile Screen</Text>
          {/* <CategoriesScreen style={styles.text} categoryId="Sports" /> */}
          <Categories categoryId="Bags" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // Add any additional styles as needed
  },
});

export default ProfileScreen;
