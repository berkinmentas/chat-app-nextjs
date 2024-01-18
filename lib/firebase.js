import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJZlS2HU40G2BiIvJKK0AMEFlnYAszKh0",
  authDomain: "chat-app-d0659.firebaseapp.com",
  projectId: "chat-app-d0659",
  storageBucket: "chat-app-d0659.appspot.com",
  messagingSenderId: "698681533016",
  appId: "1:698681533016:web:2f1e2449ef76cbf91c602d",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth };
