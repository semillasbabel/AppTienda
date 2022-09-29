import React, { useEffect, useLayoutEffect } from "react";
import { TouchableOpacity, FlatList, View, Image, Button, Text, Section, StyleSheet } from "react-native";
import { FlatGrid } from 'react-native-super-grid';
import { useNavigation } from "@react-navigation/native";
import { getProcessors } from "../../../../../../Domain/Repositories/Firebase/Crud/read";

const Processors = () => {
  const navigation = useNavigation();

  const [productos, setProductos] = React.useState([]);

  useEffect(() => {
    try {
      getProcessors(setProductos);
    } catch (e) {
      alert(e);
    }
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: "#f8f8"}}>
      <View style={{ flex: 1, backgroundColor: `#4c4c57`}}>
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
  
                  <TouchableOpacity>
  
                    <View style={{flex:1, alignContent:"center", alignItems: "center"}}>
                      
                      <Text style={styles.itemName} >{data.item.imageurl}</Text>
                      <Text style={styles.itemName}>{data.item.name}</Text>
                      <Text style={styles.itemName} >{data.item.description}</Text>
                      
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
export default Processors;