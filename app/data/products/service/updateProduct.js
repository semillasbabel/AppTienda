import { doc, updateDoc} from "firebase/firestore"
import { database } from "../../firebaseConfig/config"

export async function updateProductServiceData(data){
    const editRef = doc(database, `product`, `${data.id}`);
      return updateDoc(editRef, {
          "name" : data.name,
          "price" : data.price,
          "description": data.description,
          "amount": data.amount,
          "offert": data.offert,
      }).then(()=>{return true}).catch((e)=>{console.log(e); return false});   
}