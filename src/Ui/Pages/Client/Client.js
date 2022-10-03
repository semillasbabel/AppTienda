

import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShoppingCar from './Views/Carrito/shoppingCar';
import Store from './Views/Shop/shop';
import Home from './Views/Shop/Components/Home';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import Icon from "react-native-vector-icons/Ionicons"
import { ScreenStackHeaderSearchBarView } from 'react-native-screens';
import Salir from './Views/Shop/Components/out';
import {KeyRoutesEnum} from "../../common/enums/KeyRoutesEnum";

const Tab = createBottomTabNavigator();

export default function TabsUser() {
  return (

    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color='black', size=10 }) => {
        let iconName;

        if (route.name === KeyRoutesEnum.store.value) {
          iconName = 'shopping-bag'
            size = 30
        }

        if (route.name === KeyRoutesEnum.shoppingCar.value) {
          iconName = 'shopping-cart';
          size = 30
        }

        if (route.name === KeyRoutesEnum.exit.value) {
          iconName = 'power-off';
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


    <Tab.Screen name={KeyRoutesEnum.store.value} component={Store} options={{headerTitleStyle: {color: '#1899c5'},headerStyle: {backgroundColor: 'black',}}}/>
    <Tab.Screen name={KeyRoutesEnum.shoppingCar.value} component={ShoppingCar} options={{headerTitleStyle: {color: '#1899c5'},headerStyle: {backgroundColor: 'black',}}}/>
    <Tab.Screen name={KeyRoutesEnum.exit.value} component={Salir} options={{headerTitleStyle: {color: '#1899c5'},headerStyle: {backgroundColor: 'black',}}}/>
  </Tab.Navigator>

  );
}
