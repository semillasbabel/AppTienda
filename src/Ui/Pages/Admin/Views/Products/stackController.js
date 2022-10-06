import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { productRoutes } from "./constants/productsKey"
import products from "./Views/allProducts"
import details from "./Views/details"

const Stack = createNativeStackNavigator();

function StackController() {
  return (
    <Stack.Navigator
        screenOptions={{headerShown: false}}>

        <Stack.Screen
          name={productRoutes.products}
          component={products}
        />
        
        <Stack.Screen 
          name={productRoutes.details}
          component={details}
        />

    </Stack.Navigator>
  );
}

export default StackController;