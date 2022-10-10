import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig/config";

export async function SignInServiceData(signIn){
    return signInWithEmailAndPassword(auth, signIn.email, signIn.password)
    .then(()=>{
        return true
    })
    .catch(() => {
        return false
    })
}