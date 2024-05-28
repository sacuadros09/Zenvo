import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAvl_OFiusuCOySejrxbuHw2W9W8tRvttA",
    authDomain: "zenvo-870e6.firebaseapp.com",
    projectId: "zenvo-870e6",
    storageBucket: "zenvo-870e6.appspot.com",
    messagingSenderId: "456870284310",
    appId: "1:456870284310:web:e92c1eb29a6c0185a2b937",
    measurementId: "G-Y7X6NSQD0Z"
  };

  const app = initializeApp(firebaseConfig);
  
    export const storage = getStorage(app)
    export const db = getFirestore(app);
    export const auth = getAuth(app);
