import React, { useEffect } from "react";
import { TouchableOpacity, View, FlatList, Alert, Text, ActivityIndicator, Image, StyleSheet,ImageBackground, Button } from "react-native";
import { FlatGrid } from 'react-native-super-grid';
import { useNavigation } from "@react-navigation/native";
import { ImagesUrisEnum } from "../../../../Enums/AppImagesUris"
import { getAuth } from 'firebase/auth';
import { database, firebaseApp } from "../../../../../Data/Repositories/FirebaseConfig/fbconfig";
import { onSnapshot, doc, increment, getDocs, collection, updateDoc, DocumentSnapshot, query, deleteDoc } from "firebase/firestore";
import { getProductos } from "./prueba"

function Offerts(){
  const navigation = useNavigation();
  const [loading, setloading] = React.useState(false);
  const [productos, setProductos] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  // let productos = [];
  const auth = getAuth(firebaseApp);  
  let preciototal = 0;

  useEffect(() => {
    try { 
      getProductos(setProductos);
    } catch (e) {
      alert(e);
    }
  }, []);

  (async function () {
    for (let i = 0; i < productos.length; i++) {
      preciototal = preciototal + productos[i].price * productos[i].quantity
    }
  })();


  async function aumentarCantidad(productId, index){
    if (productos[index].quantity < productos[index].amount) {
      const CantidadRef = doc(database, `shoppingCar${auth.currentUser.uid}`, `${productId}`);
      await updateDoc(CantidadRef, {
          "quantity": increment(1),
      });   
    }
  }

  async function disminuirCantidad(productId, index){
    if (productos[index].quantity < 2) {
      Alert.alert(
        "Pregunta",
        "¿Desea Borrar el producto?",
        [
          {
            text: "NO",
            style: "cancel"
          },
          { text: "SI", onPress:()=>{
            const ref = doc(database, `shoppingCar${auth.currentUser.uid}`, `${productId}`);
            deleteDoc(ref);
          }
          }
        ]
      );
    }else{
      const CantidadRef = doc(database, `shoppingCar${auth.currentUser.uid}`, `${productId}`);
      await updateDoc(CantidadRef, {
          "quantity": increment(-1),
      });
    }
  }

  function realizarCompra(){
    console.log("Compra Realizada");
    for (let i = 0; i < productos.length; i++) {
      const ref = doc(database, `shoppingCar${auth.currentUser.uid}`, `${productos[i].id}`);
      deleteDoc(ref);
      console.log("Producto Eliminado");
    }
    setProductos([]);
  }

  return (
    <ImageBackground source={{uri: ImagesUrisEnum.backgroundImage.value}} resizeMode="cover" style={{flex:1}}>
    <View style={{flex: 1, backgroundColor: "transparent"}}>
      <View style={{ flex: 1, backgroundColor: `transparent`}}>
        <View style={{ flex: 1}}>
          {productos.length === 0 ? (
          <View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="large" color="#00ff00" />
            <Text style={{color:"white", fontSize: 20}}>Esperando que agregues algún producto</Text>
          </View>
          ) : (
            <View style={{flex:1}}>
              
              <View style={{flex:1}}>
              <FlatList
                itemDimension={130}
                data={productos}
                spacing={10}
                keyExtractor={(x) => x.id}
                renderItem={(data) => (
                  <View style={styles.cardSale}>

                    <View style={{flex:1, flexDirection:"row", backgroundColor:"white"}}>

                      <View style={{width:130 ,alignContent:"center", alignItems: "center", flexDirection: "column"}}>
                        <Image source={{uri: data.item.imageurl}} style={{height: "95%", width: "90%", marginTop: 5}}/> 
                      </View>

                      <View style={{flex:1, flexDirection:"column"}}>
                        <Text style={styles.textsale} >{data.item.name}</Text>
                        <Text style={styles.textsale}> Descripcion: {data.item.description}</Text>
                        <Text style={styles.textsale}> Stock: {data.item.amount}</Text>
                        <Text style={styles.textsale}>Precio: ¢ {data.item.price}</Text>
                        <View style={{height:45 ,flexDirection:"row", alignSelf:"center"}}>
                          <Button title="min" onPress={()=>disminuirCantidad(data.item.id, data.index)}/>
                          <Text style={{marginTop:10, alignContent:'center', marginLeft:10, alignItems:'center'}}> {data.item.quantity}</Text>
                          <View style={{width:25}}/>
                          <Button style={{height:25}} title="max" onPress={()=>aumentarCantidad(data.item.id, data.index)}/>
                        </View>
                     
                      </View>

                    </View>
  
                  </View>
                )}
                style={{ marginTop: 10 }}/>
              </View>


              <View style={{height:90, backgroundColor:"black", alignItems:"center"}}>
                <Text style={styles.textmount}>¢ {preciototal}</Text>
                <TouchableOpacity onPress={()=>realizarCompra()}>
                  <View style={{height:40, width:150, backgroundColor:"yellow"}}>
                    <Text style={{marginTop:10, alignSelf:"center"}}>Realizar Compra</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>
          )}
        </View>
      </View>
  
    </View>
    </ImageBackground>
    );
  };
  
  
  
  const styles = StyleSheet.create({
    gridView: {
      marginTop: 10,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 150,
    },
    itemName: {
      fontSize: 15,
      color: '#fff',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
    textsale:{
      fontSize:14,
     textAlign:'center',
     color:'black'
    },
    cardSale:{
      flex:1,
      flexDirection:"column",
      margin:5, 
      backgroundColor: "#f8f8f8",
      borderRadius:10,
      height:150
    },
    textmount:{
      fontSize:18,
      fontStyle:'normal',
      fontWeight:'bold',
      marginVertical:8,
      color:'#29b6f5'
    }
  });
export default Offerts;

