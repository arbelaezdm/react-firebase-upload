
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyAKi4k-2xScyTD_-seNhGN-z2YbIsG6G2g",
  authDomain: "react-firebase-6603a.firebaseapp.com",
  projectId: "react-firebase-6603a",
  storageBucket: "react-firebase-6603a.appspot.com",
  messagingSenderId: "269524874449",
  appId: "1:269524874449:web:a671e8e02e65f038ee41f0"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

/**
 * Upload file to firebase storage
 * @param {File} file the file to upload
 * @returns {Promise<string>} url of the uploaded file
 */

export async function uploadFile(file) {
   const storageRef = ref(storage, v4())
   await uploadBytes(storageRef, file)
   const url = await getDownloadURL(storageRef)
   return url
}