import { StyleSheet } from "react-native"

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
      fontSize:18,
     textAlign:'center',
     color:'##29b6f6'
    },
    cardSale:{
      flex:1,
      flexDirection: "column", 
      backgroundColor: "#f8f8f8",
      borderRadius:10
    },
  
})