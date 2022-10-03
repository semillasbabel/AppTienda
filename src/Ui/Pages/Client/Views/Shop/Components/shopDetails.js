import React from "react";
import {Text, Image, View, Button, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import { Card, Icon } from "@rneui/themed";
import { color } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { doc, setDoc, collection, addDoc, updateDoc } from "firebase/firestore"
import { database, firebaseApp } from "../../../../../../Data/Repositories/FirebaseConfig/fbconfig"
import { getAuth } from 'firebase/auth';

const auth = getAuth(firebaseApp);

function DetailsScreen({ route, navigation }) {
  const {item} = route.params;

  function addToCar(){

    const docuRef = doc(database, `shoppingCar/${auth.currentUser.uid}` )
    const ref = doc(database, `product/${item.id}`)
    setDoc(docuRef, {
      [`${item.id}`]:ref
    },{merge: true})
    // console.log(item);

    // const docuRef = doc(database, `shoppingCar/${auth.currentUser.uid}` )
    // setDoc(docuRef, {
    //   "":""
    // },{merge: true})
    // // console.log(item);

  }

  return (
    <View style={{flex: 1, backgroundColor: "white", alignItems: "center"}}>

      <View style={{height: "20%", }}/>

      <ScrollView style={{alignSelf: "center", width: "100%"}}>

          <View style={{flex: 1, width:"100%", height:"100%", flexDirection: "row", alignSelf:"center" , alignItems:"center", alignContent:"center"}}>

            <View style={{flex:1, width:"40%", alignItems:"center", alignContent:"center", alignSelf:"center" }}>
              
              <Text style={{fontSize: 25, marginTop: 20, alignSelf: "center", fontWeight:'bold', color:'#890000'}}>{item.name}</Text>
              
              <Image source={{uri: item.imageurl}} style={{height: 250, width: 250, marginTop: 5}}/>

              <Text>{item.description}</Text>
              <Text>{item.price}</Text>
              <Text>{item.category}</Text>

              <View style={{flex:1, flexDirection:"row", marginTop: 50}}>
                <Button
                title="Volver"
                onPress={()=>navigation.goBack()}
                />
                <View style={{width: 50}}/>
                <Button
                title="Agregar al Carrito"
                onPress={()=>addToCar()}
                />
              </View>

            </View>

          </View>

        </ScrollView>


    </View>
  );
}

export default DetailsScreen;