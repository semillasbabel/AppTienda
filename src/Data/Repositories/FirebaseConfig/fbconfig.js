import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCGwEyt9GUtwfvacDfg02VMlxsMc095tz4",
  authDomain: "apptienda-7012d.firebaseapp.com",
  projectId: "apptienda-7012d",
  storageBucket: "apptienda-7012d.appspot.com",
  messagingSenderId: "437095570210",
  appId: "1:437095570210:web:cf452d672d2e0f7110637b",
  measurementId: "G-GTC2L7SB4C"
};

// Initialize Firebase
let firebaseApp;
let auth;

if (getApps().length < 1) {
  firebaseApp = initializeApp(firebaseConfig);
  auth = initializeAuth(firebaseApp, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} else {
  firebaseApp = getApp();
  authentication = getAuth();
}

const database = getFirestore();

export { firebaseApp, auth, database };