import { Alert } from 'react-native'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../Repositories/FirebaseConfig/fbconfig";

const auth = getAuth(app);

export function handleSingIn(user, password){
    signInWithEmailAndPassword(auth, user, password)
    .then(()=>{
        console.log("Inicio de sesion!")
        usuario = auth.currentUser.email;
        console.log(`${usuario} userresp`);
    })
    .catch(error => {
        console.log(error);
        return "Error";
    })

    try {
        return auth.currentUser.email;
    } catch (error) {
        return "Error"
    }
}

