import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const config = {
  apiKey: "AIzaSyCv_70uGVwGcuQP65rOxTCVSi6QyQ824pI",
  authDomain: "thesessionfyp.firebaseapp.com",
  projectId: "thesessionfyp",
  storageBucket: "thesessionfyp.appspot.com",
  messagingSenderId: "736735676198",
  appId: "1:736735676198:web:6064a29954c2b68aa6a3e7",
  measurementId: "${config.measurementId}"
}

export const app = initializeApp(config);
export const auth = getAuth(app)
