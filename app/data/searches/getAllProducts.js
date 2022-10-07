import {collection, query} from "firebase/firestore";
import { SearchesEnums } from "../enums/searchesEnums"
import { database } from "../firebaseConfig/config";

export function getAllProducts(){
  const ref = collection(database, SearchesEnums.nameProductsCollection.value);
  return query(ref);
} 
