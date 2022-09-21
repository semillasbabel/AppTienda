import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, Image, Input } from "@rneui/themed";

import { SafeAreaView } from 'react-native-safe-area-context'
import { color } from '@rneui/base';




const image = { uri: "https://media.idownloadblog.com/wp-content/uploads/2020/05/Vector-wave-iPhone-wallpaper-Arthur1992aS-iDownloadBlog-6-710x1536.png" };


const loggin = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Image  style={{ width: 400, height: 300, justifyContent: "center",}}
          source={require("./assets/logo.png")}></Image>

        <Text style={styles.TEXTO}>BIENVENIDO</Text>
          <Input
            placeholder=" Usuario"
            leftIcon={{ type: 'font-awesome', name: 'user', size: 35, color:'red' }}/>
          <Input
            placeholder=" CONTRASEÑA"
            leftIcon={{ type: 'font-awesome', name: 'lock', size: 35, color:'red' }}/>
        <Button style={styles.botton} title={'Ingresar'}></Button>
       
        <Text style={styles.TEXTO}>NO ESTÁ REGISTRADO?</Text>
       <TouchableOpacity>
        <Text style={styles.TEXTO}>REGISTRESE AQUI </Text>
       </TouchableOpacity>
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
    textAlign:'center'
  },
  container: {
    flex: 1,
    backgroundColor:'#f8f8f8'
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
export default loggin