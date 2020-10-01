import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5a6zW7PuV5HAJtFcHII-t3dNF9FhhaXY",
    authDomain: "jhtmsite.firebaseapp.com",
    databaseURL: "https://jhtmsite.firebaseio.com",
    projectId: "jhtmsite",
    storageBucket: "jhtmsite.appspot.com",
    messagingSenderId: "282263480795",
    appId: "1:282263480795:web:e7f2ce7c3bfb84f0afdffe",
    measurementId: "G-FZF59PR42L"
};
let app = firebase.initializeApp(firebaseConfig)
export const db = app.database()
export const dbf = app.firestore()
export const storage = firebase.storage();
export const firebaseAuth = app.auth()