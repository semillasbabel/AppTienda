import React, { useEffect } from "react";
import { TouchableOpacity, View, FlatList, Alert, Text, ActivityIndicator, Image, StyleSheet,ImageBackground, Button } from "react-native";
import { ImagesUrisEnum } from "../../../../Enums/AppImagesUris"
import { getAuth } from 'firebase/auth';
import { database, firebaseApp } from "../../../../../Data/Repositories/FirebaseConfig/fbconfig";
import { doc, increment, updateDoc, deleteDoc, addDoc, collection, Timestamp } from "firebase/firestore";
import { ManagerRead } from "../../../../../Domain/Repositories/Firebase/Crud/Read/read";
import { styles } from "./shopping-style/style";

function ShoppingCar(){

  const [productos, setProductos] = React.useState([]);
  const [loadingPay, SetLoadingPay] = React.useState(false);
  const auth = getAuth(firebaseApp);  
  let preciototal = 0;

  useEffect(() => {
    try { 
      const manager = new ManagerRead();
      manager.SearchShoppingCar().search(setProductos);
    } catch (e) {
      alert(e);
    }
  }, []);

  (async function () {
    for (const products of productos) {
      preciototal = preciototal + products.price * products.quantity
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

  async function realizarCompra(){
    SetLoadingPay(true)
    await addDoc(collection(database, "report"), {
      personId: `${auth.currentUser.email}`,
      date: Timestamp.now(),
      totalPurchase: preciototal,  
    });

    for (const products of productos) {
      const ref = doc(database, `shoppingCar${auth.currentUser.uid}`, `${products.id}`);
      deleteDoc(ref);
      console.log("Producto Eliminado");
    }
    setProductos([]);
    SetLoadingPay(false)
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

                    <View style={{flex:1, flexDirection:"row", backgroundColor:"#F8F9FB", borderRadius:20}}>

                      <View style={{width:135 ,alignContent:"center", alignItems: "center", flexDirection: "column"}}>
                        <Image source={{uri: data.item.imageurl}} style={{height: "90%", width: "95%", marginTop: 5}}/> 
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

              {loadingPay === false ?(
                <View style={{height:100, backgroundColor:"#29b6f5", alignItems:"center"}}>
                <Text style={styles.mount}> total a pagar: ¢ {preciototal}</Text>
                <TouchableOpacity onPress={()=>realizarCompra()}>
                  <View style={{height:40, width:150, backgroundColor:"yellow"}}>
                    <Text style={{marginTop:10, alignSelf:"center"}}>Realizar Compra</Text>
                  </View>
                </TouchableOpacity>
              </View>
              ):(
                <View style={{height:80, backgroundColor:"white", alignItems:"center"}}>
                  <ActivityIndicator size="large" color="black"/>
                  <Text>Procesando Compra</Text>
                </View>
              )}
             

            </View>
          )}
        </View>
      </View>
  
    </View>
    </ImageBackground>
    );
  }
  
  
  
  
export default ShoppingCar;