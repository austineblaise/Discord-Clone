import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDb6nbc5FxLSw_6ytC4gIePhz4_SDvmPNw",
    authDomain: "discord-clone-678d5.firebaseapp.com",
    projectId: "discord-clone-678d5",
    storageBucket: "discord-clone-678d5.appspot.com",
    messagingSenderId: "985394288745",
    appId: "1:985394288745:web:bf3ab0cd0091e65ddceaf8",
    measurementId: "G-2NRNL9JWBS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db