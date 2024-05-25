import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebasConfig";
import { getAuth,logfirebase } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const logIn = (formData) => {
    logfirebase(auth, formData.email, formData.password)
      .then(async (userCredential) => {
        const user = userCredential.user
        console.log(user.uid)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.error(errorCode, errorMessage)
      })
  }


    export const auth = getAuth(app);
