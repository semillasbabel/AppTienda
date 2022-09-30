import React, { useEffect } from "react";
import { TouchableOpacity, View, Text, StyleSheet,ImageBackground } from "react-native";
import { FlatGrid } from 'react-native-super-grid';
import { useNavigation } from "@react-navigation/native";
import { ManagerRead } from "../../../../../../Domain/Repositories/Firebase/Crud/read";
import { shopScreens } from "../Constants/keysShop"
import { imagesUrl } from "../../../../../Utils/constants"

function Offerts(props){
  const navigation = useNavigation();
  const {searchType} = props;
  const [productos, setProductos] = React.useState([]);

  useEffect(() => {
    try {
      const manager = new ManagerRead();
      switch (searchType) {

        case shopScreens.HomeScreen:
          manager.searchOfferts().search(setProductos);
        break;

        case shopScreens.FuentesPoderScreen:
          manager.SearchPowerSupply().search(setProductos);
        break;

        case shopScreens.GabineteScreen:
          manager.searchCases().search(setProductos);
        break;

        case shopScreens.MemoriasRamScreen:
          manager.SearchMemoryRam().search(setProductos);
        break;

        case shopScreens.ProcesadoresScreen:
          manager.SearchProcessors().search(setProductos);
        break;

        case shopScreens.AlmacenamientoScreen:
          manager.SearchStorage().search(setProductos);
        break;

        case shopScreens.VideoScreen:
          manager.SearchVideoCards().search(setProductos);
        break;

        case shopScreens.TarjetaMadreScreen:
          manager.SearchMotherboards().search(setProductos);
        break;

      }
    } catch (e) {
      alert(e);
    }
  }, []);

  const image = { uri: imagesUrl.fondo };
  return (
    <ImageBackground source={image} resizeMode="cover" style={{flex:1}}>
    <View style={{flex: 1, backgroundColor: "transparent"}}>
      <View style={{ flex: 1, backgroundColor: `transparent`}}>
        <View style={{ flex: 1}}>
          {productos.length === 0 ? (
          <View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Esperando</Text>
          </View>
          ) : (
            <FlatGrid
            itemDimension={130}
              data={productos}
              
              spacing={10}
              keyExtractor={(x) => x.id}
              renderItem={(data) => (
                <View style={{flex:1, flexDirection: "column", backgroundColor: "#1583d7"}}>
  
                  <TouchableOpacity onPress={()=>navigation.navigate("Details", {item: data.item})}>

                    <View style={{flex:1, alignContent:"center", alignItems: "center"}}>
                      <Text>{data.item.imageurl}</Text>
                      <Text>{data.item.id}</Text>
                      <Text>{data.item.name}</Text>
                      <Text>{data.item.description}</Text>
                      <Text>{data.item.category}</Text>
                      <Text>{data.item.amount}</Text>
                      <Text>{data.item.price}</Text>

                    </View>

                  </TouchableOpacity>
  
  
                </View>
                )}
              style={{ marginTop: 10 }}
            />
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
  });
export default Offerts;
