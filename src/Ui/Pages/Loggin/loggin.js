import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput, ActivityIndicator, Alert, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { Button, Image, Input } from "@rneui/themed";
import register from '../Register/register'
import { color } from '@rneui/base';
import { useNavigation } from "@react-navigation/native";
import { firebaseApp, database } from '../../../Data/Repositories/FirebaseConfig/fbconfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { controllerSingIn } from '../../../Domain/Repositories/Firebase/Auth/singIn';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const auth = getAuth(firebaseApp);

const image = { uri: "https://media.idownloadblog.com/wp-content/uploads/2020/05/Vector-wave-iPhone-wallpaper-Arthur1992aS-iDownloadBlog-6-710x1536.png" };

const Loggin = () => {

  const navigation = useNavigation();

  const [userSend, setUserSend] = React.useState({
    Email: "",
    Password: "",
  });

  const [isLoading, setLoading] = React.useState("NO");


  async function getRol(uid){
    const docuRef = doc(database, `users/${uid}`)
    const docCifrado = await getDoc(docuRef);
    return docfinal = docCifrado.data().rol;
  }

  async function logIn(){
    navigation.navigate("User")
    // if (await controllerSingIn(userSend.Email, userSend.Password)) {
    //   setLoading("SI")
    //   if (await getRol(auth.currentUser.uid) === "Admin") {
    //     setLoading("NO")
    //     navigation.navigate("Admin")
    //   } else {
    //     setLoading("NO")
    //     navigation.navigate("User")
    //   }
    // }
  }

  return (
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={{margin:10, marginTop:50}}>
        <View>
      <Image  style={{ width: 400, height: 275, justifyContent: "center",}}
              source={require("../../../../assets/logo.png")}>
      </Image>
      </View>
      
       </View> 
         
       <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }}>
          <TextInput
                  placeholder='Correo Electronico'
                  value={userSend.Email}
                  textContentType="emailAddress"
                  onChangeText={(e) => setUserSend({...userSend, Email: e})}
                  style={{ height: 40,borderBottomWidth: 3, marginLeft:50,marginBottom:15,width:300,fontSize: 20,color:"#1899c5", borderRadius: 10,backgroundColor:'white',borderBottomColor: "#f8f8f8"}}
          />

          <TextInput
                placeholder='Contraseña'
                value={userSend.Password}
                textContentType="password"
                secureTextEntry
                onChangeText={(e) => setUserSend({...userSend, Password: e})}
                style={{  height: 40,borderBottomWidth: 3, marginLeft:50,marginBottom:15,width:300,fontSize: 20,color:"#1899c5", borderRadius: 10,backgroundColor:'white',borderBottomColor: "#f8f8f8"}}/>

          <Button style={styles.botton} onPress={()=>logIn()} title={'Ingresar'} > Ingresar</Button>

          <View>{isLoading === "SI" ? <ActivityIndicator size="large" color="#1899c5"/> : <Text/>}</View>

          <Text style={styles.TEXTO}>NO ESTÁ REGISTRADO?</Text>
        
          <TouchableOpacity>
            <Text style={styles.TEXTO} onPress={() => navigation.navigate("Register") }>REGISTRESE AQUI</Text>
          </TouchableOpacity>
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
