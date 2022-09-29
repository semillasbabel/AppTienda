import React, { useEffect } from "react";
import { TouchableOpacity, FlatList, View, Image, Button, Text, Section } from "react-native";
import { FlatGrid } from 'react-native-super-grid';
import { useNavigation } from "@react-navigation/native";
import { getShoppingCar } from "../../../../../../Domain/Repositories/Firebase/Crud/read";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../../../../../Data/Repositories/FirebaseConfig/fbconfig";

const Home = () => {
  const navigation = useNavigation();

  const [productos, setProductos] = React.useState([]);

  useEffect(() => {
    try {
      getShoppingCar(setProductos);
    } catch (e) {
      alert(e);
    }
  }, []);

  async function buscardatos(){
    const querySnapshot = await getDocs(collection(database, "shoppingCar"));
    querySnapshot.forEach((doc) => {
      const obj = doc.data().Lista;
      for (const dat in obj){
        console.log(`${dat} : ${obj[dat]}`)
      }
      // console.log(doc.data().Lista);
    });
  }

  return (
  <View style={{flex: 1, backgroundColor: "#235b76"}}>
    <View style={{ flex: 1, backgroundColor: `#237667`}}>
      <View style={{ flex: 1}}>
        {productos.length === 0 ? (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Esperando</Text>

          <TouchableOpacity onPress={()=> navigation.navigate("Details")}>
            <View style={{height: 50, width: 50, backgroundColor: "red"}}/>
          </TouchableOpacity>

        </View>
        ) : (
          <FlatList
            data={productos}
            keyExtractor={(x) => x.id}
            renderItem={(data) => (
              <View style={{flex:1, flexDirection: "column", backgroundColor: "#235b76", marginVertical:5}}>

                <TouchableOpacity onPress={insertar(data.item)}>

                  <View style={{flex:1, alignContent:"center", alignItems: "center"}}>
                    <Text>{data.item[0]}</Text>
                    <Text>{data.item.name}</Text>
                    <Text>{data.item.size}</Text>
                    <Text>{data.item.imageurl}</Text>
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
  );
};

export default Home;
