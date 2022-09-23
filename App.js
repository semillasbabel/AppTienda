import React from "react";
import { View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Loggin from "./src/Ui/Pages/Loggin/loggin";
import Register from "./src/Ui/Pages/Register/register";
import User from "./src/Ui/Pages/User/user";
import Admin from "./src/Ui/Pages/Admin/admin";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator
        screenOptions={{headerShown: false}}>

        <Stack.Screen
          name="Loggin"
          component={Loggin}
        />
        
        <Stack.Screen 
          name="Register"
          component={Register}
        />

        <Stack.Screen 
          name="Admin"
          component={Admin}
        />

        <Stack.Screen 
          name="User"
          component={User}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;