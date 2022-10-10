import React from 'react'
import {View,  Alert, ImageBackground} from "react-native"
import { useNavigation } from "@react-navigation/native";
import { Button, Icon, Text } from "@rneui/themed";
import { styles } from './styles-exit/styles';

const Salir = () => {
    const navigation = useNavigation();

    function salir(){
        Alert.alert(
            "Salir",
            "¿Desea Salir?",
            [
              {
                text: "NO",
                onPress: () => {
                  navigation.goBack();
                },
                style: "cancel"
              },
              { text: "SI", onPress:()=>{
                navigation.navigate("Loggin");
              }
              }
            ]
          );
    }

    const image = { uri: "https://media.idownloadblog.com/wp-content/uploads/2020/05/Vector-wave-iPhone-wallpaper-Arthur1992aS-iDownloadBlog-5-710x1536.png" };

  return (
    <ImageBackground source={image} resizeMode="cover" style={{flex:1}}>
    <View>
      
        <View style={{backgroundColor:'transparent', height:125, width:350, marginStart: 40, marginTop:30,borderRadius:15}}> 
        <Text style={styles.textout}>*Para Cerrar Sesion presione el boton</Text>
        <Text style={styles.textout}>*Asegurese de haber realizado sus cambios</Text>
        <Text style={styles.textout}>*los cambios son en tiempo real</Text>
        </View>


        

      
    <Button style={styles.button} type="solid" title={'Cerrar session'} onPress={()=>salir()}>
    Cerrar sesion  
  <Icon name="cancel" color="white" />
</Button>

        
    </View>
    </ImageBackground>
  )
}

export default Salir
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    textout: {
        fontSize:18,
        justifyContent:'center',
        color:'#fdd835',
     
    },
    textb: {
      fontSize:18,
      justifyContent:'center',
      color:'red',
   
     },
    button: {
      margin:100,
      alignItems: "center",
      
      padding: 10,
      height:70,
      width:200
    
    },
    image: {
      flex: 1,
    },
  
    });
  