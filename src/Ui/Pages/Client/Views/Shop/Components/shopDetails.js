import React from "react";
import {Text, Image, View, Button, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import { Card, Icon } from "@rneui/themed";
import { color } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";


function DetailsScreen({ route, navigation }) {
  const {item} = route.params;

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





      

      {/* <ScrollView style={{alignSelf: "center", width: "100%"}}>

          <View style={{flex: 1, width:"100", height:"100", flexDirection: "row", alignSelf:"center" , alignItems:"center", alignContent:"center",shadowOffset:5}}>
              <View style={{backgroundColor:'#126fad', width:"80%", height:"100%", flexDirection: 'column', alignSelf:"center" , alignItems:"center", alignContent:"center", borderRadius:25}}>
            <View style={{flex:1, width:"50%", alignItems:"center", alignContent:"center", alignSelf:"center" }}>
              <Text style={{fontSize: 20, marginTop: 20, alignSelf: "center", fontWeight:'bold', color:'white'}}>{item.name}</Text>
              <Text>{item.imageurl}</Text>
              <Text>Articulo: {item.name}</Text>
              <Text>Caracteristicas: {item.description}</Text>
              <Text>Precio(iva){item.price}</Text>
              <Text>cantidad en stock: {item.amount}</Text>

              <View style={{flex:1,flexDirection:"row", marginTop: 50}}>
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

          </View>

        </ScrollView> */}

      <View style={{height: "25%",}}/>


    </View>
    
  );
  
}


export default DetailsScreen;