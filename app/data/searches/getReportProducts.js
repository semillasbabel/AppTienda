import {collection, query} from "firebase/firestore";
import { database } from "../firebaseConfig/config";

export function getProducts(reportId){
  const ref = collection(database, `report/${reportId}/Products`);
  return query(ref);
} 
