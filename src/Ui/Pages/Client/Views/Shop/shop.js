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
import Details from './Components/shopDetails';
import {  DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer' 
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Drawer = createDrawerNavigator();
export default function Store() {
  return (
      <Drawer.Navigator initialRouteName="Home" screenOptions={{
        drawerStyle: {width: 275}}}> 
        
        

        <Drawer.Screen  name={productsCategoryKeys.Home} component={HomeScreen}  options={{drawerIcon: ({focused, size}) => (
               <Icon style={{ margin:10}}
               name="home"
                size={30}
                color={"#1899c5"}
              />
            ),}}/>
        <Drawer.Screen name={productsCategoryKeys.Gabinete} component={CaseScreen} options={{drawerIcon: ({focused, size})=> (
              <Icon style={{ margin:10}}
               name="box"
                size={30}
                color={"#1899c5"}
              />
            ),}}/>
        <Drawer.Screen name={productsCategoryKeys.TarjetaMadre} component={MotherboardScreen} options={{drawerIcon: ({focused, size}) => (
              <Icon style={{ margin:10}}
               name="laptop-medical" 
                size={27}
                color={"#1899c5"}
              />
            ),}}/>
        <Drawer.Screen name={productsCategoryKeys.FuentesPoder} component={PowerSupplyScreen} options={{drawerIcon: ({focused, size}) => (
              <Icon style={{ margin:10}}
               name="plug"
                size={32}
                color={"#1899c5"}
              />
            ),}}/>
        <Drawer.Screen name={productsCategoryKeys.Procesadores} component={ProcessorsScreen} options={{drawerIcon: ({focused, size}) => (
              <Icon style={{ margin:10}}
               name="microchip"
                size={30}
                color={"#1899c5"}
              />
            ),}}/>
        <Drawer.Screen name={productsCategoryKeys.MemoriasRam} component={MemoryRamScreen} options={{drawerIcon: ({focused, size}) => (
              <Icon style={{ margin:10}}
               name="memory"
                size={30}
                color={"#1899c5"}
              />
            ),}}/>
        <Drawer.Screen name={productsCategoryKeys.Almacenamiento} component={StorageScreen} options={{drawerIcon: ({focused, size}) => (
              <Icon style={{ margin:10}}
               name="hdd"
                size={30}
                color={"#1899c5"}
              />
            ),}}/>
        <Drawer.Screen name={productsCategoryKeys.Video} component={VideoScreen} options={{drawerIcon: ({focused, size}) => (
              <Icon style={{ margin:10}}
               name="vr-cardboard"
                size={30}
                color={"#1899c5"}
              />
            ),}}/>
           
        
      </Drawer.Navigator>
      
  );
}

const homestack = createNativeStackNavigator();
function HomeScreen(){
  const navigation = useNavigation();
  return(
    <homestack.Navigator screenOptions={{headerShown: false}}>
      <homestack.Screen name='Home' component={Home} />
      <homestack.Screen name='Details' component={Details}/>
    </homestack.Navigator>
  )
}

const casestack = createNativeStackNavigator();
function CaseScreen(){
  const navigation = useNavigation();
  return(
    <casestack.Navigator screenOptions={{headerShown: false}}>
      <casestack.Screen name='Cases' component={Cases} />
      <casestack.Screen name='Details' component={Details}/>
    </casestack.Navigator>
  )
}

const motherboardstack = createNativeStackNavigator();
function MotherboardScreen(){
  const navigation = useNavigation();
  return(
    <motherboardstack.Navigator screenOptions={{headerShown: false}}>
      <motherboardstack.Screen name='MotherBoards' component={MotherBoards} />
      <motherboardstack.Screen name='Details' component={Details}/>
    </motherboardstack.Navigator>
  )
}

const powerSupplystack = createNativeStackNavigator();
function PowerSupplyScreen(){
  const navigation = useNavigation();
  return(
    <powerSupplystack.Navigator screenOptions={{headerShown: false}}>
      <powerSupplystack.Screen name='PowerSupply' component={PowerSupply} />
      <powerSupplystack.Screen name='Details' component={Details}/>
    </powerSupplystack.Navigator>
  )
}

const processorsstack = createNativeStackNavigator();
function ProcessorsScreen(){
  const navigation = useNavigation();
  return(
    <processorsstack.Navigator screenOptions={{headerShown: false}}>
      <processorsstack.Screen name='Processors' component={Processors} />
      <processorsstack.Screen name='Details' component={Details}/>
    </processorsstack.Navigator>
  )
}

const memoryRamstack = createNativeStackNavigator();
function MemoryRamScreen(){
  const navigation = useNavigation();
  return(
    <memoryRamstack.Navigator screenOptions={{headerShown: false}}>
      <memoryRamstack.Screen name='MemoryRam' component={Ram} />
      <memoryRamstack.Screen name='Details' component={Details}/>
    </memoryRamstack.Navigator>
  )
}

const storagestack = createNativeStackNavigator();
function StorageScreen(){
  const navigation = useNavigation();
  return(
    <storagestack.Navigator screenOptions={{headerShown: false}}>
      <storagestack.Screen name='Storage' component={Storage} />
      <storagestack.Screen name='Details' component={Details}/>
    </storagestack.Navigator>
  )
}

const videostack = createNativeStackNavigator();
function VideoScreen(){
  const navigation = useNavigation();
  return(
    <videostack.Navigator screenOptions={{headerShown: false}}>
      <videostack.Screen name='Video' component={Video} />
      <videostack.Screen name='Details' component={Details}/>
    </videostack.Navigator>
  )
}