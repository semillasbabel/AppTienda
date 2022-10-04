import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShoppingCar from './Views/ShoppingCar/shoppingCar';
import Store from './Views/Shop/shop';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import Salir from './Views/Exit/exit';
import { ClientRoutesName } from "../../Enums/RoutesName"
import { iconsKeys } from "./Constants/clientKeys"

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
      
            
    <Tab.Screen name={ClientRoutesName.shop.value} component={Store} options={{headerTitleStyle: {color: '#1899c5'},headerStyle: {backgroundColor: 'black',}}}/>
    <Tab.Screen name={ClientRoutesName.shoppingCar.value} component={ShoppingCar} options={{headerTitleStyle: {color: '#1899c5'},headerStyle: {backgroundColor: 'black',}}}/>
    <Tab.Screen name={ClientRoutesName.exit.value} component={Salir} options={{headerTitleStyle: {color: '#1899c5'},headerStyle: {backgroundColor: 'black',}}}/>
  </Tab.Navigator>

  );
}