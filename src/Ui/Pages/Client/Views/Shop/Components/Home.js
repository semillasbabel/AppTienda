import React, { useEffect } from "react";
import { TouchableOpacity, FlatList, View, Image, Button, Text, Section } from "react-native";
import { FlatGrid } from 'react-native-super-grid';
import { useNavigation } from "@react-navigation/native";
import { getOffers, getOffersts, ManagerRead } from "../../../../../../Domain/Repositories/Firebase/Crud/read";
import { collection, getDocs, query, where, orderBy, onSnapshot } from "firebase/firestore";
import { database } from "../../../../../../Data/Repositories/FirebaseConfig/fbconfig";

const Home = () => {
  const navigation = useNavigation();

  const [productos, setProductos] = React.useState([]);

  useEffect(() => {
    try {
      const manager = new ManagerRead();
      manager.searchOfferts().search(setProductos);
    } catch (e) {
      alert(e);
    }
  }, []);

  // useEffect(() => {
  //   try {
  //     getOffers(setProductos);
  //   } catch (e) {
  //     alert(e);
  //   }
  // }, []);

  const getProduct = async (setProductos) => {
    const ref = collection(database, "product");
    const q = query(ref, where("offert", "==", true));
  
    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      setProductos(
        querySnapshot.docs.map((x) => ({
          id: x.id,
        }))
      );
    });
  
    return unsuscribe;
  };

  function obtdato(){ 
    const manager = new ManagerRead();
    console.log(manager.searchOfferts())
    // console.log(getOffersts());
  }

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

          <TouchableOpacity onPress={()=>obtdato()}>
            <View style={{height: 50, width: 50, backgroundColor: "red"}}/>
          </TouchableOpacity>

        </View>
        ) : (
          <FlatList
            data={productos}
            keyExtractor={(x) => x.id}
            renderItem={(data) => (
              <View style={{flex:1, flexDirection: "column", backgroundColor: "#235b76", marginVertical:5}}>

                <TouchableOpacity onPress={()=>navigation.navigate("Details")}>

                  <View style={{flex:1, alignContent:"center", alignItems: "center"}}>
                    <Text>{data.item.imageurl}</Text>
                    <Text>{data.item.id}</Text>
                    <Text>{data.item.name}</Text>
                    <Text>{data.item.description}</Text>
                    <Text>{data.item.category}</Text>
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
