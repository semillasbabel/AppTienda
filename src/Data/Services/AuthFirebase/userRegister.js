import { firebaseApp, database } from '../../Repositories/FirebaseConfig/fbconfig'; 
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc} from 'firebase/firestore';
const auth = getAuth(firebaseApp);

export async function userRegister(email, password, name = "", address = ""){
    let error = true;
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userFirebase)=>{
        const docuRef = doc(database, `users/${userFirebase.user.uid}` )
        setDoc(docuRef, {
            email: email,
            name: name,
            address: address,
            rol: "User"
        })
    })
    .catch(() => {
        error = false;
    })

    return error;
    
}