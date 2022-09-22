import React from "react";
import { View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Loggin from "./src/Ui/Pages/Loggin/loggin";
import TabsUser from "./src/Ui/Pages/User/user";
import Register from "./src/Ui/Pages/Register/register"
import Admin from "./src/Ui/Pages/RolSelecter/Admin/admin";

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
          component={TabsUser}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;