import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { productRoutes } from "./constants/productsKey"
import products from "./allProducts"
import details from "./details"
import create from "./createProduct"
// import category from "./category"

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

        <Stack.Screen 
          name={productRoutes.create}
          component={create}
        />
          {/* <Stack.Screen 
          name={productRoutes.category}
          component={category}
        /> */}

    </Stack.Navigator>
  );
}

export default StackController;