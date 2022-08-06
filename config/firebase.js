import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBonjhECRBNnEB3BGQmZ42CPbalB9qfBMQ",
  authDomain: "dashboard-ui-auth.firebaseapp.com",
  projectId: "dashboard-ui-auth",
  storageBucket: "dashboard-ui-auth.appspot.com",
  messagingSenderId: "672274455242",
  appId: "1:672274455242:web:2f82ff385ea5d36e91f233",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;
export const database=getFirestore(app)