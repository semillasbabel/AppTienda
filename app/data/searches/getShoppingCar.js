import { auth, database } from "../firebaseConfig/config";
import {collection, query} from "firebase/firestore";

export function getShoppingCar(){
  const ref = collection(database, `shoppingCar/${auth.currentUser.uid}/Productos`);
  return query(ref);
}

