import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import { AdminRoutesName } from "../../Enums/RoutesName"
import { iconsKeys } from "./Constants/adminKeys"
import report from "./Views/Report/report"
import stackController from "./Views/Products/stackController"
import exit from "./Views/Exit/exit"

const Tab = createBottomTabNavigator();

export default function TabsAdmin() {
  return (
    
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color='black', size=10 }) => {
        let iconName;

        if (route.name === `${AdminRoutesName.report.value}`) {
          iconName = `${iconsKeys.shop}`;
            size = 30
        }

        if (route.name === `${AdminRoutesName.products.value}`) {
          iconName = `${iconsKeys.shoppingCar}`;
          size = 30
        }
        
        if (route.name === `${AdminRoutesName.exit.value}`) {
          iconName = `${iconsKeys.exit}`;
          size = 30
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarStyle: {
        backgroundColor: "black",
      },
      tabBarActiveTintColor: '#1899c5',
      tabBarInactiveTintColor: '#ffff00',
    })}
  >
      
            
    <Tab.Screen name={AdminRoutesName.report.value} component={report} options={{headerTitleStyle: {color: '#1899c5'},headerStyle: {backgroundColor: 'black',}}}/>
    <Tab.Screen name={AdminRoutesName.products.value} component={stackController} options={{headerTitleStyle: {color: '#1899c5'},headerStyle: {backgroundColor: 'black',}}}/>
    <Tab.Screen name={AdminRoutesName.exit.value} component={exit} options={{headerTitleStyle: {color: '#1899c5'},headerStyle: {backgroundColor: 'black',}}}/>
  </Tab.Navigator>

  );
}