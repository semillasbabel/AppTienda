import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput, Alert } from 'react-native'
import React from 'react'
import { Button, Image, Input } from "@rneui/themed";
import register from '../Register/register'
import { color } from '@rneui/base';
import { useNavigation } from "@react-navigation/native";
import { handleSingIn } from "../../../Data/Services/AuthFirebase/SingIn/singIn"



const image = { uri: "https://media.idownloadblog.com/wp-content/uploads/2020/05/Vector-wave-iPhone-wallpaper-Arthur1992aS-iDownloadBlog-6-710x1536.png" };


const Loggin = () => {

  const [userSend, setUserSend] = React.useState({
    User: "",
    Password: "",
  });
  const navigation = useNavigation();

  const validacion = ()=>{
    const retorno = handleSingIn(userSend.User, userSend.Password)
    if (retorno === "Error") {
      Alert.alert("", 'Correo y contraseña incorrectos')
    } else {
      if (retorno === "hugo@gmail.com") {
        Alert.alert("", 'Bienvenido Administrador')
      } else {
        Alert.alert("", `Bienvenido: ${retorno}`)
      }
    }

    
    // if (handleSingIn(userSend.User, userSend.Password)) {
    // } else {
    //   Alert.alert("", 'Correo y contraseña incorrectos')
    // }
  }


  return (
   
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Image  style={{ width: 400, height: 300, justifyContent: "center",}}
          source={require("../../../../assets/logo.png")}></Image>

        <Text style={styles.TEXTO}>BIENVENIDO</Text>

          <TextInput
                  placeholder='Usuario'
                  value={userSend.User}
                  textContentType="emailAddress"
                  onChangeText={(e) => setUserSend({...userSend, User: e})}
                  style={{ height: 50,borderBottomWidth: 3, color:"red", borderBottomColor: "#361659"}}
          />

          <TextInput
                placeholder='Contraseña'
                value={userSend.Password}
                textContentType="password"
                secureTextEntry
                onChangeText={(e) => setUserSend({...userSend, Password: e})}
                style={{ height: 50,borderBottomWidth: 3,color:"red", borderBottomColor: "#361659"}}
          />

        <Button style={styles.botton} onPress={()=>validacion()} title={'Ingresar'} > Ingresar</Button>
       
        <Text style={styles.TEXTO}>NO ESTÁ REGISTRADO?</Text>
       <TouchableOpacity>
        <Text style={styles.TEXTO} onPress={() => navigation.navigate("Register") }>REGISTRESE AQUI</Text>
       </TouchableOpacity>
      </ImageBackground>
      
  
   
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
    color:'#fdd835',
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
export default Loggin