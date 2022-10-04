import React from "react";
import {Text,  View, Button, ImageBackground} from 'react-native';
import { Card} from "@rneui/themed";
import { doc, setDoc} from "firebase/firestore"
import { database, firebaseApp } from "../../../../../../Data/Repositories/FirebaseConfig/fbconfig"
import { getAuth } from 'firebase/auth';
import { ImagesUrisEnum } from "../../../../../Enums/AppImagesUris"

const auth = getAuth(firebaseApp);


function DetailsScreen({ route, navigation }) {
  const {item} = route.params;

  function addToCar(){
    const docuRef = doc(database, `shoppingCar/${auth.currentUser.uid}` )
    const ref = doc(database, `product/${item.id}`)
    setDoc(docuRef, {
      [`${item.id}`]:ref
    },{merge: true})
  }

  return (
    <ImageBackground source={{uri: ImagesUrisEnum.backgroundImage.value}} resizeMode="cover" style={{flex:1}}>
    <View style={{flex: 1, backgroundColor: "transparent", marginBottom: 20}}>
      <View style={{height: 15, }}/>
      <Card containerStyle={{flex:1, backgroundColor: 'white'}} >
      <Text style={{fontSize:18}}> {item.name}</Text>
          <Card.Divider />
          
          <View style={{alignSelf:"center", height: "40%", width:"70%", marginBottom: 20}}>
          <Card.Image
            style={{ margin:10, height:"100%", width:"90%", alignSelf:"center"}}
            source={{uri: item.imageurl}}/>
          </View>

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
