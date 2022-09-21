import { database } from "../../../Repositories/FirebaseConfig/fbconfig";
import {
  doc,
  deleteDoc,
} from "firebase/firestore";

export const deleteTask = async (id) => {
    const ref = doc(database, "productos", id);
    deleteDoc(ref);
  };