import React from 'react'
import {View,  Alert, Button, StyleSheet,ImageBackground} from "react-native"
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from "@rneui/themed";

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
        // setSignOut(true);
    }

    const image = { uri: "https://media.idownloadblog.com/wp-content/uploads/2020/05/Vector-wave-iPhone-wallpaper-Arthur1992aS-iDownloadBlog-6-710x1536.png" };

  return (
    <ImageBackground source={image} resizeMode="cover" style={{flex:1}}>
    <View>
      
        <View style={{backgroundColor:'transparent', height:125, width:350, marginStart: 40, marginTop:30,borderRadius:15}}> 
        <Text style={styles.textout}>*Para Cerrar Sesion presione el boton</Text>
        <Text style={styles.textout}>*Asegurese de haber realizado Su compra</Text>
        <Text style={styles.textout}>*Recuerde Verificar sus datos del pedido</Text>
        </View>


        <TouchableOpacity
        style={styles.button}
        onPress={salir}>
        <Text style={styles.textb}>Cerrar Sesion</Text>
      </TouchableOpacity>
        
    </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
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
    backgroundColor: "#27272f",
    padding: 10,
    height:50,
    width:200
  
  },
  image: {
    flex: 1,
  },

  });

export default Salir