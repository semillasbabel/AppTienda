import { database } from "../../../Repositories/FirebaseConfig/fbconfig";
import {
  doc,
  updateDoc,
} from "firebase/firestore";

export const updateTask = async (id, productos) => {
    const ref = doc(database, "productos", id);
    await updateDoc(ref, {
      name: productos.name,
      price: productos.price,
    });
  };