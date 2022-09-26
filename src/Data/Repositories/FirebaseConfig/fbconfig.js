import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { keysFirebase } from "./constants"

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

const database = getFirestore();

export { firebaseApp, database };