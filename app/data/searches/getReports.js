import { database } from "../firebaseConfig/config";
import {collection, query, orderBy} from "firebase/firestore";
import { SearchesEnums } from "../enums/searchesEnums"

export function getReports(){
  const ref = collection(database, SearchesEnums.nameReportsCollection.value);
  return query(ref, orderBy(SearchesEnums.OrderReportsBy.value, SearchesEnums.OrderReportsWay.value));
}