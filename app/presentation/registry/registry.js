import { View, Text, ImageBackground, ActivityIndicator, ScrollView, TextInput, Alert } from 'react-native'
import React from 'react'
import { Button, Badge, BadgedIcon} from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RegisterStateNote } from '../enums/registerKeys';
import { AppImages } from "../enums/appImages";
import { AppActivityIndicator } from "../enums/appActivityIndicator"
import { PlaceholdersEnum, TextInputEnum, RegisterInputsIcons } from "../enums/inputsEnum"
import { styles } from './styles/styles';
import {RegistryServiceDomain} from "../../domain/registry/service/registryService";
import { TouchableOpacity } from 'react-native-gesture-handler';

const Register = () => {
  const navigation = useNavigation();
  const registry = new RegistryServiceDomain();
  const [estado, setEstado] = React.useState(RegisterStateNote.inicial.value);
  const [isLoading, setLoading] = React.useState(AppActivityIndicator.off.value);
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    name: "",
    address: "",
  }); 

  async function registro(){
    setLoading(AppActivityIndicator.on.value)
    if (await registry.registry(user.email, user.password, user.name, user.address)){
      Alert.alert(RegisterStateNote.registroExitoso.value)
      setUserSend({email: ClearRegisterData.clear.value, Password: ClearRegisterData.clear.value, name: ClearRegisterData.clear.value, address: ClearRegisterData.clear.value})
      setEstado(RegisterStateNote.inicial.value)
      setLoading(AppActivityIndicator.off.value)
      navigation.goBack()
    }
    else{
      setLoading(AppActivityIndicator.off.value)
      setEstado(RegisterStateNote.error.value)
    }
  }

  return (
   
    <ImageBackground source={{uri: AppImages.backgroundImage.value}} resizeMode="cover" style={styles.image}>
     
    
      <ScrollView>

        <Text style={styles.TEXTO}>Registro de Usuarios</Text>

        <View style={styles.views}>
          <Icon   name={RegisterInputsIcons.registerEmail.value} size={30} color="#1eb6fa" style={{marginLeft:10}}/>
          <TextInput
            placeholder={PlaceholdersEnum.registerEmail.value}
            placeholderTextColor={"#1899c5"}
            value={user.email}
            textContentType={TextInputEnum.registerEmail.value}
            onChangeText={(e) => setUser({...user, email: e})}
            style={styles.inputs}
          /> 
        </View>

        <View style={styles.views}>
          <Icon   name={RegisterInputsIcons.registerPassword.value} size={35} color="#1eb6fa"  style={{marginLeft:10}}/>
          <TextInput
            placeholder={PlaceholdersEnum.registerPassword.value}
            placeholderTextColor={"#1899c5"}
            value={user.Password}
            secureTextEntry
            textContentType={TextInputEnum.registerPassword.value}
            onChangeText={(e) => setUser({...user, password: e})}
            style={styles.inputs}
          />
        </View>

        <View style={styles.views}>
          <Icon   name={RegisterInputsIcons.registerName.value} size={35} color="#1eb6fa"  style={{marginLeft:10}}/>
          <TextInput
            placeholder={PlaceholdersEnum.registerName.value}
            placeholderTextColor={"#1899c5"}
            value={user.name}
            textContentType={TextInputEnum.registerName.value}
            onChangeText={(e) => setUser({...user, name: e})}
            style={styles.inputs}
          />
        </View>

        <View style={styles.views}>
           <Icon   name={RegisterInputsIcons.registerAddress.value} size={30} color="#1eb6fa" style={{marginLeft:10}}/>
            <TextInput
              placeholder={PlaceholdersEnum.registerAddress.value} 
              placeholderTextColor={"#1899c5"}
              value={user.address}
              textContentType={TextInputEnum.registerAddress.value}
              onChangeText={(e) => setUser({...user, address: e})}
              style={styles.inputs}
            />
        </View>

        <Text style={styles.note}>{estado}</Text>
        <View>{isLoading === AppActivityIndicator.on.value ? <ActivityIndicator size="large" color="#1899c5"/> : <Text/>}</View>
        
        <View style={{width: 200, alignSelf:"center"}}>
          <Button style={styles.botton}
            title={'Registrar'}
            onPress={()=>registro()}
          />
        </View>
        
        <View style={{width: 200, alignSelf:"center"}}>
          <Button style={styles.botton}
            title={'Volver'}
            onPress={()=>navigation.goBack()}/>
        </View>
        
        
       
      </ScrollView>
    </ImageBackground>
      
      
    
  )
}

export default Register