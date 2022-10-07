import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import { ClientRoutesName } from "../enums/routesName"
import { iconsKeys } from "./constants/clientKeys"

import store from "./store/drawerController";
import shoppingCar from "./shoppingCar/shoppingCar";
import exit from "./exit/exit";

const Tab = createBottomTabNavigator();

export default function TabsUser() {
  return (
    
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color='black', size=10 }) => {
        let iconName;

        if (route.name === `${ClientRoutesName.shop.value}`) {
          iconName = `${iconsKeys.shop}`;
            size = 30
        }

        if (route.name === `${ClientRoutesName.shoppingCar.value}`) {
          iconName = `${iconsKeys.shoppingCar}`;
          size = 30
        }
        
        if (route.name === `${ClientRoutesName.exit.value}`) {
          iconName = `${iconsKeys.exit}`;
          size = 30
        }




      

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarStyle: {
        backgroundColor: "black",
      },
      tabBarActiveTintColor: '#1899c5',
      tabBarInactiveTintColor: '#ffff00',
    })}
  >
      
            
    <Tab.Screen name={ClientRoutesName.shop.value} component={store} options={{headerTitleStyle: {color: '#1899c5'},headerStyle: {backgroundColor: 'black',}}}/>
    <Tab.Screen name={ClientRoutesName.shoppingCar.value} component={shoppingCar} options={{headerTitleStyle: {color: '#1899c5'},headerStyle: {backgroundColor: 'black',}}}/>
    <Tab.Screen name={ClientRoutesName.exit.value} component={exit} options={{headerTitleStyle: {color: '#1899c5'},headerStyle: {backgroundColor: 'black',}}}/>
  </Tab.Navigator>

  );
}