import React from "react";
import {Text,  View, Button, ImageBackground} from 'react-native';
import { Card} from "@rneui/themed";
import { doc, setDoc} from "firebase/firestore"
import { getAuth } from 'firebase/auth';
import { AppImages } from "../../enums/appImages"
import { database, firebaseApp } from "../../../data/firebaseConfig/config"
import { styles } from "./styles/detailStyles"

const auth = getAuth(firebaseApp);

function DetailsScreen({ route, navigation }) {

  const {item} = route.params;

  async function addToCar(){
    const docuRef = doc(database, `shoppingCar${auth.currentUser.uid}/${item.id}` )
    setDoc(docuRef,{
      amount: item.amount,
      category: item.category,
      description: item.description,
      imageurl: item.imageurl,
      name: item.name,
      price: item.price,
      quantity: 1,
    },{merge: true})
  }

 

  return (
    <ImageBackground source={{uri: AppImages.backgroundImage.value}} resizeMode="cover" style={{flex:1}}>
    <View style={styles.ViewPrincipal}>
      <View style={{height: 15, }}/>
      <Card containerStyle={{flex:1, backgroundColor: 'white'}} >
      <Text style={{fontSize:18}}> {item.name}</Text>
          <Card.Divider />
          
          <View style={styles.ViewSecundario}>
          <Card.Image
            style={styles.cardImage}
            source={{uri: item.imageurl}}/>
          </View>

              <Text style={styles.textView} >Caracteristicas: {item.description}</Text>
              <Text style={styles.textView} >Precio(iva): ¢{item.price}</Text>
              <Text style={styles.textView} >cantidad en stock: {item.amount}</Text>
              
                <View style={{width: 50}}/>
                
                <Button
                title="Agregar al Carrito"
                onPress={()=>addToCar()}
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
