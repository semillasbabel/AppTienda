import { database } from "../../../Repositories/FirebaseConfig/fbconfig";
import {
  onSnapshot,
  collection,
  query,
  orderBy,
} from "firebase/firestore";

export const getTasks = async (setProductos) => {
    const ref = collection(database, "productos");
    const q = query(ref, orderBy("name", "desc"));
  
    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      setProductos(
        querySnapshot.docs.map((x) => ({
          id: x.id,
          name: x.data().name,
          price: x.data().price,
        }))
      );
    });
  
    return unsuscribe;
  };