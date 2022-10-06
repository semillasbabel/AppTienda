import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
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
    textsale:{
      fontSize:14,
     textAlign:'center',
     color:'black'
    },
    cardSale:{
      flex:1,
      flexDirection:"column",
      margin:5, 
      backgroundColor: "#f8f8f8",
      borderRadius:10,
      height:150
    },
    textmount:{
      fontSize:18,
      fontStyle:'normal',
      fontWeight:'bold',
      marginVertical:8,
      color:'#29b6f5'
    },
    mount:{
      fontSize: 22,
      marginVertical: 8,
      color:'black'

    }
  });