import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import ShopViewScreen from '../Screens'
import ProductViewScreen from '../Screens'
import ProductEditScreen from '../Screens';

const Stack = createStackNavigator();

export default function ShopNavigator() {
  return (
    <Stack.Navigator initialRouteName='ProductView'>
      <Stack.Screen
        name='ProductView'
        component={ShopViewScreen}
      />
      <Stack.Screen
        name='ProductEdit'
        component={ProductViewScreen}
      />
      <Stack.Screen
        name='ShopView'
        component={ProductEditScreen}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

});