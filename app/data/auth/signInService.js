import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig/config";

export async function SignInServiceData(email, password){
    return signInWithEmailAndPassword(auth, email, password)
    .then(()=>{
        return true
    })
    .catch(() => {
        return false
    })
}