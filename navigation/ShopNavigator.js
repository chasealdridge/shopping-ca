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
        screenOptions={{ headerShown: false }}
      <Stack.Screen
      options={{ title: "ProductView" }}
        name='ProductView'
        component={ShopViewScreen}
      />
      <Stack.Screen
      options={{ title: "ProductEdit" }}
        name='ProductEdit'
        component={ProductViewScreen}
      />
      <Stack.Screen
      options={{ title: "ShopView" }}
        name='ShopView'
        component={ProductEditScreen}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

});