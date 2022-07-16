import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDHm4pWAvgzxSAQdPG47HEwKCpcrpp5QnI",
    authDomain: "couture-d86f0.firebaseapp.com",
    projectId: "couture-d86f0",
    storageBucket: "couture-d86f0.appspot.com",
    messagingSenderId: "299125353165",
    appId: "1:299125353165:web:d68c3a8c0191812cc31784",
    measurementId: "G-SEMN06SNV8"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }