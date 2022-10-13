import React from "react";
import {Text,  View, ImageBackground, TextInput, StyleSheet, Image} from 'react-native';
import { Card} from "@rneui/themed";
import { doc, setDoc, updateDoc} from "firebase/firestore"

import { ImagesUrisEnum } from "../../../../../Enums/AppImagesUris"
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button,Icon,Switch, checked } from '@rneui/themed';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import  { useState } from "react";
import { update } from "firebase/database";
import * as ImagePicker from "expo-image-picker"
import { CreateProductServiceDomain } from "../../../domain/products/service/createProductService"
import { Alert } from "react-native";
import { styles } from "./styles-products/style-create";


export default function CreateScreen({navigation, route}) {
  const create = new CreateProductServiceDomain();
  const [image, setImage] = useState(null);
  const [offert, setOffert] = React.useState(false);
  const [categoria, setCategoria] = React.useState("No seleccionado");

  const [data, setData] = React.useState({
    Name: "",
    Description: "",
    Price: "",
    Amount: "",
    Offert: "",
  },);

  React.useEffect(() => {
    if (route.params?.post) {
      setCategoria(route.params?.post)
    }
  }, [route.params?.post]);

  const pickImage = async ()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    })

    const source = {uri: result.uri};
    // console.log("source",source);
    setImage(source);
  }

  const uploadImage = async () => {
    if ( await create.create(image, data.Name, data.Description, Number(data.Price), Number(data.Amount), offert, categoria)) {
      console.log("true");
      Alert.alert("Producto Agregado");
      setData({...data, Name:"", Description:"", Price:"", Amount:"", Offert:""})
      setCategoria("No seleccionado")
      setOffert(false);
      setImage(null);
      navigation.goBack();
    } else {
      Alert.alert("","Error al crear el producto");
    }

   
  }

 



  return (
   
    <View style={{flex:1, backgroundColor:"#1899c5"}}>
      
      <View style={{flex:1, marginVertical:20, marginHorizontal:20, backgroundColor:"white", borderRadius:20}}>
      <KeyboardAwareScrollView resetScrollToCoords={{ x: 15, y: 15 }}>
       
       <View style={{marginTop: 20}}>
          {image && <Image source={{ uri: image.uri}} style={{width: 200, height: 200, alignSelf:"center", marginVertical:10}}/>}
          <View style={{alignSelf:"center"}}>
            <Button
            title={"Seleccionar imagen"}
            onPress={()=>pickImage()}/>
          </View>
       </View>

        
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

          <Text style={{alignSelf:"center"}}>Seleccionar Catergoria: </Text>
          
          <Button   onPress={()=>navigation.navigate("Categorias")} type="solid" style={{height:40, width:120}}>
          Categorias
          </Button>

          <Text style={{marginVertical: 20}}>Categoria Seleccionada: {categoria} </Text>


          <View  style={{alignSelf:"center", alignItems:"center"}}>
           <Text  style={{marginLeft:15}}>cantidad en stock:</Text>
           
          <TextInput
            value={data.Amount}
            onChangeText={(e) => setData({...data, Amount: e})}
            style={{height:30, width:50, borderRadius:10, fontSize:15,marginTop:20, marginRight:-5,backgroundColor:'#1899c5'}}
          />
            <Text>Estado de la oferta: {offert ? "NO" : "SI"} </Text>
            <Button
              title={offert ? "SI" : "NO"}
              color={offert ? "green" : "red"}
              onPress={()=>setOffert(!offert)}
            />
         </View>
        </View>
       
        
        <View style={styles.Button}>

        <Button   onPress={()=>navigation.goBack()} type="solid" style={{height:40, width:120}}>
          Volver
          <Icon name="home" color="white" />
          </Button>


        <Button  onPress={()=>uploadImage()} type="solid" style={{height:40, width:120}}>
          Actualizar
          <Icon name="refresh" color="white" />
          </Button>
        </View>


        </KeyboardAwareScrollView>
      </View>
        
    </View>
   
    
  );
}










 