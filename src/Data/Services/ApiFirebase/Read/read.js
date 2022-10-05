import { database, firebaseApp } from "../../../Repositories/FirebaseConfig/fbconfig";
import {
  collection,
  query,
  where,
  orderBy
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

export function getAllProducts(){
  const ref = collection(database, `product`);
  return query(ref);
} 

export function getReports(){
  const ref = collection(database, `report`);
  return query(ref, orderBy("createAt", "asc"));
}