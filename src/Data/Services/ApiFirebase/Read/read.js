import { database, firebaseApp } from "../../../Repositories/FirebaseConfig/fbconfig";
import {
  onSnapshot,
  collection,
  addDoc,
  orderBy,
  query,
  where
} from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const auth = getAuth(firebaseApp);  

export function getToFirebase(filter, valueFilter){
  const ref = collection(database, "product");
  return query(ref, where(filter, "==", valueFilter));
}

export function getShoppingCar(){
  const ref = collection(database, `shoppingCar${auth.currentUser.uid}`);
  return query(ref);
}