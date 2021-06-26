import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAmvOu9Yn7yh8WHVw8nBmeL39YFDLERs2k",
  authDomain: "amima-5a62b.firebaseapp.com",
  projectId: "amima-5a62b",
  storageBucket: "amima-5a62b.appspot.com",
  messagingSenderId: "166679900914",
  appId: "1:166679900914:web:486f49c1b50ad0014a566b",
  measurementId: "G-XBBLSCJN8L"
};

function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
}

initFirebase();

export { firebase }