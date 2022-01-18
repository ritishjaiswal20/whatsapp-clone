
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBr6KrpcWL8ts_MzZ2ek-OAMSDDk7tj-TE",
    authDomain: "whatsapp-clone-db843.firebaseapp.com",
    projectId: "whatsapp-clone-db843",
    storageBucket: "whatsapp-clone-db843.appspot.com",
    messagingSenderId: "95127313907",
    appId: "1:95127313907:web:2d4597567e2ecf6dce8686",
    measurementId: "G-S6CCX2XCPW"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;