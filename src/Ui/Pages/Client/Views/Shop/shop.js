import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { shopScreens, productsCategory, iconsCategory, iconsColor } from './Constants/keysShop';

import Products from "./Components/products"
import Icon from 'react-native-vector-icons/FontAwesome5';
import Details from './Components/shopDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

let screenType;


const Drawer = createDrawerNavigator();
export default function Store() {
  return (
      <Drawer.Navigator initialRouteName={productsCategory.Home} screenOptions={{
        drawerStyle: {width: 275}}}> 
        
        

        <Drawer.Screen  name={productsCategory.Home} component={HomeScreen}  options={{drawerIcon: ({focused, size}) => (
               <Icon style={{ margin:10}}
               name={iconsCategory.Home}
                size={30}
                color={iconsColor.Home}
              />
            ),}}/>
        <Drawer.Screen name={productsCategory.Gabinete} component={CaseScreen} options={{drawerIcon: ({focused, size})=> (
              <Icon style={{ margin:10}}
               name={iconsCategory.Gabinete}
                size={30}
                color={iconsColor.Gabinete}
              />
            ),}}/>
        <Drawer.Screen name={productsCategory.TarjetaMadre} component={MotherboardScreen} options={{drawerIcon: ({focused, size}) => (
              <Icon style={{ margin:10}}
               name={iconsCategory.TarjetaMadre}
                size={27}
                color={iconsColor.TarjetaMadre}
              />
            ),}}/>
        <Drawer.Screen name={productsCategory.FuentesPoder} component={PowerSupplyScreen} options={{drawerIcon: ({focused, size}) => (
              <Icon style={{ margin:10}}
               name={iconsCategory.FuentesPoder}
                size={32}
                color={iconsColor.FuentesPoder}
              />
            ),}}/>
        <Drawer.Screen name={productsCategory.Procesadores} component={ProcessorsScreen} options={{drawerIcon: ({focused, size}) => (
              <Icon style={{ margin:10}}
               name={iconsCategory.Procesadores}
                size={30}
                color={iconsColor.Procesadores}
              />
            ),}}/>
        <Drawer.Screen name={productsCategory.MemoriasRam} component={MemoryRamScreen} options={{drawerIcon: ({focused, size}) => (
              <Icon style={{ margin:10}}
               name={iconsCategory.MemoriasRam}
                size={30}
                color={iconsColor.MemoriasRam}
              />
            ),}}/>
        <Drawer.Screen name={productsCategory.Almacenamiento} component={StorageScreen} options={{drawerIcon: ({focused, size}) => (
              <Icon style={{ margin:10}}
               name={iconsCategory.Almacenamiento}
                size={30}
                color={iconsColor.Almacenamiento}
              />
            ),}}/>
        <Drawer.Screen name={productsCategory.Video} component={VideoScreen} options={{drawerIcon: ({focused, size}) => (
              <Icon style={{ margin:10}}
               name={iconsCategory.Video}
                size={30}
                color={iconsColor.Video}
              />
            ),}}/>
           
        
      </Drawer.Navigator>
      
  );
}

const homestack = createNativeStackNavigator();
function HomeScreen(){
  screenType = shopScreens.HomeScreen;
  return(
    <homestack.Navigator screenOptions={{headerShown: false}}>
      <homestack.Screen name='Home' component={ProductScreen}/>
      <homestack.Screen name='Details' component={Details}/>
    </homestack.Navigator>
  )
}


const casestack = createNativeStackNavigator();
function CaseScreen(){
  screenType = shopScreens.GabineteScreen;
  return(
    <casestack.Navigator screenOptions={{headerShown: false}}>
      <casestack.Screen name='Cases' component={ProductScreen} />
      <casestack.Screen name='Details' component={Details}/>
    </casestack.Navigator>
  )
}

const motherboardstack = createNativeStackNavigator();
function MotherboardScreen(){
  screenType = shopScreens.TarjetaMadreScreen;
  return(
    <motherboardstack.Navigator screenOptions={{headerShown: false}}>
      <motherboardstack.Screen name='MotherBoards' component={ProductScreen} />
      <motherboardstack.Screen name='Details' component={Details}/>
    </motherboardstack.Navigator>
  )
}

const powerSupplystack = createNativeStackNavigator();
function PowerSupplyScreen(){
  screenType = shopScreens.FuentesPoderScreen;
  return(
    <powerSupplystack.Navigator screenOptions={{headerShown: false}}>
      <powerSupplystack.Screen name='PowerSupply' component={ProductScreen} />
      <powerSupplystack.Screen name='Details' component={Details}/>
    </powerSupplystack.Navigator>
  )
}

const processorsstack = createNativeStackNavigator();
function ProcessorsScreen(){
  screenType = shopScreens.ProcesadoresScreen;
  return(
    <processorsstack.Navigator screenOptions={{headerShown: false}}>
      <processorsstack.Screen name='Processors' component={ProductScreen} />
      <processorsstack.Screen name='Details' component={Details}/>
    </processorsstack.Navigator>
  )
}

const memoryRamstack = createNativeStackNavigator();
function MemoryRamScreen(){
  screenType = shopScreens.MemoriasRamScreen;
  return(
    <memoryRamstack.Navigator screenOptions={{headerShown: false}}>
      <memoryRamstack.Screen name='MemoryRam' component={ProductScreen} />
      <memoryRamstack.Screen name='Details' component={Details}/>
    </memoryRamstack.Navigator>
  )
}

const storagestack = createNativeStackNavigator();
function StorageScreen(){
  screenType = shopScreens.AlmacenamientoScreen;
  return(
    <storagestack.Navigator screenOptions={{headerShown: false}}>
      <storagestack.Screen name='Storage' component={ProductScreen} />
      <storagestack.Screen name='Details' component={Details}/>
    </storagestack.Navigator>
  )
}

const videostack = createNativeStackNavigator();
function VideoScreen(){
  screenType = shopScreens.VideoScreen;
  return(
    <videostack.Navigator screenOptions={{headerShown: false}}>
      <videostack.Screen name='Video' component={ProductScreen} />
      <videostack.Screen name='Details' component={Details}/>
    </videostack.Navigator>
  )
}

function ProductScreen({navigation}){
  return <Products searchType = {screenType}/>;
}