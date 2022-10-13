import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  
    text: {
     fontSize:25,
     justifyContent:'center',
    
    },
    botton :{
        height:120, 
        width:150, 
        alignItems:'center', 
        marginLeft:25, 
        paddingVertical:25
    },
    TEXTO:{
      fontSize: 20,
      color:'#ffff00',
      justifyContent:'center',
      alignItems:'center',
      paddingVertical:75,
      textAlign:'center',
    },
    container: {
      flex: 1,
      backgroundColor:'#f8f8f8',
      
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    Input:{
      fontSize: 35,
      borderColor:'red',
    },
    Image2:{
      height:250,
      width:250,
      alignContent:'center'
    },
    inputs:{
        height: 40,
        borderBottomWidth: 3,
        paddingHorizontal: 10,
        marginLeft:40,
        marginBottom:15,
        width:300,
        fontSize: 20,
        color:"",
        borderRadius: 10,
        backgroundColor:'white',
        borderBottomColor: "#f8f8f8"
    },
    views:{
        flexDirection:'row',
         alignItems: 'center',
         alignSelf: 'center',
         marginRight:20
    },
    note:{
        color:"white", 
        alignContent:'center', 
        alignSelf:'center', 
        fontWeight:'bold',
        fontSize:20,
        marginBottom:30
    }
    

    });