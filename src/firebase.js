import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARlX6C6mt6825j0nruOGCQC-JcHKWjKq4",
  authDomain: "plantracker-ucsb.firebaseapp.com",
  projectId: "plantracker-ucsb",
  storageBucket: "plantracker-ucsb.appspot.com",
  messagingSenderId: "86019379890",
  appId: "1:86019379890:web:36bfe4e1e2d0ff0979efab",
  measurementId: "G-CCRZ82FVVL"
};

const app = initializeApp(firebaseConfig);

export default app;

