import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage"
import { getAuth } from 'firebase/auth';

import { keysFirebase } from "./constants.js"

const firebaseConfig = {
  apiKey: keysFirebase.constapiKey,
  authDomain: keysFirebase.constauthDomain,
  projectId: keysFirebase.constprojectId,
  storageBucket: keysFirebase.conststorageBucket,
  messagingSenderId: keysFirebase.constmessagingSenderId,
  appId: keysFirebase.constappId,
  measurementId: keysFirebase.constmeasurementId
};

// Initialize Firebase
let firebaseApp;
if (getApps().length < 1) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
}

const storage = getStorage(firebaseApp);

const database = getFirestore();

const auth = getAuth(firebaseApp);

export { firebaseApp, database, storage, auth };