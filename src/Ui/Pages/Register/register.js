import { View, Text, StyleSheet, ImageBackground, ActivityIndicator, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native'
import React from 'react'
import { Button, Image, Input } from "@rneui/themed";
import { SafeAreaView } from 'react-native-safe-area-context'
import { color } from '@rneui/base';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { domainRegister, pruebaclass } from '../../../Domain/Repositories/Firebase/Auth/userRegister';




const image = { uri: "https://media.idownloadblog.com/wp-content/uploads/2020/05/Vector-wave-iPhone-wallpaper-Arthur1992aS-iDownloadBlog-6-710x1536.png" };


const Register = () => {
  const navigation = useNavigation();

  const [estado, setEstado] = React.useState("Una vez ingresado los datos presione el boton registrar");
  const [isLoading, setLoading] = React.useState("NO");

  const [userRegister, setUserSend] = React.useState({
    email: "",
    Password: "",
    name: "",
    address: "",
  });

  async function registro(){
    setLoading("SI")
    if (await domainRegister(userRegister.email, userRegister.Password, userRegister.name,userRegister.address)) {
      Alert.alert("", 'Registro Exitoso')
      navigation.goBack()
    }
    else{
      setLoading("NO")
      setEstado("Datos Incorrectos")
    }
  }

  return (
   
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
     
      <ScrollView>
        <Text style={styles.TEXTO}>Registro de Usuarios</Text>
        <View style={{flexDirection:'row', alignItems: 'baseline', marginRight:20}}>
          <Icon   name="at" size={30} color="#1eb6fa" style={{marginLeft:10}}/>
         <TextInput
          placeholder='Correo Electronico'
          placeholderTextColor={"#1899c5"}
          value={userRegister.email}
          textContentType="emailAddress"
          onChangeText={(e) => setUserSend({...userRegister, email: e})}
          style={{  height: 40,borderBottomWidth: 3, marginLeft:40,marginBottom:15,width:300,fontSize: 20,color:"", borderRadius: 10,backgroundColor:'white',borderBottomColor: "#f8f8f8"}}/>
        </View>
        <View style={{flexDirection:'row', alignItems: 'baseline', marginRight:20}}>
          <Icon   name="lock" size={35} color="#1eb6fa"  style={{marginLeft:10}}/>
         <TextInput
          placeholder='contraseña'
          placeholderTextColor={"#1899c5"}
          value={userRegister.Password}
          secureTextEntry
          textContentType="password"
          onChangeText={(e) => setUserSend({...userRegister, Password: e})}
          style={{  height: 40,borderBottomWidth: 3, marginLeft:40,marginBottom:15,width:300,fontSize: 20,color:"", borderRadius: 10,backgroundColor:'white',borderBottomColor: "#f8f8f8"}}/>
        </View>
        <View style={{flexDirection:'row', alignItems: 'baseline', marginRight:20}}>
          <Icon   name="user" size={35} color="#1eb6fa"  style={{marginLeft:10}}/>
        <TextInput
          placeholder='Nombre Completo'
          placeholderTextColor={"#1899c5"}
          value={userRegister.name}
          textContentType="name"
          onChangeText={(e) => setUserSend({...userRegister, name: e})}
          style={{  height: 40,borderBottomWidth: 3, marginLeft:40,marginBottom:15,width:300,fontSize: 20,color:"", borderRadius: 10,backgroundColor:'white',borderBottomColor: "#f8f8f8"}}/>
        </View>
        <View style={{flexDirection:'row', alignItems: 'baseline', marginRight:20}}>
           <Icon   name="home" size={30} color="#1eb6fa" style={{marginLeft:10}}/>
          <TextInput
            placeholder='Domicilio' 
            placeholderTextColor={"#1899c5"}
            value={userRegister.address}
            textContentType="addressCityAndState"
            onChangeText={(e) => setUserSend({...userRegister, address: e})}
            style={{  height: 40,borderBottomWidth: 3, marginLeft:37,marginBottom:15,width:300,fontSize: 20,color:"", borderRadius: 10,backgroundColor:'white',borderBottomColor: "#f8f8f8"}}/>
        
        </View>
        <Text style={{color:"red", alignContent:'center', alignSelf:'center', fontWeight:'bold'}}>{estado}</Text>
        <View>{isLoading === "SI" ? <ActivityIndicator size="large" color="#1899c5"/> : <Text/>}</View>
        <Button style={{height:120, width:150, alignItems:'center', marginLeft:125, paddingVertical:25}}
          title={'Registrar'}
          onPress={()=>registro()}
        />
        

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