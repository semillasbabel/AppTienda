import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage"

// import { getAuth, initializeAuth } from "firebase/auth";
// import { getReactNativePersistence } from 'firebase/auth/react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

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
let auth;
if (getApps().length < 1) {
  firebaseApp = initializeApp(firebaseConfig);
  // auth = initializeAuth(firebaseApp, {
  //   persistence: getReactNativePersistence(AsyncStorage),
  // });
} else {
  firebaseApp = getApp();
  // auth = getAuth();
}

const storage = getStorage(firebaseApp);

const database = getFirestore();

export { firebaseApp, database, storage };