// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import {createContext} from "react";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import store from "../redux/reduxStore";
import {createFirestoreInstance} from "redux-firestore";

// const firebaseConfig = {
//     apiKey: process.env["REACT_APP_FIREBASE_API_KEY "],
//     authDomain: process.env["REACT_APP_FIREBASE_AUTH_DOMAIN "],
//     projectId: process.env["REACT_APP_FIREBASE_PROJECT_ID "],
//     storageBucket: process.env["REACT_APP_FIREBASE_STORAGE_BUCKET "],
//     messagingSenderId: process.env["REACT_APP_FIREBASE_MESSAGING_SENDER_ID "],
//     appId: process.env["REACT_APP_FIREBASE_API_ID "],
//     measurementId: process.env["REACT_APP_FIREBASE_MEASUREMENT_ID "]
// };

// const firebaseConfig = {
//     apiKey: "AIzaSyDc0u32S42DCNWn4c_ZgVIs7AElfUqcQLE",
//     authDomain: "carlist-68a52.firebaseapp.com",
//     projectId: "carlist-68a52",
//     storageBucket: "carlist-68a52.appspot.com",
//     messagingSenderId: "791594170714",
//     appId: "1:791594170714:web:46a385fa841db14241db63",
//     measurementId: "G-09F143J5CG"
// };
//
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

firebase.initializeApp({
    apiKey: "AIzaSyDc0u32S42DCNWn4c_ZgVIs7AElfUqcQLE",
    authDomain: "carlist-68a52.firebaseapp.com",
    projectId: "carlist-68a52",
    storageBucket: "carlist-68a52.appspot.com",
    messagingSenderId: "791594170714",
    appId: "1:791594170714:web:46a385fa841db14241db63",
    measurementId: "G-09F143J5CG"
});

export const Context = createContext(null)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const firebaseApp = firebase

export const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
}