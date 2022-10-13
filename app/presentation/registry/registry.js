import { View, Text, ImageBackground, ActivityIndicator, ScrollView, TextInput, Alert } from 'react-native'
import React from 'react'
import { Button} from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RegisterStateNote } from '../enums/registerKeys';
import { AppImages } from "../enums/appImages";
import { AppActivityIndicator } from "../enums/appActivityIndicator"
import { PlaceholdersEnum, TextInputEnum, RegisterInputsIcons } from "../enums/inputsEnum"
import { styles } from './styles/styles';
import {RegistryServiceDomain} from "../../domain/registry/service/registryService";
import { validateEmail, validatePassword } from "../enums/expresionesRegulares"

const Register = () => {
  const navigation = useNavigation();
  const registry = new RegistryServiceDomain();
  const [estado, setEstado] = React.useState(RegisterStateNote.inicial.value);
  const [note, setNote] = React.useState("");
  const [isLoading, setLoading] = React.useState(AppActivityIndicator.off.value);
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    name: "",
    address: "",
  }); 

  async function registro(){
    if (validate()) {
      setNote("");
      setLoading(AppActivityIndicator.on.value)
      if (await registry.registry(user.email, user.password, user.name, user.address)){
        Alert.alert(RegisterStateNote.registroExitoso.value)
        setUser({email: "", Password: "", name: "", address: ""})
        setEstado(RegisterStateNote.inicial.value)
        setLoading(AppActivityIndicator.off.value)
        navigation.goBack()
      }
      else{
        setLoading(AppActivityIndicator.off.value)
        setEstado(RegisterStateNote.error.value)
      }
    }
  }

  function validate(){
    if(!validateEmail(user.email)){
      setNote("El correo es incorrecto")
      return false;
    }
    if(!validatePassword(user.password)){
      Alert.alert("","La contraseña debe incluir al menos una mayuscula, un digito y un caracter especial")
      setNote("La contraseña no contiene el formato correcto")
      return false;
    }

    if (user.name === "") {
      setNote("El campo nombre se encuentra vacío")
      return false;
    }

    if (user.address === "") {
      setNote("El campo dirección se encuentra vacío")
      return false;
    }
    return true
  }

  function volver(){
    navigation.goBack();
    setUser({...user, email:"", password: "", name:"", address:""})
  }


  return (
   
    <ImageBackground source={{uri: AppImages.backgroundImage.value}} resizeMode="cover" style={styles.image}>
     
    
      <ScrollView>

        <Text style={styles.TEXTO}>Registro de Usuarios</Text>

        <Text style={styles.note}>{estado}</Text>

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

        <Text style={{color:"red", fontSize:20, alignSelf:"center"}}>{note}</Text>
        <View>{isLoading === AppActivityIndicator.on.value ? <ActivityIndicator size="large" color="#1899c5"/> : <Text/>}</View>
        
        <View style={{width: 200, alignSelf:"center"}}>
          <Button style={styles.botton}
            title={'Registrar'}
            onPress={()=>registro()}
          />
        </View>
        
        <View style={{width: 200, alignSelf:"center", marginTop: 20}}>
          <Button style={styles.botton}
            title={'Volver'}
            onPress={()=>volver()}/>
        </View>
        
        
       
      </ScrollView>
    </ImageBackground>
      
      
    
  )
}

export default Register