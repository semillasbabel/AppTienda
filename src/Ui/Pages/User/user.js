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
import Home from './Views/Shop/Components/Home';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import Icon from "react-native-vector-icons/Ionicons"
import { ScreenStackHeaderSearchBarView } from 'react-native-screens';
import Salir from './Views/Shop/Components/out';

const Tab = createBottomTabNavigator();

export default function TabsUser() {
  return (
    
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color='black', size=10 }) => {
        let iconName;

        if (route.name === 'Tienda') {
          iconName = 'shopping-bag'
            size = 30
        }

        if (route.name === 'Carrito') {
          iconName = 'shopping-cart';
          size = 30
        }
        
        if (route.name === 'Salir') {
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
      
            
    <Tab.Screen name="Tienda" component={Store} options={{headerShown:false}}/>
    <Tab.Screen name="Carrito" component={ShoppingCar} />
    <Tab.Screen name="Salir" component={Salir} />
  </Tab.Navigator>

  );
}
