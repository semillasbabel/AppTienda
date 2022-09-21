import { database } from "../../../Repositories/FirebaseConfig/fbconfig";
import {collection, addDoc} from "firebase/firestore";

export const createTask = async (productos) => {
    await addDoc(collection(database, "productos"), {
      ...productos,
    });
  };