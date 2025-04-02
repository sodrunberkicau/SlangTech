import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
import { getStorage } from "firebase/storage"
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth"

/**
 * Konfigurasi Firebase
 * Berisi kredensial dan pengaturan untuk koneksi ke Firebase
 */
const firebaseConfig = {
  apiKey: "AIzaSyA1Q1-ggG27JiC0nZG6nYXJQgWKC_i2CdE",
  authDomain: "smarthome-fadhil.firebaseapp.com",
  databaseURL: "https://smarthome-fadhil-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smarthome-fadhil",
  storageBucket: "smarthome-fadhil.firebasestorage.app",
  messagingSenderId: "5954062029",
  appId: "1:5954062029:web:7959f8fb9326f845850b84",
  measurementId: "G-B34Z87GMC1",
}

// Inisialisasi variabel Firebase
let app
let database
let storage
let auth

try {
  // Inisialisasi Firebase
  app = initializeApp(firebaseConfig)
  database = getDatabase(app)
  storage = getStorage(app)
  auth = getAuth(app)

  // Atur persistensi ke LOCAL untuk menjaga user tetap login
  if (typeof window !== "undefined") {
    setPersistence(auth, browserLocalPersistence).catch((error) => {
      console.error("Error setting auth persistence:", error)
    })
  }
} catch (error) {
  console.error("Error initializing Firebase:", error)
  // Sediakan fallback atau tangani error dengan tepat
  app = null
  database = null
  storage = null
  auth = null
}

export { app, database, storage, auth }

