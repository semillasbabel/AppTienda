import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp, database } from "../../Repositories/FirebaseConfig/fbconfig";
import { doc, getDoc } from 'firebase/firestore';

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


export class GetRol{
    #uid;
    #validateSearch = false;
    #rol;

    setUid(uid){
        if (this._uidValidate(uid)) {
            this.#uid = uid;
            this.#validateSearch = true
        } else {
            this.#validateSearch = false
            return false
        }
        return this;
    }
    _uidValidate(uid){
        switch (uid) {
            case "": return false;
            case null: return false;
        }
        if (!isNaN(uid)) {
            return false
        }
        return true;
    }

    async search(){
        if (this.#validateSearch) {
            //Busqueda del id del Rol en la colección users
            const userRef = doc(database, `users/${this.#uid}`)
            const userDocCifrado = await getDoc(userRef);
            const _rolIdUser = userDocCifrado.data().rol;

            //Busqueda del rol en la colección rols con el ID obtenido anteriormente
            const rolRef = doc(database, `rols/${_rolIdUser}`)
            const rolDocCifrado = await getDoc(rolRef);
            this.#rol = rolDocCifrado.data().name;

        } else {
            this.#rol = "false"
            return false
        }

        return this
    }

    get getRol(){
        return this.#rol;
    }

}