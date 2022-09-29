import React from 'react'
import {View, Text, Button} from "react-native"
import { useNavigation } from '@react-navigation/native';

function ShopDetails() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>ShopDetails</Text>
      <Button
      title='go back'
      onPress={()=>navigation.goBack()}
      />
      </View>
  )
}

export default ShopDetails