import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB_0JHquLEgHcWhC0O7zEW_tYvLvc6EWWA",
  authDomain: "webcarros-3172e.firebaseapp.com",
  projectId: "webcarros-3172e",
  storageBucket: "webcarros-3172e.appspot.com",
  messagingSenderId: "388912285479",
  appId: "1:388912285479:web:964a5cd9ed0ef996be0b02",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);
const storage = getStorage(app);

export {db, storage, auth}