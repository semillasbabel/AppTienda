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
        <Text style={styles.textout}>*Asegurese de haber realizado Su compra</Text>
        <Text style={styles.textout}>*Recuerde Verificar sus datos del pedido</Text>
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