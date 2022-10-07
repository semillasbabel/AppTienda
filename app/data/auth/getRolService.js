import { database } from "../firebaseConfig/config";
import { doc, getDoc } from 'firebase/firestore';

export async function getRolServiceData(uid){
    //Busqueda del id del Rol en la colección users
    const userRef = doc(database, `users/${uid}`)
    const userDocCifrado = await getDoc(userRef);
    const _rolIdUser = userDocCifrado.data().rol;

    //Busqueda del rol en la colección rols con el ID obtenido anteriormente
    const rolRef = doc(database, `rols/${_rolIdUser}`)
    const rolDocCifrado = await getDoc(rolRef);
    return rolDocCifrado.data().name;
}