import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDqJObA_r9Pp_RSVcZiXU8lt7O-3m8fAIQ",
  authDomain: "coderhouse-ecommerce-9bfdc.firebaseapp.com",
  projectId: "coderhouse-ecommerce-9bfdc",
  storageBucket: "coderhouse-ecommerce-9bfdc.appspot.com",
  messagingSenderId: "354422774300",
  appId: "1:354422774300:web:2e59658983a5624b0f1dd9",
});

export const getFirebase = () => {
  return app;
};

// llamar a la BBDD
export const getFirestore = () => {
  return firebase.firestore();
};
