import React, { useEffect } from "react";
import { TouchableOpacity, ActivityIndicator, View, Text, StyleSheet,ImageBackground, Button, Image } from "react-native";
import { FlatGrid } from 'react-native-super-grid';
import { useNavigation } from "@react-navigation/native";
import { ManagerRead } from "../../../../../../Domain/Repositories/Firebase/Crud/read";
import { getDownloadURL, ref, getStorage } from "firebase/storage"
import { firebaseApp, storage } from "../../../../../../Data/Repositories/FirebaseConfig/fbconfig"
import { async } from "@firebase/util";
import { FlatList } from "react-native-gesture-handler";


function Offerts(){

  const navigation = useNavigation();
  const [temp, setTemp] = React.useState([]);
  const [productos, setProductos] = React.useState([]);

  useEffect(() => {
    try {
      const func = async () => {
        const manager = new ManagerRead();
        manager.searchOfferts().search(setTemp);
      }
      func();
    } catch (e) {
      alert(e); 
    }
  }, []);


  (async function () {
    if (temp[0] != undefined) {
      for (let i = 0; i < temp.length; i++) {
        const reference = ref(storage, `Productos/${temp[i].imageurl}`);
        temp[i].imageurl = await getDownloadURL(reference)
        .then((x)=>{return x;})
        .catch((e)=>{})
        // console.log(temp[i].imageurl)
      }
      setProductos(temp);
    }
  })();

  return (
    <ImageBackground resizeMode="cover" style={{flex:1}}>
    <View style={{flex: 1, backgroundColor: "transparent"}}>
      <View style={{ flex: 1, backgroundColor: `transparent`}}>
        <View style={{ flex: 1}}>
          {productos.length === 0 ? (
          <View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="large" color="#1899c5"/>
            <Text>Cargando Productos</Text>
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

                      <Image source={{uri: data.item.imageurl}} style={{height: 100, width: 90, marginTop: 5}}/>
                      
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

        {/* <Text>{url}</Text> */}

        <Button
        title="prueba"
        onPress={()=>prueba()}
        />

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