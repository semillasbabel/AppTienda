import React from "react";
import {Text,  View, ImageBackground, TextInput, StyleSheet, Image} from 'react-native';
import { Card} from "@rneui/themed";
import { doc, setDoc, updateDoc} from "firebase/firestore"

import { ImagesUrisEnum } from "../../../../../Enums/AppImagesUris"
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button,Icon,Switch, checked } from '@rneui/themed';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import  { useState } from "react";
import { update } from "firebase/database";
import * as ImagePicker from "expo-image-picker"


export default function CreateScreen() {

  const [data, setData] = React.useState({
    Name: "",
    Description: "",
    Price: "",
    Amount: "",
    Offert: "",
  },);

 



  return (
   
    <View style={{flex:1, backgroundColor:"#1899c5"}}>
      
      <View style={{flex:1, marginVertical:20, marginHorizontal:20, backgroundColor:"white", borderRadius:20}}>
      <KeyboardAwareScrollView resetScrollToCoords={{ x: 15, y: 15 }}>
        <View style={{height:"30%", width:"100%", alignSelf:"center"}}>
        </View>
       
       
       <View>
         {Image && <Image source={{ uri: Image.uri}} style={{width: 100, height: 100}}/>}

         <TouchableOpacity style={{backgroundColor:"gray", width:170, height:30, borderRadius:8}} onPress={()=>pickImage()}>
       <Text>Selecciona una imagen...</Text>
       </TouchableOpacity>
         <TouchableOpacity style={{backgroundColor:"orange", width:250, height:35,borderRadius:8, alignContent:'center'}} onPress={()=>uploadImage()}>
           <Text>
             cargar imagen
           </Text>
         </TouchableOpacity>
       </View>

        
        <View>
        <Text style={styles.texto}>Nombre del articulo: </Text>
          <TextInput
            value={data.Name}
            onChangeText={(e) => setData({...data, Name: e})}
            style={styles.Inputicon}
          />
           <Text style={styles.texto}>Descripcion: </Text>
          <TextInput
            value={data.Description}
            onChangeText={(e) => setData({...data, Description: e})}
            style={styles.Inputicon}
          />
           <Text style={styles.texto}>Precio : </Text>
          <TextInput
            value={data.Price}
            onChangeText={(e) => setData({...data, Price: e})}
            style={styles.Inputicon}
          />
          <View  style={{ flexDirection: 'row',justifyContent: 'space-between'}}>
           <Text  style={{marginLeft:15}}>cantidad en stock: </Text>
           
          <TextInput
            value={data.Amount}
            onChangeText={(e) => setData({...data, Amount: e})}
            style={{height:30, width:30, borderRadius:10, fontSize:15,marginTop:20, marginRight:-5,backgroundColor:'#1899c5'}}
          />
            <Text  >está en oferta?: </Text>


       
         </View>
        </View>
       
        
        <View style={styles.Button}>

        <Button   onPress={()=>navigation.goBack()} type="solid" style={{height:40, width:120}}>
          Volver
          <Icon name="home" color="white" />
          </Button>


        <Button  onPress={()=>editar()} type="solid" style={{height:40, width:120}}>
          Actualizar
          <Icon name="refresh" color="white" />
          </Button>
       
       
        
        </View>
        </KeyboardAwareScrollView>
      </View>
        
    </View>
   
    
  );
}

const styles = StyleSheet.create({

  Inputicon:{
   height: 30, 
   marginBottom:15,
   width:300,
   fontSize: 15,
   color:"black",
   borderRadius: 10,
   backgroundColor:'#1899c5',
   alignSelf:"center"
  },
  texto:{
    fontSize:16,
    paddingLeft:40
  },
  Button:{
    margin: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
  });







  // <SafeAreaView style={{flex: 1, marginTop: 100}}>
  //     <TouchableOpacity onPress={()=>pickImage()}>
  //       <Text>Selecciona una imagen</Text>
  //     </TouchableOpacity>
  //     <View>
  //       {image && <Image source={{ uri: image.uri}} style={{width: 300, height: 300}}/>}
  //       <TouchableOpacity onPress={()=>uploadImage()}>
  //         <Text>
  //           Updload Image
  //         </Text>
  //       </TouchableOpacity>
  //     </View>
  //   </SafeAreaView>