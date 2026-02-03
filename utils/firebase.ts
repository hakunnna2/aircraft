import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCouaglPZXr9-LP7KBI33ygJHwKcLEi9_c",
  authDomain: "just-plane.firebaseapp.com",
  projectId: "just-plane",
  storageBucket: "just-plane.firebasestorage.app",
  messagingSenderId: "91111934172",
  appId: "1:91111934172:web:25646cfdd3bd2e41fb0c19",
  measurementId: "G-F61DXPVM4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
