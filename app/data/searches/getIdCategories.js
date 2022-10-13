import {collection, query} from "firebase/firestore";
import { SearchesEnums } from "../enums/searchesEnums"
import { database } from "../firebaseConfig/config";

export function getIdCategories(){
  const ref = collection(database, "category");
  return query(ref);
} 
