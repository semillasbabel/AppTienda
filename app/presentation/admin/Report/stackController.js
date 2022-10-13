import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { productRoutes } from "./constants/productsKey"
import reporte from "./report"
import details from "./productDetails"

const Stack = createNativeStackNavigator();

function StackController() {
  return (
    <Stack.Navigator
        screenOptions={{headerShown: false}}>

        <Stack.Screen
          name="Reporte"
          component={reporte}
        />
        
        <Stack.Screen 
          name="Detalles"
          component={details}
        />

    </Stack.Navigator>
  );
}

export default StackController;