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

      <View style={{height: "15%", }}/>



      <Card>
      <Text> {item.name}</Text>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          />
         <Text>{item.imageurl}</Text>
              <Text>Articulo: {item.name}</Text>
              <Text>Caracteristicas: {item.description}</Text>
              <Text>Precio(iva){item.price}</Text>
              <Text>cantidad en stock: {item.amount}</Text>
              <Button
                title="Volver"
                onPress={()=>navigation.goBack()}
                />
                <View style={{width: 50}}/>
                <Button
                title="Agregar al Carrito"
                />
        </Card>




            <View style={{flex:1, width:"40%", alignItems:"center", alignContent:"center", alignSelf:"center" }}>
              <Text style={{fontSize: 25, marginTop: 20, alignSelf: "center", fontWeight:'bold', color:'#890000'}}>{item.name}</Text>
              <Text>{item.imageurl}</Text>
              <Text>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text>{item.price}</Text>
              <Text>{item.amount}</Text>

              <View style={{flex:1, flexDirection:"row", marginTop: 50}}>
                <Button
                title="Volver"
                onPress={()=>navigation.goBack()}
                />
                <View style={{width: 50}}/>
                <Button
                title="Agregar al Carrito"
                />
              </View>

            </View>
    </View>
  );
}

export default DetailsScreen;