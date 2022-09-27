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
import Icon from 'react-native-vector-icons/FontAwesome5';
import inicio from './Components/Home';
import {  DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer' 
import { NavigationContainer } from '@react-navigation/native';



const Drawer = createDrawerNavigator();
export default function Store() {
  return (
      <Drawer.Navigator initialRouteName="Home" screenOptions={{
        drawerStyle: {
          backgroundColor: '#ced4da',
          width: 275,
        },
      }}
    > 
        

        <Drawer.Screen   name={productsCategoryKeys.Home} component={inicio}  options={{drawerIcon: ({focused, size}) => (
               <Icon style={{ margin:10}}
               name="home"
                size={30}
                color={"#fd7e22"}
              />
            ),}}/>
        <Drawer.Screen name={productsCategoryKeys.Gabinete} component={Cases} options={{drawerIcon: ({focused, size}) => (
              <Icon style={{ margin:10}}
               name="box"
                size={30}
                color={"#fd7e22"}
              />
            ),}}/>
        <Drawer.Screen name={productsCategoryKeys.TarjetaMadre} component={MotherBoards} options={{drawerIcon: ({focused, size}) => (
              <Icon style={{ margin:10}}
               name="laptop-medical" 
                size={27}
                color={"#fd7e22"}
              />
            ),}}/>
        <Drawer.Screen name={productsCategoryKeys.FuentesPoder} component={PowerSupply} options={{drawerIcon: ({focused, size}) => (
              <Icon style={{ margin:10}}
               name="plug"
                size={32}
                color={"#fd7e22"}
              />
            ),}}/>
        <Drawer.Screen name={productsCategoryKeys.Procesadores} component={Processors} options={{drawerIcon: ({focused, size}) => (
              <Icon style={{ margin:10}}
               name="microchip"
                size={30}
                color={"#fd7e22"}
              />
            ),}}/>
        <Drawer.Screen name={productsCategoryKeys.MemoriasRam} component={Ram} options={{drawerIcon: ({focused, size}) => (
              <Icon style={{ margin:10}}
               name="memory"
                size={30}
                color={"#fd7e22"}
              />
            ),}}/>
        <Drawer.Screen name={productsCategoryKeys.Almacenamiento} component={Storage} options={{drawerIcon: ({focused, size}) => (
              <Icon style={{ margin:10}}
               name="hdd"
                size={30}
                color={"#fd7e22"}
              />
            ),}}/>
        <Drawer.Screen name={productsCategoryKeys.Video} component={Video} options={{drawerIcon: ({focused, size}) => (
              <Icon style={{ margin:10}}
               name="vr-cardboard"
                size={30}
                color={"#fd7e22"}
              />
            ),}}/>
           
        
      </Drawer.Navigator>
      
  );
}
<ion-icon name=""></ion-icon>