import { database } from "../../../Repositories/FirebaseConfig/fbconfig";
import {
  onSnapshot,
  collection,
  addDoc,
  orderBy,
  query
} from "firebase/firestore";

export async function getToFirebase(producttype){
  const ref = collection(database, producttype);
  const q = query(ref, orderBy("name", "desc"));
  return q;
};