import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
// import { singOutController } from "../../../Domain/Repositories/Firebase/Auth/singOut"

function Admin() {
  const navigation = useNavigation();
  const auth = getAuth();

  async function singout(){
      // if (await singOutController(auth)) {
      //   console.log("Se cerro la sesión")
      //   navigation.navigate("Loggin")
      // } else {
      //   console.log("Error al cerrar la sesión")
      // }
  }

 

  return (
    <View>
      <View style={{height:100}}/>
      <Text>administrador</Text>
      <Button
        title='Cerrar Sesion'
        onPress={singout}
      />
    </View>
  )
}

export default Admin