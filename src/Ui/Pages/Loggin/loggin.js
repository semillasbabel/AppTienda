import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import { Button, Image } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { firebaseApp } from '../../../Data/Repositories/FirebaseConfig/fbconfig';
import { getAuth } from 'firebase/auth';
import { domainSignIn, domainGetRol } from '../../../Domain/Repositories/Firebase/Auth/SignIn';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { rolesKeys } from "./Constants/keysLoggin"
import { routesName, imagesUrl, activityState } from "../../Utils/constants"

const domainLogIn = new domainSignIn();
const getRol = new domainGetRol();
const auth = getAuth(firebaseApp);
const image = { uri: imagesUrl.fondo };

const Loggin = () => {
  const navigation = useNavigation();
  const [userSend, setUserSend] = React.useState({Email: "",Password: ""});
  const [isLoading, setLoading] = React.useState(activityState.off);

  
  async function logIn(){
    setLoading(activityState.on)
    await domainLogIn.setEmail(userSend.Email).setPassword(userSend.Password).signIn();
    if (domainLogIn.getSignIn) {

      await getRol.setUid(auth.currentUser.uid).search();
      switch (getRol.getRol) {
        case rolesKeys.admin:
          setLoading(activityState.off)
          // navigation.navigate(routesName.admin)
          break;

        case rolesKeys.client:
          setLoading(activityState.off)
          navigation.navigate(routesName.client)
          break;

        default:
          setLoading(activityState.off)
          break;
      }
    }
    else setLoading(activityState.off)
  }

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>

      <View style={{margin:10, marginTop:50, alignSelf:"center"}}>
        <View>
          <Image style={{ width: 400, height: 275}}
            source={require("../../../../assets/logo.png")}/>
        </View>        
      </View> 
         
      <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }}>

        <View style={{alignSelf: "center", alignItems: "center"}}>

          <TextInput
            placeholder='Correo Electronico'
            value={userSend.Email}
            textContentType="emailAddress"
            onChangeText={(e) => setUserSend({...userSend, Email: e})}
            style={{ height: 40, marginBottom:15, width:300, fontSize: 20, color:"#1899c5", borderRadius: 10, backgroundColor:'white',}}
          />
          
          <TextInput
            placeholder='Contraseña'
            value={userSend.Password}
            textContentType="password"
            secureTextEntry
            onChangeText={(e) => setUserSend({...userSend, Password: e})}
            style={{  height: 40, marginBottom:15, width:300, fontSize: 20, color:"#1899c5", borderRadius: 10,backgroundColor:'white'}}
          />

          <Button style={styles.botton} onPress={()=>logIn()} title={'Ingresar'}>Ingresar</Button>

          <View>{isLoading === activityState.on ? <ActivityIndicator size="large" color="#1899c5"/> : <Text/>}</View>

          <Text style={styles.TEXTO}>NO ESTÁ REGISTRADO?</Text>
          
          <TouchableOpacity>
            <Text style={styles.TEXTO} onPress={() => navigation.navigate(routesName.register) }>REGISTRESE AQUI</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAwareScrollView>
       
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
    width:220,
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
    textAlign:'center',
  },
  container: {
    flex: 1,
    backgroundColor:'#f8f8f8'
  },
  image: {
    flex: 1,
 
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
