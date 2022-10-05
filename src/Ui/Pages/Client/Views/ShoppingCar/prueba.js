import { database, firebaseApp } from "../../../../../Data/Repositories/FirebaseConfig/fbconfig";
import {
  doc,
  onSnapshot,
  deleteDoc,
  updateDoc,
  collection,
  addDoc,
  orderBy,
  getDoc,
  query,
  setDoc
} from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const auth = getAuth(firebaseApp);  


export const getProductos = async (setProductos) => {
  const ref = collection(database, `shoppingCar${auth.currentUser.uid}`);
  const q = query(ref);

  const unsuscribe = onSnapshot(q, (querySnapshot) => {
    setProductos(
      querySnapshot.docs.map((x) => ({
        id: x.id,
        category: x.data().category,
        description: x.data().description,
        imageurl: x.data().imageurl,
        name: x.data().name,
        offert: x.data().offert,
        amount: x.data().amount,
        price: x.data().price,
        quantity: x.data().quantity,
      }))
    );
  });

  return unsuscribe;
};