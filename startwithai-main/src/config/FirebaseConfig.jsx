import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUkMtG36OMAENof-il_rSTXli2juPaCAk",
  authDomain: "ai-trip-83c80.firebaseapp.com",
  databaseURL: "https://ai-trip-83c80-default-rtdb.firebaseio.com",
  projectId: "ai-trip-83c80",
  storageBucket: "ai-trip-83c80.firebasestorage.app",
  messagingSenderId: "980296671678",
  appId: "1:980296671678:web:5619d70df4077be545d9ef",
  measurementId: "G-L0KRRB7DL5"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
