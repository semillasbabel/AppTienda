import React, { useEffect } from "react";
import { TouchableOpacity, View, Text, ActivityIndicator, Image,ImageBackground } from "react-native";
import { FlatGrid } from 'react-native-super-grid';
import { useNavigation } from "@react-navigation/native";
import { ManagerRead } from "../../../../../../Domain/Repositories/Firebase/Crud/read";
import { shopScreens } from "../Constants/keysShop"
import { ImagesUrisEnum } from "../../../../../Enums/AppImagesUris"
import { getDownloadURL, ref} from "firebase/storage"
import { storage } from "../../../../../../Data/Repositories/FirebaseConfig/fbconfig"
import {styles} from "../style-productos/style-products"

function Offerts(props){
  const navigation = useNavigation();
  const {searchType} = props;
  const [temp, setTemp] = React.useState([]);
  const [productos, setProductos] = React.useState([]);

  useEffect(() => {
    try {
      const manager = new ManagerRead();
      switch (searchType) {

        case shopScreens.HomeScreen:
          manager.searchOfferts().search(setTemp);
        break;

        case shopScreens.FuentesPoderScreen:
          manager.SearchPowerSupply().search(setTemp);
        break;

        case shopScreens.GabineteScreen:
          manager.searchCases().search(setTemp);
        break;

        case shopScreens.MemoriasRamScreen:
          manager.SearchMemoryRam().search(setTemp);
        break;

        case shopScreens.ProcesadoresScreen:
          manager.SearchProcessors().search(setTemp);
        break;

        case shopScreens.AlmacenamientoScreen:
          manager.SearchStorage().search(setTemp);
        break;

        case shopScreens.VideoScreen:
          manager.SearchVideoCards().search(setTemp);
        break;

        case shopScreens.TarjetaMadreScreen:
          manager.SearchMotherboards().search(setTemp);
        break;

      }
    } catch (e) {
      alert(e);
    }
  }, []);


  (async function () {
    if (temp[0] !== undefined) {
      if (productos.length === 0) {
        for (let i = 0; i < temp.length; i++) {
          const reference = ref(storage, `Productos/${temp[i].imageurl}`);
          temp[i].imageurl = await getDownloadURL(reference)
          .then((x)=>{return x;})
          .catch((e)=>{})
        }
        setProductos(temp);
      }
    }
  })();
  
  return (
    <ImageBackground source={{uri: ImagesUrisEnum.backgroundImage.value}} resizeMode="cover" style={{flex:1}}>
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
                <View style={styles.cardSale}>

                  <TouchableOpacity onPress={()=>navigation.navigate("Details", {item: data.item})}>

                    <View style={{flex:1, alignContent:"center", alignItems: "center"}}>
                      
                    <Image source={{uri: data.item.imageurl}} style={{height: 150, width: 150, marginTop: 5}}/>

                      
                      <Text style={styles.textsale} >{data.item.name}</Text>
                      <Text style={styles.textsale}> Descripcion: {data.item.description}</Text>
                      <Text style={styles.textsale}> Stock: {data.item.amount}</Text>
                      <Text style={styles.textsale}> Precio: ¢ {data.item.price}</Text>

                    </View>

                  </TouchableOpacity>
  
  
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
  };
  

export default Offerts;
