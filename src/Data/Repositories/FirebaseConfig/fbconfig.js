import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBBTT4YQR5I-QmmlcOILPuUmlQ1trs7uts",
  authDomain: "apptienda-ea40c.firebaseapp.com",
  projectId: "apptienda-ea40c",
  storageBucket: "apptienda-ea40c.appspot.com",
  messagingSenderId: "116873939550",
  appId: "1:116873939550:web:ef3c1639dbef8cc5a202cf",
  measurementId: "G-6HHPCET7EK"
};

// Initialize Firebase
let app;
let auth;
if (getApps().length < 1) {
  app = initializeApp(firebaseConfig);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} else {
  app = getApp();
  authentication = getAuth();
}

const database = getFirestore();

export { app, database };