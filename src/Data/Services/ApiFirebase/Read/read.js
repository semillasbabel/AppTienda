import { database } from "../../../Repositories/FirebaseConfig/fbconfig";
import {
  onSnapshot,
  collection,
  addDoc,
  orderBy,
  query,
  where
} from "firebase/firestore";

export function getToFirebase(filter, valueFilter){
  const ref = collection(database, "product");
  return query(ref, where(filter, "==", valueFilter));
};