import React from "react";
import {Text,  View, Button, ImageBackground, TextInput, StyleSheet, Image} from 'react-native';
import { Card} from "@rneui/themed";
import { doc, setDoc} from "firebase/firestore"
import { database} from "../../../../../../Data/Repositories/FirebaseConfig/fbconfig"
import { ImagesUrisEnum } from "../../../../../Enums/AppImagesUris"
import { TouchableOpacity } from "react-native-gesture-handler";


function DetailsScreen({ route, navigation }) {
  const {item} = route.params;

  const [data, setData] = React.useState({
    Name: item.name,
    Description: item.description,
    Price: `${item.price}`,
    Amount: `${item.amount}`,
    Offert: `${item.offert}`,
  });

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
    <View style={{flex:1, backgroundColor:"#1899c5"}}>
      <View style={{flex:1, marginVertical:20, marginHorizontal:20, backgroundColor:"white", borderRadius:20}}>
        <View style={{height:"30%", width:"100%", alignSelf:"center"}}>
          <Image source={{uri: item.imageurl}} style={{height: "95%", width:"60%", marginTop: 5, alignSelf:"center"}}/>
        </View>

        <View>
          <TextInput
            value={data.Name}
            onChangeText={(e) => setData({...data, Name: e})}
            style={styles.Inputicon}
          />
          
          <TextInput
            value={data.Description}
            onChangeText={(e) => setData({...data, Description: e})}
            style={styles.Inputicon}
          />
          
          <TextInput
            value={data.Price}
            onChangeText={(e) => setData({...data, Price: e})}
            style={styles.Inputicon}
          />

          <TextInput
            value={data.Amount}
            onChangeText={(e) => setData({...data, Amount: e})}
            style={styles.Inputicon}
          />

          <TextInput
            value={data.Offert}
            onChangeText={(e) => setData({...data, Offert: e})}
            style={styles.Inputicon}
          />
        </View>




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
  }
  });

export default DetailsScreen;
