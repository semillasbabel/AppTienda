import React from "react";
import {Text, Image, View, Button, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import { Card, Icon } from "@rneui/themed";
import { color } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

function DetailsScreen({ route, navigation }) {
  const {item} = route.params;

  return (
    <View style={{flex: 1, backgroundColor: "white", alignItems: "center"}}>

      <View style={{height: "25%", }}/>

      <ScrollView style={{alignSelf: "center", width: "100%"}}>

          <View style={{flex: 1, width:"100%", height:"100%", flexDirection: "row", alignSelf:"center" , alignItems:"center", alignContent:"center"}}>

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

        </ScrollView>

      <View style={{height: "25%",}}/>


    </View>
  );
}

export default DetailsScreen;