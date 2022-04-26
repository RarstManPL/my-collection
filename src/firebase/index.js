import { initializeApp } from 'firebase/app'
import { initializeFirestore, CACHE_SIZE_UNLIMITED } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)

export const firestore = initializeFirestore(app, { cacheSizeBytes: CACHE_SIZE_UNLIMITED });
export const auth = getAuth(app)
export const storage = getStorage(app)
