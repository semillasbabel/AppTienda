import { handleSingIn } from "../../../../Data/Services/AuthFirebase/LogIn_Out/singIn"
import { app } from "../../../../Data/Repositories/FirebaseConfig/fbconfig";
import { getAuth} from "firebase/auth";
import { Alert } from 'react-native'

const auth = getAuth(app);

export function controllerSingIn(user, password){
    if (handleSingIn(user, password)) {

        const retorno = auth.currentUser.email

        if (retorno === "hugo@gmail.com") {
            Alert.alert("", 'Bienvenido Administrador')
            console.log(`${retorno} usuario activo`)
        } else {
            Alert.alert("", `Bienvenido: ${retorno}`)
        }

        return true;

    } else {
        Alert.alert("", 'Correo y contraseña incorrectos')
    }
}
