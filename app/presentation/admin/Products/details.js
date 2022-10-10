import React from "react";
import {Text,  View, TextInput, StyleSheet, Image, Alert} from 'react-native';
import { doc, setDoc} from "firebase/firestore"
import { database} from "../../../data/firebaseConfig/config"
import { Button,Icon } from '@rneui/themed';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { UpdateProductServiceDomain } from "../../../domain/products/service/updateProductService"

function DetailsScreen({ route, navigation }) {
  const {item} = route.params;
  const update = new UpdateProductServiceDomain();
  const [data, setData] = React.useState({
    Name: item.name,
    Description: item.description,
    Price: `${item.price}`,
    Amount: `${item.amount}`,
  },);
  const [offert, setOffert] = React.useState(item.offert);

  async function updateProduct(){
    Alert.alert(
      "Eliminar",
      "¿Esta seguro que desea actualizar el producto?, ¡esta acción es irreversible!",
      [
        {
          text: "NO",
          style: "cancel"
        },
        { text: "SI", onPress:async ()=>{
          if (await update.update(item.id, data.Name, data.Description, Number(data.Price), Number(data.Amount), offert)) {
            Alert.alert("","¡Producto Actualizado!"); 
           } else {
            Alert.alert("","¡Error al actualizar el producto!"); 
           }
        }
        }
      ]
    );    
  }


  return (
    
    <View style={{flex:1, backgroundColor:"#1899c5"}}>
      <View style={{flex:1, marginVertical:20, marginHorizontal:20, backgroundColor:"white", borderRadius:20}}>
        <View style={{height:"30%", width:"80%", alignSelf:"center"}}>
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
            <Text>está en oferta?: {offert ? "SI" : "NO"} </Text>
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


        <Button  onPress={()=>updateProduct()} type="solid" style={{height:40, width:120}}>
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
   width:400,
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
