import React from 'react'
import {View, Text,ImageBackground, StyleSheet} from "react-native"

const image = { uri: "https://media.idownloadblog.com/wp-content/uploads/2020/05/Vector-wave-iPhone-wallpaper-Arthur1992aS-iDownloadBlog-6-710x1536.png" };
function Inicio() {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View><Text>Home</Text></View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  
  image: {
    flex: 1,
  },

  });
export default Inicio