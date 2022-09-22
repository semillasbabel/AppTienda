import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "../../Repositories/FirebaseConfig/fbconfig";

const auth = getAuth(firebaseApp);

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
