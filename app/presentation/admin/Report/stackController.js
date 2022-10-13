import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { productRoutes } from "./constants/productsKey"
import list from "./shopList"
import details from "./productDetails"

const Stack = createNativeStackNavigator();

function StackController() {
  return (
    <Stack.Navigator
        screenOptions={{headerShown: false}}>

        <Stack.Screen
          name="shopList"
          component={list}
        />
        
        <Stack.Screen 
          name="Detalles"
          component={details}
        />

    </Stack.Navigator>
  );
}

export default StackController;