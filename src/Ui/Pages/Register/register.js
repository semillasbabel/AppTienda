import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native'
import React from 'react'
import { Button, Image, Input } from "@rneui/themed";

import { SafeAreaView } from 'react-native-safe-area-context'
import { color } from '@rneui/base';
import { useNavigation } from "@react-navigation/native";
import { registerController } from '../../../Domain/Repositories/Firebase/Auth/userRegister';




const image = { uri: "https://media.idownloadblog.com/wp-content/uploads/2020/05/Vector-wave-iPhone-wallpaper-Arthur1992aS-iDownloadBlog-6-710x1536.png" };


const Register = () => {
  const navigation = useNavigation();

  const [estado, setEstado] = React.useState("Una vez ingresado los datos precione el boton registrar");

  const [userRegister, setUserSend] = React.useState({
    email: "",
    Password: "",
    name: "",
    address: "",
  });

  async function registro(){
    if (await registerController(userRegister.email, userRegister.Password, userRegister.name,userRegister.address)) {
      Alert.alert("", 'Registro Exitoso')
      navigation.goBack()
    }
    else{
      setEstado("Datos Incorrectos")
    }
  }

  return (
   
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
     
        <ScrollView>
        <Text style={styles.TEXTO}>Registro de Usuarios</Text>
        <TextInput
          placeholder='Email'
          placeholderTextColor={"#f8f8f8"}
          value={userRegister.email}
          textContentType="emailAddress"
          onChangeText={(e) => setUserSend({...userRegister, email: e})}
          style={{ height: 50,borderBottomWidth: 3, fontSize: 20,color:"red", borderBottomColor: "#f8f8f8"}}
        />
        <TextInput
          placeholder='Password'
          placeholderTextColor={"#f8f8f8"}
          value={userRegister.Password}
          secureTextEntry
          textContentType="password"
          onChangeText={(e) => setUserSend({...userRegister, Password: e})}
          style={{ height: 50,borderBottomWidth: 3, fontSize: 20,color:"red", borderBottomColor: "#f8f8f8"}}
        />
        <TextInput
          placeholder='Name'
          placeholderTextColor={"#f8f8f8"}
          value={userRegister.name}
          textContentType="name"
          onChangeText={(e) => setUserSend({...userRegister, name: e})}
          style={{ height: 50,borderBottomWidth: 3, fontSize: 20,color:"red", borderBottomColor: "#f8f8f8"}}
        />
        <TextInput
            placeholder='Address'
            placeholderTextColor={"#f8f8f8"}
            value={userRegister.address}
            textContentType="addressCityAndState"
            onChangeText={(e) => setUserSend({...userRegister, address: e})}
            style={{ height: 50,borderBottomWidth: 3, fontSize: 20,color:"red", borderBottomColor: "#f8f8f8"}}
          />
        <Button
          title={'Registrar'}
          onPress={()=>registro()}
        />
        <Text style={{color:"red"}}>{estado}</Text>

       </ScrollView>
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
export default Register