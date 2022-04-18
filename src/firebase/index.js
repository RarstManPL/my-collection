import { initializeApp } from 'firebase/app'
import { enableIndexedDbPersistence, initializeFirestore, CACHE_SIZE_UNLIMITED } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC2aFmh8kUj-qk4Qfc0xtmC3fQB8u8ptXE",
  authDomain: "mycollection-c3724.firebaseapp.com",
  projectId: "mycollection-c3724",
  storageBucket: "mycollection-c3724.appspot.com",
  messagingSenderId: "909923186604",
  appId: "1:909923186604:web:fe7adc006c4cf07605ac09",
  measurementId: "G-3B6ZX2WJKB"
}

const app = initializeApp(firebaseConfig)

const firestore = initializeFirestore(app, {cacheSizeBytes: CACHE_SIZE_UNLIMITED});
enableIndexedDbPersistence(firestore)

const auth = getAuth(app)
const storage = getStorage(app)

export { firestore, auth, storage }
