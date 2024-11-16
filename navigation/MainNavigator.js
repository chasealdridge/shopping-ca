import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import HomeScreen from '../Screens';
import ShopNavigator from './ShopNavigator';
import HelpScreen from '../Screens';

const Tab = createBottomTabNavigator();
//const Tab = createMaterialBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='Home' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Shop'
        component={ShopNavigator}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='Shop' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Help'
        component={HelpScreen}
        options={{
          tabBarLabel: 'Help',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='Help' color={color} size={size} />
          ),
        }}
      />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({

});