import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

function Admin() {
  const navigation = useNavigation();
  const auth = getAuth();

  function singout(){
    signOut(auth).then(() => {
      console.log("Se cerro la sesión")
      navigation.navigate("Loggin")
    }).catch((error) => {
      console.log(error)
    });
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