import React from "react";
import {Text,  View, ImageBackground, TextInput, StyleSheet, Image} from 'react-native';
import { Card} from "@rneui/themed";
import { doc, setDoc, updateDoc} from "firebase/firestore"
import { database} from "../../../../../../Data/Repositories/FirebaseConfig/fbconfig"
import { ImagesUrisEnum } from "../../../../../Enums/AppImagesUris"
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button,Icon,Switch, checked } from '@rneui/themed';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import  { useState } from "react";
import { update } from "firebase/database";

function DetailsScreen({ route, navigation }) {
  const {item} = route.params;

  const [data, setData] = React.useState({
    Name: item.name,
    Description: item.description,
    Price: `${item.price}`,
    Amount: `${item.amount}`,
    Offert: `${item.offert}`,
  },);

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

  

  async function editar(){
      const editRef = doc(database, `product`, `${item.id}`);
      await updateDoc(editRef, {
          "name" : data.Name,
          "price" : data.Price,
          "description": data.Description,
          "amount": data.Amount,
          
      });   
    }




//     async function crear() {
//       const editRef = doc(database, `product`, `${item.id}`);
//       const data = {
//         "name" : data.Name,
//         "price" : data.Price,
//         "description": data.Description,
//         "amount": data.Amount,
//         "category": data.category
//       };
// const res = await db.collection('product').doc('').set(data);
    
  



// configuracion del switch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    
    <View style={{flex:1, backgroundColor:"#1899c5"}}>
      <View style={{flex:1, marginVertical:20, marginHorizontal:20, backgroundColor:"white", borderRadius:20}}>
        <View style={{height:"30%", width:"100%", alignSelf:"center"}}>
          <Image source={{uri: item.imageurl}} style={{height: "95%", width:"60%", marginTop: 5, alignSelf:"center"}}/>
        </View>

        <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }}>
        <View>
        <Text style={styles.texto}>Nombre del articulo: </Text>
          <TextInput
            value={data.Name}
            onChangeText={(e) => setData({...data, Name: e})}
            style={styles.Inputicon}
          />
           <Text style={styles.texto}>Descripcion: </Text>
          <TextInput
            value={data.Description}
            onChangeText={(e) => setData({...data, Description: e})}
            style={styles.Inputicon}
          />
           <Text style={styles.texto}>Precio : </Text>
          <TextInput
            value={data.Price}
            onChangeText={(e) => setData({...data, Price: e})}
            style={styles.Inputicon}
          />
          <View  style={{ flexDirection: 'row',justifyContent: 'space-between'}}>
           <Text  style={{marginLeft:15}}>cantidad en stock: </Text>
           
          <TextInput
            value={data.Amount}
            onChangeText={(e) => setData({...data, Amount: e})}
            style={{height:30, width:30, borderRadius:10, fontSize:15,marginTop:20, marginRight:-5,backgroundColor:'#1899c5'}}
          />
            <Text  >está en oferta?: </Text>


            <Switch style={{ marginTop:20, marginRight:50}}
        trackColor={{ false: "#767577", true: "green" }}
        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
         </View>
        </View>
       
        
        <View style={styles.Button}>

        <Button   onPress={()=>navigation.goBack()} type="solid" style={{height:40, width:120}}>
          Volver
          <Icon name="home" color="white" />
          </Button>


        <Button  onPress={()=>editar()} type="solid" style={{height:40, width:120}}>
          Actualizar
          <Icon name="refresh" color="white" />
          </Button>
       
       
        
        </View>
        </KeyboardAwareScrollView>
      </View>
        
    </View>
    
    
  );
}

const styles = StyleSheet.create({

  Inputicon:{
   height: 30, 
   marginBottom:15,
   width:300,
   fontSize: 15,
   color:"black",
   borderRadius: 10,
   backgroundColor:'#1899c5',
   alignSelf:"center"
  },
  texto:{
    fontSize:16,
    paddingLeft:40
  },
  Button:{
    margin: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
  });

export default DetailsScreen;
