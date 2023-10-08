import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
 // You firebase config goes here
 // Go to Firebase project -> Project Overview -> Project Settings -> scroll to bottom in General tab -> copu `firebaseConfig` data and paste here
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
