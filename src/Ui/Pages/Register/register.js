import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Button, Image, Input } from "@rneui/themed";

import { SafeAreaView } from 'react-native-safe-area-context'
import { color } from '@rneui/base';




const image = { uri: "https://media.idownloadblog.com/wp-content/uploads/2020/05/Vector-wave-iPhone-wallpaper-Arthur1992aS-iDownloadBlog-6-710x1536.png" };


const register = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
     
        <ScrollView>
        <Text style={styles.TEXTO}>Registro de Usuarios</Text>
          <Input
            placeholder=" Nombre Completo"
            leftIcon={{ type: 'font-awesome', name: 'user', size: 35, color:'#ffeb3b' }}/>
            <Input
            placeholder=" Direccion donde Vive"
            leftIcon={{ type: 'font-awesome', name: 'map', size: 35, color:'#ffeb3b'}}/>
             <Input
            placeholder=" Correo Electronico"
            leftIcon={{ type: 'font-awesome', name: 'at', size: 35, color:'#ffeb3b' }}/>
            
          <Input
            placeholder=" CONTRASEÑA"
            leftIcon={{ type: 'font-awesome', name: 'lock', size: 35, color:'#ffeb3b' }}/>
        <Button style={styles.botton} title={'Registrar'}></Button>
       
       <TouchableOpacity>
        <Text style={styles.TEXTO}>Volver </Text>
       </TouchableOpacity>
       </ScrollView>
      </ImageBackground>
      
      
    </SafeAreaView>
  )
}





const styles = StyleSheet.create({
  text: {
   fontSize:25,
   justifyContent:'center',
  
  },
  botton :{
    height:55,
    width:350,
    justifyContent:'center',
    marginLeft:'auto',
    marginRight:'auto',
    
  },
  TEXTO:{
    fontSize: 20,
    color:'#ffff00',
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:15,
    textAlign:'center',
    paddingVertical:60
  },
  container: {
    flex: 1,
    backgroundColor:'#f8f8f8',
    
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  Input:{
    fontSize: 35,
    borderColor:'red',
  },
  Image2:{
    height:250,
    width:250,
    alignContent:'center'
  }
  });
export default register