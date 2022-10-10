import { database, auth } from "../firebaseConfig/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { RegistryEnums } from "../enums/registryEnums"

export async function RegistryServiceData(email, password, name, address){
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userFirebase)=>{
        const usersRef = doc(database, `users/${userFirebase.user.uid}` )
        setDoc(usersRef, {
            email: email,
            name: name,
            address: address,
            rol: RegistryEnums.defaultRol.value
        }).then(()=>{}).catch(()=>{})
        return true;
    })
    .catch(() => {
        return false;
    })
}