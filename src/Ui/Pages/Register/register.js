import { View, Text, ImageBackground, ActivityIndicator, ScrollView, TextInput, Alert } from 'react-native'
import React from 'react'
import { Button} from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { DomainRegistry} from '../../../Domain/Repositories/Firebase/Auth/userRegister';
import { ClearRegisterData, RegisterStateNote } from './Constants/registerKeys';
import { ImagesUrisEnum } from "../../Enums/AppImagesUris";
import { ActivityStateEnum } from "../../Enums/ActivityIndicatorState"
import { PlaceholdersEnum, TextInputEnum, RegisterInputsIcons } from "../../Enums/InputsEnum"
import { styles } from './stylesRegister/stylesR';
import { ViewPagerAndroidBase } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Register = () => {
  const navigation = useNavigation();
  const registry = new DomainRegistry();

  const [estado, setEstado] = React.useState(RegisterStateNote.inicial.value);
  const [isLoading, setLoading] = React.useState(ActivityStateEnum.off.value);
  const [userRegister, setUserSend] = React.useState({
    email: "",
    Password: "",
    name: "",
    address: "",
  });

  async function registro(){
    setLoading(ActivityStateEnum.on.value)
    await registry.setEmail(userRegister.email).setPassword(userRegister.Password).setName(userRegister.name).setAddress(userRegister.address).userRegistry();

    if (registry.getRegistryState) {
      Alert.alert(RegisterStateNote.registroExitoso.value)
      setUserSend({email: ClearRegisterData.clear.value, Password: ClearRegisterData.clear.value, name: ClearRegisterData.clear.value, address: ClearRegisterData.clear.value})
      setEstado(RegisterStateNote.inicial.value)
      setLoading(ActivityStateEnum.off.value)
      navigation.goBack()
    }
    else{
      setLoading(ActivityStateEnum.off.value)
      setEstado(RegisterStateNote.error.value)
    }
  }

  return (
   
    <ImageBackground source={{uri: ImagesUrisEnum.backgroundImage.value}} resizeMode="cover" style={styles.image}>
      
     
      <ScrollView>
        <Text style={styles.TEXTO}>Registro de Usuarios</Text>
        <View style={styles.views}>
          <Icon   name={RegisterInputsIcons.registerEmail.value} size={30} color="#1eb6fa" style={{marginLeft:10}}/>
         <TextInput
          placeholder={PlaceholdersEnum.registerEmail.value}
          placeholderTextColor={"#1899c5"}
          value={userRegister.email}
          textContentType={TextInputEnum.registerEmail.value}
          onChangeText={(e) => setUserSend({...userRegister, email: e})}
          style={styles.inputs}/>
        </View>
        <View style={styles.views}>
          <Icon   name={RegisterInputsIcons.registerPassword.value} size={35} color="#1eb6fa"  style={{marginLeft:10}}/>
         <TextInput
          placeholder={PlaceholdersEnum.registerPassword.value}
          placeholderTextColor={"#1899c5"}
          value={userRegister.Password}
          secureTextEntry
          textContentType={TextInputEnum.registerPassword.value}
          onChangeText={(e) => setUserSend({...userRegister, Password: e})}
          style={styles.inputs}/>
        </View>
        <View style={styles.views}>
          <Icon   name={RegisterInputsIcons.registerName.value} size={35} color="#1eb6fa"  style={{marginLeft:10}}/>
        <TextInput
          placeholder={PlaceholdersEnum.registerName.value}
          placeholderTextColor={"#1899c5"}
          value={userRegister.name}
          textContentType={TextInputEnum.registerName.value}
          onChangeText={(e) => setUserSend({...userRegister, name: e})}
          style={styles.inputs}/>
        </View>
        <View style={styles.views}>
           <Icon   name={RegisterInputsIcons.registerAddress.value} size={30} color="#1eb6fa" style={{marginLeft:10}}/>
          <TextInput
            placeholder={PlaceholdersEnum.registerAddress.value} 
            placeholderTextColor={"#1899c5"}
            value={userRegister.address}
            textContentType={TextInputEnum.registerAddress.value}
            onChangeText={(e) => setUserSend({...userRegister, address: e})}
            style={styles.inputs}/>
        
        </View>
        <Text style={styles.note}>{estado}</Text>
        <View>{isLoading === ActivityStateEnum.on.value ? <ActivityIndicator size="large" color="#1899c5"/> : <Text/>}</View>
        <Button style={styles.botton}
          title={'Registrar'}
          onPress={()=>registro()}
        />
        

      </ScrollView>
    </ImageBackground>
      
      
    
  )
}

export default Register