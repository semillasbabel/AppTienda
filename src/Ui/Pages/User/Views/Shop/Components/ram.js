import React, { useEffect, useLayoutEffect } from "react";
import { TouchableOpacity, FlatList, View, Image, Button, Text, Section } from "react-native";
import { FlatGrid } from 'react-native-super-grid';
import { useNavigation } from "@react-navigation/native";
import { getRam } from "../../../../../../Domain/Repositories/Firebase/Crud/read";

const Ram = () => {
  const navigation = useNavigation();

  const [productos, setProductos] = React.useState([]);

  useEffect(() => {
    try {
      getRam(setProductos);
    } catch (e) {
      alert(e);
    }
  }, []);

  return (
  <View style={{flex: 1, backgroundColor: "#235b76"}}>
    <View style={{ flex: 1, backgroundColor: `#237667`}}>
      <View style={{ flex: 1}}>
        {productos.length === 0 ? (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Esperando</Text>
        </View>
        ) : (
          <FlatGrid
            data={productos}
            keyExtractor={(x) => x.id}
            renderItem={(data) => (
              <View style={{flex:1, flexDirection: "column", backgroundColor: "#235b76"}}>

                <TouchableOpacity>

                  <View style={{flex:1, alignContent:"center", alignItems: "center"}}>
                    <Text>{data.item.id}</Text>
                    <Text>{data.item.imageurl}</Text>
                    <Text>{data.item.name}</Text>
                    <Text>{data.item.speed}</Text>
                    <Text>{data.item.capacity}</Text>

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

export default Ram;