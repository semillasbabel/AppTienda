import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "../../Repositories/FirebaseConfig/fbconfig";
const auth = getAuth(firebaseApp);

export async function handleSignIn(user, password){

    return await signInWithEmailAndPassword(auth, user, password)
    .then((userCredential)=>{
        return true
    })
    .catch(error => {
        return false
    })
}