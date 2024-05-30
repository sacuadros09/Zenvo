import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



export const firebaseConfig = {
  apiKey: "AIzaSyDT3bw3JTwY_33tjnVAK28eclhZ76iD8Xg",
  authDomain: "zenvo-programwb.firebaseapp.com",
  projectId: "zenvo-programwb",
  storageBucket: "zenvo-programwb.appspot.com",
  messagingSenderId: "78605472105",
  appId: "1:78605472105:web:752f34c56510f14c436df8"
};

  const app = initializeApp(firebaseConfig);
  
    export const storage = getStorage(app);
    export const db = getFirestore(app);
    export const auth = getAuth(app);


