import { firebaseApp, database } from '../../Repositories/FirebaseConfig/fbconfig'; 
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc} from 'firebase/firestore';
const auth = getAuth(firebaseApp);

export async function userRegister(email, password, name, address){
    if (_validation(email, password, name, address)) {
        return await createUserWithEmailAndPassword(auth, email, password)
        .then((userFirebase)=>{
            const docuRef = doc(database, `users/${userFirebase.user.uid}` )
            setDoc(docuRef, {
                email: email,
                name: name,
                address: address,
                rol: "User"
            })
            return true;
        })
        .catch(() => {
            return false;
        })
    } else {
        return false;
    }
}

function _validation(email, password, name, address){

    //Validation Email
    switch (email) {
        case "": return false;
        case null: return false;
    }
    
    //Validation Password
    switch (password) {
        case "": return false;
        case null: return false;
    }
    
    //Validation Name
    let expreg = /[a-zA-Z -]/;
    
    if (!expreg.test(auth)){
        return false;
    }
    
    switch (name) {
        case "": return false;
        case null: return false;
    }
    
    // Validation Address
    switch (address) {
        case "": return false;
        case null: return false;
    }
    
    return true;
}

function _validationInsertBd(email, password, name, address){

}