import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDf-i3-kecpDpJyG1uR-Jbf0fjXMPhO54U",
    authDomain: "construyo-coding-challenge.firebaseapp.com",
    databaseURL: "https://construyo-coding-challenge.firebaseio.com",
    projectId: "construyo-coding-challenge",
    storageBucket: "construyo-coding-challenge.appspot.com",
    messagingSenderId: "275103082078",
    appId: "1:275103082078:web:3d55c84dee230264"
}

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();