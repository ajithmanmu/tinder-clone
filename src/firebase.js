import firebase from 'firebase';

const firebaseConfig = {
    apiKey:"AIzaSyB6Zvz6xed8lr0H4HB0s7WVSfTJVbFf6wA",
    authDomain:"tinder-clone-b13ac.firebaseapp.com",
    databaseURL:"https://tinder-clone-b13ac.firebaseio.com",
    projectId:"tinder-clone-b13ac",
    storageBucket:"tinder-clone-b13ac.appspot.com",
    messagingSenderId:"423267130780",
    appId:"1:423267130780:web:4a6fdad9263f72aa507c59",
    measurementId:"G-ZP1MY35NWH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
