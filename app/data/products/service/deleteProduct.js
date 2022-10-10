import { doc, deleteDoc} from "firebase/firestore"
import { database } from "../../firebaseConfig/config"

export function deleteProductServiceData(Id){
    const ref = doc(database, `product`, `${Id.id}`);
    return deleteDoc(ref).then(()=>{return true}).catch(()=>{return false});
}