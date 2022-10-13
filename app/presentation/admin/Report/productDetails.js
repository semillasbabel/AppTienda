import React, { useEffect } from "react";
import { TouchableOpacity, View, Text, ActivityIndicator,Alert, Image,ImageBackground, Button } from "react-native";
import { FlatGrid } from 'react-native-super-grid';
import { search } from "../../../domain/searches/service/reportProductsService";
import { AppImages } from "../../enums/appImages"

function AllProducts({ route, navigation }){
  const {item} = route.params;
  const [productos, setProductos] = React.useState([]);

  useEffect(() => {
    try {
      search(setProductos, item.id)
    } catch (e) {
      alert(e);
    }
  }, []);

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
              <FlatGrid
              itemDimension={130}
              data={productos}
              spacing={10}
              keyExtractor={(x) => x.id}
              renderItem={(data) => (
                <View style={{backgroundColor:"white", borderRadius:15}}>

                  <TouchableOpacity>
                    <View style={{flex:1, alignContent:"center", alignItems: "center"}}>
                      <Image source={{uri: data.item.imageurl}} style={{height: 90, width: 90, marginTop: 5}}/>
                      <Text style={{color:"black"}} >{data.item.name}</Text>
                      <Text style={{color:"black"}} >Cantidad: {data.item.quantity}</Text>
                      <Text style={{color:"black"}} >Precio: {data.item.price}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                )}
              style={{ marginTop: 10 }}
            />
            <Button
                  title="Volver"
                  onPress={()=>navigation.goBack()}
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
