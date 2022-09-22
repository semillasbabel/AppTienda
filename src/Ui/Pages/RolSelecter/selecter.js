import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

function Selecter({route}) {
    const {user} = route.params;
  const auth = getAuth();
  const navigation = useNavigation();

  return (
    <View>
      <View style={{height:100}}/>
      <Text>rrrr</Text>
      <Text>{user.email}</Text>
      <Button
      title='volver'
      onPress={()=> navigation.goback()}
      />
    </View>
  )
}

export default Selecter