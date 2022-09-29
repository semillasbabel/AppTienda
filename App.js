import React from "react";
import { View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from "react-native";

LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from ']);

import Loggin from "./src/Ui/Pages/Loggin/loggin";
import Register from "./src/Ui/Pages/Register/register";
import Client from "./src/Ui/Pages/Client/Client";
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
          name="Client"
          component={Client}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;