import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, ImageBackground, StyleSheet, FlatList } from "react-native";
import { ManagerRead } from "../../../../../Domain/Repositories/Firebase/Crud/Read/read";
import { ImagesUrisEnum } from "../../../../Enums/AppImagesUris"

function Offerts(props){
  const [reports, setReports] = React.useState([]);

  useEffect(() => {
    try {
      const manager = new ManagerRead();
      manager.SearchReports().reports(setReports);
    } catch (e) {
      alert(e);
    }
  }, []);

  return (
    <ImageBackground source={{uri: ImagesUrisEnum.backgroundImage.value}} resizeMode="cover" style={{flex:1}}>
    <View style={{flex: 1, backgroundColor: "transparent"}}>
      <View style={{ flex: 1, backgroundColor: `transparent`}}>
        <View style={{ flex: 1}}>
          {reports.length === 0 ? (
          <View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="large" color="white"/>
            <Text style={{color:"white", fontSize: 20}}>Esperando Reportes</Text>
          </View>
          ) : (
            <View>
              <FlatList
            itemDimension={130}
              data={reports}
              
              spacing={10}
              keyExtractor={(x) => x.id}
              renderItem={(data) => (
                <View style={{backgroundColor:"white", marginVertical: 5, marginHorizontal: 10}}>
                    <View style={{flex:1, alignContent:"center", alignItems: "center"}}>
                      <Text style={{color:"black"}}>Persona: {data.item.personId}</Text>
                      <Text style={{color:"black"}}>Total de la Compra: ¢{data.item.totalPurchase}</Text>
                      <Text style={{color:"black"}}>Fecha de Compra: {data.item.date}</Text>
                    </View>
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

  const styles = StyleSheet.create({

    ViewPrincipal:{
        flex: 1,
        backgroundColor: "transparent", 
        marginBottom: 20
    },
    ViewSecundario:{
        alignSelf:"center",
         height: "40%", 
         width:"70%", 
         marginBottom: 20
    },
    cardImage:{
        margin:10, 
        height:"100%", 
        width:"90%", 
        alignSelf:"center"
    },
    textView:{
        fontSize:18
    },
    
    
    
    
    })
  

    export default Offerts;