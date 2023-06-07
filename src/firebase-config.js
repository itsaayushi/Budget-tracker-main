import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAs2RjYDicXeJOf9FypM4oCOa6uyMBT_ck",
  authDomain: "budget-tracker-cc54e.firebaseapp.com",
  projectId: "budget-tracker-cc54e",
  storageBucket: "budget-tracker-cc54e.appspot.com",
  messagingSenderId: "92691635733",
  appId: "1:92691635733:web:ac557d5f016b14eb50381c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
