import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../Repositories/FirebaseConfig/fbconfig";

const auth = getAuth(app);

export function handleSingIn(user, password){
    signInWithEmailAndPassword(auth, user, password)
    .then((userCredential)=>{
        const user = userCredential.user
        console.log(user)
    })
    .catch(error => {
        return false;
    })

    return true; 
}
