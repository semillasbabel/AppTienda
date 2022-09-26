import React from 'react'
import {View, Text, Button} from "react-native"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { productsCategoryKeys } from "../../../../Utils/constants"
import Cases from './Components/cases';
import MotherBoards from './Components/motherboards';
import PowerSupply from './Components/powerSupply';
import Processors from './Components/processors';
import Ram from './Components/ram';
import Storage from './Components/storage';
import Video from './Components/video';

import Home from './Components/Home';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();
export default function Store() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name={productsCategoryKeys.Home} component={Home} />
        <Drawer.Screen name={productsCategoryKeys.Gabinete} component={Cases} options={{drawerIcon: ({focused, size}) => (
              <Icon
               name="clipboard-outline" 
                size={30}
                color={"#1899c5"}
              />
            ),}}/>
        <Drawer.Screen name={productsCategoryKeys.TarjetaMadre} component={MotherBoards} options={{drawerIcon: ({focused, size}) => (
              <Icon
               name="hardware-chip-outline"
                size={30}
                color={"#1899c5"}
              />
            ),}}/>
        <Drawer.Screen name={productsCategoryKeys.FuentesPoder} component={PowerSupply} options={{drawerIcon: ({focused, size}) => (
              <Icon
               name="power-outline"
                size={30}
                color={"#1899c5"}
              />
            ),}}/>
        <Drawer.Screen name={productsCategoryKeys.Procesadores} component={Processors} options={{drawerIcon: ({focused, size}) => (
              <Icon
               name="hardware-chip-outline"
                size={30}
                color={"#1899c5"}
              />
            ),}}/>
        <Drawer.Screen name={productsCategoryKeys.MemoriasRam} component={Ram} options={{drawerIcon: ({focused, size}) => (
              <Icon
              type='fontawasome'
               name="fa-light fa-disc-drive"
                size={30}
                color={"#1899c5"}
              />
            ),}}/>
        <Drawer.Screen name={productsCategoryKeys.Almacenamiento} component={Storage} options={{drawerIcon: ({focused, size}) => (
              <Icon
               name="save-outline"
                size={30}
                color={"#1899c5"}
              />
            ),}}/>
        <Drawer.Screen name={productsCategoryKeys.Video} component={Video} options={{drawerIcon: ({focused, size}) => (
              <Icon
               name="desktop-outline"
                size={30}
                color={"#1899c5"}
              />
            ),}}/>
      </Drawer.Navigator>
  );
}
<ion-icon name=""></ion-icon>