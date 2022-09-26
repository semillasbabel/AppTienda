// import React from 'react'
// import { View, Text, Button } from 'react-native'
// import { useNavigation } from "@react-navigation/native";
// import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

// function User() {
//   const navigation = useNavigation();
//   const auth = getAuth();

//   const logOut = async ()=>{
//     await signOut(auth)
//     navigation.goBack();
//   }

//   return (
//     <View>
//       <View style={{height:100}}/>
//       <Text>Usuario</Text>
//       <Button
//         title='Cerrar Sesion'
//         onPress={()=>logOut()}
//       />
//     </View>
//   )
// }

// export default User

import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShoppingCar from './Views/Carrito/shoppingCar';
import Store from './Views/Shop/shop';

const Tab = createBottomTabNavigator();

export default function TabsUser() {
  return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Tienda" component={Store} />
        <Tab.Screen name="Carrito" component={ShoppingCar} />
      </Tab.Navigator>
  );
}
