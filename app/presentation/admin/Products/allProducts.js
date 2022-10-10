import React, { useEffect } from "react";
import { TouchableOpacity, View, Text, ActivityIndicator,Alert, Image,ImageBackground, Button } from "react-native";
import { FlatGrid } from 'react-native-super-grid';
import { useNavigation } from "@react-navigation/native";
import { SearchesService } from "../../../domain/searches/service/searchService";
import { AppImages } from "../../enums/appImages"
import { productRoutes } from "./constants/productsKey"
import { DeleteProductServiceDomain } from "../../../domain/products/service/deleteProductService"


function AllProducts(){
  const navigation = useNavigation();
  const [productos, setProductos] = React.useState([]);
  const delProduct = new DeleteProductServiceDomain();

  useEffect(() => {
    try {
      const manager = new SearchesService();
      manager.SearchAllProducts().search(setProductos);
    } catch (e) {
      alert(e);
    }
  }, []);


  async function eliminar(id){
    Alert.alert(
      "Eliminar",
      "¿Esta seguro que desea eliminar el producto?, ¡esta acción es irreversible!",
      [
        {
          text: "NO",
          style: "cancel"
        },
        { text: "SI", onPress:async ()=>{
          if (await delProduct.delete(id)) {
            Alert.alert("","Producto Eliminado Satisfactoriamente")
          }
          else{
            Alert.alert("","El producto no se elimino debido a un error, reintente")
          }
        }
        }
      ]
    );
  }


  return (
    <ImageBackground source={{uri: AppImages.backgroundImage.value}} resizeMode="cover" style={{flex:1}}>
    <View style={{flex: 1, backgroundColor: "transparent"}}>
      <View style={{ flex: 1, backgroundColor: `transparent`}}>
        <View style={{ flex: 1}}>
          {productos.length === 0 ? (
          <View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="large" color="white"/>
            <Text style={{color:"white", fontSize: 20}}>Cargando Productos</Text>
          </View>
          ) : (
            <View>
              <Button title="CREAR ARTICULOS"  
                onPress={()=>navigation.navigate(productRoutes.create)}/>
              <FlatGrid
              itemDimension={130}
              data={productos}
              spacing={10}
              keyExtractor={(x) => x.id}
              renderItem={(data) => (
                <View style={{backgroundColor:"white", borderRadius:15}}>

                  <TouchableOpacity onPress={()=>navigation.navigate(productRoutes.details, {item: data.item})}>
                    <View style={{flex:1, alignContent:"center", alignItems: "center"}}>
                      <Image source={{uri: data.item.imageurl}} style={{height: 90, width: 90, marginTop: 5}}/>
                      <Text style={{color:"black"}} >{data.item.name}</Text>
                    </View>
                  </TouchableOpacity>

                  <Button
                  title="Eliminar"
                  onPress={()=>eliminar(data.item.id)}
                  />

                </View>
                )}
              style={{ marginTop: 10 }}
            />
            </View>
          )}
        </View>
      </View>
  
    </View>
    </ImageBackground>
    );
  }
  

export default AllProducts;
