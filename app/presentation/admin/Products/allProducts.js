import React, { useEffect } from "react";
import { TouchableOpacity, View, Text, ActivityIndicator, Image,ImageBackground, Button } from "react-native";
import { FlatGrid } from 'react-native-super-grid';
import { useNavigation } from "@react-navigation/native";
import { SearchesService } from "../../../domain/searches/service/searchService";
import { AppImages } from "../../enums/appImages"
import { getDownloadURL, ref} from "firebase/storage"
import { storage } from "../../../data/firebaseConfig/config"
import { productRoutes } from "./constants/productsKey"

function AllProducts(){
  const navigation = useNavigation();
  const [temp, setTemp] = React.useState([]);
  const [productos, setProductos] = React.useState([]);

  useEffect(() => {
    try {
      const manager = new SearchesService();
      manager.SearchAllProducts().search(setTemp);
    } catch (e) {
      alert(e);
    }
  }, []);

  (async function () {
    if (temp[0] !== undefined) {
      if (productos.length === 0) {
        for (const data of temp) {
          const reference = ref(storage, `Productos/${data.imageurl}`);
          data.imageurl = await getDownloadURL(reference)
          .then((x)=>{return x;})
          .catch((e)=>{})
        }
        setProductos(temp);
      }
    }
  })();

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
                <View style={{backgroundColor:"white"}}>

                  <TouchableOpacity onPress={()=>navigation.navigate(productRoutes.details, {item: data.item})}>
                    <View style={{flex:1, alignContent:"center", alignItems: "center"}}>
                      <Image source={{uri: data.item.imageurl}} style={{height: 90, width: 90, marginTop: 5}}/>
                      <Text style={{color:"black"}} >{data.item.name}</Text>
                    </View>
                  </TouchableOpacity>

                  <Button
                  title="Eliminar"
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
