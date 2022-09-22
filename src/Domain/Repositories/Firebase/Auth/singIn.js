import { Alert } from 'react-native'

import { handleSingIn } from "../../../../Data/Services/AuthFirebase/singIn"

import { firebaseApp } from "../../../../Data/Repositories/FirebaseConfig/fbconfig";
import { getAuth} from "firebase/auth";
const auth = getAuth(firebaseApp);


export function controllerSingIn(user, password){

}
