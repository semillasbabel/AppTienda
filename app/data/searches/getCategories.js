import {collection, query, where} from "firebase/firestore";
import { SearchesEnums } from "../enums/searchesEnums"
import { database } from "../firebaseConfig/config";


export function getCategories(filter, valueFilter){
  const ref = collection(database, SearchesEnums.nameProductsCollection.value);
  return query(ref, where(filter, "==", valueFilter));
}