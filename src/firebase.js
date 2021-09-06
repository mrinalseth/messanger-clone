import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAWuuszF8wdlAEK13NeMy0hYuM8lwnaRPM",
    authDomain: "messanger-clone-914b3.firebaseapp.com",
    projectId: "messanger-clone-914b3",
    storageBucket: "messanger-clone-914b3.appspot.com",
    messagingSenderId: "167603037116",
    appId: "1:167603037116:web:029b6ee4fa7019e59681b9",
    measurementId: "G-SJL9VEW6P1"
})

const db = firebaseApp.firestore()

export default db