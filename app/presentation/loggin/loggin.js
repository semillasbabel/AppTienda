import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import { Button, Image } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { auth } from '../../data/firebaseConfig/config';
import { AppRoles } from "../enums/appRoles" 
import { AppImages } from "../enums/appImages"
import { AppActivityIndicator } from "../enums/appActivityIndicator"
import { MainRoutesEnum } from "../enums/routesName"
import { PlaceholdersEnum, TextInputEnum } from "../enums/inputsEnum"
import { styles } from './styles/styles';
import { GetRolServiceDomain } from "../../domain/auth/service/getRolService"
import { SignInServiceDomain } from "../../domain/auth/service/signInService"
import { validateEmail, validatePassword } from "../enums/expresionesRegulares"


const Loggin = () => {
  const navigation = useNavigation();
  const [userSend, setUserSend] = React.useState({Email: "",Password: ""});
  const [isLoading, setLoading] = React.useState(AppActivityIndicator.off.value);
  const [note, setnote] = React.useState("");

  const signInService = new SignInServiceDomain();
  const rolService = new GetRolServiceDomain();

  async function logIn(){
    
    if (validateEmail(userSend.Email)) {
      setnote("");
      if (validatePassword(userSend.Password)) {
        setLoading(AppActivityIndicator.on.value)
        if (await signInService.signIn(userSend.Email,userSend.Password)) {
          switch (await rolService.getRol(auth.currentUser.uid)) {
            case AppRoles.admin.value:
              setLoading(AppActivityIndicator.off.value)
              navigation.navigate(MainRoutesEnum.admin.value)
            break;
          
            case AppRoles.client.value:
              setLoading(AppActivityIndicator.off.value)
              navigation.navigate(MainRoutesEnum.client.value)
            break;

            default:
              setLoading(AppActivityIndicator.off.value)
              break;
          }
        }
        else{
          setLoading(AppActivityIndicator.off.value)
        }
      } else {
        setnote("La contraseña es incorrecta");
      }
    }else{
      setnote("El email es incorrecto");
    }
  }

  return (
    <ImageBackground source={{uri: AppImages.backgroundImage.value}} resizeMode="cover" style={styles.image}>

      <View style={{margin:10, marginTop:50, alignSelf:"center"}}>
        <View>
          <Image style={{ width: 400, height: 275}}
            source={require("../../../assets/logo.png")}/>
        </View>        
      </View> 
         
      <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }}>

        <View style={{alignSelf: "center", alignItems: "center"}}>

          <TextInput
            placeholder={PlaceholdersEnum.logginEmail.value}
            value={userSend.Email}
            textContentType={TextInputEnum.logginEmail.value}
            onChangeText={(e) => setUserSend({...userSend, Email: e})}
            style={styles.Inputicon}/>
          
          <TextInput
            placeholder={PlaceholdersEnum.logginPassword.value}
            value={userSend.Password}
            textContentType={TextInputEnum.logginPassword.value}
            secureTextEntry
            onChangeText={(e) => setUserSend({...userSend, Password: e})}
            style={styles.Inputicon}/>

          <Text style={{color:"red", fontSize:25}}>{note}</Text>
          <View style={{height:10}}/>
          <Button style={styles.botton} onPress={()=>logIn()} title={'Ingresar'}>Ingresar</Button>

          <View>{isLoading === AppActivityIndicator.on.value ? <ActivityIndicator size="large" color="#1899c5"/> : <Text/>}</View>

          <Text  style={styles.TEXTO}>NO ESTÁ REGISTRADO?</Text>
          
          <TouchableOpacity>
            <Text  style={styles.TEXTO} onPress={() => navigation.navigate(MainRoutesEnum.register.value) }>REGISTRESE AQUI</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAwareScrollView>
       
    </ImageBackground>
  )
}


export default Loggin
