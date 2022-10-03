import React from "react";
import {Text,  View, Button,Image, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import { Card, Icon } from "@rneui/themed";
import { color } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { doc, setDoc, collection, addDoc, updateDoc } from "firebase/firestore"
import { database, firebaseApp } from "../../../../../../Data/Repositories/FirebaseConfig/fbconfig"
import { getAuth } from 'firebase/auth';
import { imagesUrl } from "../../../../../Utils/constants"

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

  const image = { uri: imagesUrl.fondo };
  return (
    <ImageBackground source={image} resizeMode="cover" style={{flex:1}}>
    <View style={{flex: 1, backgroundColor: "transparent", alignItems: "center"}}>

      <View style={{height: 15, }}/>



      <Card containerStyle={{ backgroundColor: '#1584c9' }} >
      <Text style={{fontSize:18}}> {item.name}</Text>
          <Card.Divider />
          <Card.Image
            style={{ marginTop:10, height:150, width:150, margin:100 }}
            source={{uri: item.imageurl}}
          />
         
             
              <Text style={{fontSize:18}} >Caracteristicas: {item.description}</Text>
              <Text style={{fontSize:18}} >Precio(iva): ¢{item.price}</Text>
              <Text style={{fontSize:18}} >cantidad en stock: {item.amount}</Text>
              
                <View style={{width: 50}}/>
                
                <Button
                title="Agregar al Carrito"
                />
                 <Card.Divider />
                <Button
                title="Volver"
                onPress={()=>navigation.goBack()}
                />
                 
        </Card>

        


          
    </View>
    </ImageBackground>
  );
}

export default DetailsScreen;
