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
import { Icon } from '@rneui/base';

const Drawer = createDrawerNavigator();
export default function Store() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name={productsCategoryKeys.Gabinete} component={Cases} options={{drawerIcon: ({focused, size}) => (
              <Icon
                name='home'
                size={30}
                color={"#1899c5"}
              />
            ),}}/>
        <Drawer.Screen name={productsCategoryKeys.TarjetaMadre} component={MotherBoards} />
        <Drawer.Screen name={productsCategoryKeys.FuentesPoder} component={PowerSupply} />
        <Drawer.Screen name={productsCategoryKeys.Procesadores} component={Processors} />
        <Drawer.Screen name={productsCategoryKeys.MemoriasRam} component={Ram} />
        <Drawer.Screen name={productsCategoryKeys.Almacenamiento} component={Storage} />
        <Drawer.Screen name={productsCategoryKeys.Video} component={Video} />
      </Drawer.Navigator>
  );
}
