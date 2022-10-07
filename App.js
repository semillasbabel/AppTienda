import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from "react-native";
import { MainRoutesEnum } from "./app/presentation/enums/routesName"

LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from ']);

import Loggin from "./app/presentation/loggin/loggin";
import Register from "./app/presentation/registry/registry";
import Client from "./app/presentation/client/pageController";
import Admin from "./app/presentation/admin/pageController";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator
        screenOptions={{headerShown: false}}>

        <Stack.Screen
          name={MainRoutesEnum.Loggin.value}
          component={Loggin}
        />
        
        <Stack.Screen 
          name={MainRoutesEnum.register.value}
          component={Register}
        />

        <Stack.Screen 
          name={MainRoutesEnum.admin.value}
          component={Admin}
        />

        <Stack.Screen 
          name={MainRoutesEnum.client.value}
          component={Client}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

































// import React from "react";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { LogBox } from "react-native";
// import { MainRoutesEnum } from "./src/Ui/Enums/RoutesName"

// LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from ']);

// import Loggin from "./src/Ui/Pages/Loggin/loggin";
// import Register from "./src/Ui/Pages/Register/register";
// import Client from "./src/Ui/Pages/Client/Client";
// import Admin from "./src/Ui/Pages/Admin/admin";

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
      
//       <Stack.Navigator
//         screenOptions={{headerShown: false}}>

//         <Stack.Screen
//           name={MainRoutesEnum.Loggin.value}
//           component={Loggin}
//         />
        
//         <Stack.Screen 
//           name={MainRoutesEnum.register.value}
//           component={Register}
//         />

//         <Stack.Screen 
//           name={MainRoutesEnum.admin.value}
//           component={Admin}
//         />

//         <Stack.Screen 
//           name={MainRoutesEnum.client.value}
//           component={Client}
//         />

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;