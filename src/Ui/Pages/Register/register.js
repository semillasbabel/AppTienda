import { View, Text, StyleSheet, ImageBackground, ActivityIndicator, ScrollView, TextInput, Alert } from 'react-native'
import React from 'react'
import { Button} from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { domainRegistry} from '../../../Domain/Repositories/Firebase/Auth/userRegister';
import { ClearRegisterData, RegisterStateNote } from './Constants/registerKeys';
import { ImagesUrisEnum } from "../../Enums/AppImagesUris";
import { ActivityStateEnum } from "../../Enums/ActivityIndicatorState"
import { PlaceholdersEnum, TextInputEnum, RegisterInputsIcons } from "../../Enums/InputsEnum"


const Register = () => {
  const navigation = useNavigation();
  const registry = new domainRegistry();

  const [estado, setEstado] = React.useState(RegisterStateNote.inicial.value);
  const [isLoading, setLoading] = React.useState(ActivityStateEnum.off.value);
  const [userRegister, setUserSend] = React.useState({
    email: "",
    Password: "",
    name: "",
    address: "",
  });

  async function registro(){
    setLoading(ActivityStateEnum.on.value)
    await registry.setEmail(userRegister.email).setPassword(userRegister.Password).setName(userRegister.name).setAddress(userRegister.address).userRegistry();

    if (registry.getRegistryState) {
      Alert.alert(RegisterStateNote.registroExitoso.value)
      setUserSend({email: ClearRegisterData.clear.value, Password: ClearRegisterData.clear.value, name: ClearRegisterData.clear.value, address: ClearRegisterData.clear.value})
      setEstado(RegisterStateNote.inicial.value)
      setLoading(ActivityStateEnum.off.value)
      navigation.goBack()
    }
    else{
      setLoading(ActivityStateEnum.off.value)
      setEstado(RegisterStateNote.error.value)
    }
  }

  return (
   
    <ImageBackground source={{uri: ImagesUrisEnum.backgroundImage.value}} resizeMode="cover" style={styles.image}>
     
      <ScrollView>
        <Text style={styles.TEXTO}>Registro de Usuarios</Text>
        <View style={{flexDirection:'row', alignItems: 'baseline', marginRight:20}}>
          <Icon   name={RegisterInputsIcons.registerEmail.value} size={30} color="#1eb6fa" style={{marginLeft:10}}/>
         <TextInput
          placeholder={PlaceholdersEnum.registerEmail.value}
          placeholderTextColor={"#1899c5"}
          value={userRegister.email}
          textContentType={TextInputEnum.registerEmail.value}
          onChangeText={(e) => setUserSend({...userRegister, email: e})}
          style={{  height: 40,borderBottomWidth: 3, marginLeft:40,marginBottom:15,width:300,fontSize: 20,color:"", borderRadius: 10,backgroundColor:'white',borderBottomColor: "#f8f8f8"}}/>
        </View>
        <View style={{flexDirection:'row', alignItems: 'baseline', marginRight:20}}>
          <Icon   name={RegisterInputsIcons.registerPassword.value} size={35} color="#1eb6fa"  style={{marginLeft:10}}/>
         <TextInput
          placeholder={PlaceholdersEnum.registerPassword.value}
          placeholderTextColor={"#1899c5"}
          value={userRegister.Password}
          secureTextEntry
          textContentType={TextInputEnum.registerPassword.value}
          onChangeText={(e) => setUserSend({...userRegister, Password: e})}
          style={{  height: 40,borderBottomWidth: 3, marginLeft:40,marginBottom:15,width:300,fontSize: 20,color:"", borderRadius: 10,backgroundColor:'white',borderBottomColor: "#f8f8f8"}}/>
        </View>
        <View style={{flexDirection:'row', alignItems: 'baseline', marginRight:20}}>
          <Icon   name={RegisterInputsIcons.registerName.value} size={35} color="#1eb6fa"  style={{marginLeft:10}}/>
        <TextInput
          placeholder={PlaceholdersEnum.registerName.value}
          placeholderTextColor={"#1899c5"}
          value={userRegister.name}
          textContentType={TextInputEnum.registerName.value}
          onChangeText={(e) => setUserSend({...userRegister, name: e})}
          style={{  height: 40,borderBottomWidth: 3, marginLeft:40,marginBottom:15,width:300,fontSize: 20,color:"", borderRadius: 10,backgroundColor:'white',borderBottomColor: "#f8f8f8"}}/>
        </View>
        <View style={{flexDirection:'row', alignItems: 'baseline', marginRight:20}}>
           <Icon   name={RegisterInputsIcons.registerAddress.value} size={30} color="#1eb6fa" style={{marginLeft:10}}/>
          <TextInput
            placeholder={PlaceholdersEnum.registerAddress.value} 
            placeholderTextColor={"#1899c5"}
            value={userRegister.address}
            textContentType={TextInputEnum.registerAddress.value}
            onChangeText={(e) => setUserSend({...userRegister, address: e})}
            style={{  height: 40,borderBottomWidth: 3, marginLeft:37,marginBottom:15,width:300,fontSize: 20,color:"", borderRadius: 10,backgroundColor:'white',borderBottomColor: "#f8f8f8"}}/>
        
        </View>
        <Text style={{color:"red", alignContent:'center', alignSelf:'center', fontWeight:'bold'}}>{estado}</Text>
        <View>{isLoading === ActivityStateEnum.on.value ? <ActivityIndicator size="large" color="#1899c5"/> : <Text/>}</View>
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