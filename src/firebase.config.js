import{getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'



import { getAuth } from "firebase/auth";


const firebaseConfig = {

    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  
    authDomain: "gym-app-aa244.firebaseapp.com",
  
    databaseURL: "https://gym-app-aa244-default-rtdb.firebaseio.com",
  
    projectId: "gym-app-aa244",
  
    storageBucket: "gym-app-aa244.appspot.com",
  
    messagingSenderId: "141667570195",
  
    appId: "1:141667570195:web:fa9c28ad90b90323fa25e6"
  
  };
  
  

  const app = getApps.length > 0? getApp(): initializeApp(firebaseConfig) 
  const firestore = getFirestore(app)
  const storage = getStorage(app)
  const auth = getAuth()
 
  export {app, firestore, storage,auth};