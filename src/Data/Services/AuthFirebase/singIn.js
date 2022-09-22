import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "../../Repositories/FirebaseConfig/fbconfig";

const auth = getAuth(firebaseApp);

export async function handleSingIn(user, password){
    let error = true;
    await signInWithEmailAndPassword(auth, user, password)
    .then((userCredential)=>{
        const user = userCredential.user
        console.log(user)
    })
    .catch(error => {
        error = false;
    })

    return error;
}
