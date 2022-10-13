import React, { useEffect } from "react";
import { TouchableOpacity, View, Text, ActivityIndicator,Alert, Image,ImageBackground, Button, FlatList } from "react-native";
import { FlatGrid } from 'react-native-super-grid';
import { useNavigation } from "@react-navigation/native";
import { SearchesService } from "../../../domain/searches/service/searchService";
import { AppImages } from "../../enums/appImages"
import { productRoutes } from "./constants/productsKey"
import { DeleteProductServiceDomain } from "../../../domain/products/service/deleteProductService"


function Categories(){
  const navigation = useNavigation();
  const [productos, setProductos] = React.useState([]);
  const delProduct = new DeleteProductServiceDomain();
  
  useEffect(() => {
    try {
      const manager = new SearchesService();
      manager.SearchCategories().search(setProductos);
    } catch (e) {
      alert(e);
    }
  }, []);

  function volver(){
    
  }


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
                <View style={{width: 100}}>

                    <Button title="Volver"  
                    onPress={()=>{
                      navigation.navigate({
                        name: 'Creacion',
                        params: { post: "No seleccionado" },
                        merge: true,
                      })
                    }}/>
                    
                </View>

              <FlatList
              itemDimension={130}
              data={productos}
              spacing={10}
              keyExtractor={(x) => x.id}
              renderItem={(data) => (
                <TouchableOpacity onPress={()=>{
                  navigation.navigate({name: 'Creacion',params: { post: data.item.name },merge: true,})}}>
                <View style={{backgroundColor:"white", borderRadius:15, height:60, marginVertical: 5}}>
                    <View style={{flex:1, alignContent:"center", alignItems: "center"}}>
                      <Text style={{color:"black"}} >{data.item.name}</Text>
                    </View>
                </View>
                </TouchableOpacity>
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
  

export default Categories;
